import styled from 'styled-components'
import { TextInput } from 'carbon-components-react'
import { EditButtonWrapper } from './styles'


export const InputWrapper = styled.div`
  position: relative;
`

export const StyledTextInput = styled(TextInput)`
  padding: 0 8px;
  font-size: 1rem;
  line-height: 24px;
  height: 2rem;
`

export const InputButtonWrapper = styled(EditButtonWrapper)`
  position: relative;
  padding: 0 2px;
  opacity: 0.8;
  &:hover{
    opacity: 1;
  }
`

export const InputActionsWrapper = styled.div`
 position: absolute;
 top: 0;
 right: 8px;
 height: 100%;
 
 display: flex;
 flex-direction: row;
`
