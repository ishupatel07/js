let changeContent = [
    {sentence : "Hi"},
    {sentence : "How Are You?"},
    {sentence : "My Name Is Jerry"},
    {sentence : "From Tom And JerrY"},
    {sentence : "I Am In Your Browser"},
    {sentence : "Hiding From Tom"}
];

let currentIndex = 0;

function changeContentInterval() {
    document.querySelector("#content").textContent = changeContent[currentIndex].sentence;
    currentIndex++;
    if (currentIndex === changeContent.length) {
        currentIndex = 0;
    }
}


changeContentInterval();


setInterval(changeContentInterval, 2000);