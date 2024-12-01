$(document).ready(function() {
    $('#water-container').ripples({
        resolution: 512,
        dropRadius: 20,
        perturbance: 0.04,
        interactive: false // マウス移動時の波紋を無効にする
    });

    $('#water-container').on('click', function(e) {
        const $ripple = $(this);
        const x = e.clientX;
        const y = e.clientY;

        $ripple.ripples('drop', x, y, 20, 0.04);
        playRandomClickSound();
        displayRandomQuestion(x, y);
    });

    // BGM再生
    const bgm = document.getElementById('bgm');
    bgm.play();

    // Soundテキストのクリックでサウンドのオンオフを切り替え
    let soundEnabled = true;
    $('#sound-toggle').on('click', function() {
        soundEnabled = !soundEnabled;
        if (soundEnabled) {
            bgm.play();
            $(this).text('Sound');
        } else {
            bgm.pause();
            $(this).text('Muted');
        }
    });

    // ランダムな効果音を再生する関数
    const clickSounds = [
        document.getElementById('click-sound1'),
        document.getElementById('click-sound2'),
        document.getElementById('click-sound3')
    ];

    const playRandomClickSound = () => {
        if (soundEnabled) {
            const randomIndex = Math.floor(Math.random() * clickSounds.length);
            clickSounds[randomIndex].play();
        }
    };
});

const questions = [
    "人生の意味とは何か？",
    "真実とは何か？",
    "私たちはどこから来たのか？",
    "時間とは何か？",
    "自由意志は存在するのか？"
];

const displayRandomQuestion = (x, y) => {
    const questionElement = document.getElementById('philosophical-question');
    const question = questions[Math.floor(Math.random() * questions.length)];
    questionElement.textContent = question;
    questionElement.style.left = `${x}px`;
    questionElement.style.top = `${y}px`;
    questionElement.style.opacity = 1;

    setTimeout(() => {
        questionElement.style.opacity = 0;
    }, 5000);
};
