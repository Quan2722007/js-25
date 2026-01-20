const containers = document.querySelector(".container");
containers.addEventListener("click", (event) => {
    const target = event.target;
    const box = target.parentElement;

    if (target.classList.contains("open")) {
        console.log(target);
        box.classList.add("expanded");
    } else if (target.classList.contains("close")) {
        box.classList.remove("expanded");
    }
});
