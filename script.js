document.addEventListener("DOMContentLoaded", function () {
    var typed = new Typed('#element2', {
       strings:[
        "<b>Web Developer.</b>",
          "<b>Programmer.</b>",
       ],
        typeSpeed: 50,
        backSpeed: 30,
        backDelay: 1000,
        startDelay: 400,
        loop: true,
      });
      document.querySelector(".elements li a").style.color="black";
});
function nav(){
  let nav_lists=document.querySelectorAll(".elements li");
    // nav_lists.forEach((item,index)=>{
    //   item.addEventListener("click",()=>{
    //   document.querySelector(".elements span").style.left="56vh";
       
    //   })
    // })
    nav_lists[0].addEventListener("click",()=>{
      document.querySelector(".elements span").style.left="45px"
      let list=document.querySelectorAll(".elements li a");
     list.forEach((li)=>{
      li.style.color="white"
     })
      list[0].style.color="black";
      
    })
    nav_lists[1].addEventListener("click",()=>{
      document.querySelector(".elements span").style.left="31vh"   
       let list=document.querySelectorAll(".elements li a");
       list.forEach((li)=>{
        li.style.color="white"
       })
     list[1].style.color="black"
    })
    nav_lists[2].addEventListener("click",()=>{
      document.querySelector(".elements span").style.left="54vh"
       let list=document.querySelectorAll(".elements li a");
       list.forEach((li)=>{
        li.style.color="white"
       })
     list[2].style.color="black"
    })
    nav_lists[3].addEventListener("click",()=>{
      document.querySelector(".elements span").style.left="75vh"
       let list=document.querySelectorAll(".elements li a");
       list.forEach((li)=>{
        li.style.color="white"
       })
     list[3].style.color="black"
    })
    nav_lists[4].addEventListener("click",()=>{
      document.querySelector(".elements span").style.left="98vh"
       let list=document.querySelectorAll(".elements li a");
       list.forEach((li)=>{
        li.style.color="white"
       })
     list[4].style.color="black"
    })
     
    let scroll=document.querySelectorAll(".elements li a")
    scroll.forEach(link=>{
      link.addEventListener('click',function(event){
        event.preventDefault();
       let pages=document.querySelector(this.getAttribute('href'));
       pages.scrollIntoView({
        behavious:'smooth'
       })
      })
    })

   
}

nav();