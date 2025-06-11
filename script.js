const questions = [
  {
    question: "Which OSI model layer is responsible for routing and forwarding of data?",
    answers: [
      { text: "Physical Layer", correct: false },
      { text: "Network Layer", correct: true },
      { text: "Data Link Layer", correct: false },
      { text: "Transport Layer", correct: false }
    ]
  },
  {
    question: "In object-oriented programming, what is the term for the ability of a class to have multiple methods with the same name but different parameters?",
    answers: [
      { text: "Polymorphism", correct: true },
      { text: "Encapsulation", correct: false },
      { text: "Inheritance", correct: false },
      { text: "Abstraction", correct: false }
    ]
  },
  {
    question: "What is the purpose of an SQL JOIN operation?",
    answers: [
      { text: "Combine rows from two or more tables based on a related column", correct: true },
      { text: "Create a new table by merging data from multiple databases", correct: false },
      { text: "Filter rows in a table based on a specific condition", correct: false },
      { text: "Sort rows in a table in ascending or descending order", correct: false }
    ]
  },
  {
    question: "What is a zero-day vulnerability?",
    answers: [
      { text: "A vulnerability that has been known for zero days", correct: false },
      { text: "A security measure that blocks all incoming traffic", correct: false },
      { text: "A type of antivirus software", correct: false },
      { text: "A security hole in software that is unknown to the vendor", correct: true }
    ]
  },
  {
    question: "Which of the following is not a valid MIME type for a web page?",
    answers: [
      { text: "text/html", correct: false },
      { text: "application/json", correct: false },
      { text: "audio/mp3", correct: true },
      { text: "image/png", correct: false }
    ]
  },
  {
    question: "What does the acronym IaaS stand for in the context of cloud computing?",
    answers: [
      { text: "Internet as a Service", correct: false },
      { text: "Infrastructure as a Service", correct: true },
      { text: "Integration as a Service", correct: false },
      { text: "Information as a Service", correct: false }
    ]
  },
  {
    question: "What is the purpose of the chmod command in Unix/Linux?",
    answers: [
      { text: "Change system time", correct: false },
      { text: "Change file permissions", correct: true },
      { text: "Change the owner of a file", correct: false },
      { text: "Change the file extension", correct: false }
    ]
  },
  {
    question: "Which programming language is commonly used for developing Android applications?",
    answers: [
      { text: "Java", correct: true },
      { text: "Swift", correct: false },
      { text: "Objective-C", correct: false },
      { text: "C#", correct: false }
    ]
  },
  {
    question: "What is the time complexity of searching for an element in a binary search tree (BST) with n nodes?",
    answers: [
      { text: "O(1)", correct: false },
      { text: "O(n)", correct: false },
      { text: "O(n log n)", correct: false },
      { text: "O(log n)", correct: true }
    ]
  },
  {
    question: "What is the purpose of the Git version control system?",
    answers: [
      { text: "Manage and track changes in source code", correct: true },
      { text: "Create graphical user interfaces", correct: false },
      { text: "Monitor system performance", correct: false },
      { text: "Design user interfaces", correct: false }
    ]
  }
];
const questionText = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");
let currentQuestionIndex = 0;
let score = 0;
function startQuiz() {
  currentQuestionIndex = 0;
  score = 0;
  nextButton.textContent = "Next";
  showQuestion();
}
function showQuestion() {
  resetState();
  let currentQuestion = questions[currentQuestionIndex];
  questionText.textContent = (currentQuestionIndex + 1) + ". " + currentQuestion.question;
  for (let i = 0; i < currentQuestion.answers.length; i++) {
    let answer = currentQuestion.answers[i];
    let button = document.createElement("button");
    button.textContent = answer.text;
    button.className = "btn";
    if (answer.correct) {
      button.dataset.correct = "true";
    }
    button.onclick = selectAnswer;
    answerButtons.appendChild(button);
  }
}
function resetState() {
  nextButton.style.display = "none";
  answerButtons.innerHTML = "";
}
function selectAnswer(event) {
  let selectedButton = event.target;
  let isCorrect = selectedButton.dataset.correct === "true";
  if (isCorrect) {
    selectedButton.classList.add("correct");
    score++;
  } else {
    selectedButton.classList.add("incorrect");
  }
  for (let btn of answerButtons.children) {
    if (btn.dataset.correct === "true") {
      btn.classList.add("correct");
    }
    btn.disabled = true;
  }
  nextButton.style.display = "block";
}
function showScore() {
  resetState();
  questionText.textContent = "You scored " + score + " out of " + questions.length + "!";
  nextButton.textContent = "Play Again";
  nextButton.style.display = "block";
}
nextButton.onclick = function () {
  if (nextButton.textContent === "Play Again") {
    startQuiz();
  } else {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
      showQuestion();
    } else {
      showScore();
    }
  }
};
startQuiz();