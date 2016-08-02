// /*global jQuery:false */
jQuery(document).ready(function ($) {
  "use strict";

  $('form.contactForm').submit(function() {
    var form = $(this);
    console.log("entró submit");
    var f = $(this).find('.form-group'),
    ferror = false,
    emailExp = /^[^\s()<>@,;:\/]+@\w[\w\.-]+\.[a-z]{2,}$/i;

    f.children('input').each(function () { // run all inputs
      var i = $(this),//current input
      rule = i.attr('data-rule');

      if (rule !== undefined) {
        var ierror = false,
        pos = rule.indexOf(':', 0); // error flag for current input
        if (pos >= 0) {
          var exp = rule.substr(pos + 1, rule.length);
          rule = rule.substr(0, pos);
        } else {
          rule = rule.substr(pos + 1, rule.length);
        }

        switch (rule) {
          case 'required':
          if (i.val() === '') {ferror = ierror = true; }
          break;

          case 'maxlen':
          if (i.val().length < parseInt(exp)) { ferror = ierror = true; }
          break;

          case 'email':
          if (!emailExp.test(i.val())) { ferror = ierror = true; }
          break;

          case 'checked':
          if (!i.attr('checked')) { ferror = ierror = true; }
          break;

          case 'regexp':
          exp = new RegExp(exp);
          if (!exp.test(i.val())) { ferror = ierror = true; }
          break;
        }
        i.next('.validation').html((
          ierror ? (i.attr('data-msg') !== undefined ? i.attr('data-msg') : 'wrong Input') : ''
        )).show('blind');
      }
    });

    if (ferror) {
      return false;
    } else {
      return onSuccess(this);
    }
  });
});
