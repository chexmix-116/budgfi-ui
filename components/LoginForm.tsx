import { FormikProps, useFormik } from "formik";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import styled from "styled-components";
import * as Yup from "yup";
import { Button, ButtonModeEnum } from "../lib/components/Button";
import { ErrorMessage } from "../lib/components/ErrorMessage";
import { TextField } from "../lib/components/TextField";
import { TextFieldWithIcon } from "../lib/components/TextFieldWithIcon";
import authenticationService, { AuthFormValues, PasswordTypeEnum } from "../lib/services/AuthService";
import {
    getFormErrorMessage,
    showFormErrorMessage,
} from "../lib/utilities/show-form-error-message";

const enum LoginFormMessages {
    AUTHENTICATION_FAILED = "Unable to login. Email or password were invalid.",
}

const StyledForm = styled.form`
    display: flex;
    flex-direction: column;

    h1 {
        font-size: 24px;
        font-weight: 600;
        margin-bottom: 15px;
    }

    a {
        font-size: 18px;
    }
`;

const ErrorMessageSchema = Yup.object().shape({
    emailAddress: Yup.string()
        .email("Please enter a valid email address to continue.")
        .required("Please enter an email address to continue."),
    password: Yup.string().required("Please enter a password to continue."),
});

export default function LoginForm() {
    const [passwordInputType, setPasswordInputType] = useState<PasswordTypeEnum>(PasswordTypeEnum.PASSWORD);

    const [formMessage, setFormMessage] = useState<LoginFormMessages>();

    const onVisibilityToggleHandler = () => {
        setPasswordInputType(
            passwordInputType === PasswordTypeEnum.PASSWORD
                ? PasswordTypeEnum.TEXT
                : PasswordTypeEnum.PASSWORD
        );
    };

    const loginForm: FormikProps<AuthFormValues> = useFormik<AuthFormValues>({
        initialValues: {
            emailAddress: "",
            password: "",
        },
        validationSchema: ErrorMessageSchema,
        onSubmit: async (formValues: AuthFormValues) => {
            const res = await authenticationService.login(formValues);
            const data = res.data;
            console.log("Data:", data)
        },
    });
    return (
        <StyledForm onSubmit={loginForm.handleSubmit}>
            <h1>Login</h1>

            <TextField
                hasError={showFormErrorMessage(loginForm, "emailAddress")}
            >
                <label htmlFor="email">Email</label>
                <input
                    id="emailAddress"
                    type="text"
                    name="emailAddress"
                    placeholder="name@website.com"
                    className={
                        showFormErrorMessage(loginForm, "emailAddress")
                            ? "input__error"
                            : ""
                    }
                    onChange={loginForm.handleChange}
                    value={loginForm.values.emailAddress}
                />
            </TextField>
            <ErrorMessage>
                {getFormErrorMessage(loginForm, "emailAddress")}
            </ErrorMessage>

            <TextFieldWithIcon
                hasError={showFormErrorMessage(loginForm, "password")}
                className="mt-4"
            >
                <label htmlFor="password">Password</label>
                <div className="input-field">
                    <input
                        id="password"
                        name="password"
                        type={passwordInputType}
                        autoComplete="password"
                        onChange={loginForm.handleChange}
                        value={loginForm.values.password}
                        placeholder="your password"
                    />
                    <button
                        onClick={() => onVisibilityToggleHandler()}
                        type="button"
                    >
                        <Image
                            src={
                                passwordInputType === PasswordTypeEnum.PASSWORD
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
                {getFormErrorMessage(loginForm, "password")}
            </ErrorMessage>

            <Button className="w-100 mt-5" mode={ButtonModeEnum.INLINE}>
                Login
            </Button>

            <Link href="login/help" c>
                <a className="d-block mt-3 text-end">Need help logging in?</a>
            </Link>
        </StyledForm>
    );
}
