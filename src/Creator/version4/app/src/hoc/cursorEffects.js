import { withState } from 'recompose'

export const withHoverEffect = withState('hovered', 'onHover', false)
export const withEditEffect = withState('isBeingEdited', 'edit', false)
