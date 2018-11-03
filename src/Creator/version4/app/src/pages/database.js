import React, { Fragment } from 'react'

import { H } from '../common/typography'

import Backgrounds from '../components/backgrounds'
import GearList from '../components/gear'
import AiList from '../components/ai'
import SoftwareList from '../components/software'
import MorphList from '../components/morphs'

const DatabasePage = () => (
  <Fragment>
    <H h={1}>Backgrounds</H>
    <Backgrounds />
    <H h={1}>Gear</H>
    <GearList />
    <H h={1}>AI</H>
    <AiList />
    <H h={1}>Software</H>
    <SoftwareList />
    <H h={1}>Morphs</H>
    <MorphList />
  </Fragment>
)

export default DatabasePage
