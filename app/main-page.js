function pageLoaded(args) {
    const page = args.object;
}
exports.pageLoaded = pageLoaded;

function onButtonTap(args) {
    const button = args.object;
    button.text = "Butona tıklandı!";
    alert("Merhaba, NativeScript ile yazıldı!");
}
exports.onButtonTap = onButtonTap;
