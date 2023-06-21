"use strict"

class Calculator {
    constructor(previousOperandTextElement, currentOperandTextElement) {
        this.previousOperandTextElement = previousOperandTextElement
        this.currentOperandTextElement = currentOperandTextElement
    }
    clear() {
        this.currentOperand = ''
        this.previousOperand = ''
        this.operation = undefined
    }

    delete() {

    }

    appendNumber() {

    }

    chooseOperation(operation) {

    }

    compute() {

    }

    updatedisplay() {

    }
}

const numberButtons = document.querySelectorAll('[data-number]');
const operationButtons = document.querySelectorAll("[data-operation]");
const equalsButton = document.querySelector("[data-equals]");
const deleteButton = document.querySelectorAll("[data-delete]");
const allClearButton = document.querySelectorAll("[data-all-clear]");
const previousOperandTextElement = document.querySelectorAll("[data-previous-operand]");
const currentOperandTextElement = document.querySelectorAll("[data-current-operand]");

window.addEventListener("load", start);

function start() {
    console.log("JS kører");
}


