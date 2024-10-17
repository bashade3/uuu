// مصفوفة تحتوي على روابط الصور المقدمة
let images = [
    'https://www.fay3.com/previews/2018-03/5n1Jx47M.png',
    'https://www.fay3.com/previews/2019-12/PH1epT4uDI.png',
    'https://www.fay3.com/previews/2019-12/SZUfz1zkFg.png',
    'https://www.fay3.com/iRsnWSQmtM2/download',
    'https://cdn77-pic.xvideos-cdn.com/videos/thumbs169poster/34/11/19/341119848d0d965c36dc4237e41eb468-2/341119848d0d965c36dc4237e41eb468.4.jpg',
    'https://image.slidesharecdn.com/random-160808070239/85/-24-320.jpg',
    'https://i0.wp.com/couplesguides.com/wp-content/uploads/2023/09/photomania-e7b84e314ee065f2845f4681e30e250e.jpg?resize=780%2C431&ssl=1'
];

// جلب العناصر من صفحة HTML
const randomImageBtn = document.getElementById('randomImageBtn');
const randomImage = document.getElementById('randomImage');

// اختيار صورة عشوائية عند النقر على زر "Choose Random Image"
randomImageBtn.addEventListener('click', function() {
    if (images.length > 0) {
        const randomIndex = Math.floor(Math.random() * images.length);
        randomImage.src = images[randomIndex];
        randomImage.style.display = 'block';
    }
});
