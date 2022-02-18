export function keyCode(name, modifiers, {
    lazy,
    halt,
    repeat,
    setHoldDownMilliseconds,
} = {}) {
    return {
        keyCode: name,
        modifiers,
        lazy,
        halt,
        repeat,
        setHoldDownMilliseconds,
    };
}

export function consumerKeyCode(name, modifiers) {
    return {
        consumerKeyCode: name,
        modifiers,
    };
}

export function pointingButton(name, modifiers) {
    return {
        pointingButton: name,
        modifiers,
    };
}

export function shellCommand(command) {
    return {shellCommand: command};
}

export function selectInputSource(language, inputSourceId, inputModeId) {
    return {
        selectInputSource: {language, inputSourceId, inputModeId},
    };
}

export function setVariable(name, value) {
    return {
        setVariable: {name, value},
    };
}

export function setNotificationMessage(id, text) {
    return {
        setNotificationMessage: {id, text},
    };
}

export function mouseKey(x, y, verticalWheel, horizontalWheel, speedMultiplier) {
    return {
        mouseKey: {x, y, verticalWheel, horizontalWheel, speedMultiplier},
    };
}

export function stickyModifier(name, value) {
    return {
        stickyModifier: {[name]: value},
    };
}
