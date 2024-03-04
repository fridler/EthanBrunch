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
