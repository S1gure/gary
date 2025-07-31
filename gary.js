// JavaScriptが有効かどうかを確認
if (typeof document.addEventListener === 'function') {
    document.getElementById('tool').style.display = 'block';
} else {
    document.getElementById('message').style.display = 'block';
}

// 画像生成関数
function generateImage() {
    const userImageInput = document.getElementById('userImage');
    const textInput = document.getElementById('text');
    const userImage = userImageInput.files[0];
    const text = textInput.value;

    if (!userImage || !text) {
        alert('画像とテキストを入力してください');
        return;
    }

    const reader = new FileReader();
    reader.onload = function(e) {
        const img = new Image();
        img.src = e.target.result;
        img.onload = function() {
            const canvas = document.createElement('canvas');
            const ctx = canvas.getContext('2d');
            canvas.width = img.width;
            canvas.height = img.height;
            ctx.drawImage(img, 0, 0);
            
            ctx.font = '20px Arial';
            ctx.fillText(text, 10, 30);
            document.getElementById('result').innerHTML = `<img src="${canvas.toDataURL()}">`;
        };
    };
    reader.readAsDataURL(userImage);
}
