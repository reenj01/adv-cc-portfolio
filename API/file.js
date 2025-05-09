const dragArea = document.querySelector('.drag-area');
const dragText = document.querySelector('.header');

let button = document.querySelector('.button');
let input = document.querySelector('input');

const nextbtn = document.querySelector('.next-btn');

let file;

button.onclick = () => {
  input.click();
}

input.addEventListener('change', function() {
  file = this.files[0];
  dragArea.classList.add('active');
  displayFile();
})

// when file inside the drag area
dragArea.addEventListener('dragover', (event) => {
  event.preventDefault();
  dragText.textContent = 'Release to Upload';
  dragArea.classList.add('active');
});

dragArea.addEventListener('dragleave', (event) => {
  dragText.textContent = 'Drag & Drop';
  dragArea.classList.remove('active');
});

dragArea.addEventListener('drop', (event) => {
  event.preventDefault();
  dragArea.classList.remove('active');

  file = event.dataTransfer.files[0];

  displayFile();
});

function displayFile() {
  let fileType = file.type;

  let validExtensions = ['image/jpeg', 'image/jpg', 'image/png'];

  if(validExtensions.includes(fileType)) {
    let fileReader = new FileReader();

    fileReader.onload = () => {
      let fileURL = fileReader.result;

      let imgTag = `<img src="${fileURL}" class="upload-img" alt="">`;
      dragArea.innerHTML = imgTag;
    };

    fileReader.readAsDataURL(file);
  } else {
    alert('This file is not an image!');
    dragArea.classList.remove('active');
  }

  dragArea.classList.remove('active');

  nextbtn.style.display = "block";
}