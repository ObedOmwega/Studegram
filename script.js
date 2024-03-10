document.addEventListener('DOMContentLoaded', function() {

  const signUpBtn = document.querySelector('.signup-btn');
  const loginBtn = document.querySelector('.login-btn');
  const homeBtn = document.querySelector('.home-btn');
  const discoverBtn = document.querySelector('.discover-btn');
  const studyGroupsBtn = document.querySelector('.study-groups-btn');
  const profileBtn = document.querySelector('.profile-btn');

  signUpBtn.addEventListener('click', function() {
    window.location.href = 'signup.html';
  });

  loginBtn.addEventListener('click', function() {
    window.location.href = 'login.html';
  });

  homeBtn.addEventListener('click', function() {
    alert('Sign Up or Log In First!');
  });

  discoverBtn.addEventListener('click', function() {
    alert('Sign Up or Log In First!');
  });

  studyGroupsBtn.addEventListener('click', function() {
    alert('Sign Up or Log In First!');
  });

  profileBtn.addEventListener('click', function() {
    alert('Sign Up or Log In First!');
  });

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

  function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

});
