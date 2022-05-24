import React from 'react'
import styled from 'styled-components'

const InlineDropDown = styled.select`
    padding: 12.5px 12px;
    border: 1px solid #E8E8E8;
    border-radius: 5px;
`;

interface Props {
  children: React.ReactNode
}

const Dropdown = (props: Props) => {
  return (
    <InlineDropDown>
      {props.children}
    </InlineDropDown>
  )
}

export default Dropdown
