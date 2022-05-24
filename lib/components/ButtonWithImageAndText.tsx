import styled from "styled-components";

export const ButtonWithImageAndText = styled.button`
    display: flex;
    width: 100%;
    justify-content: center;
    align-items: center;
    line-height: 24px;
    padding: 15px 0px;
    background-color: white;
    border: 1px solid #8c8c8c;
    border-radius: ${ (props) => props.theme.borderRadius};
    font-weight: bold;
    font-size: 18px;

    img {
        margin-right: 10px;
    }
`;
