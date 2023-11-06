function increaseTextSize(){
    document.getElementById("my-text-box").style.fontSize = "24pt";
}

function radioButtonHandler(){
    if(document.getElementById("FancyShmancy").checked){
        document.getElementById("my-text-box").style.color = "blue";
        document.getElementById("my-text-box").style.textDecoration = "underline";
        document.getElementById("my-text-box").style.fontWeight = "bold";
    }

    if(document.getElementById("BoringBetty").checked){
        document.getElementById("my-text-box").style.color = "black";
        document.getElementById("my-text-box").style.textDecoration = "none";
        document.getElementById("my-text-box").style.fontWeight = "normal";
    }
}

function mooText() {
    var textArea = document.getElementById("my-text-box");
    var text = textArea.value;
    text = text.toUpperCase();
    var sentences = text.split(".");

    for (var i = 0; i < sentences.length; i++) {
        sentences[i] = sentences[i].trim();

        var words = sentences[i].split(" ");
        var lastWord = words[words.length - 1];
        
        lastWord += "-Moo";
        words[words.length - 1] = lastWord;
        sentences[i] = words.join(" ");
    }
    text = sentences.join(". ");
    textArea.value = text;
}
