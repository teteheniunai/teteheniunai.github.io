(function () {
    var starField = document.createElement('div');
    var style = document.createElement('style');
    var stars = 90;

    starField.className = 'star-effect';
    starField.setAttribute('aria-hidden', 'true');

    style.textContent = [
        '.star-effect{position:fixed;inset:0;pointer-events:none;z-index:9999;overflow:hidden;}',
        '.star-effect span{position:absolute;display:block;width:var(--star-size);height:var(--star-size);left:var(--star-left);top:var(--star-top);opacity:0;border-radius:50%;background:radial-gradient(circle,#fff 0 22%,#ffeeb7 34%,rgba(255,238,183,.45) 55%,transparent 72%);box-shadow:0 0 10px rgba(255,245,190,.95),0 0 22px rgba(135,190,255,.42);animation:star-twinkle var(--star-speed) ease-in-out infinite,star-drift var(--star-drift-speed) ease-in-out infinite alternate;animation-delay:var(--star-delay);}',
        '.star-effect span::before,.star-effect span::after{content:"";position:absolute;left:50%;top:50%;width:var(--star-ray);height:1px;background:linear-gradient(90deg,transparent,rgba(255,255,255,.9),transparent);transform:translate(-50%,-50%);opacity:.8;}',
        '.star-effect span::after{transform:translate(-50%,-50%) rotate(90deg);}',
        '@keyframes star-twinkle{0%,100%{opacity:.2;filter:brightness(.85);transform:scale(.82);}45%{opacity:.95;filter:brightness(1.45);transform:scale(1.22);}70%{opacity:.45;filter:brightness(1);transform:scale(.96);}}',
        '@keyframes star-drift{0%{margin-top:0;margin-left:0;}100%{margin-top:var(--star-float-y);margin-left:var(--star-float-x);}}'
    ].join('');

    function random(min, max) {
        return Math.random() * (max - min) + min;
    }

    function createStar(index) {
        var star = document.createElement('span');
        var size = index % 9 === 0 ? random(5, 8) : random(2, 5);
        var topLimit = index % 5 === 0 ? 88 : 62;

        star.style.setProperty('--star-left', random(2, 98) + 'vw');
        star.style.setProperty('--star-top', random(3, topLimit) + 'vh');
        star.style.setProperty('--star-size', size + 'px');
        star.style.setProperty('--star-ray', size * random(4, 7) + 'px');
        star.style.setProperty('--star-speed', random(2.2, 5.8) + 's');
        star.style.setProperty('--star-delay', random(-6, 0) + 's');
        star.style.setProperty('--star-drift-speed', random(6, 12) + 's');
        star.style.setProperty('--star-float-x', random(-8, 8) + 'px');
        star.style.setProperty('--star-float-y', random(-6, 6) + 'px');

        return star;
    }

    document.head.appendChild(style);

    for (var i = 0; i < stars; i += 1) {
        starField.appendChild(createStar(i));
    }

    document.addEventListener('DOMContentLoaded', function () {
        document.body.appendChild(starField);
    });
}());
