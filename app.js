const apiKey = 'ce8c46a0fb4e443b92a3f4e2fe584949';
window.addEventListener('load', e => {
  updateNews();
  console.log('works');
});
async function updateNews(params) {
  const response = await fetch(
    `https://newsapi.org/v2/sources?apiKey=${apiKey}`
  );
  const json = await response.json;
}
