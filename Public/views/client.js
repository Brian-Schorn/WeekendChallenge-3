$(function(){
  console.log('document loaded');

  $('#calcForm').on('submit', computeValues);
  $('#calcForm').on('reset', resetForm);


});


function computeValues(event) {
  event.preventDefault();
  $('#result').empty();

  var formData = $(this).serialize();
  console.log(formData);

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
  $('#result').text("That expression returns the result of: " + result);
  console.log(result);
}

function resetForm() {
  $(this).closest('form').find('input[type=text], textarea').val("");
  $('#result').empty();
}
