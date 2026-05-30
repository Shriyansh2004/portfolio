"use client";
import React, { useEffect, useRef } from "react";
import * as THREE from "three";

export function VoxelWorld() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (!canvasRef.current || !containerRef.current) return;

    const width = containerRef.current.clientWidth;
    const height = containerRef.current.clientHeight;

    // 1. Scene & Renderer Setup
    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x5c82ff, 0.015);

    const camera = new THREE.PerspectiveCamera(60, width / height, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({
      canvas: canvasRef.current,
      antialias: true,
      alpha: false,
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;

    // 2. Geometries & Materials (Pixel Palette)
    const boxGeo = new THREE.BoxGeometry(1, 1, 1);
    
    // Core voxel materials
    const grassMat = new THREE.MeshLambertMaterial({ color: 0x5c8e32 }); // Minecraft Grass Green
    const dirtMat = new THREE.MeshLambertMaterial({ color: 0x866043 });  // Dirt brown
    const stoneMat = new THREE.MeshLambertMaterial({ color: 0x737373 }); // Stone gray
    const coalMat = new THREE.MeshLambertMaterial({ color: 0x222222 });  // Coal black
    const diamondMat = new THREE.MeshPhongMaterial({ 
      color: 0x33e3e3, 
      emissive: 0x118888, 
      shininess: 100 
    }); // Glowing Diamond Cyan
    const netherMat = new THREE.MeshLambertMaterial({ color: 0x6e1b1b }); // Nether rack red
    const quartzMat = new THREE.MeshPhongMaterial({ color: 0xece9e6, shininess: 80 });
    const lavaMat = new THREE.MeshPhongMaterial({ 
      color: 0xff6600, 
      emissive: 0xcc3300, 
      shininess: 30 
    }); // Orange lava flow
    const endStoneMat = new THREE.MeshLambertMaterial({ color: 0xdfdf9f }); // Pale yellow Endstone
    const obsidianMat = new THREE.MeshPhongMaterial({ color: 0x160a2b, shininess: 90 }); // Obsidian black-purple
    const leafMat = new THREE.MeshLambertMaterial({ color: 0x337a22 }); // Oak Leaves
    const woodMat = new THREE.MeshLambertMaterial({ color: 0x593d1f }); // Oak Trunk
    const cloudMat = new THREE.MeshBasicMaterial({ 
      color: 0xffffff, 
      transparent: true, 
      opacity: 0.85 
    });

    // 3. Grid helper for voxel look
    const grid = new THREE.Group();

    // Spawn Area Island (Grass & Trees)
    const spawnGroup = new THREE.Group();
    spawnGroup.position.set(0, 5, 0);

    // Create Grass Voxel Island Base (8x8)
    for (let x = -4; x <= 4; x++) {
      for (let z = -4; z <= 4; z++) {
        // Top grass layer
        const topBlock = new THREE.Mesh(boxGeo, grassMat);
        topBlock.position.set(x, 0, z);
        topBlock.receiveShadow = true;
        topBlock.castShadow = true;
        spawnGroup.add(topBlock);

        // Sub dirt layer
        const subBlock = new THREE.Mesh(boxGeo, dirtMat);
        subBlock.position.set(x, -1, z);
        spawnGroup.add(subBlock);
      }
    }

    // Add Voxel Oak Trees
    const makeTree = (tx: number, tz: number) => {
      const tree = new THREE.Group();
      tree.position.set(tx, 0.5, tz);

      // Trunk
      for (let y = 0; y < 4; y++) {
        const trunkMesh = new THREE.Mesh(boxGeo, woodMat);
        trunkMesh.position.set(0, y, 0);
        trunkMesh.castShadow = true;
        tree.add(trunkMesh);
      }

      // Leaves block cluster
      for (let lx = -1; lx <= 1; lx++) {
        for (let lz = -1; lz <= 1; lz++) {
          for (let ly = 3; ly <= 5; ly++) {
            if (lx === 0 && lz === 0 && ly === 3) continue; // skip trunk overlap
            const leafMesh = new THREE.Mesh(boxGeo, leafMat);
            leafMesh.position.set(lx, ly, lz);
            leafMesh.castShadow = true;
            tree.add(leafMesh);
          }
        }
      }
      spawnGroup.add(tree);
    };

    makeTree(-2.5, -2.5);
    makeTree(2.5, 2.5);
    grid.add(spawnGroup);

    // Cave Biome (Stone & Glowing Diamonds)
    const caveGroup = new THREE.Group();
    caveGroup.position.set(0, -15, 0);

    for (let x = -5; x <= 5; x++) {
      for (let z = -5; z <= 5; z++) {
        const heightVal = Math.sin(x * 0.5) * Math.cos(z * 0.5) * 1.5;
        const blockHeight = Math.round(heightVal) - 2;

        for (let y = blockHeight; y <= 0; y++) {
          const isOre = Math.random() > 0.88;
          const block = new THREE.Mesh(boxGeo, isOre ? diamondMat : stoneMat);
          block.position.set(x, y, z);
          block.receiveShadow = true;
          block.castShadow = true;
          caveGroup.add(block);
        }
      }
    }
    grid.add(caveGroup);

    // Nether Biome (Netherrack & Glowing Lava)
    const netherGroup = new THREE.Group();
    netherGroup.position.set(0, -35, 0);

    // Nether base
    for (let x = -5; x <= 5; x++) {
      for (let z = -5; z <= 5; z++) {
        const isLava = x >= -1 && x <= 1;
        const mat = isLava ? lavaMat : netherMat;
        const heightVal = isLava ? -1.5 : Math.round(Math.cos(x * 0.8) * 1.2) - 1.0;

        const block = new THREE.Mesh(boxGeo, mat);
        block.position.set(x, heightVal, z);
        if (!isLava) {
          block.receiveShadow = true;
          block.castShadow = true;
        }
        netherGroup.add(block);
      }
    }
    grid.add(netherGroup);

    // End Dimension Biome (Endstone & Obsidian Pillars)
    const endGroup = new THREE.Group();
    endGroup.position.set(0, -55, 0);

    // Float island
    for (let x = -4; x <= 4; x++) {
      for (let z = -4; z <= 4; z++) {
        // Oval island shaping
        if (x*x + z*z > 16) continue;
        const block = new THREE.Mesh(boxGeo, endStoneMat);
        block.position.set(x, -1, z);
        block.receiveShadow = true;
        block.castShadow = true;
        endGroup.add(block);
      }
    }

    // Obsidian Pillars
    const makePillar = (px: number, pz: number, pheight: number) => {
      for (let y = 0; y < pheight; y++) {
        const block = new THREE.Mesh(boxGeo, obsidianMat);
        block.position.set(px, y - 0.5, pz);
        block.castShadow = true;
        endGroup.add(block);
      }
    };
    makePillar(-2.5, -2, 5);
    makePillar(2.5, 2, 6);
    grid.add(endGroup);

    scene.add(grid);

    // 4. Clouds (Floating in Spawn Area)
    const cloudsGroup = new THREE.Group();
    const makeCloud = (cx: number, cy: number, cz: number) => {
      const cloud = new THREE.Group();
      cloud.position.set(cx, cy, cz);
      for (let i = 0; i < 4; i++) {
        const cloudPiece = new THREE.Mesh(boxGeo, cloudMat);
        cloudPiece.scale.set(3, 0.6, 2);
        cloudPiece.position.set(i * 1.8, 0, Math.sin(i) * 0.5);
        cloud.add(cloudPiece);
      }
      cloudsGroup.add(cloud);
    };
    makeCloud(-15, 16, -10);
    makeCloud(10, 15, 12);
    scene.add(cloudsGroup);

    // 5. Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.45);
    scene.add(ambientLight);

    const dirLight = new THREE.DirectionalLight(0xffffff, 0.8);
    dirLight.position.set(10, 30, 10);
    dirLight.castShadow = true;
    dirLight.shadow.mapSize.width = 1024;
    dirLight.shadow.mapSize.height = 1024;
    scene.add(dirLight);

    // Glowing Cave diamond point light
    const caveLight = new THREE.PointLight(0x00f0ff, 1.5, 10);
    caveLight.position.set(0, -13, 0);
    scene.add(caveLight);

    // Glowing Nether lava point light
    const netherLight = new THREE.PointLight(0xff4400, 2.0, 12);
    netherLight.position.set(0, -32, 0);
    scene.add(netherLight);

    // Glowing End purple point light
    const endLight = new THREE.PointLight(0xaa00ff, 1.8, 15);
    endLight.position.set(0, -51, 0);
    scene.add(endLight);

    // 6. Camera starting coordinates
    camera.position.set(8, 12, 16);
    camera.lookAt(0, 5, 0);

    // 7. Scroll interaction interpolation
    let targetCameraY = 5;
    let currentCameraY = 5;
    let scrollPercent = 0;

    const handleScroll = () => {
      const scrollY = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      scrollPercent = docHeight > 0 ? scrollY / docHeight : 0;
      
      // Interpolate camera Y coordinate through biomes
      // Biome levels: Spawn = 5, Cave = -15, Nether = -35, End = -55
      targetCameraY = 5 - scrollPercent * 60;
    };

    window.addEventListener("scroll", handleScroll);

    // 8. Handle Resize
    const handleResize = () => {
      if (!containerRef.current || !canvasRef.current) return;
      const w = containerRef.current.clientWidth;
      const h = containerRef.current.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };
    window.addEventListener("resize", handleResize);

    // 9. Animation Loop
    let clock = new THREE.Clock();
    let reqFrameId = 0;

    const animate = () => {
      reqFrameId = requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();

      // Slow passive cloud motion
      cloudsGroup.children.forEach((c) => {
        c.position.x += 0.005;
        if (c.position.x > 25) {
          c.position.x = -25;
        }
      });

      // Smooth camera scroll interpolation (lerp)
      currentCameraY += (targetCameraY - currentCameraY) * 0.07;
      
      // Camera paths - rotate slightly around islands for parallax
      const angle = elapsedTime * 0.12 + (scrollPercent * Math.PI * 1.5);
      const radius = 13 + Math.sin(elapsedTime * 0.2) * 1.5;
      
      camera.position.x = Math.sin(angle) * radius;
      camera.position.y = currentCameraY + 6;
      camera.position.z = Math.cos(angle) * radius;
      
      // Camera looks slightly ahead of active biome height
      camera.lookAt(0, currentCameraY, 0);

      // Dynamically morph Scene Fog color & Clear Color based on scroll depth
      let skyColor = new THREE.Color(0x5c82ff); // Blue sky
      if (scrollPercent <= 0.2) {
        // Spawn Area Blue
        skyColor.setHex(0x5c82ff);
        if (scene.fog) scene.fog.color.copy(skyColor);
        renderer.setClearColor(skyColor);
      } else if (scrollPercent <= 0.45) {
        // Morph to dark Cave gray
        const alpha = (scrollPercent - 0.2) / 0.25;
        skyColor.lerpColors(new THREE.Color(0x5c82ff), new THREE.Color(0x0e0e11), alpha);
        if (scene.fog) scene.fog.color.copy(skyColor);
        renderer.setClearColor(skyColor);
      } else if (scrollPercent <= 0.7) {
        // Morph to deep Nether red
        const alpha = (scrollPercent - 0.45) / 0.25;
        skyColor.lerpColors(new THREE.Color(0x0e0e11), new THREE.Color(0x1a0303), alpha);
        if (scene.fog) scene.fog.color.copy(skyColor);
        renderer.setClearColor(skyColor);
      } else {
        // Morph to End Space dark purple
        const alpha = Math.min((scrollPercent - 0.7) / 0.3, 1);
        skyColor.lerpColors(new THREE.Color(0x1a0303), new THREE.Color(0x090214), alpha);
        if (scene.fog) scene.fog.color.copy(skyColor);
        renderer.setClearColor(skyColor);
      }

      renderer.render(scene, camera);
    };

    animate();

    // 10. Cleanup
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(reqFrameId);
      
      // Memory cleanup
      boxGeo.dispose();
      grassMat.dispose();
      dirtMat.dispose();
      stoneMat.dispose();
      coalMat.dispose();
      diamondMat.dispose();
      netherMat.dispose();
      quartzMat.dispose();
      lavaMat.dispose();
      endStoneMat.dispose();
      obsidianMat.dispose();
      leafMat.dispose();
      woodMat.dispose();
      cloudMat.dispose();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 w-full h-full z-0 overflow-hidden pointer-events-none"
      style={{ touchAction: "none" }}
    >
      <canvas ref={canvasRef} className="w-full h-full block" />
    </div>
  );
}
