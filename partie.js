class Partie {

    constructor(){

        this.enCours = true;

        this.score = 0; //Score par défaut pour une nouvelle partie

        this.terrain = new Array(25).fill().map( s => new Square()); //Crée un terrain composé de 25 bombes

        this.status = null; //Permet d'afficher le statut de la partie si elle est terminée

        this.squaresLeft = null; //Permet de savoir le nombre de cases normales restant

        this.bombCount = 0; //Permet de savoir le nombre de bombes restantes

        this.isDone = false; //Permet d'empêcher le programme de compter le nombre de bombes plus d'une fois
        
    }

    faireAction(i){ //Correspond à un clic sur une case

        if (this.enCours && !this.terrain[i].value && this.terrain[i].isClicked == false) { //Permet de vérifier si les conditions pour cliquer sont réunies

            this.terrain[i].isClicked = true;   //Rends la case cliquée

                //Permet d'afficher la valeur de la case
                if (this.terrain[i].isBomb == true) {

                    this.value = "Boom !";

                    this.isOver(i);


                } else if (this.terrain[i].isBomb == false) {

                    this.score++;   //Incrémente le score affiché dans le hud

                               

                    this.countSurroundingBombs(i);

                    this.compterBombes(i);

                    this.isWon();

                    
                }


        } 

    };

    compterBombes(i){ //Récupère le nombre de cases safe (oui le nom porte à confusion) pour vérifier si la partie est gagnée avec isWon

        var j;

        if (this.isDone == false) {

            for(j=0; j<25; j++) {

                if (this.terrain[j].isBomb==false){

                    this.bombCount++;

                    this.isDone = true;

                };

            }

        }

    }

    isOver(i){ //Termine la partie si tu clique sur une bombe

        if (this.terrain[i].isBomb == true) {

            this.enCours = false;

            this.status = "La partie est perdue ! ";

        }

    };

    isWon(i){ //Termine la partie si il n'y a plus de cases à cliquer

        if (this.score == this.bombCount) {

            this.enCours = false;

            this.status = "Vous avez gagné ! ";
        }

    }

    countSurroundingBombs(i) {  //Tout un tas de vérifications et de conditions pénibles à lire pour vérifier si le nombre de bombes autour et cliquer si c'est pas une bombe etc
      /*                          //C'est vraiment (vraiment) un calvaire à lire par contre
        if (this.terrain[i+1].isBomb==true) {

            if(i<4) {

                this.terrain[i].surroundingBombs++;
                
            } else if (i>4 && i<9) {

                this.terrain[i].surroundingBombs++;
                
            } else if (i>9 && i<14) {

                this.terrain[i].surroundingBombs++;
                
            } else if (i>14 && i<19) {

                this.terrain[i].surroundingBombs++;
                
            } else if(i>19 && i<24) {

                this.terrain[i].surroundingBombs++;
                
            } 

        } else if (this.terrain[i+1].isBomb==false) {

            if(i<4) {

                this.faireAction(i+1);
                
            } else if (i>4 && i<9) {

                this.faireAction(i+1);
                
            } else if (i>9 && i<14) {

                this.faireAction(i+1);
                
            } else if (i>14 && i<19) {

                this.faireAction(i+1);
                
            } else if(i>19 && i<24) {

                this.faireAction(i+1);
                
            } 

        }*/
/*
        if (this.terrain[i-1].isBomb==true) {

            if(i>0 && i<5) {

                this.terrain[i].surroundingBombs++;
                
            } else if (i>5 && i<10) {

                this.terrain[i].surroundingBombs++;
                
            } else if (i>10 && i<15) {

                this.terrain[i].surroundingBombs++;
                
            } else if (i>15 && i<20) {

                this.terrain[i].surroundingBombs++;
                
            } else if(i>20 && i<=24) {

                this.terrain[i].surroundingBombs++;
                
            }      

        } else if (this.terrain[i-1].isBomb==false) {

            if(i>0 & i<5) {

                this.faireAction(i-1);
                
            } else if (i>0 && i<5) {

                this.faireAction(i-1);
                
            } else if (i>5 && i<10) {

                this.faireAction(i-1);
                
            } else if (i>10 && i<15) {

                this.faireAction(i-1);
                
            } else if(i>15 && i<20) {

                this.faireAction(i-1);
                
            } 

        } */

        if (this.terrain[i-5].isBomb==true) {

            

            this.terrain[i].surroundingBombs++;

            

        } else if (this.terrain[i-5].isBomb==false) {

            
                
            this.faireAction(i-5);

            
        }

        if (this.terrain[i+5].isBomb==true) {

            

            this.terrain[i].surroundingBombs++;

            

        }   else if (this.terrain[i+5].isBomb==false) {

            

            this.faireAction(i+5);
            
            

        }
/*
        if (this.terrain[i+6].isBomb==true) {

            if(i<4) {

                this.terrain[i].surroundingBombs++;
                
            } else if (i>4 && i<9) {

                this.terrain[i].surroundingBombs++;
                
            } else if (i>9 && i<14) {

                this.terrain[i].surroundingBombs++;
                
            } else if (i>14 && i<19) {

                this.terrain[i].surroundingBombs++;
                
            } else if(i>19 && i<24) {

                this.terrain[i].surroundingBombs++;
                
            } 

        }   else if (this.terrain[i+6].isBomb==false) {

            if(i<4) {

                this.faireAction(i+6);

            } else if (i>4 && i<9) {

                this.faireAction(i+6);
                
            } else if (i>9 && i<14) {

                this.faireAction(i+6);
                
            } else if (i>14 && i<19) {

                this.faireAction(i+6);
                
            } else if(i>19 && i<24) {

                this.faireAction(i+6);
                
            } 

        }*/
/*
        if (this.terrain[i+4].isBomb==true) {

            if(i<4) {

                this.terrain[i].surroundingBombs++;
                
            } else if (i>4 && i<9) {

                this.terrain[i].surroundingBombs++;
                
            } else if (i>9 && i<14) {

                this.terrain[i].surroundingBombs++;
                
            } else if (i>14 && i<19) {

                this.terrain[i].surroundingBombs++;
                
            } else if(i>19 && i<24) {

                this.terrain[i].surroundingBombs++;
                
            }

        }   else if (this.terrain[i+4].isBomb==false) {

            if(i<4) {

                this.faireAction(i+4);
                
            } else if (i>4 && i<9) {

                this.faireAction(i+4);
                
            } else if (i>9 && i<14) {

                this.faireAction(i+4);
                
            } else if (i>14 && i<19) {

                this.faireAction(i+4);
                
            } else if(i>19 && i<24) {

                this.faireAction(i+4);
                
            }

        } */

       /* if (this.terrain[i-4].isBomb==true) {

            if(i>0 && i<5) {

                this.terrain[i].surroundingBombs++;
                
            } else if (i>5 && i<10) {

                this.terrain[i].surroundingBombs++;
                
            } else if (i>10 && i<15) {

                this.terrain[i].surroundingBombs++;
                
            } else if (i>15 && i<20) {

                this.terrain[i].surroundingBombs++;
                
            } else if(i>20) {

                this.terrain[i].surroundingBombs++;
                
            }

        }   else if (this.terrain[i-4].isBomb==false) {

            if(i>0 & i<5) {

                this.faireAction(i-4);
                
            } else if (i>0 && i<5) {

                this.faireAction(i-4);
                
            } else if (i>5 && i<10) {

                this.faireAction(i-4);
                
            } else if (i>10 && i<15) {

                this.faireAction(i-4);
                
            } else if(i>15 && i<20) {

                this.faireAction(i-4);
                
            }

        }*/
/*
        if (this.terrain[i-6].isBomb==true) {
            
            if(i<5) {

                this.terrain[i].surroundingBombs++;
                
            } else if (i>5 && i<10) {

                this.terrain[i].surroundingBombs++;
                
            } else if (i>10 && i<15) {

                this.terrain[i].surroundingBombs++;
                
            } else if (i>15 && i<20) {

                this.terrain[i].surroundingBombs++;
                
            } else if(i>20) {

                this.terrain[i].surroundingBombs++;
                
            }

        }   else if (this.terrain[i-6].isBomb==false) {

            if(i<5) {

                this.faireAction(i-6);
                
            } else if (i>5 && i<10) {

                this.faireAction(i-6);
                
            } else if (i>10 && i<15) {

                this.faireAction(i-6);
                
            } else if (i>15 && i<20) {

                this.faireAction(i-6);
                
            } else if(i>20) {

                this.faireAction(i-6);
                
            }
        }  */
    }
 }

