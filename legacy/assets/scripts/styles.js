// Meus estilos
const reset = document.createElement('link');
reset.rel = 'stylesheet';
reset.href = './assets/styles/reset.css';

const style = document.createElement('link');
style.rel = 'stylesheet';
style.href = './assets/styles/style.css';

const navbarStyle = document.createElement('link');
navbarStyle.rel = 'stylesheet';
navbarStyle.href = './assets/styles/navbar.css'

const print = document.createElement('link');
print.rel = 'stylesheet';
print.href = './assets/styles/print.css';
print.media = 'print';

// Fontes do Google
const googleapis = document.createElement('link');
googleapis.rel = 'preconnect';
googleapis.href = 'https://fonts.googleapis.com';

const gstatic = document.createElement('link');
gstatic.rel = 'preconnect';
gstatic.href = 'https://fonts.gstatic.com';
gstatic.crossOrigin = '';

const fontUbuntu = document.createElement('link');
fontUbuntu.rel = 'stylesheet';
fontUbuntu.href = 'https://fonts.googleapis.com/css2?family=Ubuntu:ital,wght@0,300;0,400;0,500;0,700;1,300;1,400;1,500;1,700&display=swap';

// Appending os links de estilos no head
document.head.append(reset, googleapis, gstatic, fontUbuntu, style, navbarStyle, print);

