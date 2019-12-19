
import i__react_hyperscript from 'react-hyperscript'

import d__container__task from '../../containers/task'

import * as m__types from './types'


const $ = i__react_hyperscript


export const task = (props) => {
	return [
		$(d__container__task, {
			key: props.object.id,
			object: props.object,
		}),
	][0]
}


task.displayName = 'task'
task.propTypes = m__types.props__task