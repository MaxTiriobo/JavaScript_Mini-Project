function scrollToRSVP() {
    document.getElementById("RSVP").scrollIntoView({ behavior: 'smooth' });
}

function scrollToSection() {
    document.getElementById("YT").scrollIntoView({ behavior: 'smooth' });
}

function scrollToSection() {
    document.getElementById("badum").scrollIntoView({ behavior: 'smooth' });
}

function toggleMute() {
    var video = document.getElementById("video");
    video.muted = !video.muted;
}

//event listener
document.getElementById("playVideo").addEventListener("click", function (e) {
    e.preventDefault(); // Prevents the link from redirecting
    var video = document.getElementById("video");
    video.play(); // Starts playing the video when the image is clicked
});

function playdrums() {
    document.getElementById("badum").play();
}


localStorage.setItem("username", "MaxTiriobo");
let username = localStorage.getItem("username");
console.log(username); 
localStorage.removeItem("username");

let ignoreCount = localStorage.getItem('ignoreCount') ? parseInt(localStorage.getItem('ignoreCount')) : 0;
let messages = [];


fetch("media.JSON")
    .then(response => response.json())
    .then(data => {
        messages = data.stages;
    })
    .catch(error => console.error("error loading .JSON file", error));

function isEmpty(id) {
    let input = document.getElementById(id)
    if (input.value.trim() == "") {
        return true
    }
    else {
        return false
    }
}



//when you click the button, it displays the output. 
function dispTxt() {
    if (isEmpty("name") || isEmpty("number") || isEmpty("email")) {
        if (messages.length > 0) {
            if (ignoreCount < messages.length) {
                document.getElementById("output").textContent = messages[ignoreCount].message;
                ignoreCount++
                localStorage.setItem('ignoreCount', ignoreCount)
            }
            else {
                document.getElementById("output").textContent = "Fill out the Boxes";
                ignoreCount = 0;
                localStorage.setItem('ignoreCount', ignoreCount);
            }
        }
        else {
            // ignoreCount++
            document.getElementById("output").textContent = "messages not loaded";
        }

    }
    else {
        document.getElementById("output").textContent = "Recieved, Thank You for filling out the form.";
        ignoreCount = 0;
        localStorage.setItem('ignoreCount', ignoreCount);
    }
}




