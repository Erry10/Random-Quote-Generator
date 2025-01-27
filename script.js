// List of quotes with their respective authors
const quotes = [
    { text: "Be the change that you wish to see in the world." , author: " Mahatma Gandhi" },
    { text: "It always seems impossible until it’s done.", author: "JNelson Mandela" },
    { text: "In the middle of difficulty lies opportunity.", author: "Albert Einstein" },
    { text: "No one can make you feel inferior without your consent.", author: "Eleanor Roosevelt" },
    { text: "Success is not final, failure is not fatal: It is the courage to continue that counts.", author: "Winston Churchill" }
];

  // Variables to keep track of the last displayed quote index
let lastQuoteIndex = -1;

  // Function to get a random quote
function getRandomQuote() {
    let randomIndex;
    
    // Ensure that the same quote isn't repeated consecutively
    do {
      randomIndex = Math.floor(Math.random() * quotes.length);
    } while (randomIndex === lastQuoteIndex);
    
    lastQuoteIndex = randomIndex;

    return quotes[randomIndex];
}

  // Function to display the quote
function displayQuote() {
    const randomQuote = getRandomQuote();
    document.getElementById("quote-text").textContent = `"${randomQuote.text}"`;
    document.getElementById("author-text").textContent = `- ${randomQuote.author}`;
}

  // Function to copy the quote to the clipboard
function copyQuoteToClipboard() {
    const quoteText = document.getElementById("quote-text").textContent;
    const authorText = document.getElementById("author-text").textContent;
    const fullQuote = `${quoteText}\n${authorText}`;

    // Create a temporary text area to copy the text
    const textArea = document.createElement("textarea");
    textArea.value = fullQuote;
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand("copy");
    document.body.removeChild(textArea);

    // Display the "Thank you" message
    const thankYouMessage = document.getElementById("thank-you-msg");
    thankYouMessage.style.display = "block";

    // Hide the "Thank you" message after 2 seconds
    setTimeout(() => {
    thankYouMessage.style.display = "none";
    }, 2000);
}

  // Event listener for the "Get New Quote" button
document.getElementById("new-quote-btn").addEventListener("click", displayQuote);

  // Event listener for the "Copy Quote" button
document.getElementById("copy-quote-btn").addEventListener("click", copyQuoteToClipboard);

  // Initial quote display
displayQuote();
