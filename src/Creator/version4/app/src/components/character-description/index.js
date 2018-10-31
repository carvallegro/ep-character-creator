import React from 'react'
import styled from 'styled-components'

import { LabelledText } from '../../common/labelled-value'
import { withColumn } from '../../hoc/grid'
import { Card } from '../../common/cards'

const Wrapper = styled.div`
  display: grid;
  grid-gap: 12px;
  grid-auto-columns: 50%;
  grid-template:
    'player   character'
    'age      gender'
    'notes    notes';
`

export const CharacterDescription = () => (
  <Card title="General">
    <Wrapper>
      <LabelledText title="Player Name" value="Valentin" gridArea="player" />
      <LabelledText title="Character Name" value="C3P0" gridArea="character" />
      <LabelledText title="Real Age" value="12" gridArea="age" />
      <LabelledText title="Birth Gender" value="N/A" gridArea="gender" />
      <LabelledText
        title="Notes"
        value="A lotfdsbf jhfeskj  iufewi  ewfewj vf few fe hjfe"
        gridArea="notes"
      />
    </Wrapper>
  </Card>
)

export default withColumn({ xs: 4 })(CharacterDescription)
