import React from "react";
import styled from "styled-components";

const InlineDatePicker = styled.input`
    padding: 12.5px 12px;
    border: 1px solid #e8e8e8;
    border-radius: 5px;
`;

interface Props {}

const DatePicker = (props: Props) => {
    return <InlineDatePicker type="date" />;
};

export default DatePicker;
