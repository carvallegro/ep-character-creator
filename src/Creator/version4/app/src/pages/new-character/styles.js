import styled from 'styled-components'
import { Tile } from 'carbon-components-react'

export const Wrapper = styled.div`
  text-align: center;
`

export const Content = styled.header`
  background-color: ${({theme}) => theme.colors.coolGray['90']}};
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: white;
`

export const ChoiceTile = styled(Tile)`
  width: 500px;
  height: 200px;
  color: initial;
`
