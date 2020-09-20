class Square {
    constructor(){

        this.isBomb = Math.round(Math.random(0, 0.5)); //Crée une case avec 20% de chances qu'elle soit une bombe
        this.surroundingBombs = 0; //Permet de voir le nombre de bombes autour
        this.isClicked = false;
        this.value = null;

    }


}