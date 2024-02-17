const inputValue =  document.querySelector("#input")
const tempCheck = document.querySelector(".temp")


function temp(c){
       return (c * 9/5) + 32
}


tempCheck.addEventListener("click", function (
) {
    const inputVal = parseFloat(inputValue.value)
    const result = temp(inputVal)
    document.querySelector("#demo").textContent = `Result: ${result} f`
})