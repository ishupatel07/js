let cc = document.querySelector("#CC")
let btn = document.querySelector(".btn")
let text = document.querySelector("#demo")
function rates(inr){
     return usd = 83 * inr
}

btn.addEventListener("click", () => {

    let ccVal = cc.value
    let result = rates(ccVal)
    text.textContent = result
})