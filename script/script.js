let bergerIcon = document.querySelector("header .container nav .berger-icon");
let closeIcone = document.querySelector("header .container nav .berger-close");
let navgitionList = document.querySelector("header .container nav ul");
bergerIcon.onclick = () => {
    navgitionList.classList.add("active");
    closeIcone.classList.add("active")
}
closeIcone.onclick = () => {
    navgitionList.classList.remove("active");
    closeIcone.classList.remove("active")
}
function sleep(ms) {
    return new Promise(res => setTimeout(res,ms))
}
let sleepTime = 100;
let text = "Iphone 13 Pro Max";
let textContainer = document.querySelector(".content .container .text h2 span.text-writer");
let writer = async () => {
    while(true) {
        for(let i = 0; i < text.length; i++){
            textContainer.innerText = text.substring( 0 , i + 1);
            await sleep(sleepTime)
        }
        await sleep(sleepTime * 5);
        for(let i = text.length ; i > 0; i--){
            textContainer.innerText = text.substring( 0 , i - 1);
            await sleep(sleepTime)
        }
        await sleep(sleepTime * 10)
    }
}
writer()
let allImges = document.querySelectorAll(".content .container .phones img");
let imgContainer = document.querySelector(".content .container .img img")
allImges.forEach( img => {
    img.onclick = function () {
        imgContainer.src = this.src;
    }
})
let theme = document.querySelector("header .container .theme i");
if(localStorage.theme === "light"){
    document.body.classList.add("light");
    theme.className = 'fa-solid fa-sun';
}
else {
    document.body.classList.remove("light")
    theme.className = 'fa-solid fa-moon';
}
theme.onclick = () => {
    document.body.classList.toggle("light");
    if(document.body.classList.contains("light")){
        theme.className = 'fa-solid fa-sun';
        localStorage.setItem("theme","light")
    }
    else {
        theme.className = 'fa-solid fa-moon';
        localStorage.setItem("theme","dark")
    }
}