function onSuccess(form) {
  emailjs.sendForm('default_service', 'primer_contacto', form).then(
    function () {
      $("#successmsg").addClass("show");
      $('#send-button').prop('disabled', true);
    },
    function (error) {
      alert('Hubo un error al enviar el mail.');
      console.log("FAILED. error=", error);
    });
  return false;
}
