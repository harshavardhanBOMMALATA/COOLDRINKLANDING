
function changeTheme(flavor){
const bg=document.getElementById('background');
bg.classList.remove('blue-theme','orange-theme','mint-theme');
if(flavor==='blue'){
bg.classList.add('blue-theme');
document.getElementById('title').innerText='Feel the Cool Energy';
document.getElementById('desc').innerText='Fresh blue flavor that keeps you chilled.';
}
if(flavor==='orange'){
bg.classList.add('orange-theme');
document.getElementById('title').innerText='Taste the Orange Fire';
document.getElementById('desc').innerText='Bold orange flavor full of energy.';
}
if(flavor==='mint'){
bg.classList.add('mint-theme');
document.getElementById('title').innerText='Stay Minty Fresh';
document.getElementById('desc').innerText='Cool mint flavor for ultimate refreshment.';
}
}
