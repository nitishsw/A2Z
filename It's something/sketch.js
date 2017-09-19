function diastic(seed,words){
    var phrase ="";
    var currentword = 0;
    for (var i = 0; i < seed.length; i++){
        var c = seed.charAt(i);
        for(var j = currentword; j<words.length; j++){
            if(words[j].charAt(i)==c){
                phrase += words[j];
                phrase +=" ";
                currentword= j+1;
                //console.log(words[j]);
                break;
            }
        }
    }
    return phrase;
}

var srctxt;
var words;

function preload(){
    srctxt = loadStrings('poem.txt');
}

function setup() {
noCanvas();
//print("setup function")
    srctxt = join(srctxt, ' ');
    words = splitTokens(srctxt,' ,!.?:;');
    
    var seed = select("#seed");
    var submit = select("#submit");
    submit.mousePressed(function(){
        var phrase = diastic(seed.value(), words);
        createP(phrase);
        //createP(seed.value());
        //createP(srctxt);
    });
}
//function draw() {
//stopped shiffman diastic video at 8:30
//console.log("draw function");
//}