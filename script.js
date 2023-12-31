const randomImageElement = document.getElementById('randomImage');
const images = [
    '<img src="images/chrome.svg" alt="Chrome">',
    '<img src="images/desktop.svg" alt="Desktop">',
    '<img src="images/imgmobile.svg" alt="Mobile">'
];
let currentIndex = 0;

function changeRandomImage() {
    randomImageElement.innerHTML = images[currentIndex];
    currentIndex = (currentIndex + 1) % images.length;
}

setInterval(changeRandomImage, 2000);

const countdownElement = document.getElementById('countdown');
const hoursElement = document.getElementById('hours');
const minutesElement = document.getElementById('minutes');
const secondsElement = document.getElementById('seconds');
const claimButton = document.getElementById('claimButton');
let countdownValue = 0; // Start countdown from 0

function updateCountdown() {
    const hours = Math.floor(countdownValue / 3600);
    const minutes = Math.floor((countdownValue % 3600) / 60);
    const seconds = countdownValue % 60;

    hoursElement.textContent = String(hours).padStart(2, '0');
    minutesElement.textContent = String(minutes).padStart(2, '0');
    secondsElement.textContent = String(seconds).padStart(2, '0');

    countdownValue++; // Increment the countdown value

    setTimeout(updateCountdown, 1000);
}

updateCountdown();

function claimTicket() {
    alert('Ticket claimed!');
    claimButton.innerHTML = 'Ticket Claimed';
    claimButton.disabled = true;
}
