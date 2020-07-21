var dungeon = ["Coin", "Coin", "Soup", "Meat", "Potato", "Goblin", "Skeleton", "Orc", "Snake", "Nothing"]
var coins = 0
var health = 3
var food = 5




for (var m = 0; m < 10; m++) {
    document.write()
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
                    console.log("Coins: " + coins)
                };

                if (encounter === "Soup" || encounter === "Meat" || encounter === "Potato") {

                    food++
                };

                if (encounter === "Goblin") {
                    console.log("Oh no a Golbin, use either punch, kick, or block to beat it! Make sure you use the correct one!")
                    document.onkeyup = function (event) {
                        if (event.key = "b") {
                            console.log("Congrats you beat the Goblin")


                        }
                        else {
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
                            console.log("Congrats you beat the Goblin")


                        }
                        else {
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
                            console.log("Congrats you beat the Goblin")
                            document.write("Health: " + health)



                        }
                        else {
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