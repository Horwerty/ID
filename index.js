const modal = document.getElementById('modals');
const closeModal = document.getElementById('close');
const closeMmodal = document.getElementById('closeBtn');
const menu = document.getElementById('menuIcon');
const mobNav = document.getElementById('menuList');
const icon = document.querySelector('.menumenu');
const qouteButton = document.getElementById('quoteBtn');
const quoteWord = document.getElementById('qouteText');
const quoteArray = ["'Gravitation is not responsible for people falling in love.   —Albert Einstein'",
"'Love doesn\’t make the world go round. Love is what makes the ride worthwhile.'",
 "'To be fully seen by somebody, then, and be loved anyhow—this is a human offering that can border on miraculous.'", 
 "'In all the world, there is no heart for me like yours. In all the world, there is no love for you like mine.'",
  "'I love you not only for what you are, but for what I am when I am with you.'",
   "'Love makes everything work, so learn how to  love.'", 
   "'I am my beloved and my beloved is mine.—Song of Solomon 6:3'",
    "'The highest happiness on earth is the happiness of marriage.'",
    "'True love stories never have endings.'",
    "'You don\’t marry the person you can live with—you marry the person you can\’t live without.'",
"'What lies behind us, and what lies before us are tiny matters compared to what lies within us.'",
"'Love never gives up, never loses faith, is always hopeful and endures through every circumstance. —Corinthians 13:7'"];


qouteButton.addEventListener("click", () => {
      setInterval(function(){
            let randomquote = Math.floor(Math.random() * (quoteArray.length));
            quoteWord.innerHTML = quoteArray[randomquote];
      }, 5000);
     
});
// const modcount = document.querySelector('.countdowwwwn');

console.log(quoteWord);

window.addEventListener("load", function() {
      this.setTimeout(
            function open(event){
                  document.querySelector(".modals").style.display = "block";
            },
            2500
      )
});


// function quotes() {
//       let randomquote = Math.floor(Math.random() * (quoteArray.length));
//       document.getElementById('quoteWord').innerHTML = quoteArray[randomquote];
// };


closeModal.addEventListener("click", () => {
      modal.style.display="none"
});

closeMmodal.addEventListener('click', () => {
      modal.style.display="none"
});

menu.addEventListener("click", () => {
      mobNav.classList.toggle("active");
      icon.classList.toggle("bx-x");
});

mobNav.addEventListener("click", () => {
      mobNav.classList.remove("active");
      icon.classList.remove("bx-x");
});

let countDownDate = new Date("July 28, 2022 7:00:00").getTime();
let intervalSetter = setInterval(function () {
  let now = new Date().getTime();
  let total = countDownDate - now;

//   const milliseconds = Math.floor((total/1000));
  const seconds = Math.floor((total / 1000) % 60);
  const minutes = Math.floor((total / 1000 / 60) % 60);
  const hours = Math.floor((total / (1000 * 60 * 60)) % 24);
  const days = Math.floor(total / (1000 * 60 * 60 * 24));
//   const weeks = Math.floor(total / (1000 * 60 * 60 * 24) % 7);

  if (days <= 00 && hours <= 00 && minutes <= 00 && seconds <= 00) {
    return;
  } else {
      // document.getElementById("weeks").innerHTML = weeks;  
    document.getElementById("days").innerHTML = days;
    document.getElementById("hours").innerHTML = hours;
    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("seconds").innerHTML = seconds;
    document.getElementById("countdowwwwn").innerHTML = days + "Day(s) " + hours + "Hour(s) " + minutes + "min(s) " + seconds + "s ";

//     document.getElementById("milliseconds").innerHTML = milliseconds
  }

});







//modcount.textContent = intervalSetter;
