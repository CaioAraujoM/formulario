const form = document.getElementById("nome");
const empresa = document.getElementById("empresa");
const tel = document.getElementById("itel");
const email = document.getElementById("iemail");

form.addEventListener("submit", (event) => {
 event.preventDefault();

 alert("CADASTRO ENVIADO!!!")
})