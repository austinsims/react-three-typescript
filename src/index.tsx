import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as THREE from 'three';
import ReactTHREE = require('react-three');

let meshFactory = React.createFactory(ReactTHREE.Mesh);
let geometry = new THREE.BoxGeometry(1, 1, 1);
let material = new THREE.MeshBasicMaterial({color: 0x00ff00});

interface ExampleSceneProps {
  width: number,
  height: number,
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
                           material={new THREE.MeshBasicMaterial({color: 0x00ff00})}/>
        </ReactTHREE.Scene>
      </ReactTHREE.Renderer>
    );
  }
}

(function onFrame() {
  requestAnimationFrame(onFrame);
  ReactTHREE.render(
    <ExampleScene width={window.innerWidth} height={window.innerHeight} />,
    document.getElementById('application')
  );
})();