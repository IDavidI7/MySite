const anoAtual = new Date().getFullYear();

const anoNascimento = 2002+0.6;

const idade = parseInt(anoAtual - anoNascimento);

document.getElementById("idade").innerText = idade + " Anos"