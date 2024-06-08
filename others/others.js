createOtherCards();

function createOtherCards() {
  fetch("others.json")
    .then((res) => res.json())
    .then((res) => {
      res.map((other) => {
        createCard(other);
      });
    });
}

function createCard(other) {
  const newTagDiv = document.createElement("div");
  newTagDiv.className = "card_other";

  const newTagFigure = document.createElement("figure");
  newTagDiv.appendChild(newTagFigure);

  const newTagImage = document.createElement("img");
  newTagFigure.appendChild(newTagImage);
  newTagImage.src = other.other_image;
  newTagImage.alt = other.other_image_alt;

  const newTagArticle = document.createElement("article");
  newTagDiv.appendChild(newTagArticle);

  const newTagPOrganization = document.createElement("p");
  newTagPOrganization.innerText = other.other_organization;
  newTagArticle.appendChild(newTagPOrganization);

  if (other.other_link) {
    const newTagA = document.createElement("a");
    newTagA.href = other.other_link;
    newTagA.target = "_blank";
    newTagA.innerText = other.other_name;
    newTagArticle.appendChild(newTagA);
  } else {
    const newTagPName = document.createElement("p");
    newTagPName.innerText = other.other_name;
    newTagArticle.appendChild(newTagPName);
  }

  const newTagPDate = document.createElement("p");
  newTagPDate.innerText = "Aconteceu em: " + other.other_date;
  newTagArticle.appendChild(newTagPDate);

  const newTagPTags = document.createElement("p");
  newTagPTags.innerText = other.other_tags.join(" ");
  newTagArticle.appendChild(newTagPTags);

  const currentTagSection = document.getElementById("other_cards");
  currentTagSection.appendChild(newTagDiv);
}
