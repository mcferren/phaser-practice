import Cornea from '../../sprites/Cornea';

class EyesScene extends Phaser.Scene {
  constructor() {
    super({
      key: 'EyesScene'
    });
  }

  create() {

      this.mid = new Phaser.Geom.Rectangle(0, 0, 8, 8);

      this.a = 0;

//         this.add.image(0, 0, 'eyesWindow');

// √       this.left = this.add.image(46, 92, 'eye');
//         this.left.anchor = 0.5;

      this.left = new Phaser.Geom.Circle(200, 400, 60);

// √       this.right = this.add.image(140, 92, 'eye');
//         this.right.anchor = 0.5;

      this.right = new Phaser.Geom.Circle(600, 400, 60);

// √     this.leftTarget = new Phaser.Geom.Line(this.left.x, this.left.y, 0, 0);
// √     this.rightTarget = new Phaser.Geom.Line(this.right.x, this.right.y, 0, 0);

      this.leftTarget = new Phaser.Geom.Line(this.left.x, this.left.y, 0, 0);
      this.rightTarget = new Phaser.Geom.Line(this.right.x, this.right.y, 0, 0);

// √       this.leftBase = new Phaser.Circle(44, 90, 64);
// √       this.rightBase = new Phaser.Circle(138, 90, 64);

// √       this.leftBase = new Phaser.Geom.Ellipse(this.left.x, this.left.y, 24, 40);
// √       this.rightBase = new Phaser.Geom.Ellipse(this.right.x, this.right.y, 24, 40);

//       this.leftBase = new Phaser.Geom.Ellipse(200, 300, 240, 400);
//       this.rightBase = new Phaser.Geom.Ellipse(600, 300, 240, 400);
      this.leftBase = new Phaser.Geom.Circle(200, 300, 140);
      this.rightBase = new Phaser.Geom.Circle(600, 300, 140);



//         var main = this.state.getState('Main');
//         var handle = main.windows[this.settings.key];

//         this.sys.fbo.setPosition(handle.x, handle.y);

      this.sockets = this.add.graphics({ lineStyle: { width: 2, color: 0xffffff } });
      this.sockets.fillStyle(0xffffff);
      this.graphics = this.add.graphics();
      this.graphics.lineStyle(2, 0x00ff00);
      
//       this.sockets.strokeEllipseShape(this.leftBase, 64);
//       this.sockets.strokeEllipseShape(this.rightBase, 64);
      this.sockets.fillCircleShape(this.leftBase);
      this.sockets.fillCircleShape(this.rightBase);


      this.balls = this.add.graphics({ lineStyle: { width: 2, color: 0x00ff00 } });
      this.balls.fillStyle(0x000000);

      var that = this;

      this.input.events.on('POINTER_MOVE_EVENT', function (event) {


          that.balls.clear();
          that.graphics.clear();

//           console.log("that", that);
//           console.log("event", event)
//           that.leftTarget.x1 = event.x;
//           that.leftTarget.y1 = event.y;
//           that.rightTarget.x1 = event.x;
//           that.rightTarget.y1 = event.y;


          if (that.leftBase.contains(event.x, event.y)) {

              that.leftTarget.x1 = event.x;
              that.leftTarget.y1 = event.y;
              that.leftTarget.x2 = event.x;
              that.leftTarget.y2 = event.y;

          } else {

              that.leftTarget.x1 = that.left.x;
              that.leftTarget.y1 = that.left.y;
              that.leftTarget.x2 = event.x;
              that.leftTarget.y2 = event.y;
          }

          if (that.rightBase.contains(event.x, event.y)) {

              that.rightTarget.x1 = event.x;
              that.rightTarget.y1 = event.y;
              that.rightTarget.x2 = event.x;
              that.rightTarget.y2 = event.y;

          } else {

              that.rightTarget.x1 = that.right.x;
              that.rightTarget.y1 = that.right.y;
              that.rightTarget.x2 = event.x;
              that.rightTarget.y2 = event.y;
          }

          //  Within the circle?
          if (that.leftBase.contains(that.leftTarget.x1, that.leftTarget.y1))
          {
              that.left.x = that.leftTarget.x1;
              that.left.y = that.leftTarget.y1;
          } 
//           else {


//               var xxx = that.leftTarget.x2 + (that.leftTarget.x1 - that.leftTarget.x2) * 0.1;
//               var yyy = that.leftTarget.y2 + (that.leftTarget.y1 - that.leftTarget.y2) * 0.1;

//               that.left.x = xxx;
//               that.left.y = yyy;
//               that.leftTarget.x1 = xxx;
//               that.leftTarget.y1 = yyy;

//               that.a += 0.04;

//               if (that.a >= Phaser.Math.PI2)
//               {
//                   that.a -= Phaser.Math.PI2;
//               }

//               that.leftBase.CircumferencePoint(event.x, false, that.left.x)

//               Phaser.Geom.Circle.CircumferencePoint(that.leftBase, that.a, that.mid);

//               console.log("focksy", that.leftBase.CircumferencePoint(event.x, false, that.left.x) );
//           }
          if (that.rightBase.contains(that.rightTarget.x1, that.rightTarget.y1))
          {
              that.right.x = that.rightTarget.x1;
              that.right.y = that.rightTarget.y1;

          } 
//           else {

//               var xxx = that.rightTarget.x2 + (that.rightTarget.x1 - that.rightTarget.x2) * 0.1;
//               var yyy = that.rightTarget.y2 + (that.rightTarget.y1 - that.rightTarget.y2) * 0.1;

//               that.right.x = xxx;
//               that.right.y = yyy;
//               that.rightTarget.x1 = xxx;
//               that.rightTarget.y1 = yyy;

//               that.a += 0.04;

//               if (that.a >= Phaser.Math.PI2)
//               {
//                   that.a -= Phaser.Math.PI2;
//               }

//               that.rightBase.CircumferencePoint(event.x, false, that.right.x)

//               Phaser.Geom.Circle.CircumferencePoint(that.rightBase, that.a, that.mid);

//               console.log("fULcksy", that.rightBase.CircumferencePoint(event.x, false, that.right.x) );
//           }

//           that.left.x = event.x;
//           that.left.y = event.y;

//           that.right.x = event.x;
//           that.right.y = event.y;


          that.graphics.lineStyle(2, 0x00ff00);
          that.balls.strokeCircleShape(that.left);
          that.balls.strokeCircleShape(that.right);
          that.graphics.strokeLineShape(that.leftTarget);
          that.graphics.strokeLineShape(that.rightTarget);
      });

      this.input.events.on('POINTER_UP_EVENT', function (event) {

          console.log("contains left", that.leftBase.contains(event.x, event.y));
//           console.log("contains left", that.leftBase.contains(that.leftTarget.x1, that.leftTarget.y1));
          console.log("contains lefter", that.leftBase);
//           console.log("CONTAINSPOINT" Phaser.Geom.Circle.ContainsPoint(that.leftBase, that.leftTarget))
          console.log("contains that.leftTarget.angle", that.leftTarget.angle);
          console.log("contains that.leftTarget", that.leftTarget);
          console.log("contains event.x", event.x);
          console.log("contains event.y", event.y);
      });
  }

