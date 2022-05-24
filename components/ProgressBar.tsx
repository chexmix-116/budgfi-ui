import React, { ReactElement } from "react";
import styled from "styled-components";

interface Props {
  percentComplete: number;
}

const StyledProgressBar = styled.aside<Props>`
  position: fixed;
  top: 0;
  left: 0;
  background-image: ${(props) =>
    `linear-gradient(to right, #3963C6 ${props.percentComplete}%, #C2D0F2  ${props.percentComplete}%, #C2D0F2 100%)`};
  content: "";
  height: 20px;
  width: 100%;
`;
export default function ProgressBar({ percentComplete }: Props): ReactElement {
  return (
    <StyledProgressBar percentComplete={percentComplete}></StyledProgressBar>
  );
}
