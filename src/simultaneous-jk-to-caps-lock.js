import {conditions, from, to} from './index.js';

export function main() {
    return {
        title: 'Simultaneous JK to Caps Lock',
        rules: [
            {
                description: 'Simultaneous JK to Caps Lock',
                manipulators: [
                    // Map simultaneous key down of the j and k keys to the caps lock key.
                    {
                        type: 'basic',
                        from: from.simultaneousKeyCodes(['j', 'k'], [], ['caps_lock']),
                        to: [
                            to.keyCode('caps_lock'),
                        ],
                    },
                ],
            },
        ],
    };
}