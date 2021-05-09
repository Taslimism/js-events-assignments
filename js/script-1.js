window.onload = () =>{
   const btn = document.querySelector('input');
   btn.addEventListener('click',()=>{
    btn.value = parseInt(btn.value) + 1;
    
   })
}