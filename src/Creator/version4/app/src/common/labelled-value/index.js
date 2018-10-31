import kebabCase from 'lodash/fp/lowerCase'

import React from 'react'
import PropTypes from 'prop-types'
import { compose } from 'recompose'
import { Icon, InlineLoading } from 'carbon-components-react'
import { iconEdit } from 'carbon-icons'

import { withEditEffect, withHoverEffect } from '../../hoc/cursorEffects'

import { EditButtonWrapper, StyledFormLabel, TextValue, Wrapper } from './styles'
import { TextInput } from './inputs'

const enhance = compose(withEditEffect, withHoverEffect)

const propTypes = valuePropType => ({
    title: PropTypes.string.isRequired,
    value: valuePropType,
    defaultValue: valuePropType,
    readOnly: PropTypes.bool,
    gridArea: PropTypes.string
})

const EditButton = ({ onClick, visible }) =>
    !visible ? null : (
        <EditButtonWrapper
            onClick={onClick}
            visible={visible}>
            <Icon icon={iconEdit}/>
        </EditButtonWrapper>
    )

const LabelledTextJSX = withHoverEffect(
    ({ title, value, defaultValue, gridArea, onHover, hovered, isBeingEdited, edit }) => (
        <Wrapper
            gridArea={gridArea}
            onMouseOver={() => onHover(true)}
            onMouseLeave={() => onHover(false)}
            onClick={e => e.preventDefault()}>
            <StyledFormLabel>
                {title}{' '}
                <EditButton onClick={() => edit(true)} visible={hovered}/>
            </StyledFormLabel>
            {
                !isBeingEdited ||
                <TextInput id={kebabCase(title)} hideLabel={true} value={value} labelText='' light
                           onValidate={() => edit(false)} onCancel={() => edit(false)}/>
            }
            {
                isBeingEdited || <TextValue>{value ? value : defaultValue} <InlineLoading success={false}/></TextValue>
            }
            // TODO: Add Inline Loader
        </Wrapper>
    )
)
LabelledTextJSX.propTypes = propTypes(PropTypes.string)

export const LabelledText = enhance(LabelledTextJSX)

