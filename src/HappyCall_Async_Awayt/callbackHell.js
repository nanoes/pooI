function hi(name, myCallback) {
  setTimeout(function () {
    console.log("hi im async", +name);
    console.log("im Async");
    myCallback(name);
  }, 1500);
}

function speack(callbackSpeack) {
  setTimeout(function () {
    console.log("bla...");

    callbackSpeack();
  }, 1000);
}

function bye(name, anhoterCallback) {
  setTimeout(function () {
    console.log("Bye", name);
    anhoterCallback();
  }, 1000);
}
console.log("init process");

hi("Tute", function (name) {
  speack(function () {
    bye("tute", function () {
      console.log("finish process....");
    });
  });
});
