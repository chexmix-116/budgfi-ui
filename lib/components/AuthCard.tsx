import React from "react";
import styled from "styled-components";

/**
 * Creates an empty card with padding used for consistency across
 * the authentication flows.
 */
export const AuthCard = styled.div`
  background-color: white;
  padding: 35px 30px;
  border-radius: 10px;
  min-width: 454px;

  h1{
    font-size: 20px;
    font-weight: 600;
  }
`;
