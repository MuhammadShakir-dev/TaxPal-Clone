// First select all required elements.

let firstTag = document.querySelector('.first-tag');
let secondTag = document.querySelector('.second-tag');
let thirdTag = document.querySelector('.third-tag');
let fourthTag = document.querySelector('.fourth-tag');
let imgContainer = document.querySelector('.image-container');
let firstCard = document.querySelector('.third-section-card-one');
let secondCard = document.querySelector('.third-section-card-two');
let thirdCard = document.querySelector('.third-section-card-three');
let thirdSectionImageContainer = document.querySelector('.sub-image-container');
let firstCardIcon = document.querySelector('.icon-one');
let secondCardIcon = document.querySelector('.icon-two');
let thirdCardIcon = document.querySelector('.icon-three');


// Second section event listeners.

firstTag.addEventListener('click', (e) => { 
    e.preventDefault();
    const firstImageUrl = "url('https://salient.tailwindui.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fpayroll.517af4e7.png&w=1920&q=75')";
    imgContainer.style.backgroundImage = firstImageUrl;
})


secondTag.addEventListener('click', (e) => {
    e.preventDefault();
    const secondImageUrl = "url('https://salient.tailwindui.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fexpenses.3f331919.png&w=1920&q=75')";
    imgContainer.style.backgroundImage = secondImageUrl;
});
    

thirdTag.addEventListener('click', (e) => {
    e.preventDefault();
    const thirdImageUrl = "url('https://salient.tailwindui.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fvat-returns.7402820f.png&w=1920&q=75')";
    imgContainer.style.backgroundImage = thirdImageUrl;
});

fourthTag.addEventListener('click', (e) => { 
    e.preventDefault();
    const fourthImageUrl = "url('https://salient.tailwindui.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Freporting.2ad6f065.png&w=1920&q=75')";
    imgContainer.style.backgroundImage = fourthImageUrl;
})


// Third section event listeners.
firstCard.addEventListener('click', (e) => {
    e.preventDefault();
    const firstImage = "url('https://salient.tailwindui.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fprofit-loss.2a2f85d5.png&w=1080&q=75')";
    thirdSectionImageContainer.style.backgroundImage = firstImage;
    firstCardIcon.style.backgroundColor = "blue";
    thirdCardIcon.style.backgroundColor = "rgb(197, 197, 197)";
    secondCardIcon.style.backgroundColor = "rgb(197, 197, 197)";
});

secondCard.addEventListener('click', (e) => {
    e.preventDefault();
    const secondImage = "url('https://salient.tailwindui.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Finventory.14ec7758.png&w=1080&q=75')";
    thirdSectionImageContainer.style.backgroundImage = secondImage;
    secondCardIcon.style.backgroundColor = "blue";
    firstCardIcon.style.backgroundColor = "rgb(197, 197, 197)";
    thirdCardIcon.style.backgroundColor = "rgb(197, 197, 197)";
     
});

thirdCard.addEventListener('click', (e) => {
    e.preventDefault();
    const thirdImage = "url('https://salient.tailwindui.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fcontacts.a61dce95.png&w=1080&q=75')";
    thirdSectionImageContainer.style.backgroundImage = thirdImage;
    thirdCardIcon.style.backgroundColor = "blue";
    firstCardIcon.style.backgroundColor = "rgb(197, 197, 197)";
    secondCardIcon.style.backgroundColor = "rgb(197, 197, 197)";
});

