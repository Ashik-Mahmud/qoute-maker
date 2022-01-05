// script file work start 

var qouteBtn = document.querySelector(".qoute-btn button");
var qouteText = document.querySelector(".qoute-text p");
var author = document.querySelector(".author span");
var soundBtn = document.querySelector(".speak-btn");
var copyBtn = document.querySelector(".copy-btn");
var twitterBtn = document.querySelector(".twitter-btn");

// function for random generate qoute 
function randomQoute() {
    qouteBtn.textContent = "Loading....";
    qouteBtn.style.opacity = "0.7";
    fetch("https://api.quotable.io/random")
        .then(response => response.json())
        .then(data => {
            qouteText.textContent = data.content;
            author.textContent = data.author;
            qouteBtn.textContent = "New Qoute";
            qouteBtn.style.opacity = "1";

        })


};


// work with sound 
function SpeakQoute(){
    let utterance =  new SpeechSynthesisUtterance(`${qouteText.textContent} by ${author.textContent}`);
    speechSynthesis.speak(utterance) 
     setInterval(()=>{
            !speechSynthesis.speaking ? soundBtn.classList.remove("active") : soundBtn.classList.add("active");
     }, 10);
   

}

// work with Copy 
function CopyQoute(){
   navigator.clipboard.writeText(qouteText.textContent);
}


// work with tweet 
function TweetQoute(){
   let tweetUrl = `https://twitter.com/intent/tweet?url=${qouteText.textContent}`;
   window.open(tweetUrl, "_blank");
}



twitterBtn.addEventListener("click", TweetQoute);
copyBtn.addEventListener("click", CopyQoute);
soundBtn.addEventListener("click", SpeakQoute);
qouteBtn.addEventListener("click", randomQoute);
randomQoute();