createArticleCards();

function createArticleCards() {
  fetch("articles.json")
    .then((res) => res.json())
    .then((res) => {
      res.map((article) => {
        createCard(article);
      });
    });
}

function createCard(article) {
  const newTagDiv = document.createElement("div");
  newTagDiv.className = "card_article";

  const newTagFigure = document.createElement("figure");
  newTagDiv.appendChild(newTagFigure);

  const newTagImage = document.createElement("img");
  newTagFigure.appendChild(newTagImage);
  newTagImage.src = article.article_image;
  newTagImage.alt = article.article_image_description;

  const newTagArticle = document.createElement("article");
  newTagDiv.appendChild(newTagArticle);

  const newTagPType = document.createElement("p");
  newTagArticle.appendChild(newTagPType);
  newTagPType.innerHTML = "POST";
  newTagPType.className = "text_post";

  const newTagA = document.createElement("a");
  newTagA.href = article.article_link;
  newTagA.target = "_blank";
  newTagA.innerText = article.article_name;
  newTagArticle.appendChild(newTagA);

  const newTagPDate = document.createElement("p");
  newTagArticle.appendChild(newTagPDate);
  newTagPDate.innerText = "publicação em: " + article.article_date;
  newTagPDate.className = "article_date";

  const newTagPtags = document.createElement("p");
  newTagArticle.appendChild(newTagPtags);
  newTagPtags.innerText = article.article_tags.join(" ");
  newTagPtags.className = "article_tags";

  const currentTagSection = document.getElementById("articles_cards");
  currentTagSection.appendChild(newTagDiv);
}
