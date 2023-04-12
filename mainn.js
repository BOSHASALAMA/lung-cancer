let infile =document.getElementById("upl")
let info = document.getElementById("boxx")
let imagecon = document.getElementById("jiji")
let lungcancer = document.getElementById("lungcancer")
let colorchange = document.getElementById("colorchange")
let gear = document.getElementById("gear")
let log = document.getElementById("login")
let search = document.querySelector(".search")
let svgg= document.getElementById("svg")
let get = document.getElementById("getstart")
let list = document.querySelectorAll(".lists li")
let iminput= document.getElementById("upl")
let check=document.getElementById("check")
let box = document.querySelector(".diagnosis .box")
let table=document.getElementById("table")
let svg_1=document.getElementById("svg_1")
let logout =document.getElementById("logout")
let ab_ut=document.querySelectorAll(".ab_ut h2")
let nav= document.querySelector(".navbar")
let navLink = document.querySelectorAll(".nav-link")
let landing=document.getElementById("landing")
let servic= document.getElementById("services")
let diagnosis=document.getElementById("diagnosis")
let Title=document.querySelectorAll(".title h2")
let history=document.getElementById("history")
let profile=document.getElementById("profile")
let stuff=document.getElementById("stuff")
let btn_dark = document.querySelector(".btn-dark")
let btn_light = document.querySelector(".btn-light")
let result = document.querySelector(".result p")
let tr=document.querySelectorAll("tr th")
let td =document.querySelectorAll("td")
let TitleP=document.querySelector(".his")
let user = document.querySelectorAll(".user p")
let abTitle=document.querySelector(".ab-title p")
let ab_utP=document.querySelectorAll(".ab_ut p")
let imgsrc=document.querySelector(".dar")
let about=document.querySelector(".about")
let footer = document.querySelector(".footer ")
let a7aaaa =document.getElementById("TableBody")
let serv_caption= document.querySelector(".serv-caption h2")
let serv_captionp= document.querySelector(".serv-caption p")
let serv_text= document.querySelectorAll(".serv-text h5")
let serv_textp=document.querySelectorAll(".serv-text p")
let team_info=document.querySelectorAll(".team-info")
let our_team=document.querySelector(".our-team")
let team_infoh=document.querySelectorAll(".team-info h5")
let team_infop=document.querySelectorAll(".team-info p")
let team_p=document.querySelectorAll(".p p")
let team_title=document.querySelector(".team-title ")

gear.onclick=function(){
    gear.style.display="none"
    colorchange.style.display="block"
    colorchange.onmouseleave=function(){
        colorchange.style.display="none"
        gear.style.display="block"
    }
}
if(localStorage.getItem("color")!=null){
    lungcancer.style.color=localStorage.getItem("color")
    serv_caption.style.color=localStorage.getItem("color")
    log.style.backgroundColor=localStorage.getItem("color")
    search.style.borderLeft=`solid 1px ${localStorage.getItem("color")}`
    search.style.color=localStorage.getItem("color")
    get.style.backgroundColor=localStorage.getItem("color")
    iminput.style.backgroundColor=localStorage.getItem("color")
    check.style.backgroundColor=localStorage.getItem("color")
    box.style.border=`solid 1px ${localStorage.getItem("color")}`
    logout.style.backgroundColor=localStorage.getItem("color")
result.style.color=localStorage.getItem("color")
    table.style.cssText=`border-color: ${localStorage.getItem("color")} !important`
    ab_ut.forEach((h)=>{
        h.style.color=localStorage.getItem("color")
    })

    tr.forEach((th)=>{
        th.style.color=localStorage.getItem("color")
    })
    serv_text.forEach((se)=>{
        se.style.color=localStorage.getItem("color")
    })

}

