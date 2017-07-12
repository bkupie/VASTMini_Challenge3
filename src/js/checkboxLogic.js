function cLogic() {
  // Create a new instance of ladda for the specified button
  var l = Ladda.create( document.querySelector( '.ladda-button' ) );
  // Toggle between loading/not loading states
  l.start();


  var framesLeft = 5;

  var m14 = document.getElementById("Mar14").selected;
  var a14 = document.getElementById("Aug14").selected;
  var n14 = document.getElementById("Nov14").selected;
  var d14 = document.getElementById("Dec14").selected;
  var f15 = document.getElementById("Feb15").selected;
  var j15 = document.getElementById("Jun15").selected;
  var s15 = document.getElementById("Sep15").selected;
  var n15 = document.getElementById("Nov15").selected;
  var m16 = document.getElementById("Mar16").selected;
  var j16 = document.getElementById("Jun16").selected;
  var s16 = document.getElementById("Sep16").selected;
  var d16 = document.getElementById("Dec16").selected;
  var rgb = document.getElementById("RGB").selected;
  var plantH = document.getElementById("PlantHealth").selected;
  var floodB = document.getElementById("FloodBurn").selected;
  var sic = document.getElementById("SnowIceClouds").selected;


  var vImage;

  if (rgb === true){
    vImage = 'rgb';
  } else if (plantH === true){
    vImage = 'plantH';
  } else if (floodB === true){
    vImage = 'floodB';
  } else if (sic === true) {
    vImage = 'sic';
  }

  var img = [new imgSystem(), new imgSystem(), new imgSystem(), new imgSystem(), new imgSystem()];
  var wCanvas = ["img5", "img4", "img3", "img2", "img1"];
  var desc = ["txt5", "txt4", "txt3", "txt2", "txt1"];

  var canvas, ctx;

  // clear old canvas
  for (var i = 0; i < wCanvas.length; i++){
    canvas = document.getElementById(wCanvas[i]);
    ctx = canvas.getContext('2d');
    // ctx.clearRect(0, 0, canvas.width, canvas.height);
    document.getElementById(desc[i]).innerHTML = "";
    canvas.style.visibility = 'hidden';
  }

  var ctr = 0;


   if(m14)
    ctr++;
   if(a14)
    ctr++;
   if(n14)
    ctr++;
   if(d14)
    ctr++;
   if(f15)
    ctr++;
   if(j15)
    ctr++;
   if(s15)
    ctr++;
   if(n15)
    ctr++;
   if(m16)
    ctr++;
   if(j16)
    ctr++;
   if(s16)
    ctr++;
   if(d16)
    ctr++;

  while (framesLeft != 0) {
    if (m14) {
      img[framesLeft-1].initialize('data/CSV/image01_2014_03_17.csv',  wCanvas[framesLeft-1], vImage, ctr - 1);
      document.getElementById(desc[framesLeft-1]).innerHTML = "<kbd>Mar 17th, 2014</kbd>";
      m14 = false;
    } else if (a14) {
      img[framesLeft-1].initialize('data/CSV/image02_2014_08_24.csv',  wCanvas[framesLeft-1], vImage, ctr - 1);
      document.getElementById(desc[framesLeft-1]).innerHTML = "<kbd>Aug 24th, 2014</kbd>";
      a14 = false;
    } else if (n14) {
      img[framesLeft-1].initialize('data/CSV/image03_2014_11_28.csv',  wCanvas[framesLeft-1], vImage, ctr - 1);
      document.getElementById(desc[framesLeft-1]).innerHTML = "<kbd>Nov 28th, 2014</kbd>";
      n14 = false;
    } else if (d14) {
      img[framesLeft-1].initialize('data/CSV/image04_2014_12_30.csv',  wCanvas[framesLeft-1], vImage, ctr - 1);
      document.getElementById(desc[framesLeft-1]).innerHTML = "<kbd>Dec 30th, 2014</kbd>";
      d14 = false;
    } else if (f15) {
      img[framesLeft-1].initialize('data/CSV/image05_2015_02_15.csv',  wCanvas[framesLeft-1], vImage, ctr - 1);
      document.getElementById(desc[framesLeft-1]).innerHTML = "<kbd>Feb 15th, 2015</kbd>";
      f15 = false;
    } else if (j15) {
      img[framesLeft-1].initialize('data/CSV/image06_2015_06_24.csv',  wCanvas[framesLeft-1], vImage, ctr - 1);
      document.getElementById(desc[framesLeft-1]).innerHTML = "<kbd>Jun 24th, 2015</kbd>";
      j15 = false;
    } else if (s15) {
      img[framesLeft-1].initialize('data/CSV/image07_2015_09_12.csv',  wCanvas[framesLeft-1], vImage, ctr - 1);
      document.getElementById(desc[framesLeft-1]).innerHTML = "<kbd>Sep 12th, 2015</kbd>";
      s15 = false;
    } else if (n15) {
      img[framesLeft-1].initialize('data/CSV/image08_2015_11_15.csv',  wCanvas[framesLeft-1], vImage, ctr - 1);
      document.getElementById(desc[framesLeft-1]).innerHTML = "<kbd>Nov 15th, 2015</kbd>";
      n15 = false;
    } else if (m16) {
      img[framesLeft-1].initialize('data/CSV/image09_2016_03_06.csv',  wCanvas[framesLeft-1], vImage, ctr - 1);
      document.getElementById(desc[framesLeft-1]).innerHTML = "<kbd>Mar 6th, 2016</kbd>";
      m16 = false;
    } else if (j16) {
      img[framesLeft-1].initialize('data/CSV/image10_2016_06_26.csv',  wCanvas[framesLeft-1], vImage, ctr - 1);
      document.getElementById(desc[framesLeft-1]).innerHTML = "<kbd>Jun 26th, 2016</kbd>";
      j16 = false;
    } else if (s16) {
      img[framesLeft-1].initialize('data/CSV/image11_2016_09_06.csv',  wCanvas[framesLeft-1], vImage, ctr - 1);
      document.getElementById(desc[framesLeft-1]).innerHTML = "<kbd>Sep 6th, 2016</kbd>";
      s16 = false;
    } else if (d16) {
      img[framesLeft-1].initialize('data/CSV/image12_2016_12_19.csv',  wCanvas[framesLeft-1], vImage, ctr - 1);
      document.getElementById(desc[framesLeft-1]).innerHTML = "<kbd>Dec 19th, 2016</kbd>";
      d16 = false;
    } else {
      break;
    }
    framesLeft--;
    ctr--;
  }

  // document.getElementById("demo").innerHTML = 'Rendering';
}