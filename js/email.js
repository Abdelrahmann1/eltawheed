
//   emailjs.init('j6X6rPwNM8HTip-uO');

//   function send() {
//     var templateParams = {
//       name: 'blackatem',
//       email: 'sakjgdsa@kjsdgj',
//       subject: 'Check thssis out!',
//     };

//     emailjs.send('service_1ye5xn6', 'template_7121uuw', templateParams).then(
//       (response) => {
//         console.log('SUCCESS!', response.status, response.text);
//       },
//       (error) => {
//         console.log('FAILED...', error);
//       },
//     );
//   }

document.getElementById('myForm').addEventListener('submit', function (event) {
  emailjs.init('W3zr3blqoFWLQ5s71');

    event.preventDefault(); // Prevent the default form submission
    var templateParams = {
        name: document.getElementById('floatingPassword').value,
        email: document.getElementById('floatingInput').value,
        subject: document.getElementById('floatingTextarea2').value
    };

    emailjs.send('service_1ye5xn6', 'template_7121uuw', templateParams).then(
      (response) => {
        alert("the message sent successfully")
        location.reload();
        // console.log('SUCCESS!', response.status, response.text);
      },
      (error) => {
        alert('FAILED...', error)
        location.reload();
      },
    );
    // Log the form data to the console
    // console.log({
    //     name: document.getElementById('floatingPassword').value,
    //     email: document.getElementById('floatingInput').value,
    //     subject: document.getElementById('floatingTextarea2').value
    // });
});