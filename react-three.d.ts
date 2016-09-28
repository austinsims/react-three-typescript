/// <reference path="typings/globals/react/index.d.ts" />
/// <reference path="typings/globals/three/index.d.ts" />

declare module 'react-three' {
  import * as React from 'react';
  import * as THREE from 'three';

  export interface RendererProps {
    width: number,
    height: number,
  }
  export class Renderer extends React.Component<RendererProps, {}> {}

  export interface PerspectiveCameraProps {
    // TODO: write |undefined for optional props.
    name: string,
    fov: number,
    aspect: number,
    near: number,
    far: number,
    position: THREE.Vector3,
    lookat: THREE.Vector3,
  }
  export class PerspectiveCamera extends React.Component<PerspectiveCameraProps, {}> {}

  export interface SceneProps {
    width: number,
    height: number,
    camera: string,
  }
  export class Scene extends React.Component<SceneProps, {}> {}

  export interface MeshProps {
    position: THREE.Vector3,
    geometry: THREE.Geometry,
    material: THREE.Material,
  }
  export class Mesh extends React.Component<MeshProps, {}> {}

  export function render<P>(element: React.ReactElement<P>, container: Element): void;
}