
const bodyTag = document.getElementsByTagName('body')[0];
const refreshPage = document.querySelectorAll('.refresh-page');
const loadingPage = document.querySelector('.loader.spinner');







refreshPage.forEach( item => {
    item.addEventListener('click' , () => {
        
        setTimeout(() => {
            window.location.reload();
        },7000);


         if(refreshPage) {   
                bodyTag.style.opacity = "0.5";  
                loadingPage.classList.remove('spinner')  
         }

   

    })
});



