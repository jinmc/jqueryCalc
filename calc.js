
var isOperatorPressed = false;
var whichOperator = '';
var operand1;
var operand2;
var duringOperation = false;
var rightAfter = false;

function showNum() {
	if (isOperatorPressed) {
		duringOperation = true;
	}
	
	if (isOperatorPressed) {
		$('#display').val('');
	}
	$('#display').val($('#display').val() + this.value);
	isOperatorPressed = false;
	rightAfter = false;

	// var numPanel = document.getElementById('display');
	// numPanel.value += this.value;
}

function operatorClick() {
	if (duringOperation) {
		var temp = $('#display').val();
		operand1 = operate(temp);
		$('#display').val(operand1);
		duringOperation = false;
		isOperatorPressed = true;
		whichOperator = this.innerHTML;
	} else {
		operand1 = $('#display').val();
		isOperatorPressed = true;
		whichOperator = this.innerHTML;
	}
	rightAfter = false;

}

function clear() {
	// var numPanel = document.getElementById('display');
	// numPanel.value = '';
	isOperatorPressed = false;
	whichOperator = '';
	$('#display').val('');
	rightAfter = false;

}

function operate(temp) {
	if (whichOperator === '+') {
		var result = Number(operand1) + Number(temp);
	} else if (whichOperator === '-') {
		var result = Number(operand1) - Number(temp);
	} else if (whichOperator === '*') {
		var result = Number(operand1) * Number(temp);
	} else {
		var result = Number(operand1) / Number(temp);
	}
	return result;
}

function equals() {
	if (!rightAfter && !duringOperation) return;
	if (rightAfter) {
		var result = operate(operand2);
		$('#display').val(result);
		duringOperation = false;
		operand1 = result;
		rightAfter = true;
		
		return;
	}
	operand2 = Number($('#display').val());
	if (whichOperator === '+') {
		var result = Number(operand1) + Number($('#display').val());
		$('#display').val(result);
	} else if (whichOperator === '-') {
		var result = Number(operand1) - Number($('#display').val());
		$('#display').val(result);
	} else if (whichOperator === '*') {
		var result = Number(operand1) * Number($('#display').val());
		$('#display').val(result);
	} else {
		var result = Number(operand1) / Number($('#display').val());
		$('#display').val(result);
	}
	
	duringOperation = false;
	operand1 = result;
	rightAfter = true;
}

// var button1 = document.getElementById('button1');
// var button1 = $('#button1');
$('#button1').click(showNum);
$('#button2').click(showNum);
$('#button3').click(showNum);
$('#button4').click(showNum);
$('#button5').click(showNum);
$('#button6').click(showNum);
$('#button7').click(showNum);
$('#button8').click(showNum);
$('#button9').click(showNum);
$('#button0').click(showNum);


$('#addButton').click(operatorClick);
$('#subtractButton').click(operatorClick);
$('#multiplyButton').click(operatorClick);
$('#divideButton').click(operatorClick);


$('#clearButton').click(clear);

$('#equalsButton').click(equals);

// button1.addEventListener('click', showNum);

/*
 * Implement all your JavaScript in this file!
 */