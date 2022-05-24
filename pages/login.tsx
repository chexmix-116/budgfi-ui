import Image from "next/image";
import Link from "next/link";
import React from "react";
import styled from "styled-components";
import AdditionalLoginOptions from "../components/AdditionalLoginOptions";
import LoginForm from "../components/LoginForm";
import { AuthCard } from "../lib/components/AuthCard";
import { Rack } from "../lib/components/Rack";

const ButtonWithImageAndText = styled.button`
    display: flex;
    width: 100%;
    justify-content: center;
    align-items: center;
    line-height: 24px;
    padding: 18px 0px;

    img {
        margin-right: 10px;
    }
`;

const LinkStyledAsButton = styled.a`
    display: flex;
    width: 100%;
    justify-content: center;
    align-items: center;
    line-height: 24px;
    padding: 18px 0px;
    background-color: transparent;
    border-radius: 5px;
    border: 1px solid #8c8c8c;
    font-size: 18px;
    font-weight: 600;

    &:hover {
        color: initial;
    }
`;

interface Props {}

const LoginPage = (props: Props) => {
    return (
        <Rack>
            <AuthCard>
                <LoginForm></LoginForm>
                <AdditionalLoginOptions/>
            </AuthCard>
        </Rack>
    );
};

export default LoginPage;
