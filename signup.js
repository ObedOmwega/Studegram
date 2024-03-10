document.addEventListener('DOMContentLoaded', function() {
  const signUpForm = document.getElementById('signup-form');
  const requiredFields = ['fullname', 'email', 'password', 'confirm-password', 'school', 'major', 'year'];

  signUpForm.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevents the form from submitting by default

    // Reset red margins from previously highlighted fields
    resetRedMargins();

    let isValid = true;

    requiredFields.forEach(function(fieldId) {
      const field = document.getElementById(fieldId);
      if (!field.value.trim()) {
        isValid = false;
        field.style.border = '1px solid red'; // Highlight the empty field with a red border
        field.style.margin = '0px 0px 10px 0px'; // Add margin to the empty field
      }
    });

    if (isValid) {
      // All required fields are filled, proceed with submission
      signUpForm.submit();
      signUpSuccess(); // Call the success function
    }
  });

  function resetRedMargins() {
    requiredFields.forEach(function(fieldId) {
      const field = document.getElementById(fieldId);
      field.style.border = '1px solid #ccc'; // Reset border to default
      field.style.margin = '10px 0'; // Reset margin to default
    });
  }

  function signUpSuccess() {
    // Redirect to a new page with success message and emoji
    window.location.href = 'success.html';
  }
});
