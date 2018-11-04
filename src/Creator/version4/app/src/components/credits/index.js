import React from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'

import { Card } from '@common/cards'
import { LabelledText } from '@common/labelled-value'
import { withColumn } from '@hoc/grid'

const Wrapper = styled.div`
  display: grid;
  grid-gap: 12px;
  grid-auto-columns: 1fr;
  grid-template-columns: 1fr 1fr;
`

const CreditsJSX = ({credits, isLoading}) => <Card title="Credits">
    <Wrapper>
        <LabelledText title="CP"
                      value={credits.creation}
                      isLoading={isLoading}
                      readonly/>
        <LabelledText title="CR"
                      value={credits.credit}
                      isLoading={isLoading}
                      readonly/>
        <LabelledText title="AP"
                      value={credits.aptitude}
                      isLoading={isLoading}
                      readonly/>
        <LabelledText title="RP"
                      value={credits.reputation}
                      isLoading={isLoading}
                      readonly/>
        <LabelledText title="ASR"
                      value={credits.asr}
                      isLoading={isLoading}
                      readonly/>
        <LabelledText title="REZ"
                      value={credits.rez}
                      isLoading={isLoading}
                      readonly/>
        <LabelledText title="KSR"
                      value={credits.ksr}
                      isLoading={isLoading}
                      readonly/>
    </Wrapper>
</Card>

const Credits = withColumn({ xs: 2 })(CreditsJSX)

const mapStateToProps = state => ({
    credits: state.credits.data,
    isLoading: state.credits.loading
})

export default connect(mapStateToProps)(Credits)
