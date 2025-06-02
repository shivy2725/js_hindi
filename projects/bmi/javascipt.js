window.onload = () => {
    const button = document.querySelector('#find');
    button.addEventListener('click', calculatebmi)
}
    function calculatebmi(){
        const height = document.querySelector('#height').value;
        const weight = document.querySelector('#weight').value;

        const result = document.querySelector('#result1');

        if (!height || isNaN(height) || height < 0 ) {
            result.innerText = "please provide a valide height";
        }
        else if (!weight || isNaN(weight) || weight < 0 ) {
            result.innerText = "please provide a valide weight"; 
        }

        const bmi1 = (weight * 10000)/ (height*height);
        const bmi = bmi1.toFixed(2);
        if (bmi < 18.5) {
            result.innerText = `Under weight ${bmi}`
        }

        else if(bmi>= 18.5 && bmi<=24.9 ){
    
            result.innerText = `Normal BMI ${bmi}`;
        }

        else{
            result.innerText = `Over weight ${bmi}`
        }
        
    }