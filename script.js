document.addEventListener("DOMContentLoaded", function() {
    const jkButton = document.getElementById("jkButton");
    const jkContainer = document.getElementById("jkContainer");
    const dog = document.getElementById('dog');
    let positionX = 0;
    const repeatButton = document.getElementById("repeatButton");
    const imageUrl = "lacy_face.jpg";

    repeatButton.addEventListener("click", function() {
        const repeatCount = askNumber("How many times do you want to repeat the image?");
        repeatImage(imageUrl, repeatCount);
    });

    const jokes = [
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

    document.addEventListener('keydown', (event) => {
        console.log("Key pressed:", event.key);
        if (event.key === 'ArrowRight') {
            positionX += 10;
        } else if (event.key === 'ArrowLeft') {
            positionX -= 10;
        }
        console.log("New positionX:", positionX);
        dog.style.left = `${positionX}px`;
    });

    function greeting() {
        let userName = prompt("What is your name?");
        
        if (userName !== null && userName !== "") {
            const greetingContainer = document.getElementById("greetingContainer");
            greetingContainer.textContent = "Hello " + userName + ", welcome to Lacy's World!";
        } else {
            console.log("There was no input, try again");
            userName = prompt("What is your name?");
            greeting();
        }
    }

    function dogLover() {
        return confirm("Do you love dogs? and want to meet Lacy?");
    }

    if (!dogLover()) {
        window.location.href = "https://en.wikipedia.org/wiki/Dog#:~:text=Dogs%20perform%20many%20roles%20for,friend%22%20in%20the%20Western%20world.";
    } else {
        greeting();
    }
    
    function askNumber(promptMessage) {
        const userInput = prompt(promptMessage);
        const parsedNumber = parseInt(userInput);
        return isNaN(parsedNumber) ? 0 : parsedNumber;
    }
    
    function repeatImage(imageUrl, repeatCount) {
        const mainDiv = document.querySelector(".image-repeater");
    
        for (let i = 0; i < repeatCount; i++) {
            const img = document.createElement("img");
            img.src = imageUrl;
            img.alt = "Dog";
            mainDiv.appendChild(img);
        }
    }
});
