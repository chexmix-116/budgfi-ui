import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { Header } from "./Header";

interface Props {
    children: React.ReactNode;
}

export const Layout = (props: Props) => {
    const [showHeader, setShowHeader] = useState<boolean>();

    const router = useRouter();

    useEffect(() => {
        if (["/register", '/register/email', '/register/gmail', "/login"].indexOf(router.pathname) >= 0) {
            setShowHeader(false);
        } else {
            setShowHeader(true);
        }
    }, [router.pathname]);

    return (
        <>
            { showHeader && <Header /> }
            {props.children}
        </>
    );
};
