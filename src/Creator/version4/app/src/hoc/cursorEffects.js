import { withState } from 'recompose'

export const withHoverEffect = withState('hovered', 'onHover', false)
