import styled from "styled-components";

export enum ButtonModeEnum {
    INLINE,
    ACTION
}

export enum ButtonStyleEnum {
    OUTLINE,
    FILL
}

interface Props {
    mode?: ButtonModeEnum;
    buttonStyle ?: ButtonStyleEnum;
}

export const Button = styled.button<Props>`
    width: ${props => props.mode === ButtonModeEnum.INLINE ? '100%' : 'auto'};
    background-color: ${props => props.buttonStyle === ButtonStyleEnum.OUTLINE ? 'transparent' : props.theme.colors.darkBlue};
    font-size: 18px;
    font-weight: 700;
    padding: ${props => props.mode === ButtonModeEnum.INLINE ? "12px 0px" : "20px 25px"};
    line-height: 21px;
    border-radius: 8px;
    color: ${props => props.buttonStyle === ButtonStyleEnum.OUTLINE ? 'black' : 'white'};
    border: ${props => props.buttonStyle === ButtonStyleEnum.OUTLINE ? '1px solid #8C8C8C' : '1px solid transparent'};
    font-family: "Lexend";
`;