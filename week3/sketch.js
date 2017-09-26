var word_url = "http://api.wordnik.com:80/v4/words.json/randomWords?hasDictionaryDef=true&minCorpusCount=0&maxCorpusCount=-1&minDictionaryCount=1&maxDictionaryCount=-1&minLength=5&maxLength=-1&limit=10&api_key=a2a73e7b926c924fad7001ca3111acd55af2ffabf50eb4ae5"; 

function setup() {
    noCanvas();
    var submit = select("#submit");
    var new_word = select("#new_word");
    var new_def = select("#new_def");
    submit.mousePressed(function(){
        $.get( word_url, function( data ) {
            new_word.html(data[0].word);
            def_url = "http://api.wordnik.com:80/v4/word.json/"+ data[0].word + "/definitions?limit=200&includeRelated=true&useCanonical=false&includeTags=false&api_key=a2a73e7b926c924fad7001ca3111acd55af2ffabf50eb4ae5";
            $.get( def_url, function( def_data ) {
                new_def.html(def_data[0].text);
            });
        });
    });
}