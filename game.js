var dungeon = ["Coin", "Coin", "Soup", "Meat", "Potato", "Goblin", "Skeleton", "Witch", "Snake", "Nothing"]



document.onkeyup = function(event) {
if (event.key === "w" || event.key === "a" || event.key === "d")
{
    var encounter = dungeon [Math.floor(Math.random() * dungeon.length)];

    console.log(encounter)

}

}