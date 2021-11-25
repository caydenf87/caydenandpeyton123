let memeImage = "Resources/catImageOne.jpg";
let memeTopText;
let memeBottomText;

$("#memeArea").hide();
$("#stats").hide();

document.getElementById('factButton').onclick = async function()
{
  let url ='https://cat-fact.herokuapp.com/facts/random';
  let response = await fetch(url, {method: 'GET'});
  let json = await response.json();
  let factArea = document.getElementById("catFact");
  factArea.innerText = json.text;
}

document.getElementById('randomPic').onclick = async function()
{
  let url ='https://api.thecatapi.com/v1/images/search';
  let response = await fetch(url, {method: 'GET'});
  let json = await response.json();
  let factArea = document.getElementById("catPic");
  factArea.innerHTML = "<img height = 500px width = 500px id='catPhoto'src='" + json[0].url + "'alt = cat>";
}

document.getElementById('randomGif').onclick = async function()
{
  let url ='https://cataas.com/cat/gif';
  let response = await fetch(url, {method: 'GET'});
  console.log(response);
  let factArea = document.getElementById("catGif");
  factArea.innerHTML = "<img height = 500px width = 500px src='" + response.url + "'alt = cat>";
}

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

document.getElementById('meme').onclick = async function()
{
  $("#meme").hide();
  $("#memeArea").show();
}

document.getElementById('memeChoiceOne').onclick = async function()
{
  memeImage = "Resources/catImageOne.jpg";
  $("#images").empty();
}

document.getElementById('memeChoiceTwo').onclick = async function()
{
  memeImage = "Resources/catImageTwo.jpg";
  $("#images").empty();
}

document.getElementById('memeChoiceThree').onclick = async function()
{
  memeImage = "Resources/catImageThree.jfif";
  $("#images").empty();
}

document.getElementById('memeChoiceFour').onclick = async function()
{
  memeImage = "Resources/catImageFour.jfif";
  $("#images").empty();
}

document.getElementById('memeChoiceFive').onclick = async function()
{
  memeImage = "Resources/catImageFive.jpg";
  $("#images").empty();
}

document.getElementById('memeChoiceSix').onclick = async function()
{
  memeImage = "Resources/catImageSix.jpg";
  $("#images").empty();
}

document.getElementById('createMeme').onclick = async function()
{
  memeTopText = $("#memeTop").val();
  memeBottomText = $("#memeBottom").val();
  document.getElementById("topText").innerText = memeTopText;
  document.getElementById("bottomText").innerText = memeBottomText;
  $("#memeArea").empty();
  $("#createdMeme").css("height", "400px");
  $("#createdMeme").css("width", "400px");
  $("#createdMeme").css("background-image", ("url(" + memeImage + ")"));
  $("#createdMeme").css("background-size", "cover");
}