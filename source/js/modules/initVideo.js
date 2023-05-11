const video = document.querySelector('[data-video]');
const link = document.querySelector('[data-video-link]');
const button = document.querySelector('[data-video-button]');
const iframeBlock = video.querySelector('[data-video-iframe]');
link.removeAttribute('href');
video.classList.add('about__video--enabled');

const createIframe = (block) => {
  const iframe = document.createElement('iframe');

  iframe.setAttribute('allowfullscreen', '');
  iframe.setAttribute('src', block.dataset.src);

  return iframe;
};

button.addEventListener('click', () => {
  if (button) {
    if (video && iframeBlock) {
      button.remove();
      link.remove();
      const newIframe = createIframe(iframeBlock);
      iframeBlock.append(newIframe);
    }
  }
});
