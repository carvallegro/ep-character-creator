import { InputWrapper} from './inputs.style'
import { Icon } from 'carbon-components-react'
import { iconCheckmark, iconClose } from 'carbon-icons'
import React from 'react'
import { compose } from 'recompose'
import { withTheme } from 'styled-components'
import kebabCase from 'lodash/fp/lowerCase'
import { InputActionsWrapper, InputButtonWrapper, StyledTextInput } from './inputs.style'

export const withInputWrapper = Component => props =>
    <InputWrapper>
        <Component {...props} />
        <InputActionsWrapper>
            <InputButtonWrapper
                onClick={() => {}}>
                <Icon icon={iconCheckmark} fill={props.theme.colors.green[60]} height='12px' width='12px'
                      onClick={props.onValidate}/>
            </InputButtonWrapper>
            <InputButtonWrapper
                onClick={() => {}}>
                <Icon icon={iconClose} fill={props.theme.colors.red[60]} onClick={props.onCancel}/>
            </InputButtonWrapper>
        </InputActionsWrapper>
    </InputWrapper>

export const TextInput = compose(withTheme, withInputWrapper)(({ title, value }) =>
    <StyledTextInput
        id={kebabCase(title)}
        hideLabel={true}
        value={value}
        labelText=''
        light/>)
