document.addEventListener('DOMContentLoaded', () => {
  
  const quoteText = document.querySelector(".quote"),
  quoteBtn = document.getElementById("new-quote"),
  authorName = document.querySelector(".name"),
  sourceText = document.querySelector(".source"),
  copyBtn = document.querySelector(".copy"),
  twitterBtn = document.querySelector(".twitter");
  whatsappBtn = document.querySelector(".whatsapp");

  function decodeUTF8Text(encodedText) {
    const text = new TextDecoder("utf-8").decode(new Uint8Array([...encodedText].map(c => c.charCodeAt(0))));
    return text;
  }

  // Función principal para obtener citas
  async function fetchRandomQuote() {

    quoteBtn.classList.add("loading");
    quoteBtn.innerText = "Loading Quote...";
    
    try {

      let ramdomQuote = { 
          content: "",
          author: "",
          source: ""
      }

      /*const response = await fetch(`https://api.quotable.io/random`);
      const data = await response.json();
      ramdomQuote.content = data.content;
      ramdomQuote.author = data.author;
      ramdomQuote.source = "";*/

      const quotesArray = [generalQuotesES, computerQuotesES];

      const jsonData = quotesArray[Math.floor(Math.random() * quotesArray.length)];
      if (jsonData && jsonData.length > 0) {
          const randomIndex = Math.floor(Math.random() * jsonData.length);
          const randomQuoteObject = jsonData[randomIndex];

          ramdomQuote.content = `${decodeUTF8Text(randomQuoteObject.text)}`;
          ramdomQuote.author = `${decodeUTF8Text(randomQuoteObject.author)}` || 'Anónimo';
          ramdomQuote.source = randomQuoteObject.source ? `${decodeUTF8Text(randomQuoteObject.source)}` : "";
      }

      quoteText.innerText = `"${ramdomQuote.content}"`;
      authorName.innerText = `${ramdomQuote.author}`;
      sourceText.innerText = `${ramdomQuote.source}`;
      quoteBtn.classList.remove("loading");
      quoteBtn.innerText = "New Quote";
      
      //Salvar los datos
      chrome.storage.local.set({ 
        lastQuote: {
          content: ramdomQuote.content,
          author: ramdomQuote.author,
          source: ramdomQuote.source
        }
      });
      
    } catch (error) {
      console.error('New quote error:', error);
      //const errorMessage = chrome.i18n.getMessage('errorMessage');
      quoteText.textContent = error;
      authorName.textContent = "";
      quoteBtn.classList.remove("loading");
      quoteBtn.innerText = "New Quote";
    }
  }

  // Manejadores de eventos

  // Generate a new quote on button click
  quoteBtn.addEventListener('click', () => {
    fetchRandomQuote();
  });

  // Copy quote to clipboard
  copyBtn.addEventListener('click', () => {
    try {
      navigator.clipboard.writeText(encodeURIComponent(`"${quoteText.innerText}"`));
    } catch (error) {
      console.error('Copy error:', error);
    }
  });

  // Share quote on X
  twitterBtn.addEventListener('click', () => {
    try {
      let tweetText = encodeURIComponent(`"${quoteText.innerText}"`); 
      let tweetUrl = `https://twitter.com/intent/tweet?text=${tweetText}`;
      window.open(tweetUrl, "_blank");
    } catch (error) {
      console.error('Sharing error:', error);
    }
  });

  // Share quote on WhatsappBtn
  whatsappBtn.addEventListener('click', () => {
    try {
      let message = encodeURIComponent(`"${quoteText.innerText}"`); 
      let whatsappUrl = `https://web.whatsapp.com/send?text=${message}`;
      window.open(whatsappUrl, "_blank");
    } catch (error) {
      console.error('Sharing error:', error);
    }
  });

  chrome.storage.local.get('lastQuote', (result) => {
    if (result.lastQuote && result.lastQuote.content && result.lastQuote.author) {
        quoteText.innerText = `"${result.lastQuote.content}"`;
        authorName.innerText = `${result.lastQuote.author}`;
    } else {
      fetchRandomQuote();
    }
  });
  
});
