import '../css/home.css'
import '../css/adaptive.css'
import 'swiper/swiper-bundle.min.css'
import 'swiper/swiper.min.css'
import 'swiper/swiper-bundle.min.css'
import fon from '../images/1.jpg'
import fon2 from '../images/2.jpg'
import fon3 from '../images/3.jpg'
import fon4 from '../images/4.jpg'
import {Carousel} from '../components/carousel/Carousel'
import { PopUp } from '../components/popup/PopUp'
import { useState } from 'react'
import { redirect } from 'react-router-dom'

export default function Home (){
  const [ Open, setModelIsOpen] = useState(false); 
  const handTrue = () => {setModelIsOpen(true)}; 
  const handFalse = () => {setModelIsOpen(false)};
  const [formData, setFormData] = useState({});

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    // Отправка данных на сервер
    fetch('./api/saveData',(res) => {
      res.setHeader('Content-Type', 'application/json');
      res.send(JSON.stringify({ message: 'Данные успешно сохранены' }));
    })
      .then( response => response.json())
      .then((data) => {
        console.log(data); // Ответ от сервера
        redirect('/')
      })
      .catch((error) => {
        console.error('Ошибка:', error);
      });
  };

  return <>
    <section className='first_section'>
      <div className='div_img'>
        <Carousel>
          <img src={fon} alt="Fon" className='section_img' />
          <img src={fon2} alt="Fon2" className='section_img' />
          <img src={fon3} alt="Fon" className='section_img' />
          <img src={fon4} alt="Fon2" className='section_img' />
        </Carousel>
      </div>
      <div className='text_div'>
        <h1 className='h1'>Чем мы занимаемся</h1>
        <p className='text'>
          <span>Мы строим дом по нашему дизайну или</span>
          <span>по вашему дизайн.Наши сотрудники имеют <span>большой опыт в строительстве</span></span>
          <span>мы поможем найти участок, построим и сделаем в нем отделку под ключ.</span>
          <span>Именно с нами у вас будет дом мечты.</span>
        </p>
        <button className='btn' onClick={handTrue}>
          <span>Связаться с нами</span>
        </button>
      </div>
    </section>
    <PopUp isOpen = {Open} onClose = {handFalse} >
      <h3 className='h3_modal'>Связаться с нами</h3>
      <form onSubmit={handleSubmit}>
        <div className="page">
          <div className="field field_v1">
            <label for="first-name" className="ha-screen-reader" htmlFor='fname'>Имя</label>
            <input id="first-name" type='text' name='fname' className="field__input" placeholder="Имя" onChange={handleChange} />
            <span className="field__label-wrap" aria-hidden="true">
              <span className="field__label">Имя</span>
            </span>
          </div>
          <div className="field field_v2">
            <label htmlFor="lname" className="ha-screen-reader">Фамилия</label>
            <input id="last-name" name='lname' type='text'   className="field__input" placeholder="Фамилия" onChange={handleChange}/>
            <span className="field__label-wrap" aria-hidden="true">
              <span className="field__label">Фамилия</span>
            </span>
          </div>    
          <div className="field field_v3">
            <label htmlFor="tel" className="ha-screen-reader">Телефон</label>
            <input id="phone" name='tel' type='text'  className="field__input" placeholder="+7(999)999-99-99" onChange={handleChange}/>
            <span className="field__label-wrap" aria-hidden="true">
              <span className="field__label">Телефон</span>
            </span>
          </div>
          <button className='btn_popup' type='submit'>ОК</button>
        </div>
      </form>
    </PopUp>
  </>
}