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
  newTagPOrganization.className = "other_organization_name";

  if (other.other_link) {
    const newTagA = document.createElement("a");
    newTagA.href = other.other_link;
    newTagA.target = "_blank";
    newTagA.innerText = other.other_name;
    newTagArticle.appendChild(newTagA);
    newTagA.className = "other_link_name";
  } else {
    const newTagPName = document.createElement("p");
    newTagPName.innerText = other.other_name;
    newTagArticle.appendChild(newTagPName);
    newTagPName.className = "other_name";
  }

  const newTagPDate = document.createElement("p");
  newTagPDate.innerText = "Aconteceu em: " + other.other_date;
  newTagArticle.appendChild(newTagPDate);
  newTagPDate.className = "other_date";

  const newTagPTags = document.createElement("p");
  newTagPTags.innerText = other.other_tags.join(" ");
  newTagArticle.appendChild(newTagPTags);
  newTagPTags.className = "other_tags";

  const currentTagSection = document.getElementById("other_cards");
  currentTagSection.appendChild(newTagDiv);
}
