const form = document.getElementById('formulario');
const nome = document.getElementById('inputname');
const texto = document.getElementById('texto');
const comentarios = document.getElementById('comentarios');

form.addEventListener('submit', (event) => {
    event.preventDefault();
    let p = document.createElement('p');
    p.classList = 'comentario';
    p.innerHTML = `<strong>${nome.value}: </strong> ${texto.value}`;
    comentarios.appendChild(p);
    nome.value = '';
    texto.value = '';
    nome.focus();
});

(event) => {
  //bloco
}