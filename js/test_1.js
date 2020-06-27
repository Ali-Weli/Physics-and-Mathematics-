// ask the user to put his/her name
//var name = window.prompt("Enter your name: ");
//alert("Your name is " + name);

// multiple choice question

var questions = [
     {
           prompt: "1. which colour apples are?\n(a) Red/Green\n\ (b) Purple\n(c) Orange",
           answer: "a"
     },
     {
          prompt: "2. What color are Bananas?\n(a) Teal\n\ (b) Magenta\n(c) Yellow",
          answer: "c"
     },
	 {
          prompt: "3. three is bigger than one?\n(a) True\n\ (b) False\n(c) NO idea",
          answer: "a"
     },


     {
          prompt: "4. What color are strawberries?\n(a) Yellow\n\ (b) Red\n(c) Blue",
          answer: "b"
     }
];
var score = 0;

for(var i = 0; i < questions.length; i++){
     var response = window.prompt(questions[i].prompt);
     if(response == questions[i].answer){
          score++;
          alert("Correct!");
     } else {
          alert("WRONG!");
     }
}
alert("you got " + score + "/" + questions.length);
alert("solutions:\n\ 1. apples are red and green,\n\ 2. Bananas are\
     yellow , \n\ 3. ddddd ,\n\ 4. eeee");
