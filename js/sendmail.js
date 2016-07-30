function onSuccess(ferror, form) {
    if (ferror) {
        return false;
    } else {
        emailjs.sendForm('default_service', 'primer_contacto', form).then(
            function () {
                $("#successmsg").addClass("show");
                $('#send-button').prop('disabled', true);
            },
            function (error) {
                alert('Hubo un error al enviar el mail.');
            });
        return false;
    }
}
