//Class Ball
class Ball {
    constructor(radius, position) { 
        this.radius = radius;
        this.position = position; //[x, y]
        this.canvas = document.querySelector('canvas');
        this.context = this.canvas.getContext('2d');
        this.speed = 5;
        this.directionX = 1;
        this.directionY = 1;
    }

    renderBall(context) {
        // context.scale(10, 10); //make the ball bigger
        context.beginPath();
        context.arc(this.position[0], this.position[1], this.radius, 0, 2 * Math.PI, false);
        context.fillStyle = 'pink';
        context.fill();
    }

    move() {

        const canvasWidth = this.canvas.clientWidth;
        const canvasHeight = this.canvas.clientHeight;

        this.position[0] += this.speed * this.directionX; //x
        this.position[1] += this.speed * this.directionY; //Y

        if ( this.position[0] + this.radius >= canvasWidth || this.position[0] - this.radius <= 0 ) {
            this.directionX *= -1;
        } 

        if ( this.position[1] + this.radius >= canvasHeight || this.position[1] - this.radius <= 0 ) {
            this.directionY *= -1;
        }
    }
} 

//Class Paddle

class Paddle {
    constructor (paddlePosition, upKey, downKey) { // expecting an array [x, y]
        this.paddlePosition = paddlePosition; // upper-left corner of the rectangle
        this.upKey = upKey;
        this.downKey = downKey;
    }

    renderPaddle(context, width, height) {
        context.fillRect(this.paddlePosition[0], this.paddlePosition[1], width, height);
        context.fillStyle = 'white';
        context.fill();
        this.height = height;
        this.width = width;
    }

    moveDown(canvas) {
        document.addEventListener('keydown', event => {
            if ( this.paddlePosition[1] + 110 <= canvas.clientHeight && event.key === this.downKey) {
                this.paddlePosition[1] += 0.1;
            } 
        });
    }

    moveUp(canvas) {
        document.addEventListener('keydown', event => {
            if ( this.paddlePosition[1] >= 10 && event.key === this.upKey) {
                this.paddlePosition[1] -= 0.1;
            } 
        });
    }
}