import Image from "next/image";
import React from "react";
import styled from "styled-components";

const StyledAddTransactionButton = styled.button`
    background-color: #f1f2f3;
    border-radius: 8px;
    border: 1px solid #e8e8e8;
    padding: 12px 16px;
    width: 100%;
    text-align: left;
    font-size: 16px;
    display: flex;
    align-items: center;
`;

interface Props {
    addTransactionHandler: () => void;
}

const AddTransaction = (props: Props) => {
    return (
        <tr>
            <td colSpan={4}>
                <StyledAddTransactionButton
                    className="my-3"
                    onClick={props.addTransactionHandler}
                >
                    <Image
                        src="/icons/plus.svg"
                        height="24px"
                        width="24px"
                    ></Image>
                    <div className="ms-2">Add New Transaction</div>
                </StyledAddTransactionButton>
            </td>
        </tr>
    );
};

export default AddTransaction;
