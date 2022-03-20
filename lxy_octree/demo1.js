
import {Octree} from "./libs/Octree.js";
import {Box3, Vector3} from "./libs/three.module.js";

const camera = new Vector3(0,0,0);//
const sight_distance=2
const demoTree = new Octree(sight_distance);

const point1 = new Vector3(1,1,1);//
// const point2 = new Vector3(0.5,0.5,0.5);
const point3 = new Vector3(9,9,9);

demoTree.initiatePosition(camera, 10);
//调试
demoTree.addObject(point1,1);
// demoTree.addObject(point2,2);
demoTree.addObject(point3,2);
for (let i=3;i<=10;i++){
    let p=0.5*i
    demoTree.addObject(new Vector3(p,p,p),i)
}

//构造松散的八叉树，在split时对每个区间进行视距长度的扩张，使用时找到摄像机所在的子树，用户有关的点都在该子树中。进行下一步判断即可
//叶子结点的宽度应大于等于一倍视距
demoTree.calcBox();
demoTree.split(0)
let test_point=new Vector3(0,2,5)
let re_tree=demoTree.get_point_tree(test_point)
console.log(re_tree.points,re_tree.box.max,re_tree.box.min)
// console.log(demoTree.subTrees.length)
// demoTree.get_all_tree()




