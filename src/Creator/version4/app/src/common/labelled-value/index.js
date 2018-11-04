import kebabCase from 'lodash/fp/lowerCase'

import React from 'react'
import PropTypes from 'prop-types'
import { compose } from 'recompose'
import { Icon, TextInputSkeleton } from 'carbon-components-react'
import { iconEdit } from 'carbon-icons'

import { withEditEffect, withHoverEffect } from '@hoc/cursorEffects'

import { EditButtonWrapper, StyledFormLabel, Wrapper, SkeletonWrapper } from './styles'
import { TextInput } from './inputs'
import Value from './value'

const enhance = compose(withEditEffect, withHoverEffect)

const propTypes = valuePropType => ({
    title: PropTypes.string.isRequired,
    value: valuePropType,
    defaultValue: valuePropType,
    readonly: PropTypes.bool,
    isLoading: PropTypes.bool,
    gridArea: PropTypes.string,
    onUpdate: PropTypes.func.isRequired
})

const EditButton = ({ onClick, visible }) =>
    !visible ? null : (
        <EditButtonWrapper
            onClick={onClick}
            visible={visible}>
            <Icon icon={iconEdit}/>
        </EditButtonWrapper>
    )

const LabelledTextJSX = ({
                             title,
                             value,
                             defaultValue,
                             gridArea,
                             readonly,
                             isBeingEdited,
                             setEdition,
                             isLoading,
                             hovered,
                             onHover,
                             onUpdate
                         }) =>
    <Wrapper
        gridArea={gridArea}
        onMouseOver={() => onHover(true)}
        onMouseLeave={() => onHover(false)}
        onClick={e => e.preventDefault()}>
        <StyledFormLabel>
            {title}
            {
                !isLoading && !readonly &&
                <EditButton
                    visible={hovered}
                    onClick={() => setEdition(true)}/>
            }
        </StyledFormLabel>
        {
            !isBeingEdited && !isLoading &&
            <Value
                value={value}
                default={defaultValue}/>
        }
        {
            isBeingEdited && !isLoading && !readonly &&
            <TextInput id={kebabCase(title)}
                       light
                       hideLabel={true}
                       labelText=''
                       value={value}
                       onCancel={() => setEdition(false)}
                       onValidate={inputValue => {
                           setEdition(false)
                           onUpdate(inputValue)
                       }}/>
        }
        {
            isLoading &&
            <SkeletonWrapper>
                <TextInputSkeleton hideLabel/>
            </SkeletonWrapper>
        }
    </Wrapper>
LabelledTextJSX.propTypes = propTypes(PropTypes.string)

export const LabelledText = enhance(LabelledTextJSX)

