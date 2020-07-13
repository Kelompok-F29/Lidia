// JavaScript Document


const numbers = document.querySelectorAll(".number")
numbers.forEach((number)=>{
				 number.addEventListener("click", (event) =>{
												   
console.log(even.target.value)
				 })
				 })

const calculatorScreen = document.querySelector('.calculator-screen')
const updateScreen = (number) =>{
	calculatorScreen.value = number
	}
const numbers = document.querySelectorAll(".number")
numbers.forEach((number)=>{
				 number.addEventListener("click", (event)=>{
				updateScreen(even.target.value)
												   })
				 })
const inputNumber=(number)=>{
	if (currentNumber === '0'){
		currentNumber = number
	} else {
	currentNumber += number
}
}
numbers.forEach((number)=>{
				 number.addEventListener("click", (event)=>{
												   inputNumber(event.target.value)
												   updateScreen(currentNumber)
												   })
				 )}
const operators = document.querySelectorAll(".operator")
operators.forEach((operator)=>{
operator.addEventListener("click", (event) =>{
												   
inputOperator(even.target.value)
})
				 })
const inputOperator=(operator)=>{
	if(calculationOerator === ''){
		
	prevNumber= currentNumber{
	calculationOperator = operator
	currentNumber='0'
}
const equalSign =document.querySelectorAll(".equal-sign")

equalSign.addEventListener("click", (event) =>{
												   
console.log('equal button is pressed')
				 })
const calculate = () =>{
	let result =''
	switch(calculationOperator){
		case"+":
		result = parseFloat(prevNumber) + parseFloat(currentNumber)
		break
		case"-":
		result = prevNumber - currentNumber
		break
		case"*":
		result = prevNumber * currentNumber
		break
		case"/":
		result = prevNumber / currentNumber
		break
		default:
		return
	}
	currentNumber = result
	calculationOperator =''
}
const equalSign = document.querySelector('.equal-sign')
equalSign.addEventListener('click',()=>{
									calculate()
									updateScreen(currentNumber)
									})
const clearBtn =document.querySelectorAll(".all-clear")

clearBtn.addEventListener("click", (event) =>{
	clearAll()											   
updateScreen(currentNunber)
				 })
const clearAll=()=>{
	prevNumber=''
	calculationOperator = ''
	currentNumber='0'
}
const decimal =document.querySelectorAll(".decimal")

decimal.addEventListener("click", (event) =>{
	clearAll()											   
console.log(event.target.value)
				 })
inputDecimal =  (dot) =>{
	if {currentNumber.includes('.')){
	return}
	currentNumber += dot
}
const decimal =document.querySelectorAll(".decimal")

decimal.addEventListener("click", (event) =>{
	inputDecimal('click',(event)=>											   
updateScreen(currentNumber)})
				 
