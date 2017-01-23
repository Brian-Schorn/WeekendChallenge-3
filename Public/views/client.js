var inputOne = 0;
var inputTwo = 0;
var inputOperator = 'add';
var justResult = true;
var isThereADecimal = false;


$(function(){
  // console.log('document loaded');

  //Listens for number or decimal point inputs
  $('#calcForm').on('click','.number', inputValue);
  //Listens for mathematical operations input
  $('#calcForm').on('click','.operator', inputOper);
  //Listens for a submit, which is tied to "="
  $('#calcForm').on('submit', computeValues);
  //Listens for a rest, which is tied to "clr"
  $('#calcForm').on('reset', resetForm);


});


function inputOper(event) {
  //Sets inputOne to the value of the result field and
  //inputOperator to the clicked operator button and
  //resets the field

  var input = $(this).data('value');
  inputOperator = input;
  inputOne = $('#result').val();
  $('#result').val("");
  isThereADecimal = false;
}


function inputValue(event) {
  //If a result was just returned, clears the field on input
  if(justResult){
    $('#result').val("");
    isThereADecimal = false;
  }
  justResult = false;
  //Adds the value of the clicked button to the input field
  var input = $(this).data('value');
  if ((!isThereADecimal) || !(input == ".")){
    $('#result').val($('#result').val()+input);
  }
  if (input == "."){
    isThereADecimal = true;
  }

}

function computeValues(event) {
  // console.log("equal pressed");
  //Sets the value of justResult to true indicating a result was just returned
  justResult = true;
  event.preventDefault();
  //sets inputTwo to the value of the result field
  inputTwo = $('#result').val();
  isThereADecimal = false;
  // console.log(inputOne);
  // console.log(inputTwo);
  // console.log(inputOperator);
  //builds the object to be sent to the server
  var formData = new Object();
  formData.value1 = inputOne;
  formData.value2 = inputTwo;
  formData.valueOperator = inputOperator;
  // console.log(formData);

  // var formData = $(this).serialize();
  // console.log(formData);

  //Sends the object containing both values and the operator to the server
  $.ajax({
    url: '/compute',
    type: 'POST',
    data: formData,
    success: getResult
  });
}


function getResult() {
  // console.log("Get Result");
  //Once the object is sent we then retrieve the result from the server
  $.ajax({
    url: '/result',
    type: 'GET',
    success: appendResult
  });
}

function appendResult(result) {
  //Once we retrieve the result we display it on the DOM
  $('#result').val(result);
  console.log(result);
}

function resetForm() {
  //Resets the calculator
  $('#result').val("0");
  justResult = true;
}
