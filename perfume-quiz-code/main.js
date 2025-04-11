// function saveToLocalStorage() {
//   localStorage.setItem("toppts", 0);
//   localStorage.setItem("middlepts", 0);
//   localStorage.setItem("bottompts", 0);
// }

// saveToLocalStorage();

function addpts(i, id) {
  let toppts = parseInt(localStorage.getItem("toppts"));
  let middlepts = parseInt(localStorage.getItem("middlepts"));
  let bottompts = parseInt(localStorage.getItem("bottompts"));

  if(i >= 1 && i <= 3) { //questions 1 - 3 top note
    if(id == 'a') {
      toppts += 5;
    }
    else if (id == 'b'){
      toppts += 3;
    }
  }
  else if (i >= 4 && i <= 6) { //questions 4 - 6 middle note
    if(id == 'a') {
      middlepts += 5;
    }
    else if (id == 'b'){
      middlepts += 3;
    }
  }
  else if (i >= 6 && i <= 9) { //questions 7 - 9 bottom note
    if(id == 'a') {
      bottompts += 5;
    }
    else if (id == 'b'){
      bottompts += 3;
    }
  }
  updateLocalStorage(toppts, middlepts, bottompts);
}

function updateLocalStorage(top, middle, bottom) {
  localStorage.setItem("toppts", top);
  localStorage.setItem("middlepts", middle);
  localStorage.setItem("bottompts", bottom);
}

function resetPts() {
  localStorage.setItem("toppts", 0);
  localStorage.setItem("middlepts", 0);
  localStorage.setItem("bottompts", 0);
}