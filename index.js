const menuicon=document.querySelector('.menuicon');
const mobilenav=document.querySelector('.mobile-nav');
const backbutton=document.querySelector('.backbutton');

backbutton.addEventListener('click',function(){

    mobilenav.style.display ="none"; menuicon.style.display = "block"
})
menuicon.addEventListener('click',function(){view = true
    console.log('click')
     mobilenav.style.display ="flex"; menuicon.style.display = "none"
})