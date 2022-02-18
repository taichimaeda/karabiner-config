import {conditions, from, to} from './index.js';

export function main() {
    return {
        // This 'Spacebar to Left Command' rule has to have a lower priority than the 'Left Control + HJKL to Arrow Keys' rule
        // in the Karabiner-Elements app so that the simultaneous key downs can be recognized correctly.
        title: 'Spacebar to Left Command',
        rules: [
            {
                description: 'Spacebar to Left Command',
                manipulators: [
                    // Map simultaneous key down of one of the h, j, k and l keys, the space key and the left control key
                    // to the corresponding arrow keys with the left command key.
                    // This helps to successfully map the space key to the left command key
                    // even if the key order is wrong given the keys are pressed almost at the same time.
                    ...[['h', 'left_arrow'], ['j', 'down_arrow'], ['k', 'up_arrow'], ['l', 'right_arrow']].map(([oldKey, newKey]) => ({
                        type: 'basic',
                        from: from.simultaneousKeyCodes([oldKey, 'spacebar'], ['left_control'], []),
                        to: [
                            to.keyCode(newKey, ['left_command']),
                        ],
                        conditions: [
                            conditions.deviceIf([5426], [2596]),
                        ],
                    })),
                    // Map simultaneous key down of one of the h, j, k and l keys, the space key, the left control key and the left shift key
                    // to the corresponding arrow keys with the left command key and the left shift key.
                    // This helps to successfully map the space key to the left command key
                    // even if the key order is wrong given the keys are pressed almost at the same time.
                    ...[['h', 'left_arrow'], ['j', 'down_arrow'], ['k', 'up_arrow'], ['l', 'right_arrow']].map(([oldKey, newKey]) => ({
                        type: 'basic',
                        from: from.simultaneousKeyCodes([oldKey, 'spacebar'], ['left_control'], ['left_shift']),
                        to: [
                            to.keyCode(newKey, ['left_command', 'left_shift']),
                        ],
                        conditions: [
                            conditions.deviceIf([5426], [2596]),
                        ],
                    })),
                    // Map the space key to the left command key when one of the h, j, k and l keys has been already mapped to its corresponding arrow key.
                    // The left control key event gets emitted again when the space key is pressed,
                    // so we have limited the input key combination by specifying the left control key as the mandatory modifier.
                    ...['left_arrow', 'down_arrow', 'up_arrow', 'right_arrow'].map(key => ({
                        type: 'basic',
                        from: from.keyCode('spacebar', ['left_control'], ['any']),
                        to: [
                            to.keyCode(key, ['left_command']),
                        ],
                        conditions: [
                            conditions.variableIf(`${key}_down`, 1),
                            conditions.deviceIf([5426], [2596]),
                        ],
                    })),
                    // Avoid mapping the space key to the left command key when the left command key or the left control key is pressed.
                    // This prevents conflicts with the shortcuts for switching input sources and launching spotlight.
                    // The other modifiers are not used for these shortcuts so we have limited the input key combination by allowing no other modifiers.
                    // This only works when none of the h, j, k, l key are not mapped to the arrow keys, since this case is handled by the above mapping.
                    ...['left_command', 'left_control'].map(key => ({
                        type: 'basic',
                        from: from.keyCode('spacebar', [key], []),
                        to: [
                            to.keyCode('spacebar', [key]),
                        ],
                        conditions: [
                            conditions.variableIf('arrow_down', 0),
                            conditions.deviceIf([5426], [2596]),
                        ],
                    })),
                    // Map the space key to the left command key.
                    // The left control key and the left shift key have been excluded from the optional modifiers to prevent conflicts with the above mapping,
                    // which should not be a problem as not many shortcuts require these keys simultaneously, apart from what have been mapped by other mappings already. 
                    // On a rare occasion when you have to use the left control key or the left shift key, map unused keys to the right control key and the right shift key, respectively.
                    // This only works when none of the h, j, k, l key are not mapped to the arrow keys, since this case is handled by the above mapping.
                    {
                        type: 'basic',
                        from: from.keyCode('spacebar', [], ['caps_lock', 'left_option', 'left_shift', 'right_command', 'right_control', 'right_option', 'right_shift', 'fn']),
                        to: [
                            to.keyCode('left_command'),
                        ],
                        to_if_alone: [
                            to.keyCode('spacebar'),
                        ],
                        conditions: [
                            conditions.variableIf('arrow_down', 0),
                            conditions.deviceIf([5426], [2596]),
                        ],
                    },
                ],
            },
        ],
    };
}