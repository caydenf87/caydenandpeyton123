let userName;
let character;
let characterList;
let chatColor;
count = 0;

const gameStart = new Audio("Resources/Roundstart.mp3");
const chatSound = new Audio("Resources/chatSound.mp3");
const meeting = new Audio("Resources/emergency.mp3");

$("#chat").hide();
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
    let profImage;
    if (bi.slice(-26)[0] == "R")
    {
        profImage = bi.slice(-26);
    }

    else if (bi.slice(-27)[0] == "R")
    {
        profImage = bi.slice(-27);
    }

    else if (bi.slice(-28)[0] == "R")
    {
        profImage = bi.slice(-28);
    }

    else if (bi.slice(-29)[0] == "R")
    {
        profImage = bi.slice(-29);
    }


    switch (profImage)
    {
        case "Resources/characterOne.png":
            chatColor = "Resources/cyanChat.png";
            break;

        case "Resources/characterTwo.png":
            chatColor = "Resources/blueChat.png";
            break;

        case "Resources/characterThree.png":
            chatColor = "Resources/greenChat.png";
            break;
        
        case "Resources/characterFour.png":
            chatColor = "Resources/redChat.png";
            break;
        
        case "Resources/characterFive.png":
            chatColor = "Resources/pinkChat.png";
            break;

        case "Resources/characterSix.png":
            chatColor = "Resources/orangeChat.png";
            break;
    }

    let profile = document.createElement("img");
    profile.src = profImage;
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
    chat();
}


async function chat()
{
    let emergency = document.createElement("img");
    emergency.src = "Resources/emergencyMeeting.jpg";
    emergency.alt = "meeting";
    emergency.width = "1500";
    emergency.height = "550";
    $("#content").append(emergency);
    $(emergency).hide();
    meeting.play();
    $(emergency).slideDown("slow");
    await sleep(3000);
    $(emergency).remove();

    $("#chat").show();
    let comment = document.createElement("div");
    comment.id = "otherCommentOne";
    comment.innerText = "White was kind of sus"


    let commentTwo = document.createElement("div");
    commentTwo.id = "otherCommentTwo";
    commentTwo.innerText = "What were you doing " + userName + "?";

    await sleep(2000);
    chatSound.play();
    $("#chat").append(comment);
    await sleep(4000);
    chatSound.play();
    $("#chat").append(commentTwo);
    await sleep(2000);

    let chatBox = document.createElement("input");
    chatBox.id = "chatBox";
    chatBox.type = "text";
    $("#chat").append(chatBox);

    let chatButton = document.createElement("button");
    chatButton.id = "chatButton";
    chatButton.onclick = submitChat;
    $("#chat").append(chatButton);
}

async function submitChat()
{
    let comment = document.createElement("div");
    comment.id = "myComment";
    comment.innerText = $("#chatBox").val();
    comment.style.backgroundImage = "url(" + chatColor + ")";
    $("#chatBox").remove();
    $("#chatButton").remove();
    chatSound.play();
    $("#chat").append(comment);

    let commentThree = document.createElement("div");
    commentThree.id = "otherCommentTwo";
    commentThree.innerText = "I can vouch for you, let's vote white";

    await sleep(3000);
    chatSound.play();
    $("#chat").append(commentThree);

    await sleep(2000);
    let vote = document.createElement("button");
    vote.id = "voteButton";
    vote.innerText = "Vote White";
    vote.onclick = voteClick;
    $("#chat").append(vote);
}

async function voteClick()
{
    $("#chat").remove();
    let eject = document.createElement("img");
    eject.src = "Resources/amongusejected.gif";
    eject.alt = "meeting";
    eject.width = "1500";
    eject.height = "550";
    $("#content").append(eject);
    await sleep(5000);
    $(eject).remove();
}


function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }