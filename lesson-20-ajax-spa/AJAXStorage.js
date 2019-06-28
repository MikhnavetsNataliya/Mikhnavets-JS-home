//'use strict';

var AjaxHandlerScript = "http://fe.it-academy.by/AjaxStringStorage2.php";

function AJAXStorage() {
  self = this;
  self.hashStorage = {};
  var updatePassword;

  $ajax(
    {
      url: AjzaHandlerScript,
      type: 'POST',
      dataType: 'json',
      data: {f: 'READ', n: 'Mikhnavets_Nataliya_Hometask'},
      cache: false,
      success: DataLoadedRead,
      error: ErrorHandler
    }
  );

  function DataLoadedRead(data) {
    if (data !== '') {
      self.hashStorage = JSON.parse(data.result);
      console.log(data.result);
    } else if (data === '') {
      $ajax(
        {
          url: AjaxHandlerScript,
          type: 'POST',
          dataType: 'json',
          data: {f: 'INSERT', n: 'Mikhnavets_Nataliya_Hometask', v: JSON.stringify(self.hashStorage)},
          cache: false,
          success: DataLoadedInsert,
          error: ErrorHandler
        }
      );

      function DataLoadedInsert(data) {
        console.log(data.result);
      }
    }
  }

  self.addValue = function (key, value) {
    self.hashStorage[key] = value;
    addValueToServer(self.hashStorage);
  };

  self.getValue = function (key) {
    if (key in self.hashStorage) {
      return self.hashStorage[key];
    }
  };

  self.deleteValue = function (key) {
    if (key in self.hashStorage) {
      delete self.hashStorage[key];
      addValueToServer(self.hashStorage);
    }
  };

  self.getKeys = function () {
    return (Object.keys(self.hashStorage));
  };

  //---------добавление напитков на сервер------------
  function addValueToServer(changeHash) {
    updatePassword = Math.random();

    $ajax(
      {
        url: AjaxHandlerScript,
        type: 'POST',
        dataType: 'json',
        data: {f: 'LOCKGET', n: 'Mikhnavets_Nataliya_Hometask', p: updatePassword},
        cache: false,
        success: DataLoadedLockget,
        error: ErrorHandler
      }
    );

    function DataLoadedLockget(data) {
      console.log(data.result);

      $.ajax(
        {
          url: AjaxHandlerScript,
          type: "POST",
          cache: false,
          dataType: "json",
          data: {f: "UPDATE", n: "Mikhnavets_Nataliya_Hometask", p: updatePassword, v: JSON.stringify(changeHash)},
          success: DataLoadedUpdate,
          error: ErrorHandler
        }
      );

      function DataLoadedUpdate(data) {
        console.log(data.result);
      }
    }
  }

  function ErrorHandler(jqXHR, StatusStr, ErrorStr) {
    alert(StatusStr + " " + ErrorStr);
  }
}

