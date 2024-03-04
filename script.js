function submitForm(event) {
  event.preventDefault();

  var form = document.getElementById("myForm");
  var formData = new FormData(form);

  fetch(form.action, {
    method: form.method,
    body: formData,
  }).finally(() => {
    document.getElementById("myForm").style.display = "none";
    document.getElementById("thankYou").style.display = "block";
  });
}

function showForm() {
  var buttonContainer = document.getElementById("buttonContainer");
  buttonContainer.style.display = "none";

  var myForm = document.getElementById("myForm");
  myForm.style.display = "block";
}
