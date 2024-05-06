const form = document.getElementById("form");
const titulo = document.getElementById("titulo");
const autor = document.getElementById("autor");
const editora = document.getElementById("editora");
const paginas = document.getElementById("numeroPaginas");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  checkInputBookName();
});

function checkInputBookName() {
  const bookName = titulo.value;

  if (bookName === "") {
    errorInput(titulo, "O nome do livro é obrigatório");
  } else {
    const formItem = titulo.parentElement;
    formItem.classList = "form-content";
  }
}

function errorInput(input, message) {
  const formItem = input.parentElement;
  const textMessage = formItem.querySelector("a");

  textMessage.innerText = message;

  formItem.className = "form-content error";
}
