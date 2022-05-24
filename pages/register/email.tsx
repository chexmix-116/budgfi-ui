import React from "react";
import styled from "styled-components";
import ProgressBar from "../../components/ProgressBar";
import RegisterForm from "../../components/RegisterForm";
import { AuthCard } from "../../lib/components/AuthCard";
import { Rack } from "../../lib/components/Rack";

const EmailLayout = styled.main`
    h1 {
        font-size: 24px;
        font-weight: bold;
    }

    h1 + p {
        font-size: 18px;
        color: ${(props) => props.theme.colors.gray};
    }
`;

interface Props {}

const EmailRegisterPage = (props: Props) => {
    return (
        <>
            <Rack>
                <EmailLayout style={{ width: "454px" }}>
                    <h1 className="mb-1">Sign Up</h1>
                    <p className="mb-4">
                        We'll need to collect some more info before we get you
                        situated.
                    </p>
                    <RegisterForm></RegisterForm>
                </EmailLayout>
            </Rack>
            <ProgressBar percentComplete={30}></ProgressBar>
        </>
    );
};

export default EmailRegisterPage;
