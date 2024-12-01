const questions = [
    "人生の意味は何ですか？",
    "真実とは何でしょうか？",
    "私たちはどこから来たのか？",
    "時間とは何か？",
    "自由意志は存在するのか？"
];

const waterContainer = document.getElementById('water-container');
const questionElement = document.getElementById('philosophical-question');

waterContainer.addEventListener('click', (event) => {
    const x = event.clientX;
    const y = event.clientY;

    const ripple = document.createElement('div');
    ripple.className = 'ripple';
    ripple.style.left = `${x}px`;
    ripple.style.top = `${y}px`;

    waterContainer.appendChild(ripple);

    setTimeout(() => {
        ripple.remove();
        displayRandomQuestion();
    }, 1000);
});

const displayRandomQuestion = () => {
    const question = questions[Math.floor(Math.random() * questions.length)];
    questionElement.textContent = question;
    questionElement.style.opacity = 1;

    setTimeout(() => {
        questionElement.style.opacity = 0;
    }, 5000);
};

// Water ripple effect CSS
const style = document.createElement('style');
style.textContent = `
    .ripple {
        position: absolute;
        border-radius: 50%;
        transform: scale(0);
        animation: ripple 1s linear;
        background: rgba(255, 255, 255, 0.7);
        pointer-events: none;
        width: 100px;
        height: 100px;
    }
    @keyframes ripple {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
`;
document.head.append(style);
