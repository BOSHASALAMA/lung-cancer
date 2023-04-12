let gear = document.getElementById("gear")
let btn_dark = document.querySelector(".btn-dark")
let btn_light = document.querySelector(".btn-light")
let nav= document.querySelector(".navbar")
let navLink = document.querySelectorAll(".nav-link")
let log= document.querySelector(".login")
let img =document.querySelector("img")
let b_form = document.querySelector(".b-form")
let labels=document.querySelectorAll("label")

console.log(labels)

gear.onclick=function(){
    gear.style.display="none"
    colorchange.style.display="block"
    colorchange.onmouseleave=function(){
        colorchange.style.display="none"
        gear.style.display="block"

    }
}


btn_dark.onclick=()=>{
   document.body.style.backgroundColor="black"
    nav.style.backgroundColor="black"
    log.style.backgroundColor="black"
    gear.style.color ="white "
    b_form.style.backgroundColor="black "
    b_form.style.border="none"
    img.src="/photos/3.jpg"
    labels.forEach((l)=>{
        l.style.color="white"
    })
    navLink.forEach((na)=>{
        na.style.color="white"
        na.onmouseleave=()=>{
            na.style.color="white"
        }
        na.onmouseover=()=>{
            na.style.color="var(--wr-color)"
        }

    }

    )



    btn_light.onclick=()=>{
        document.body.style.backgroundColor="var(--sec-color)"
    
        log.style.backgroundColor="var(--sec-color)"
        img.src="/photos/1.jpg"
        gear.style.color="black "

        b_form.style.backgroundColor="white "
        nav.style.backgroundColor="var(--sec-color)"
        nav.style.color="white"
        labels.forEach((l)=>{
            l.style.color="black"
        })
        navLink.forEach((na)=>{
            na.style.color="rgb(0 0 0 / 57%)"
            na.onmouseleave=()=>{
                na.style.color="rgb(0 0 0 / 57%)"
    
            }
            na.onmouseover=()=>{
                na.style.color="white"
            }
    
        }
    
        )
     
        
    
    }
}








