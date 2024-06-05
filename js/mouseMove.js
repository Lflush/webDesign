(function () {
    const colors = ["#D61C59", "#E7D84B", "#1B8798", "#FF5733", "#5F4B8B", "#FFC300", "#2E8B57", "#FF1493", "#4169E1", "#FF6347"];
    const characters = ["♬", "♪", "♫", "☀", "☁", "❄", "☂", "☃", "♠", "♥", "♦", "♣", "★", "☆", "⚡", "☺", "☹", "☮", "☯", "⚘", "☘", "⚓", "✈", "❤", "❥", "❣", "☄", "✌", "☮", "☠", "☢", "☣", "✪", "✿", "❀", "❁", "❂", "❃", "❄", "❅", "❆", "❇", "❈", "❉", "❊", "❋", "❍", "❏", "❐", "❑", "❒", "❖", "❘", "❙", "❚", "❛", "❜", "❝", "❞", "❡", "❢", "❣", "❤", "❥", "❦", "❧"];


    const elementGroup = [];

    class Element {
        constructor() {
            const num = Math.floor(Math.random() * characters.length);
            this.character = characters[num];
            this.lifeSpan = 120;
            this.initialStyles = {
                position: "fixed",
                top: "0",
                display: "block",
                pointerEvents: "none",
                "z-index": "10000000",
                fontSize: "25px",
                "will-change": "transform",
                color: "#000000"
            };
        }

        init(x, y, color) {
            this.velocity = { x: (Math.random() < .5 ? -1 : 1) * (Math.random() / 2), y: 1 };
            this.position = { x: x - 10, y: y - 20 };
            this.initialStyles.color = color;
            this.element = document.createElement("span");
            this.element.innerHTML = this.character;
            this.applyStyles(this.initialStyles);
            this.update();
            document.body.appendChild(this.element);
        }

        update() {
            this.position.x += this.velocity.x;
            this.position.y += this.velocity.y;
            this.lifeSpan--;
            this.element.style.transform = `translate3d(${this.position.x}px, ${this.position.y}px, 0) scale(${this.lifeSpan / 120})`;
        }

        die() {
            this.element.parentNode.removeChild(this.element);
        }

        applyStyles(style) {
            for (let prop in style) {
                this.element.style[prop] = style[prop];
            }
        }
    }

    function addListeners() {
        document.addEventListener("mousemove", onMouseMove);
        document.addEventListener("touchmove", onTouch);
        document.addEventListener("touchstart", onTouch);
    }

    function render() {
        for (let i = 0; i < elementGroup.length; i++) {
            elementGroup[i].update();
            if (elementGroup[i].lifeSpan < 0) {
                elementGroup[i].die();
                elementGroup.splice(i, 1);
            }
        }
    }

    function onMouseMove(event) {
        const num = Math.floor(Math.random() * colors.length);
        createElement(event.clientX, event.clientY, colors[num]);
    }

    function createElement(x, y, color) {
        const element = new Element();
        element.init(x, y, color);
        elementGroup.push(element);
    }

    function onTouch(event) {
        if (event.touches.length > 0) {
            for (let i = 0; i < event.touches.length; i++) {
                const num = Math.floor(Math.random() * colors.length);
                createElement(event.touches[i].clientX, event.touches[i].clientY, colors[num]);
            }
        }
    }

    addListeners();
    setInterval(render, 1000 / 60);
})();

