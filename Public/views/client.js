var inputOne = 0;
var inputTwo = 0;
var inputOperator = 'add';
var justResult = false;


$(function(){
  console.log('document loaded');


  $('#calcForm').on('click','.number', inputValue);
  $('#calcForm').on('click','.operator', inputOper);
  $('#calcForm').on('submit', computeValues);
  $('#calcForm').on('reset', resetForm);


});

function inputOper(event) {

  var input = $(this).data('value');
  inputOperator = input;
  inputOne = $('#result').val();
  $('#result').val("");
}


function inputValue(event) {
  if(justResult){
    $('#result').val("");
  }
  justResult = false;
  var input = $(this).data('value');
  $('#result').val($('#result').val()+input);
}

function computeValues(event) {
  // console.log("equal pressed");
  justResult = true;
  event.preventDefault();
  inputTwo = $('#result').val();
  // console.log(inputOne);
  // console.log(inputTwo);
  // console.log(inputOperator);
  var formData = new Object();
  formData.value1 = inputOne;
  formData.value2 = inputTwo;
  formData.valueOperator = inputOperator;
  console.log(formData);

  // var formData = $(this).serialize();
  // console.log(formData);

  $.ajax({
    url: '/compute',
    type: 'POST',
    data: formData,
    success: getResult
  });
}


function getResult() {
  // console.log("Get Result");
  $.ajax({
    url: '/result',
    type: 'GET',
    success: appendResult
  });
}

function appendResult(result) {
  $('#result').val(result);
  console.log(result);
}

function resetForm() {
  $("#result").empty();
}
