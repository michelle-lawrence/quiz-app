"use strict";

var Quiz = {
	score: 0,
	questions: []
};
var Question = {
	question: "",
	answer: "",
	answerOptions: [],
	answerIndex: 0
};
var gameQuiz;
var currentQuestion = 1;

$(document).ready(function(){
	fillObjects();
	$("#start-game").focus();

	$("#start-game").click(function(event){
		$("#start-screen").hide();
		$("#end-game").hide();
		$("#game").show();

		currentQuestion = 1;
		gameQuiz.score = 0;
		takeTurn();
	});

	$("#new-game").click(function(event){
		$("#start-screen").show();
		$("#game").hide();
		$("#end-game").hide();
	});

	$("div#answer-list").on("click", "button", function(event){
		var answer = $(this).closest("button").text();
		var currentQuesObj = gameQuiz.questions[currentQuestion - 1];
		var correctAnswer = currentQuesObj.answerOptions[currentQuesObj.answerIndex];
		if (answer == correctAnswer) {
			gameQuiz.score++;
			$("#score").text(gameQuiz.score);
			$("#revealed").text("It's " + answer + "!");
			$(this).closest("button").css("background", "#5bd75b");
		}
		else {
			$("#revealed").text("Sorry! It's " + correctAnswer + ".");
			$(this).closest("button").css({
				'background': '#ed5f6a',
				'color':'#fff'
			});
			$("#choice" + (currentQuesObj.answerIndex + 1)).css({
				'background': '#5bd75b',
				'color': '#dc1613'
			});
		}
		$("#revealed").show();
		document.getElementById("pokemon").src = currentQuesObj.answer;

		document.getElementById("nextQ").disabled = false;
		$("#nextQ").focus();
	});

	$("#nextQ").click(function(){
		currentQuestion++;
		takeTurn();
	});
});

function takeTurn(){
	quizQuesReset();
	$("#choice1").focus();

	if (currentQuestion > 10){
		$("#finalScore").text(gameQuiz.score);
		$(".game").hide();
		$(".end-game").show();
	}
	else {
		$("#score").text(gameQuiz.score);
		$("#current-question").text(currentQuestion);
		var currentQuesObj = gameQuiz.questions[currentQuestion - 1];
		document.getElementById("pokemon").src = currentQuesObj.question;
		$("#choice1").text(currentQuesObj.answerOptions[0]);
		$("#choice2").text(currentQuesObj.answerOptions[1]);
		$("#choice3").text(currentQuesObj.answerOptions[2]);
		$("#choice4").text(currentQuesObj.answerOptions[3]);
	}
};

function quizQuesReset() {
	$("#revealed").hide();
	document.getElementById("nextQ").disabled = true;

 	var answerList = document.getElementById("answer-list");
	var answers = answerList.getElementsByTagName("button");
	for (var i = 0; i < answers.length; ++i) {
		$("#choice" + (i+1)).css({
				'background': '#0d5279',
				'color': '#dc1613'
			});
	}
	document.getElementById("choice1").focus();
};


function fillObjects() {
	var question1 = Object.create(Question);
	question1.question = "images/caterpie_silhouette.png";
	question1.answer = "images/caterpie.png";
	question1.answerOptions = ["Weedle", "Ekans", "Caterpie", "Dragonair"];
	question1.answerIndex = 2;

	var question2 = Object.create(Question);
	question2.question = "images/charizard_silhouette.png";
	question2.answer = "images/charizard.png";
	question2.answerOptions = ["Machop", "Charizard", "Articuno", "Fearow"];
	question2.answerIndex = 1;

	var question3 = Object.create(Question);
	question3.question = "images/ditto_silhouette.png";
	question3.answer = "images/ditto.png";
	question3.answerOptions = ["Ditto", "Muk", "Starmie", "Snorlax"];
	question3.answerIndex = 0;

	var question4 = Object.create(Question);
	question4.question = "images/exeggutor_silhouette.png";
	question4.answer = "images/exeggutor.png";
	question4.answerOptions = ["Tangela", "Bellsprout", "Vileplume", "Exeggutor"];
	question4.answerIndex = 3;

	var question5 = Object.create(Question);
	question5.question = "images/jigglypuff_silhouette.png";
	question5.answer = "images/jigglypuff.png";
	question5.answerOptions = ["Voltorb", "Jigglypuff", "Clefairy", "Poliwag"];
	question5.answerIndex = 1;

	var question6 = Object.create(Question);
	question6.question = "images/koffing_silhouette.png";
	question6.answer = "images/koffing.png";
	question6.answerOptions = ["Koffing", "Ghastly", "Tangela", "Cloyster"];
	question6.answerIndex = 0;

	var question7 = Object.create(Question);
	question7.question = "images/onix_silhouette.png";
	question7.answer = "images/onix.png";
	question7.answerOptions = ["Arbok", "Onix", "Dragonair", "Bellsprout"];
	question7.answerIndex = 1;

	var question8 = Object.create(Question);
	question8.question = "images/vaporeon_silhouette.png";
	question8.answer = "images/vaporeon.png";
	question8.answerOptions = ["Jolteon", "Haunter", "Gyarados", "Vaporeon"];
	question8.answerIndex = 3;

	var question9 = Object.create(Question);
	question9.question = "images/vulpix_silhouette.png";
	question9.answer = "images/vulpix.png";
	question9.answerOptions = ["Vulpix", "Rattata", "Sandshrew", "Meowth"];
	question9.answerIndex = 0;

	var question10 = Object.create(Question);
	question10.question = "images/pikachu_silhouette.png";
	question10.answer = "images/pikachu.png";
	question10.answerOptions = ["Wigglytuff", "Raticate", "Pikachu", "Eevee"];
	question10.answerIndex = 2;

	gameQuiz = Object.create(Quiz);
	gameQuiz.questions = [question1, question2, question3, question4, question5, 
							question6, question7, question8, question9, question10];
};






