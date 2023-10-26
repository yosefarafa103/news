let ShowList = document.querySelectorAll('header .other span')[1],
    containOfList = document.querySelector("header nav ul"),
    over = document.querySelector(".over"),
    Totop = document.querySelector("main .top")
ShowList.addEventListener("click", () => {
    containOfList.classList.toggle("viewd")
    document.body.style.overflow = "hidden"
    ShowOver()
})

function ShowOver() {
    over.classList.toggle("show")
}
function HideOver() {

    over.addEventListener("click", () => {
        over.classList.remove("show")
        containOfList.classList.toggle("viewd")
        document.body.style.overflow = "visible"
    })
}
HideOver()
window.onscroll = function () {
    if (this.scrollY >= 320) {
        document.querySelector("header").classList.add("newsLive")
    } else {
        document.querySelector("header").classList.remove("newsLive")
    }
}

window.onscroll = () => {
    if (this.scrollY >= 1400) {
        Totop.style.display = "block "
    }
    else {
        Totop.style.display = "none "
    }
    Totop.onclick = () => {
        this.scroll({ top: 0, })
    }
}
this.onload = () => {
    setTimeout(() => {
        document.querySelector(".con").classList.add("v")
        document.querySelector(".loading").classList.add("d-none")
        document.body.style.overflowY = "visible"
    }, 2000);
}