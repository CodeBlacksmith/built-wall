/*

Hi, i'm Ariel Bodan
I'm going to build the strongest wall of them all,
The idea is to build two patterns of rows and then construct the wall row by row,
whose size will vary according to the input data

 - It necesarry to have installed "prompt-sync"


bodanslack@gmail.com
*/

//Create a class to build wall
class Wall{
    constructor(column,rows){
        this.column = column;
        this.rows = rows;
        this.brick = "■■"; //Variables are created to symbols hold brick, half-brick, and mortar
        this.h_brick = "■";
        this.mort = "|";
        this.brick1 = Array(this.rows).fill(this.brick); //Initialized with a copy of the symbol
        this.mortero = Array(this.rows).fill(this.mort);
        this.str = [];
        this.str2 = [];
        
    }
    build(){
        for(let i = 0; i < this.rows -1; i++){
            this.str.push(this.brick1[i], this.mortero[i]); //Create a row of bricks and mortar.
        }
        let row = this.h_brick + this.mort + this.str.join("") + this.h_brick; //pattern of row
        
        for(let j = 0; j < this.rows; j++){
            this.str2.push(this.brick1[j], this.mortero[j]); //create second patter de row of bricks and mortar.
        }
        this.str2 = this.str2.slice(0, -1);
        let row2 = this.str2.join("");

        for(let k = 0; k < this.column; k++){ //Depending on the type of row, they are built on top of each other.
            const wall = this.column % 2 === 0 ? k % 2 === 0 ? row : row2 : k % 2 ===0 ? row2 : row;
            console.log(wall)
        }
    }
}
//Create a function to validate the data that will build the wall

const validatorInput = () =>{
    const prompt = require('prompt-sync')();
    const [column,rows] = prompt('built: ').split(' ').slice(0, 2).map(Number);
    if(isNaN(column) || isNaN(rows) || column <= 0 || rows <= 0){
        console.log('null');
        return null
    }else if (rows >= 100 || column >= 100){ //Validate that they are positive integer numbers and less than 100
        console.log('Naah, too much...here\'s my resignation.');
        return null
    }else {
        return[column,rows];
    }

}

//Everything is put together and the wall is built.

const input = validatorInput();
if(input){
    const wall = new Wall(...input);
    wall.build();
}
