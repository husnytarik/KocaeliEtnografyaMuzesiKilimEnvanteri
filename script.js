function changeDiv(i) {
    var listPage = document.getElementById("bol1")
    var infoPage = document.getElementById("bol2")
    var imgList = 
    ["https://media.discordapp.net/attachments/1083303057544200272/1116713534156443718/8v2.png?width=1194&height=682",
        "https://media.discordapp.net/attachments/1083303057544200272/1116708462680883271/A3.png?width=1194&height=682",
        "http://127.0.0.1:5501/mobil/images/recommended4.jpg"]
    var infoHeaderList = [
      "Burada 1. kilim gösteriliyor",
      "Burada 2. kilim gösteriliyor",
      "Burada 3. kilim gösteriliyor"
    ]
    var infoTextList = [
      "Test "
    ]
    if (listPage.style.display = "unset") {
        var image = document.getElementById("infoImage")
        var header = document.getElementById("infoTextHeader")
        var text = document.getElementById("infoText")
        infoPage.style.display = "unset"
        listPage.style.display = "none"
        image.src = imgList[i];
        header.innerHTML = infoHeaderList[i];
    }
}