$(document).ready(function() {
    $('#water-container').ripples({
        resolution: 512,
        dropRadius: 20,
        perturbance: 0.04,
        interactive: false,
    });

    $('#water-container').on('click', function(e) {
        const $ripple = $(this);
        const x = e.clientX;
        const y = e.clientY;

        $ripple.ripples('drop', x, y, 20, 0.04);
        displayRandomQuestion(x, y);
    });
});

const questions = [
    "人生の意味は何ですか？",
    "真実とは何でしょうか？",
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
