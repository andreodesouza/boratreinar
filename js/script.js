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