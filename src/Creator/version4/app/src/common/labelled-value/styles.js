import styled from 'styled-components'
import { FormLabel } from 'carbon-components-react'

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
`

export const EditButtonWrapper = styled.button`
  visibility: ${({ visible }) => (visible ? 'visible' : 'hidden')};

  position: absolute;
  margin-top: -1px;
`
