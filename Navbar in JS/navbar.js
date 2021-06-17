
const navToggle = document.querySelector('.nav-toggle')
const links = document.querySelector('.links')

navToggle.addEventListener("click",function(){
    // console.log(links.classList.contains("show-links"));
    const status= links.classList;

    // if(status.contains("show-links")){
    //     links.classList.remove("show-links");
    // }
    // else{
    //     links.classList.add("show-links");
    // }
    
    links.classList.toggle("show-links")
})