 // Import the functions you need from the SDKs you need
 import { initializeApp } from "https://www.gstatic.com/firebasejs/9.16.0/firebase-app.js";
 import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.16.0/firebase-analytics.js";
 import { getDatabase,set,ref,push } from "https://www.gstatic.com/firebasejs/9.16.0/firebase-database.js";
 // TODO: Add SDKs for Firebase products that you want to use
 // https://firebase.google.com/docs/web/setup#available-libraries

 // Your web app's Firebase configuration
 // For Firebase JS SDK v7.20.0 and later, measurementId is optional
 const firebaseConfig = {
   apiKey: "AIzaSyDYYuacZwmRub07zb8XngbUBq7GKdJ-gX4",
   authDomain: "quiz-app-2e80d.firebaseapp.com",
   projectId: "quiz-app-2e80d",
   storageBucket: "quiz-app-2e80d.appspot.com",
   messagingSenderId: "889242785127",
   appId: "1:889242785127:web:58c89b62e414a6359fcbc2",
   measurementId: "G-FSRH87TWPZ"
 };

 // Initialize Firebase
 const app = initializeApp(firebaseConfig);
 const analytics = getAnalytics(app);
const database = getDatabase()

window.sendData = function () {
    var obj = {
      marks: marks,
    }
    // console.log(obj);
    const keyref = ref(database,'obj/');
    obj.id = push(keyref).key;
    console.log(obj.id)
  
    const taskref = ref(database,`obj/${obj.id}/`);
    set( taskref, obj);
  }




var questions = [
    {
        numb: 1,
        question: "What does HTML stand for?",
        answer: "Hyper Text Markup Language",
        options: [
            "Hyper Text Preprocessor",
            "Hyper Text Markup Language",
            "Hyper Text Multiple Language",
            "Hyper Tool Multi Language",
        ],
    },
    {
        numb: 2,
        question: "What does CSS stand for?",
        answer: "Cascading Style Sheet",
        options: [
            "Common Style Sheet",
            "Colorful Style Sheet",
            "Computer Style Sheet",
            "Cascading Style Sheet",
        ],
    },
    {
        numb: 3,
        question: "What does PHP stand for?",
        answer: "Hypertext Preprocessor",
        options: [
            "Hypertext Preprocessor",
            "Hypertext Programming",
            "Hypertext Preprogramming",
            "Hometext Preprocessor",
        ],
    },
    {
        numb: 4,
        question: "What does SQL stand for?",
        answer: "Structured Query Language",
        options: [
            "Stylish Question Language",
            "Stylesheet Query Language",
            "Statement Question Language",
            "Structured Query Language",
        ],
    },
    {
        numb: 5,
        question: "What does XML stand for?",
        answer: "eXtensible Markup Language",
        options: [
            "eXtensible Markup Language",
            "eXecutable Multiple Language",
            "eXTra Multi-Program Language",
            "eXamine Multiple Language",
        ],
    },

];

var question = document.getElementById("question");
var questionNum = document.getElementById("questionNum");
var ansParent = document.getElementById("ansParent");
var main = document.getElementById("main");

var indexNum = 0;
var marks = 0;

function showQuestion() {
    question.innerHTML = questions[indexNum].question;
    questionNum.innerHTML =
        "Question # " + (indexNum + 1) + "/" + questions.length;
    ansParent.innerHTML = ''
    for (var i = 0; i < questions[indexNum].options.length; i++) {
        ansParent.innerHTML += `<div class="col-md-6 py-2">
      <button onclick="checkAns ('${questions[indexNum].options[i]}','${questions[indexNum].answer}')" class="btn btn-dark   px-5 rounded-pill w-50">
      ${questions[indexNum].options[i]}
      </button>
  </div>`;
    }
}
showQuestion();

function nextQuestion() {
    indexNum++;
    showQuestion();
}

window.checkAns =function (a, b) {
    if (a == b) {
        marks++;
    }
    if (indexNum + 1 == questions.length) {
        main.innerHTML = `<h1 class='text-white marks'> YOUR MARKS IS ${marks} </h1>, <button onclick="sendData()" class=" mt-3 btn btn-success px-5 text rounded-pill text-white">
        Send</button>`
    }
    else {

        nextQuestion();
    }
}