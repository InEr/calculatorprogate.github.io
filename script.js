const numbers = document.querySelectorAll(".number")
console.log(numbers)

let prevNumber=''
let calculationOperator=''
let currentNumber='0'

numbers.forEach((number) => {
	number.addEventListener("click", () => {
		console.log("number is pressed")
	})
})

numbers.forEach((number) => {
	number.addEventListener("click", (event) => {
		console.log(event.target.value)
	})
})

const calculatorScreen = document.querySelector('.calculator-screen')

const updateScreen = (number) => {
	calculatorScreen.value = number
}

// const numbers = document.querySelectorAll(".number")

numbers.forEach((number) => {
	number.addEventListener("click", (event) => {
		updateScreen(event.target.value)
	})
})

const inputNumber = (number) => {
	// currentNumber = number
	// currentNumber += number
	if (currentNumber === '0') {
		currentNumber = number
	} else {
		currentNumber += number
	}
}

numbers.forEach((number) => {
	number.addEventListener("click", (event) => {
		inputNumber(event.target.value)
		updateScreen(currentNumber)
	})
})

// const inputNumber = (number) => {
// 	currentNumber += number
// }

// const inputNumber = (number) => {
// 	if (currentNumber === '0') {
// 		currentNumber = number
// 	} else {
// 		currentNumber += number
// 	}
// }

const operators = document.querySelectorAll(".operator")

operators.forEach((operator) => {
	operator.addEventListener("click", (event) => {
		console.log(event.target.value)
	})
})

const inputOperator = (operator) => {
	if(calculationOperator===''){
		prevNumber = currentNumber
	}
	
	calculationOperator = operator
	currentNumber = ''
}

// const operators = document.querySelectorAll(".operator")

operators.forEach((operator) => {
	operator.addEventListener("click", (event) => {
		inputOperator(event.target.value)
	})
})

const equalSign = document.querySelector('.equal-sign')

equalSign.addEventListener('click', () => {
	console.log('equal button is pressed')
})

const calculate = () => {
	// let result = ''
	// switch(calculationOperator) {
	// 	case '+':
	// 		result = prevNumber + currentNumber
	// 		break
	// 	case '-':
	// 		result = prevNumber - currentNumber
	// 		break
	// 	case '*':
	// 		result = prevNumber * currentNumber
	// 		break
	// 	case '/':
	// 		result = prevNumber / currentNumber
	// 		break
	// 	default:
	// 		return
		let result = ''
	switch(calculationOperator) {
		case '+':
			result = parseFloat(prevNumber) + parseFloat(currentNumber)
			break
		case '-':
			result = parseFloat(prevNumber) - parseFloat(currentNumber)
			break
		case '*':
			result = parseFloat(prevNumber) * parseFloat(currentNumber)
			break
		case '/':
			result = parseFloat(prevNumber) / parseFloat(currentNumber)
			break
	}
	
	currentNumber = result
	calculationOperator = ''
}

// const equalSign = document.querySelectorAll('.equal-sign')

equalSign.addEventListener('click', () => {
	calculate()
	updateScreen(currentNumber)
})

// const calculate = () => {
// 	let result = ''
// 	switch(calculationOperator) {
// 		case '+':
// 			result = parseFloat(prevNumber) + parseFloat(currentNumber)
// 			break
// 	}
// }

const clearBtn = document.querySelector('.all-clean')

clearBtn.addEventListener('click', () => {
	console.log('AC button is pressed')
})

const clearAll = () => {
	prevNumber =''
	calculationOperator = ''
	currentNumber = '0'
}




// const clearBtn = document.querySelectorAll('.all-clear')

clearBtn.addEventListener('click', () => {
	clearAll()
	updateScreen(currentNumber)
})

const percentBtn = document.querySelector('.percentage')

percentBtn.addEventListener('click',()=> {
	currentNumber = currentNumber / 100
	updateScreen(currentNumber)
	console.log('Percentage button is pressed')
})




const decimal = document.querySelector('.decimal')

decimal.addEventListener('click', (event) => {
	console.log(event.target.value)
})
	
inputDecimal =(dot) => {
	if(currentNumber.includes('.')) {
		return
	}
	currentNumber += dot

}

// const decimal = document.querySelectorAll('.decimal')

decimal.addEventListener('click', (event) => {
	inputDecimal(event.target.value)
	updateScreen(currentNumber)
})

// inputDecimal = (dot) => {
// 	if(currentNumber.includes('.')) {
// 		return
// 	}
// 	currentNumber += dot
// }

// const inputOperator = (operator) => {
// 	if (calculationOperator === '') {
// 		prevNumber = currentNumber
// 	}
// 	calculationOperator = operator
// 	currentNumber = '0'
// }
