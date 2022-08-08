let stars = document.querySelectorAll('.star');

stars.forEach(star => {
    let x_pos = Math.floor(Math.random() * 695),
        y_pos = Math.floor(Math.random() * 495);
    star.style.left = x_pos+'px';
    star.style.top = y_pos+'px';
    setInterval(() => {
        x_pos += 1;
        star.style.left = x_pos+'px';
        if (x_pos === 700){
            x_pos = -5;
        }
    }, 5 * Math.floor(Math.random() * 2))
})