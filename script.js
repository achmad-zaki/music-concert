const today = new Date()
const yyyy = today.getFullYear()
const year = document.getElementById("year").innerHTML = yyyy

window.addEventListener('scroll', function() {
    const nav = document.querySelector("#navbar");
    if (window.pageYOffset > 50) {
        nav.classList.add('bg-custom-primary', 'shadow');
    } else {
        nav.classList.remove('bg-custom-primary', 'shadow');
    }
});

// let scrollPosition = window.pageYOffset;
// window.onscroll = function() {
//     let currentScrollPosition = window.pageYOffset;

//     if(scrollPosition > currentScrollPosition) {
//         document.querySelector("#navbar").style.top = "0";
//     } else {
//         document.querySelector("#navbar").style.top = "-80px";
//     }
//     scrollPosition = currentScrollPosition;
// }
