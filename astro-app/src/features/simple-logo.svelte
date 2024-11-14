<script>
  import { onMount, onDestroy } from 'svelte'
  import * as THREE from 'three'
  import { AsciiEffect } from 'three/addons/effects/AsciiEffect.js'
  import { TrackballControls } from 'three/addons/controls/TrackballControls.js'

  let container
  let isFirst = true
  let camera, controls, scene, renderer, effect
  let triangle

  const initializeScene = () => {
    // Camera
    camera = new THREE.PerspectiveCamera(
      75,
      container.clientWidth / container.clientHeight,
      1,
      1000
    )
    camera.position.z = 250

    // Scene
    scene = new THREE.Scene()
    scene.background = new THREE.Color(0, 0, 0)

    // Lights
    const pointLight1 = new THREE.PointLight(0xffffff, 3, 0, 0)
    pointLight1.position.set(500, 660, 600)
    scene.add(pointLight1)

    const pointLight2 = new THREE.PointLight(0xffffff, 1, 0, 0)
    pointLight2.position.set(-500, -500, -500)
    scene.add(pointLight2)

    triangle = createMainFigure()
    scene.add(triangle)

    // Renderer
    renderer = new THREE.WebGLRenderer()
    renderer.setSize(container.clientWidth, container.clientHeight)

    // ASCII Effect
    effect = new AsciiEffect(renderer, ' .:-=+*#&%X@', { invert: true })
    effect.setSize(window.innerWidth, window.innerHeight)
    effect.domElement.style.color = 'white'
    effect.domElement.style.backgroundColor = '#09090b'
    container.appendChild(effect.domElement)

    // Controls
    controls = new TrackballControls(camera, effect.domElement)

    // Resize listener
    window.addEventListener('resize', onWindowResize)
    renderer.setAnimationLoop(animateScene)
  }

  const createMainFigure = () => {
    const outerShape = new THREE.Shape()
    outerShape.moveTo(0, 100)
    outerShape.lineTo(100, -100)
    outerShape.lineTo(-100, -100)
    outerShape.lineTo(0, 100)

    const innerHole = new THREE.Path()
    innerHole.moveTo(0, 50)
    innerHole.lineTo(60, -75)
    innerHole.lineTo(-60, -75)
    innerHole.lineTo(0, 50)
    outerShape.holes.push(innerHole)

    const extrudeSettings = { depth: 30, bevelEnabled: false }
    const geometry = new THREE.ExtrudeGeometry(outerShape, extrudeSettings)
    const material = new THREE.MeshPhongMaterial({
      color: 0x00ff00,
      flatShading: true,
    })
    return new THREE.Mesh(geometry, material)
  }

  const onWindowResize = () => {
    camera.aspect = container.clientWidth / container.clientHeight
    camera.updateProjectionMatrix()

    renderer.setSize(container.clientWidth, container.clientHeight)
    effect.setSize(container.clientWidth, container.clientHeight)
  }

  const animateScene = () => {
    if (isFirst) {
      onWindowResize()
      isFirst = false
    }

    triangle.rotation.y += 0.01
    controls.update()
    effect.render(scene, camera)
  }

  onMount(() => {
    initializeScene()
  })

  onDestroy(() => {
    renderer.dispose()
    window.removeEventListener('resize', onWindowResize)
  })
</script>

<div class="size-full" bind:this={container}></div>
