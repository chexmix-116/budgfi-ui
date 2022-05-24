import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import styled from "styled-components";
import Search from "../components/transactions/Search";
import { Category } from "../components/transactions/Transaction";
import TransactionTable from "../components/transactions/TransactionTable";
import Select from "../lib/components/Select";

const TransactionSection = styled.main`
    padding: 50px 40px;
    background-color: white;
    border-radius: 10px;

    h1 {
        font-size: 36px;
        font-weight: bold;
    }
`;

interface Props {
    categories: Category[]
}

const TransactionsPage = (props: Props) => {

    useEffect(() => {

    }, []);
    
    return (
        <Container>
            <TransactionSection>
                <Row className="mb-4">
                    <Col>
                        <h1>Transactions</h1>
                    </Col>
                </Row>
                <Row className="justify-content-between mb-4">
                    <Col sm={3}>
                        <Search></Search>
                    </Col>
                    <Col sm={2}>
                        <Select />
                    </Col>
                </Row>
                <TransactionTable categories={props.categories}></TransactionTable>
            </TransactionSection>
        </Container>
    );
};

TransactionsPage.getInitialProps = async () => {
    let categories: Category[] = [
        { text: "Food", value: "food" },
        { text: "Groceries", value: "groceries" },
        { text: "Restaurants", value: "restaurants" },
        { text: "Transportation", value: "transportation" },
        { text: "Insurance", value: "insurance" },
        { text: "Gas/Fuel", value: "gas-fuel" },
        { text: "Maintenance", value: "maintenance" },
    ];

    return { categories };
};

export default TransactionsPage;
