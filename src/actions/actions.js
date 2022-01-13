import { ACTIVE, ARCHIVED } from './types'

export const taskSub = () => {
    return {
        type: ACTIVE.TASK_SUB
    }
}

export const ideaSub = () => {
    return {
        type: ACTIVE.IDEA_SUB
    }
}

export const randomSub = () => {
    return {
        type: ACTIVE.RANDOM_THOUGHT_SUB
    }
}

export const taskAdd = () => {
    return {
        type: ACTIVE.TASK_ADD
    }
}

export const ideaAdd = () => {
    return {
        type: ACTIVE.IDEA_ADD
    }
}

export const randomAdd = () => {
    return {
        type: ACTIVE.RANDOM_THOUGHT_ADD
    }
}

export const archivedTaskSub = () => {
    return {
        type: ARCHIVED.ARCHIVED_TASK_SUB
    }
}

export const archivedIdeaSub = () => {
    return {
        type: ARCHIVED.ARCHIVED_IDEA_SUB
    }
}

export const archivedRandomSub = () => {
    return {
        type: ARCHIVED.ARCHIVED_RANDOM_THOUGHT_SUB
    }
}

export const archivedTaskAdd = () => {
    return {
        type: ARCHIVED.ARCHIVED_TASK_ADD
    }
}

export const archivedIdeaAdd = () => {
    return {
        type: ARCHIVED.ARCHIVED_IDEA_ADD
    }
}

export const archivedRandomAdd = () => {
    return {
        type: ARCHIVED.ARCHIVED_RANDOM_THOUGHT_ADD
    }
}

