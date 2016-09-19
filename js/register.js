function onSuccess(form) {
  var request = {};
  request.username = $('#name').val();
  request.password = $('#password').val();
  request.email = $('#email').val();
  request.phone = $('#phone').val();
  request.company = $('#company').val();

  $.ajax({
    url: 'http://10.211.55.2:1337/register',
    data: JSON.stringify(request),
    contentType: 'application/json; charset=utf-8',
    type: 'POST'
  })
  .done(function () {
    $("#successmsg").addClass("show");
  })
  .fail(function (error) {
    $("#errormsg").addClass("show");
    if (error.responseText) {
      alert(error.responseText);
    }
  });
  return false;
}
