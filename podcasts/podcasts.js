createPodcastCards();

function createPodcastCards() {
  fetch("podcasts.json")
    .then((res) => res.json())
    .then((res) => {
      res.map((podcast) => {
        createCard(podcast);
      });
    });
}

function createCard(podcast) {
  const newTagDiv = document.createElement("div");
  newTagDiv.className = "card_podcast";

  const newTagFigure = document.createElement("figure");
  newTagDiv.appendChild(newTagFigure);

  const newTagImage = document.createElement("img");
  newTagFigure.appendChild(newTagImage);
  newTagImage.src = podcast.podcast_image;
  newTagImage.alt = podcast.podcast_image_description;

  const newTagArticle = document.createElement("article");
  newTagDiv.appendChild(newTagArticle);

  const newTagDivPodcastNameAndVideo = document.createElement("div");
  newTagArticle.appendChild(newTagDivPodcastNameAndVideo);
  newTagDivPodcastNameAndVideo.className = "podcast_video";

  const newTagPevent = document.createElement("p");
  newTagDivPodcastNameAndVideo.appendChild(newTagPevent);
  newTagPevent.innerText = podcast.podcast_name;

  if (podcast.podcast_video_link) {
    const newTagAvideo = document.createElement("a");
    newTagDivPodcastNameAndVideo.appendChild(newTagAvideo);
    newTagAvideo.href = podcast.podcast_video_link;
    newTagAvideo.target = "_blank";

    const newTagImgIconVideo = document.createElement("img");
    newTagAvideo.appendChild(newTagImgIconVideo);
    newTagImgIconVideo.src = "/images/icons/video.svg";
  }

  const newTagAEpisodeAndLink = document.createElement("a");
  newTagArticle.appendChild(newTagAEpisodeAndLink);
  newTagAEpisodeAndLink.href = podcast.podcast_episode_link;
  newTagAEpisodeAndLink.target = "_blank";
  newTagAEpisodeAndLink.innerText = podcast.podcast_episode_name;

  const newTagPdate = document.createElement("p");
  newTagArticle.appendChild(newTagPdate);
  newTagPdate.innerText = "Postado em: " + podcast.podcast_date;

  const newTagPtags = document.createElement("p");
  newTagArticle.appendChild(newTagPtags);
  newTagPtags.innerText = podcast.podcast_tags.join(" ");

  const currentTagSection = document.getElementById("podcasts_cards");
  currentTagSection.appendChild(newTagDiv);
}
