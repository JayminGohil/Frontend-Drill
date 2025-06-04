const texts = [
    ['Capturing Moments,', 'Creating Memories'],
    ['Share Your Stories,', 'Connect with Others'],
    ['Express Yourself,', 'Inspire the World']
];

let currentTextIndex = 0;
let isAnimating = false;
const mainHeading = document.querySelector('.main-heading');
const subHeading = document.querySelector('.sub-heading');
const dots = document.querySelectorAll('.dot');

function updateDots() {
    dots.forEach((dot, index) => {
        dot.classList.toggle('active', index === currentTextIndex);
    });
}

function animateText() {
    if (isAnimating) return;
    isAnimating = true;

    mainHeading.classList.remove('active');
    subHeading.classList.remove('active');
    mainHeading.classList.add('fade-out');
    subHeading.classList.add('fade-out');

    setTimeout(() => {
        
        const [main, sub] = texts[currentTextIndex];
        mainHeading.textContent = main;
        subHeading.textContent = sub;

        
        mainHeading.classList.remove('fade-out');
        subHeading.classList.remove('fade-out');
        
        
        void mainHeading.offsetWidth;
        void subHeading.offsetWidth;

        
        mainHeading.classList.add('active');
        subHeading.classList.add('active');

        updateDots();
        currentTextIndex = (currentTextIndex + 1) % texts.length;
        
        setTimeout(() => {
            isAnimating = false;
        }, 500); 
    }, 500); 
}

mainHeading.textContent = texts[0][0];
subHeading.textContent = texts[0][1];

setTimeout(() => {
    mainHeading.classList.add('active');
    subHeading.classList.add('active');
    updateDots();
}, 100);

setInterval(animateText, 5000);

const togglePassword = document.querySelector('.toggle-password');
const passwordInput = document.querySelector('input[type="password"]');

togglePassword.addEventListener('click', () => {
    const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
    passwordInput.setAttribute('type', type);
});
