'use strict';
var hashStorage = {};
var AjaxHandlerScript = "http://fe.it-academy.by/AjaxStringStorage2.php";

window.onhashchange = stateRefresh;

function stateRefresh() {
  var hash = window.location.hash;
  var state = decodeURIComponent(hash.substr(1));
  if (state === '') {
    state = {
      page: 'main',
    }
  } else {
    state = JSON.parse(state);
  }
  var page = '';

  switch (state.page) {
    case 'main':
      getArticlesList();
      page += `<div class="container">
                <h1>Энциклопедия</h1>
                <a target="_self" onclick=switchToArticleList()>Список статей</a>
               </div>`;
      break;

    case 'articleList':
      getArticlesList();
      page += `<div class="container">`
        < h2 > Оглавление < /h2>`;
      writeList();
      page += `</div>`;
      break;

    case 'article':
      getArticlesList();
      page += `<div class="container">
              <h2>Название статьи</h2>`;
      writeArticle(); // ?????????
      page += `</div>`;
      break;
  }

  document.getElementById('page').innerHTML = page;

}

function writeList() {
  for (var key in StorageHash) {
    //вывод ключей(статей) на страницу;
  }
}

function writeArticle() {

}

function switchToState(state) {
  location.hash = encodeURIComponent(JSON.stringify(state));
}

function switchToArticleList() {
  switchToState({page: 'articleList'});
}

function switchToArticle(key) {
  switchToState({page: 'article', key: key});
}

stateRefresh();

function getArticlesList() {
  $.ajax(
    {
      url: AjaxHandlerScript,
      type: "POST",
      dataType: 'json',
      cache: false,
      data: {f: "READ", n: "Mikhnavets_Nataliya_Hometask"},
      success: LoadData,
      error: ErrorHandler
    }
  );

  function LoadData(data) {
    if (data !== '') {
      hashStorage = JSON.parse(data.result);
      console.log(data.result);
    } else if (data === '') {
      $.ajax(
        {
          url: AjaxHandlerScript,
          type: "POST",
          dataType: 'json',
          cache: false,
          data: {f: "INSERT", n: "Mikhnavets_Nataliya_Hometask", v: JSON.stringify(hashStorage)},
          success: InsertData,
          error: ErrorHandler
        }
      );

      function InsertData(data) {
        console.log(data.result);
      }
    }
  }

  function ErrorHandler(jqXHR, StatusStr, ErrorStr) {
    console.log(StatusStr + ' ' + ErrorStr);
  }
}
