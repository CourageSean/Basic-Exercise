let vorName = "Sean";
let nachName = " Courage";
let fullname = vorName + nachName;
console.log(fullname.length);

console.log("lv1_2");

let txt =
  "How inappropriate to call this planet Earth, when clearly it is Ocean.";

console.log(txt.indexOf("h"));
console.log(txt.indexOf("Earth"));
console.log(txt.indexOf("Moon"));

console.log("lv1_3");

let txt2 =
  "Blue, green, grey, white, or black; smooth, ruffled, or mountainous; that ocean is not silent.";
console.log(txt2.search(";"));
console.log(txt2.search("green"));
console.log(txt2.search("blue"));

console.log("lv1_4");

let A = "Sam is going to coding school";

console.log(A.slice(0, 3));
console.log(A.slice(5, 7));
console.log(A.slice(1, 15) + " " + A.slice(23, 30));
console.log(A.slice(0, 2));
console.log(A.slice(0, 2));
console.log(A.slice(0, 2));

console.log("lv1_5");

let text5 = "Sam is back from coding school";

let a = text5.substring("");
let b = text5.substring("");
let c = text5.substring("");
let d = text5.substring("");

console.log("lv1_6");

let text6 = "Sam is good at coding school";

let aa = text6.replace("good", "bad");
let aa1 = aa.replace("coding", "");
let bb = text6.replace("Sam", "Tom");
let bb1 = bb.replace("coding", "");
let cc1 = aa1.replace("school", "tennis");

console.log(aa1);

document.write(aa1 + "<br>" + bb1 + "<br>" + cc1);

console.log("lv1_8");

let text8 = "Sam is going to coding school";

text8a = text8.toUpperCase();
text8b = text8.toLowerCase();
replacer = text8a.slice(0, 3);
replacer1 = text8a.slice(23, 30);
textOutput = text8.replace("Sam", replacer);
result1 = textOutput.replace("school", replacer1);

console.log(result1.replace("coding", ""));
document.write("<br>" + result1);
