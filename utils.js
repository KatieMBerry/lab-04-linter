const Stack = require("./Stack");

const bracketTypes = ['{', '}', '(', ')', '[', ']']

const bracketPairs = {
    '{': '}',
    '(': ')',
    '[': ']',
    '}': '{',
    ')': '(',
    ']': '['
}

const openeningBrackets = [
    '{',
    '(',
    '['
]
//filters out everything but brackets, braces and parantheses
const bracketsOnly = (item) => {
    return item
        .split('')
        .filter(item => bracketTypes.includes(item))
}

//iterates through the brackets
//compares two bracketStacks to see if they contain a matching pair of brackets
const looper = (bracketsOnly) => {
    const stackItem = new Stack();
    let result = true

    bracketsOnly.map(bracket => {
        const contents = stackItem.peek();
        if (openeningBrackets.includes(bracket)) {
            stackItem.push(bracket)
        } else {
            if (bracketPairs[bracket] === contents) {
                stackItem.pop()
            } else {
                result = {
                    missing: bracketPairs[contents || bracket]
                }
            }
        }
    })
    if (stackItem.peek()) {
        result = {
            missing: bracketPairs[stackItem.peek()]
        }
    }
    return result
}

const linter = (body) => {
    const bracket = bracketsOnly(body)
    const result = looper(bracket)
    if (result === true) {
        return {
            'success': true
        }
    } else return {
        'error': `missing ${result.missing}`
    }
}
const testLinter = linter('function add(a, b) {return a + b;}')


module.exports = linter;
