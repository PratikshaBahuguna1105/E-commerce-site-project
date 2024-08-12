if(localStorage.length==0){
    let noorder=document.createElement("div")
    noorder.classList.add("noorder")
    // noorder.innerHTML=`No Orders Yet....`
    document.getElementsByClassName("container")[0].append(noorder)
}
else{
    try{
        let noorder=document.querySelector(".noorder")
        noorder.remove()
    }catch{}
    for(let i=0;i<localStorage.length;i++){
        let order=document.createElement("div")
        order.classList.add("box")
        let obj=JSON.parse(localStorage.getItem(i))
        order.innerHTML=`<img class="image" src="${obj.img}" alt="cart image"/>
      <div class="desc">${obj.name}</div>
      <div class="price">${obj.price}</div>
      <div class="item">
        <button class="btndel btncart">-</button>
        <p class="cartadd">${obj.item}</p>
        <button class="btnadd btncart">+</button>
      </div>`
      document.getElementsByClassName("container")[0].append(order)
    }
}
let btndel = document.querySelectorAll(".btndel")
let btnadd = document.querySelectorAll(".btnadd")

btndel.forEach((ele) => {
    ele.addEventListener("click", () => {
        let n = Number.parseInt(ele.parentElement.firstElementChild.nextElementSibling.innerHTML)
        if (n === 1) {
            let order = ele.parentElement.parentElement
            let imgsrc = order.firstElementChild.src
            try {
                for (let i = 0; i < localStorage.length; i++) {
                    if ((JSON.parse(localStorage.getItem(i)).img) == imgsrc) {
                        localStorage.removeItem(i)
                        location.reload()
                    }
                }
            }catch{}
            order.remove()
        }
        else {
            n -= 1
            ele.parentElement.firstElementChild.nextElementSibling.innerHTML = `${n}`
        }
    })
})
btnadd.forEach((ele) => {
    ele.addEventListener("click", () => {
        let n = Number.parseInt(ele.parentElement.firstElementChild.nextElementSibling.innerHTML)
        n+=1
        ele.parentElement.firstElementChild.nextElementSibling.innerHTML=`${n}`
    })
})