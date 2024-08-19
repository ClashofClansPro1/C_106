function startClassification(){
navigator.mediaDevices.getUserMedia({audio:true});
classifier=ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/gSl6gZlE7/model.json', modelReady);
}

function modelReady(){
  classifier.classify(gotResults);
}

function gotResults(error, results) {
    if(error){
        console.error(error);
    }
    else{
        console.log(results);
        random_number_r = Math.floor(Math.random() * 255) + 1;
        random_number_g = Math.floor(Math.random() * 255) + 1;
        random_number_b = Math.floor(Math.random() * 255) + 1;
        document.getElementById("result_label").innerHTML = 'Escucho- '+ results[0].label;
        document.getElementById("result_label").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_r+")";
        document.getElementById("result_confidence").innerHTML = 'Precisión - '+ (results[0].confidence*100).toFixed(2)+" %";
        document.getElementById("result_confidence").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_r+")";
        img = document.getElementById('img');
        if (results[0].label == "Background noise") {
            img.src = 'https://i.pinimg.com/originals/82/c4/7b/82c47b965c23f5f7243acdd64510665f.jpg';
        }
        if (results[0].label == "gitara") {
            img.src = 'https://thumbs.dreamstime.com/b/cute-panda-playing-guitar-created-generating-ai-technology-panda-playing-guitar-275625671.jpg';
        }
        if (results[0].label == "piano") {
            img.src = 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/3c81bf4c-53df-47dd-bd2d-0015c90567ba/dfturag-b09eee65-f6e6-4076-90e6-7541e2a2b2a4.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzNjODFiZjRjLTUzZGYtNDdkZC1iZDJkLTAwMTVjOTA1NjdiYVwvZGZ0dXJhZy1iMDllZWU2NS1mNmU2LTQwNzYtOTBlNi03NTQxZTJhMmIyYTQuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.JeWbcD1AooiU-icqGjiy2QztxdIcEa5Bc9A-N1NPVtk';
        }
        if (results[0].label == "violin") {
            img.src = 'https://fydn.imgix.net/m%2Fgen%2Fcanvas-square-p1%2F38c84a03-ee2d-42af-a591-8c88d8a73f8a.jpg?auto=format%2Ccompress&q=50&w=280';
        }
    } 
}