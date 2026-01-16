document.addEventListener('mousemove', (e) => {
    const clouds = document.querySelectorAll('.cloud');
    const mouseX = e.clientX;
    const mouseY = e.clientY;

    clouds.forEach((cloud, index) => {
        const speed = (index + 1) * 20;

        const x = (window.innerWidth - mouseX * speed) / 100;
        const y = (window.innerHeight - mouseY * speed) / 100;

        cloud.style.transform = `translateX(${x}px) translateY(${y}px)`;
    });
});
