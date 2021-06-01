(function(){
    let x = 0;
    document.querySelector(".nav-toggle").addEventListener('click',()=>{
        const list = document.querySelector(".nav__list");
        if(x % 2 == 0){
            list.style.display = 'block';
        }else{
            list.style.display = 'none';
        }
        x = (x+1)%2;
    })
})();
