var spinner = document.getElementById('loader_box');

function onloading(){
    setTimeout(function(){
        spinner.style.display = 'none';
    },2000);
}