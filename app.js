const apiKey = 'ce8c46a0fb4e443b92a3f4e2fe584949';
const sourceSelector = document.querySelector('#sourceSelector');
const main = document.querySelector('main');
window.addEventListener('load', e => {
  updateNews();
  updateSources();
  console.log('works');
});
async function updateSources() {
  const response = await fetch(
    `https://newsapi.org/v2/sources?country=us&apiKey=ce8c46a0fb4e443b92a3f4e2fe584949`
  );
  const json = await response.json();
  console.log(json.sources);
  sourceSelector.innerHTML = json.sources.map(listSources).join('\n');

  function listSources(source) {
    return;
    `<option value="${source.id}">${source.name}</option>`;
  }
}

async function updateNews() {
  const response = await fetch(
    `https://newsapi.org/v2/top-headlines?country=us&apiKey=ce8c46a0fb4e443b92a3f4e2fe584949`
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
