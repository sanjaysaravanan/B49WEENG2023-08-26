
var xhr = new XMLHttpRequest();

xhr.open('GET', 'https://api.disneyapi.dev/character');

xhr.send();

const createCharacter = function (character) {
  const imgElement = document.createElement('img');

  imgElement.setAttribute('src', character.imageUrl);
  imgElement.setAttribute('alt', character.name);
  imgElement.setAttribute('title', character.name);

  imgElement.style.margin = '8px';

  document.body.appendChild(imgElement);
}

xhr.onload = function () {
  const { data } = JSON.parse(xhr.responseText);

  data.forEach((charater) => {
    createCharacter(charater);
  })

}