import emailjs from '@emailjs/browser';

export const emailRegex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

export function isValidEmail(email) {
  return emailRegex.test(email);
}

  export const sendEmail = (formFieldValues, selectedProblemTitles) => {
    const emailParams = {
      to_email: 'colin.hammarberg2@gmail.com',
      subject: 'subject',
      message: 
        `Name: ${formFieldValues.firstName + ' ' + formFieldValues.lastName} 
        Email address: ${formFieldValues.emailAddress} 
        Company: ${formFieldValues.companyName} Requested service: ${selectedProblemTitles}`,
    };
  
    emailjs.send('service_58k15kk', 'template_kuvwbzb', emailParams, 'hJYoW8PqYe75LFRVU')
      .then((result) => {
        console.log(result.text);
        console.log('result', result);
      })
      .catch((error) => {
        console.error(error.text);
      });
  };
