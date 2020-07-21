var dungeon = ["Coin", "Coin", "Soup", "Meat", "Potato", "Goblin", "Skeleton", "Orc", "Snake", "Nothing"]
var coins = 0
var health = 3
var food = 5
var m = 0



while (m < 10, food > 0, health > 0) {
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
                            console.log("Congrats you beat the Goblin")
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

}