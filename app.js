const musicPlayer = document.createElement("audio");

musicPlayer.id = "backgroundMusic";
musicPlayer.src = "music/lagu-oca.mp3";
musicPlayer.loop = true;
musicPlayer.controls = true;
musicPlayer.preload = "auto";

musicPlayer.style.position = "fixed";
musicPlayer.style.bottom = "15px";
musicPlayer.style.right = "15px";
musicPlayer.style.width = "280px";
musicPlayer.style.maxWidth = "90%";
musicPlayer.style.zIndex = "9999";

document.body.appendChild(musicPlayer);
```
