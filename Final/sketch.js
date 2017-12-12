//let lines;
//
//let txt;
//
//function preload() {
//  lines = loadStrings('leftnews1.txt');
//}
//
//function setup() {
//  noCanvas();
//  txt = join(lines, '<br/>');
//  let par = createP(txt);
//  par.id('text');
//}

let text;
let lines;

function setup() {
  noCanvas();
  loadStrings('rightnews1.txt', fileready)
loadStrings('leftnews1.txt', fileready2)
}

function fileready(lines) {
  text = lines.join('<br/>');
  let par = createP(text);
  par.id('text');
}

function fileready2(lines) {
  text = lines.join('<br/>');
  let par = createP(text);
  par.id('text2');
}
