var dungeon = ["Coin", "Coin", "Soup", "Meat", "Potato", "Goblin", "Skeleton", "Orc", "Snake", "Nothing"]
var coins = 0
var health = 3
var food = 6
var m = 0



addEventListener("keydown", function (e) {
    var keyCode = e.keyCode

    if (keyCode === 65) {
        var targetDiv = document.getElementById("move-text");
        targetDiv.textContent = "Move Left";
        food--

    }

    if (keyCode === 68) {
        var targetDiv = document.getElementById("move-text");
        targetDiv.textContent = "Move Right";
        food--

    }

    if (keyCode === 87) {
        var targetDiv = document.getElementById("move-text");
        targetDiv.textContent = "Move Forward";
        food--

    }

}

);











function startGame() {
    if (health <= 0 || food <= 0) {
        alert("You Lose, Click End Game Button To Return Home")
        window.location.replace("index.html")
        }

    }
    if (m >= 10){
        alert("You're Going to Boss Room")
        window.location.replace("Bossfight.html")


//Boss ROOM GO
    }
    

    document.onkeyup = function (event) {
        if (event.key === "w" || event.key === "a" || event.key === "d") {


            var encounter = dungeon[Math.floor(Math.random() * dungeon.length)];

            console.log(encounter);
            console.log("Food: " + food);
            var healthDiv = document.getElementById("health-text");
    healthDiv.textContent = "Health: " + health;
    var foodDiv = document.getElementById("food-text");
    healthDiv.textContent = "Food: " + food;

            if (encounter === "Coin") {
                coins++
                m++
                console.log("Coins: " + coins)
                startGame()

            };
            if (encounter === "Nothing"){
                m++
                startGame()
            }

            if (encounter === "Soup" || encounter === "Meat" || encounter === "Potato") {

                food++
                food++
                m++
                startGame()
            };


            if (encounter === "Goblin") {
                console.log(" As you pass through the dungeon, you smell an awful stench. You slink closer only to find a solitary goblin finishing up a drum stick. when he sees you throws it aside and prepares to make your bones into plaster.")
                document.onkeyup = function (event) {
                    var keyCode = (event).keyCode

                    if (keyCode === 66) {
                        console.log("You defeat the foul goblin and continue on your way. Good Job!")
                        m++
                        startGame()





                    }


                    else {
                        console.log("After get absolutely trounced by the goblin you barely manage to take it down. You have lost one life.")
                        console.log("You Lost 1 Heart")
                        health--
                        
                        m++
                        startGame()
                    }
                }





            }



            if (encounter === "Skeleton") {
                console.log("Oh no a Skeleton, use either punch, kick, or block to beat it! Make sure you use the correct one!")
                document.onkeyup = function (event) {
                    var keyCode = (event).keyCode

                    if (keyCode === 80) {
                        console.log("you breakk apart its bones and then stomp them into dust.")
                        m++

                        startGame()


                    }
                    else {
                        console.log("You Lost 1 Heart")
                        health--
                       
                        m++
                        startGame()


                    }
                }
            }



            if (encounter === "Orc") {
                console.log("Oh no a Orc, use either punch, kick, or block to beat it! Make sure you use the correct one!")
                document.onkeyup = function (event) {
                    var keyCode = (event).keyCode
                    if (keyCode === 75) {
                        console.log("You best the orc and after searching their pockets like a true adventurer, you move on to the next room")
                        m++
                        startGame()
                    }
                    else {
                        console.log("After being battered by the Orc, it slips and falls. allowing you to whail on it. You lost one life.")
                        console.log("You Lost 1 Heart")
                        health--
                       
                        m++
                        startGame()


                    }
                }
            }


            if (encounter === "Snake") {
                console.log("Oh no a Snake, use either punch, kick, or block to beat it! Make sure you use the correct one!")
                document.onkeyup = function (event) {
                    var keyCode = (event).keyCode

                    if (keyCode === 80) {
                        console.log("After wrestling the snake and beating it to a pulp, you continue on your journey."
                        )

                        m++
                        startGame()





                    }
                    else {
                        console.log("You are able to take the life of the snake, but the venom from it's bite trickles into your bloodstream and makes you lose one life.")

                        console.log("You Lost 1 Heart")
                        health--
                      

                        m++
                        startGame()

                    }
                }
            }

        }
    }












startGame()
//boss fight
var kpb = ["k", "p", "b"];
var compWin = 0;
var userWin = 0;
document.write("As you approach the final room, your nose is assailed by the stench exuding from the bodies of the past adventurers. You steeel yourself for the battle to come. You enter into what looks like an arena, and opposite you is a hulking slab of meat that ould only be the minotaur. You know that it is your duty and your honor to face this monstrosity, to avenge your fallen comrades and to complete this game. Realizing that this is it, you brace yourself as the Minotaur charges.")
    
document.onkeyup = function(event){
    var userChoice = event.key;
            var computerChoice = kpb[Math.floor(Math.random() * kpb.length)];
            console.log(computerChoice);
        if (kpb.includes(userChoice)) {
            if(userChoice === computerChoice){
                console.log("tie" + userChoice);
                document.write("You and the Minotaur chose the same move. Its a tie!");
            } else if(userChoice === "p" && computerChoice === "k" || userChoice === "b" && computerChoice === "p" || userChoice === "k" && computerChoice === "b"){
                document.write ("Thats one win for the Minotaur")
                compWin++
                console.log("lose" + userChoice);
            }else{
                document.write ("You won this round!")
                userWin++
                console.log ("win" + userChoice);
            }
            if(compWin < userWin){
                var escape = true;
                var fail = false;
               alert(" Congratulations You Beat the Minotaur! Click on the button to exit the Maze");
                if (escape === true){
                    document.getElementById("end_button").style.display="block";
                    document.getElementById("try_again").style.display="none";
                } 
                
            }else{
                alert("Unfortunately you did not beat the Minotaur and died. Click the button to try again");
                fail = true;
                escape = false;
                if(fail === true){
                    document.getElementById("try_again").style.display="block";
                    document.getElementById("end_button").style.display="none";
                } 
                
            }
            function end() {
                location.href = "end.html"
              }
              function restart() {
                location.href = "game.html";
              }
          }
        }

