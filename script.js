// script.js

function dogLover() {
    return confirm("Do you love dogs? and want to meet Lacy?");
}

window.onload = function() {
    if (!dogLover()) {
        window.location.href = "https://en.wikipedia.org/wiki/Dog#:~:text=Dogs%20perform%20many%20roles%20for,friend%22%20in%20the%20Western%20world.";
    }
}

const jkButton = document.getElementById("jkButton");
const jkContainer = document.getElementById("jkContainer");

const jokes = 
    [
        "What looks like a dog, eats dog food, lives in a doghouse, and is very dangerous?, A dog with a machete.",
        "What's a dog's favorite instrument? The trombone, because they like the 'bone'!",
        "Why did the dog go to school? To improve his 'bark'ing skills!",
        "Why do dogs like conjunctions? They just love buts",
        "How did the little Scottish dog react when he met the Loch Ness Monster, He was *Terrier-fied*",
        "Why was the dog stealing Shingles? He wanted to become a *woofer*",
    ];
      

jkButton.addEventListener("click", () => {
    const randomIndex = Math.floor(Math.random() * jokes.length);
    const joke = jokes[randomIndex];
    jkContainer.textContent = joke;
});

const dog = document.getElementById('dog');
let positionX = 0;

document.addEventListener('keydown', (event) =>
 {
    if (event.key === 'ArrowRight') 
    {
        positionX += 10;
        dog.style.left = `${positionX}px`;
    } else if (event.key === 'ArrowLeft') 
    {
        positionX -= 10;
        dog.style.left = `${positionX}px`;  
    }
});

