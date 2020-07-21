var dungeon = ["Coin", "Coin", "Soup", "Meat", "Potato", "Goblin", "Skeleton", "Witch", "Snake", "Nothing"]
var coins = 0
var health = 3
var food = 5




for (var m= 0; m < 10; m++){
    document.write()
    console.log("crossroad" + m)

    document.onkeyup = function (event){
        var keypressed = event.key;
        if(keypressed = "w"){
            document.write("Forward text")
        }else if(keypressed = "a"){
            document. write("Left text")
        }else if(keypressed = "d"){
            document.write("Right text")
        }else{

        }
        document.onkeyup = function(event) {
        if (event.key === "w" || event.key === "a" || event.key === "d")
{
    var encounter = dungeon [Math.floor(Math.random() * dungeon.length)];

    console.log(encounter)

}
    }

}