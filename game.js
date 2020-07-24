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
    if (health < 0 || food < 0) {
        alert("You Lose, Click End Game Button To Return Home")
        window.location.replace("index.html")
    }


if (m >= 10) {
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
        foodDiv.textContent = "Food: " + food;
        var coinDiv = document.getElementById("coin-text");
        coinDiv.textContent = "Coins: " + coins;
        var encounterDiv = document.getElementById("encounter-text");
        encounterDiv.textContent = "You Encounter A " + encounter;
        
        
        
        

        if (encounter === "Coin") {
            coins++
            m++
            console.log("Coins: " + coins)
            startGame()

        };
        if (encounter === "Nothing") {
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

           var monsterDiv = document.getElementById("monster-encounter");
        monsterDiv.textContent = "As you pass through the dungeon, you smell an awful stench. You slink closer only to find a solitary goblin finishing up a drum stick. when he sees you throws it aside and prepares to make your bones into plaster."
            document.onkeyup = function (event) {
                var keyCode = (event).keyCode

                if (keyCode === 66) {
                    monsterDiv.textContent = "You defeat the foul goblin and continue on your way. Good Job!"
                    m++
                    startGame()





                }


                else {
                    console.log("After get absolutely trounced by the goblin you barely manage to take it down. You have lost one life.")
                    var loseDiv = document.getElementById("lose-heart");
            loseDiv.textContent = "You Lost 1 Heart"
                    health--

                    m++
                    startGame()
                }
            }





        }



        if (encounter === "Skeleton") {
            var monsterDiv = document.getElementById("monster-encounter");
        monsterDiv.textContent = "You run into a room that looks like the kind of crypt that you imagine being in the basement of a chapel. That is, not including the skeleton shambling over trying to kill you."
            document.onkeyup = function (event) {
                var keyCode = (event).keyCode

                if (keyCode === 80) {
                    monsterDiv.textContent = "you breakk apart its bones and then stomp them into dust."
                    m++

                    startGame()


                }
                else {
                    var loseDiv = document.getElementById("lose-heart");
            loseDiv.textContent = "You Lost 1 Heart"
                    health--
                    monsterDiv.textContent = "The skeleton knocks you into a wall and then cracks your skull, but before it can finish you off, the bones turn to dust because they were so brittle."
                    m++
                    startGame()


                }
            }
        }



        if (encounter === "Orc") {
            var monsterDiv = document.getElementById("monster-encounter");
            monsterDiv.textContent = "An earth-shattering roar splits your eardrums as an orc barricades your path. You sigh and prepare for a battle."
           
            document.onkeyup = function (event) {
                var keyCode = (event).keyCode
                if (keyCode === 75) {
                    monsterDiv.textContent =  "You best the orc and after searching their pockets like a true adventurer, you move on to the next room"
                    m++
                    startGame()
                }
                else {
                    monsterDiv.textContent = "After being battered by the Orc, it slips and falls. allowing you to whail on it. You lost one life."
                    var loseDiv = document.getElementById("lose-heart");
            loseDiv.textContent = "You Lost 1 Heart"
                    health--

                    m++
                    startGame()


                }
            }
        }


        if (encounter === "Snake") {
            var monsterDiv = document.getElementById("monster-encounter");
            monsterDiv.textContent ="You are crossing into the next when you hear a rattle. You try to run but the snake that was in the room follows you and prepares to pump your blood so full of venom that it will be classified as a biohazard postmortem."
        
            document.onkeyup = function (event) {
                var keyCode = (event).keyCode

                if (keyCode === 80) {
                    monsterDiv.textContent ="After wrestling the snake and beating it to a pulp, you continue on your journey."
                   

                    m++
                    startGame()





                }
                else {
                    monsterDiv.textContent = "You are able to take the life of the snake, but the venom from it's bite trickles into your bloodstream"

                    var loseDiv = document.getElementById("lose-heart");
            loseDiv.textContent = "You Lost 1 Heart"
                    health--


                    m++
                }
                    startGame()

                }
            }
        }

    }
}












startGame()
