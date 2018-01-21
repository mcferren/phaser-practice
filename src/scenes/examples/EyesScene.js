import Cornea from '../../sprites/Cornea';

class EyesScene extends Phaser.Scene {
    constructor() {

        super({
            key: 'EyesScene'
        });
    }

    create() {

        this.left           = new Phaser.Geom.Circle(200, 400, 60);
        this.right          = new Phaser.Geom.Circle(600, 400, 60);
        this.leftTarget     = new Phaser.Geom.Line(this.left.x, this.left.y, 0, 0);
        this.rightTarget    = new Phaser.Geom.Line(this.right.x, this.right.y, 0, 0);
        this.leftSocket     = new Phaser.Geom.Circle(200, 300, 100);
        this.rightSocket    = new Phaser.Geom.Circle(600, 300, 100);
        this.rimLeft        = new Phaser.Geom.Circle(200, 300, 160);
        this.rimRight       = new Phaser.Geom.Circle(600, 300, 160);
        this.debugMarker    = new Phaser.Geom.Circle(5, 5, 20);


        this.frash = this.add.graphics();
        this.frash.fillStyle(2,0Xfd9720)
        this.mash = this.add.graphics();
        this.mash.fillStyle(2, 0x00ff00);
        this.sockets = this.add.graphics({ lineStyle: { width: 2, color: 0x00ffff } });
        this.sockets.fillStyle(0xffffff);
        this.graphics = this.add.graphics();
        this.graphics.lineStyle(2, 0x00ff00);
      
//       this.sockets.strokeEllipseShape(this.leftSocket, 64);
//       this.sockets.strokeEllipseShape(this.rightSocket, 64);
        this.sockets.fillCircleShape(this.leftSocket);
        this.sockets.fillCircleShape(this.rightSocket);

        this.mash.fillCircleShape(this.rimLeft);
        this.mash.fillCircleShape(this.rimRight);


        this.frash.fillCircleShape(this.debugMarker);

        this.balls = this.add.graphics({ lineStyle: { width: 2, color: 0x00ff00 } });
        this.balls.fillStyle(0x000000);

        var that = this;

        this.input.events.on('POINTER_MOVE_EVENT', function (event) {

            that.balls.clear();
            that.graphics.clear();

            if (that.leftSocket.contains(event.x, event.y)) { // inside big circle 

                that.leftTarget.x2 = event.x;
                that.leftTarget.y2 = event.y;

                if( !that.isIntersection( that.leftSocket, that.left ) ) { // ball over bleeding edge
                    console.log("INSIDE")
                }


                if( that.isIntersection( that.leftSocket, that.left ) ) { // ball over bleeding edge
                    console.log("OUTSIDE")
                }

                    that.leftTarget.x1 = event.x;
                    that.leftTarget.y1 = event.y;
                    that.left.x = event.x;
                    that.left.y = event.y;

            // } else if ( !that.isIntersection( that.leftSocket, that.left )) {

            } else {
    
                that.leftTarget.x1 = that.left.x;
                that.leftTarget.y1 = that.left.y;
                that.leftTarget.x2 = event.x;
                that.leftTarget.y2 = event.y;
            }

            if (that.rightSocket.contains(event.x, event.y)) { // inside big circle

                // if( that.isIntersection( that.rightSocket, that.right ) ) { // ball over bleeding edge

                    that.rightTarget.x1 = event.x;
                    that.rightTarget.y1 = event.y;
                    that.rightTarget.x2 = event.x;
                    that.rightTarget.y2 = event.y;
                    that.right.x = event.x;
                    that.right.y = event.y;
                // }

            } else {

                that.rightTarget.x1 = that.right.x;
                that.rightTarget.y1 = that.right.y;
                that.rightTarget.x2 = event.x;
                that.rightTarget.y2 = event.y;
            }


            that.graphics.lineStyle(2, 0x00ff00);
            that.balls.strokeCircleShape(that.left);
            that.balls.strokeCircleShape(that.right);
            that.graphics.strokeLineShape(that.leftTarget);
            that.graphics.strokeLineShape(that.rightTarget);
        });

        this.input.events.on('POINTER_UP_EVENT', function (event) {

             that.touchLeft(that.leftSocket, that.left);


             console.log("humbleBUMBLE", that.isIntersection( that.leftSocket, that.left ) );

             // console.log("BONG", Phaser.Geom.Intersects.CircleToCircle(that.leftSocket, that.left));


//           console.log("contains left", that.leftSocket.contains(event.x, event.y));
// //           console.log("contains left", that.leftSocket.contains(that.leftTarget.x1, that.leftTarget.y1));
//           console.log("contains lefter", that.leftSocket);
// //           console.log("CONTAINSPOINT" Phaser.Geom.Circle.ContainsPoint(that.leftSocket, that.leftTarget))
//           console.log("contains that.leftTarget.angle", that.leftTarget.angle);
//           console.log("contains that.leftTarget", that.leftTarget);
//           console.log("contains event.x", event.x);
//           console.log("contains event.y", event.y);
        });
    }

