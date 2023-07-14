window.addEventListener("arjs-nft-loaded", (event) => {
  
});



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