
import * as $ from 'react-hyperscript'
import * as p__react from 'react'

import * as m__types from './types'
import d__container__task from '../task/container'

export const task = (
	props: m__types.props__task,
): p__react.ReactElement => {
	return [
		$(d__container__task, {
			key: props.object.id,
			object: props.object,
		}),
	][0]
}

task.displayName = 'task'
