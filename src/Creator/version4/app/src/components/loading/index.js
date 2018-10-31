import React from 'react'
import styled from 'styled-components'

import logo from './logo.svg'

const LoadingWrapper = styled.div`
  text-align: center;
`

const LoadingContent = styled.header`
  background-color: ${({ theme }) => theme.colors.coolGray['90']}};
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: white;
`

const LoadingLogo = styled.img`
  animation: App-logo-spin infinite 20s linear;
  height: 40vmin;

  @keyframes App-logo-spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`

export const Loading = () => (
  <LoadingWrapper>
    <LoadingContent>
      <LoadingLogo src={logo} alt="logo" />
      <h1 className="App-title">Welcome to React, with Carbon!</h1>
    </LoadingContent>
  </LoadingWrapper>
)

export default Loading
