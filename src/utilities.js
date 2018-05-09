export function Action(type, payload) {
    return {
        type: type,
        payload: payload
    }
}

export function ErrorAction(type, payload) {
    return {
        type: type,
        payload: payload,
        error: true
    }
}