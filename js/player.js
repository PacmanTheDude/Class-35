class Player {
    constructor() {

    }
    getCount() {
        var playerCountref = database.ref("playerCount");
        playerCountref.on("value",function(data) {
            playerCount = data.val();
        })
    }
    updatecount(count) {
        database.ref("/").update({
            playerCount: count,
        });
    }
    update(Name) {
        var playerIndex = "player"+playerCount;
        database.ref(playerIndex).set({
            Name: Name,
        }); 
    }
}
