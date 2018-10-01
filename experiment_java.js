var $form = $('form#Test-form'),
    url = 'https://script.google.com/macros/s/AKfycbwaKbnIzLxV-T4Jv_QDgAfpKilsXvvD4PCamXXUg5egMcZjR7PQ/exec'

$('#submit-form').on('click', function(e) {
  e.preventDefault();
  var jqxhr = $.ajax({
    url: url,
    method: "GET",
    dataType: "json",
    data: $form.serializeObject()
  }).success(
    // do something
  );
})