import { combineReducers } from "redux"
import { ACTIVE, ARCHIVED } from './types'

const activeState = {
    task: 7,
    idea: 0,
    random: 0
}

const activeReducer = (state = activeState, action) => {
    switch (action.type) {
        case ACTIVE.TASK_SUB:
            return { ...state, task: activeState.task-- }
        case ACTIVE.IDEA_SUB:
            return { ...state, idea: activeState.idea-- }
        case ACTIVE.RANDOM_THOUGHT_SUB:
            return { ...state, random: activeState.random-- }
        case ACTIVE.TASK_ADD:
            return { ...state, task: activeState.task++ }
        case ACTIVE.IDEA_ADD:
            return { ...state, idea: activeState.idea++ }
        case ACTIVE.RANDOM_THOUGHT_ADD:
            return { ...state, random: activeState.random++ }
        default: return state
    }
}

const archivedState = {
    task: 0,
    idea: 0,
    random: 0
}

const archivedReducer = (state = archivedState, action) => {
    switch (action.type) {
        case ARCHIVED.ARCHIVED_TASK_SUB:
            let task = archivedState.task;
            if (task > -1) {
                return { ...state, task: 0 }
            } else {
                return { ...state, task: archivedState.task-- }
            }
        case ARCHIVED.ARCHIVED_IDEA_SUB:
            let idea = archivedState.idea;
            if (idea > -1) {
                return { ...state, idea: 0 }
            } else {
                return { ...state, idea: archivedState.idea-- }
            }
        case ARCHIVED.ARCHIVED_RANDOM_THOUGHT_SUB:
            let random = archivedState.random;
            if (random > -1) {
                return { ...state, random: 0 }
            } else {
                return { ...state, random: archivedState.random-- }
            }
        case ARCHIVED.ARCHIVED_TASK_ADD:
            return { ...state, task: archivedState.task++ }
        case ARCHIVED.ARCHIVED_IDEA_ADD:
            return { ...state, idea: archivedState.idea++ }
        case ARCHIVED.ARCHIVED_RANDOM_THOUGHT_ADD:
            return { ...state, random: archivedState.random++ }
        default: return state
    }
}

export const rootReducer = combineReducers({
    active: activeReducer,
    archived: archivedReducer
})