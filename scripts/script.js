document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('button');
    const img = document.getElementById('main_image');
    const audio = document.getElementById('backgroundMusic');
    const musicName = document.getElementById('music_name');
    const poema = document.getElementById('poema');
    audio.loop = true;

    const images_sun = [
        './images/sun.svg', 
        './images/sun1.svg', 
        './images/sun2.svg'];

    const images_smile_flower = [
        './images/main_smile.svg', 
        './images/main_smile1.svg', 
        './images/main_smile2.svg'];

    const images_normal_flower = [
        './images/main_normal.svg', 
        './images/main_normal1.svg', 
        './images/main_normal2.svg'];

    const images_sad_flower = [
        './images/main_sad.svg', 
        './images/main_sad1.svg', 
        './images/main_sad2.svg'];

    let animationId = null;

    function animateImages(images, element, duration = 1000) {
        let index = 0;
        let lastTimestamp = null;

        function step(timestamp) {
            if (!lastTimestamp) lastTimestamp = timestamp;
            const elapsed = timestamp - lastTimestamp;

            if (elapsed >= duration) {
                index = (index + 1) % images.length;
                element.src = images[index];
                lastTimestamp = timestamp
            }

            animationId = requestAnimationFrame(step);
        }

        animationId = requestAnimationFrame(step);
    }

    animateImages(images_sun, img, 500);

    buttons.forEach(button => {
        button.addEventListener('click', function(event) {

            if (event.target.id === 'pauseBtn') {
                audio.pause();
                return;
            } else if (event.target.id === 'playBtn') {
                audio.play();
                return;
            };

            if (animationId) {
                cancelAnimationFrame(animationId);
                animationId = null;
            }
            if (event.target.id === 'good') {
                img.src = images_smile_flower[0];
                audio.pause();
                audio.src = './music/concert-for-piano-violin-and-flute.mp3';
                audio.play();
                musicName.innerHTML = 'Concert for piano violin and flute';
                poema.innerHTML = `              
                <p>Дорожите счастьем, дорожите!</p>
                <p>Замечайте, радуйтесь, берите</p>
                <p>Радуги, рассветы, звезды глаз —</p>
                <p>Это все для вас, для вас, для вас.</p>
                <p>-------------------</p>
                <p>Эдуард Асадов - Дорожите счастьем</p>`
                animateImages(images_smile_flower, img, 500); 
            } else if (event.target.id === 'norm') {
                img.src = images_normal_flower[0];
                audio.pause();
                audio.src = './music/royal-classical-love.mp3';
                audio.play();
                poema.innerHTML = `              
                <p>В небесах торжественно и чудно!</p>
                <p>Спит земля в сиянье голубом…</p>
                <p>Что же мне так больно и так трудно?</p>
                <p>Жду ль чего? Жалею ли о чем?</p>
                <p>-------------------</p>
                <p>Михаил Лермонтов - Выхожу один я на дорогу…</p>`
                musicName.innerHTML = 'Royal classical love';
                animateImages(images_normal_flower, img, 500); 
            } else if (event.target.id === 'bad') {
                img.src = images_sad_flower[0];
                audio.pause();
                audio.src = './music/strings.mp3';
                audio.play();
                musicName.innerHTML = 'Strings';
                poema.innerHTML = `              
                <p>Грустно… Душевные муки…</p>
                <p>Мне и вздохнуть не дают.</p>
                <p>Голову кружит от шума,</p>
                <p>Моя изнывает душа.</p>
                <p>Нет утешенья ни в ком.</p>
                <p>Ходишь едва-то дыша.</p>
                <p>Мрачно и дико кругом.</p>
                <p>-------------------</p>
                <p>Сергей Есенин - Грустно...</p>`
                animateImages(images_sad_flower, img, 500);
            };
        });
    });
});