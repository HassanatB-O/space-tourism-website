document.querySelector(".menu-open").addEventListener('click', () =>{
    console.log("green light")
    document.querySelector(".nav-menu").style.display = "block"
    document.querySelector(".menu-open").style.display = "none"
})

document.querySelector(".icon-close").addEventListener('click', () =>{
    document.querySelector(".nav-menu").style.display = "none"
    document.querySelector(".menu-open").style.display = "flex"
})

let hover = 0
document.querySelector(".circle").addEventListener('mouseover', () =>{
    document.querySelector(".other-circle").style.backgroundColor = "rgba(255, 255, 255, 0.10)"
    document.querySelector(".other-circle").style.backdropFilter = "blur(81.5485px)"
})

document.querySelector(".circle").addEventListener('mouseleave', () =>{
    document.querySelector(".other-circle").style.backgroundColor = "transparent"
    document.querySelector(".other-circle").style.backdropFilter = "blur(0px)"
})