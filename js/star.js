(function () {
    var starField = document.createElement('div');
    var style = document.createElement('style');
    var stars = 150;

    starField.className = 'star-effect';
    starField.setAttribute('aria-hidden', 'true');

    style.textContent = [
        '.star-effect{position:fixed;inset:0;pointer-events:none;z-index:9999;overflow:hidden;}',
        '.star-effect span{position:absolute;display:block;width:var(--star-size);height:var(--star-size);left:var(--star-left);top:var(--star-top);opacity:var(--star-opacity);border-radius:50%;background:rgba(255,255,255,.95);box-shadow:0 0 var(--star-glow) rgba(255,255,255,.72),0 0 calc(var(--star-glow) * 2) rgba(174,201,255,.18);animation:star-twinkle var(--star-speed) ease-in-out infinite;animation-delay:var(--star-delay);}',
        '@keyframes star-twinkle{0%,100%{opacity:calc(var(--star-opacity) * .42);transform:scale(.86);}45%{opacity:var(--star-opacity);transform:scale(1.18);}70%{opacity:calc(var(--star-opacity) * .66);transform:scale(.96);}}'
    ].join('');

    function random(min, max) {
        return Math.random() * (max - min) + min;
    }

    function createStar(index) {
        var star = document.createElement('span');
        var isBrightStar = index % 17 === 0;
        var size = isBrightStar ? random(2.6, 3.8) : random(1.2, 2.2);
        var topLimit = index % 7 === 0 ? 92 : 70;
        var opacity = isBrightStar ? random(0.65, 0.9) : random(0.28, 0.62);

        star.style.setProperty('--star-left', random(2, 98) + 'vw');
        star.style.setProperty('--star-top', random(3, topLimit) + 'vh');
        star.style.setProperty('--star-size', size + 'px');
        star.style.setProperty('--star-opacity', opacity);
        star.style.setProperty('--star-glow', isBrightStar ? random(5, 9) + 'px' : random(2, 4) + 'px');
        star.style.setProperty('--star-speed', random(2.8, 6.4) + 's');
        star.style.setProperty('--star-delay', random(-8, 0) + 's');

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
