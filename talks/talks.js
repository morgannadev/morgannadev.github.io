let talks = [];

function createTalkCards() {
  fetch("talks.json")
    .then((res) => res.json())
    .then((res) => (talks = res))
    .then((res) => {
      res.map((talk) => {
        createCard(talk);
      });
    });
}

createTalkCards();

function createCard(talk) {
  const newTagDiv = document.createElement("div");
  newTagDiv.className = "card_talk";

  const newTagFigure = document.createElement("figure");
  newTagDiv.appendChild(newTagFigure);

  const newTagImage = document.createElement("img");
  newTagFigure.appendChild(newTagImage);
  newTagImage.src = talk.talk_image;
  newTagImage.alt = talk.talk_image_description;

  const newTagArticle = document.createElement("article");
  newTagDiv.appendChild(newTagArticle);

  const newTagDivEventVideo = document.createElement("div");
  newTagArticle.appendChild(newTagDivEventVideo);
  newTagDivEventVideo.className = "event_video";

  const newTagPevent = document.createElement("p");
  newTagDivEventVideo.appendChild(newTagPevent);
  newTagPevent.innerText = talk.talk_event;
  newTagPevent.className = "talk_event_name";

  if (talk.talk_video_link) {
    const newTagAvideo = document.createElement("a");
    newTagDivEventVideo.appendChild(newTagAvideo);
    newTagAvideo.href = talk.talk_video_link;
    newTagAvideo.target = "_blank";

    const newTagImgIconVideo = document.createElement("img");
    newTagAvideo.appendChild(newTagImgIconVideo);
    newTagImgIconVideo.src = "/images/icons/video.svg";
  }

  const newTagASlidesAndTalkName = document.createElement("a");
  newTagArticle.appendChild(newTagASlidesAndTalkName);
  newTagASlidesAndTalkName.href = talk.talk_slides_link;
  newTagASlidesAndTalkName.target = "_blank";
  newTagASlidesAndTalkName.innerText = talk.talk_name;
  newTagASlidesAndTalkName.className = "talk_name_link";

  const newTagPdate = document.createElement("p");
  newTagArticle.appendChild(newTagPdate);
  newTagPdate.innerText = "Apresentação em: " + talk.talk_date;
  newTagPdate.className = "talk_date";

  const newTagPtags = document.createElement("p");
  newTagArticle.appendChild(newTagPtags);
  newTagPtags.innerText = talk.talk_tags.join(" ");
  newTagPtags.className = "talk_tags";

  const currentTagSection = document.getElementById("talks_cards");
  currentTagSection.appendChild(newTagDiv);
}

const inputTalk = document.getElementById("filter_talk");
const sectionTalk = document.getElementById("talks_cards");

function showFilteredTalks(list) {
  sectionTalk.innerHTML = "";

  if (list.length === 0) {
    sectionTalk.innerHTML = "<p>Nenhuma palestra encontrada.</p>";
    return;
  }

  list.forEach((talk) => {
    createCard(talk);
  });
}

function filterTalks() {
  const word = inputTalk.value.toLowerCase();
  const filteredTalks = talks.filter((talk) =>
    talk.talk_tags.some((tag) => tag.toLowerCase().includes(word))
  );

  showFilteredTalks(filteredTalks);
}

inputTalk.addEventListener("input", filterTalks);
