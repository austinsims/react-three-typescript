import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as THREE from 'three';
import ReactTHREE = require('react-three');

interface ExampleSceneProps {
  width: number,
  height: number,
  cubeRot: THREE.Euler,
}
class ExampleScene extends React.Component<ExampleSceneProps, {}> {
  render() {
    return (
      <ReactTHREE.Renderer width={this.props.width} height={this.props.height}>
        <ReactTHREE.Scene width={this.props.width} height={this.props.height} camera={'maincamera'}>
          <ReactTHREE.PerspectiveCamera
              name={"maincamera"}
              fov={75}
              aspect={this.props.width / this.props.height}
              near={1}
              far={5000}
              position={new THREE.Vector3(0, 0, 5)}
              lookat={new THREE.Vector3(0,0,0)} />
          <ReactTHREE.Mesh position={new THREE.Vector3(0, 0, 0)}
                           geometry={new THREE.BoxGeometry(1, 1, 1)}
                           material={new THREE.MeshBasicMaterial({color: 0x00ff00})}
                           rotation={this.props.cubeRot} />
        </ReactTHREE.Scene>
      </ReactTHREE.Renderer>
    );
  }
}

let x = 0;
let y = 0;
function onFrame(ts: number) {
  requestAnimationFrame(onFrame);

  x += 0.1;
  y += 0.1;
  let cubeRot = new THREE.Euler(x, y);
  ReactTHREE.render(
    <ExampleScene width={window.innerWidth}
                  height={window.innerHeight}
                  cubeRot={cubeRot}/>,
    document.getElementById('application')
  );
}
requestAnimationFrame(onFrame);