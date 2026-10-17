/***************************************************************************
     * 1. ASTRONOMICAL DATASET & SCIENTIFIC CONFIGURATION
     * Preserves real NASA/JPL/ISRO/ESA data for telemetry, moons & spacecraft
     ***************************************************************************/
    

    /***************************************************************************
     * 2. PROCEDURAL CANVAS TEXTURE SYNTHESIS ENGINE
     * Generates rich, seamless planetary, moon & ring textures in memory
     ***************************************************************************/
    const TextureGenerator = {
      hash(n) {
        return Math.sin(n) * 43758.5453123 - Math.floor(Math.sin(n) * 43758.5453123);
      },

      createMoonTexture(style) {
        const canvas = document.createElement('canvas');
        canvas.width = 512;
        canvas.height = 256;
        const ctx = canvas.getContext('2d');
        const w = canvas.width;
        const h = canvas.height;

        if (style === 'io-sulfur') {
          const grad = ctx.createLinearGradient(0, 0, 0, h);
          grad.addColorStop(0, '#ca8a04');
          grad.addColorStop(0.5, '#facc15');
          grad.addColorStop(1, '#ea580c');
          ctx.fillStyle = grad;
          ctx.fillRect(0, 0, w, h);
          for (let i = 0; i < 160; i++) {
            const x = Math.random() * w;
            const y = Math.random() * h;
            const r = 4 + Math.random() * 22;
            ctx.fillStyle = i % 3 === 0 ? 'rgba(185, 28, 28, 0.45)' : i % 2 === 0 ? 'rgba(254, 240, 138, 0.5)' : 'rgba(28, 25, 23, 0.5)';
            ctx.beginPath();
            ctx.arc(x, y, r, 0, Math.PI * 2);
            ctx.fill();
          }
        } else if (style === 'europa-ice') {
          ctx.fillStyle = '#e2e8f0';
          ctx.fillRect(0, 0, w, h);
          // Reddish-brown lineae cracks
          ctx.strokeStyle = 'rgba(154, 52, 18, 0.42)';
          ctx.lineWidth = 1.5;
          for (let i = 0; i < 45; i++) {
            ctx.beginPath();
            ctx.moveTo(Math.random() * w, Math.random() * h);
            ctx.bezierCurveTo(Math.random() * w, Math.random() * h, Math.random() * w, Math.random() * h, Math.random() * w, Math.random() * h);
            ctx.stroke();
          }
        } else if (style === 'titan-orange') {
          const grad = ctx.createLinearGradient(0, 0, 0, h);
          grad.addColorStop(0, '#b45309');
          grad.addColorStop(0.5, '#f59e0b');
          grad.addColorStop(1, '#d97706');
          ctx.fillStyle = grad;
          ctx.fillRect(0, 0, w, h);
        } else if (style === 'triton-pink') {
          const grad = ctx.createLinearGradient(0, 0, 0, h);
          grad.addColorStop(0, '#fbcfe8');
          grad.addColorStop(0.5, '#e2e8f0');
          grad.addColorStop(1, '#f9a8d4');
          ctx.fillStyle = grad;
          ctx.fillRect(0, 0, w, h);
          for (let i = 0; i < 90; i++) {
            ctx.fillStyle = 'rgba(131, 24, 67, 0.16)';
            ctx.beginPath();
            ctx.arc(Math.random() * w, Math.random() * h, 4 + Math.random() * 14, 0, Math.PI * 2);
            ctx.fill();
          }
        } else if (style === 'phobos-brown') {
          ctx.fillStyle = '#57534e';
          ctx.fillRect(0, 0, w, h);
          for (let i = 0; i < 180; i++) {
            ctx.fillStyle = i % 2 === 0 ? 'rgba(120, 113, 108, 0.35)' : 'rgba(28, 25, 23, 0.4)';
            ctx.beginPath();
            ctx.arc(Math.random() * w, Math.random() * h, 3 + Math.random() * 16, 0, Math.PI * 2);
            ctx.fill();
          }
        } else {
          // Default cratered-grey (Luna, Ganymede, Rhea, etc.)
          ctx.fillStyle = '#94a3b8';
          ctx.fillRect(0, 0, w, h);
          for (let i = 0; i < 200; i++) {
            ctx.fillStyle = i % 2 === 0 ? 'rgba(226, 232, 240, 0.25)' : 'rgba(51, 65, 85, 0.35)';
            ctx.beginPath();
            ctx.arc(Math.random() * w, Math.random() * h, 3 + Math.random() * 18, 0, Math.PI * 2);
            ctx.fill();
          }
        }

        const tex = new THREE.CanvasTexture(canvas);
        tex.wrapS = THREE.RepeatWrapping;
        return tex;
      },

      createPlanetTexture(id) {
        const canvas = document.createElement('canvas');
        canvas.width = 1024;
        canvas.height = 512;
        const ctx = canvas.getContext('2d');
        const w = canvas.width;
        const h = canvas.height;

        if (id === 'sun') {
          // Fiery solar plasma granulation
          const grad = ctx.createLinearGradient(0, 0, 0, h);
          grad.addColorStop(0, '#ff7b00');
          grad.addColorStop(0.5, '#ffcc00');
          grad.addColorStop(1, '#ff7b00');
          ctx.fillStyle = grad;
          ctx.fillRect(0, 0, w, h);

          // Granulation cells & active bright flares
          for (let i = 0; i < 2400; i++) {
            const x = Math.random() * w;
            const y = Math.random() * h;
            const r = 3 + Math.random() * 24;
            const rg = ctx.createRadialGradient(x, y, 0, x, y, r);
            if (Math.random() > 0.25) {
              rg.addColorStop(0, 'rgba(255, 250, 200, 0.35)');
              rg.addColorStop(1, 'rgba(255, 120, 0, 0)');
            } else {
              // Darker magnetic sunspot regions
              rg.addColorStop(0, 'rgba(160, 45, 0, 0.45)');
              rg.addColorStop(1, 'rgba(255, 100, 0, 0)');
            }
            ctx.fillStyle = rg;
            ctx.beginPath();
            ctx.arc(x, y, r, 0, Math.PI * 2);
            ctx.fill();
          }
        } 
        else if (id === 'mercury') {
          // Silicate cratered gray surface
          ctx.fillStyle = '#7c8288';
          ctx.fillRect(0, 0, w, h);

          // Albedo patches
          for (let i = 0; i < 600; i++) {
            const x = Math.random() * w;
            const y = Math.random() * h;
            const r = 10 + Math.random() * 55;
            ctx.fillStyle = i % 2 === 0 ? 'rgba(160,165,172,0.14)' : 'rgba(70,74,80,0.16)';
            ctx.beginPath();
            ctx.arc(x, y, r, 0, Math.PI * 2);
            ctx.fill();
          }
          // Impact craters with bright rims and dark floors
          for (let i = 0; i < 420; i++) {
            const x = Math.random() * w;
            const y = Math.random() * h;
            const r = 2 + Math.random() * 18;
            ctx.strokeStyle = 'rgba(215, 220, 226, 0.35)';
            ctx.lineWidth = 1.5;
            ctx.fillStyle = 'rgba(55, 60, 66, 0.45)';
            ctx.beginPath();
            ctx.arc(x, y, r, 0, Math.PI * 2);
            ctx.fill();
            ctx.stroke();
          }
        } 
        else if (id === 'venus') {
          // Dense creamy golden-amber sulfuric acid cloud bands
          const grad = ctx.createLinearGradient(0, 0, 0, h);
          grad.addColorStop(0, '#d9a05b');
          grad.addColorStop(0.25, '#e8be7b');
          grad.addColorStop(0.5, '#c9883e');
          grad.addColorStop(0.75, '#e8be7b');
          grad.addColorStop(1, '#d9a05b');
          ctx.fillStyle = grad;
          ctx.fillRect(0, 0, w, h);

          // Chevron-like swirling atmospheric bands
          for (let y = 0; y < h; y += 3) {
            ctx.strokeStyle = y % 6 === 0 ? 'rgba(255, 238, 198, 0.16)' : 'rgba(155, 92, 30, 0.14)';
            ctx.lineWidth = 3;
            ctx.beginPath();
            for (let x = 0; x <= w; x += 16) {
              const offset = Math.sin((x / w) * Math.PI * 4 + y * 0.04) * 14;
              if (x === 0) ctx.moveTo(x, y + offset);
              else ctx.lineTo(x, y + offset);
            }
            ctx.stroke();
          }
        } 
        else if (id === 'earth') {
          // Deep ocean base
          const oceanGrad = ctx.createLinearGradient(0, 0, 0, h);
          oceanGrad.addColorStop(0, '#0c4a6e');
          oceanGrad.addColorStop(0.5, '#0369a1');
          oceanGrad.addColorStop(1, '#0c4a6e');
          ctx.fillStyle = oceanGrad;
          ctx.fillRect(0, 0, w, h);

          // Procedural continents & landmasses
          const continents = [
            { x: 220, y: 160, rx: 95, ry: 75, rot: -0.3 }, // N America
            { x: 295, y: 310, rx: 55, ry: 90, rot: 0.2 },  // S America
            { x: 520, y: 155, rx: 75, ry: 55, rot: 0.1 },  // Europe
            { x: 545, y: 275, rx: 75, ry: 95, rot: -0.1 }, // Africa
            { x: 710, y: 165, rx: 145, ry: 85, rot: 0.08 },// Asia
            { x: 835, y: 355, rx: 55, ry: 38, rot: 0.15 }, // Australia
          ];

          continents.forEach(c => {
            for (let j = 0; j < 45; j++) {
              const angle = Math.random() * Math.PI * 2;
              const dist = Math.random() * 0.85;
              const cx = c.x + Math.cos(angle) * c.rx * dist;
              const cy = c.y + Math.sin(angle) * c.ry * dist;
              const r = 16 + Math.random() * 38;
              ctx.fillStyle = Math.random() > 0.3 ? '#15803d' : '#a16207'; // Forests & deserts
              ctx.beginPath();
              ctx.arc(cx, cy, r, 0, Math.PI * 2);
              ctx.fill();
            }
          });

          // Polar ice caps
          ctx.fillStyle = 'rgba(248, 250, 252, 0.92)';
          ctx.fillRect(0, 0, w, 30);
          ctx.fillRect(0, h - 34, w, 34);
        } 
        else if (id === 'mars') {
          // Rusty iron-oxide base
          const grad = ctx.createLinearGradient(0, 0, 0, h);
          grad.addColorStop(0, '#9a3412');
          grad.addColorStop(0.5, '#c2410c');
          grad.addColorStop(1, '#9a3412');
          ctx.fillStyle = grad;
          ctx.fillRect(0, 0, w, h);

          // Dark basaltic regions & bright dust plains
          for (let i = 0; i < 450; i++) {
            const x = Math.random() * w;
            const y = 40 + Math.random() * (h - 80);
            const r = 12 + Math.random() * 60;
            ctx.fillStyle = i % 3 === 0 ? 'rgba(67, 20, 7, 0.22)' : 'rgba(251, 146, 60, 0.16)';
            ctx.beginPath();
            ctx.arc(x, y, r, 0, Math.PI * 2);
            ctx.fill();
          }

          // Valles Marineris scar
          ctx.strokeStyle = 'rgba(50, 12, 4, 0.65)';
          ctx.lineWidth = 6;
          ctx.beginPath();
          ctx.moveTo(420, 255);
          ctx.bezierCurveTo(480, 248, 540, 265, 610, 258);
          ctx.stroke();

          // Polar ice caps
          ctx.fillStyle = 'rgba(255, 250, 245, 0.88)';
          ctx.fillRect(0, 0, w, 20);
          ctx.fillRect(0, h - 20, w, 20);
        } 
        else if (id === 'jupiter') {
          // Zonal bands (belts & zones)
          const bands = [
            { stop: 0.00, color: '#78624c' },
            { stop: 0.12, color: '#b59473' },
            { stop: 0.22, color: '#9c623e' },
            { stop: 0.30, color: '#e2cbb0' },
            { stop: 0.40, color: '#b86f42' },
            { stop: 0.50, color: '#efe2d1' },
            { stop: 0.62, color: '#a85a32' },
            { stop: 0.72, color: '#dfc19f' },
            { stop: 0.84, color: '#8f694d' },
            { stop: 1.00, color: '#6b5744' }
          ];
          const grad = ctx.createLinearGradient(0, 0, 0, h);
          bands.forEach(b => grad.addColorStop(b.stop, b.color));
          ctx.fillStyle = grad;
          ctx.fillRect(0, 0, w, h);

          // Turbulent eddies along band boundaries
          for (let y = 20; y < h - 20; y += 6) {
            ctx.strokeStyle = y % 12 === 0 ? 'rgba(255,245,230,0.15)' : 'rgba(120,55,20,0.15)';
            ctx.lineWidth = 3;
            ctx.beginPath();
            for (let x = 0; x <= w; x += 12) {
              const wave = Math.sin((x / w) * Math.PI * 8 + y * 0.2) * 5;
              if (x === 0) ctx.moveTo(x, y + wave);
              else ctx.lineTo(x, y + wave);
            }
            ctx.stroke();
          }

          // Iconic Great Red Spot in southern hemisphere
          ctx.save();
          ctx.translate(620, 325);
          ctx.scale(1.8, 1.0);
          const grsGrad = ctx.createRadialGradient(0, 0, 2, 0, 0, 34);
          grsGrad.addColorStop(0, '#dc2626');
          grsGrad.addColorStop(0.6, '#b91c1c');
          grsGrad.addColorStop(0.85, '#f97316');
          grsGrad.addColorStop(1, 'rgba(249,115,22,0)');
          ctx.fillStyle = grsGrad;
          ctx.beginPath();
          ctx.arc(0, 0, 34, 0, Math.PI * 2);
          ctx.fill();
          ctx.restore();
        } 
        else if (id === 'saturn') {
          // Golden-ochre smooth atmospheric bands
          const grad = ctx.createLinearGradient(0, 0, 0, h);
          grad.addColorStop(0.0, '#8c7a5b');
          grad.addColorStop(0.2, '#cbb389');
          grad.addColorStop(0.4, '#e6cf9e');
          grad.addColorStop(0.5, '#f2dfba');
          grad.addColorStop(0.6, '#d9bf8c');
          grad.addColorStop(0.8, '#bfa475');
          grad.addColorStop(1.0, '#7d6c50');
          ctx.fillStyle = grad;
          ctx.fillRect(0, 0, w, h);

          for (let y = 0; y < h; y += 4) {
            ctx.fillStyle = y % 8 === 0 ? 'rgba(255,255,240,0.07)' : 'rgba(90,70,40,0.06)';
            ctx.fillRect(0, y, w, 2);
          }
        } 
        else if (id === 'uranus') {
          // Pale cyan-aquamarine methane atmosphere
          const grad = ctx.createLinearGradient(0, 0, 0, h);
          grad.addColorStop(0, '#67e8f9');
          grad.addColorStop(0.5, '#a5f3fc');
          grad.addColorStop(1, '#22d3ee');
          ctx.fillStyle = grad;
          ctx.fillRect(0, 0, w, h);

          for (let y = 0; y < h; y += 12) {
            ctx.fillStyle = 'rgba(255, 255, 255, 0.06)';
            ctx.fillRect(0, y, w, 5);
          }
        } 
        else if (id === 'neptune') {
          // Deep azure-cobalt atmosphere with high-altitude methane cirrus streaks
          const grad = ctx.createLinearGradient(0, 0, 0, h);
          grad.addColorStop(0, '#1e3a8a');
          grad.addColorStop(0.3, '#1d4ed8');
          grad.addColorStop(0.5, '#2563eb');
          grad.addColorStop(0.7, '#1d4ed8');
          grad.addColorStop(1, '#172554');
          ctx.fillStyle = grad;
          ctx.fillRect(0, 0, w, h);

          // White cirrus streaks
          for (let i = 0; i < 45; i++) {
            const x = Math.random() * w;
            const y = 40 + Math.random() * (h - 80);
            const len = 40 + Math.random() * 110;
            ctx.strokeStyle = 'rgba(224, 242, 254, 0.35)';
            ctx.lineWidth = 2 + Math.random() * 3;
            ctx.beginPath();
            ctx.moveTo(x, y);
            ctx.lineTo(x + len, y + (Math.random() - 0.5) * 8);
            ctx.stroke();
          }

          // Great Dark Spot
          ctx.save();
          ctx.translate(400, 290);
          ctx.scale(1.6, 0.95);
          const gds = ctx.createRadialGradient(0, 0, 2, 0, 0, 28);
          gds.addColorStop(0, 'rgba(15, 23, 42, 0.75)');
          gds.addColorStop(1, 'rgba(30, 58, 138, 0)');
          ctx.fillStyle = gds;
          ctx.beginPath();
          ctx.arc(0, 0, 28, 0, Math.PI * 2);
          ctx.fill();
          ctx.restore();
        }

        const texture = new THREE.CanvasTexture(canvas);
        texture.wrapS = THREE.RepeatWrapping;
        texture.wrapT = THREE.ClampToEdgeWrapping;
        return texture;
      },

      createEarthCloudTexture() {
        const canvas = document.createElement('canvas');
        canvas.width = 1024;
        canvas.height = 512;
        const ctx = canvas.getContext('2d');
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        for (let i = 0; i < 380; i++) {
          const x = Math.random() * canvas.width;
          const y = Math.random() * canvas.height;
          const rx = 20 + Math.random() * 65;
          const ry = 6 + Math.random() * 18;
          ctx.fillStyle = `rgba(255, 255, 255, ${0.12 + Math.random() * 0.25})`;
          ctx.beginPath();
          ctx.ellipse(x, y, rx, ry, (Math.random() - 0.5) * 0.5, 0, Math.PI * 2);
          ctx.fill();
        }
        const tex = new THREE.CanvasTexture(canvas);
        tex.wrapS = THREE.RepeatWrapping;
        return tex;
      },

      createRingTexture(type) {
        const canvas = document.createElement('canvas');
        canvas.width = 512;
        canvas.height = 64;
        const ctx = canvas.getContext('2d');

        // Horizontal gradient from inner radius (x=0) to outer radius (x=512)
        const grad = ctx.createLinearGradient(0, 0, canvas.width, 0);
        if (type === 'saturn') {
          grad.addColorStop(0.00, 'rgba(0, 0, 0, 0)');
          grad.addColorStop(0.08, 'rgba(140, 125, 100, 0.22)'); // D & C Ring
          grad.addColorStop(0.24, 'rgba(215, 190, 145, 0.85)'); // B Ring inner
          grad.addColorStop(0.55, 'rgba(242, 222, 180, 0.95)'); // B Ring outer
          grad.addColorStop(0.62, 'rgba(15, 18, 28, 0.06)');    // Cassini Division gap
          grad.addColorStop(0.67, 'rgba(210, 190, 155, 0.78)'); // A Ring
          grad.addColorStop(0.86, 'rgba(180, 165, 135, 0.55)');
          grad.addColorStop(0.89, 'rgba(10, 12, 20, 0.05)');    // Encke Gap
          grad.addColorStop(0.95, 'rgba(195, 175, 145, 0.45)');
          grad.addColorStop(1.00, 'rgba(0, 0, 0, 0)');
        } else {
          // Uranus subtle epsilon rings
          grad.addColorStop(0.00, 'rgba(0, 0, 0, 0)');
          grad.addColorStop(0.45, 'rgba(165, 243, 252, 0.08)');
          grad.addColorStop(0.60, 'rgba(0, 0, 0, 0)');
          grad.addColorStop(0.75, 'rgba(165, 243, 252, 0.28)');
          grad.addColorStop(0.85, 'rgba(103, 232, 249, 0.42)');
          grad.addColorStop(1.00, 'rgba(0, 0, 0, 0)');
        }

        ctx.fillStyle = grad;
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        // Fine concentric ringlets
        if (type === 'saturn') {
          for (let x = 40; x < 485; x += 3) {
            if (x > 312 && x < 338) continue; // Keep Cassini division clear
            ctx.fillStyle = x % 2 === 0 ? 'rgba(255,255,255,0.08)' : 'rgba(30,20,10,0.12)';
            ctx.fillRect(x, 0, 1.5, canvas.height);
          }
        }

        return new THREE.CanvasTexture(canvas);
      },

      createSunGlowSprite() {
        const canvas = document.createElement('canvas');
        canvas.width = 256;
        canvas.height = 256;
        const ctx = canvas.getContext('2d');
        const grad = ctx.createRadialGradient(128, 128, 12, 128, 128, 128);
        grad.addColorStop(0.0, 'rgba(255, 245, 200, 1.0)');
        grad.addColorStop(0.22, 'rgba(255, 180, 40, 0.85)');
        grad.addColorStop(0.5, 'rgba(255, 95, 0, 0.35)');
        grad.addColorStop(1.0, 'rgba(255, 40, 0, 0)');
        ctx.fillStyle = grad;
        ctx.fillRect(0, 0, 256, 256);
        return new THREE.CanvasTexture(canvas);
      }
    };

    /***************************************************************************
     * 3. THREE.JS SCENE, CAMERA, ORBIT CONTROLS & CELESTIAL OBJECT BUILDER
     ***************************************************************************/
    let scene, camera, renderer, controls;
    let sunMesh, sunGlowSprite, eclipticGrid;
    const planetObjects = new Map(); // id -> { data, orbitPlaneGroup, planetPivot, mesh, cloudsMesh, moonsGroup, moonEntries:[], satsGroup, satEntries:[], orbitLine, labelEl, angle }
    const clickableMeshes = [];
    const moonTextureCache = new Map();

    // Simulation state
    const simState = {
      isPlaying: true,
      daysPerSecond: 10.0,
      elapsedEarthDays: 0,
      selectedId: 'earth',
      activeTab: 'overview', // 'overview' | 'moons' | 'satellites'
      highlightedSubId: null, // specific moon or satellite id
      isTracking: false,
      showOrbits: true,
      showLabels: true,
      showGrid: false,
      showMoonOrbits: true,
      showSatProbes: true,
      cameraTransition: null
    };

    function getCachedMoonTexture(style) {
      if (!moonTextureCache.has(style)) {
        moonTextureCache.set(style, TextureGenerator.createMoonTexture(style));
      }
      return moonTextureCache.get(style);
    }

    // Builds a 3D miniature spacecraft mesh (gold foil bus + blue solar array wings + dish)
    function createSpacecraftMesh(accentColorHex) {
      const group = new THREE.Group();

      // Central Gold/Metallic Bus
      const busGeo = new THREE.BoxGeometry(0.18, 0.18, 0.24);
      const busMat = new THREE.MeshStandardMaterial({
        color: 0xfbbf24,
        metalness: 0.7,
        roughness: 0.3
      });
      const bus = new THREE.Mesh(busGeo, busMat);
      group.add(bus);

      // Solar Panel Wings (Left + Right)
      const wingGeo = new THREE.BoxGeometry(0.75, 0.02, 0.16);
      const wingMat = new THREE.MeshBasicMaterial({
        color: new THREE.Color(accentColorHex || '#38bdf8')
      });
      const wings = new THREE.Mesh(wingGeo, wingMat);
      group.add(wings);

      // High-gain antenna dish
      const dishGeo = new THREE.ConeGeometry(0.1, 0.08, 12);
      const dishMat = new THREE.MeshBasicMaterial({ color: 0xf8fafc });
      const dish = new THREE.Mesh(dishGeo, dishMat);
      dish.rotation.x = Math.PI / 2;
      dish.position.z = 0.15;
      group.add(dish);

      return group;
    }

    function initSolarSystem() {
      const container = document.getElementById('canvas-container');

      // 1. Scene
      scene = new THREE.Scene();
      scene.background = new THREE.Color(0x030611);

      // 2. Camera
      camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 4000);
      camera.position.set(0, 68, 142);

      // 3. Renderer
      renderer = new THREE.WebGLRenderer({ antialias: true, powerPreference: 'high-performance' });
      renderer.setSize(window.innerWidth, window.innerHeight);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      renderer.toneMapping = THREE.ACESFilmicToneMapping;
      renderer.toneMappingExposure = 1.1;
      container.appendChild(renderer.domElement);

      // 4. OrbitControls
      controls = new THREE.OrbitControls(camera, renderer.domElement);
      controls.enableDamping = true;
      controls.dampingFactor = 0.06;
      controls.maxDistance = 650;
      controls.minDistance = 3.2;
      controls.zoomSpeed = 0.9;
      controls.panSpeed = 0.8;

      // 5. Lighting
      // Ambient light so night sides of planets remain inspectable
      const ambientLight = new THREE.AmbientLight(0x334155, 0.85);
      scene.add(ambientLight);

      // Central Solar PointLight
      const sunLight = new THREE.PointLight(0xfff7ed, 2.4, 0, 0);
      sunLight.position.set(0, 0, 0);
      scene.add(sunLight);

      // 6. Multi-layered Starfield Background
      createStarfield();

      // 7. Optional Ecliptic Reference Grid
      eclipticGrid = new THREE.PolarGridHelper(120, 16, 8, 128, 0x1e293b, 0x0f172a);
      eclipticGrid.visible = simState.showGrid;
      scene.add(eclipticGrid);

      // 8. Build Sun & All 8 Planets
      buildCelestialBodies();

      // 9. Build UI Navigation & Bind Events
      initUI();

      // Select Earth initially in the info panel (without locking camera tightly so user sees whole system first)
      selectBody('earth', false);

      // 10. Start Animation Loop
      let lastTime = performance.now();
      function animate(now) {
        requestAnimationFrame(animate);
        const dt = Math.min((now - lastTime) / 1000, 0.1);
        lastTime = now;
        updateSimulation(dt);
        renderer.render(scene, camera);
      }
      requestAnimationFrame(animate);
    }

    function createStarfield() {
      const starGeo = new THREE.BufferGeometry();
      const starCount = 5500;
      const positions = new Float32Array(starCount * 3);
      const colors = new Float32Array(starCount * 3);

      const palette = [
        new THREE.Color(0xffffff),
        new THREE.Color(0xe0f2fe),
        new THREE.Color(0xfef3c7),
        new THREE.Color(0xfed7aa),
        new THREE.Color(0xc7d2fe)
      ];

      for (let i = 0; i < starCount; i++) {
        // Spherical shell distribution far behind planets
        const r = 450 + Math.random() * 900;
        const theta = Math.random() * Math.PI * 2;
        const phi = Math.acos(2 * Math.random() - 1);

        positions[i * 3] = r * Math.sin(phi) * Math.cos(theta);
        positions[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
        positions[i * 3 + 2] = r * Math.cos(phi);

        const c = palette[Math.floor(Math.random() * palette.length)];
        const brightness = 0.55 + Math.random() * 0.45;
        colors[i * 3] = c.r * brightness;
        colors[i * 3 + 1] = c.g * brightness;
        colors[i * 3 + 2] = c.b * brightness;
      }

      starGeo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
      starGeo.setAttribute('color', new THREE.BufferAttribute(colors, 3));

      const starMat = new THREE.PointsMaterial({
        size: 1.6,
        vertexColors: true,
        transparent: true,
        opacity: 0.9,
        sizeAttenuation: true
      });

      const stars = new THREE.Points(starGeo, starMat);
      scene.add(stars);
    }

    function createRadialRingGeometry(innerRadius, outerRadius, segments = 128) {
      const geo = new THREE.RingGeometry(innerRadius, outerRadius, segments);
      // Remap UVs radially so 1D horizontal gradient maps from inner edge to outer edge
      const pos = geo.attributes.position;
      const uvs = geo.attributes.uv;
      const v3 = new THREE.Vector3();
      for (let i = 0; i < pos.count; i++) {
        v3.fromBufferAttribute(pos, i);
        const radius = v3.length();
        const u = (radius - innerRadius) / (outerRadius - innerRadius);
        uvs.setXY(i, u, 0.5);
      }
      return geo;
    }

    function buildCelestialBodies() {
      const labelsContainer = document.getElementById('labels-container');
      const sublabelsContainer = document.getElementById('sublabels-container');

      CELESTIAL_DATA.forEach((body, index) => {
        // Inclined orbital plane container
        const orbitPlaneGroup = new THREE.Group();
        orbitPlaneGroup.rotation.z = THREE.MathUtils.degToRad(body.orbitInclinationDeg || 0);
        scene.add(orbitPlaneGroup);

        // Pivot group positioned at planet's heliocentric coordinates
        const planetPivot = new THREE.Group();
        orbitPlaneGroup.add(planetPivot);

        // Planet Sphere Mesh
        const sphereGeo = new THREE.SphereGeometry(body.sceneRadius, 64, 64);
        const texture = TextureGenerator.createPlanetTexture(body.id);

        let material;
        if (body.id === 'sun') {
          material = new THREE.MeshBasicMaterial({ map: texture });
        } else {
          material = new THREE.MeshStandardMaterial({
            map: texture,
            roughness: body.classification.includes('Giant') ? 0.65 : 0.85,
            metalness: 0.05
          });
        }

        const mesh = new THREE.Mesh(sphereGeo, material);
        mesh.rotation.z = THREE.MathUtils.degToRad(body.axialTiltDeg || 0);
        mesh.userData = { bodyId: body.id };
        planetPivot.add(mesh);
        clickableMeshes.push(mesh);

        // If Sun, add glowing corona sprite
        if (body.id === 'sun') {
          sunMesh = mesh;
          const glowMat = new THREE.SpriteMaterial({
            map: TextureGenerator.createSunGlowSprite(),
            color: 0xffaa22,
            transparent: true,
            blending: THREE.AdditiveBlending,
            depthWrite: false
          });
          sunGlowSprite = new THREE.Sprite(glowMat);
          sunGlowSprite.scale.set(body.sceneRadius * 4.4, body.sceneRadius * 4.4, 1);
          planetPivot.add(sunGlowSprite);
        }

        // If Earth, add rotating cloud sphere
        let cloudsMesh = null;
        if (body.id === 'earth') {
          const cloudGeo = new THREE.SphereGeometry(body.sceneRadius * 1.02, 48, 48);
          const cloudMat = new THREE.MeshStandardMaterial({
            map: TextureGenerator.createEarthCloudTexture(),
            transparent: true,
            opacity: 0.85,
            depthWrite: false
          });
          cloudsMesh = new THREE.Mesh(cloudGeo, cloudMat);
          mesh.add(cloudsMesh);
        }

        // If Saturn or Uranus, build 3D Ring System
        if (body.hasRings) {
          const isSaturn = body.hasRings === 'saturn';
          const innerR = body.sceneRadius * (isSaturn ? 1.32 : 1.45);
          const outerR = body.sceneRadius * (isSaturn ? 2.45 : 1.85);
          const ringGeo = createRadialRingGeometry(innerR, outerR, 128);
          const ringMat = new THREE.MeshStandardMaterial({
            map: TextureGenerator.createRingTexture(body.hasRings),
            side: THREE.DoubleSide,
            transparent: true,
            roughness: 0.7,
            depthWrite: false
          });
          const ringMesh = new THREE.Mesh(ringGeo, ringMat);
          ringMesh.rotation.x = Math.PI / 2;
          mesh.add(ringMesh);
        }

        // ==================== BUILD 3D NATURAL MOONS SYSTEM ====================
        const moonsGroup = new THREE.Group();
        planetPivot.add(moonsGroup);
        const moonEntries = [];

        if (body.moonsList && body.moonsList.length > 0) {
          body.moonsList.forEach((mData, mIdx) => {
            const moonOrbitPlane = new THREE.Group();
            // Handle Uranus's 97.77 deg equatorial plane or standard inclination
            if (mData.equatorialTiltDeg) {
              moonOrbitPlane.rotation.z = THREE.MathUtils.degToRad(mData.equatorialTiltDeg);
              moonOrbitPlane.rotation.x = THREE.MathUtils.degToRad(mData.inclinationDeg || 0);
            } else {
              moonOrbitPlane.rotation.z = THREE.MathUtils.degToRad(mData.inclinationDeg || 0);
            }
            moonsGroup.add(moonOrbitPlane);

            // Moon Orbit Path Line
            const mPoints = [];
            const mSegs = 96;
            for (let i = 0; i <= mSegs; i++) {
              const th = (i / mSegs) * Math.PI * 2;
              mPoints.push(new THREE.Vector3(
                Math.cos(th) * mData.sceneOrbitRadius,
                0,
                Math.sin(th) * mData.sceneOrbitRadius
              ));
            }
            const mOrbitGeo = new THREE.BufferGeometry().setFromPoints(mPoints);
            const mOrbitMat = new THREE.LineBasicMaterial({
              color: new THREE.Color(mData.colorHex),
              transparent: true,
              opacity: 0.45
            });
            const mOrbitLine = new THREE.LineLoop(mOrbitGeo, mOrbitMat);
            moonOrbitPlane.add(mOrbitLine);

            // Moon Sphere Mesh
            const mGeo = new THREE.SphereGeometry(mData.sceneRadius, 28, 28);
            const mMat = new THREE.MeshStandardMaterial({
              map: getCachedMoonTexture(mData.textureStyle),
              color: new THREE.Color(mData.colorHex),
              roughness: 0.85
            });
            const mMesh = new THREE.Mesh(mGeo, mMat);
            const startAngle = (mIdx * 1.7) % (Math.PI * 2);
            mMesh.position.set(
              Math.cos(startAngle) * mData.sceneOrbitRadius,
              0,
              Math.sin(startAngle) * mData.sceneOrbitRadius
            );
            mMesh.userData = { bodyId: body.id, subType: 'moon', subId: mData.id };
            moonOrbitPlane.add(mMesh);
            clickableMeshes.push(mMesh);

            // Projected 2D Sub-Label for Moon (Visible when planet's Moons tab is open or moon is highlighted)
            const subLabel = document.createElement('div');
            subLabel.className = 'subbody-label glass-pill px-2 py-0.5 rounded-full text-[10px] font-medium text-amber-100 items-center gap-1 shadow-md border border-amber-400/40 hidden';
            subLabel.innerHTML = `<span class="w-2 h-2 rounded-full inline-block" style="background:${mData.colorHex}"></span><span>${mData.name}</span>`;
            subLabel.addEventListener('click', (e) => {
              e.stopPropagation();
              selectBody(body.id, true);
              switchPlanetTab('moons');
              highlightSubObject(mData.id);
            });
            sublabelsContainer.appendChild(subLabel);

            moonEntries.push({
              data: mData,
              orbitPlane: moonOrbitPlane,
              orbitLine: mOrbitLine,
              mesh: mMesh,
              labelEl: subLabel,
              angle: startAngle
            });
          });
        }

        // ==================== BUILD 3D ARTIFICIAL SATELLITES & PROBES ====================
        const satsGroup = new THREE.Group();
        planetPivot.add(satsGroup);
        const satEntries = [];

        if (body.satellitesList && body.satellitesList.length > 0) {
          body.satellitesList.forEach((sData, sIdx) => {
            const satOrbitPlane = new THREE.Group();
            satOrbitPlane.rotation.z = THREE.MathUtils.degToRad(sData.inclinationDeg || 0);
            satOrbitPlane.rotation.x = THREE.MathUtils.degToRad((sIdx * 28) % 60 - 30);
            satsGroup.add(satOrbitPlane);

            const satRadius = body.sceneRadius * (sData.orbitRadiusMult || 1.5);
            // Slightly elliptical orbit for realistic probe trajectories
            const eccentricityX = 1.0;
            const eccentricityZ = 0.88;

            const sPoints = [];
            const sSegs = 96;
            for (let i = 0; i <= sSegs; i++) {
              const th = (i / sSegs) * Math.PI * 2;
              sPoints.push(new THREE.Vector3(
                Math.cos(th) * satRadius * eccentricityX,
                0,
                Math.sin(th) * satRadius * eccentricityZ
              ));
            }
            const sOrbitGeo = new THREE.BufferGeometry().setFromPoints(sPoints);
            const sOrbitMat = new THREE.LineDashedMaterial({
              color: new THREE.Color(sData.color || '#38bdf8'),
              dashSize: 0.45,
              gapSize: 0.25,
              transparent: true,
              opacity: 0.55
            });
            const sOrbitLine = new THREE.Line(sOrbitGeo, sOrbitMat);
            sOrbitLine.computeLineDistances();
            satOrbitPlane.add(sOrbitLine);

            // 3D Spacecraft Mesh
            const probeMesh = createSpacecraftMesh(sData.color);
            const scaleFactor = body.id === 'sun' ? 1.8 : Math.max(0.65, body.sceneRadius * 0.35);
            probeMesh.scale.setScalar(scaleFactor);

            const startAngle = (sIdx * 2.1 + 0.5) % (Math.PI * 2);
            probeMesh.position.set(
              Math.cos(startAngle) * satRadius * eccentricityX,
              0,
              Math.sin(startAngle) * satRadius * eccentricityZ
            );
            satOrbitPlane.add(probeMesh);

            // Projected 2D Sub-Label for Spacecraft
            const satLabel = document.createElement('div');
            satLabel.className = 'subbody-label glass-pill px-2 py-0.5 rounded-full text-[10px] font-mono text-cyan-200 items-center gap-1 shadow-md border border-cyan-400/50 hidden';
            satLabel.innerHTML = `<i class="fa-solid fa-satellite text-[9px]" style="color:${sData.color}"></i><span>${sData.name.split(' (')[0]}</span>`;
            satLabel.addEventListener('click', (e) => {
              e.stopPropagation();
              selectBody(body.id, true);
              switchPlanetTab('satellites');
              highlightSubObject(sData.id);
            });
            sublabelsContainer.appendChild(satLabel);

            satEntries.push({
              data: sData,
              orbitPlane: satOrbitPlane,
              orbitLine: sOrbitLine,
              mesh: probeMesh,
              labelEl: satLabel,
              satRadius,
              eccentricityX,
              eccentricityZ,
              angle: startAngle
            });
          });
        }

        // Visible Orbital Path Ring (for planets around Sun)
        let orbitLine = null;
        if (body.orbitRadius > 0) {
          const points = [];
          const segments = 180;
          for (let i = 0; i <= segments; i++) {
            const theta = (i / segments) * Math.PI * 2;
            points.push(new THREE.Vector3(
              Math.cos(theta) * body.orbitRadius,
              0,
              Math.sin(theta) * body.orbitRadius
            ));
          }
          const orbitGeo = new THREE.BufferGeometry().setFromPoints(points);
          const orbitMat = new THREE.LineBasicMaterial({
            color: new THREE.Color(body.badgeColor),
            transparent: true,
            opacity: 0.32
          });
          orbitLine = new THREE.LineLoop(orbitGeo, orbitMat);
          orbitPlaneGroup.add(orbitLine);
        }

        const initialAngle = index === 0 ? 0 : (index * 1.15) % (Math.PI * 2);
        if (body.orbitRadius > 0) {
          planetPivot.position.set(
            Math.cos(initialAngle) * body.orbitRadius,
            0,
            Math.sin(initialAngle) * body.orbitRadius
          );
        }

        // Create Projected 2D HTML Floating Label for Planet
        const labelEl = document.createElement('div');
        labelEl.className = 'planet-label glass-pill px-2.5 py-1 rounded-full text-[11px] font-medium text-slate-100 flex items-center shadow-md';
        labelEl.innerHTML = `
          <span class="planet-label-dot" style="background-color: ${body.badgeColor}; color: ${body.badgeColor}"></span>
          <span>${body.name}</span>
          ${body.totalMoonsCount > 0 ? `<span class="ml-1.5 text-[9px] font-mono px-1 rounded bg-amber-500/20 text-amber-300 hidden sm:inline">${body.totalMoonsCount}🌙</span>` : ''}
        `;
        labelEl.addEventListener('click', (e) => {
          e.stopPropagation();
          selectBody(body.id, true);
        });
        labelsContainer.appendChild(labelEl);

        planetObjects.set(body.id, {
          data: body,
          orbitPlaneGroup,
          planetPivot,
          mesh,
          cloudsMesh,
          moonsGroup,
          moonEntries,
          satsGroup,
          satEntries,
          orbitLine,
          labelEl,
          angle: initialAngle
        });
      });

      updateSubSystemsVisibility();
    }

    // Controls visibility of 3D Moon orbits & 3D Spacecraft probes based on selection & active tab
    function updateSubSystemsVisibility() {
      planetObjects.forEach((entry, bodyId) => {
        const isSelectedPlanet = bodyId === simState.selectedId;

        // Moons are always visible on planets, and highlighted when selected
        entry.moonEntries.forEach(m => {
          const isHighlighted = simState.highlightedSubId === m.data.id;
          m.orbitLine.visible = simState.showMoonOrbits && (isSelectedPlanet || entry.data.id === 'earth');
          m.orbitLine.material.opacity = isHighlighted ? 1.0 : (simState.activeTab === 'moons' && isSelectedPlanet ? 0.78 : 0.35);
        });

        // Artificial satellites & probes appear around the currently selected planet when enabled
        entry.satsGroup.visible = isSelectedPlanet && simState.showSatProbes;
        entry.satEntries.forEach(s => {
          const isHighlighted = simState.highlightedSubId === s.data.id;
          s.orbitLine.material.opacity = isHighlighted ? 1.0 : (simState.activeTab === 'satellites' ? 0.8 : 0.38);
        });
      });
    }

    /***************************************************************************
     * 4. ANIMATION LOOP, KEPLERIAN ORBITS, MOONS, SATELLITES & CAMERA TRACKING
     ***************************************************************************/
    const tempVec3 = new THREE.Vector3();
    const prevTrackedWorldPos = new THREE.Vector3();

    function updateSimulation(dt) {
      let trackedEntry = null;
      if (simState.isTracking && simState.selectedId) {
        trackedEntry = planetObjects.get(simState.selectedId);
        if (trackedEntry) {
          trackedEntry.planetPivot.getWorldPosition(prevTrackedWorldPos);
        }
      }

      if (simState.isPlaying) {
        const deltaDays = dt * simState.daysPerSecond;
        simState.elapsedEarthDays += deltaDays;

        const years = (simState.elapsedEarthDays / 365.256).toFixed(2);
        const daysInt = Math.floor(simState.elapsedEarthDays);
        const clockEl = document.getElementById('sim-date-display');
        if (clockEl) {
          clockEl.textContent = `Year ${years} (${daysInt.toLocaleString()} d)`;
        }

        planetObjects.forEach((entry) => {
          const { data, planetPivot, mesh, cloudsMesh, moonEntries, satEntries } = entry;

          // 1. Planetary Orbital Revolution around the Sun
          if (data.orbitRadius > 0 && data.orbitalPeriodDays > 0) {
            const angularVelocity = (Math.PI * 2) / data.orbitalPeriodDays;
            entry.angle -= angularVelocity * deltaDays;
            planetPivot.position.set(
              Math.cos(entry.angle) * data.orbitRadius,
              0,
              Math.sin(entry.angle) * data.orbitRadius
            );
          }

          // 2. Planetary Axial Rotation
          const rotDirection = data.rotationPeriodHours < 0 ? -1 : 1;
          const absRotDays = Math.abs(data.rotationPeriodHours) / 24;
          const visualSpinSpeed = (1 / Math.pow(absRotDays, 0.45)) * 0.35;
          mesh.rotation.y += rotDirection * visualSpinSpeed * deltaDays;

          if (cloudsMesh) {
            cloudsMesh.rotation.y += 0.08 * deltaDays;
          }

          // 3. Natural Moons Orbital Revolution (Damped so fast inner moons like Phobos/Io remain smooth)
          moonEntries.forEach(m => {
            const period = m.data.orbitalPeriodDays;
            const dir = period < 0 ? 1 : -1; // Retrograde vs Prograde
            const dampedRate = (Math.PI * 2) / Math.max(Math.abs(period), 1.8);
            m.angle += dir * dampedRate * (deltaDays * 0.35);
            m.mesh.position.set(
              Math.cos(m.angle) * m.data.sceneOrbitRadius,
              0,
              Math.sin(m.angle) * m.data.sceneOrbitRadius
            );
            m.mesh.rotation.y += 0.5 * dt;
          });

          // 4. Artificial Satellites & Probes Orbital Motion (Steady real-time visual speed so user can inspect even when paused/slow)
          satEntries.forEach(s => {
            s.angle -= (s.data.speedMult || 1.8) * dt * 0.55;
            s.mesh.position.set(
              Math.cos(s.angle) * s.satRadius * s.eccentricityX,
              0,
              Math.sin(s.angle) * s.satRadius * s.eccentricityZ
            );
            s.mesh.rotation.y = -s.angle;
          });
        });
      } else {
        // Even when planetary time is paused, gently animate spacecraft solar-array orientation
        planetObjects.forEach((entry) => {
          entry.satEntries.forEach(s => {
            s.mesh.rotation.y += dt * 0.4;
          });
        });
      }

      // Smooth Camera Transition or Active Planet Tracking
      if (simState.cameraTransition) {
        const tr = simState.cameraTransition;
        tr.progress = Math.min(1, tr.progress + dt * 2.2);
        const t = tr.progress * tr.progress * (3 - 2 * tr.progress);

        if (tr.targetBodyId) {
          const targetObj = planetObjects.get(tr.targetBodyId);
          targetObj.planetPivot.getWorldPosition(tempVec3);
          tr.endTarget.copy(tempVec3);
          tr.endPos.copy(tempVec3).add(tr.offsetVec);
        }

        camera.position.lerpVectors(tr.startPos, tr.endPos, t);
        controls.target.lerpVectors(tr.startTarget, tr.endTarget, t);

        if (tr.progress >= 1) {
          simState.cameraTransition = null;
        }
      } else if (trackedEntry) {
        trackedEntry.planetPivot.getWorldPosition(tempVec3);
        const deltaMove = tempVec3.clone().sub(prevTrackedWorldPos);
        camera.position.add(deltaMove);
        controls.target.copy(tempVec3);
      }

      controls.update();

      if (simState.selectedId) {
        const selEntry = planetObjects.get(simState.selectedId);
        if (selEntry) {
          const deg = (((-selEntry.angle * 180) / Math.PI) % 360 + 360) % 360;
          document.getElementById('info-live-angle').textContent = `${deg.toFixed(1)}°`;
        }
      }

      updateProjectedLabels();
    }

    function updateProjectedLabels() {
      const halfW = window.innerWidth / 2;
      const halfH = window.innerHeight / 2;

      planetObjects.forEach((entry, bodyId) => {
        const { data, planetPivot, labelEl, moonEntries, satEntries } = entry;

        if (!simState.showLabels) {
          labelEl.style.display = 'none';
        } else {
          planetPivot.getWorldPosition(tempVec3);
          tempVec3.y += data.sceneRadius * 1.35;
          tempVec3.project(camera);

          if (tempVec3.z > 1) {
            labelEl.style.display = 'none';
          } else {
            const x = tempVec3.x * halfW + halfW;
            const y = -(tempVec3.y * halfH) + halfH;
            labelEl.style.display = 'flex';
            labelEl.style.left = `${x}px`;
            labelEl.style.top = `${y}px`;
          }
        }

        // Project 2D labels for Moons & Spacecraft of the currently selected planet
        const isSelected = bodyId === simState.selectedId;
        moonEntries.forEach(m => {
          const showMoonTag = isSelected && simState.showLabels && (simState.activeTab === 'moons' || simState.highlightedSubId === m.data.id);
          if (!showMoonTag) {
            m.labelEl.style.display = 'none';
            return;
          }
          m.mesh.getWorldPosition(tempVec3);
          tempVec3.y += m.data.sceneRadius * 1.6;
          tempVec3.project(camera);
          if (tempVec3.z > 1) {
            m.labelEl.style.display = 'none';
            return;
          }
          m.labelEl.style.display = 'flex';
          m.labelEl.style.left = `${tempVec3.x * halfW + halfW}px`;
          m.labelEl.style.top = `${-(tempVec3.y * halfH) + halfH}px`;
        });

        satEntries.forEach(s => {
          const showSatTag = isSelected && simState.showLabels && simState.showSatProbes && (simState.activeTab === 'satellites' || simState.highlightedSubId === s.data.id);
          if (!showSatTag) {
            s.labelEl.style.display = 'none';
            return;
          }
          s.mesh.getWorldPosition(tempVec3);
          tempVec3.y += 0.35;
          tempVec3.project(camera);
          if (tempVec3.z > 1) {
            s.labelEl.style.display = 'none';
            return;
          }
          s.labelEl.style.display = 'flex';
          s.labelEl.style.left = `${tempVec3.x * halfW + halfW}px`;
          s.labelEl.style.top = `${-(tempVec3.y * halfH) + halfH}px`;
        });
      });
    }

    /***************************************************************************
     * 5. SELECTION, 3-TAB ACTION MENU, MOONS & SATELLITES RENDERERS
     ***************************************************************************/
    function switchPlanetTab(tabName) {
      simState.activeTab = tabName;

      // Update Tab Buttons
      document.querySelectorAll('.planet-tab-btn').forEach(btn => {
        if (btn.dataset.tab === tabName) {
          btn.classList.add('tab-btn-active');
          btn.classList.remove('bg-slate-900/50', 'border-slate-800/80');
        } else {
          btn.classList.remove('tab-btn-active');
          btn.classList.add('bg-slate-900/50', 'border-slate-800/80');
        }
      });

      // Toggle Tab Panes
      document.getElementById('tab-pane-overview').classList.toggle('hidden', tabName !== 'overview');
      document.getElementById('tab-pane-moons').classList.toggle('hidden', tabName !== 'moons');
      document.getElementById('tab-pane-satellites').classList.toggle('hidden', tabName !== 'satellites');

      updateSubSystemsVisibility();
    }

    function highlightSubObject(subId) {
      simState.highlightedSubId = simState.highlightedSubId === subId ? null : subId;

      document.querySelectorAll('.sub-card-item').forEach(card => {
        if (card.dataset.subid === simState.highlightedSubId) {
          card.classList.add('ring-2', 'ring-sky-400', 'bg-slate-800/90');
        } else {
          card.classList.remove('ring-2', 'ring-sky-400', 'bg-slate-800/90');
        }
      });

      updateSubSystemsVisibility();
    }

    function zoomToPlanetSubSystem(mode) {
      const entry = planetObjects.get(simState.selectedId);
      if (!entry) return;
      const d = entry.data;

      simState.isTracking = true;
      const trackingBadge = document.getElementById('info-tracking-badge');
      trackingBadge.classList.remove('hidden');
      trackingBadge.classList.add('flex');

      let dist = Math.max(d.sceneRadius * 4.5, 6.5);
      if (mode === 'moons' && d.moonsList.length > 0) {
        const maxMoonOrbit = Math.max(...d.moonsList.map(m => m.sceneOrbitRadius));
        dist = maxMoonOrbit * 2.15;
      } else if (mode === 'satellites') {
        dist = Math.max(d.sceneRadius * 3.8, 5.2);
      }

      const offsetVec = new THREE.Vector3(dist * 0.8, dist * 0.65, dist * 0.85);
      const targetPos = new THREE.Vector3();
      entry.planetPivot.getWorldPosition(targetPos);

      simState.cameraTransition = {
        startPos: camera.position.clone(),
        endPos: targetPos.clone().add(offsetVec),
        startTarget: controls.target.clone(),
        endTarget: targetPos.clone(),
        targetBodyId: simState.selectedId,
        offsetVec,
        progress: 0
      };
    }

    function selectBody(bodyId, focusCamera = true) {
      const entry = planetObjects.get(bodyId);
      if (!entry) return;

      simState.selectedId = bodyId;
      simState.highlightedSubId = null;
      const d = entry.data;

      // Highlight selected orbit ring & nav buttons
      planetObjects.forEach((obj, id) => {
        if (obj.orbitLine) {
          const isSelected = id === bodyId;
          obj.orbitLine.material.opacity = isSelected ? 0.85 : 0.28;
        }
        if (obj.labelEl) {
          if (id === bodyId) {
            obj.labelEl.classList.add('ring-2', 'ring-sky-400', 'bg-slate-900/95');
          } else {
            obj.labelEl.classList.remove('ring-2', 'ring-sky-400', 'bg-slate-900/95');
          }
        }
      });

      document.querySelectorAll('.nav-planet-btn').forEach(btn => {
        if (btn.dataset.id === bodyId) {
          btn.classList.add('bg-sky-500/25', 'border-sky-400/60', 'text-white');
          btn.classList.remove('border-transparent', 'text-slate-300');
        } else {
          btn.classList.remove('bg-sky-500/25', 'border-sky-400/60', 'text-white');
          btn.classList.add('border-transparent', 'text-slate-300');
        }
      });

      // Populate Right-Hand Telemetry Panel Header & Tab Badges
      document.getElementById('info-panel').classList.remove('hidden');
      document.getElementById('info-icon').textContent = d.icon;
      document.getElementById('info-color-badge').style.backgroundColor = `${d.badgeColor}28`;
      document.getElementById('info-name').textContent = d.name;
      document.getElementById('info-type').textContent = d.classification;
      document.getElementById('info-desc').textContent = d.description;

      // Update Tab Badges & Quick Jump Counts
      document.getElementById('tab-badge-moons').textContent = d.moonsBadgeText;
      document.getElementById('tab-badge-satellites').textContent = d.satellitesBadgeText;
      document.getElementById('overview-moons-count').textContent = d.moonsBadgeText;
      document.getElementById('overview-sats-count').textContent = d.satellitesBadgeText;

      // Populate Overview Tab
      document.getElementById('info-diameter').textContent = d.actualDiameterKm;
      document.getElementById('info-diameter-rel').textContent = d.diameterRelativeEarth;
      document.getElementById('info-distance').textContent = d.distanceDisplay;
      document.getElementById('info-distance-km').textContent = d.distanceKmDisplay;
      document.getElementById('info-orbit').textContent = d.orbitalPeriodDisplay;
      document.getElementById('info-velocity').textContent = `Velocity: ${d.orbitalVelocityDisplay}`;
      document.getElementById('info-rotation').textContent = d.rotationDisplay;
      document.getElementById('info-tilt').textContent = `Axial Tilt: ${d.axialTiltDeg}°`;
      document.getElementById('info-temp').textContent = d.temperatureDisplay;
      document.getElementById('info-moons').textContent = d.moonsDisplay;
      document.getElementById('info-gravity').textContent = `Gravity: ${d.gravityDisplay}`;

      document.getElementById('info-scale-note').textContent = d.diameterRelativeEarth;
      document.getElementById('info-size-bar').style.width = `${d.logSizeBar}%`;

      const totalSec = Math.round(d.lightTimeMinutes * 60);
      const mins = Math.floor(totalSec / 60);
      const secs = totalSec % 60;
      document.getElementById('info-light-time').textContent =
        totalSec === 0 ? '0 min 0 sec (Source)' : `${mins} min ${secs} sec`;

      const factsList = document.getElementById('info-facts');
      factsList.innerHTML = d.facts.map(fact => `
        <li class="flex items-start gap-2 bg-slate-900/50 border border-slate-800/70 p-2 rounded-lg">
          <i class="fa-solid fa-caret-right text-sky-400 mt-0.5"></i>
          <span>${fact}</span>
        </li>
      `).join('');

      // Populate Tab 2: Natural Moons Section
      document.getElementById('moons-total-heading').textContent =
        d.totalMoonsCount === 1 ? '1 Confirmed Natural Moon' : `${d.totalMoonsCount} Confirmed Natural Moons`;
      document.getElementById('moons-count-circle').textContent = d.totalMoonsCount;
      document.getElementById('moons-system-summary').textContent = d.moonsSummary;

      const moonsContainer = document.getElementById('moons-cards-container');
      if (d.moonsList.length === 0) {
        moonsContainer.innerHTML = `
          <div class="bg-slate-900/60 border border-slate-800 rounded-xl p-4 text-center space-y-1.5">
            <i class="fa-regular fa-circle-xmark text-slate-500 text-lg"></i>
            <div class="font-semibold text-slate-300">No Natural Moons in Orbit</div>
            <p class="text-[11px] text-slate-400">Solar gravitational tides prevent stable natural satellite capture around ${d.name}.</p>
          </div>
        `;
      } else {
        moonsContainer.innerHTML = d.moonsList.map(m => `
          <div data-subid="${m.id}" class="sub-card-item cursor-pointer bg-slate-900/75 hover:bg-slate-800/80 border border-slate-800 rounded-xl p-3 space-y-2 transition">
            <div class="flex items-center justify-between">
              <div class="flex items-center gap-2.5">
                <span class="w-4 h-4 rounded-full border border-white/30 shadow-sm shrink-0" style="background-color: ${m.colorHex}; box-shadow: 0 0 10px ${m.colorHex}80"></span>
                <div>
                  <h4 class="font-display font-bold text-xs text-white">${m.name}</h4>
                  <span class="text-[10px] text-amber-300/90 block">${m.colorDesc}</span>
                </div>
              </div>
              <span class="text-[10px] font-mono px-2 py-0.5 rounded-full ${m.isRetrograde ? 'bg-pink-500/20 text-pink-300 border border-pink-500/30' : 'bg-emerald-500/15 text-emerald-300 border border-emerald-500/30'}">
                ${m.isRetrograde ? '↺ Retrograde' : '↻ Prograde'}
              </span>
            </div>

            <div class="grid grid-cols-3 gap-1.5 text-[10px] bg-slate-950/60 p-2 rounded-lg border border-slate-800/80">
              <div>
                <span class="text-slate-400 block">Diameter</span>
                <span class="font-mono font-semibold text-slate-200">${m.diameterKm}</span>
              </div>
              <div>
                <span class="text-slate-400 block">Orbit Period</span>
                <span class="font-mono font-semibold text-amber-300">${m.orbitalPeriodDisplay.split(' (')[0]}</span>
              </div>
              <div>
                <span class="text-slate-400 block">Distance</span>
                <span class="font-mono font-semibold text-sky-300">${m.orbitDistanceKm}</span>
              </div>
            </div>

            <p class="text-[11px] text-slate-300 leading-relaxed">${m.traits}</p>
          </div>
        `).join('');

        moonsContainer.querySelectorAll('.sub-card-item').forEach(card => {
          card.addEventListener('click', () => {
            highlightSubObject(card.dataset.subid);
            zoomToPlanetSubSystem('moons');
          });
        });
      }

      // Populate Tab 3: Artificial Satellites & Probes Section
      document.getElementById('sats-total-heading').textContent = d.totalSatellitesCount;
      document.getElementById('sats-count-circle').textContent = d.satellitesBadgeText;
      document.getElementById('sats-system-summary').textContent = d.satellitesSummary;

      const satsContainer = document.getElementById('sats-cards-container');
      satsContainer.innerHTML = d.satellitesList.map(s => {
        const isActive = s.status.toLowerCase().includes('active');
        return `
          <div data-subid="${s.id}" class="sub-card-item cursor-pointer bg-slate-900/75 hover:bg-slate-800/80 border border-slate-800 rounded-xl p-3 space-y-2 transition">
            <div class="flex items-start justify-between gap-2">
              <div class="flex items-center gap-2">
                <span class="w-2.5 h-2.5 rounded-full shrink-0" style="background-color: ${s.color}; box-shadow: 0 0 8px ${s.color}"></span>
                <div>
                  <h4 class="font-display font-bold text-xs text-white leading-snug">${s.name}</h4>
                  <span class="text-[10px] font-mono text-cyan-300">${s.agency} &bull; ${s.type}</span>
                </div>
              </div>
              <span class="text-[9px] font-mono uppercase px-1.5 py-0.5 rounded shrink-0 ${isActive ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30' : 'bg-slate-700/60 text-slate-300 border border-slate-600'}">
                ${s.status}
              </span>
            </div>

            <div class="text-[10px] font-mono bg-slate-950/60 px-2.5 py-1.5 rounded-lg border border-slate-800/80 flex items-center justify-between text-slate-300">
              <span><i class="fa-solid fa-route text-cyan-400 mr-1.5"></i>${s.orbitDesc}</span>
            </div>

            <p class="text-[11px] text-slate-300 leading-relaxed">${s.details}</p>
          </div>
        `;
      }).join('');

      satsContainer.querySelectorAll('.sub-card-item').forEach(card => {
        card.addEventListener('click', () => {
          highlightSubObject(card.dataset.subid);
          zoomToPlanetSubSystem('satellites');
        });
      });

      updateSubSystemsVisibility();

      // Camera Focus / Tracking
      const trackingBadge = document.getElementById('info-tracking-badge');
      if (focusCamera) {
        simState.isTracking = true;
        trackingBadge.classList.remove('hidden');
        trackingBadge.classList.add('flex');

        const dist = Math.max(d.sceneRadius * 4.5, 6.5);
        const offsetVec = new THREE.Vector3(dist * 0.85, dist * 0.55, dist * 0.95);
        const targetPos = new THREE.Vector3();
        entry.planetPivot.getWorldPosition(targetPos);

        simState.cameraTransition = {
          startPos: camera.position.clone(),
          endPos: targetPos.clone().add(offsetVec),
          startTarget: controls.target.clone(),
          endTarget: targetPos.clone(),
          targetBodyId: bodyId,
          offsetVec,
          progress: 0
        };
      } else {
        simState.isTracking = false;
        trackingBadge.classList.add('hidden');
        trackingBadge.classList.remove('flex');
      }
    }

    function setCameraView(endPosVec, endTargetVec = new THREE.Vector3(0, 0, 0)) {
      simState.isTracking = false;
      const trackingBadge = document.getElementById('info-tracking-badge');
      trackingBadge.classList.add('hidden');
      trackingBadge.classList.remove('flex');

      simState.cameraTransition = {
        startPos: camera.position.clone(),
        endPos: endPosVec,
        startTarget: controls.target.clone(),
        endTarget: endTargetVec,
        targetBodyId: null,
        progress: 0
      };
    }

    function initUI() {
      const desktopNav = document.getElementById('planet-nav-desktop');
      const mobileNav = document.getElementById('planet-nav-mobile');

      CELESTIAL_DATA.forEach(body => {
        // Desktop button
        const dBtn = document.createElement('button');
        dBtn.dataset.id = body.id;
        dBtn.className = 'nav-planet-btn flex items-center gap-2.5 px-3 py-2 rounded-xl text-xs font-medium border border-transparent text-slate-300 hover:bg-white/10 hover:text-white transition text-left';
        dBtn.innerHTML = `
          <span class="text-base">${body.icon}</span>
          <div>
            <div class="font-semibold leading-none">${body.name.replace('The ', '')}</div>
            <div class="text-[10px] text-slate-400 font-mono mt-0.5">${body.distanceAU === 0 ? 'Star' : `${body.totalMoonsCount}🌙 • ${body.distanceDisplay}`}</div>
          </div>
        `;
        dBtn.addEventListener('click', () => selectBody(body.id, true));
        desktopNav.appendChild(dBtn);

        // Mobile pill button
        const mBtn = document.createElement('button');
        mBtn.dataset.id = body.id;
        mBtn.className = 'nav-planet-btn shrink-0 flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-xs font-medium border border-transparent text-slate-300';
        mBtn.innerHTML = `<span>${body.icon}</span><span>${body.name.replace('The ', '')}</span>`;
        mBtn.addEventListener('click', () => selectBody(body.id, true));
        mobileNav.appendChild(mBtn);
      });

      // Bind 3-Tab Action Menu Buttons
      document.querySelectorAll('.planet-tab-btn').forEach(btn => {
        btn.addEventListener('click', () => switchPlanetTab(btn.dataset.tab));
      });
      document.getElementById('overview-jump-moons').addEventListener('click', () => {
        switchPlanetTab('moons');
        zoomToPlanetSubSystem('moons');
      });
      document.getElementById('overview-jump-sats').addEventListener('click', () => {
        switchPlanetTab('satellites');
        zoomToPlanetSubSystem('satellites');
      });

      // Bind Moons & Satellites 3D Action Buttons
      document.getElementById('btn-zoom-moons').addEventListener('click', () => zoomToPlanetSubSystem('moons'));
      document.getElementById('btn-toggle-moon-orbits').addEventListener('click', () => {
        simState.showMoonOrbits = !simState.showMoonOrbits;
        document.getElementById('moon-orbits-btn-label').textContent = `3D Orbits: ${simState.showMoonOrbits ? 'ON' : 'OFF'}`;
        updateSubSystemsVisibility();
      });

      document.getElementById('btn-zoom-sats').addEventListener('click', () => zoomToPlanetSubSystem('satellites'));
      document.getElementById('btn-toggle-sat-orbits').addEventListener('click', () => {
        simState.showSatProbes = !simState.showSatProbes;
        document.getElementById('sat-orbits-btn-label').textContent = `3D Probes: ${simState.showSatProbes ? 'ON' : 'OFF'}`;
        updateSubSystemsVisibility();
      });

      // Raycaster for 3D Planet & Moon Clicking & Pointer Hover
      const raycaster = new THREE.Raycaster();
      const pointer = new THREE.Vector2();
      let pointerDownPos = { x: 0, y: 0 };

      renderer.domElement.addEventListener('pointerdown', (e) => {
        pointerDownPos = { x: e.clientX, y: e.clientY };
      });

      renderer.domElement.addEventListener('pointerup', (e) => {
        const moveDist = Math.hypot(e.clientX - pointerDownPos.x, e.clientY - pointerDownPos.y);
        if (moveDist > 6) return;

        pointer.x = (e.clientX / window.innerWidth) * 2 - 1;
        pointer.y = -(e.clientY / window.innerHeight) * 2 + 1;
        raycaster.setFromCamera(pointer, camera);

        const intersects = raycaster.intersectObjects(clickableMeshes, false);
        if (intersects.length > 0) {
          const hitData = intersects[0].object.userData;
          if (hitData.bodyId) {
            selectBody(hitData.bodyId, true);
            if (hitData.subType === 'moon' && hitData.subId) {
              switchPlanetTab('moons');
              highlightSubObject(hitData.subId);
            }
          }
        }
      });

      // Hover cursor feedback
      renderer.domElement.addEventListener('pointermove', (e) => {
        pointer.x = (e.clientX / window.innerWidth) * 2 - 1;
        pointer.y = -(e.clientY / window.innerHeight) * 2 + 1;
        raycaster.setFromCamera(pointer, camera);
        const intersects = raycaster.intersectObjects(clickableMeshes, false);
        renderer.domElement.style.cursor = intersects.length > 0 ? 'pointer' : 'grab';
      });

      // Play / Pause Controls
      const btnPlayPause = document.getElementById('btn-play-pause');
      const iconPlayPause = document.getElementById('icon-play-pause');
      function togglePlayPause() {
        simState.isPlaying = !simState.isPlaying;
        iconPlayPause.className = simState.isPlaying ? 'fa-solid fa-pause text-sm' : 'fa-solid fa-play text-sm ml-0.5';
      }
      btnPlayPause.addEventListener('click', togglePlayPause);
      window.addEventListener('keydown', (e) => {
        if (e.code === 'Space' && document.activeElement.tagName !== 'INPUT') {
          e.preventDefault();
          togglePlayPause();
        }
      });

      // Speed Slider & Presets
      const speedSlider = document.getElementById('speed-slider');
      const speedReadout = document.getElementById('speed-readout');
      function updateSpeed(daysPerSec) {
        simState.daysPerSecond = parseFloat(daysPerSec);
        speedSlider.value = simState.daysPerSecond;
        const mult = (simState.daysPerSecond / 10).toFixed(1);
        speedReadout.textContent = `${simState.daysPerSecond.toFixed(1)} d/s (${mult}x)`;

        document.querySelectorAll('.speed-preset').forEach(btn => {
          if (parseFloat(btn.dataset.speed) === simState.daysPerSecond) {
            btn.className = 'speed-preset px-2 py-1 rounded-lg bg-sky-500/20 text-sky-300 border border-sky-500/30 transition';
          } else {
            btn.className = 'speed-preset px-2 py-1 rounded-lg text-slate-400 hover:text-white transition';
          }
        });
      }
      speedSlider.addEventListener('input', (e) => updateSpeed(e.target.value));
      document.querySelectorAll('.speed-preset').forEach(btn => {
        btn.addEventListener('click', () => updateSpeed(btn.dataset.speed));
      });

      // Visual Toggles (Orbits, Labels, Grid)
      const btnOrbits = document.getElementById('toggle-orbits');
      btnOrbits.addEventListener('click', () => {
        simState.showOrbits = !simState.showOrbits;
        planetObjects.forEach(obj => {
          if (obj.orbitLine) obj.orbitLine.visible = simState.showOrbits;
        });
        btnOrbits.className = simState.showOrbits
          ? 'px-2.5 py-1.5 rounded-xl text-xs font-medium bg-sky-500/20 text-sky-300 border border-sky-400/30 transition flex items-center gap-1.5'
          : 'px-2.5 py-1.5 rounded-xl text-xs font-medium bg-slate-800/70 text-slate-400 border border-slate-700/60 transition flex items-center gap-1.5';
      });

      const btnLabels = document.getElementById('toggle-labels');
      btnLabels.addEventListener('click', () => {
        simState.showLabels = !simState.showLabels;
        btnLabels.className = simState.showLabels
          ? 'px-2.5 py-1.5 rounded-xl text-xs font-medium bg-sky-500/20 text-sky-300 border border-sky-400/30 transition flex items-center gap-1.5'
          : 'px-2.5 py-1.5 rounded-xl text-xs font-medium bg-slate-800/70 text-slate-400 border border-slate-700/60 transition flex items-center gap-1.5';
      });

      const btnGrid = document.getElementById('toggle-grid');
      btnGrid.addEventListener('click', () => {
        simState.showGrid = !simState.showGrid;
        eclipticGrid.visible = simState.showGrid;
        btnGrid.className = simState.showGrid
          ? 'px-2.5 py-1.5 rounded-xl text-xs font-medium bg-sky-500/20 text-sky-300 border border-sky-400/30 transition flex items-center gap-1.5'
          : 'px-2.5 py-1.5 rounded-xl text-xs font-medium bg-slate-800/70 text-slate-400 border border-slate-700/60 transition flex items-center gap-1.5';
      });

      // Camera View Presets
      document.getElementById('cam-overview').addEventListener('click', () => {
        setCameraView(new THREE.Vector3(0, 68, 142));
      });
      document.getElementById('cam-top').addEventListener('click', () => {
        setCameraView(new THREE.Vector3(0, 210, 0.1));
      });
      document.getElementById('cam-inner').addEventListener('click', () => {
        setCameraView(new THREE.Vector3(0, 28, 56));
      });

      // Unfocus / Release Camera Lock button on info panel
      document.getElementById('btn-unfocus').addEventListener('click', () => {
        setCameraView(new THREE.Vector3(0, 68, 142));
      });

      // Mobile Collapse/Expand Info Panel Body
      const btnTogglePanelBody = document.getElementById('btn-toggle-panel-body');
      const infoPanelBody = document.getElementById('info-panel-body');
      const iconTogglePanel = document.getElementById('icon-toggle-panel');
      btnTogglePanelBody.addEventListener('click', () => {
        const isHidden = infoPanelBody.classList.toggle('hidden');
        iconTogglePanel.className = isHidden ? 'fa-solid fa-chevron-up text-xs' : 'fa-solid fa-chevron-down text-xs';
      });

      // Modals (Scale Info & README/GitHub)
      const modalScale = document.getElementById('modal-scale');
      const openScale = () => { modalScale.classList.remove('hidden'); modalScale.classList.add('flex'); };
      const closeScale = () => { modalScale.classList.add('hidden'); modalScale.classList.remove('flex'); };
      document.getElementById('btn-scale-info').addEventListener('click', openScale);
      document.getElementById('close-scale-modal').addEventListener('click', closeScale);
      document.getElementById('ack-scale-modal').addEventListener('click', closeScale);

      // Responsive Window Resize
      window.addEventListener('resize', () => {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
      });
    }

    window.onload = initSolarSystem;
