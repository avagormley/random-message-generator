var button = $('.fortune-button');
button.on('click', selectrand);
// function doSomething () {
//   console.log ("You clicked the button")
// }

var fortunes = ["You are going to meet someone special today.",
                "One of your dreams will come true.",
                "Be patient. Everything will eventually work out.",
                "Don't let what you can't do interfere with what you can do.",
                "Success is never wondering what if.",
                "Obstacles are those frightful things you see when you take your eyes off your goals.",
                "Happiness is not a destination. It is a method of life.",
                "If it seems fates are against you today, they probably are.",
                "The fortune you seek is in another cookie.",
                "Stop procrastinating - starting tomorrow.",
                "A foolish man listens to his heart. A wise man listens to cookies.",
                "I see money in your future... It is not yours though.",
                "Next week at this time, something good is coming your way.",
                "Ignore previous cookie."]

function selectrand(){
  var randomDecimal = Math.random();
  var random = randomDecimal * fortunes.length;
  var final = Math.floor(random);

  console.log(fortunes[final]);
  document.querySelector('.fortune').innerHTML = fortunes[final];
}

//
// console.log(selectrand());
