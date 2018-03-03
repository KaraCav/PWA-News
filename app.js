const apiKey = 'ce8c46a0fb4e443b92a3f4e2fe584949';

const main = document.querySelector('main');
window.addEventListener('load', e => {
  updateNews();
  console.log('works');
});
async function updateNews() {
  const response = await fetch(
    `https://newsapi.org/v2/top-headlines?country=us&apiKey=ce8c46a0fb4e443b92a3f4e2fe584949`
  );

  const json = await response.json();

  main.innerHTML = json.articles.map(createArticle).join('\n');

  function createArticle(article) {
    return `
    <div class="article">
<h1>${article.title}</h1>
<div class="brief">
<p>${article.description}</p>
</div>
    </div>
    `;
  }
}
