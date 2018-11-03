import kebabCase from 'lodash/fp/lowerCase'

import React from 'react'
import { compose, withStateHandlers } from 'recompose'
import { withTheme } from 'styled-components'
import { Icon } from 'carbon-components-react'
import { iconCheckmark, iconClose } from 'carbon-icons'

import { InputActionsWrapper, InputButtonWrapper, InputWrapper, StyledTextInput } from './inputs.style'



const stateHandlers = withStateHandlers(
    props => ({
        inputValue: props.value
    }),
    {
        updateStateValue: () => value => ({
            inputValue: value
        })
    }
)

export const TextInput = compose(withTheme, stateHandlers)(({ title, value, inputValue, updateStateValue, onValidate, onCancel, theme }) =>
    <InputContainer onValidate={onValidate} onCancel={onCancel} theme={theme}>
        <StyledTextInput
            id={kebabCase(title)}
            hideLabel={true}
            value={inputValue}
            labelText=''
            onChange={e => updateStateValue(e.target.value)}
            light/>
    </InputContainer>)

const InputContainer = props =>
    <InputWrapper>
        {props.children}
        <InputActionsWrapper>
            <InputButtonWrapper
                onClick={() => props.onValidate(props.inputValue)}>
                <Icon icon={iconCheckmark}
                      fill={props.theme.colors.green[60]}
                      height='12px'
                      width='12px'/>
            </InputButtonWrapper>
            <InputButtonWrapper
                onClick={props.onCancel}>
                <Icon icon={iconClose}
                      fill={props.theme.colors.red[60]}/>
            </InputButtonWrapper>
        </InputActionsWrapper>
    </InputWrapper>
