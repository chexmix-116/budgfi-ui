import React, { useEffect, useState } from "react";
import styled from "styled-components";
import DatePicker from "../../lib/components/DatePicker";
import Dropdown from "../../lib/components/Dropdown";
import { TableDataCell } from "../../lib/components/TableDataCell";

export interface Category {
    text: string;
    value: string;
}

const TableData = styled.td`
    background: linear-gradient(to bottom, white, white 15%, #F1F2F3 15%, #F1F2F3 85%, white 85%, white);
    padding: 25px 16px;
`;

const InlineInput = styled.input`
    background-color: white;
    border: 1px solid #e8e8e8;
    border-radius: 5px;
    padding: 12.5px 12px;
`;

interface Props {
    isDraft: boolean;
    categories: Category[];
}

const Transaction = (props: Props) => {
    return (
        <tr>
            <TableData>
                <DatePicker />
            </TableData>
            <TableData>
                <Dropdown>
                    {props.categories.map(({ text, value }) => {
                        return (
                            <option value={value} key={value}>
                                {text}
                            </option>
                        );
                    })}
                </Dropdown>
            </TableData>
            <TableData>
                <InlineInput type="text" placeholder="Description" />
            </TableData>
            <TableData>
                <InlineInput type="number" placeholder="Amount" />
            </TableData>
        </tr>
    );
};

export default Transaction;
