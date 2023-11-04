
// bringing all the ids and class in javascript from html by getelementbyid

const btnElem = document.getElementById("calculate");
const billInput = document.getElementById("bill");
const tipInput = document.getElementById("tip");
const spanvalue = document.getElementById("total");

// bringing ids and class are finished


// this is the function that calculates the input value (that is tip value and bill value) to show the amount to be paid to the restro

function calculateTotal() {
    const billValue = billInput.value;
    const tipValue = tipInput.value;
    const totalValue = billValue * (1 + tipValue / 100);
    spanvalue.innerHTML = totalValue.toFixed(2);
}

btnElem.addEventListener("click", calculateTotal)


// end of the javascript here


// hello my name is jishan ahmed laskar and i read in class 12 in gurucharan college in silchar ambka patty and also want to pursui the bachelors degree in engeenering in  computer science and technology and want ot become a good software engeener in google like Raj which is also known as Striver who teach very good data structures and algorithms