function hi(name , myCallback) {
    console.log('hi im async');
    setTimeout(function () {
        console.log('im Async')
    }, 1000);
}
function bye(name, anhoterCallback) {
    setTimeout(function () {
        console.log('Bye', name);
        anhoterCallback();
    }, 1000);
}
console.log("init process");
hi("Tute",function () {
    bye('tute', function() {
        console.log("finish process....");
    })
});

