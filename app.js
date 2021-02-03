//Class Game

class Game { 
    constructor() {
        this.canvas = document.querySelector('canvas');
        this.context = this.canvas.getContext('2d');
        this.ball = new Ball (10, [10, 10]);
        this.paddleLeft = new Paddle ([10, 10], 'w', 's');
        this.paddleRight = new Paddle ([this.canvas.clientWidth-20, 10], 'o', 'l');
    }

    resetCanvas() {
        this.context.fillStyle = 'black';
        this.context.fillRect(0, 0, this.canvas.clientWidth, this.canvas.clientHeight);
    }

    checkCollisions() {

    }

    play() {
        setInterval(() => {
            this.resetCanvas();
            this.ball.renderBall(this.context);
            this.ball.move();
            this.paddleLeft.renderPaddle(this.context);
            this.paddleRight.renderPaddle(this.context);
            this.paddleLeft.moveUp(this.canvas);
            this.paddleLeft.moveDown(this.canvas);
            this.paddleRight.moveUp(this.canvas);
            this.paddleRight.moveDown(this.canvas);
            this.checkCollisions();
        },17);
    }
}


var game = new Game();
game.play();


// ball and paddle colors switch???
// the paddles move faster and faster