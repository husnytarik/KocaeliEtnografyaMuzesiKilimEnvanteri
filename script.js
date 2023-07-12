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


function divCreator(imgUrl) {
  var divList = document.getElementsByClassName("grid-item")
  var divCount = divList.length;
  console.log(divCount)
  var gridCol1 = document.querySelector('.grid-col-1');
  var gridCol2 = document.querySelector('.grid-col-2');
  var i = divCount+1;
  if (i % 2 === 0) {    
    var newDiv = document.createElement("div");
    newDiv.classList.add('grid-item');
    var count = newDiv.textContent;
    count = divCount+1;
    var linkElement = document.createElement('a');
    linkElement.href = "#"
    linkElement.setAttribute('val', i);
    var x = linkElement.getAttribute('val');
    console.log(x);
    linkElement.setAttribute('onclick', "changeDiv(x)");
    var imageElement = document.createElement('img');
    imageElement.src = imgUrl;
    linkElement.appendChild(imageElement);
    gridCol1.appendChild(newDiv);
    newDiv.appendChild(linkElement);
  } else {
    var newDiv = document.createElement("div");
    newDiv.classList.add('grid-item');
    newDiv.textContent = divCount+1;
    gridCol2.appendChild(newDiv);
  }
}



function changeDiv(i) {
  console.log(i)
  var listPage = document.getElementById("bol1");
  var infoPage = document.getElementById("bol2");
  var textureChange = document.getElementById("texture");
  var imgList = [
    "https://media.discordapp.net/attachments/1083303057544200272/1116713534156443718/8v2.png?width=1194&height=682",
    "https://media.discordapp.net/attachments/1083303057544200272/1116708462680883271/A3.png?width=1194&height=682",
  ];
  var infoHeaderList = [
    "Burada 1. kilim gösteriliyor",
    "Burada 2. kilim gösteriliyor",
    "Burada 3. kilim gösteriliyor",
  ];
  var infoTextList = [
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
    "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.",
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