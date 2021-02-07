//Class Game

class Game { 
    constructor() {
        this.canvas = document.querySelector('canvas');
        this.context = this.canvas.getContext('2d');
        this.ball = new Ball (10, [50, 50]);
        this.paddleLeft = new Paddle ([10, 10], 'w', 's');
        this.paddleRight = new Paddle ([this.canvas.clientWidth-20, 10], 'o', 'l');
    }

    resetCanvas() {
        this.context.fillStyle = 'black';
        this.context.fillRect(0, 0, this.canvas.clientWidth, this.canvas.clientHeight);
    }

    checkCollisions() {
        const ballX = this.ball.position[0];
        const ballY = this.ball.position[1];
        const ballRadius = this.ball.radius;
        const paddleLeftX = this.paddleLeft.paddlePosition[0];
        const paddleLeftY = this.paddleLeft.paddlePosition[1];
        const paddleRightX = this.paddleRight.paddlePosition[0];
        const paddleRightY = this.paddleRight.paddlePosition[1];
        const paddleLeftWidth = this.paddleLeft.width;
        const paddleLeftHeight = this.paddleLeft.height;
        const paddleRightHeight = this.paddleRight.height;
        if( ballX + ballRadius >= paddleRightX && ballY >= paddleRightY && ballY <= paddleRightY + paddleRightHeight ) { //touch padding on the right
            console.log('touching padding on the right');
            this.ball.directionX *= -1;
        } else if ( ballX - ballRadius <= paddleLeftX + paddleLeftWidth && ballY >= paddleLeftY && ballY <= paddleLeftY + paddleLeftHeight) {
            console.log('touching padding on the left');
            this.ball.directionX *= -1;
        }
    }

    play() {
        setInterval(() => {
            this.resetCanvas();
            this.ball.renderBall(this.context);
            this.ball.move();
            this.paddleLeft.renderPaddle(this.context, 10, 100);
            this.paddleRight.renderPaddle(this.context, 10, 100);
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