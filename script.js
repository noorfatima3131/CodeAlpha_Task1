
// Select the input box and all buttons
let input = document.getElementById('inputbox');
let buttons = document.querySelectorAll('button');

let string = "";  // Stores the expression to calculate
let arr = Array.from(buttons);

arr.forEach(button => {
    button.addEventListener('click', (e) => {
        let buttonText = e.target.innerHTML;

        if (buttonText === '=') {
            try {
                string = eval(string);  // Evaluate the expression
                input.value = string;
            } catch {
                input.value = "Error";  // Handle invalid input
                string = "";
            }
        } 
        else if (buttonText === 'AC') {
            string = "";   // Clear input
            input.value = string;
        } 
        else if (buttonText === '+/-') {
            if (string) {
                string = (parseFloat(string) * -1).toString();
                input.value = string;
            }
        } 
        else if (buttonText === '%') {
            if (string) {
                string = (parseFloat(string) / 100).toString();
                input.value = string;
            }
        } 
        else {
            string += buttonText;
            input.value = string;
        }
    });
});
