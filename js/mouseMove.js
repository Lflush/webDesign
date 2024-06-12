(function () {
    const COLORS = new Set(["#D61C59", "#E7D84B", "#1B8798", "#FF5733", "#5F4B8B", "#FFC300", "#2E8B57", "#FF1493", "#4169E1", "#FF6347"]);
    const CHARACTERS = new Set(["♬", "♪", "♫", "☀", "☁", "❄", "☂", "☃", "♠", "♥", "♦", "♣", "★", "☆", "⚡", "☺", "☹", "☮", "☯", "⚘", "☘", "⚓", "✈", "❤", "❥", "❣", "☄", "✌", "☮", "☠", "☢", "☣", "✪", "✿", "❀", "❁", "❂", "❃", "❄", "❅", "❆", "❇", "❈", "❉", "❊", "❋", "❍", "❏", "❐", "❑", "❒", "❖", "❘", "❙", "❚", "❛", "❜", "❝", "❞", "❡", "❢", "❣", "❤", "❥", "❦", "❧"]);

    const ELEMENT_GROUP = [];
    
    class Element {
        constructor(x, y, color) {
            this.character = Array.from(CHARACTERS)[Math.floor(Math.random() * CHARACTERS.size)];
            this.lifeSpan = 120;
            this.velocity = { x: (Math.random() < .5 ? -1 : 1) * (Math.random() / 2), y: 1 };
            this.position = { x: x - 10, y: y - 20 };
            this.element = document.createElement("span");
            this.element.innerHTML = this.character;
            this.applyStyles(color);
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

        applyStyles(color) {
            this.element.style.position = "fixed";
            this.element.style.top = "0";
            this.element.style.display = "block";
            this.element.style.pointerEvents = "none";
            this.element.style["z-index"] = "10000000";
            this.element.style.fontSize = "25px";
            this.element.style["will-change"] = "transform";
            this.element.style.color = color;
        }
    }

    function addListeners() {
        document.addEventListener("mousemove", onMouseMove);
        document.addEventListener("touchmove", onTouch);
        document.addEventListener("touchstart", onTouch);
    }

    function render() {
        for (let i = 0; i < ELEMENT_GROUP.length; i++) {
            ELEMENT_GROUP[i].update();
            if (ELEMENT_GROUP[i].lifeSpan < 0) {
                ELEMENT_GROUP[i].die();
                ELEMENT_GROUP.splice(i, 1);
                i--; // Adjust index after removal
            }
        }
    }

    function onMouseMove(event) {
        createElement(event.clientX, event.clientY);
    }

    function createElement(x, y) {
        const color = Array.from(COLORS)[Math.floor(Math.random() * COLORS.size)];
        const element = new Element(x, y, color);
        ELEMENT_GROUP.push(element);
    }

    function onTouch(event) {
        if (event.touches.length > 0) {
            for (let i = 0; i < event.touches.length; i++) {
                createElement(event.touches[i].clientX, event.touches[i].clientY);
            }
        }
    }

    addListeners();
    requestAnimationFrame(function loop() {
        render();
        requestAnimationFrame(loop);
    });
})();
