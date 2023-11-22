import '../css/contact.css'
import '../css/adaptive.css'


export default function Contact () {
  return <>
      <section className="Tickets">
        <h1 className='kontakt'>Контакты</h1>
        <div className="div_contacts">
          <div className="first_contact">
            <h1 className='adress_h1'>Адресс: </h1>
            <p className='adress'>пр-т Победы, д. 236, Калининград</p>
            <div className='rejim'>
              <h1 className='rejim_h1'>Режим работы  офиса:</h1>
              <p className="websday">
                <span>понедельник-пятница: с 9.00 до 19.00 час.</span>
                <span>суббота: с 11.00 до 18.00 час.</span>
                <span>перерыв: с 13.00 до 14.00 час.</span>
              </p>
            </div>
          </div>
          <div className="second_contacts">
            <h1 className='tickets'>Заказать дизайн:
              <span className="span_tel">(812) 123-45-67</span>
            </h1>
            <h1 className='vk'>ВКонтакте:
              <span className="span_tel">vk.com/BuildingTrust</span>
            </h1>
          </div>
        </div>
    </section>
    {/* Map  */}
    <section className='map_section'>
      <div className='Map'>
        <div className='div_map'>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d73750.19219758235!2d20.256750583648664!3d54.715015293384!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46e33c497fa0f06f%3A0x8da6fb57278ea96a!2z0J7QvtC-INCh0YLRgNC-0LnRgtGA0LXRgdGC!5e0!3m2!1sru!2sru!4v1699585445924!5m2!1sru!2sru" 
          allowfullscreen=""
          className='googleMap' 
          loading="lazy" 
          referrerpolicy="no-referrer-when-downgrade">
        </iframe>
        </div>
      </div>
    </section>

  </>
}