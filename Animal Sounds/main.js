function startClassification()
{
    navigator.mefiaDevices.getUserMedia({ audio: true});
    classifier = ml5.soundClassifier('https://drive.google.com/file/d/1CjJ656I3QiCwl26M5tuwE_oRayou0EAq/view?usp=sharing/model.json', modelReady);
}

function modelReady(){
    classifier.classify(gotResults);
}