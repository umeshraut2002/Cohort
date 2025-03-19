/**
 * Write your challenge solution here
 */
// Image data
const images = [
  {
    url: 'https://plus.unsplash.com/premium_photo-1666863909125-3a01f038e71f?q=80&w=1986&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    caption: 'Beautiful Mountain Landscape',
  },
  {
    url: 'https://plus.unsplash.com/premium_photo-1690576837108-3c8343a1fc83?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    caption: 'Ocean Sunset View',
  },
  {
    url: 'https://images.unsplash.com/photo-1473448912268-2022ce9509d8?q=80&w=2041&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    caption: 'Autumn Forest Path',
  },
  {
    url: 'https://plus.unsplash.com/premium_photo-1680466057202-4aa3c6329758?q=80&w=2138&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    caption: 'Urban City Skyline',
  },
];

const carousel = document.getElementById("carousel");
const carouselTrack = document.getElementById("carouselTrack");
const caption = document.getElementById("caption");
const prevButton = document.getElementById("prevButton");
const nextButton = document.getElementById("nextButton");
const carouselNav = document.getElementById("carouselNav");
const autoPlayButton = document.getElementById("autoPlayButton");
const timerDisplay = document.getElementById("timerDisplay");
let curIndex = 0
let intervalId;

timerDisplay.innerText = '5s left';

function displayImages(index){
    carouselTrack.innerHTML = "";
    caption.innerText = "";

    let img = document.createElement("img");
    let p = document.createElement("p");

    img.src = images[index].url;
    p.innerText = images[index].caption;

    carouselTrack.appendChild(img);
    caption.appendChild(p);
}

// next button 

displayImages(curIndex);

nextButton.addEventListener("click",() =>{
  curIndex++;
  if(curIndex >= images.length){
    curIndex = 0;
  }else{
  displayImages(curIndex);
  }
  });

  prevButton.addEventListener("click", () => {
    curIndex--;
    if(curIndex < 0){
      curIndex = images.length;
    } else{
      displayImages(curIndex);
    }
  })


autoPlayButton.addEventListener("click", () => {
  if(!intervalId){

    let timer = parseInt(timerDisplay.innerText) ;

    intervalId = setInterval(() =>{
      
      curIndex++;

      if(curIndex >= images.length){
        curIndex = 0;
      }

      displayImages(curIndex);

    }, timer)
  }
})

timerDisplay.innerText = `${timer} s left`;

clearInterval(intervalId);
intervalId = null;