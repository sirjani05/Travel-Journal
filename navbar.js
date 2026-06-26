// Active Navigation Link

const links = document.querySelectorAll(".nav-links a");

links.forEach(link => {
    link.addEventListener("click", function(){

        links.forEach(item=>{
            item.classList.remove("active");
        });

        this.classList.add("active");
    });
});


// Dark Mode Toggle

const darkBtn = document.querySelector(".darkmode-icon");

darkBtn.addEventListener("click", ()=>{

    document.body.classList.toggle("dark");

});