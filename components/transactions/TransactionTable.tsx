import Image from "next/image";
import React, { useEffect, useState } from "react";
import { useTable } from "react-table";
import AddTransaction from "./AddTransaction";
import Transaction, { Category } from "./Transaction";
import {
    DataGrid,
    GridRowsProp,
    GridColDef,
    GridColumnHeaderParams,
    GridRenderCellParams,
    GridRowHeightParams,
} from "@mui/x-data-grid";
import { formatAsCurrency, formatAsDate } from "../../lib/utilities/formatter";

interface Props {
    categories: Category[];
}

const TransactionTable = (props: Props) => {
    // Flag tracks whether or not user is actively creating a new transaction
    const [isAddingNewTransaction, setIsAddingNewTransaction] =
        useState<boolean>(false);

    const [rows, setRows] = useState<GridRowsProp>([
        {
            id: 1,
            col1: formatAsDate("06-16-2022"),
            col2: "Restaurants",
            col3: "MOD Pizza",
            col4: formatAsCurrency(22.06),
        },
        {
            id: 2,
            col1: formatAsDate("06-16-2022"),
            col2: "Transportation",
            col3: "Uber Technologies",
            col4: formatAsCurrency(54.05),
        },
        {
            id: 3,
            col1: formatAsDate("06-17-2022"),
            col2: "Restaurants",
            col3: "Sojuba",
            col4: formatAsCurrency(91.06),
        },
        {
            id: 4,
            col1: formatAsDate("06-17-2022"),
            col2: "Restaurants",
            col3: "Charlie's Sandwich Shoppe",
            col4: formatAsCurrency(45.07),
        },
        {
            id: 5,
            col1: formatAsDate("06-17-2022"),
            col2: "Restaurants",
            col3: "Jaho Coffee Roast & Wine Bar",
            col4: formatAsCurrency(14.76),
        },
        {
            id: 6,
            col1: formatAsDate("06-15-2022"),
            col2: "Food",
            col3: "Uber Eats: El Jefe's",
            col4: formatAsCurrency(29.32),
        },
        {
            id: 7,
            col1: formatAsDate("06-15-2022"),
            col2: "Shopping",
            col3: "Amazon: Shades",
            col4: formatAsCurrency(14.76),
        },
        {
            id: 8,
            col1: formatAsDate("06-15-2022"),
            col2: "Shopping",
            col3: "Mechanical Keyboards",
            col4: formatAsCurrency(111.58),
        },
    ]);

    useEffect(() => {
        // If not actively adding a new transaction, present button to start adding a new one
        if (isAddingNewTransaction === false) {
            const emptyRow = { id: 1, col1: "Hello World", col2: "", col3: "", col4: "" };
            const incrementedRows = rows.map((row) => {
                return { ...row, id: row.id + 1 };
            });
            setRows([emptyRow, ...incrementedRows]);
        }
    }, [isAddingNewTransaction]);

    const columns: GridColDef[] = [
        {
            field: "col1",
            headerClassName: "DataGrid-headerColumn",
            headerName: "Date",
            flex: 1,
        
            // Special rendering for add transaction
            colSpan: ({ row }) => {
                if( row.id === 1 ){
                    return 4
                }
                else{
                    return 1
                }
            },
            // Special rendering for add transaction
            renderCell: (params: GridRenderCellParams<any>) => {
                if( params.id === 1 ){
                    return <AddTransaction addTransactionHandler={addTransactionHandler}/>
                }
            },
            renderHeader: (params: GridColumnHeaderParams) => (
                <p>
                    {params?.colDef?.headerName + " "}
                    <span role="img" aria-label="enjoy">
                        <img src="/icons/column-descending.svg" alt="" />
                    </span>
                </p>
            ),
        },
        {
            field: "col2",
            headerClassName: "DataGrid-headerColumn",
            headerName: "Category",
            flex: 1,
            renderHeader: (params: GridColumnHeaderParams) => (
                <p>
                    {params?.colDef?.headerName + " "}
                    <span role="img" aria-label="enjoy">
                        <img src="/icons/filter.svg" alt="" />
                    </span>
                </p>
            ),
        },
        {
            field: "col3",
            headerClassName: "DataGrid-headerColumn",
            headerName: "Description",
            flex: 2,
            renderHeader: (params: GridColumnHeaderParams) => (
                <p>{params?.colDef?.headerName + " "}</p>
            ),
        },
        {
            field: "col4",
            headerClassName: "DataGrid-headerColumn",
            headerName: "Amount",
            flex: 1,
            renderHeader: (params: GridColumnHeaderParams) => (
                <p>{params?.colDef?.headerName + " "}</p>
            ),
        },
    ];

    const addTransactionHandler = () => {;}

    return (
        <div style={{ height: "50vh", width: "100%" }}>
            <DataGrid
                rows={rows}
                columns={columns}
                getRowHeight={({id}: GridRowHeightParams) => {
                    if( id === 1 ){
                        return 100
                    }
                    else{
                        return 37;
                    }
                }}
                sx={{
                    border: "none",
                    "& .MuiDataGrid-columnSeparator": {
                        display: "none",
                    },
                    "& .MuiDataGrid-row": {
                        ".MuiDataGrid-cellContent": {
                            fontFamily: "Lexend",
                            fontWeight: 300,
                        },
                    },
                    "& .DataGrid-headerColumn": {
                        fontFamily: "Lexend",
                        fontWeight: 700,
                        color: "#3C484B",
                    },
                }}
            />
        </div>
    );
};

export default TransactionTable;
