document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault();
    document.getElementById('formMessage').style.display = 'block';
    this.reset();
  });
