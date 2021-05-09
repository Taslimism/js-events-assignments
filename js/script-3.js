window.addEventListener('load',()=>{
    const url = document.querySelector("#url");
    const enc = document.querySelector("#enc");
    const dec = document.querySelector("#dec");
    const res = document.querySelector("#result");
    enc.addEventListener('click',()=>{
        res.value = encodeURIComponent(url.value);
    })
    dec.addEventListener('click',()=>{
        res.value = decodeURIComponent(url.value);
    })

})