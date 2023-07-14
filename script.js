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
    "https://cdn.glitch.global/61b3137b-3e3b-4c2c-a6e7-9d3dac7f65fa/a1.jpg",
    "https://cdn.glitch.global/61b3137b-3e3b-4c2c-a6e7-9d3dac7f65fa/a2.jpg",
    "https://cdn.glitch.global/61b3137b-3e3b-4c2c-a6e7-9d3dac7f65fa/a3.jpg",
    "https://cdn.glitch.global/61b3137b-3e3b-4c2c-a6e7-9d3dac7f65fa/a4.jpg",
    "https://cdn.glitch.global/61b3137b-3e3b-4c2c-a6e7-9d3dac7f65fa/a5.jpg",
    "https://cdn.glitch.global/61b3137b-3e3b-4c2c-a6e7-9d3dac7f65fa/a6.jpg",
    "https://cdn.glitch.global/61b3137b-3e3b-4c2c-a6e7-9d3dac7f65fa/a7.jpg",    
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

const topArea = document.getElementsByClassName("top");
const bottomArea = document.getElementsByClassName("bottom");
const header = document.getElementById("Header");
const footer = document.getElementById("Footer");
const vc1 = document.getElementById("voices1");
const vc2 = document.getElementById("voices2");
const vc3 = document.getElementById("voices3");
const vc4 = document.getElementById("voices4");
const vc5 = document.getElementById("voices5");
const vc6 = document.getElementById("voices6");
const vc7 = document.getElementById("voices7");

const aud1 = document.getElementById("aud1");
const aud2 = document.getElementById("aud2");
const aud3 = document.getElementById("aud3");
const aud4 = document.getElementById("aud4");
const aud5 = document.getElementById("aud5");
const aud6 = document.getElementById("aud6");
const aud7 = document.getElementById("aud7");

const aud1tr = document.getElementById("aud1tr");
const aud2tr = document.getElementById("aud2tr");
const aud3tr = document.getElementById("aud3tr");
const aud4tr = document.getElementById("aud4tr");
const aud5tr = document.getElementById("aud5tr");
const aud6tr = document.getElementById("aud6tr");
const aud7tr = document.getElementById("aud7tr");

const headerList = ["",
    "Kilim 1",
    "Kilim 2",
    "Kilim 3",
    "Kilim 4",
    "Kilim 5",
    "Kilim 6",
    "Kilim 7"
];
const footerList = ["",
    "1 Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    "2 Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    "3 Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    "4 Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    "5 Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    "6 Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    "7 Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."]



var nft1B = false;
var nft2B = false;
var nft3B = false;
var nft4B = false;
var nft5B = false;
var nft6B = false;
var nft7B = false;

AFRAME.registerComponent("nftselector", {
    init: function () {
        this.el.addEventListener("markerFound", () => {
            console.log("found")
            if (this.el.id === "nft1") {
                nft1B = true;
                nft2B = false;
                nft3B = false;
                nft4B = false;
                nft5B = false;
                nft6B = false;
                nft7B = false;
                nftFound();
                console.log("1 bulundu")
            } else if (this.el.id === "nft2") {
                nft1B = false;
                nft2B = true;
                nft3B = false;
                nft4B = false;
                nft5B = false;
                nft6B = false;
                nft7B = false;
                nftFound();
                console.log("2 bulundu")
            } else if (this.el.id === "nft3") {
                nft1B = false;
                nft2B = false;
                nft3B = true;
                nft4B = false;
                nft5B = false;
                nft6B = false;
                nft7B = false;
                nftFound();
                console.log("2 bulundu")
            } else if (this.el.id === "nft4") {
                nft1B = false;
                nft2B = false;
                nft3B = false;
                nft4B = true;
                nft5B = false;
                nft6B = false;
                nft7B = false;
                nftFound();
                console.log("2 bulundu")
            } else if (this.el.id === "nft5") {
                nft1B = false;
                nft2B = false;
                nft3B = false;
                nft4B = false;
                nft5B = true;
                nft6B = false;
                nft7B = false;
                nftFound();
                console.log("2 bulundu")
            } else if (this.el.id === "nft6") {
                nft1B = false;
                nft2B = false;
                nft3B = false;
                nft4B = false;
                nft5B = false;
                nft6B = true;
                nft7B = false;
                nftFound();
                console.log("2 bulundu")
            } else if (this.el.id === "nft7") {
                nft1B = false;
                nft2B = false;
                nft3B = false;
                nft4B = false;
                nft5B = false;
                nft6B = false;
                nft7B = true;
                nftFound();
                console.log("2 bulundu")
            }
        });
        this.el.addEventListener("markerLost", () => {
            header.textContent = headerList[0];
            footer.textContent = footerList[0];
            nft1B = false;
            nft2B = false;
            vc1.style.display = "none"
            vc2.style.display = "none"
            vc3.style.display = "none"
            vc4.style.display = "none"
            vc5.style.display = "none"
            vc6.style.display = "none"
            vc7.style.display = "none"
        })
    }
})

function nftFound() {
    if (nft1B) {
        header.textContent = headerList[1];
        footer.textContent = footerList[1];
        vc1.style.display = "unset"
        vc2.style.display = "none"
        vc3.style.display = "none"
        vc4.style.display = "none"
        vc5.style.display = "none"
        vc6.style.display = "none"
        vc7.style.display = "none"
    } else if (nft2B) {
        header.textContent = headerList[2];
        footer.textContent = footerList[2];
        vc1.style.display = "none"
        vc2.style.display = "unset"
        vc3.style.display = "none"
        vc4.style.display = "none"
        vc5.style.display = "none"
        vc6.style.display = "none"
        vc7.style.display = "none"
    }
    else if (nft3B) {
        header.textContent = headerList[3];
        footer.textContent = footerList[3];
        vc1.style.display = "none"
        vc2.style.display = "none"
        vc3.style.display = "unset"
        vc4.style.display = "none"
        vc5.style.display = "none"
        vc6.style.display = "none"
        vc7.style.display = "none"
    }
    else if (nft4B) {
        header.textContent = headerList[4];
        footer.textContent = footerList[4];
        vc1.style.display = "none"
        vc2.style.display = "none"
        vc3.style.display = "none"
        vc4.style.display = "unset"
        vc5.style.display = "none"
        vc6.style.display = "none"
        vc7.style.display = "none"
    }
    else if (nft5B) {
        header.textContent = headerList[5];
        footer.textContent = footerList[5];
        vc1.style.display = "none"
        vc2.style.display = "none"
        vc3.style.display = "none"
        vc4.style.display = "none"
        vc5.style.display = "unset"
        vc6.style.display = "none"
        vc7.style.display = "none"
    }
    else if (nft6B) {
        header.textContent = headerList[6];
        footer.textContent = footerList[6];
        vc1.style.display = "none"
        vc2.style.display = "none"
        vc3.style.display = "none"
        vc4.style.display = "none"
        vc5.style.display = "none"
        vc6.style.display = "unset"
        vc7.style.display = "none"
    }
    else if (nft7B) {
        header.textContent = headerList[7];
        footer.textContent = footerList[7];
        vc1.style.display = "none"
        vc2.style.display = "none"
        vc3.style.display = "none"
        vc4.style.display = "none"
        vc5.style.display = "none"
        vc6.style.display = "none"
        vc7.style.display = "unset"
    }
    else {
        nftFound();
    }
}
function playAudioEn(x) {
    console.log("playclickedEN")
    if (x == 1) {
        if (!aud1.paused) {
            aud1.pause();
            aud2.pause();
            aud3.pause();
            aud4.pause();
            aud5.pause();
            aud6.pause();
            aud7.pause();
            aud1tr.pause();
            aud2tr.pause();
            aud3tr.pause();
            aud4tr.pause();
            aud5tr.pause();
            aud6tr.pause();
            aud7tr.pause();
        }
        else if (aud1.paused) {
            aud1.play();
            aud2.pause();
            aud3.pause();
            aud4.pause();
            aud5.pause();
            aud6.pause();
            aud7.pause();
            aud1tr.pause();
            aud2tr.pause();
            aud3tr.pause();
            aud4tr.pause();
            aud5tr.pause();
            aud6tr.pause();
            aud7tr.pause();
        }
    }
    else if (x == 2) {
        if (!aud2tr.paused) {
            aud1.pause();
            aud2.pause();
            aud3.pause();
            aud4.pause();
            aud5.pause();
            aud6.pause();
            aud7.pause();
            aud1tr.pause();
            aud2tr.pause();
            aud3tr.pause();
            aud4tr.pause();
            aud5tr.pause();
            aud6tr.pause();
            aud7tr.pause();
        }
        else if (aud2tr.paused) {
            aud1.pause();
            aud2.play();
            aud3.pause();
            aud4.pause();
            aud5.pause();
            aud6.pause();
            aud7.pause();
            aud1tr.pause();
            aud2tr.pause();
            aud3tr.pause();
            aud4tr.pause();
            aud5tr.pause();
            aud6tr.pause();
            aud7tr.pause();
        }
    }
    else if (x == 3) {
        if (!aud3tr.paused) {
            aud1.pause();
            aud2.pause();
            aud3.pause();
            aud4.pause();
            aud5.pause();
            aud6.pause();
            aud7.pause();
            aud1tr.pause();
            aud2tr.pause();
            aud3tr.pause();
            aud4tr.pause();
            aud5tr.pause();
            aud6tr.pause();
            aud7tr.pause();
        }
        else if (aud3tr.paused) {
            aud1.pause();
            aud2.pause();
            aud3.play();
            aud4.pause();
            aud5.pause();
            aud6.pause();
            aud7.pause();
            aud1tr.pause();
            aud2tr.pause();
            aud3tr.pause();
            aud4tr.pause();
            aud5tr.pause();
            aud6tr.pause();
            aud7tr.pause();
        }
    }
    else if (x == 4) {
        if (!aud4tr.paused) {
            aud1.pause();
            aud2.pause();
            aud3.pause();
            aud4.pause();
            aud5.pause();
            aud6.pause();
            aud7.pause();
            aud1tr.pause();
            aud2tr.pause();
            aud3tr.pause();
            aud4tr.pause();
            aud5tr.pause();
            aud6tr.pause();
            aud7tr.pause();
        }
        else if (aud4tr.paused) {
            aud1.pause();
            aud2.pause();
            aud3.pause();
            aud4.play();
            aud5.pause();
            aud6.pause();
            aud7.pause();
            aud1tr.pause();
            aud2tr.pause();
            aud3tr.pause();
            aud4tr.pause();
            aud5tr.pause();
            aud6tr.pause();
            aud7tr.pause();
        }
    }
    else if (x == 5) {
        if (!aud5tr.paused) {
            aud1.pause();
            aud2.pause();
            aud3.pause();
            aud4.pause();
            aud5.pause();
            aud6.pause();
            aud7.pause();
            aud1tr.pause();
            aud2tr.pause();
            aud3tr.pause();
            aud4tr.pause();
            aud5tr.pause();
            aud6tr.pause();
            aud7tr.pause();
        }
        else if (aud5tr.paused) {
            aud1.pause();
            aud2.pause();
            aud3.pause();
            aud4.pause();
            aud5.play();
            aud6.pause();
            aud7.pause();
            aud1tr.pause();
            aud2tr.pause();
            aud3tr.pause();
            aud4tr.pause();
            aud5tr.pause();
            aud6tr.pause();
            aud7tr.pause();
        }
    }
    else if (x == 6) {
        if (!aud6tr.paused) {
            aud1.pause();
            aud2.pause();
            aud3.pause();
            aud4.pause();
            aud5.pause();
            aud6.pause();
            aud7.pause();
            aud1tr.pause();
            aud2tr.pause();
            aud3tr.pause();
            aud4tr.pause();
            aud5tr.pause();
            aud6tr.pause();
            aud7tr.pause();
        }
        else if (aud6tr.paused) {
            aud1.pause();
            aud2.pause();
            aud3.pause();
            aud4.pause();
            aud5.pause();
            aud6.play();
            aud7.pause();
            aud1tr.pause();
            aud2tr.pause();
            aud3tr.pause();
            aud4tr.pause();
            aud5tr.pause();
            aud6tr.pause();
            aud7tr.pause();
        }
    }
    else if (x == 7) {
        if (!aud7tr.paused) {
            aud1.pause();
            aud2.pause();
            aud3.pause();
            aud4.pause();
            aud5.pause();
            aud6.pause();
            aud7.pause();
            aud1tr.pause();
            aud2tr.pause();
            aud3tr.pause();
            aud4tr.pause();
            aud5tr.pause();
            aud6tr.pause();
            aud7tr.pause();
        }
        else if (aud7tr.paused) {
            aud1.pause();
            aud2.pause();
            aud3.pause();
            aud4.pause();
            aud5.pause();
            aud6.pause();
            aud7.play();
            aud1tr.pause();
            aud2tr.pause();
            aud3tr.pause();
            aud4tr.pause();
            aud5tr.pause();
            aud6tr.pause();
            aud7tr.pause();
        }
    }
}
function playAudioTr(x) {
    console.log("playclicked")
    if (x == 1) {
        if (!aud1tr.paused) {
            aud1.pause();
            aud2.pause();
            aud3.pause();
            aud4.pause();
            aud5.pause();
            aud6.pause();
            aud7.pause();
            aud1tr.pause();
            aud2tr.pause();
            aud3tr.pause();
            aud4tr.pause();
            aud5tr.pause();
            aud6tr.pause();
            aud7tr.pause();
        }
        else if (aud1tr.paused) {
            aud1.pause();
            aud2.pause();
            aud3.pause();
            aud4.pause();
            aud5.pause();
            aud6.pause();
            aud7.pause();
            aud1tr.play();
            aud2tr.pause();
            aud3tr.pause();
            aud4tr.pause();
            aud5tr.pause();
            aud6tr.pause();
            aud7tr.pause();
        }
    }
    else if (x == 2) {
        if (!aud2tr.paused) {
            aud1.pause();
            aud2.pause();
            aud3.pause();
            aud4.pause();
            aud5.pause();
            aud6.pause();
            aud7.pause();
            aud1tr.pause();
            aud2tr.pause();
            aud3tr.pause();
            aud4tr.pause();
            aud5tr.pause();
            aud6tr.pause();
            aud7tr.pause();
        }
        else if (aud2tr.paused) {
            aud1.pause();
            aud2.pause();
            aud3.pause();
            aud4.pause();
            aud5.pause();
            aud6.pause();
            aud7.pause();
            aud1tr.pause();
            aud2tr.play();
            aud3tr.pause();
            aud4tr.pause();
            aud5tr.pause();
            aud6tr.pause();
            aud7tr.pause();
        }
    }
    else if (x == 3) {
        if (!aud3tr.paused) {
            aud1.pause();
            aud2.pause();
            aud3.pause();
            aud4.pause();
            aud5.pause();
            aud6.pause();
            aud7.pause();
            aud1tr.pause();
            aud2tr.pause();
            aud3tr.pause();
            aud4tr.pause();
            aud5tr.pause();
            aud6tr.pause();
            aud7tr.pause();
        }
        else if (aud3tr.paused) {
            aud1.pause();
            aud2.pause();
            aud3.pause();
            aud4.pause();
            aud5.pause();
            aud6.pause();
            aud7.pause();
            aud1tr.pause();
            aud2tr.pause();
            aud3tr.play();
            aud4tr.pause();
            aud5tr.pause();
            aud6tr.pause();
            aud7tr.pause();
        }
    }
    else if (x == 4) {
        if (!aud4tr.paused) {
            aud1.pause();
            aud2.pause();
            aud3.pause();
            aud4.pause();
            aud5.pause();
            aud6.pause();
            aud7.pause();
            aud1tr.pause();
            aud2tr.pause();
            aud3tr.pause();
            aud4tr.pause();
            aud5tr.pause();
            aud6tr.pause();
            aud7tr.pause();
        }
        else if (aud4tr.paused) {
            aud1.pause();
            aud2.pause();
            aud3.pause();
            aud4.pause();
            aud5.pause();
            aud6.pause();
            aud7.pause();
            aud1tr.pause();
            aud2tr.pause();
            aud3tr.pause();
            aud4tr.play();
            aud5tr.pause();
            aud6tr.pause();
            aud7tr.pause();
        }
    }
    else if (x == 5) {
        if (!aud5tr.paused) {
            aud1.pause();
            aud2.pause();
            aud3.pause();
            aud4.pause();
            aud5.pause();
            aud6.pause();
            aud7.pause();
            aud1tr.pause();
            aud2tr.pause();
            aud3tr.pause();
            aud4tr.pause();
            aud5tr.pause();
            aud6tr.pause();
            aud7tr.pause();
        }
        else if (aud5tr.paused) {
            aud1.pause();
            aud2.pause();
            aud3.pause();
            aud4.pause();
            aud5.pause();
            aud6.pause();
            aud7.pause();
            aud1tr.pause();
            aud2tr.pause();
            aud3tr.pause();
            aud4tr.pause();
            aud5tr.play();
            aud6tr.pause();
            aud7tr.pause();
        }
    }
    else if (x == 6) {
        if (!aud6tr.paused) {
            aud1.pause();
            aud2.pause();
            aud3.pause();
            aud4.pause();
            aud5.pause();
            aud6.pause();
            aud7.pause();
            aud1tr.pause();
            aud2tr.pause();
            aud3tr.pause();
            aud4tr.pause();
            aud5tr.pause();
            aud6tr.pause();
            aud7tr.pause();
        }
        else if (aud6tr.paused) {
            aud1.pause();
            aud2.pause();
            aud3.pause();
            aud4.pause();
            aud5.pause();
            aud6.pause();
            aud7.pause();
            aud1tr.pause();
            aud2tr.pause();
            aud3tr.pause();
            aud4tr.pause();
            aud5tr.pause();
            aud6tr.play();
            aud7tr.pause();
        }
    }
    else if (x == 7) {
        if (!aud7tr.paused) {
            aud1.pause();
            aud2.pause();
            aud3.pause();
            aud4.pause();
            aud5.pause();
            aud6.pause();
            aud7.pause();
            aud1tr.pause();
            aud2tr.pause();
            aud3tr.pause();
            aud4tr.pause();
            aud5tr.pause();
            aud6tr.pause();
            aud7tr.pause();
        }
        else if (aud7tr.paused) {
            aud1.pause();
            aud2.pause();
            aud3.pause();
            aud4.pause();
            aud5.pause();
            aud6.pause();
            aud7.pause();
            aud1tr.pause();
            aud2tr.pause();
            aud3tr.pause();
            aud4tr.pause();
            aud5tr.pause();
            aud6tr.pause();
            aud7tr.play();
        }
    }
}