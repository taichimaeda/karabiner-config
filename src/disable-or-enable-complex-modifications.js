import {conditions, from, to} from './index.js';

export function main() {
    return {
        title: 'Disable or Enable Complex Modifications',
        rules: [
            {
                description: 'Disable or Enable Complex Modifications',
                manipulators: [
                    // Disable complex modifications if enabled.
                    {
                        type: 'basic',
                        from: from.keyCode('scroll_lock'),
                        to: [
                            to.setVariable('disabled', 1),
                        ],
                        conditions: [
                            conditions.variableIf('disabled', 0),
                        ],
                    },
                    // Enable complex modifications if disabled.
                    {
                        type: 'basic',
                        from: from.keyCode('scroll_lock'),
                        to: [
                            to.setVariable('disabled', 0),
                        ],
                        conditions: [
                            conditions.variableIf('disabled', 1),
                        ],
                    },
                ],
            },
        ],
    };
}