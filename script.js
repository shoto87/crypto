function encrypt() {
    var plaintext = document.getElementById('Text').value;
    var eText = eSubblock(plaintext);
    document.getElementById('eText').textContent = eText;
}

function eSubblock(plaintext) {
//    logic
    return plaintext;
}

