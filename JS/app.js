document.addEventListener("mousemove", function(event) {
    var width = window.innerWidth,
    height = window.innerHeight,
    positionX = (event.clientX/width) - 0.55,
    positionY = (event.clientY/height) - 0.55;
    gsap.to(".grid-item-1", {rotationY: positionX * 50, rotationX: -positionY * 50, ease: "none"});
});