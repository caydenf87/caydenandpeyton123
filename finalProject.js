/*
Using APIs:
https://alexwohlbruck.github.io/cat-facts/
https://docs.thecatapi.com/
https://cataas.com/#/

Using External Library:
Chart.js at https://www.chartjs.org/docs/latest/
*/

/*
  Defining variables.
*/
let videoOne = '<iframe id="catVideoChoice" width="560" height="315" src="https://www.youtube.com/embed/XyNlqQId-nk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
let videoTwo = '<iframe id="catVideoChoice" width="560" height="315" src="https://www.youtube.com/embed/tpiyEe_CqB4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
let videoThree = '<iframe id="catVideoChoice" width="560" height="315" src="https://www.youtube.com/embed/hY7m5jjJ9mM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
let videoSrc = videoOne;
let memeImage;
let memeTopText;
let memeBottomText;

/*
  Hiding content that will later be showed after interaction.
*/
$("#images").hide();
$("#memeEnter").hide();
$("#anotherMeme").hide();
$("#catVideoFrame").hide();
$("#faceBook").hide();
$("#catImagePost").hide();
$("#commentOne").hide();
$("#commentTwo").hide();
$("#commentThree").hide();

/*
Using the API at https://alexwohlbruck.github.io/cat-facts/ to retrieve a 
random cat fact.
*/
document.getElementById('factButton').onclick = async function()
{
  let url ='https://cat-fact.herokuapp.com/facts/random';
  let response = await fetch(url, {method: 'GET'});
  let json = await response.json();
  let factArea = document.getElementById("catFact");
  factArea.innerText = json.text;
}


/*
Using the API at https://docs.thecatapi.com/ to retrieve a random cat image.
*/
document.getElementById('randomPic').onclick = async function()
{
  let url ='https://api.thecatapi.com/v1/images/search';
  let response = await fetch(url, {method: 'GET'});
  let json = await response.json();
  let factArea = document.getElementById("catPic");
  factArea.innerHTML = "<img height = 500px width = 500px id='catPhoto'src='" + json[0].url + "'alt = cat>";
}

/*
Using the API at https://cataas.com/#/ to retrieve a random cat gif.
*/
document.getElementById('randomGif').onclick = async function()
{
  let url ='https://cataas.com/cat/gif';
  let response = await fetch(url, {method: 'GET'});
  console.log(response);
  let factArea = document.getElementById("catGif");
  factArea.innerHTML = "<img height = 500px width = 500px src='" + response.url + "'alt = cat>";
}

/*
  Using chart.js to create a bar graph showing Top Ten Countries in the EU 
  with the most cats
*/
document.getElementById('EUcats').onclick = async function()
{
  $("#EUstats").hide();
  var xValues = ["Austria", "Belgium", "Netherlands", "Spain", "Romania", "Poland", "Italy", "UK", "France", "Germany"];
  var yValues = [2.03, 2.05, 2.6, 3.15, 4.3, 6.4, 7.5, 7.5, 13.5, 14.5];
  var barColors = ["red", "red","red","red","red", "red", "red", "red", "red", "red" ];

  new Chart("myChart", {
    type: "bar",
    data: {
      labels: xValues,
      datasets: [{
        label: "Number of cats (in millions)",
        backgroundColor: barColors,
        data: yValues
      }]
    },
    options: {    title: {
      display: true,
      text: "Top Ten Countries in the EU with the most cats"
    },
  }
  });

  $("#EUstats").show();
}

/*
  Using chart.js to create a pie graph showing Where cat owners acquire 
  their cats.
*/
document.getElementById('homeCats').onclick = async function()
{
  $("#homeStats").hide();
  var xValues = ["Shelter/rescue", "Stray", "Friends/Family", "Store", "Breeder"];
  var yValues = [43, 21, 21, 12, 3];
  var barColors = [
    "#b91d47",
    "#00aba9",
    "#2b5797",
    "#e8c3b9",
    "#1e7145"
  ];

  new Chart("myChartTwo", {
    type: "pie",
    data: {
      labels: xValues,
      datasets: [{
        backgroundColor: barColors,
        data: yValues
      }]
    },
    options: {
      title: {
        display: true,
        text: "Where do cat owners acquire their cats?"
      }
    }
  });
  $("#homeStats").show();
}

