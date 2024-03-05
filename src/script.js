const input = document.getElementById('text-input');
const button = document.getElementById('check-btn');
const output = document.getElementById('result');

button.addEventListener('click', () => {
    //Get Input
    const inputString = input.value;

    //Check to see if there's an input
    if(inputString == ''){
        alert("Please input a value");
    } else {
        const regex = /[a-z0-9]/;
        //lowercase string => string to array => filter only letters and numbers
        const inputArray = inputString
        .toLowerCase()
        .split('')
        .filter((char) => regex.test(char));
        const forwardString=inputArray.join('');
        console.log(forwardString);

        //reverse the array => array to string
        const reversedString = inputArray.reverse('').join('');
        console.log(reversedString);

        //compare the two strings
        output.innerHTML = forwardString === reversedString? 
        `<strong>${inputString}</strong> is a palindrome.` :
        `<strong>${inputString}</strong> is not a palindrome.`;
    }
})

