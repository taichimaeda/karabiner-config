import {conditions, from, to} from './index.js';

export function main() {
    return {
        title: 'Left Shift + Delete or Backspace to Delete Forward',
        rules: [
            {
                description: 'Left Shift + Delete or Backspace to Delete Forward',
                manipulators: [
                    // Map the delete key plus the left shift key to the delete forward key.
                    {
                        type: 'basic',
                        from: from.keyCode('delete_or_backspace', ['left_shift'], []),
                        to: [
                            to.keyCode('delete_forward'),
                        ],
                        conditions: [
                            conditions.variableIf('disabled', 0),
                        ],
                    },
                ],
            },
        ],
    };
}