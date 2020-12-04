//where we are going to have our push, pop, peek methods
//use stack to call the remove characters function?

class Stack {
    #stack;

    constructor() {
        this.#stack = [];
    }

    //put item ontop of stack
    push(item) {
        this.#stack.push(item);
    }

    //remove item from top of stack and return item
    pop() {
        return this.#stack.pop();
    }

    //look at the item at the top of stack and return item
    peek() {
        return this.#stack[this.#stack.length - 1];
    }
}

module.exports = Stack;
