const loginForm = document.querySelector('.second-layer');
const loginBtn = document.querySelector('.login-btn');
const registerLink = document.querySelector('.register');

function handleLogin() {
  const matricNo = document.getElementById('matnum').value;
  const password = document.getElementById('psw').value;

  if (matricNo === 'student123' && password === 'password123') {
    window.location.href = '/Home/index.html';
  } else {
    alert('Invalid matric number or password. Please try again.');
  }
}

loginBtn.addEventListener('click', handleLogin);
