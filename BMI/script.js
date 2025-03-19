const form = document.querySelector('form');

form.addEventListener('submit', function(e) {

    e.preventDefault();
    const weight = parseInt(document.querySelector('#weight').value);
    const height = parseInt(document.querySelector('#height').value);
  const result = document.querySelector('#result');
  const bmi = weight / ((height * height) / 10000);

    if (isNaN(weight) || isNaN(height)) {
        alert('Please enter a valid number');
        return;
    };
  

   if(bmi < 18.5)
  {
    result.style.color = "red";
    result.innerHTML = `<span>${bmi.toFixed(2)} underWeight</span>`;

  }
  else if (bmi >= 18.5 && bmi <= 24.9)
  {
    result.style.color = "green";
    result.innerHTML = `<span>${bmi.toFixed(2)} normalWeight</span>`;

  }
    else if(bmi >= 25 && bmi <= 29.9)
    {
        result.style.color = "orange";
        result.innerHTML = `<span>${bmi.toFixed(2)} overWeight</span>`;
    
    }
    else if(bmi >= 30)
    {
        result.style.color = "red";
        result.innerHTML = `<span>${bmi.toFixed(2)}obese</span>`;
    
    }



    
});
