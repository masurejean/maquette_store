const imgElements = document.querySelectorAll(".imgArticle img");

const imgFull = []

const frameImg = document.createElement("div");

frameImg.style.width = "100vw";
frameImg.style.height = "100vh";
frameImg.style.backdropFilter = "blur(8px)";
frameImg.style.backgroundColor = "rgba(255,255,255,0.7)"
frameImg.style.display = "none";
frameImg.style.justifyContent = "center";
frameImg.style.alignItems = "center";

frameImg.style.position = "fixed";

document.body.prepend(frameImg);

let i = 0;
while (i < imgElements.length) {

    let n = i;
    imgElements[i].addEventListener(
        "click",
        () => {
            frameImg.style.display = "flex";
            imgFull[n] = document.createElement("img");
            imgFull[n].style.width = "40%";
            /* imgFull[n].width = 700;
            imgFull[n].height =500; */
            imgFull[n].src = imgElements[n].src;
            frameImg.append(imgFull[n]);
        }
    )
    i++;
}

frameImg.addEventListener(
    "click",
    (event) => {
        if (!frameImg.querySelector("img").contains(event.target)) {
            frameImg.style.display = "none";
            frameImg.innerHTML = "";
        }
    }
)