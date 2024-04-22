export default [
    {
        direction: "left",
        keyCode: 37,
        type: 'arrow',
        move: {
            x: -1,
            y: 0
        }
    },
    {
        direction: "right",
        keyCode: 39,
        type: 'arrow',
        move: {
            x: 1,
            y: 0
        }
    },
    {
        direction: "up",
        keyCode: 38,
        type: 'arrow',
        move: {
            x: 0,
            y: -1
        }
    },
    {
        direction: "down",
        keyCode: 40,
        type: 'arrow',
        move: {
            x: 0,
            y: 1
        }
    },
    {
        direction: "left",
        keyCode: 65,
        type: 'wasd',
        move: {
            x: -1,
            y: 0
        }
    },
    {
        direction: "right",
        keyCode: 68,
        type: 'wasd',
        move: {
            x: 1,
            y: 0
        }
    },
    {
        direction: "up",
        keyCode: 87,
        type: 'wasd',
        move: {
            x: 0,
            y: -1
        }
    },
    {
        direction: "down",
        keyCode: 83,
        type: 'wasd',
        move: {
            x: 0,
            y: 1
        }
    },
    {
        keyCode: 32,
        type: 'start',
    },
    {
        keyCode: 13,
        type: 'start',
    },
]
// w -a -s -d
// 87-65-83-68
// ↑ |← |↓ |→
// 38-37-40-39