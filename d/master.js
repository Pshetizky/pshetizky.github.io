//thanks iArchitSharma/Encrypt-Decrypt-Text
function encrypt(message = '', key = ''){
    var x = CryptoJS.AES.encrypt(message, key);
    return x.toString();
}
function decrypt(message = '', key = ''){
    var y = CryptoJS.AES.decrypt(message, key);
    var decryptedMessage = y.toString(CryptoJS.enc.Utf8);
    return decryptedMessage;
}
function AesEncrypt() {
    const text = document.getElementById('inputText').value;
    const password = document.getElementById('inputPassword').value;
    var x = encrypt(text, password);
    document.getElementById("demo1").value = x;
}
function AesDecrypt() {
    const texto = document.getElementById('inputText').value;
    const passwordo = document.getElementById('inputPassword').value;
    var ra1 = decrypt(texto, passwordo);
    document.getElementById("demo2").value = ra1;
}