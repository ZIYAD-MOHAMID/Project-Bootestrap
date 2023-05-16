let switcherLis = document.querySelectorAll(".switcher li");
let imgs = Array.from(document.querySelectorAll(".our-work .row .box img"));
console.log(imgs);
switcherLis.forEach((li) => {
    li.addEventListener("click", removeActive);
    li.addEventListener("click", manageImgs);
});
function removeActive(){
    switcherLis.forEach((li) => {
        li.classList.remove("active");
        this.classList.add("active");
    });
}
function manageImgs(){
    imgs.forEach((img) => {
        img.style.display = "none";
    })
    document.querySelectorAll(this.dataset.work).forEach((el) => {
        el.style.display = "block";
    })
}

