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

function changeDiv(i) {
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
    var image = document.getElementById("infoImage");
    var header = document.getElementById("infoTextHeader");
    var text = document.getElementById("infoText");
    infoPage.style.display = "unset";
    listPage.style.display = "none";
    image.src = imgList[i];
    header.innerHTML = infoHeaderList[i];
    text.innerHTML = infoTextList[i];
    textureChange.value = imgList[i];
  }
}
function changeDivBack() {
  var listPage = document.getElementById("bol1");
  var infoPage = document.getElementById("bol2");
  infoPage.style.display = "none";
  listPage.style.display = "unset";  
}


setTimeOut(function runAr(val) {
  var but = document.getElementById("arBut");
  but.click();  
}, 5000);

