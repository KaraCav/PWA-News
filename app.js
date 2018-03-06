const apiKey = 'ce8c46a0fb4e443b92a3f4e2fe584949';
const sourceSelector = document.querySelector('#sourceSelector');
const main = document.querySelector('main');
const defaultSource = 'the-washington-post';
window.addEventListener('load', async e => {
  updateNews();
  updateSources();
  console.log('works');
  sourceSelector.value = defaultSource;
  sourceSelector.addEventListener('change', e => {
    updateNews(e.target.value);
  });
});
async function updateSources() {
  const response = await fetch(
    `https://newsapi.org/v2/sources?country=us&apiKey=ce8c46a0fb4e443b92a3f4e2fe584949`
  );
  const json = await response.json();
  sourceSelector.innerHTML = json.sources.map(listSources).join('\n');

  function listSources(source) {
    return `<option value="${source.id}">${source.name}</option>`;
  }
}

async function updateNews(source = defaultSource) {
  const response = await fetch(
    `https://newsapi.org/v2/top-headlines?sources=${source}&apiKey=ce8c46a0fb4e443b92a3f4e2fe584949`
  );

  const json = await response.json();
  main.innerHTML = json.articles.map(createArticle).join('\n');

  function createArticle(article) {
    return `
    <div class="article">
        <div class="articleTitle">
            <h1>${article.title}</h1>
        </div>
        <div class="brief">
            <img class="articleImg" src='${article.urlToImage}'>

            <h2 class="articleDesc">${article.description}</h2>
        </div>
      <h3>Full story <a href="${article.url}">HERE</a></h3>
 </div>
    `;
  }
}
