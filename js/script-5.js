window.addEventListener('load',()=>{
    const colr = document.querySelector('#col');
    const box = document.querySelector("div");
    box.style.height = `100px`;
    box.style.width = `100px`;
    box.style.border = 'solid black';

    colr.addEventListener('input',()=>{
        
        box.style.backgroundColor =    colr.value;
    })
})