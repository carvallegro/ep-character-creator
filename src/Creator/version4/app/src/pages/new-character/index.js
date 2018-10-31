import toNumber from 'lodash/fp/toNumber'
import isNil from 'lodash/fp/isNil'
import pipe from 'lodash/fp/pipe'

import React from 'react'
import { connect } from 'react-redux'
import { withState } from 'recompose'
import { Button, NumberInput, Slider, Tab, Tabs } from 'carbon-components-react'

import appContextActions from '../../store/actions/appContext'

import './new-character.scss'
import { ChoiceTile, Content, Wrapper } from './styles'

const DEFAULT_CREDITS_POINTS = 1000

const enhance = withState(
  'initialCredits',
  'updateInitalCredits',
  DEFAULT_CREDITS_POINTS
)

export const NewCharacterPage = ({
  initialCredits,
  updateInitalCredits,
  startNewCharacter
}) => {
  console.log(initialCredits)
  return (
    <Wrapper>
      <Content>
        <h1>Eclipse phase character creator</h1>
        <p>Welcome on the character creator for Eclipse Phase</p>
        <ChoiceTile>
          <p>
            First you have to choose the amount of creation point (min 700 cp)
            you want to use for creating your character.
          </p>
          <Slider
            id="cp-chooser-slider"
            min={700}
            max={1200}
            step={50}
            value={initialCredits}
            onChange={({ value }) => updateInitalCredits(value)}
          />

          <Button
            className="some-class"
            onClick={() => startNewCharacter(initialCredits)}>
            Primary button
          </Button>
        </ChoiceTile>
        <p>
          Please submit all suggestions and bug reports to the github issues
          page.
        </p>
      </Content>
    </Wrapper>
  )
}

const mapDispatchToProps = dispatch => ({
  startNewCharacter: initialCredits =>
    dispatch(appContextActions.startNewCharacter(initialCredits))
})

export default pipe(
  connect(
    undefined,
    mapDispatchToProps
  ),
  enhance
)(NewCharacterPage)

const TabsStory = ({ initialCredits, updateInitalCredits }) => (
  <Tabs className="choose-cp-method" selected={0}>
    <Tab label="Ranged Choice">
      <Slider
        id="cp-chooser-slider"
        min={700}
        max={1200}
        step={50}
        value={initialCredits}
        onChange={({ value }) => updateInitalCredits(value)}
      />
    </Tab>
    <Tab label="Free Choice">
      <NumberInput
        id="tj-input"
        min={0}
        step={50}
        value={initialCredits}
        invalidText="Number is not valid"
        onChange={event => {
          event.preventDefault()
          console.log(event)
          if (isNil(event.target.value)) {
            console.log(event.imaginaryTarget.value)
            updateInitalCredits(toNumber(event.imaginaryTarget.value))
          } else {
            console.log(event.target.value)
            updateInitalCredits(toNumber(event.target.value))
          }
        }}
      />
    </Tab>
  </Tabs>
)
