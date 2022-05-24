import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { Container } from "react-bootstrap";
import styled from "styled-components";
import ProgressBar from "../../components/ProgressBar";
import RegisterForm from "../../components/RegisterForm";
import { AuthCard } from "../../lib/components/AuthCard";
import { ButtonWithImageAndText } from "../../lib/components/ButtonWithImageAndText";
import { Rack } from "../../lib/components/Rack";

interface Props {}

const enum SignUpMethodEnum {
    EMAIL = "EMAIL",
    GMAIL = "GMAIL",
}

const RegisterPage = (props: Props) => {
    const selectSignUpHandler = function (signUpMethod: SignUpMethodEnum) {};
    return (
        <>
            <ProgressBar percentComplete={10}></ProgressBar>

            <Rack>
                <main>
                    <AuthCard>
                        <h1 className="mb-4">How do you want to sign up?</h1>
                        <ButtonWithImageAndText
                            onClick={() =>
                                selectSignUpHandler(SignUpMethodEnum.GMAIL)
                            }
                            disabled={true}
                        >
                            <Image src="/icons/google-icon.svg" alt="" height="24px" width="24px"/> Sign Up
                            with Google
                        </ButtonWithImageAndText>

                        <Link href="/register/email">
                            <ButtonWithImageAndText
                                className="mt-3"
                                onClick={() =>
                                    selectSignUpHandler(SignUpMethodEnum.EMAIL)
                                }
                                disabled={false}
                            >
                                <Image src="/icons/email-icon.svg" alt="" height="24px" width="24px"/> Sign
                                Up with Email
                            </ButtonWithImageAndText>
                        </Link>
                    </AuthCard>
                </main>
            </Rack>
        </>
    );
};

export default RegisterPage;
