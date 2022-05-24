import Image from "next/image";
import React, { useState } from "react";
import { useTable } from "react-table";
import AddTransaction from "./AddTransaction";
import Transaction, { Category } from "./Transaction";

interface Props {
    categories: Category[]
}

const TransactionTable = (props: Props) => {
    const [isDraftActive, setIsDraftActive] = useState<boolean>(false);

    const addNewTransactionHandler = (): void => {
        setIsDraftActive(draftActive => !draftActive);
    }

    const data = React.useMemo(
        () => [
            {
                date: "1/17/2021",
                category: "Utilities",
                description: "DTE Energy",
                amount: 67.18,
            },
            {
                date: "1/17/2021",
                category: "Food & Drinks",
                description: "SQ *SWEETWATERS COFFEE",
                amount: 4.77,
            },
            {
                date: "1/16/2021",
                category: "Parking",
                description: "CITY OF ROCHESTER",
                amount: 2.0,
            },
        ],
        []
    );

    const columns = React.useMemo(
        () => [
            {
                Header: "Date",
                accessor: "date",
                icon: "/icons/column-descending.svg",
            },
            {
                Header: "Category",
                accessor: "category",
                icon: "/icons/filter.svg",
            },
            {
                Header: "Description",
                accessor: "description",
                icon: "",
            },
            {
                Header: "Amount",
                accessor: "amount",
                icon: "/icons/column-descending.svg",
            },
        ],
        []
    );

    // @ts-ignore
    const transactionTable = useTable({ columns, data });

    const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
        transactionTable;

    return (
        <table {...getTableProps()} style={{ width: "100%" }}>
            <thead>
                {headerGroups.map((headerGroup) => (
                    <tr {...headerGroup.getHeaderGroupProps()}>
                        {headerGroup.headers.map((column) => (
                            <th
                                {...column.getHeaderProps()}
                                style={{
                                    borderBottom: "solid 2px #8C8C8C",
                                    background: "transparent",
                                    borderRadius: "10px",
                                    paddingLeft: "16px",
                                    color: "black",
                                    fontWeight: "bold",
                                    alignItems: "center",
                                    paddingBottom: "10px",
                                }}
                            >
                                <div className="d-flex">
                                    {column.render("Header")}
                                    <img
                                        src={column.render("icon") as string}
                                        alt=""
                                        className="ms-1"
                                    />
                                </div>
                            </th>
                        ))}
                    </tr>
                ))}
            </thead>
            <tbody {...getTableBodyProps()}>
                {isDraftActive ? <Transaction isDraft={true} categories={props.categories}/> : <AddTransaction addTransactionHandler={addNewTransactionHandler}/>}
                {rows.map((row) => {
                    prepareRow(row);
                    return (
                        <tr {...row.getRowProps()}>
                            {row.cells.map((cell) => {
                                return (
                                    <td
                                        {...cell.getCellProps()}
                                        style={{
                                            paddingTop: "10px",
                                            paddingBottom: "10px",
                                            paddingLeft: "16px",
                                            borderBottom: "solid 1px #DFE7F8",
                                            background: "transparent",
                                        }}
                                    >
                                        {cell.render("Cell")}
                                    </td>
                                );
                            })}
                        </tr>
                    );
                })}
            </tbody>
        </table>
    );
};

export default TransactionTable;
