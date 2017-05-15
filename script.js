function saveImage(url) {
    var img = document.createElement("img");
    img.src = url;
    img.onload = function() {
        var key = encodeURIComponent(url),
            canvas = document.createElement("canvas");

        canvas.width = img.width;
        canvas.height = img.height;
        var ctx = canvas.getContext("2d");
        ctx.drawImage(img, 0, 0);
        localStorage.setItem(key, canvas.toDataURL("image/png"));
    }
}

saveImage('https://www.mobila.name/images/logo.jpg');
