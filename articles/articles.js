createArticleCards()

function createArticleCards() {   
  
  fetch('articles.json')
  .then(res => res.json())
  .then((res) => {
    res.map(article => {
        console.log(article.article_name);
        const cardsContainer = document.getElementById("articles_cards");
        console.log(cardsContainer);

        createCard();
    });
  })
  
};

function createCard() {
  // create a new div element
  const newDiv = document.createElement("div");

  // and give it some content
  const newContent = document.createTextNode("Hi there and greetings!");

  // add the text node to the newly created div
  newDiv.appendChild(newContent);

  // add the newly created element and its content into the DOM
  const currentDiv = document.getElementById("articles_cards");
  document.body.insertBefore(newDiv, currentDiv);
}