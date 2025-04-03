let btn = document.getElementById("bmicalculator");
btn.addEventListener("click",function () {
    let weight = parseFloat(document.getElementById("weight").value);
    let height = parseFloat(document.getElementById("height").value);
    let bmi = weight /(height * height);
    let result;
    if (bmi <18.5){
        result = "your are underweight.";
    }else if (bmi > 18.5 && bmi< 24.9){
        result = "you have normal weight.";
    }else if (bmi > 25 && bmi <29.9){
        result = "you are overweight.";
    }else{
        result = "you are obese.";
    }
    document.getElementById("bmiresult").innerHTML = bmi;
    document.getElementById("bmistatus").innerHTML = result;
});
