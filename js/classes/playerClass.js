class player {
  constructor(scene) {
    //-- Setup the body --
    {
      this.boxGeometry = new THREE.BoxGeometry(10, 10, 10);
      this.basicMaterial = new THREE.MeshBasicMaterial({color: 0x1195DD});
      this.cube = new THREE.Mesh(this.boxGeometry, this.basicMaterial);
      this.body = new THREE.Object3D();
      this.body.add(this.cube);
      scene.add(this.body);
      this.body.translateZ(10);
    }

    //-- Setup Keyboard Vars. --
    {
      this.moveForward = false;
      this.moveBackward = false;
      this.moveLeft = false;
      this.moveRight = false;
    }

    //-- Setup Local Vars. --
    {
      this.hspd = 0;
      this.vspd = 0;
      this.spd = 1;
      this.currentMoveSpd = this.spd;
      this.box = new THREE.Box3().setFromObject(this.body);
    }
  }
  update() {
    //-- Movement --
    {
      if(this.moveForward && this.moveBackward) {
        this.currentMoveSpd = this.spd/Math.sqrt(2);
      } else {
        this.currentMoveSpd = this.spd;
      }
      if(this.moveForward && !this.moveBackward) {
        this.body.translateZ(this.spd);
      }
      if(this.moveBackward && !this.moveForward) {
        this.body.translateZ(-this.spd);
      }
      if(this.moveLeft && !this.moveRight) {
        this.body.translateX(this.spd);
      }
      if(this.moveRight && !this.moveLeft) {
        this.body.translateX(-this.spd);
      }
    }

    //-- Debug Code --
    {
      //console.log(this.body.position.z);
      //console.log(this.box.min);
    }

    //-- Update Min, Max, Cords. --
    {
      this.box.setFromObject(this.body);
    }

  }
}
