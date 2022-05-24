import styled from "styled-components";

export const Rack = styled.main`
    position: relative;
    height: 100vh;

    > :first-child {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }
`;