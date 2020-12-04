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

//filters out everything but brackets, braces and parantheses
const bracketsOnly = (item) => {
    return item
        .split('')
        .filter(item => bracketTypes.includes(item))
}

//iterates through the brackets
//compares two bracketStacks to see if they contain a matching pair of brackets
const linter = (bracketsOnly) => {
    const stackItem = new Stack();

    bracketsOnly.map(bracket => {
        const contents = stackItem.peek();
        if (!contents) {
            stackItem.push(bracket)
        } else {
            if (bracketPairs[bracket] === contents) {
                stackItem.pop()
            } else {
                result = {
                    missing: bracketPairs[bracket]
                }
            }
        }
    })
    return result
}

module.exports = linter;
