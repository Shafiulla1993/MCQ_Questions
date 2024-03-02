const questionsAnswers = [{
    question: "Javascript is an _______ language?",
    a: "Object-Oriented",
    b: "Object-based",
    c: "Procedural",
    d: "None of the above",
    correct: "a",
},
{ question: "Which of the following keywords is used to define a variable in Javascript?",
a: "var",
b: "let",
c: "Both A and B",
d: "None of this",
correct: "c"},
{ question: "Which of the following methods is used to access HTML elements using Javascript?",
a: "getElementbyId()",
b: "getElementbyClassName()",
c: "Both A and B",
d: "None of this",
correct: "c"},
{ question: "Upon encountering empty statements, what does the Javascript Interpreter do?",
a: "Throws an error",
b: "Ignores the statement",
c: "Gives a warning",
d: "None of the above",
correct: "b"},
{ question: "Which of the following methods can be used to display data in some form using Javascript?",
a: "document.write()",
b: "console.log()",
c: "windows.alert()",
d: "All of the above",
correct: "d"},
{ question: "How can a datatype be declared to be a constant type?",
a: "const",
b: "var",
c: "let",
d: "constant",
correct: "a"},
{ question: "When the switch statement matches the expression with the given labels, how is the comparison done?",
a: "Both the datatype and the result of the expression are compared",
b: "only the datatype of the expression is compared",
c: "Only the value of the expression is compared",
d: "None of the above",
correct: "a"},
{ question: "What keyword is used to check whether a given property is valid or not?",
a: "in",
b: "is in",
c: "exists",
d: "lies",
correct: "a"},
{ question: "What is the use of the <noscript> tag in Javascript?",
a: "The contents are desplayed by non-JS-based browsers",
b: "Clears all the cookies and cache",
c: "Both A and B",
d: "None of the above",
correct: "c"},
];


const index = 0;

let allInputs = document.querySelectorAll("input[type='radio']")

const getAnswer = () => {
    let ans;
    allInputs.forEach(
        (inputEl) => {
            if (inputEl.checked) {
                ans = inputEl.value;
            }
        }
    )
    console.log(ans);
}
 

const button = document.getElementsByName("button");

button.addEventListner("click", getAnswer)