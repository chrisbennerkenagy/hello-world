
const jkButton = document.getElementById("jkButton");
const jkContainer = document.getElementById("jkContainer");

const jokes = [
  "What looks like a dog, eats dog food, lives in a doghouse, and is very dangerous?, A dog with a machete.",
  "What's a dog's favorite instrument? The trombone, because they like the 'bone'!",
  "Why did the dog go to school? To improve his 'bark'ing skills!",
  "Why do dogs like conjunctions? They just love buts",
  "How did the little Scottish dog react when he met the Loch Ness Monster, He was *Terrier-fied*",
  "Why was the dog stealing Shingles? He wanted to become a *woofer*",
];


jkButton.addEventListener("click", () => 
{
  const randomIndex = Math.floor(Math.random() * jokes.length);
  const joke = jokes[randomIndex];
  jkContainer.textContent = joke;
});
