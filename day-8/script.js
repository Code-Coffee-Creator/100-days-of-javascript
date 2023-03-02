const gLink = document.getElementById('glink');
const btn = document.getElementById('btn');
const downloadLink = document.getElementById('download-link');
const embedAudio = document.getElementById('embed-audio');
const embedVideo = document.getElementById('embed-video');
const clear = document.querySelector('.clear');

btn.addEventListener('click', generateLink);

function generateLink(e) {
  e.preventDefault();

  const gLinkValue = document.getElementById('glink').value;
  const confirmLink = gLink.value.includes('https://drive.google.com/file/d');
}
