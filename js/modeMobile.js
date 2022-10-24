export default function modeMobile(headerBtn,headerMenu){
    const header_btn=document.querySelector(headerBtn);
    const header_menu=document.querySelector(headerMenu);
    header_btn.addEventListener('click',()=>{
        if(header_menu.style.display!="block"){
            header_menu.style.display="block";
            header_btn.innerHTML='x';
        }
        else{
            header_menu.style.display="none";
            header_btn.innerHTML='=';
        }
    
    })
}
