/* Event listener to scroll to the top of the page when the user clicks on the scroll up button */
document.addEventListener("DOMContentLoaded", () => {
  const btn = document.querySelector(".scroll-up");
  if (btn) { /* Checks if the button exists on that webpage before adding listener */
      btn.addEventListener("click", () => {
          document.documentElement.scrollTo({
              top: 0,
              behavior: "smooth",
          });
      });
  }
});

/* https://stackoverflow.com/questions/15653145/using-google-text-to-speech-in-javascript 
function to read/speak the message */
function say(m) {
  let msg = new SpeechSynthesisUtterance(m);
  speechSynthesis.speak(msg);
}

/* Sets the scores to 0, initializes the scores */
let wins = 0;
let losses = 0;
let ties = 0;

/* Function to dynamically update the scoreboard */
function updateScoreboard() {
  const winsElement = document.getElementById('wins');
  const lossesElement = document.getElementById('losses');
  const tiesElement = document.getElementById('ties');
  
  if (winsElement) winsElement.textContent = wins;
  if (lossesElement) lossesElement.textContent = losses;
  if (tiesElement) tiesElement.textContent = ties;
}

/* Rock Paper Scissors game with random computer choices */
function play(user) {
  const choices = ["rock", "paper", "scissors"];
  const computerChoice = choices[Math.floor(Math.random() * choices.length)]; /*computer randomly selects their choice */

  let result;     /* defines the result variable */
  if (user === computerChoice) { /* conditional statements to define different results for different actions */
      result = "tie";
      ties++;
  } else if (
      (user === "rock" && computerChoice === "scissors") || 
      (user === "paper" && computerChoice === "rock") ||
      (user === "scissors" && computerChoice === "paper")
  ) {
      result = "win";
      wins++;
      launchConfetti(); /* calling function to launch confetti when user wins */
  } else {
      result = "lose";
      losses++;
  }
  let myMessage = "Computer chose " + computerChoice + ", you " + result + "!"; /* defines message to be sent to the user of the game result */
  alert(myMessage); /* calls function to send/alert the user of the message */
  say(myMessage); /*calls the say function to read the message */

  updateScoreboard(); /*calls function to update the scoreboard with real-time results, showing the current number of wins, losses and ties */
}

/* Function to reset the game scores */
function resetGame() {
  wins = 0;
  losses = 0;
  ties = 0;
  updateScoreboard(); /* calls function to update the scoreboard with the reset game function values, resetting the scores to 0 */
}

function launchConfetti() {  /*function to launch confetti */
  const container = document.getElementById('confetti-container');
  if (!container) return; /* checks if confetti-container element in on the webpage */

  const colors = ['#f94144', '#f3722c', '#f8961e', '#f9c74f', '#90be6d', '#43aa8b', '#577590'];

  for (let i = 0; i < 100; i++) {
      const confetti = document.createElement('div');
      confetti.classList.add('confetti');
      confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
      confetti.style.left = Math.random() * 100 + 'vw';
      confetti.style.top = Math.random() * -20 + 'vh';
      confetti.style.width = Math.random() * 8 + 4 + 'px';
      confetti.style.height = confetti.style.width;

      container.appendChild(confetti);
      setTimeout(() => {
          confetti.remove();
      }, 4000); 
  }
}

/* Flatland */
function showGreetingThenBuzz(wordsElement) {
  /* shows greeting */
  wordsElement.innerHTML = "Welcome to Flatland.<br>I am Square.";
  /*greeting disappears after a short time and the buzzword generator is set up after */
  setTimeout(() => {
    wordsElement.innerHTML = '';
    /* each time the user clicks on the square, a new buzzword phrase is shown */
    const square = document.getElementById('square');
    if (square) {
      square.addEventListener('click', () => {
        const phrase = createBuzzwordPhrase();
        wordsElement.innerHTML = phrase;
      });
    }
  }, 2000); /*2s - duration of greeting being displayed on screen */
}

