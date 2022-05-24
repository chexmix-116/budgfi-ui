import styled from "styled-components";

interface Props {
  hasError: boolean
}

export const TextFieldWithIcon = styled.div<Props>`
  label {
    font-size: 18px;
    color: ${(props) => props.theme.colors.black};
  }
  .input-field {
    position: relative;

    input {
      display: block;
      width: 100%;
      background-color: #f1f2f3;
      border: ${props => props.hasError ? `1px solid ${props.theme.colors.darkRed}` : '1px solid transparent'};
      border-radius: 8px;
      padding: 15px 22px;
    }

    button{
      display: flex;
      position: absolute;
      top: 50%;
      right: 15px;
      z-index: 100;
      transform: translateY(-50%);
      border: transparent;
      padding: 0px;
    }
  }
`;
