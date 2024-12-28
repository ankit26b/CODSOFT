var type = new Typed('.text',{
    strings:['Web Developer','Webpage Designer','Free lancer'],
    typeSpeed:50,
    backspeed:50,
    loop:true,
})

/* SHOW EUCATION AND EXPERIENCE */

let EducationBtn = document.querySelector('.education');
let ExperienceBtn = document.querySelector('.experience');
let show_box = document.querySelectorAll('.show_box');
let hide_box = document.querySelectorAll('.hide_box');

EducationBtn.addEventListener('click',()=>{
    show_box.forEach(Sbox=>{
        Sbox.style.opacity='0';
    })
    hide_box.forEach(Hbox=>{
        Hbox.style.opacity='1';
    })
})
ExperienceBtn.addEventListener('click',()=>{
    show_box.forEach(Sbox=>{
        Sbox.style.opacity='1';
    })
    hide_box.forEach(Hbox=>{
        Hbox.style.opacity='0';
    })
})

var mixer = mixitup('.project_cards')

let bar = document.querySelector('.sidebar');
let menu = document.querySelector('.menu');
let nav = document.querySelector('nav');

bar.addEventListener('click',()=>{
    menu.classList.toggle('show_menu')
    nav.classList.toggle('nav_border')
})

const navLinks = document.querySelectorAll('nav ul li a');

navLinks.forEach(link => {
  link.addEventListener('click', function (event) {
    event.preventDefault();

    const targetId = link.getAttribute('href').substring(1);
    const targetSection = document.getElementById(targetId); 

    // Smooth scroll to the target section
    window.scrollTo({
      top: targetSection.offsetTop - 60,
      behavior: 'smooth'
    });
  });
})