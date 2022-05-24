// tsraf
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Image from "next/image";
import { useRouter } from "next/router";
import Link from "next/link";

interface HeaderLink {
    text: string;
    path: string;
    type: "button" | "link";
}

const StyledHeader = styled.header`
    h1 {
        color: ${(props) => props.theme.colors.darkGray};
        margin-left: 15px;
        font-size: 32px;
    }
`;

const StyledNavOptionsList = styled.ul`
    display: flex;
    list-style-type: none;
    align-items: center;

    * + * {
        margin-left: 30px;
    }
`;

const StyledLink = styled.a<{ type: "link" | "button" }>`
    font-size: 18px;
    font-weight: bold;
    text-decoration: none;
    color: ${(props) =>
        props.type === "link" ? props.theme.colors.darkGray : "#FFFFFF"};
    background-color: ${(props) =>
        props.type === "link" ? "transparent" : props.theme.colors.blue};
    padding: ${(props) => (props.type === "link" ? "" : "17px 25px")};
    border-radius: ${(props) => (props.type === "link" ? "" : "5px")};
    line-height: 1;
    cursor: pointer;
`;

interface Props {}
export const Header = (props: Props) => {
    const landingPageNavOptions: HeaderLink[] = [
        { text: "About", path: "/about", type: "link" },
        { text: "Login", path: "/login", type: "link" },
        { text: "Sign Up", path: "/register", type: "button" },
    ];

    const otherPageNavOptions: HeaderLink[] = [
        { text: "Transaction", path: "/transactions", type: "link" },
        { text: "Budget", path: "/budgets", type: "link" },
    ];

    const [navOptions, setNavOptions] = useState<HeaderLink[]>(
        landingPageNavOptions
    );

    const router = useRouter();

    useEffect(() => {
        if (router.pathname === "/") {
            setNavOptions(landingPageNavOptions);
        } else {
            setNavOptions(otherPageNavOptions);
        }
    }, [router.pathname]);

    return (
        <StyledHeader className="container py-4 d-flex justify-content-between align-items-center">
            <div className="d-flex align-items-center">
                <Link href="/">
                    <a>
                        <Image
                            src="/images/budgfi-logo.svg"
                            alt="BudgFi Logo - Navigate home"
                            width="36"
                            height="36"
                        />
                    </a>
                </Link>
                {router.pathname === "/" && <h1>BudgFi</h1>}
            </div>

            <StyledNavOptionsList>
                {navOptions.map((_link: HeaderLink) => {
                    return (
                        <li key={_link.text}>
                            <Link href={_link.path}>
                                <StyledLink type={_link.type}>
                                    {_link.text}
                                </StyledLink>
                            </Link>
                        </li>
                    );
                })}
            </StyledNavOptionsList>
            {router.pathname !== "/" && (
                <div className="profileContainer ms-auto">
                    <p>Wan Kim</p>
                </div>
            )}
        </StyledHeader>
    );
};
