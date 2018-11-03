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
    <InputContainer theme={theme}
                    onCancel={onCancel}
                    onValidate={() => onValidate(inputValue)}>
        <StyledTextInput
            id={kebabCase(title)}
            hideLabel={true}
            value={inputValue}
            labelText=''
            onChange={e => updateStateValue(e.target.value)}
            light/>
    </InputContainer>)

const InputContainer = ({children, theme, onCancel, onValidate}) =>
    <InputWrapper>
        {children}
        <InputActionsWrapper>
            <InputButtonWrapper
                onClick={onValidate}>
                <Icon icon={iconCheckmark}
                      fill={theme.colors.green[60]}
                      height='12px'
                      width='12px'/>
            </InputButtonWrapper>
            <InputButtonWrapper
                onClick={onCancel}>
                <Icon icon={iconClose}
                      fill={theme.colors.red[60]}/>
            </InputButtonWrapper>
        </InputActionsWrapper>
    </InputWrapper>
