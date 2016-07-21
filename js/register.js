function onSuccess (ferror, form){
  if (ferror) {
    return false;
  } else {
    var request = {};
    request.username = $('#name').val();
    request.password = $('#password').val();
    request.email = $('#email').val();
    request.phone = $('#phone').val();
    request.company = $('#company').val();

    $.ajax({
      url: 'http://localhost:1337/register',
      data: JSON.stringify(request),
      contentType: 'application/json; charset=utf-8',
      type: 'POST'
    })
    .done(function() {
      $("#successmsg").addClass("show");
    })
    .fail(function() {
      $("#errormsg").addClass("show");
    });

    return false;
  }
}
