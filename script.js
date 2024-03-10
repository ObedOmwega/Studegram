document.addEventListener('DOMContentLoaded', function() {

  const signUpBtn = document.querySelector('.signup-btn');

  const loginBtn = document.querySelector('.login-btn');

  signUpBtn.addEventListener('mouseover', function() {

    signUpBtn.style.color = getRandomColor();

  });

  signUpBtn.addEventListener('mouseout', function() {

    signUpBtn.style.color = 'white';

  });

  loginBtn.addEventListener('mouseover', function() {

    loginBtn.style.color = getRandomColor();

  });

  loginBtn.addEventListener('mouseout', function() {

    loginBtn.style.color = 'white';

  });

  signUpBtn.addEventListener('click', function() {

    alert('Sign Up button clicked!');

  });

  loginBtn.addEventListener('click', function() {

    alert('Log In button clicked!');

  });

  function getRandomColor() {

    const letters = '0123456789ABCDEF';

    let color = '#';

    for (let i = 0; i < 6; i++) {

      color += letters[Math.floor(Math.random() * 16)];

    }

    return color;

  }

});
