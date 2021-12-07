//Create the sections
const sectionsItems = Array.from(document.querySelectorAll("section"));
for(sectionItem of sectionsItems){
    const sectionItemId   = sectionItem.getAttribute('id');
    const NewATag            = document.createElement('A');
    NewATag.textContent      = sectionItem.getAttribute('data-item-name');
    NewATag.setAttribute('data-target', sectionItemId);
    NewATag.setAttribute('href', '#');
    NewATag.classList.add('scroll-click');
    const newListItem      = document.createElement('LI');
    newListItem.append(NewATag);
    document.getElementById('nav-list').appendChild(newListItem);
}

//Scroll to the section after click
const allLinks = document.querySelectorAll(".scroll-click");
allLinks.forEach((link) => {
    link.addEventListener('click', function (e){
        e.preventDefault();
        const sectionId = link.getAttribute('data-target');
        const section   = document.getElementById(sectionId);
        document.getElementsByTagName('html')[0].style.scrollBehavior = 'smooth';
        section.scrollIntoView({behavior: "smooth"});
    });
});

// Active links while scrolling
document.addEventListener('scroll', function (){
    document.getElementById('navigation').classList.add('sticky');
    pageScrollTopPosition = document.documentElement.scrollTop || document.body.scrollTop;
    sectionsItems.forEach((Item) => {
        Item.classList.remove('active');
    });
    sectionsItems.forEach((sectionItem) => {
        sectionItem.classList.remove('active');
        sectionYPosition = sectionItem.offsetTop;
        if (pageScrollTopPosition > sectionYPosition - 60) {
            allLinks.forEach((link) => {
                link.classList.remove('active');
                if (link.getAttribute('data-target') === sectionItem.getAttribute('id')) {
                    link.classList.add('active');
                    sectionItem.classList.add('active');
                }
            });
        }
    });
});

//Show/Hide Scroll to the top button of the page
document.addEventListener('scroll', function (){
    if (document.body.scrollTop > 40 || document.documentElement.scrollTop > 40) {
        document.getElementById('scroll-to-top').style.display = "block";
    } else {
        document.getElementById('scroll-to-top').style.display = "none";
    }
})

//Scroll to the top of the page
document.getElementById('scroll-to-top').addEventListener('click', function() {
    document.body.scrollIntoView({behavior: "smooth"});
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
});
