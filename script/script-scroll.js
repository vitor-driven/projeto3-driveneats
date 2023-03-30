const sliders = document.querySelectorAll(".selection-box");

// let isDown = false;
// let startX;
// let scrollLeft;

// sliders.forEach((slider) => {
//     slider.addEventListener("mousedown", (e) => {
//         isDown = true;
//         slider.classList.add("active");
//         startX = e.pageX - slider.offsetLeft;
//         scrollLeft = slider.scrollLeft;
//     });
//     slider.addEventListener("mouseleave", () => {
//         isDown = false;
//         slider.classList.remove("active");
//     });
//     slider.addEventListener("mouseup", () => {
//         isDown = false;
//         slider.classList.remove("active");
//     });
//     slider.addEventListener("mousemove", (e) => {
//         if (!isDown) return;
//         e.preventDefault();
//         const x = e.pageX - slider.offsetLeft;
//         const walk = x - startX;
//         slider.scrollLeft = scrollLeft - walk;
//         console.log(walk);
//     });
// });

sliders.forEach((slider) => {
    let startX, scrollLeft;

    let startDragging = function (e) {
        mouseDown = true;
        startX = e.pageX - slider.offsetLeft;
        scrollLeft = slider.scrollLeft;
    };
    let stopDragging = function (event) {
        mouseDown = false;
    };
    slider.addEventListener("mousemove", (e) => {
        e.preventDefault();
        if (!mouseDown) {
            return;
        }
        const x = e.pageX - slider.offsetLeft;
        const scroll = x - startX;
        slider.scrollLeft = scrollLeft - scroll;
    });
    // Add the event listeners
    slider.addEventListener("mousedown", startDragging, false);
    slider.addEventListener("mouseup", stopDragging, false);
    slider.addEventListener("mouseleave", stopDragging, false);
});
