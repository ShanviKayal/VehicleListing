

const itemsPerPage = 3;
const items = document.querySelectorAll('.vehicle-table tbody tr');
const pagination = document.querySelector('.pagination');
const prevBtn = pagination.querySelector('.prev');
const nextBtn = pagination.querySelector('.next');
const pages = pagination.querySelectorAll('.page');



let currentPage = 1;



  // Addfunction editVehicle() {
  // Get the current values


  function showVehicleDetails(vin) {
      // TODO: fetch the vehicle details from the server using the VIN
      // and update the content of the vehicle-drawer with the details
      document.getElementById("vehicle-vin").innerText = vin;
      document.getElementById("vehicle-device-info").innerText = "Device info";
      document.getElementById("vehicle-location").innerText = "Location";
      document.getElementById("vehicle-battery-status").innerText = "Battery status";
      document.getElementById("vehicle-gprs").innerText = "GPRS";
      document.getElementById("vehicle-alarm").innerText = "Alarm";
      document.getElementById("vehicle-current-trip-status").innerText = "Current trip status";

      // show the vehicle-drawer
      document.getElementById("vehicle-drawer").style.display = "block";
    }

    function hideVehicleDetails() {
      // hide the vehicle-drawer
    document.getElementById("vehicle-drawer").style.display = "none";
  }


  function showEditVehicleDetails() {
    var vehicleDrawer = document.getElementById("vehicle-drawer");
    var editVehicleDrawer = document.getElementById("edit-vehicle-drawer");
    vehicleDrawer.style.display = "none";
    editVehicleDrawer.style.display = "block";

  }

    // populate the form with the

  function hideEditVehicleDetails() {
    var vehicleDrawer = document.getElementById("vehicle-drawer");
    var editVehicleDrawer = document.getElementById("edit-vehicle-drawer");
    vehicleDrawer.style.display = "block";
    editVehicleDrawer.style.display = "none";
  }


  function saveVehicle() {
    var vin = document.getElementById("edit-vehicle-vin").value;
    var deviceInfo = document.getElementById("edit-vehicle-device-info").value;
    var location = document.getElementById("edit-vehicle-location").value;
    var batteryStatus = document.getElementById("edit-vehicle-battery-status").value;
    var gprs = document.getElementById("edit-vehicle-gprs").value;
    var alarm = document.getElementById("edit-vehicle-alarm").value;
    var currentTripStatus = document.getElementById("edit-vehicle-current-trip-status").value;

    // Perform save operation here


    hideEditVehicleDetails();
  }
  // function to show the edit vehicle dialog box

  // Get the edit vehicle dialog element
  var editVehicleDialog = document.getElementById("edit-vehicle-dialog");

  // Get the form element inside the edit vehicle dialog
  var editVehicleForm = editVehicleDialog.querySelector("form");

  // Get the input fields inside the edit vehicle form
  var deviceInfoInput = editVehicleForm.querySelector("#device-info");
  var locationInput = editVehicleForm.querySelector("#location");
  var batteryStatusInput = editVehicleForm.querySelector("#battery-status");
  var gprsInput = editVehicleForm.querySelector("#gprs");
  var alarmInput = editVehicleForm.querySelector("#alarm");
  var currentTripStatusInput = editVehicleForm.querySelector("#current-trip-status");

  // Function to show the edit vehicle dialog
  function showEditVehicleDialog() {
    editVehicleDialog.style.display = "block";
  }

  // Function to hide the edit vehicle dialog
  function hideEditVehicleDialog() {
    editVehicleDialog.style.display = "none";
  }



  // Function to save the vehicle details
  function saveVehicleDetails() {
    // Get the values of the input fields
    var deviceInfo = deviceInfoInput.value;
    var location = locationInput.value;
    var batteryStatus = batteryStatusInput.value;
    var gprs = gprsInput.value;
    var alarm = alarmInput.value;
    var currentTripStatus = currentTripStatusInput.value;

    // TODO: Save the vehicle details to the server

    // Hide the edit vehicle dialog
    hideEditVehicleDialog();
  }

  // Add event listeners to the edit vehicle dialog
  editVehicleDialog.querySelector(".close").addEventListener("click", hideEditVehicleDialog);
  editVehicleForm.addEventListener("submit", function(event) {
    event.preventDefault();
    saveVehicleDetails();
  });