/* individual functions called in step 3 flatland, defined in html */
function makeRed() {
  const square = document.getElementById("square");
  square.style.backgroundColor = 'red';
}
function makeGreen() {
  const square = document.getElementById("square");
  square.style.backgroundColor = 'green';
}
function makeGray() {
  const square = document.getElementById("square");
  square.style.backgroundColor = 'gray';
}
/* parameterised function used in step 4, to change square's color when given a value/color */ 
function changeColor(color) {
  const square = document.getElementById("square");
  square.style.backgroundColor = color;
}
/*sets interactivity through addeventlistener, used in step 5, replacing inline event attributes */
document.addEventListener("DOMContentLoaded", () => {
  const square = document.getElementById("square");
  if (square) {
    square.addEventListener('dblclick', () => changeColor('red'));
    square.addEventListener('mouseover', () => changeColor('green'));
    square.addEventListener('mouseout', () => changeColor('gray'));
    square.addEventListener('click', () => changeColor('#8174FA'));
  }
});

/*function changeColor is defined */
function changecolor(color) {
    square.style.backgroundColor = color;
}
/* updates DOM content dynamically, delaying javascript until styles load */
window.onload = function () {
  const page = window.location.pathname;
  const square = document.getElementById('square');
  const words = document.getElementById('words');

  if (square && words) {
    if ( /*conditional statements to ensure that buzzword generator only works for flatland8 and week4 */
      page.includes("/flatland/flatland8.html") || page.includes("week4.html")) {
      showGreetingThenBuzz(words); 
    } else if (page.includes("/flatland/flatland6.html") || page.includes("/flatland/flatland7.html")) {
      /* for flatland 6 and 7 only the greeting is displayed */
      words.innerHTML = "Welcome to Flatland.<br>I am Square.";
    }

    /* color event listeners for interaction with square shape - changing colors depending on actions */
    if (
      page.includes("/flatland/flatland6.html") || page.includes("/flatland/flatland7.html") || page.includes("/flatland/flatland8.html") || page.includes("week4.html")) 
      {
      square.addEventListener('dblclick', () => changeColor('red'));
      square.addEventListener('mouseover', () => changeColor('green'));
      square.addEventListener('mouseout', () => changeColor('gray'));
      square.addEventListener('click', () => changeColor('#8174FA'));
    }
  }
};
/* randomly generates a buzzword phrase */
function createBuzzwordPhrase() {
  /* See https://en.wikipedia.org/wiki/List_of_buzzwords */
  let buzz = ["Paradigm-changing", "Multi-tier", "10,000-foot", "Agile", "Customer", "Win-win"];
  let action = ["empowered", "value-added", "synergy", "creative", "oriented", "focused", "aligned"];
  let outcome = ["process", "deliverable", "solution", "tipping-point", "strategy", "vision"];

  let idx_buz = Math.floor(Math.random() * buzz.length);
  let idx_act = Math.floor(Math.random() * action.length);
  let idx_out = Math.floor(Math.random() * outcome.length);

  return buzz[idx_buz] + " " + action[idx_act] + " " + outcome[idx_out];
}
/* RSS Reader */
/* Cache to store previously fetched feeds */
const feedCache = {};

/* All configurations */
const config = {
apiEndpoint: 'https://api.rss2json.com/v1/api.json',
cacheExpiry: 5 * 60 * 1000, 
maxRetries: 2,
retryDelay: 1000 /* retry in 1 second */
};

