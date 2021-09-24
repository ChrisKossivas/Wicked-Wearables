import React from 'react'
import styled from 'styled-components'

const User = JSON.parse(localStorage.getItem('User'))


const ConfirmPage = () => {

  return (
    <Wrapper>
      {localStorage.getItem("User") !== null ? (
        <>
        <Success>Success!</Success>
          <Confirmed>Thank you for your order, {User.name}!</Confirmed>
        </>
      ) : (
        <>
              <Success>Success!</Success>
          <Confirmed>Thank you for your order!</Confirmed>
        </>
      ) }
    </Wrapper>
  )
  
}



const Success = styled.h1`
  color: var(--color-lightGrey)
`;


const Confirmed = styled.h2`
color: var(--color-lightGrey)
`;

const Wrapper = styled.div`
color: var(--color-lightGrey)

`;

export default ConfirmPage