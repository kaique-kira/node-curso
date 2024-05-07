const form = document.getElementById("form");
const titulo = document.getElementById("titulo");
const autor = document.getElementById("autor");
const editora = document.getElementById("editora");
const paginas = document.getElementById("numeroPaginas");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  checkForm();
});

autor.addEventListener("blur", () => {
  checkInputAutor();
});

titulo.addEventListener("blur", () => {
  checkInputBookName();
});

editora.addEventListener("blur", () => {
  checkInputEditora();
});

paginas.addEventListener("blur", () => {
  checkInputPaginas();
});
function checkInputBookName() {
  const bookName = titulo.value;

  if (bookName === "") {
    errorInput(titulo, "O nome do livro é obrigatório");
  } else {
    const formItem = titulo.parentElement;
    formItem.className = "form-content";
  }
}
function checkInputAutor() {
  const writterName = autor.value;
  if (writterName === "") {
    errorInput(autor, "O nome do autor é obrigatório");
  } else {
    const formItem = autor.parentElement;
    formItem.className = "form-content";
  }
}

function checkInputEditora() {
  const publisher = editora.value;
  if (publisher === "") {
    errorInput(editora, "O nome da editora é obrigatório");
  } else {
    const formItem = editora.parentElement;
    formItem.className = "form-content";
  }
}

function checkInputPaginas() {
  const pages = paginas.value;
  if (pages === "") {
    errorInput(paginas, "O número de páginas é obrigatório");
  } else {
  }
  const formItem = paginas.parentElement;
  formItem.className = "form-content";
}

async function checkForm() {
  checkInputBookName();
  checkInputAutor();
  checkInputEditora();
  checkInputPaginas();

  const formItem = form.querySelectorAll(".form-content");
  const isValid = [...formItem].every((item) => {
    return item.className === "form-content";
  });

  if (isValid) {
    const data = {
      titulo: titulo.value,
      autor: autor.value,
      editora: editora.value,
      numeroPagina: parseInt(paginas.value),
    };

    try {
      const response = await fetch("http://localhost:3000/livros", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        alert("Livro cadastrado com sucesso!");
      } else {
        throw new Error("Erro ao cadastrar o livro");
      }
    } catch (error) {
      console.error("Erro ao cadastrar o livro", error);
      alert("Erro ao cadastrar o livro");
    }
  }
}
function errorInput(input, message) {
  const formItem = input.parentElement;
  const textMessage = formItem.querySelector("a");

  textMessage.innerText = message;

  formItem.className = "form-content error";
}
