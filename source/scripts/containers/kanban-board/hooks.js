
import i__react from 'react'
import i__react_hyperscript from 'react-hyperscript'

import * as m__actions from '~/redux/actions'
import * as m__react_hooks from '~/helpers/react-hooks'
import * as m__selectors from './selectors'

import d__component from './component'


const $ = i__react_hyperscript

const component = i__react.memo(() => {
	return $(d__component, {
		state: m__react_hooks.use_state(m__selectors.selector),
		dispatch: m__react_hooks.use_dispatch({
			reset: m__actions.reset,
		}),
	})
})

export default component

component.displayName = ['c', d__component.displayName].join('.')
