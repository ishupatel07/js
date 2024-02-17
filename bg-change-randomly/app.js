const bgchange = document.querySelector(".bg-change")

setInterval(() => {
    function generateRandomHexColor() {
        const hexChars = "1234567890ABCDEF"
        let color = "#"
        for(i = 0; i < 6;i++){
            color += hexChars[Math.floor(Math.random() * hexChars.length)]
        }
        return color;
    }
    let rc = generateRandomHexColor()
    bgchange.style.backgroundColor = rc

}, 2000);

