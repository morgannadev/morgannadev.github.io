createOtherCards();

function createOtherCards() {
  fetch("talks.json")
    .then((res) => res.json())
    .then((res) => {
      res.map((talk) => {
        createCard(talk);
      });
    });
}

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

  const newTagPdate = document.createElement("p");
  newTagArticle.appendChild(newTagPdate);
  newTagPdate.innerText = "Apresentada em: " + talk.talk_date;

  const newTagPtags = document.createElement("p");
  newTagArticle.appendChild(newTagPtags);
  newTagPtags.innerText = talk.talk_tags;

  const currentTagSection = document.getElementById("talks_cards");
  currentTagSection.appendChild(newTagDiv);
}
