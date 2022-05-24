import styled from "styled-components";

interface Props {
  hasError: boolean
}

export const TextField = styled.div<Props>`
  label {
    font-size: 18px;
    color: ${(props) => props.theme.colors.black};
  }
  input {
    display: block;
    width: 100%;
    background-color: #f1f2f3;
    color: ${props => props.theme.colors.black};
    border: ${props => props.hasError ? `1px solid ${props.theme.colors.darkRed}` : '1px solid #E8E8E8'};
    border-radius: 8px;
    padding: 15px 22px;

    ::placeholder{
      color: ${props => props.theme.colors.lightGray};
    }
  }
`;
