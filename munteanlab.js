const buttons = document.querySelectorAll('.popup_button');
const popUp = document.querySelector('.pop-up');
const blurry = document.querySelector('.peoplepage')

const people = [
    {
        name: "Brian Muntean, Ph.D.",
        title: "Principle Investigator",
        about: "Lorem Ipsum, add more content later, description, titles, awards, honors, other links, etc.",
        imageSrc: "images/brian_muntean.jpg",

    },
    {
        name: "Douglas Sloan, B.S.",
        about: "Lorem ipsum",
        imageSrc: "images/douglas_sloan.jpg",
    },
    {
        name: "Casey Cryan, B.S.",
        about: "Lorem ipsum",
        imageSrc: "images/casey_cryan.jpg",
    },
    {
        name: "Yini Liao, M.S.",
        about: "Lorem ipsum",
        imageSrc: "images/yini_liao.jpg",
    },
    {
        name: "Josephine Widjaja",
        about: "Lorem ipsum",
        imageSrc: "images/Josephine_widjaja.jpg",
    },
    {
        name: "Abdullah Chandasir",
        about: "Lorem ipsum",
        imageSrc: "images/abdullah_chandasir.jpg",
    },
    {
        name: "ZiYan Britt, B.S.",
        about: "Lorem ipsum",
        imageSrc: "images/ziyan_britt.webp",
    },
    {
        name: "Saniya Momin, B.S.",
        about: "Lorem ipsum",
        imageSrc: "images/saniya_momin.jpg",
    },

]

buttons.forEach(button => {
    button.addEventListener('click', (event) => {
        console.log(event.target.id);
        popUp.innerHTML = 
        `
        <div class='pop-upl'>
            <img src="${people[event.target.id].imageSrc}">
        </div>
        <div class='pop-upr'>
            <h2>${people[event.target.id].name}</h2>
            <em>${people[event.target.id].title}</em>
            <p>${people[event.target.id].about}</p>
            <button onClick="togglePopUp()"><img class="blackx" src="images/x.png"><img class="bluex" src="images/xblue.png"></button>
        </div>
        `;
        popUp.classList.toggle('visible');
        window.scrollTo(0, 0);
        blurry.classList.toggle('active');
    })
});

function togglePopUp() {
    popUp.classList.toggle('visible');
    blurry.classList.toggle('active');
}

const activePage = window.location.pathname;
console.log(activePage);

const navLinks = document.querySelectorAll ('nav a').
forEach(link => {
    if(link.href.includes(`${activePage}`)){
        link.classList.add('active');
    }
})



Fancybox.bind("[data-fancybox]", {
// Your custom options
});


