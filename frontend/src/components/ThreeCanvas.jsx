import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

/**
 * High-performance interactive 3D WebGL Canvas using Three.js.
 * Renders the fix2ship "Readiness Quantum Gatekeeper Core"
 * with rotating geometric rings, crystal orb, laser streams, and interactive mouse parallax.
 */
export default function ThreeCanvas({ className = '', onStreamClick }) {
  const mountRef = useRef(null);

  useEffect(() => {
    const currentMount = mountRef.current;
    if (!currentMount) return;

    const width = currentMount.clientWidth;
    const height = currentMount.clientHeight;

    // Scene, Camera, Renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    camera.position.z = 18;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    currentMount.appendChild(renderer.domElement);

    // Group for all rotating objects
    const coreGroup = new THREE.Group();
    scene.add(coreGroup);

    // 1. Central Holographic Crystal (Icosahedron)
    const crystalGeo = new THREE.IcosahedronGeometry(3.2, 1);
    const crystalMat = new THREE.MeshStandardMaterial({
      color: 0x9333ea,
      emissive: 0x581c87,
      roughness: 0.2,
      metalness: 0.8,
      wireframe: true,
      transparent: true,
      opacity: 0.85,
    });
    const crystalMesh = new THREE.Mesh(crystalGeo, crystalMat);
    coreGroup.add(crystalMesh);

    // Inner glowing sphere
    const innerSphereGeo = new THREE.SphereGeometry(2.1, 32, 32);
    const innerSphereMat = new THREE.MeshBasicMaterial({
      color: 0xc084fc,
      wireframe: false,
      transparent: true,
      opacity: 0.25,
    });
    const innerSphere = new THREE.Mesh(innerSphereGeo, innerSphereMat);
    coreGroup.add(innerSphere);

    // 2. Gimbal Orbital Ring 1 (Electric Purple)
    const ring1Geo = new THREE.TorusGeometry(5.2, 0.08, 16, 100);
    const ring1Mat = new THREE.MeshBasicMaterial({
      color: 0xa855f7,
      transparent: true,
      opacity: 0.7,
    });
    const ring1 = new THREE.Mesh(ring1Geo, ring1Mat);
    ring1.rotation.x = Math.PI / 3;
    coreGroup.add(ring1);

    // 3. Gimbal Orbital Ring 2 (Neon Violet/Cyan)
    const ring2Geo = new THREE.TorusGeometry(6.6, 0.07, 16, 100);
    const ring2Mat = new THREE.MeshBasicMaterial({
      color: 0x818cf8,
      transparent: true,
      opacity: 0.5,
    });
    const ring2 = new THREE.Mesh(ring2Geo, ring2Mat);
    ring2.rotation.y = Math.PI / 4;
    ring2.rotation.z = Math.PI / 6;
    coreGroup.add(ring2);

    // 4. Gimbal Orbital Ring 3 (Outer Guard)
    const ring3Geo = new THREE.TorusGeometry(8.0, 0.05, 16, 100);
    const ring3Mat = new THREE.MeshBasicMaterial({
      color: 0xc084fc,
      transparent: true,
      opacity: 0.35,
    });
    const ring3 = new THREE.Mesh(ring3Geo, ring3Mat);
    ring3.rotation.x = -Math.PI / 5;
    coreGroup.add(ring3);

    // 5. Orbiting 4 Stream Satellite Nodes
    const streamNodes = [];
    const streamColors = [0x10b981, 0x10b981, 0xf59e0b, 0xf43f5e]; // Sales (green), Purchase (green), Bank (amber), Invoices (rose)
    const streamLabels = ['Sales', 'Purchase', 'Bank Cutoff', 'ITC Invoices'];

    for (let i = 0; i < 4; i++) {
      const angle = (i * Math.PI) / 2;
      const nodeGeo = new THREE.OctahedronGeometry(0.7, 0);
      const nodeMat = new THREE.MeshStandardMaterial({
        color: streamColors[i],
        emissive: streamColors[i],
        emissiveIntensity: 0.6,
        roughness: 0.3,
      });
      const nodeMesh = new THREE.Mesh(nodeGeo, nodeMat);
      nodeMesh.position.set(Math.cos(angle) * 7.2, Math.sin(angle) * 7.2 * 0.4, Math.sin(angle) * 4.5);
      coreGroup.add(nodeMesh);

      // Connecting laser beam to core
      const lineMat = new THREE.LineBasicMaterial({
        color: streamColors[i],
        transparent: true,
        opacity: 0.4,
      });
      const lineGeo = new THREE.BufferGeometry().setFromPoints([
        new THREE.Vector3(0, 0, 0),
        nodeMesh.position,
      ]);
      const line = new THREE.Line(lineGeo, lineMat);
      coreGroup.add(line);

      streamNodes.push({ mesh: nodeMesh, line, baseAngle: angle, speed: 0.008 + i * 0.002 });
    }

    // 6. Ambient Dust Particles
    const dustCount = 200;
    const dustPositions = new Float32Array(dustCount * 3);
    for (let i = 0; i < dustCount * 3; i += 3) {
      dustPositions[i] = (Math.random() - 0.5) * 35;
      dustPositions[i + 1] = (Math.random() - 0.5) * 25;
      dustPositions[i + 2] = (Math.random() - 0.5) * 25;
    }
    const dustGeo = new THREE.BufferGeometry();
    dustGeo.setAttribute('position', new THREE.BufferAttribute(dustPositions, 3));
    const dustMat = new THREE.PointsMaterial({
      color: 0xc084fc,
      size: 0.12,
      transparent: true,
      opacity: 0.6,
    });
    const dustParticles = new THREE.Points(dustGeo, dustMat);
    scene.add(dustParticles);

    // 7. Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.9);
    scene.add(ambientLight);

    const purpleLight = new THREE.PointLight(0xa855f7, 4, 30);
    purpleLight.position.set(5, 8, 10);
    scene.add(purpleLight);

    const indigoLight = new THREE.PointLight(0x6366f1, 3, 30);
    indigoLight.position.set(-8, -6, -5);
    scene.add(indigoLight);

    // Mouse movement interaction
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;

    const onPointerMove = (e) => {
      const rect = currentMount.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      targetX = x * 1.5;
      targetY = -y * 1.5;
    };

    window.addEventListener('pointermove', onPointerMove);

    // Animation Loop
    let animationId;
    let clock = new THREE.Clock();

    const animate = () => {
      animationId = requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();

      // Smooth mouse follow
      mouseX += (targetX - mouseX) * 0.05;
      mouseY += (targetY - mouseY) * 0.05;

      coreGroup.rotation.y = elapsedTime * 0.25 + mouseX;
      coreGroup.rotation.x = Math.sin(elapsedTime * 0.2) * 0.15 + mouseY;

      // Rotate individual components
      crystalMesh.rotation.x += 0.007;
      crystalMesh.rotation.y += 0.01;

      ring1.rotation.z += 0.006;
      ring2.rotation.x += 0.008;
      ring3.rotation.y -= 0.004;

      // Pulse crystal scale
      const pulse = 1 + Math.sin(elapsedTime * 2.5) * 0.04;
      crystalMesh.scale.set(pulse, pulse, pulse);
      innerSphere.scale.set(pulse * 0.95, pulse * 0.95, pulse * 0.95);

      // Orbit satellite stream nodes
      streamNodes.forEach((node, idx) => {
        const curAngle = node.baseAngle + elapsedTime * (0.35 + idx * 0.05);
        const radius = 6.8 + Math.sin(elapsedTime * 1.5 + idx) * 0.4;
        const nx = Math.cos(curAngle) * radius;
        const ny = Math.sin(curAngle * 0.7) * 2.5;
        const nz = Math.sin(curAngle) * radius * 0.8;

        node.mesh.position.set(nx, ny, nz);
        node.mesh.rotation.x += 0.02;
        node.mesh.rotation.y += 0.03;

        // Update beam line positions
        const positions = node.line.geometry.attributes.position.array;
        positions[3] = nx;
        positions[4] = ny;
        positions[5] = nz;
        node.line.geometry.attributes.position.needsUpdate = true;
      });

      // Slowly rotate dust particles
      dustParticles.rotation.y = elapsedTime * 0.02;

      renderer.render(scene, camera);
    };

    animate();

    // Resize Handler
    const handleResize = () => {
      if (!currentMount) return;
      const newWidth = currentMount.clientWidth;
      const newHeight = currentMount.clientHeight;
      camera.aspect = newWidth / newHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(newWidth, newHeight);
    };

    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      window.removeEventListener('pointermove', onPointerMove);
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationId);
      if (currentMount && renderer.domElement) {
        currentMount.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, []);

  return (
    <div
      ref={mountRef}
      className={`relative w-full h-full min-h-[420px] md:min-h-[520px] cursor-grab active:cursor-grabbing ${className}`}
    />
  );
}
