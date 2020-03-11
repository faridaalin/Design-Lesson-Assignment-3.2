const formContainer = document.querySelector(".container");
const modal = document.querySelector(".modal");

const submit = document.querySelector(".btn-primary");
submit.addEventListener("click", showModal);

function showModal(event) {
  event.preventDefault();

  formContainer.style.display = "none";
  modal.classList.remove("modal");
}

const deleteButton = document.querySelector('.btn-secondary')
deleteButton.addEventListener("click", deleteAccount);


function deleteAccount(event) {

}  
