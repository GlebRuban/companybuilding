import '../css/gallery.css'
import '../css/adaptive.css'
import first_work from '../images/FIrst.jpg' 
import two_work from '../images/two_work.jpg'
import tree_work from '../images/tree_work.jpg'
import foo_work from '../images/foo_work.jpg'
import five_work from '../images/five_work.jpg'
import modern from '../images/modern.jpg'
export default function Gallery () {
  return <>
    <section className='section_gallery'>
      <h1 className="gallery">Наши работы</h1>
      <div class="container">
        <div className='view'>
          <img className="gallery_img" src={first_work} alt="Первая работа"/>
          <div className='mask'>
            <p className='namehouse'>Одноэтажный дом из CLT-панелей<span>в стиле "Барнхаус"</span></p>
            <p className='square'>Площадь дома: 98 м² 
              <span>Полезная площадь 70 м²</span>
            </p>
            <p className='gabbarites'>Габариты дома:
              <span className='gab_span'>Длина 12,5 м</span>
              <span className='gab_span'>Ширина 7,84 м</span>
            </p>
          </div>
        </div>
        <div className='view'>
          <img className="gallery_img" src={two_work} alt="Первая работа"/>
          <div className='mask'>
            <p className='namehouse'>Двухэтажный дом с гаражом из <span>CLT-панелей в стиле "минимализм"</span></p>
            <p className='square'>
              <span>
                Общая площадь (м²) - 133
              </span>
            </p>
            <p className='gabbarites'>Первый этаж (м)
              <span className='gab_span'>Длина - 10</span>
              <span className='gab_span'>Ширина - 8,2</span>
              <p className='gabbarites'>Второй этаж (м)
                <span className='gab_span'>Длина - 8,2</span>
                <span className='gab_span'>Ширина - 7,1</span>
              </p>
            </p>
          </div>
        </div>
        <div className='view'>
          <img className="gallery_img" src={tree_work} alt="Первая работа"/>
          <div className='mask'>
            <p className='namehouse'>Двухэтажный дом из CLT-панелей  <span>в классическом стиле</span></p>
            <p className='square'>
              <span>Площадь дома -130 м²</span>
            </p>
            <p className='gabbarites'>
              Габариты дома: 
              <span className='gab_span'>Длина - 10,4 м</span>
              <span className='gab_span'>Ширина - 7,7 м</span>
            </p>
          </div>
        </div>
        <div className='view'>
          <img className="gallery_img" src={foo_work} alt="Первая работа"/>
          <div className='mask'>
          <p className='namehouse'>Двухэтажный дом из CLT-панелей  <span>в немецком стиле</span></p>
            <p className='square'>
              <span>Площадь дома -134 м²</span>
            </p>
            <p className='gabbarites'>
                Первый этаж (м)
                <span className='gab_span'>Длина - 8,7</span>
                <span className='gab_span'>Ширина - 7,7</span>
              <p className='gabbarites'>
                Второй этаж (м)
                <span className='gab_span'>Длина - 8,7</span>
                <span className='gab_span'>Ширина - 7,7</span>
              </p>
            </p>
          </div>
        </div>
        <div className='view'>
          <img className="gallery_img" src={five_work} alt="Первая работа"/>
          <div className='mask'>
          <p className='namehouse'>Двухэтажный дом из CLT-панелей <span>в стиле "Барнхаус"</span></p>
            <p className='square'>
              <span>Общая площадь (м²) - 140</span>
            </p>
            <p className='gabbarites'>
              Габариты дома: 
              <span className='gab_span'>Длина (м) - 8,2</span>
              <span className='gab_span'>Ширина (м) - 7,1</span>
            </p>
          </div>
        </div>
        <div className='view'>
          <img className="gallery_img" src={modern} alt="Первая работа"/>
          <div className='mask'>
          <p className='namehouse'>Двухэтажный дом из CLT-панелей <span>в стиле "Модерн"</span></p>
            <p className='square'>
              <span>Общая площадь (м²) - 130</span>
            </p>
            <p className='gabbarites'>
              Габариты дома: 
              <span className='gab_span'>Длина (м) - 9,2</span>
              <span className='gab_span'>Ширина (м) - 8,1</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  </>
}