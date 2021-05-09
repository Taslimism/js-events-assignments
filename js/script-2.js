window.addEventListener('load',()=>{
    const dec = document.querySelector('#dec');
    const inc = document.querySelector('#inc');
    const text = document.querySelector('#text');
    dec.addEventListener('click',()=>{
        
        text.value = parseInt(text.value)-1;
    });

    inc.addEventListener('click',()=>{
        
        text.value += 1;
    })
    
})