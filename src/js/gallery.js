const options = {
    wrapAround: true,
    accessibility: true,
    prevNextButtons: true,
    pageDots: true,
    setGallerySize: false,
    arrowShape: {
        x0: 10,
        x1: 60,
        y1: 50,
        x2: 60,
        y2: 45,
        x3: 15
    }
};

const vistasGallery = document.querySelector('.vistas-gallery');
const slides = document.getElementsByClassName('carousel-cell');

const vsflkty = new Flickity(vistasGallery, options);

vsflkty.on('scroll', function () {
    vsflkty.slides.forEach(function (slide, i) {
      var image = slides[i];
      var x = (slide.target + vsflkty.x) * -1/3;
      image.style.backgroundPosition = x + 'px';
    });
  });

console.log({vistasGallery, slides});