//Vai gerar a senha aleatoria
function generatePassword() {
  const length = document.getElementById("length").value;
  const chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+[]{}|;:,.<>?";
  let password = "";
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * chars.length);
    password += chars[randomIndex];
  }
  document.getElementById("generated-password").value = password;
}

function updateLength() {
  const length = document.getElementById("length").value;
  document.getElementById("length-value").textContent = length;
}

//Login Para Entrar
const USER = "admin";
const PASS = "1234";

function fazerLogin() {
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;
  const erroLogin = document.getElementById('erroLogin');

  if (username === USER && password === PASS) {
    document.getElementById('login-screen').classList.add('hidden');
    document.getElementById('password-screen').classList.remove('hidden');
    erroLogin.textContent = "";
  } else {
    erroLogin.textContent = "Usuário ou senha incorretos!";
  }
}

function logout() {
  document.getElementById('password-screen').classList.add('hidden');
  document.getElementById('login-screen').classList.remove('hidden');
  document.getElementById('username').value = "";
  document.getElementById('password').value = "";
  document.getElementById('generated-password').value = "";
  document.getElementById('length').value = 12;
  document.getElementById('length-value').textContent = 12;
}
