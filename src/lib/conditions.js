function device(type, vendorIds, productIds, description) {
    return {
        type,
        identifiers: vendorIds.map((vendorId, i) => ({
            vendor_id: vendorId,
            product_id: productIds[i],
        })),
        description,
    };
}

export function deviceIf(vendorIds = [], productIds = [], description) {
    return device('device_if', vendorIds, productIds, description);
}

export function deviceUnless(vendorIds = [], productIds = [], description) {
    return device('device_unless', vendorIds, productIds, description);
}

function eventChanged(type, value, description) {
    return {type, value, description};
}

export function eventChangedIf(value, description) {
    return eventChanged('event_changed_if', value, description);
}

export function eventChangedUnless(value, description) {
    return eventChanged('event_changed_unless', value, description);
}

function frontmostApplication(type, bundleIdentifiers, filePaths, description) {
    return {type, bundleIdentifiers, filePaths, description};
}

export function frontmostApplicationIf(bundleIdentifiers, filePaths, description) {
    return frontmostApplication('frontmost_application_if', bundleIdentifiers, filePaths, description);
}

export function frontmostApplicationUnless(bundleIdentifiers, filePaths, description) {
    return frontmostApplication('frontmost_application_unless', bundleIdentifiers, filePaths, description);
}

const inputSource = (type, language, inputSourceId, inputModeId, description) => {
    return ({type, language, inputSourceId, inputModeId, description});
};

export function inputSourceIf(language, inputSourceId, inputModeId, description) {
    return inputSource('input_source_if', language, inputSourceId, inputModeId, description);
}

export function inputSourceUnless(language, inputSourceId, inputModeId, description) {
    return inputSource('input_source_unless', language, inputSourceId, inputModeId, description);
}

function keyboardType(type, keyboardTypes, description) {
    return {type, keyboardTypes, description};
}

export function keyboardTypeIf(keyboardTypes, description) {
    return keyboardType('keyboard_type_if', keyboardTypes, description);
}

export function keyboardTypeUnless(keyboardTypes, description) {
    return keyboardType('keyboard_type_unless', keyboardTypes, description);
}

function variable(type, name, value, description) {
    return {type, name, value, description};
}

export function variableIf(name, value, description) {
    return variable('variable_if', name, value, description);
}

export function variableUnless(name, value, description) {
    return variable('variable_unless', name, value, description);
}
