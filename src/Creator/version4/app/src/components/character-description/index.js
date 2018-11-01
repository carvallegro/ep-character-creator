import React from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'

import { LabelledText } from '@common/labelled-value'
import { Card } from '@common/cards'
import { withColumn } from '@hoc/grid'

const Wrapper = styled.div`
  display: grid;
  grid-gap: 12px;
  grid-auto-columns: 50%;
  grid-template:
    'player   character'
    'age      gender'
    'notes    notes';
`

export const CharacterDescriptionJSX = ({ details }) => (
    <Card title="General">
        <Wrapper>
            <LabelledText title="Player Name" value={details.playerName} gridArea="player"/>
            <LabelledText title="Character Name" value={details.characterName} gridArea="character"/>
            <LabelledText title="Real Age" value={`${details.realAge} years old`} gridArea="age"/>
            <LabelledText title="Birth Gender" value={details.birthGender} gridArea="gender"/>
            <LabelledText title="Notes" value={details.notesDetails} gridArea="notes"/>
        </Wrapper>
    </Card>
)

const CharacterDescription = withColumn({ xs: 4 })(CharacterDescriptionJSX)

const mapStateToProps = state => ({
    details: state.characterDescription.data
})

export default connect(mapStateToProps)(CharacterDescription)
