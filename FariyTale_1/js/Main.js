// // import {Octree} from "./lib/Octree.js";
// // import {Vector3} from "./lib/three.module.js";
// //
// // const {Octree} = require("./lib/Octree");
//
// // import {Octree} from "./lib/Octree";
//
// function Main(){
//     //console.log(2);
//     //let camera, scene, renderer, stats;
//
//     let mesh;
//     //let material;
//     const amount = 100;
//     const count = Math.pow( amount, 2 );
//     const dummy = new THREE.Object3D();
//
//     // const {Octree} = require("./lib/Octree");
//     //Octree initate
//     const sight_distance=2
//     const MyOctree = new Octree(sight_distance)
//
//     /*const Method = {
//         INSTANCED: 'INSTANCED',
//         MERGED: 'MERGED',
//         NAIVE: 'NAIVE'
//     };
//
//     const api = {
//         method: Method.INSTANCED,
//         count: 1000
//     };*/
//
//     var scope=this;
//     this.VR=false;
//     this.scene=new THREE.Scene();
//     var width=window.innerWidth;
//     var height=window.innerHeight;
//     this.camera=
//         //new THREE.OrthographicCamera( width / - 2, width / 2, height / 2, height / - 2, 0.001, 100 );
//         new THREE.PerspectiveCamera( 70,window.innerWidth /window.innerHeight, 0.1, 1000 );;
//    // this.render;
//     this.effect;
//     //this.camera = new THREE.OrthographicCamera(window.innerWidth/ - 1,window.innerWidth,window.innerHeight,window.innerHeight/ - 1, 0, 100000 );
//     this.winWidth = window.innerWidth;
//     this.winHeight = window.innerHeight;
//     //this.divInfo = document.getElementById('pminfo');//用于呈现文字
//     this.start=function () {
//         this.init();
//         //console.log(scope.camera.position);
//         this.animate();
//     }
//     this.init=function()
//     {
//         this.renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true});
//         this.renderer.autoClear = false;
//         this.renderer.setPixelRatio( window.devicePixelRatio );
//
//         this.renderer.gammaInput = true;
//         this.renderer.gammaOutput = true;
//
//         winWidth = window.innerWidth;
//         winHeight = window.innerHeight;
//
//         this.renderer.setSize(winWidth, winHeight);
//         if(scope.VR)this.effect = new THREE.StereoEffect(this.renderer)
//         document.body.appendChild( this.renderer.domElement );
//
//         // CAMERAS
//         this.camera.position.set(-155,41,22,-2.07);//-155,41,22,-2.07,-1.49,-2.07
//         this.camera.rotation.set(-1.5572,-1.47875,-1.55714);//
//
//         // //Octree initate
//         // const sight_distance=2
//         // const MyOctree = new Octree(sight_distance)
//
//         //Octree initate
//         MyOctree.initiatePosition(this.camera.position,10)
//
//
//         window.c=this.camera;
//
//         var ambient = new THREE.AmbientLight(0xffffff , 1 );
//         var point = new THREE.PointLight(0XFFFFFF,1);
//         this.scene.add( ambient );
//         this.scene.add(point);
//
//         //json
//         // const loader = new THREE.BufferGeometryLoader();
//         // loader.load('MyModel/json/MyDemo1.json',function(geometry){
//         //    geometry.computeVertexNormals();
//         //    geometry.scale(0.1,0.1,0.1);
//         //    //const material = new THREE.MeshPhysicalMaterial({color:0x00ff00});
//         //     const material = new THREE.MeshNormalMaterial();
//         //     //const material = new THREE.MeshBasicMaterial({color:0x9F9F5F});
//         //    mesh = new THREE.InstancedMesh(geometry,material,count);
//         //    mesh.instanceMatrix.setUsage(THREE.DynamicDrawUsage);
//         //    //console.log(typeof(mesh))
//         //    scope.scene.add(mesh);
//         // });
//
//         //box测试//生成地面
//         const initBox = new THREE.BoxBufferGeometry(2,2,2);
//         var cubeMaterials = [
//             new THREE.MeshLambertMaterial( { map: new THREE.TextureLoader().load( 'js/img/side.png' ), side: THREE.DoubleSide } ), // right
//             new THREE.MeshLambertMaterial( { map: new THREE.TextureLoader().load( 'js/img/side.png' ), side: THREE.DoubleSide } ),  // left
//             new THREE.MeshLambertMaterial( { map: new THREE.TextureLoader().load( 'js/img/top.png' ), side: THREE.DoubleSide } ),  // top
//             new THREE.MeshLambertMaterial( { map: new THREE.TextureLoader().load( 'js/img/bottom.png' ), side: THREE.DoubleSide } ),  // bottom
//             new THREE.MeshLambertMaterial( { map: new THREE.TextureLoader().load( 'js/img/side.png' ), side: THREE.DoubleSide } ),  // front
//             new THREE.MeshLambertMaterial( { map: new THREE.TextureLoader().load( 'js/img/side.png' ), side: THREE.DoubleSide } ),  // back
//         ];
//
//         var material = new THREE.MeshFaceMaterial(cubeMaterials);
//         //const material = new THREE.MeshNormalMaterial();
//         mesh = new THREE.InstancedMesh(initBox,material,count);
//         //mesh.instanceMatrix.setUsage(THREE.DynamicDrawUsage);
//         scope.scene.add(mesh);
//
//         let geometries = [];
//         let transform = new THREE.Object3D();
//         for(let index= 0 ;index<3;index++){
//
//         }
//
//         //性能监视器stats.js开始
//         /*var stats = new Stats();
//         //stats.setMode(0);
//         //stats.domElement.style.position = 'absolute';
//         //stats.domElement.style.left = '0px';
//         //stats.domElement.style.top = '0px';
//         document.body.appendChild(stats.domElement);
//         setInterval(function () {
//             stats.begin();
//             stats.end();
//         }, 100)*/
//         //性能监视器stats.js结束
//
//     }
//     this._onResize=function()
//     {
//         this.winWidth = window.innerWidth;
//         this.winHeight = window.innerHeight;
//
//         this.camera.aspect = winWidth / winHeight;
//         this.camera.updateProjectionMatrix();
//
//         this.renderer.setSize(winWidth, winHeight);
//     }
//     this.animate=function()
//     {
//         if(scope.VR)scope.effect.render(scope.scene, scope.camera);
//         else scope.renderer.render(scope.scene,scope.camera);
//         //scope.divInfo.textContent='场景中三角面个数:' + renderer.info.render.triangles;
//         if (window.innerWidth !== scope.winWidth || window.innerHeight !== scope.winHeight) scope._onResize();
//         requestAnimationFrame(scope.animate);
//
//         scope.myRender();
//
//     }
//     this.myRender=function()
//     {
//         if(mesh) {
//             let subPointNum=1
//             let i = 0;
//             const offset = (amount - 1) / 2;
//
//             for (let x = 0; x < amount; x++) {
//
//                 //for ( let y = 0; y < amount; y ++ ) {
//
//                 for (let z = 0; z < amount; z++) {
//
//                     //dummy.position.set((offset - x) * 3,/*Math.sin(x)*/x / 7, (offset - z) * 3);//
//                     if(x<50) {
//                         dummy.position.set(3*x,0,z);
//                         const tempPoint = new Vector3(3*x,0,z)
//                         //Octree add point
//                         MyOctree.addObject(tempPoint,subPointNum)
//                         subPointNum++
//                     }
//                     else {dummy.position.set(3*x,x-50,z);}
//                     //else if(x<25){dummy.position.set(3*x,x+50,z);}
//                     //dummy.rotation.y = ( Math.sin( x / 4 + time ) + Math.sin( y / 4 + time ) + Math.sin( z / 4 + time ) );
//                     //dummy.rotation.z = dummy.rotation.y * 2;
//
//                     dummy.updateMatrix();
//
//                     mesh.setMatrixAt(i++, dummy.matrix);
//
//                 }
//
//             }
//             mesh.instanceMatrix.needsUpdate = true;
//         }
//         scope.renderer.render( scope.scene, scope.camera );
//
//     }
//
//
// }
