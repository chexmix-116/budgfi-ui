import Image from 'next/image'
import React from 'react'
import styled from 'styled-components'

interface Props {
    name: string,
    isActive: boolean
}

const StyledListItemText = styled.p`
    color: ${props => props.theme.colors.darkGray};
    font-size: 15px;
    font-weight: 300;
`;

const RequirementHint = (props: Props) => {
    return (
        <div className="container-fluid">
            <div className="row align-items-center">
                <div className="col px-0">
                    <StyledListItemText>{props.name}</StyledListItemText>
                </div>
                <div className="col-auto d-flex" style={{minWidth: '30px'}}>
                    { props.isActive && <Image src="/icons/checkmark.svg" height="24px" width="24px" alt={`Requirement for ${props.name} was met`}></Image>}
                </div>
            </div>
            
        </div>
    )
}

export default RequirementHint
