import React from 'react'
import styled from 'styled-components'

const MessageCard = styled.div`
  width: 25rem;
  height: 10rem;
  background-color: #0099ff2f;
  border-left: 6px solid #0099ff;
  border-radius: 4px;
  box-shadow: 4px 4px 5px rgb(0, 0, 0, 0.25);
  display: flex;
  flex-direction: column;
  justify-content: center;

  & span {
    padding-top: 1rem;
  }
`

const WelcomeMessage = () => {
  return (
    <>
      <MessageCard>
        <h1>Initial React Template</h1>
        <span>Made by William 😜</span>
      </MessageCard>
    </>
  )
}

export default WelcomeMessage