function showPage(pageNumber) {
  const startIndex = (pageNumber - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  for (let i = 0; i < items.length; i++) {
    if (i >= startIndex && i < endIndex) {
      items[i].style.display = '';
    } else {
      items[i].style.display = 'none';
    }
  }

  updatePagination();
}

function updatePagination() {
  for (let i = 0; i < pages.length; i++) {
    pages[i].classList.remove('active');
  }

  pages[currentPage - 1].classList.add('active');

  if (currentPage === 1) {
    prevBtn.style.pointerEvents = 'none';
    prevBtn.style.opacity = '0.5';
  } else {
    prevBtn.style.pointerEvents = 'auto';
    prevBtn.style.opacity = '1';
  }

  if (currentPage === pages.length) {
    nextBtn.style.pointerEvents = 'none';
    nextBtn.style.opacity = '0.5';
  } else {
    nextBtn.style.pointerEvents = 'auto';
    nextBtn.style.opacity = '1';
  }
}

showPage(currentPage);

for (let i = 0; i < pages.length; i++) {
  pages[i].addEventListener('click', () => {
    currentPage = i + 1;
    showPage(currentPage);
  });
}

prevBtn.addEventListener('click', () => {
  if (currentPage > 1) {
    currentPage--;
    showPage(currentPage);
  }
});

nextBtn.addEventListener('click', () => {
  if (currentPage < pages.length) {
    currentPage++;
    showPage(currentPage);
  }
});
function editVehicle() {
  // Get the current values
  var vin = document.getElementById("vehicle-vin").innerText;
  var deviceInfo = document.getElementById("vehicle-device-info").innerText;
  var location = document.getElementById("vehicle-location").innerText;
  var batteryStatus = document.getElementById("vehicle-battery-status").innerText;
  var gprs = document.getElementById("vehicle-gprs").innerText;
  var alarm = document.getElementById("vehicle-alarm").innerText;
  var currentTripStatus = document.getElementById("vehicle-current-trip-status").innerText;

  // Create a form and pre-populate the fields
  var formHtml = `
    <h3>Edit Vehicle</h3>
    <form>
      <label>VIN:</label>
      <input type="text" name="vin" value="${vin}">

      <label>Device Info:</label>
      <input type="text" name="deviceInfo" value="${deviceInfo}">

      <label>Location:</label>
      <input type="text" name="location" value="${location}">

      <label>Battery Status:</label>
      <input type="text" name="batteryStatus" value="${batteryStatus}">

      <label>GPRS:</label>
      <input type="text" name="gprs" value="${gprs}">

      <label>Alarm:</label>
      <input type="text" name="alarm" value="${alarm}">

      <label>Current Trip Status:</label>
      <input type="text" name="currentTripStatus" value="${currentTripStatus}">

      <input type="submit" value="Save">
    </form>
  `;

  // Replace the contents of the vehicle-drawer with the form
  var vehicleDrawer = document.getElementById("vehicle-drawer");
  vehicleDrawer.innerHTML = formHtml;

  // Add an event listener to the form submit button
  vehicleDrawer.querySelector("form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the form from submitting

    // Get the updated values from the form
    var updatedVin = event.target.elements.vin.value;
    var updatedDeviceInfo = event.target.elements.deviceInfo.value;
    var updatedLocation = event.target.elements.location.value;
    var updatedBatteryStatus = event.target.elements.batteryStatus.value;
    var updatedGprs = event.target.elements.gprs.value;
    var updatedAlarm = event.target.elements.alarm.value;
    var updatedCurrentTripStatus = event.target.elements.currentTripStatus.value;

    // Update the table with the new values
    document.getElementById("vehicle-vin").innerText = updatedVin;
    document.getElementById("vehicle-device-info").innerText = updatedDeviceInfo;
    document.getElementById("vehicle-location").innerText = updatedLocation;
    document.getElementById("vehicle-battery-status").innerText = updatedBatteryStatus;
    document.getElementById("vehicle-gprs").innerText = updatedGprs;
    document.getElementById("vehicle-alarm").innerText = updatedAlarm;
    document.getElementById("vehicle-current-trip-status").innerText = updatedCurrentTripStatus;

    // Show the updated details and hide the vehicle-drawer
    showVehicleDetails();
  });
}
const saveButton = document.getElementById("save-button");
saveButton.addEventListener("click", saveData);