/*function to load content from feed */
function loadFeed(feedUrl, retryCount = 0) {
  const contentDiv = document.getElementById('content');
  const feedSelector = document.getElementById('feed-selector');
  
  if (!contentDiv || !feedSelector) return; /* check for element */
  
  /* Show loading state */
  contentDiv.innerHTML = '<p>Loading feed...</p>';
  feedSelector.disabled = true;
  
  /* Checks cache first */
  if (feedCache[feedUrl] && (Date.now() - feedCache[feedUrl].timestamp) < config.cacheExpiry) {
    displayArticles(feedCache[feedUrl].data);
    feedSelector.disabled = false;
    return;
  }
  
  /* Constructs API URL */
  const apiUrl = `${config.apiEndpoint}?rss_url=${encodeURIComponent(feedUrl)}`;

  fetch(apiUrl) /* fetches RSS feed data from API, then parsed and analysed into JSON data */
    .then(response => {
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.json();
    })
    .then(data => {
      feedCache[feedUrl] = {
        data: data.items,
        timestamp: Date.now()
      };
      
      /* Displays the articles */
      displayArticles(data.items);
    })
    .catch(error => {
      console.error('Error fetching the feed:', error);
      
      if (retryCount < config.maxRetries) {  /* condition statements to retry connection */
        contentDiv.innerHTML = `<p>Connection issue. Retrying (${retryCount + 1}/${config.maxRetries})...</p>`;
        setTimeout(() => loadFeed(feedUrl, retryCount + 1), config.retryDelay);
      } else {
         /* defines and shows error message based on error type determined through conditional statements */
        let errorMessage = 'Unable to load the feed. Please try again later.';
        
        if (error.message.includes('HTTP error')) {
          errorMessage = 'The feed server returned an error. Please try a different feed or try again later.';
        } else if (error.message.includes('NetworkError')) {
          errorMessage = 'Network connection issue. Please check your internet connection.';
        }
        
        contentDiv.innerHTML = `<p class="error">${errorMessage}</p>`;
      }
    })
    .finally(() => {
      feedSelector.disabled = false;
    });
}

/* function to display the articles */
function displayArticles(articles) {
const contentDiv = document.getElementById('content');
if (!contentDiv) return;

contentDiv.innerHTML = ''; 
  
if (!articles || articles.length === 0) { /* condition statement to check if there are no articles in feed, then send message */
  contentDiv.innerHTML = '<p>No articles found in this feed.</p>';
  return;
}
  
/* Creates a container for all of the articles */
const articlesContainer = document.createElement('div');
articlesContainer.className = 'articles-container';

/* Creates article element */
articles.forEach(article => {
  const articleEl = document.createElement('article');
  articleEl.className = 'feed-article';
  
  /* Formats publication date - if available */
  const pubDate = article.pubDate ? new Date(article.pubDate) : null;
  const dateString = pubDate ? pubDate.toLocaleDateString() : 'Unknown date';
  
  /* Gets a description, if no content, uses string */
  const description = article.description || article.content || 'No description available';
  
  /* Creates article HTML structure - title, additional data like date and author, and link to read full article */
  articleEl.innerHTML = `
    <h3 class="article-title">
      <a href="${article.link}" target="_blank" rel="noopener noreferrer">${article.title}</a>
    </h3>
    <div class="article-meta">
      <span class="article-date">${dateString}</span>
      ${article.author ? `<span class="article-author">by ${article.author}</span>` : ''}
    </div>
    <div class="article-summary">${description}</div> 
    <a href="${article.link}" class="read-more" target="_blank" rel="noopener noreferrer">Read full article</a>
  `;
  
  articlesContainer.appendChild(articleEl);
});

contentDiv.appendChild(articlesContainer);
}

/* Initializes RSS feed reader application */
function initFeedReader() {
const feedSelector = document.getElementById('feed-selector');

if (!feedSelector) {
  console.log('Feed selector not found in this page'); // Changed to log, not error
  return;
}

/* Event listener for feed selector - activates each time a different feed option is selected/changed to */
feedSelector.addEventListener('change', function() {
  loadFeed(this.value);
});

/* Loads the default feed from the html order*/
loadFeed(feedSelector.value);
}

document.addEventListener("DOMContentLoaded", function() {
  // RSS reader check
  if (document.getElementById("feed-selector")) {
    initFeedReader();
  }
});
