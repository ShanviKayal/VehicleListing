
const itemsPerPage = 3;
const items = document.querySelectorAll('.vehicle-table tbody tr');
const pagination = document.querySelector('.pagination');
const prevBtn = pagination.querySelector('.prev');
const nextBtn = pagination.querySelector('.next');
const pages = pagination.querySelectorAll('.page');



let currentPage = 1;

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
  function showEditVehicleDialog() {
    var dialog = document.getElementById("edit-vehicle-dialog");
    dialog.style.display = "block";
  }

  function hideEditVehicleDialog() {
    var dialog = document.getElementById("edit-vehicle-dialog");
    dialog.style.display = "none";
  }
