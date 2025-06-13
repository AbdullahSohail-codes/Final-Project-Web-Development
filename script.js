const questions = [
  {
    question: "Which OSI model layer is responsible for routing and forwarding of data?",
    answers: ["Physical Layer", "Network Layer*", "Data Link Layer", "Transport Layer"]
  },
  {
    question: "In OOP, what is it called when a class has multiple methods with the same name but different parameters?",
    answers: ["Polymorphism*", "Encapsulation", "Inheritance", "Abstraction"]
  },
  {
    question: "What is the purpose of an SQL JOIN operation?",
    answers: ["Combine rows from tables based on a related column*", "Merge data from databases", "Filter rows", "Sort rows"]
  },
  {
    question: "What is a zero-day vulnerability?",
    answers: ["Known vulnerability", "Block all traffic", "Antivirus software", "Unknown security hole*"]
  },
  {
    question: "Which of these is NOT a valid MIME type for a web page?",
    answers: ["text/html", "application/json", "audio/mp3*", "image/png"]
  },
  {
    question: "What does IaaS stand for in cloud computing?",
    answers: ["Internet as a Service", "Infrastructure as a Service*", "Integration as a Service", "Information as a Service"]
  },
  {
    question: "What does the `chmod` command do in Unix/Linux?",
    answers: ["Change system time", "Change file permissions*", "Change file owner", "Change file extension"]
  },
  {
    question: "Which language is commonly used for Android development?",
    answers: ["Java*", "Swift", "Objective-C", "C#"]
  },
  {
    question: "Time complexity of searching in a BST (balanced)?",
    answers: ["O(1)", "O(n)", "O(n log n)", "O(log n)*"]
  },
  {
    question: "Purpose of Git version control?",
    answers: ["Track code changes*", "Create GUIs", "Monitor system", "Design UIs"]
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
  const currentQuestion = questions[currentQuestionIndex];
  questionText.textContent = `${currentQuestionIndex + 1}. ${currentQuestion.question}`;

  currentQuestion.answers.forEach(answer => {
    const button = document.createElement("button");
    const isCorrect = answer.trim().endsWith("*");
    button.textContent = isCorrect ? answer.slice(0, -1).trim() : answer;
    button.className = "btn";
    if (isCorrect) button.dataset.correct = "true";
    button.addEventListener("click", selectAnswer);
    answerButtons.appendChild(button);
  });
}

function resetState() {
  nextButton.style.display = "none";
  answerButtons.innerHTML = "";
}

function selectAnswer(e) {
  const selectedButton = e.target;
  const isCorrect = selectedButton.dataset.correct === "true";

  if (isCorrect) {
    selectedButton.classList.add("correct");
    score++;
  } else {
    selectedButton.classList.add("incorrect");
  }

  Array.from(answerButtons.children).forEach(button => {
    if (button.dataset.correct === "true") button.classList.add("correct");
    button.disabled = true;
  });

  nextButton.style.display = "block";
}

function showScore() {
  resetState();
  questionText.textContent = `You scored ${score} out of ${questions.length}!`;
  nextButton.textContent = "Play Again";
  nextButton.style.display = "block";
}

nextButton.addEventListener("click", () => {
  if (nextButton.textContent === "Play Again") {
    startQuiz();
  } else if (++currentQuestionIndex < questions.length) {
    showQuestion();
  } else {
    showScore();
  }
});

startQuiz();
