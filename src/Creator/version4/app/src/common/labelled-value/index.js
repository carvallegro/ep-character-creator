import kebabCase from 'lodash/fp/lowerCase'

import React from 'react'
import PropTypes from 'prop-types'
import { compose } from 'recompose'
import { Icon } from 'carbon-components-react'
import { iconEdit } from 'carbon-icons'

import { withEditEffect, withHoverEffect } from '@hoc/cursorEffects'

import { EditButtonWrapper, StyledFormLabel, Wrapper } from './styles'
import { TextInput } from './inputs'
import Value from './value'

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

const LabelledTextJSX = ({ title, value, defaultValue, gridArea, onHover, hovered, isBeingEdited, edit }) =>
    <Wrapper
        gridArea={gridArea}
        onMouseOver={() => onHover(true)}
        onMouseLeave={() => onHover(false)}
        onClick={e => e.preventDefault()}>
        <StyledFormLabel>
            {title}{' '}
            <EditButton
                onClick={() => edit(true)}
                visible={hovered}/>
        </StyledFormLabel>
        {
            !isBeingEdited &&
            <Value
                value={value}
                default={defaultValue}/>
        }
        {
            isBeingEdited &&
            <TextInput id={kebabCase(title)}
                       light
                       hideLabel={true}
                       labelText=''
                       value={value}
                       onValidate={() => edit(false)}
                       onCancel={() => edit(false)}/>
        }
    </Wrapper>
LabelledTextJSX.propTypes = propTypes(PropTypes.string)

export const LabelledText = compose(enhance, withHoverEffect)(LabelledTextJSX)

