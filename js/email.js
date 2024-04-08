document.getElementById('myForm').addEventListener('submit', function (event) {
  emailjs.init('W3zr3blqoFWLQ5s71');

    event.preventDefault(); // Prevent the default form submission
    var templateParams = {
        name: document.getElementById('floatingPassword').value,
        email: document.getElementById('floatingInput').value,
        message: document.getElementById('floatingTextarea2').value,
        subject: document.getElementById('subjectinput').value,
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