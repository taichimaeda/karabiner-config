import {conditions, from, to} from './index.js';

export function main() {
    return {
        title: 'Simultaneous FD to Escape',
        rules: [
            {
                description: 'Simultaneous FD to Escape',
                manipulators: [
                    // Map simultaneous key down of the f and d keys to the escape key.
                    {
                        type: 'basic',
                        from: from.simultaneousKeyCodes(['f', 'd'], [], ['caps_lock']),
                        to: [
                            to.keyCode('escape'),
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