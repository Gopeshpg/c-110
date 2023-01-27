predicion_1 = ""
prediction_2 = ""

Webcam.set({
    width:450,
    height:400,
    image_format : 'png',
    png_quality:90
});

  camera = document.getElementById("camera");

Webcam.attach( '#camera' );


function take_snapshot()
{
    Webcam.snap(function(data_uri) {
        document.getElementById("result").innerHTML = '<img id="captured_image" src="'+data_uri+'"/>';
    });
}

console.log('ml5 version:', ml5.version);

classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/model/v_sl95BzE/model.json',modelloaded);

function modelLoaded() {
    console.log('Model Loaded!');
}
 function speak(){
    var synth = window.speechSynthesis;
    speak_data_1 = "The first prediction is " + prediction_1;
    speak_data_2 = "And the second prediction is " + prediction_2;
    var utterThis = new SpeechSynthesisUtterance(speak_data_1 + speak_data_2);  
    synth.speak(utterthis);

}

function check(){
    img = document.getElementById("image_captured");
    classifier.classify(img, gotResults);
}

function gotResults(error, results) {
    if(error){
        console.error(error);
    }
    else{
        document.getElementById("result_gesture_name").innerhtml = result[0].label;
        prediction = result[0].label;
        speak();
        if(results[0].label == "amazing")
        {
            document.getElementById("update_emoji").innerHTML = "&#128076;"; 
            document.getElementById("update_emoji").innerHTML = "THIS IS LOOKING AMAZING"; 
        }
        }
        else if(results[0].label == "Best"){
            document.getElementById("update_emoji").innerHTML = "&#128077;";
            document.getElementById("update_emoji").innerHTML = "ALL THE BEST"; 
        }
        else
        {
            document.getElementById("update_emoji").innerHTML = "&#9996;";
            document.getElementById("update_emoji").innerHTML = "THAT WAS A MARVELOUS VICTORY"; 
        }
    }
}