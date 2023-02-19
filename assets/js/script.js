let btn = document.querySelector('.switch');
let logo = document.querySelector('.logo__img');
let title = document.querySelector('.info__title');
let iBtn = document.querySelector('.info__btn');
let themePos = document.querySelector('.buttons__theme h5');
/*
document.ready(function()
{

$('.switch').click(function()
{
$(this).toggleClass("switchOn");
});*/

let start = () =>{
    btn.addEventListener("click", ()=>{
        logo.classList.toggle('logo__img_wh');
        document.body.classList.toggle('light');
        btn.classList.toggle('switchOn');
        title.classList.toggle('info__title_wh');
        iBtn.classList.toggle('info__btn_wh');
        if(btn.classList.value == 'switch'){
            themePos.textContent = 'Theme: dark';
  
        }else{
            themePos.textContent = 'Theme: light';   
        }
        
    })
}

start()