const selectElement = document.getElementById("laptops-menu");

selectElement.addEventListener("change", function () {
  const selectedValue = this.value;
  if (selectedValue) {
    window.location.href = selectedValue; // Redirect to the selected URL
  }
});