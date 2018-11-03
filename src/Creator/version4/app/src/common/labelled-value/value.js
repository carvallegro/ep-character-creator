import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { InlineLoading } from 'carbon-components-react'

import { TextValue } from './styles'

const ValueWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
`

export const Value = ({ value, defaultValue, loading }) =>
    <ValueWrapper>
        <TextValue>{value ? value : defaultValue}</TextValue>
        {loading && <InlineLoading success={false}/>}
    </ValueWrapper>
Value.propTypes = {
    value: PropTypes.any,
    default: PropTypes.any,
    loading: PropTypes.bool
}

export default Value
