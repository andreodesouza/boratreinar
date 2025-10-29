document.getElementById("btnLogin").addEventListener("click", function() {
  
  document.getElementById("logo").style.width = "150px";
  document.body.style.backgroundImage = "url('img/telalogin.png')";
  document.body.style.backgroundSize = "cover";
  document.body.style.backgroundPosition = "center";
  document.body.style.backgroundRepeat = "no-repeat";
  document.body.style.height = "100vh";
  document.body.style.margin = "0";
  document.body.style.display = "flex";
  document.body.style.justifyContent = "center";
  document.body.style.alignItems = "center";
  document.getElementById("telaInicial").style.display = "none";
  document.getElementById("telaLogin").style.display = "flex";
});

document.getElementById("btnRegistrar").addEventListener("click", function(){
document.getElementById("logo").style.width = "150px";
document.body.style.backgroundImage = "url('img/telalogin.png')"
document.body.style.backgroundSize = "cover";
document.body.style.backgroundPosition = "center";
document.body.style.backgroundRepeat = "no-repeat";
document.body.style.height = "100vh";
document.body.style.margin = "0";
document.body.style.display = "flex";
document.body.style.justifyContent = "center";
document.body.style.alignItems = "center";
document.getElementById("telaInicial").style.display = "none";
document.getElementById("telaregister").style.display = "flex";  

});

document.getElementById("btnVoltar").addEventListener('click', function(){
  document.getElementById("telaLogin").style.display = "none";
  document.getElementById("telaInicial").style.display = "flex";
  document.body.style.backgroundImage = "url('img/fundo.png')";
    document.getElementById("logo").style.width = "300px";

});

document.getElementById("btncontinuar").addEventListener('click', function(){
  document.getElementById("telaregister").style.display = "none";
  document.getElementById("dados").style.display = "flex";
});

document.getElementById("btnvoltar2").addEventListener('click', function(){
  document.getElementById("telaregister").style.display = "none";
  document.getElementById("telaInicial").style.display = "flex";
  document.body.style.backgroundImage = "url('img/fundo.png')";
  document.getElementById("logo").style.width = "300px";
});

function login(){
  window.location.href = "home.html"
}

function telaInicial(){
  window.location.href = "telainicial.html"
}

// === SISTEMA DE LOGIN E CADASTRO ===

// botão "Registrar" final (na tela de dados)
document.querySelector('#dados button').addEventListener('click', registrarUsuario);

function registrarUsuario() {
  const email = document.querySelector('.tela-register input[placeholder="Email"]').value.trim();
  const senha = document.querySelector('.tela-register input[placeholder="Senha"]').value.trim();
  const telefone = document.querySelector('.tela-register input[placeholder="Telefone"]').value.trim();
  const nome = document.querySelector('.tela-register2 input').value.trim();
  const sexo = document.querySelector('#sexo').value.trim();
  const peso = document.querySelectorAll('.tela-register3 input[type="number"]')[0].value.trim();
  const altura = document.querySelectorAll('.tela-register3 input[type="number"]')[1].value.trim();
  const pais = document.querySelectorAll('.tela-register3 input[type="text"]')[0].value.trim();

  if (!email || !senha || !nome) {
    alert("Preencha pelo menos Email, Senha e Nome completo.");
    return;
  }

  let usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];

  // Verifica se já existe
  if (usuarios.some(u => u.email === email)) {
    alert("Esse e-mail já está cadastrado!");
    return;
  }

  const novoUsuario = { email, senha, telefone, nome, sexo, peso, altura, pais };
  usuarios.push(novoUsuario);
  localStorage.setItem('usuarios', JSON.stringify(usuarios));

  alert("Usuário cadastrado com sucesso! Faça login agora.");
  document.getElementById("dados").style.display = "none";
  document.getElementById("telaLogin").style.display = "flex";
}

// === LOGIN ===
function login() {
  const usuarioInput = document.querySelector('.tela-login input[placeholder="Usuário"]').value.trim();
  const senhaInput = document.querySelector('.tela-login input[placeholder="Senha"]').value.trim();
  const lembrar = document.querySelector('#lembrar').checked;

  let usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];
  const usuario = usuarios.find(u => u.email === usuarioInput && u.senha === senhaInput);

  if (usuario) {
    alert(`Bem-vindo(a), ${usuario.nome || usuario.email}!`);
    if (lembrar) localStorage.setItem('usuarioLogado', JSON.stringify(usuario));
    // redireciona pra home
    window.location.href = "home.html";
  } else {
    alert("Usuário ou senha incorretos!");
  }
}

// === AUTO LOGIN SE LEMBRAR ===
window.onload = () => {
  const logado = JSON.parse(localStorage.getItem('usuarioLogado'));
  if (logado) {
    alert(`Bem-vindo de volta, ${logado.nome || logado.email}!`);
    window.location.href = "home.html";
  }
};

// === OUTRAS FUNÇÕES ===
function telaInicial() {
  window.location.href = "telainicial.html";
}