/*
  Hiding button when deciding to create meme.
*/
document.getElementById('meme').onclick = async function()
{
  $("#meme").hide();
  $("#images").show();
}

/*
  If first image is clicked, that is used for the meme
*/
document.getElementById('memeChoiceOne').onclick = async function()
{
  memeImage = "Resources/catImageOne.jpg";
  $("#images").hide();
  $("#imagePick").hide();
  $("#memeEnter").show();
}

/*
  If second image is clicked, that is used for the meme
*/
document.getElementById('memeChoiceTwo').onclick = async function()
{
  memeImage = "Resources/catImageTwo.jpg";
  $("#images").hide();
  $("#imagePick").hide();
  $("#memeEnter").show();
}

/*
  If third image is clicked, that is used for the meme
*/
document.getElementById('memeChoiceThree').onclick = async function()
{
  memeImage = "Resources/catImageThree.jfif";
  $("#images").hide();
  $("#imagePick").hide();
  $("#memeEnter").show();
}

/*
  If fourth image is clicked, that is used for the meme
*/
document.getElementById('memeChoiceFour').onclick = async function()
{
  memeImage = "Resources/catImageFour.jfif";
  $("#images").hide();
  $("#imagePick").hide();
  $("#memeEnter").show();
}

/*
  If fifth image is clicked, that is used for the meme
*/
document.getElementById('memeChoiceFive').onclick = async function()
{
  memeImage = "Resources/catImageFive.jpg";
  $("#images").hide();
  $("#imagePick").hide();
  $("#memeEnter").show();
}

/*
  If sixth image is clicked, that is used for the meme
*/
document.getElementById('memeChoiceSix').onclick = async function()
{
  memeImage = "Resources/catImageSix.jpg";
  $("#images").hide();
  $("#imagePick").hide();
  $("#memeEnter").show();
}

/*
  Takes selected image, and gets input from text boxes and creates meme.
*/
document.getElementById('createMeme').onclick = async function()
{
  memeTopText = $("#memeTop").val();
  memeBottomText = $("#memeBottom").val();
  document.getElementById("memeTop").value = "";
  document.getElementById("memeBottom").value = "";
  document.getElementById("topText").innerText = memeTopText;
  document.getElementById("bottomText").innerText = memeBottomText;
  $("#memeEnter").hide();
  $("#createdMeme").css("height", "400px");
  $("#createdMeme").css("width", "400px");
  $("#createdMeme").css("background-image", ("url(" + memeImage + ")"));
  $("#createdMeme").css("background-size", "cover");
  $("#createdMeme").show();
  $("#anotherMeme").show();
}

/*
  Clears meme section so another can be made
*/
document.getElementById('anotherMeme').onclick = async function()
{
  $("#anotherMeme").hide();
  $("#createdMeme").hide();
  $("#images").show();
  $("#imagePick").show();
}

/*
  Randomly chooses embedded youtube video and displays it.
*/
document.getElementById('catVideo').onclick = async function()
{
  let randVideo = getRandomInt(4);
  switch (randVideo)
  {
      case 0:
        videoSrc = videoOne;
        break;
      case 1:
        videoSrc = videoTwo;
        break;
      case 2:
        videoSrc = videoThree;
  }

  let videoFrame = document.getElementById("catVideoFrame");
  videoFrame.innerHTML = videoSrc;
  $("#catVideoFrame").show();
}

/*
  Creates a "facebook-ish" post and shows comments after short time.
*/
document.getElementById('catPost').onclick = async function()
{
  $("#catPost").hide();
  $("#faceBook").show();
  await sleep(3000);
  $("#catImagePost").show();
  await sleep(2000);
  $("#commentOne").show();
  await sleep(2000);
  $("#commentTwo").show();
  await sleep(2000);
  $("#commentThree").show();
}


/* 
Function from https://stackoverflow.com/questions/951021/what-is-the-javascript-version-of-sleep
*/
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}