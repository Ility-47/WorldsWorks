let btn = document.querySelector('.switch');
let logo = document.querySelector('.logo__img');
let title = document.querySelector('.info__title');
let iBtn = document.querySelector('.info__btn');
let themePos = document.querySelector('.buttons__theme h5');
const subTitle = document.querySelector('.info__subtitle h4');
const selectLng = document.querySelector('.button__lng');
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
        selectLng.classList.toggle('button__lng_wh')
        if(btn.classList.value == 'switch'){
            themePos.textContent = 'Theme: dark';
  
        }else{
            themePos.textContent = 'Theme: light';   
        }   
        
    })
    selectLng.addEventListener("click", () =>{
        console.log(selectLng.value);
        if(selectLng.value == 'en'){
            selectLng.value = 'ru';
            selectLng.textContent = 'Рус'

            title.innerHTML = langArr['inTitle']["ru"];
            subTitle.innerHTML = langArr['inSub']["ru"];
            iBtn.innerHTML = langArr["iBtn"]["ru"];
        }else if(selectLng.value == 'ru'){
            selectLng.value = 'en';
            selectLng.textContent = 'En'   

            title.innerHTML = langArr['inTitle']["en"];
            subTitle.innerHTML = langArr['inSub']["en"];
            iBtn.innerHTML = langArr["iBtn"]["en"]; 
        }

    })
}

/* Изменение языка */

const allLeng = ['ru', 'en'];

function changeLang(){
    let hash = window.location.hash;
    console.log(hash)
}
changeLang();
start()