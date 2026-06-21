function showLogin() {
    const page = document.getElementById('page');
    page.style.opacity = '0.95';
    
    setTimeout(() => {
        document.getElementById('loginForm').style.display = 'block';
        document.getElementById('signupForm').style.display = 'none';
        document.getElementById('loginTab').classList.add('active');
        document.getElementById('signupTab').classList.remove('active');
        page.classList.remove('flipped');
        page.style.opacity = '1';
    }, 100);
}

function showSignup() {
    const page = document.getElementById('page');
    page.style.opacity = '0.95';

    setTimeout(() => {
        document.getElementById('loginForm').style.display = 'none';
        document.getElementById('signupForm').style.display = 'block';
        document.getElementById('signupTab').classList.add('active');
        document.getElementById('loginTab').classList.remove('active');
        page.classList.add('flipped');
        page.style.opacity = '1';
    }, 100);
}