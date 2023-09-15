const scene = new THREE.Scene();

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.getElementById("scene-container").appendChild(renderer.domElement);

const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);
camera.position.z = 5;

const geometry = new THREE.BufferGeometry();

const material = new THREE.LineBasicMaterial({ color: 0x00ff00 });

const line = new THREE.LineSegments(geometry, material);

fetch("lines.xml")
  .then((response) => response.text())
  .then((xmlData) => {
    const parser = new DOMParser();
    const xmlDoc = parser.parseFromString(xmlData, "text/xml");
    const lines = xmlDoc.querySelectorAll("Line");

    lines.forEach((lineData) => {
      const points = [];

      const pointElements = lineData.querySelectorAll("Point");
      pointElements.forEach((point) => {
        const x = parseFloat(point.querySelector("X").textContent);
        const y = parseFloat(point.querySelector("Y").textContent);
        const z = parseFloat(point.querySelector("Z").textContent);
        points.push(x, y, z);
      });

      geometry.addAttribute(
        "position",
        new THREE.Float32BufferAttribute(points, 3)
      );
    });

    scene.add(line);

    const animate = () => {
      requestAnimationFrame(animate);

      scene.rotation.x += 0.005;
      scene.rotation.y += 0.005;

      renderer.render(scene, camera);
    };

    animate();
  })
  .catch((error) => {
    console.error("Error loading or parsing XML:", error);
  });
