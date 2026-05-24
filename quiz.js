function startQuiz() {
  let name1 = prompt("Enter Your Name");
  let ID = prompt("Enter Your ID");
  let quiz = [
    {
      question: "What do we use to get input values from a user?",
      options: {
        A: "alert",
        B: "const",
        C: "prompt",
      },
      answer: "C",
    },
    {
      question: "We use what for variable declaration in Python?",
      options: {
        A: "Const",
        B: "let",
        C: "All the above",
      },
      answer: "C",
    },
    {
      question:
        "What will be the output of the Python code?\nnum = 10\nprint(num > 10)",
      options: {
        A: "True",
        B: "False",
        C: "All the above",
      },
      answer: "B",
    },
    {
      question: "What does the '==' operator do in JavaScript?",
      options: {
        A: "Checks for strict equality (value and type)",
        B: "Checks for equality of value only",
        C: "Checks for inequality",
      },
      answer: "B",
    },
    {
      question: "What does the '!=' operator do in JavaScript?",
      options: {
        A: "Checks for strict inequality (value and type)",
        B: "Checks for inequality of value only",
        C: "Checks for equality",
      },
      answer: "B",
    },
    {
      question: "What does the '>=' operator do in JavaScript?",
      options: {
        A: "Checks if a value is greater than or equal to another",
        B: "Checks if a value is less than or equal to another",
        C: "Checks for strict equality",
      },
      answer: "A",
    },
    {
      question: "If num = 10, what is the output of console.log(num != 5)?",
      options: {
        A: "True",
        B: "Error",
        C: "False",
      },
      answer: "A",
    },
    {
      question: "func = Math.min(3.4,5.0,0.7,3.44,1.2);",
      options: {
        A: "1.2",
        B: "3.4",
        C: "0.7",
      },
      answer: "C",
    },
    {
      question:
        "What is the result of this JavaScript code?\nlet number = 10 > 20 || 5 < 8",
      options: {
        A: "Error",
        B: "True",
        C: "False",
      },
      answer: "B",
    },
    {
      question:
        "What is the correct syntax for a basic for loop in JavaScript?",
      options: {
        A: "for (i = 0; i < 5; i++)",
        B: "loop (i = 0; i < 5; i++)",
        C: "for i = 0 to 5",
      },
      answer: "A",
    },
    {
      question: "  months_31 : (January,march,February,July) except ",
      options: {
        A: "march",
        B: "febRUARY",
        C: "February",
      },
      answer: "C",
    },
    {
      question: "Can a for loop contain another for loop inside it?",
      options: {
        A: "Yes, it's called a nested loop",
        B: "No, it's not allowed",
        C: "Only if the loops have the same condition",
      },
      answer: "A",
    },
  ];
  let userquizscore = 0;

  for (let i = 0; i < quiz.length; i++) {
    let quiz_question = quiz[i];

    let questionAbout =
      `${i + 1}. ${quiz_question.question}\n` +
      `A: ${quiz_question.options.A}\n` +
      `B: ${quiz_question.options.B}\n` +
      `C: ${quiz_question.options.C}`;

    let userAnswerchoosed = prompt(questionAbout);

    if (userAnswerchoosed) {
      userAnswerchoosed = userAnswerchoosed.toUpperCase();

      if (["A", "B", "C"].includes(userAnswerchoosed)) {
        if (userAnswerchoosed === quiz_question.answer) {
          alert("Answer is Correct!!");
          userquizscore++;
        } else {
          alert(`You're wrong. ${quiz_question.answer} is the right answer.`);
        }
      }
    }
  }
  alert(
    `Well done ${name1} You scored ${userquizscore} out of ${quiz.length} Correct.`
  );
  let resultscore = userquizscore;
  let resultotal = quiz.length;
  let totalgrade = (userquizscore / quiz.length) * 100 ;
  let percentage = Math.ceil(totalgrade);
  alert(`${name1} you scored: ${percentage}%`);
}
