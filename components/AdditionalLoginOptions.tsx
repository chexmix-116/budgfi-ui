import Link from "next/link";
import React from "react";
import styled from "styled-components";
import { Button, ButtonModeEnum, ButtonStyleEnum } from "../lib/components/Button";


const StyledSection = styled.section`
    h2{
        font-size: 20px;
        font-weight: 600;
    }
`;
interface Props {}

const AdditionalLoginOptions = (props: Props) => {
    return (
        <StyledSection id="dont-have-an-account-options" className="mt-5">
            <h2>Don't have an account?</h2>
            <Link href="/register">
                <Button buttonStyle={ButtonStyleEnum.OUTLINE} mode={ButtonModeEnum.INLINE} className="mt-3">Create an Account</Button>
            </Link>
        </StyledSection>
    );
};

export default AdditionalLoginOptions;
