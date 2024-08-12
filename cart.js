let cartbtn= document.querySelectorAll(".cartbtn")
cartbtn.forEach((addCart)=>{
    addCart.addEventListener("click",()=>{
        let obj={
            img:`${addCart.parentElement.parentElement.firstElementChild.src}`,
            name:`${addCart.parentElement.firstElementChild.innerHTML}`,
            price:`${addCart.parentElement.firstElementChild.nextElementSibling.innerHTML}`,
            item:`1`
        }
        obj=JSON.stringify(obj)
        localStorage.setItem(localStorage.length,obj)
    })
})



// let notify=document.getElementById("notify");
// notify.addEventListener('click', function(event) {
//     // Show the popup
//     alert('No new Notifications ...');
// });


