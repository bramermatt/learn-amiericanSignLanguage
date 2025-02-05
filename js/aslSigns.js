const aslImages = {
    "a": "images/a.jpg",
    "b": "images/b.jpg",
    "c": "images/c.jpg",
    // Add images for other letters
};

document.getElementById("signInput").addEventListener("input", function () {
    const letter = this.value.toLowerCase();
    const outputDiv = document.getElementById("output");
    outputDiv.innerHTML = ""; 

    if (aslImages[letter]) {
        const img = document.createElement("img");
        img.src = aslImages[letter];
        img.alt = `ASL sign for ${letter}`;
        img.style.width = "150px"; 
        outputDiv.appendChild(img);

        // Optional: If you have videos
        // const video = document.createElement("video");
        // video.src = `videos/${letter}.mp4`;
        // video.controls = true;
        // video.style.width = "150px";
        // outputDiv.appendChild(video);
    }
});