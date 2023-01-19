var speechRecognition = window.webkitSpeechRecognition;

var recognition = new SpeechRecognition();
function start()
{
    document.getElementById("textbox").innerhtml = "";
    recognition.start();
}
recognition.onresult = function(event){
    console.event;

    var content = event.results[0][0].transcript
    
    document.getElementById("textbox").innerHTML = content;
    console.log(content);
    if(content =="Take my selfie")
    {
        console.log("Taking selfie ---");
        speak();
    }
          
}

function speak(){
    var synth = window.speechSynthesis;

    speak_data = "Taking you selfie in 5 seconds";

    var utterThis = new SpeechSynthesisUtterance(speak_data); 

    synth.speak(utterThis);
    webcam.attach(camera);
    
    setTimeout(function()
    {
        take_snapshort();
        save();
    }, 5000);

    }

    webcam.set({
        width:360,
        height:250,
        image_format : 'png' ,
        png_quality:90
    });
    camera = document.getElementById("camera");

    function take_snapshort()
    {
        webcam.snap(function(data_uri) {
            document.getElementById("result").innerHTML = '<img id=:"selfie_image" src="'+data_uri+'">';
        });
    }

    function save()
    {
        link = document.getElementById("link");
        image = document.getElementById("selfie_image").src;
        link.href = image;
        link.click();
    }

