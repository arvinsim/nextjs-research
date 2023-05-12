import React from 'react';
import styled from "styled-components";

function ExtendStyled() {
    return (
        <StyledPlanBenefits isAngry={true}>
            <div>I am inheriting from parent</div>
            <StyledChild>I am my own thing</StyledChild>
        </StyledPlanBenefits>
    );
}

const StyledChild = styled.div``
const StyledPlanBenefits = styled.div<{ isAngry: boolean}>`
  ${StyledChild} {
    ${props => props.isAngry ? 'color: red' : 'color: blue'}
  }
`


export default ExtendStyled;


