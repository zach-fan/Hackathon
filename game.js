var dungeon = ["Coin", "Coin", "Soup", "Meat", "Potato", "Goblin", "Skeleton", "Orc", "Snake", "Nothing"]
var coins = 0
var health = 3
var food = 5
var m = 0
<script src="http://code.jquery.com/jquery-3.3.1.js"></script>

$(document).ready(function(){
    $('body').on("keyup",'.incomplete_required', function(){
        console.log('keyed');
    });
});

    document.write("You have encountered a crossroad")
    console.log("crossroad" + m)

    document.onkeyup = function (event) {
        var keypressed = event.key;
        if (keypressed = "w") {
            document.write("Forward text")
        } else if (keypressed = "a") {
            document.write("Left text")
        } else if (keypressed = "d") {
            document.write("Right text")
        } else {

        }
        document.onkeyup = function (event) {
            if (event.key === "w" || event.key === "a" || event.key === "d") {
                food--
                var encounter = dungeon[Math.floor(Math.random() * dungeon.length)];

                console.log(encounter);
                console.log("Food: " + food);

                if (encounter = "Coin") {
                    coins++
                    m++
                    console.log("Coins: " + coins)
                };

                if (encounter === "Soup" || encounter === "Meat" || encounter === "Potato") {

                    food++
                    m++
                };

                if (encounter === "Goblin") {
                    console.log("")
                    document.onkeyup = function (event) {
                        if (event.key = "b") {
                            console.log("You defeat the foul goblin and continue on your way. Good Job!")


                        }
                        else {
                            console.log("After get absolutely trounced by the goblin you barely manage to take it down. You have lost one life.")
                            console.log("You Lost 1 Heart")
                            health--
                            document.write("Health: " + health)
                            m--



                        }
                    }
                };

                if (encounter === "Skeleton") {
                    console.log("Oh no a Skeleton, use either punch, kick, or block to beat it! Make sure you use the correct one!")
                    document.onkeyup = function (event) {
                        if (event.key = "p") {
                            console.log("Congrats you beat the Skeleton")
                            m++

                        }
                        else {
                            console.log("You Lost 1 Heart")
                            health--
                            document.write("Health: " + health)
                            m--



                        }
                    }
                };

                if (encounter === "Orc") {
                    console.log("Oh no a Orc, use either punch, kick, or block to beat it! Make sure you use the correct one!")
                    document.onkeyup = function (event) {
                        if (event.key = "k") {
                            console.log("You best the orc and after searching their pockets like a true adventurer, you move on to the next room")
                            m++

                        }
                        else {
                            console.log("After being battered by the Orc, it slips and falls. allowing you to whail on it. You lost one life.")
                            console.log("You Lost 1 Heart")
                            health--
                            document.write("Health: " + health)
                            m--



                        }
                    }
                }

                if (encounter === "Snake") {
                    console.log("Oh no a Snake, use either punch, kick, or block to beat it! Make sure you use the correct one!")
                    document.onkeyup = function (event) {
                        if (event.key = "p") {
                            console.log("After wrestling the snake and beating it to a pulp, you continue on your journey."
                        )
                            document.write("Health: " + health)
                            m++


                        }
                        else {
                            console.log("You are able to take the life of the snake, but the venom from it's bite trickles into your bloodstream and makes you lose one life.")
                            
                            console.log("You Lost 1 Heart")
                            health--
                            document.write("Health: " + health)
                            m--

                        }
                    }
                }
            }
        }
    }


//boss fight
var kpb = ["k", "p", "b"];
var compWin = 0
    
document.onkeyup = function (event){
    var userChoice = event.key;
    
        if (kpb.includes(userChoice)) {
            var compRandom = Math.floor(Math.random() * kpb.length)
            console.log(kpb[compRandom])
            computerChoice = kpb[compRandom]
    
            if(userChoice === computerChoice){
                console.log("tie" + userChoice)
                document.write("tie")
            } else if(userChoice === "p" && computerChoice === "k" || userChoice === "b" && computerChoice === "p" || userChoice === "k" && computerChoice === "b"){
                document.write ("Thats one win for the Minotaur")
                compWin++
                console.log(compWin)
            }else{
                document.write ("You won this round!")
                userWin++
                console.log (userWin)
            }
        if(compWin === 2 || userWin === 2){
            if(compWin < userWin){
                document.write(" Userwin text");
                <a href="end.html">Click Here to Leave Maze!</a>
            }else{
                document.write("userlosstext");
                <a href="end.html">Home Page</a>
            }
            
    
          }
        }
    
    }