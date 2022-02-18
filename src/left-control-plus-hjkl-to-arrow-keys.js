import {conditions, from, to} from './index.js';

export function main() {
    return {
        // This 'Left Control + HJKL to Arrow Keys' rule has to have a higher priority than the 'Spacebar to Left Command' rule
        // in the Karabiner-Elements app so that the simultaneous key downs can be recognized correctly.
        title: 'Left Control + HJKL to Arrow Keys',
        rules: [
            {
                description: 'Left Control + HJKL to Arrow Keys',
                manipulators: [
                    // Ignore the left control key on left option or left shift when an arrow key is pressed.
                    // This prevents unexpected behaviors when moving cursors per word with an arrow plus the left option key
                    // or when making a selection with an arrow plus the left shift key.
                    ...['left_option', 'left_shift'].map(key => ({
                        type: 'basic',
                        from: from.keyCode(key, ['left_control'], []),
                        to: [
                            to.keyCode(key),
                        ],
                        conditions: [
                            conditions.variableIf('arrow_down', 1),
                        ],
                    })),
                    // Map h, j, k and l keys plus the left control key to the corresponding arrow keys.
                    ...[['h', 'left_arrow'], ['j', 'down_arrow'], ['k', 'up_arrow'], ['l', 'right_arrow']].map(([oldKey, newKey]) => ({
                        type: 'basic',
                        from: from.keyCode(oldKey, ['left_control'], ['any']),
                        to: [
                            to.setVariable('arrow_down', 1),
                            to.setVariable(`${newKey}_down`, 1),
                            to.keyCode(newKey),
                        ],
                        to_after_key_up: [
                            to.setVariable('arrow_down', 0),
                            to.setVariable(`${newKey}_down`, 0),
                        ],
                    })),
                ],
            },
        ],
    };
}