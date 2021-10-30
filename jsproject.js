let userName;
let character;
let characterList;
count = 0;

const gameStart = new Audio("Resources/Roundstart.mp3");

$("#characters").hide();
$("#downloadButton").hide();
characterList = document.getElementsByClassName("character");

for (i = 0; i < characterList.length; i++)
{
    characterList[i].addEventListener("click", hideSelect);
}

function getUser()
{
    userName = prompt("Enter a username:");
    $("#startButton").remove();
    $("#characters").show();
}

async function hideSelect(event)
{
    character = event.target;
    style = window.getComputedStyle(character, false)
    let bi = style.backgroundImage.slice(4, -1).replace(/"/g, "");
    bi = bi.slice(-26);

    let profile = document.createElement("img");
    profile.src = bi;
    profile.height = 150;
    profile.width = 120;
    profile.style.float = "right";

    let profileName = document.createElement("div");
    profileName.innerText = userName;
    profileName.style.textAlign = "right";
    profileName.style.justifyContent = "right";
    profileName.style.color = "white";

    $("#profile").append(profile);
    $("#profile").append(profileName);
    $("#characters").hide();

    let rolePick = 0 // getRandomInt(2);

    if (rolePick == 0)
    {
        crewmate();
    }

    else
    {
        imposter();
    }
}

async function crewmate()
{
    let crewmate = document.createElement("img");
    crewmate.src = "Resources/crewmate.jpg";
    crewmate.alt = "crewmate";
    crewmate.height = "500";
    crewmate.width = "1200";
    crewmate.style.display = "block";
    crewmate.style.marginLeft = "auto";
    crewmate.style.marginRight = "auto";
    crewmate.style.marginTop = "100px";
    $("#content").append(crewmate);
    gameStart.play();
    await sleep(4000);
    $(crewmate).remove();
    downloadTask();
}

async function imposter()
{
    let imposter = document.createElement("img");
    imposter.src = "Resources/imposter.png";
    imposter.alt = "crewmate";
    imposter.height = "300";
    imposter.width = "1200";
    imposter.style.display = "block";
    imposter.style.marginLeft = "auto";
    imposter.style.marginRight = "auto";
    imposter.style.marginTop = "100px";
    $("#content").append(imposter);
    gameStart.play();
    await sleep(4000);
    $(imposter).remove();
}

function downloadTask()
{
    let download = document.createElement("img");
    download.src = "Resources/download.png";
    download.alt = "crewmate";
    download.height = "600";
    download.width = "1200";
    download.style.display = "block";
    download.style.marginLeft = "auto";
    download.style.marginRight = "auto";
    download.style.marginTop = "100px";
    $("#content").css("position", "relative");
    $("#content").append(download);
    let downloadButton = document.createElement("button");
    downloadButton.id = "downloadButton";
    downloadButton.innerText = "Download";
    downloadButton.onclick = showDownload;
    $("#content").append(downloadButton);
}

async function showDownload()
{
    $("#content").empty();
    let download = document.createElement("img");
    download.src = "https://c.tenor.com/IIRztzf3eLoAAAAd/among-us-upload.gif";
    download.alt = "download";
    download.height = "600";
    download.width = "1200";
    download.style.display = "block";
    download.style.marginLeft = "auto";
    download.style.marginRight = "auto";
    download.style.marginTop = "100px";
    $("#content").append(download);
    await sleep(9000);
    $(download).remove();
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }