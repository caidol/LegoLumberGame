class Person {
    constructor(canvas) {
        this.canvas = canvas;
        this.ctx = canvas.getContext('2d');
        this.characterPosition = "right";
        this.characterPositions = {
            left: {
                x: canvas.width/2-260,
                y: canvas.height-350,
            },
            right: {
                x: canvas.width/2+60,
                y: canvas.height-350,
            }
        }
        this.characterWidth = 204;
        this.characterHeight = 200;
    }
    draw() {
        let character = new Image();
        character.src = "images/legoMan.png";

        let characterPosition = this.characterPositions[this.characterPosition]
        this.ctx.drawImage(character, 0, 0, character.width, character.height, characterPosition.x, characterPosition.y, this.characterWidth,this.characterHeight)
    }   
}