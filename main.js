var peace = 0;
var noise = 1;
var myimage = image;


start();{
navigator.mediaDevices.getUserMedia({ audio: true});
classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/u02fOYRBx/model.json', { probabilityThreshold: 0.7 } ,modelReady);
}

modelReady();{
classifier.classify(start(gotResults));
}

classifier.classify('https://teachablemachine.withgoogle.com/models/u02fOYRBx/model.json' = gotResults);

gotResults(error, results);{
  if(error){
    console.error(error);
  }
  else{
    console.log(results);
   var red = Math.floor(Math.random()*255) + 1;
   var green = Math.floor(Math.random()*255) + 1;
   peace + count;
   noise + count;
   detection + peace;
   detection + noise;
   h2 + red
   h3 + green 
  }
}


if(detection = peace){
 myimage = bark.gif;
}
else{
  myimage = meow.gif;
}
