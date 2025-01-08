let articles = [];
let filteredArticles = []; // Array para armazenar artigos filtrados
const articlesPerPage = 8;
let currentPage = 1;

const inputArticle = document.getElementById("filter_article");
const sectionArticle = document.getElementById("articles_cards");

function createArticleCards(page = 1) {
  fetch("articles.json")
    .then((res) => res.json())
    .then((res) => (articles = res))
    .then((res) => {
      renderPage(page, articles);
      renderPagination(articles);
    });
}

function renderPage(page, articlesList) {
  sectionArticle.innerHTML = "";
  const startIndex = (page - 1) * articlesPerPage;
  const endIndex = startIndex + articlesPerPage;
  const paginatedArticles = articlesList.slice(startIndex, endIndex);

  if (paginatedArticles.length === 0) {
    sectionArticle.innerHTML = "<p>Nenhum artigo encontrado.</p>";
    return;
  }

  paginatedArticles.forEach((article) => {
    createCard(article);
  });
}

function renderPagination(articlesList) {
  const totalPages = Math.ceil(articlesList.length / articlesPerPage);
  let paginationContainer = document.getElementById("pagination");

  if (totalPages <= 1) {
    if (paginationContainer) {
      paginationContainer.remove();
    }
    return;
  }

  if (!paginationContainer) {
    paginationContainer = document.createElement("div");
    paginationContainer.classList.add("pagination_container");
    paginationContainer.id = "pagination";
    const main = document.querySelector("main");
    main.appendChild(paginationContainer);
  }
  paginationContainer.innerHTML = "";

  for (let i = 1; i <= totalPages; i++) {
    const pageButton = document.createElement("button");
    pageButton.textContent = i;
    pageButton.classList.add("pagination_button");

    if (i === currentPage) {
      pageButton.classList.add("active");
    }

    pageButton.addEventListener("click", () => {
      currentPage = i;
      renderPage(
        currentPage,
        filteredArticles.length > 0 ? filteredArticles : articles
      );
      renderPagination(
        filteredArticles.length > 0 ? filteredArticles : articles
      );

      window.scrollTo({ top: 0, behavior: "smooth" });
    });
    paginationContainer.appendChild(pageButton);
  }
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

function filterArticles() {
  const word = inputArticle.value.toLowerCase();
  filteredArticles = articles.filter((article) =>
    article.article_tags.some((tag) => tag.toLowerCase().includes(word))
  );

  renderPage(1, filteredArticles);
  renderPagination(filteredArticles);
}

inputArticle.addEventListener("input", filterArticles);

createArticleCards();
