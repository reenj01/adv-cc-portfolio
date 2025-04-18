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

// Result Page

let finalTop = parseInt(localStorage.getItem("toppts"));
let finalMiddle = parseInt(localStorage.getItem("middlepts"));
let finalBottom = parseInt(localStorage.getItem("bottompts"));

function finalResult() {
  let topname = "";
  let middlename = "";
  let bottomname = "";

  if(finalTop >= 0 && finalTop <= 8) {
    document.getElementById("top-note").innerHTML = "Vanilla";
    topname = "Vanilla";
  }
  else if (finalTop >= 9 && finalTop <= 15) {
    document.getElementById("top-note").innerHTML = "Citrus";
    topname = "Citrus";
  }
  
  if(finalMiddle >= 0 && finalMiddle <= 8) {
    document.getElementById("middle-note").innerHTML = "Herbal";
    middlename = "Herbal";
  }
  else if (finalMiddle >= 9 && finalMiddle <= 15) {
    document.getElementById("middle-note").innerHTML = "Floral";
    middlename = "Floral";
  }
  
  if(finalBottom >= 0 && finalBottom <= 8) {
    document.getElementById("bottom-note").innerHTML = "Wood";
    bottomname = "Wood";
  }
  else if (finalBottom >= 9 && finalBottom <= 15) {
    document.getElementById("bottom-note").innerHTML = "Spice";
    bottomname = "Spice";
  }

  if(topname === "Citrus" && middlename === "Floral" && bottomname === "Spice") {
    document.getElementById('result-img').src = "../imgs/result/1.PNG";
    document.getElementById('scent-prof').innerHTML = "honey, sweet";
    document.getElementById('perfume').innerHTML = "Byredo 'Sundazed'";
    document.getElementById('perfume2').innerHTML = "Armani Prive 'Saffron Royale'";
  } else if(topname === "Citrus" && middlename === "Floral" && bottomname === "Wood") {
    document.getElementById('result-img').src = "../imgs/result/2.PNG";
    document.getElementById('scent-prof').innerHTML = "woody, cozy";
    document.getElementById('perfume').innerHTML = "Diptyque 'Eau des Sens'";
    document.getElementById('perfume2').innerHTML = "Le Labo 'Another 13'";
  } else if(topname === "Citrus" && middlename === "Herbal" && bottomname === "Spice") {
    document.getElementById('result-img').src = "../imgs/result/3.PNG";
    document.getElementById('scent-prof').innerHTML = "fresh, vibrant";
    document.getElementById('perfume').innerHTML = "Jo Malone 'Basil & Neroli'";
    document.getElementById('perfume2').innerHTML = "Maison Margiela 'Under the Lemon Trees'";
  } else if(topname === "Citrus" && middlename === "Herbal" && bottomname === "Wood") {
    document.getElementById('result-img').src = "../imgs/result/4.PNG";
    document.getElementById('scent-prof').innerHTML = "cool, crisp";
    document.getElementById('perfume').innerHTML = "Diptyque 'Oyedo'";
    document.getElementById('perfume2').innerHTML = "Maison Margiela 'Sailing Day'";
  } else if(topname === "Vanilla" && middlename === "Floral" && bottomname === "Spice") {
    document.getElementById('result-img').src = "../imgs/result/5.PNG";
    document.getElementById('scent-prof').innerHTML = "sweet, cozy";
    document.getElementById('perfume').innerHTML = "Jo Malone 'Vanilla & Anise'";
    document.getElementById('perfume2').innerHTML = "Estée Lauder 'Sensuous'";
  } else if(topname === "Vanilla" && middlename === "Floral" && bottomname === "Wood") {
    document.getElementById('result-img').src = "../imgs/result/6.PNG";
    document.getElementById('scent-prof').innerHTML = "rich, musky";
    document.getElementById('perfume').innerHTML = "Byredo 'Oud Immortel'";
    document.getElementById('perfume2').innerHTML = "Juliette Has a Gun 'Vanilla Vibes'";
  } else if(topname === "Vanilla" && middlename === "Herbal" && bottomname === "Spice") {
    document.getElementById('result-img').src = "../imgs/result/7.PNG";
    document.getElementById('scent-prof').innerHTML = "mint, sweet";
    document.getElementById('perfume').innerHTML = "Diptyque 'Eau Duelle'";
    document.getElementById('perfume2').innerHTML = "Lush 'Lord of Misrule'";
  } else if(topname === "Vanilla" && middlename === "Herbal" && bottomname === "Wood") {
    document.getElementById('result-img').src = "../imgs/result/8.PNG";
    document.getElementById('scent-prof').innerHTML = "earthy, woody";
    document.getElementById('perfume').innerHTML = "Juliette Has a Gun 'Not a Perfume'";
    document.getElementById('perfume2').innerHTML = "Le Labo 'Santal 33'";
  }
}

finalResult();