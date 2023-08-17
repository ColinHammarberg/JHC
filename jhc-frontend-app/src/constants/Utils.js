import emailjs from '@emailjs/browser';

export const emailRegex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

export function isValidEmail(email) {
  return emailRegex.test(email);
}

export const sendEmail = (e, formFieldValues) => {
    e.preventDefault();

    emailjs.sendForm('service_58k15kk', 'template_kuvwbzb', formFieldValues, 'hJYoW8PqYe75LFRVU')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };
