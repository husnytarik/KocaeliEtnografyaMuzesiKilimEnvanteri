document.addEventListener("DOMContentLoaded", function () {
  setTimeout(function () {
    var splashScreen = document.querySelector(".splash-screen");
    var content = document.querySelector(".content");

    splashScreen.style.opacity = "0";
    content.style.display = "block";

    setTimeout(function () {
      splashScreen.style.display = "none";
    }, 3000);
  }, 3000);
});
const modelViewer = document.getElementById("modelViewer");

const onProgress = (event) => {
  const progressBar = event.target.querySelector(".progress-bar");
  const updatingBar = event.target.querySelector(".update-bar");
  updatingBar.style.width = `${event.detail.totalProgress * 100}%`;
  if (event.detail.totalProgress === 1) {
    progressBar.classList.add("hide");
    event.target.removeEventListener("progress", onProgress);
  } else {
    progressBar.classList.remove("hide");
  }
};
document.querySelector("model-viewer").addEventListener("progress", onProgress);

function changeDiv(i) {
  console.log(i);
  var listPage = document.getElementById("bol1");
  var infoPage = document.getElementById("bol2");
  var textureChange = document.getElementById("texture");

  var kilimList = [
    {
      src: "Rcarpet1.png",
      isim: "Yastık Yüzü",
      envanterNo: "992",
      teknik: "Kilim",
      malzeme: "Yün (Çözgü)-Yün (Atkı)",
      ebatları: "98x55cm",
      gelisi: "Satın Alma",
      donem: "Cumhuriyet",
    },
    {
      src: "Rcarpet2.png",
      isim: "Yastık Yüzü",
      envanterNo: "1014",
      teknik: "Kilim",
      malzeme: "Yün (Çözgü)-Yün (Atkı)",
      ebatları: "45x88 cm",
      gelisi: "Tokat Müzesi’nden Devir",
      donem: "Geç Osmanlı",
    },
    {
      src: "Rcarpet3.png",
      isim: "Yastık Yüzü",
      envanterNo: "694",
      teknik: "Cicim",
      malzeme: "Yün (Çözgü)-Yün (Atkı)",
      ebatları: "93x147cm",
      gelisi: "Tokat Müzesi'nden Devir",
      donem: "Cumhuriyet",
    },
    {
      src: "Rcarpet4.png",
      isim: "Seccade",
      envanterNo: "688",
      teknik: "Kilim",
      malzeme: "Yün (Çözgü)-Yün (Atkı)",
      ebatları: "93x147cm",
      gelisi: "Tokat Müzesi'nden Devir",
      donem: "Cumhuriyet",
    },
    {
      src: "Rcarpet5.png",
      isim: "Yastık Yüzü",
      envanterNo: "611",
      teknik: "Cicim",
      malzeme: "Yün (Çözgü)-Yün (Atkı)",
      ebatları: "41x88 cm",
      gelisi: "Satın Alma",
      donem: "Cumhuriyet",
    },
    {
      src: "Rcarpet6.png",
      isim: "Çuval",
      envanterNo: "440",
      teknik: "Cicim",
      malzeme: "Kıl (Çözgü)-Yün (Atkı)",
      ebatları: "60x110cm",
      gelisi: "Satın Alma",
      donem: "Cumhuriyet",
    },
    {
      src: "Rcarpet7.png",
      isim: "Yastık Yüzü",
      envanterNo: "609",
      teknik: "Cicim",
      malzeme: "Yün (Çözgü)-Yün (Atkı)",
      ebatları: "41x88cm",
      gelisi: "Satın Alma",
      donem: "Cumhuriyet",
    },
    {
      src: "Rcarpet8.png",
      isim: "Kilim (Tek Kanat/ Şak)",
      envanterNo: "727",
      teknik: "Cicim",
      malzeme: "Yün (Çözgü)-Yün (Atkı)",
      ebatları: "79x210cm",
      gelisi: "Van Müzesi’nden Devir",
      donem: "Cumhuriyet",
    },
    {
      src: "Rcarpet9.png",
      isim: "Yastık Yüzü",
      envanterNo: "832",
      teknik: "Cicim (Seyrek Motifli)",
      malzeme: "Yün (Çözgü)-Yün(Atkı)",
      ebatları: "46x99cm",
      gelisi: "Satın Alma",
      donem: "Cumhuriyet",
    },
    {
      src: "Rcarpet10.png",
      isim: "Yastık Kılıfı",
      envanterNo: "368",
      teknik: "Zili",
      malzeme: "Kıl (Çözgü)-Yün (Atkı)",
      ebatları: "24x75cm",
      gelisi: "Satın Alma",
      donem: "Cumhuriyet",
    },
  ];

  if ((listPage.style.display = "unset")) {
    textureChange.value =
      "https://cdn.glitch.global/61b3137b-3e3b-4c2c-a6e7-9d3dac7f65fa/" +
      kilimList[i].src;
    console.log("texturevalue", textureChange.value);
    var image = document.getElementById("infoImage");
    var isim = document.getElementById("isim");
    var envanter = document.getElementById("envanter");
    var teknik = document.getElementById("teknik");
    var malzeme = document.getElementById("malzeme");
    var ebat = document.getElementById("ebat");
    var gelis = document.getElementById("gelis");
    var donem = document.getElementById("donem");
    infoPage.style.display = "unset";
    listPage.style.display = "none";
    image.src =
      "https://cdn.glitch.global/61b3137b-3e3b-4c2c-a6e7-9d3dac7f65fa/" +
      "D" +
      kilimList[i].src;
    console.log(image.src);
    isim.innerHTML = kilimList[i].isim;
    isim.style.fontWeight = "bold";
    envanter.innerHTML = kilimList[i].envanterNo;
    envanter.style.fontWeight = "bold";
    teknik.innerHTML = kilimList[i].teknik;
    teknik.style.fontWeight = "bold";
    malzeme.innerHTML = kilimList[i].malzeme;
    malzeme.style.fontWeight = "bold";
    ebat.innerHTML = kilimList[i].ebatları;
    ebat.style.fontWeight = "bold";
    gelis.innerHTML = kilimList[i].gelisi;
    gelis.style.fontWeight = "bold";
    donem.innerHTML = kilimList[i].donem;
    donem.style.fontWeight = "bold";
    $(document).ready(function () {
      $("#ex2").zoom({
        url:
          "https://cdn.glitch.global/61b3137b-3e3b-4c2c-a6e7-9d3dac7f65fa/" +
          "D" +
          kilimList[i].src,
        on: "grab",
      });
    });
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
    but.click();
    overlay.style.display = "none";
    loadRing.style.display = "none";
  }, 5000);
}
