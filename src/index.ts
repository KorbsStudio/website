let osName = "your OS";
// if (navigator.platform.indexOf("Win") != -1) {
//   osName = "Windows";
// } else if (navigator.platform.indexOf("Mac") != -1) {
//   osName = "Mac";
// } else if (navigator.platform.indexOf("Linux") != -1) {
//   osName = "Linux";
// }

console.log(navigator);

let downloadLink = document.getElementById("download");
if (downloadLink) downloadLink.innerText = `Download for ${osName}`;
