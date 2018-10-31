import React from 'react'
import PropTypes from 'prop-types'
import { Icon } from 'carbon-components-react'
import { iconEdit } from 'carbon-icons'

import { withHoverEffect } from '../../hoc/cursorEffects'

import { EditButtonWrapper, StyledFormLabel, Wrapper } from './styles'

import './styles.scss'

const propTypes = valuePropType => ({
  title: PropTypes.string.isRequired,
  value: valuePropType,
  defaultValue: valuePropType,
  readOnly: PropTypes.bool,
  gridArea: PropTypes.string
})

const EditButton = ({ onClick, visible }) =>
  !true ? null : (
    <EditButtonWrapper
      className="icon-edit"
      onClick={onClick}
      visible={visible}>
      <Icon icon={iconEdit} />
    </EditButtonWrapper>
  )

export const LabelledText = withHoverEffect(
  ({ title, value, defaultValue, gridArea, onHover, hovered }) => (
    <Wrapper
      gridArea={gridArea}
      onMouseOver={() => onHover(true)}
      onMouseLeave={() => onHover(false)}
      onClick={e => e.preventDefault()}>
      <StyledFormLabel>
        {title}{' '}
        <EditButton onClick={() => console.log('hi')} visible={hovered} />
      </StyledFormLabel>
      <p>{value ? value : defaultValue}</p>
    </Wrapper>
  )
)

LabelledText.propTypes = propTypes(PropTypes.string)