/*changeColor*/
list.forEach((li)=>{
li.addEventListener("click",(e)=>{
localStorage.setItem("color",e.currentTarget.dataset.color)
lungcancer.style.color=e.currentTarget.dataset.color
serv_caption.style.color=e.currentTarget.dataset.color
log.style.backgroundColor=e.currentTarget.dataset.color
search.style.borderLeft=`solid 1px ${e.currentTarget.dataset.color}`
search.style.color=e.currentTarget.dataset.color
get.style.backgroundColor=e.currentTarget.dataset.color
iminput.style.backgroundColor=e.currentTarget.dataset.color
check.style.backgroundColor=e.currentTarget.dataset.color
box.style.border=`solid 1px ${e.currentTarget.dataset.color}`
table.style.cssText=`border-color: ${e.currentTarget.dataset.color} !important`
logout.style.backgroundColor=e.currentTarget.dataset.color
result.style.color=e.currentTarget.dataset.color
ab_ut.forEach((h)=>{
    h.style.color=e.currentTarget.dataset.color
})
tr.forEach((th)=>{
        th.style.color=e.currentTarget.dataset.color
    })
    serv_text.forEach((se)=>{
        se.style.color=e.currentTarget.dataset.color
    })
   
})
})

/*uploadImage*/
infile.addEventListener("change", function(){
    const file=this.files[0];
if(file){
const reader= new FileReader();
imagecon.style.display="block";
reader.addEventListener("load",function(){
    imagecon.setAttribute("src",this.result)
})
reader.readAsDataURL(file)
}})

