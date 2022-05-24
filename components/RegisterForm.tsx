import { ReactElement, useState } from "react";
import * as Yup from "yup";
import styled from "styled-components";
import authenticationService, {
    PasswordTypeEnum,
    AuthFormValues,
} from "../lib/services/AuthService";
import { FormikProps, useFormik } from "formik";
import { TextField } from "../lib/components/TextField";
import { TextFieldWithIcon } from "../lib/components/TextFieldWithIcon";
import RequirementsHint from "./requirement-hints/RequirementsHint";
import Image from "next/image";
import { AuthCard } from "../lib/components/AuthCard";
import { Button } from "../lib/components/Button";
import { ErrorMessage } from "../lib/components/ErrorMessage";
import { determinePasswordRequirementFlags } from "../lib/utilities/check-password-requirements";
import {
    getFormErrorMessage,
    showFormErrorMessage,
} from "../lib/utilities/show-form-error-message";

const enum RegisterFormMessages {
    USER_ALREADY_EXIST = "User already exists, please try a new user.",
}

const StyledForm = styled.form`
    .form-body {
        background-color: white;
        border-radius: 10px;
    }
`;

const ErrorMessageSchema = Yup.object().shape({
    emailAddress: Yup.string()
        .email("Please enter a valid email address to continue.")
        .required("Please enter an email address to continue."),
    password: Yup.string()
        .min(8, "Password must be at least 8 characters.")
        .required("Please enter a password to continue.")
        .matches(
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*()?&]{8,}$/,
            "Password doesn't meet all the requirements."
        ),
});

interface Props {}
export default function RegisterForm({}: Props): ReactElement {
    const [passwordInputType, setPasswordInputType] =
        useState<PasswordTypeEnum>(PasswordTypeEnum.PASSWORD);
    const [formMessage, setFormMessage] = useState<RegisterFormMessages>();

    const onVisibilityToggleHandler = () => {
        setPasswordInputType(
            passwordInputType === PasswordTypeEnum.PASSWORD
                ? PasswordTypeEnum.TEXT
                : PasswordTypeEnum.PASSWORD
        );
    };

    const registerFormik: FormikProps<AuthFormValues> =
        useFormik<AuthFormValues>({
            initialValues: {
                emailAddress: "",
                password: "",
            },
            validationSchema: ErrorMessageSchema,
            onSubmit: async (registerFormValues: AuthFormValues) => {
                authenticationService
                    .signUp(registerFormValues)
                    .then((response) => {})
                    .catch((err) => {
                        if (err.response) {
                            console.debug(
                                "~~~ RegisterForm/onSubmit() ~~~ Error while trying to sign up"
                            );
                            switch (err.response.statusCode) {
                                case 409:
                                    setFormMessage(
                                        RegisterFormMessages.USER_ALREADY_EXIST
                                    );
                                    break;
                                default:
                                    setFormMessage(
                                        RegisterFormMessages.USER_ALREADY_EXIST
                                    );
                            }
                        } else if (err.request) {
                            console.error(
                                "Register Form: onSubmit(): Request was made but no response",
                                err
                            );
                        } else {
                            console.error(
                                "Register Form: onSubmit(): Something happened in setting up the error",
                                err
                            );
                        }
                    });
            },
        });

    return (
        <StyledForm onSubmit={registerFormik.handleSubmit}>
            <AuthCard>
                <div className="form-body">
                    <TextField
                        hasError={showFormErrorMessage(
                            registerFormik,
                            "emailAddress"
                        )}
                    >
                        <label htmlFor="emailAddress">Email</label>
                        <input
                            id="emailAddress"
                            name="emailAddress"
                            type="text"
                            className={
                                showFormErrorMessage(
                                    registerFormik,
                                    "emailAddress"
                                )
                                    ? "input__error"
                                    : ""
                            }
                            onChange={registerFormik.handleChange}
                            value={registerFormik.values.emailAddress}
                        />
                    </TextField>
                    <ErrorMessage>
                        {getFormErrorMessage(registerFormik, "emailAddress")}
                    </ErrorMessage>

                    <TextFieldWithIcon
                        hasError={showFormErrorMessage(
                            registerFormik,
                            "password"
                        )}
                        className="mt-4"
                    >
                        <label htmlFor="password">Password</label>
                        <div className="input-field">
                            <input
                                id="password"
                                name="password"
                                type={passwordInputType}
                                autoComplete="password"
                                onChange={registerFormik.handleChange}
                                value={registerFormik.values.password}
                            />
                            <button
                                onClick={() => onVisibilityToggleHandler()}
                                type="button"
                            >
                                <Image
                                    src={
                                        passwordInputType ===
                                        PasswordTypeEnum.PASSWORD
                                            ? "/icons/eye-reveal.svg"
                                            : "/icons/eye-hide.svg"
                                    }
                                    alt="Show Password"
                                    width="32px"
                                    height="32px"
                                />
                            </button>
                        </div>
                    </TextFieldWithIcon>
                    <ErrorMessage>
                        {getFormErrorMessage(registerFormik, "password")}
                    </ErrorMessage>

                    <ErrorMessage>{formMessage}</ErrorMessage>

                    <p className="form-error-message"></p>

                    <div className="requirements-section mt-5">
                        <RequirementsHint
                            requirementFlags={determinePasswordRequirementFlags(
                                registerFormik.values.password
                            )}
                        />
                    </div>
                </div>
            </AuthCard>

            <div className="form-actions mt-3 d-flex justify-content-end">
                <Button type="submit">Continue</Button>
            </div>
        </StyledForm>
    );
}
