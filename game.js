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
        window.location.replace("bossfight.html")


//Boss ROOM GO
    }
    

    document.onkeyup = function (event) {
        if (event.key === "w" || event.key === "a" || event.key === "d") {


            var encounter = dungeon[Math.floor(Math.random() * dungeon.length)];

            console.log(encounter);
            console.log("Food: " + food);
            var healthDiv = document.getElementById("health-text");
    healthDiv.textContent = "Health: " + health;

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
                console.log(" oH no Goblin")
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