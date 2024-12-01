const questions = [
    "人生の意味は何ですか？",
    "真実とは何でしょうか？",
    "私たちはどこから来たのか？",
    "時間とは何か？",
    "自由意志は存在するのか？"
];

const waterContainer = document.getElementById('water-container');
const questionElement = document.getElementById('philosophical-question');

// Three.jsのセットアップ
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ alpha: true });
renderer.setSize(window.innerWidth, window.innerHeight);
waterContainer.appendChild(renderer.domElement);

// 平面ジオメトリの設定
const geometry = new THREE.PlaneGeometry(20, 20, 32, 32);
const material = new THREE.MeshBasicMaterial({ color: 0x0077ff, wireframe: true });
const plane = new THREE.Mesh(geometry, material);
scene.add(plane);

camera.position.z = 50;

// アニメーションの設定
const animate = () => {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
};
animate();

waterContainer.addEventListener('click', (event) => {
    const x = (event.clientX / window.innerWidth) * 2 - 1;
    const y = - (event.clientY / window.innerHeight) * 2 + 1;

    const ripple = new THREE.Mesh(geometry, material);
    ripple.position.set(x * 10, y * 10, 0);
    scene.add(ripple);

    setTimeout(() => {
        scene.remove(ripple);
        displayRandomQuestion(event.clientX, event.clientY);
    }, 2000);
});

const displayRandomQuestion = (x, y) => {
    const question = questions[Math.floor(Math.random() * questions.length)];
    questionElement.textContent = question;
    questionElement.style.left = `${x}px`;
    questionElement.style.top = `${y}px`;
    questionElement.style.opacity = 1;

    setTimeout(() => {
        questionElement.style.opacity = 0;
    }, 5000);
};

window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
});
