const btns = document.querySelectorAll('.fa-solid');

btns.forEach(btn => {
    btn.addEventListener("click", () => {
        btn.classList.toggle("fa-toggle-on");
        btn.classList.toggle("fa-toggle-off");
    });
});


const actives = document.querySelectorAll('.btn');

actives.forEach(active => {
    active.addEventListener("click", () => {
        document.querySelector('.active')?.classList.remove('active');
        active.classList.add('active');
    });
});


document.getElementById('dark-mode').onclick = () => {

    let body = document.getElementById('light');
    let icon = document.getElementById('sun');
    let title = document.getElementById('title');

    const light = body.classList.contains('light');

    if (light) {
        body.classList.remove('light');
        body.style.background = 'bisque';
        body.style.transition = '0.4s';
        
        title.style.color = 'hsl(225, 78%, 16%)';
        
        icon.classList.add('fa-sun');
        icon.classList.remove('fa-moon');

    }
    else {
        body.classList.add('light');
        body.style.background = 'hsl(225, 78%, 16%)';
        body.style.transition = '0.4s';
        
        title.style.color = '#fff';

        icon.classList.add('fa-moon');
        icon.classList.remove('fa-sun');
    }
}