let osName = "Unknown OS";
if (navigator.appVersion.indexOf("Win") != -1) {
  osName = "Windows";
} else if (navigator.appVersion.indexOf("Mac") != -1) {
  osName = "Mac";
} else if (navigator.appVersion.indexOf("Linux") != -1) {
  osName = "Linux";
}

document.getElementById("download")?.innerText = `Download for ${osName}`;
