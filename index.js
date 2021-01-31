day = document.getElementById('day');
night = document.getElementById('night');
file= document.getElementById('file');
localStorage.setItem('mode','day');



day.addEventListener('click',()=>{
    if(localStorage.getItem('mode')=='night'){
     
     localStorage.setItem('mode','day');
     file.href='index1.css';
     
    }

});

night.addEventListener('click',()=>{
    if(localStorage.getItem('mode')=='day'){
        mode='night';
        localStorage.setItem('mode','night');
        file.href='index2.css';
    }
})