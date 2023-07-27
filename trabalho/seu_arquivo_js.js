const quotes = [
    {
      quote: "A vida é o que acontece enquanto você está ocupado fazendo outros planos.",
      author: "John Lennon",
      image: "jo.jpg"
    },
    {
      quote: "Não é a força, mas a constância dos bons sentimentos que conduz os homens à felicidade.",
      author: "Friedrich Nietzsche",
      image: "Fi.jpg"
    },
    {
      quote: "O insucesso é apenas uma oportunidade para recomeçar com mais inteligência.",
      author: "Henry Ford",
      image: "he.jpg"
    },
    {
      quote: "tenho medo de pitbull",
      author: "Vitor Lima",
      image: "vi.jpg"
    },
    {
        quote: "Penso, logo existo.",
        author: "René Descartes",
        image: "Re.jpg"
      },
      {
        quote: "A única coisa que sei é que nada sei.",
        author: "Socrates",
        image: "So.jpg"
      },
  ];

  const quoteDisplay = document.getElementById('quoteDisplay');
  const newQuoteButton = document.getElementById('newQuoteButton');

  function generateRandomQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const randomQuote = quotes[randomIndex];
    const container = document.createElement("div");
    container.innerHTML = `
      <img src="${randomQuote.image}" alt="${randomQuote.author}">
      <p>"${randomQuote.quote}"</p>
      <span>-${randomQuote.author}</span>
    `;
    quoteDisplay.innerHTML = '';
    quoteDisplay.appendChild(container);
  }

  newQuoteButton.addEventListener('click', generateRandomQuote);

  // Display a random quote when the page loads
  generateRandomQuote();