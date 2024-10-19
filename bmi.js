const weight = 25;
const height = 5.6;

if (weight < 18.5){
    console.log('You Are Under Weight');
}

else if (weight >= 18.5 && weight <= 24.9){
    console.log('you are normal');
}

else if (weight >= 25 && weight <= 29.9){
    console.log('you are overweight');
}

else {
    console.log('you are obese');
}