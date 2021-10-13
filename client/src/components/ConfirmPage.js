import React, { useState, useEffect } from 'react'
import styled from 'styled-components'

const ConfirmPage = () => {
  const [user, setUser] = useState()
  
  
  useEffect(() => {
    if (localStorage.getItem("User") !== null ) {
    setUser(JSON.parse(localStorage.getItem("User")));
    }
  }, []);

  return (
    <Wrapper>
      {user ? (
        <>
        <Success>Success!</Success>
          <Confirmed>Thank you for your order, {user.name}!</Confirmed>
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