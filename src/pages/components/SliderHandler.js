import Slider from 'react-slick';
import Image from 'next/image';

export default function SliderHandler({ items, prop, imagens, setState }) {

  // Configurações do carrossel
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 3, slidesToScroll: 1 } },
      { breakpoint: 768, settings: { slidesToShow: 2, slidesToScroll: 1 } },
      { breakpoint: 480, settings: { slidesToShow: 1, slidesToScroll: 1 } }
    ]
  };

  return (
    <>
      <Slider {...settings}>
        {items.map((item, index) => (
          <div key={item} className="text-center">
            <button
              className={`btn ${prop === item ? 'btn-warning' : 'btn-outline-warning'} btn-lg m-2`}
              onClick={() => setState(item)}
            >
              <Image src={`/img/sorvetes/${imagens[index]}`} alt={item} width={150} height={150} style={{ marginRight: 10, backgroundColor: 'transparent' }} />
              {item}
            </button>
          </div>
        ))}
      </Slider>
    </>
  )
}