/*darkMood*/
btn_dark.onclick=function a7aa(e){
    servic.style.backgroundColor="black"
    serv_captionp.style.color="white"
our_team.style.backgroundColor="black"
team_title.nextElementSibling.style.color="white"

    diagnosis.style.backgroundColor="black"
    history.style.backgroundColor="black"
    nav.style.backgroundColor="black"
    navLink.forEach((na)=>{
        navLink[0].style.color="var(--wr-color)"
        na.style.color="white"
        na.onmouseleave=()=>{
            na.style.color="white"
        }
        na.onmouseover=()=>{
            na.style.color="var(--wr-color)"
        }
    }
    )
Title.forEach((h)=>{
    h.style.color="white"
})
user.forEach((p)=>{
    p.style.color="white"
})
ab_utP.forEach((p)=>{
    p.style.color="white"
})
serv_textp.forEach((se)=>{
    se.style.color="white"
})
team_info.forEach((t)=>{
    t.style.backgroundColor="black"
})
team_infoh.forEach((h)=>{
    h.style.color="white"
})
team_infop.forEach((p)=>{
    p.style.color="white"
})
team_p.forEach((p)=>{
    p.style.color="white"
})
team_info.forEach((t)=>{
    t.onmouseover=function(){
        t.style.cssText=`background-color: ${localStorage.getItem("color")}; color: white;transition: .5s;`
    }
t.onmouseleave=function(){
    t.style.cssText="background-color:black; color: white;transition: .6s;"
}
})
profile.style.backgroundColor="black"
stuff.style.backgroundColor="black"
box.style.backgroundColor="black"
landing.style.cssText=" background-image: url(/photos/Vaping-and-lungs-1023x682.jpg);background-size:cover;min-height: 1000px;"
td[1].style.color="white" ; td[4].style.color="white"
TitleP.style.color="white"
svg_1.style.color="white"
abTitle.style.color="white"
gear.style.color="white"
imgsrc.src="http://127.0.0.1:5500/photos/4.jpg"
list.forEach((li)=>{
    li.addEventListener(("click"),(e)=>{
        footer.style.backgroundColor=e.currentTarget.dataset.color
    })
})
footer.style.backgroundColor=localStorage.getItem("color")
window.onscroll=function(){
    if(scrollY>=about.offsetTop-130){
        gear.style.color="white"
            }
            else{
                gear.style.color="white"
            }
}

/*lightMood*/
    btn_light.onclick=()=>{
        servic.style.backgroundColor="var(--sec-color)"
        serv_captionp.style.color="black"
        our_team.style.backgroundColor="white"
        team_title.nextElementSibling.style.color="black"
        diagnosis.style.backgroundColor="var(--sec-color)"
        history.style.backgroundColor="white"
        nav.style.backgroundColor="var(--sec-color)"
        navLink.forEach((na)=>{
            navLink[0].style.color="var(--wr-color)"
            na.style.color="black"
            na.onmouseleave=()=>{
                na.style.color="black"
            }
            na.onmouseover=()=>{
                na.style.color="var(--wr-color)"
            }
        }
        )
        user.forEach((p)=>{
            p.style.color="black"
        })
        Title.forEach((h)=>{
            h.style.color="black"
        })
        ab_utP.forEach((p)=>{
            p.style.color="black"
        })
        serv_textp.forEach((se)=>{
            se.style.color="black"
        })
        team_info.forEach((t)=>{
            t.style.backgroundColor="white"
        })
        team_infoh.forEach((h)=>{
            h.style.color="black"
        })
        team_infop.forEach((p)=>{
            p.style.color="black"
        })

        team_p.forEach((p)=>{
            p.style.color="black"
        })
        team_info.forEach((t)=>{
            t.onmouseover=function(){
                t.style.cssText=`background-color: ${localStorage.getItem("color")}; color: white !important;transition: .5s;`
                t.children[1].style.cssText="color:white !important;"
                t.children[2].style.cssText="color:white !important;"
            }
        t.onmouseleave=function(){
            t.style.cssText="background-color:white; color: black;transition: .6s;"
            t.children[1].style.cssText="color:black !important;"
            t.children[2].style.cssText="color:black !important;"
        }
        })
        landing.style.cssText=" background-image: url(/photos/5.jpg);background-size:cover;min-height: 1000px;"
        profile.style.backgroundColor="var(--sec-color)"
        stuff.style.backgroundColor="white"
        box.style.backgroundColor="var(--sec-color)"
        td[1].style.color="black" ; td[4].style.color="black"
        TitleP.style.color="black"
        svg_1.style.color="black"
        abTitle.style.color="black"
        gear.style.color="black"
        imgsrc.src="http://127.0.0.1:5500/photos/lung.jpg"
        footer.style.backgroundColor="var(--dark-color) "
        window.onscroll=function(){
            if(scrollY>=about.offsetTop-130){
                gear.style.color="white"
                    }
                    else{
                        gear.style.color="black"
                    }
        }
    }
}
/*add result*/
check.onclick=function(){
    var cartonna="";
    for(var i=1;i<2;i++){
cartonna+=`<tr>
<td class="kill">${i}</td>
<td class="kill"><img src="/photos/can.jpeg" alt="" class="img-fluid" style="width: 40px;"></td>
<td class="kill">cancer</td>
<td class="kill"> <button class="btn btn-outline-danger" id="delee" onclick="deleteRow()">delete</button></td>
</tr>`
    }
document.getElementById("TableBody").innerHTML=cartonna; 
document.getElementById("delee").onclick=function(){
document.getElementById("TableBody").innerHTML=""
}
}

/*increase on scroll*/
let nums = document.querySelectorAll(".inc-text h5");
let section = document.querySelector(".inc-num");
let started=false
console.log(nums)
window.onscroll=function(){
if(window.scrollY<=section.offsetTop){
if(!started){
nums.forEach((num)=>num_inc(num))
}
started=true;
}

/*gear on scroll*/
window.onscroll=function(){
    if(scrollY>=about.offsetTop-130){
        gear.style.color="white"
            }
            else{
                gear.style.color="black"
            }
}
};
function num_inc(el){
let goal = el.dataset.goal;
let counter =setInterval(()=>{
el.textContent++;
if(el.textContent===goal){
clearInterval(counter);
}
})}

/* end increase on scroll*/
team_info.forEach((t)=>{
    t.onmouseover=function(){
        t.style.cssText=`background-color: ${localStorage.getItem("color")}; color: white;transition: .5s;`
    }
t.onmouseleave=function(){
    t.style.cssText="background-color:white; color: black;transition: .6s;"

}

})





