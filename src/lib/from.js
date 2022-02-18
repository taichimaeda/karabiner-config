export function any(name, mandatoryModifiers, optionalModifiers) {
    return {
        any: name,
        modifiers: {
            mandatory: mandatoryModifiers,
            optional: optionalModifiers,
        },
    };
}

export function keyCode(name, mandatoryModifiers, optionalModifiers) {
    return {
        keyCode: name,
        modifiers: {
            mandatory: mandatoryModifiers,
            optional: optionalModifiers,
        },
    };
}

export function consumerKeyCode(name, mandatoryModifiers, optionalModifiers) {
    return {
        consumerKeyCode: name,
        modifiers: {
            mandatory: mandatoryModifiers,
            optional: optionalModifiers,
        },
    };
}

export function pointingButton(name, mandatoryModifiers, optionalModifiers) {
    return {
        pointingButton: name,
        modifiers: {
            mandatory: mandatoryModifiers,
            optional: optionalModifiers,
        },
    };
}

export function simultaneousKeyCodes(names, mandatoryModifiers, optionalModifiers, {
    detectKeyDownUninterruptedly,
    keyDownOrder,
    KeyUpOrder,
    KeyUpWhen,
    ToAfterKeyUp,
} = {}) {
    return {
        simultaneous: names.map(name => ({keyCode: name})),
        simultaneousOptions: {
            detectKeyDownUninterruptedly,
            keyDownOrder,
            KeyUpOrder,
            KeyUpWhen,
            ToAfterKeyUp,
        },
        modifiers: {
            mandatory: mandatoryModifiers,
            optional: optionalModifiers,
        },
    };
}