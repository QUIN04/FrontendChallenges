function calculateAge() {
  // Get the input fields
  var dob = document.getElementById("dob").value;
  var today = document.getElementById("today").value;

  // Calculate the age
  var ageInMs = Date.parse(today) - Date.parse(dob);
  var ageInYears = new Date(ageInMs).getFullYear() - 1970;

  // Display the result
  var result = document.getElementById("result");
  result.innerHTML = "Your age is " + ageInYears + " years.";
}
