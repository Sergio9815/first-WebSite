window.addEventListener('load', function () {
  new Glider(document.querySelector('.carousel__list'), {
    slidesToShow: 1,
    slidesToScroll: 1,
    rewind: true,
    draggable: true,
    dots: '.carousel__dots',
    arrows: {
      prev: '.arrow-prev',
      next: '.arrow-next'
    },
    responsive: [
      {
        breakpoint: 870,
        settings: {
          slidesToShow: '2',
          slidesToScroll: '2',
        }
      },{
        breakpoint: 1200,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
          itemWidth: 150,
          duration: 0.25
        }
      }
    ]
  });
})