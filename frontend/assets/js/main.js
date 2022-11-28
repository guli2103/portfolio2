/*===== MENU SHOW =====*/
const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            nav.classList.toggle('show')
        })
    }
}

showMenu('nav-toggle','nav-menu')


/*===== ACTIVE AND REMOVE MENU =====*/
const navLink = document.querySelectorAll('.nav_link')

function linkAction(){
    navLink.forEach(n => n.classList.remove('active'))
    this.classList.add('active')

    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show')
}

navLink.forEach(n => n.addEventListener('click',linkAction))

/*===== SCROLL SECTIONS ACTIVE =====*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 2000,
    reset: true,
})

/* SCROLL ABOUT */
sr.reveal('.home_title',{})
sr.reveal('.button',{delay: 200})
sr.reveal('.home_img',{delay: 400})
sr.reveal('.home_social-icon',{interval: 200})

/*SCROLL ABOUT*/
sr.reveal('.about_img',{})
sr.reveal('.about_subtitle',{delay: 200})
sr.reveal('.about_text',{delay: 400})

/*SCROLL SKILLS*/
sr.reveal('.skills_subtitle',{})
sr.reveal('.skills_text',{delay: 200})
sr.reveal('.skills_data',{interval: 200})
sr.reveal('.skills_img',{delay: 400})

/*SCROLL WORK*/
sr.reveal('.work_img',{interval: 200})

/*SCROLL CONTACT*/
sr.reveal('.contact_input',{interval: 200})


