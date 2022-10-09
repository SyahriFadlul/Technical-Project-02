
let button = document.getElementById("button")
let results = document.getElementById("result")

button.addEventListener("click",()=>{
    let weight = document.getElementById("weight").value
    let height = document.getElementById("height").value
    let bmi = weight/(height/100)**2
    console.log(bmi);
    if(bmi < 18.5){
        results.innerHTML = "<div id='result'>Your BMI is <span>"+ bmi.toFixed(2) + "</span> which means you <span>Underweight</span></div>"
    }else if(bmi >= 18.5 && bmi <= 24.9){
        results.innerHTML = "<div id='result'>Your BMI is <span>"+ bmi.toFixed(2) + "</span> which means you <span>Normal</span></div>"   
    }else if(bmi >= 25   && bmi <= 29.9){
        results.innerHTML = "<div id='result'>Your BMI is <span>"+ bmi.toFixed(2) + "</span> which means you <span>Overweight</span></div>"
    }else{
        results.innerHTML = "<div id='result'>Your BMI is <span>"+ bmi.toFixed(2) + "</span> which means you <span>Obesity</span></div>"
        console.log("obes");
    }
})

