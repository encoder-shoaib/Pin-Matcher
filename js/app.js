console.log("hi")


// generatePin-function
function generatePin(){
    const random = Math.round(Math.random()*10000)
    return random;
}

function checkPin(){
    const pin = generatePin();
    const stringPin = pin + '';
    const checkPinLength = stringPin.length
    // console.log('s',checkPinLength)

    if(checkPinLength==4)
    {
        return pin;
    }

    else{
        return checkPin();
    }
}





document.getElementById('generate-pin-btn').addEventListener('click',function(){

    const generatePin = checkPin();
    // console.log(generatePin);

    
    // display pin
    const generateInputShow = document.getElementById('generate-input-button')
    generateInputShow.value= generatePin;        // input fild will set as a value

})


document.getElementById('all-number-calclutor').addEventListener('click',function(even){

    // console.log(even.target.innerText)
    
    const submitInputButton = document.getElementById('matching-input-button') ///UPORE niye asar karaon jate dui ta te use korte pari

    const allNumber = even.target.innerText;
    const valueSubmitInputButton = submitInputButton.value;
    if(isNaN(allNumber))
    {
        if(allNumber=='C')
        {
            submitInputButton.value = '';

        }

        if(allNumber=='<')
        {
            const digits = valueSubmitInputButton.split('');
            digits.pop()
            const remaningDigit =digits.join('');
            submitInputButton.value =remaningDigit;
             

        }
    }


    else{
        const convartValueSubmitInputButton = valueSubmitInputButton + allNumber

        submitInputButton.value =convartValueSubmitInputButton;
    }

})


                        // submit-button
  
document.getElementById('submit-button').addEventListener('click',function(){
    

// matching input 
    const submitInputButton = document.getElementById('matching-input-button')
    const valueSubmitInputButton = submitInputButton.value;

 // display pin
    const generateInputShow = document.getElementById('generate-input-button')
    const valueGenerateInputShow = generateInputShow.value;

    if(valueSubmitInputButton == valueGenerateInputShow)
    {
        const pinFail = document.getElementById('pin-fail');
        pinFail.style.display ='none'    // na dekate chile 'none' hobe 


        const pinSuccess = document.getElementById('pin-success')  // jokhon success hobe tokhon fail dekabe na 
        pinSuccess.style.display = 'block' // na dekate chile 'none' hobe 
    }
    else{
       
        const pinSuccess = document.getElementById('pin-success')
        pinSuccess.style.display = 'none' // na dekate chile 'none' hobe 

        const pinFail = document.getElementById('pin-fail'); // jokhon fail hobe tokhon success dekabe na 
        pinFail.style.display ='block'    // na dekate chile 'none' hobe 

        
    }
  
    submitInputButton.value = '';
    generateInputShow.value = '';


})












































                 // concept

// Math.round(213.5656)
// 214
// Math.random()*10000
// 1290.2418673655513
// Math.round(Math.random()*10000)
// 2358