    isIntersection( big, little) {

        if( big.radius < 0 || little.radius < 0 ) return;

        var c = Math.sqrt( ( big.x - little.x ) * ( big.x - little.x ) + ( big.y - little.y ) * ( big.y - little.y ) );
        var A = Math.acos( (big.radius * big.radius + c * c - little.radius * little.radius) / ( 2 * big.radius * c ) );

        var theta = Math.atan2( little.y - big.y , little.x - big.x );
        var phi1 = theta + A;
        var phi2 = theta - A;

        var x3 = big.radius * Math.cos( phi1 ) + big.x;
        var y3 = big.radius * Math.sin( phi1 ) + big.y;

        var x4 = big.radius * Math.cos( phi2 ) + big.x;
        var y4 = big.radius * Math.sin( phi2 ) + big.y; 

        // console.log("x3", x3);
        // console.log("y3", y3);
        // console.log("x4", x4);
        // console.log("y4", y4);

        return !isNaN(x3) && !isNaN(y3) && !isNaN(x4) && !isNaN(y4);
    }


    touchLeft(bigCircle, littleCircle) {


        console.log("littleCircle x", littleCircle.x);
        console.log("littleCircle y", littleCircle.y);
        console.log("bigCircle x", bigCircle.x);
        console.log("bigCircle y", bigCircle.y);
        console.log("left", littleCircle);
    }

    update() {

        if(!this.leftSocket.contains(this.leftTarget.x2, this.leftTarget.y2)) { // mouse is inside socket
            
            var xxx = this.leftTarget.x1 + (this.leftTarget.x2 - this.leftTarget.x1) * 0.1;
            var yyy = this.leftTarget.y1 + (this.leftTarget.y2 - this.leftTarget.y1) * 0.1;

            if(this.leftSocket.contains(xxx, yyy)) { // point to move to is inside socket

                this.left.x = xxx;
                this.left.y = yyy;

            }  
            else {

                var altX = this.leftTarget.x1 + (this.leftSocket.x - this.leftTarget.x1) * 0.01;
                var altY = this.leftTarget.y1 + (this.leftSocket.y - this.leftTarget.y1) * 0.01;
                
                this.left.x = altX;
                this.left.y = altY;
            }
        }


        if(!this.rightSocket.contains(this.rightTarget.x2, this.rightTarget.y2)) { // mouse is inside socket

            var xxx = this.rightTarget.x1 + (this.rightTarget.x2 - this.rightTarget.x1) * 0.1;
            var yyy = this.rightTarget.y1 + (this.rightTarget.y2 - this.rightTarget.y1) * 0.1;

            if(this.rightSocket.contains(xxx, yyy)) { // point to move to is inside socket

                this.right.x = xxx;
                this.right.y = yyy;

            } 
            else {

                var altX = this.rightTarget.x1 + (this.rightSocket.x - this.rightTarget.x1) * 0.01;
                var altY = this.rightTarget.y1 + (this.rightSocket.y - this.rightTarget.y1) * 0.01;

                this.right.x = altX;
                this.right.y = altY;
            }
        }
    }
}

export default EyesScene;
