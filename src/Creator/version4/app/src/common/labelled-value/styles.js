import styled from 'styled-components'
import { FormLabel, TextInputSkeleton } from 'carbon-components-react'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;

  ${({ gridArea }) =>
    gridArea &&
    `
    grid-area: ${gridArea}
  `};
`

export const StyledFormLabel = styled(FormLabel)`
  position: relative;
  user-select: none;
`

export const EditButtonWrapper = styled.button`
  visibility: ${({ visible }) => (visible ? 'visible' : 'hidden')};

  position: absolute;
  margin: -1px 2px 2px;
  
  padding: 0 1px;
  height: auto;

  background: none;
  border: none;
  outline: none;

  cursor: pointer;
  
  & > .bx--btn__icon{
    margin-left: 0;
    height: 16px;
    width: 16px;
  }
`
EditButtonWrapper.defaultProps = {
    visible: true
}


export const TextValue = styled.p`
  border-bottom: 1px;
  padding: 0 8px;
  height: 2rem;
`

export const SkeletonWrapper = styled.div`
  max-height: 2rem;
  & .bx--form-item .bx--skeleton.bx--text-input{
    height: 2rem;
    min-width: initial;
  }
`
