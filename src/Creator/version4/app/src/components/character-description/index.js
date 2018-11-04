import React from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'

import { LabelledText } from '@common/labelled-value'
import { Card } from '@common/cards'
import { withColumn } from '@hoc/grid'
import characterDescription from '@store/actions/character-description'

const Wrapper = styled.div`
  display: grid;
  grid-gap: 12px;
  grid-auto-columns: 1fr;
  grid-template:
    'player   character'
    'age      gender'
    'notes    notes';
`

export const CharacterDescriptionJSX = ({ details, updateDetails, isLoading}) => (
    <Card title="General">
        <Wrapper>
            <LabelledText title="Player Name"
                          value={details.playerName}
                          onUpdate={v => updateDetails({ ...details, playerName: v })}
                          isLoading={isLoading}
                          gridArea="player"/>

            <LabelledText title="Character Name"
                          value={details.characterName}
                          onUpdate={v => updateDetails({ ...details, characterName: v })}
                          isLoading={isLoading}
                          gridArea="character"/>

            <LabelledText title="Real Age"
                          value={`${details.realAge} years old`}
                          onUpdate={v => updateDetails({ ...details, realAge: v })}
                          isLoading={isLoading}
                          gridArea="age"/>

            <LabelledText title="Birth Gender"
                          value={details.birthGender}
                          onUpdate={v => updateDetails({ ...details, birthGender: v })}
                          isLoading={isLoading}
                          gridArea="gender"/>

            <LabelledText title="Notes"
                          value={details.notesDetails}
                          onUpdate={v => updateDetails({ ...details, notesDetails: v })}
                          isLoading={isLoading}
                          gridArea="notes"/>
        </Wrapper>
    </Card>
)

const CharacterDescription = withColumn({ xs: 4 })(CharacterDescriptionJSX)

const mapStateToProps = state => ({
    details: state.characterDescription.data,
    isLoading: state.characterDescription.loading
})

const mapDispatchToProps = dispatch => ({
    updateDetails: details => dispatch(characterDescription.updateDescription(details))
})

export default connect(mapStateToProps, mapDispatchToProps)(CharacterDescription)
