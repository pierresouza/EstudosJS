let colors = ["green", "yellow", "blue"];
console.log(colors.toString());

let Colors = ["green", "yellow", "blue"];
console.log(colors.join("-"));

let firstNumbers = [1, 2, 3];
let secondNumbers = [4, 5, 6];
let merged = firstNumbers.concat(secondNumbers);
console.log(merged);

let browsers = ["chrome", "firefox", "edge"];
browsers.push("safari", "opera mini");
console.log(browsers);

let browser = ["chorme", "firefox", "edge"];
browser.pop();
console.log(browser);

let Browsers = ["chorme", "firefox", "edge"];
Browsers.shift();
console.log("chorme removido! ", Browsers);

let Browser = ["chorme", "firefox", "edge"];
Browser.unshift();
