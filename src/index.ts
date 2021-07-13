let osName = "your OS";
if (navigator.platform.indexOf("Win") != -1) {
  osName = "Windows";
} else if (navigator.platform.indexOf("Mac") != -1) {
  osName = "Mac";
} else if (navigator.platform.indexOf("Linux") != -1) {
  osName = "Linux";
}

let downloadLink = document.getElementById("download");
if (downloadLink) {
  downloadLink.innerText = `Download for ${osName}`;
  downloadLink.addEventListener("click", (event) => {
    event.preventDefault();
    switch (downloadLink?.textContent) {
      case "Download for Linux":
        window.location.href = "./downloads/linux";
        break;
      case "Download for Windows":
        window.location.href = "./downloads/win";
        break;
      case "Download for Mac":
        window.location.href = "./downloads/mac";
        break;
      default:
        window.location.href = "./downloads";
        break;
    }
  });
}
