
// store data from contact form in local storage

function savedata() {
    var firstName = document.getElementById('firstName').value;
    var lastName = document.getElementById('lastName').value;
    var email = document.getElementById('email').value;
    var subject = document.getElementById('subject').value;
    var message = document.getElementById('message').value;
    localStorage.setItem('firstName', firstName);
    localStorage.setItem('lastName', lastName);
    localStorage.setItem('email', email);
    localStorage.setItem('subject', subject);
    localStorage.setItem('message', message);
}

// to hover links when scrolling

const services = document.getElementById('services');
const servicesTop = services.offsetTop;

const home = document.getElementById('home');
const homTop = home.offsetTop;

const about = document.getElementById('about');
const aboutTop = about.offsetTop;

const client = document.getElementById('client');
const clientTop = client.offsetTop;

const contact = document.getElementById('contact');
const contactTop = contact.offsetTop;


var link1 = document.getElementById('link1');
var link2 = document.getElementById('link2');
var link3 = document.getElementById('link3');
var link5 = document.getElementById('link5');
var link6 = document.getElementById('link6');


window.onscroll = function () {
    theNavbar();
};

function theNavbar() {

    const nav = document.querySelector('.navbar');


    if (window.scrollY > 30) {
        nav.classList.add("mynav");
    } else {
        nav.classList.remove("mynav");
    }

    if (window.scrollY > 90) {
        nav.classList.add("mynavv");
    } else {
        nav.classList.remove("mynavv");
    }

    if (window.scrollY >= homTop) {
        link1.classList.add("go");
    } else {
        link1.classList.remove("go");
    }
    if (window.scrollY >= servicesTop) {
        link1.classList.remove("go");
        link2.classList.add("go");
    } else {
        link2.classList.remove("go");
    }

    if (window.scrollY >= aboutTop) {
        link2.classList.remove("go");
        link3.classList.add("go");
    } else {
        link3.classList.remove("go");

    }

    if (window.scrollY >= clientTop) {
        link3.classList.remove("go");
        link5.classList.add("go");
    } else {
        link5.classList.remove("go");

    }

    if (window.scrollY >= contactTop) {
        link5.classList.remove("go");
        link6.classList.add("go");
    } else {
        link6.classList.remove("go");
    }
}


function openNav() {
    document.getElementById("mySidenav").style.width = "310px";
    document.getElementById("mySidenav").style.boxShadow = "1px 1px 6px 1px black";
    document.getElementById("mySidenav").classList.remove("d-none");
}

function closeNav() {
    document.getElementById("mySidenav").classList.add("d-none");
}