  update() {

          if(!this.leftBase.contains(this.leftTarget.x2, this.leftTarget.y2)) {
            
              var xxx = this.leftTarget.x1 + (this.leftTarget.x2 - this.leftTarget.x1) * 0.1;
              var yyy = this.leftTarget.y1 + (this.leftTarget.y2 - this.leftTarget.y1) * 0.1;

              if(this.leftBase.contains(xxx, yyy)) {

                  this.left.x = xxx;
                  this.left.y = yyy;
              }
              // this.leftTarget.x1 = xxx;
              // this.leftTarget.y1 = yyy;
          }


          if(!this.rightBase.contains(this.rightTarget.x2, this.rightTarget.y2)) {
              var xxx = this.rightTarget.x1 + (this.rightTarget.x2 - this.rightTarget.x1) * 0.1;
              var yyy = this.rightTarget.y1 + (this.rightTarget.y2 - this.rightTarget.y1) * 0.1;

              if(this.rightBase.contains(xxx, yyy)) {

                  this.right.x = xxx;
                  this.right.y = yyy;
              }
              // this.rightTarget.x1 = xxx;
              // this.rightTarget.y1 = yyy;
          }
    
//         this.leftTarget.end.x = this.input.activePointer.x - this.sys.fbo.x;
//         this.leftTarget.end.y = this.input.activePointer.y - this.sys.fbo.y;

//         //  Within the circle?
//         if (this.leftBase.contains(this.leftTarget.end.x, this.leftTarget.end.y))
//         {
//             this.mid.x = this.leftTarget.end.x;
//             this.mid.y = this.leftTarget.end.y;
//         }
//         else
//         {
//             this.leftBase.circumferencePoint(this.leftTarget.angle, false, this.mid);
//         }

//         this.left.x = this.mid.x;
//         this.left.y = this.mid.y;

//         this.rightTarget.end.x = this.input.activePointer.x - this.sys.fbo.x;
//         this.rightTarget.end.y = this.input.activePointer.y - this.sys.fbo.y;

//         //  Within the circle?
//         if (this.rightBase.contains(this.rightTarget.end.x, this.rightTarget.end.y))
//         {
//             this.mid.x = this.rightTarget.end.x;
//             this.mid.y = this.rightTarget.end.y;
//         }
//         else
//         {
//             this.rightBase.circumferencePoint(this.rightTarget.angle, false, this.mid);
//         }

//         this.right.x = this.mid.x;
//         this.right.y = this.mid.y;

//       this.balls.clear();
//       this.graphics.clear();

//       this.balls.strokeCircleShape(this.left);
//       this.balls.strokeCircleShape(this.right);
//       this.graphics.strokeLineShape(this.leftTarget);
//       this.graphics.strokeLineShape(this.rightTarget);
  }
}

export default EyesScene;
