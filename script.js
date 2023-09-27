// Handles loading the events for <model-viewer>'s slotted progress bar
const onProgress = (event) => {
  const progressBar = event.target.querySelector('.progress-bar');
  const updatingBar = event.target.querySelector('.update-bar');
  updatingBar.style.width = `${event.detail.totalProgress * 100}%`;
  if (event.detail.totalProgress === 1) {
    progressBar.classList.add('hide');
    event.target.removeEventListener('progress', onProgress);
  } else {
    progressBar.classList.remove('hide');
  }
};
document.querySelector('model-viewer').addEventListener('progress', onProgress);


//var modelvw = document.querySelector("model-viewer#kilim");
//var model = modelvw.model;
//console.log(model)


function divCreator(imgUrl, name) {
  var divList = document.getElementsByClassName("grid-item")
  var divCount = divList.length;
  console.log(divCount)
  var gridCol1 = document.querySelector('.grid-col-1');
  var gridCol2 = document.querySelector('.grid-col-2');
  var i = divCount+1;
  if (i % 2 === 0) {    
    var newDiv = document.createElement("div");
    newDiv.classList.add('grid-item');
    
    var linkElement = document.createElement('a');
    linkElement.href = "#"
    linkElement.setAttribute('val', divCount-1);
    linkElement.setAttribute('onclick', 'changeDiv()')
    
    var imageElement = document.createElement('img');
    imageElement.src = imgUrl;
    
    var textDiv = document.createElement("div");
    textDiv.classList.add('bottom-text');
    textDiv.textContent = name;    
    
    gridCol1.appendChild(newDiv);
    newDiv.appendChild(linkElement);
    linkElement.appendChild(imageElement);
    newDiv.appendChild(textDiv);
  } else {
    var newDiv = document.createElement("div");
    newDiv.classList.add('grid-item');
    
    var linkElement = document.createElement('a');
    linkElement.href = "#"
    linkElement.setAttribute('val', divCount-1);
    linkElement.setAttribute('onclick', 'changeDiv()')
    
    var imageElement = document.createElement('img');
    imageElement.src = imgUrl;
    
    var textDiv = document.createElement("div");
    textDiv.classList.add('bottom-text');
    textDiv.textContent = name;    
    
    gridCol2.appendChild(newDiv);
    newDiv.appendChild(linkElement);
    linkElement.appendChild(imageElement);
    newDiv.appendChild(textDiv);
  }
}

function changeDiv(i) {
  console.log(i)
  var listPage = document.getElementById("bol1");
  var infoPage = document.getElementById("bol2");
  var textureChange = document.getElementById("texture");
  var imgList = [
    "https://cdn.glitch.global/61b3137b-3e3b-4c2c-a6e7-9d3dac7f65fa/Deneme.png?v=1695802126717",
    "https://cdn.glitch.global/61b3137b-3e3b-4c2c-a6e7-9d3dac7f65fa/Deneme.png?v=1695802126717",
    "https://cdn.glitch.global/61b3137b-3e3b-4c2c-a6e7-9d3dac7f65fa/Deneme.png?v=1695802126717",
    "https://cdn.glitch.global/61b3137b-3e3b-4c2c-a6e7-9d3dac7f65fa/Deneme.png?v=1695802126717",
    "https://cdn.glitch.global/61b3137b-3e3b-4c2c-a6e7-9d3dac7f65fa/Deneme.png?v=1695802126717",
    "https://cdn.glitch.global/61b3137b-3e3b-4c2c-a6e7-9d3dac7f65fa/Deneme.png?v=1695802126717",
    "https://cdn.glitch.global/61b3137b-3e3b-4c2c-a6e7-9d3dac7f65fa/Deneme.png?v=1695802126717",    
  ];
  var infoHeaderList = [
    "Burada 1. kilim gösteriliyor",
    "Burada 2. kilim gösteriliyor",
    "Burada 3. kilim gösteriliyor",
    "Burada 4. kilim gösteriliyor",
    "Burada 5. kilim gösteriliyor",
    "Burada 6. kilim gösteriliyor",
    "Burada 7. kilim gösteriliyor",
    
  ];
  var infoTextList = [
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    ];

  if ((listPage.style.display = "unset")) {
    textureChange.value = imgList[i];
    console.log(textureChange.value)
    var image = document.getElementById("infoImage");
    var header = document.getElementById("infoTextHeader");
    var text = document.getElementById("infoText");
    infoPage.style.display = "unset";
    listPage.style.display = "none";
    image.src = imgList[i];
    header.innerHTML = infoHeaderList[i];
    text.innerHTML = infoTextList[i];
    
  }
}

function changeDivBack() {
  var listPage = document.getElementById("bol1");
  var infoPage = document.getElementById("bol2");
  infoPage.style.display = "none";
  listPage.style.display = "unset";
}

function runAr() {
  var but = document.getElementById("arBut");
  const loadRing = document.getElementById("loadingRing");  
  const overlay = document.getElementById("overlay");
  overlay.style.display = "unset";    
  loadRing.style.display = "unset";  
  setTimeout(() => {
    but.click()
    overlay.style.display = "none";        
    loadRing.style.display = "none";  
  }, 5000);
}

