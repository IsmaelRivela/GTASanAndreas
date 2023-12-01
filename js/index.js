`use strict`

// body opacity

const bodyOpacity = document.querySelector(`.transitionOpacity`)

let opacityHandler = ()=>{
    bodyOpacity.classList.add(`isHidden`)
}

document.addEventListener(`DOMContentLoaded`,()=>{
    setTimeout( opacityHandler , 500)
})


// header desplegable

const headerLogo = document.querySelector(`.header__img`)
const headerNav  = document.querySelector(`.header__nav`)
const mainBody   = document.querySelector(`.main`)
const headerLi   = document.querySelectorAll(`.header__li`)


let hideNav = ()=>{
    
    headerNav.classList.remove(`isVisible`)
    headerNav.classList.add(`isHidden`)

    headerLi.forEach((eachLi, i)=>{
        headerLi[i].classList.remove(`liVisible`)
    })
}
let showNav = ()=>{

    headerNav.classList.remove(`isHidden`)
    headerNav.classList.add(`isVisible`)

    headerLi.forEach((eachLi, i)=>{
        
        let liTimer = 300 * i

        setTimeout(()=>{
            headerLi[i].classList.add(`liVisible`)
        }, liTimer)
        
    })
}

headerLogo.addEventListener(`pointerdown`, ()=>{
    headerNav.classList.contains(`isVisible`)
    ? hideNav()
    : showNav()
})

mainBody.addEventListener(`pointerdown`, ()=>{
    hideNav()
})

// carrousel container effect
const sliderContainer = document.querySelectorAll(`.slider__container`)

console.log(sliderContainer)

let fotoIsActive = 0

let carrouselHandler = ()=>{
    
    fotoIsActive++

    if(fotoIsActive >= 3 ){
        fotoIsActive = 0
    }

    sliderContainer.forEach((eachContainer, i)=>{
         sliderContainer[i].classList.remove(`isActive`)
    })

    sliderContainer.forEach((eachContainer , i)=>{
        sliderContainer[fotoIsActive].classList.add(`isActive`)
    })
    
}

setInterval(carrouselHandler , 3000);

// cursor behaviour

const cursorContainer = document.querySelector(`.cursor__container`)
const cursorWhite     = document.querySelector(`.cursor__white`)

window.addEventListener(`mousemove`, e=>{
    let clientX = e.clientX
    let clientY = e.clientY

    cursorContainer.style.transform = `translate3d(${clientX - 48}px, ${clientY- 48}px, 0)`

    window.addEventListener(`pointerdown`, ()=>{
        cursorWhite.style.opacity = 0

        window.addEventListener(`pointerup`, ()=>{
            cursorWhite.style.opacity = 1
        })
    })
    
})
