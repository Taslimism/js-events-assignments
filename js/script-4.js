window.addEventListener('load',()=>{
    const txt = document.querySelector("#txt");
    const res = document.createElement('div');
    const para = document.querySelector('.para');
    res.innerHTML =`The above text has ${txt.value.length} characters`;
    txt.addEventListener('input',()=>{
        para.remove();
        res.innerHTML =`<p>The above text has ${txt.value.length} characters</p>`;
        document.body.appendChild(res);
    })
})