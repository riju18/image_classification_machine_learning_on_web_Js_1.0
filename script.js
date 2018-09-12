// // get image
// var getImage = document.getElementById('image');
// // The result tag in the HTML
// var result = document.getElementById('result');
// // The probability tag in the HTML
// var probability = document.getElementById('probability');
// // Initialize the Image Classifier method with MobileNet
// var classifier = ml5.imageClassifier('MobileNet', function () {
//     alert('Model Loaded!');
// });
// // Make a prediction with the selected image
// // This will return an array with a default of 10 options with their probabilities
// classifier.predict(getImage, function (err, results) {
//     result.innerText = results[0].className;
//     probability.innerText = results[0].probability.toFixed(4);
// });