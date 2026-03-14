import React, { useEffect, useState } from 'react';
import { Carousel } from './Carousel';
import './App.css';

function App() {
  const [isVisible, setIsVisible] = useState({
    aboutMe : false,
    skills : false,
  })

  useEffect(() => {
    setTimeout(() => {
      setIsVisible({...isVisible, aboutMe : true})
    }, 300)
  },[])

  function scrollTop() {
    window.scrollTo(0, 0)
  }





  return (
    <>
    <header className='header'>
      <nav className='header-navbar'>
        <ul className='header-menu'>
          <li className='header-menu-list'>
            <a className='header-menu-link' onClick={scrollTop}>Обо мне</a>
          </li>
          <li className='header-menu-list'>
            <a className='header-menu-link' href='#skills'>Навыки</a>
          </li>
          <li className='header-menu-list'>
            <a className='header-menu-link' href='#portfolio'>Портфолио</a>
          </li>
          <li className='header-menu-list'>
            <a className='header-menu-link' href='#contacts'>Контакты</a>
          </li>
        </ul>
      </nav>
    </header>

    <main>
      <section id='aboutMe' className='aboutMe-section'>
        <h1>Обо мне</h1>
        <hr></hr>
        <div className='aboutMe-block'>
          <div className={isVisible.aboutMe ? 'avatar-frame visible' : 'avatar-frame'}>
            <svg
                className="circle-text"
                width="320"
                height="320"
                viewBox="0 0 320 320"
              >
                <defs>
                  <path
                    id="text-circle"
                    d="
                      M 160,160
                      m -130,0
                      a 130,130 0 1,1 260,0
                      a 130,130 0 1,1 -260,0
                    "
                  />
                </defs>

                <text fill="rgba(255, 255, 255, 0.671)" fontSize="40" fontWeight="300">
                  <textPath href="#text-circle">
                    FRONTEND DEVELOPER • REACT • NEXT.JS • JAVASCRIPT •
                  </textPath>
                </text>
              </svg>
            <img className='aboutMe-img' />
          </div>
          
          <div className={isVisible.aboutMe ? 'aboutMe-text visible' : 'aboutMe-text'}>
            <div className='fill'></div>
              <p>
                Здравствуйте, я Frontend-разработчик c 2 годами опыта создания SPA на React. Владею опытом HTML, CSS, typescript, react, rtk.
                Имею практический опыт интеграции c REST API c использованием async/await, оптимизации производительности за счёт кэширования данных в localStorage и ленивой загрузки. Работал с legacy кодом: проводил рефакторинг, заменял устаревшие подходы на современные ( замена классовых компонентов на функциональные с хуками, обновление методов работы с состоянием ). Стремлюсь к написанию чистого, поддерживаемого кода и развитию в современных frontend-технологиях.
                Фриланс-проект: создание Discord-бота ( автоматическое назначение ролей, модерация чата, работа c базой данных ).
                Использовал Git/GitHub для командной и индивидуальной разработки.
                Быстро осваиваю новые технологии, довожу задачи до результата и готов выполнить тестовое задание. Буду рад обсудить, чем могу быть полезен вашей команде.
              </p>
            
          </div>
        </div>
      </section>

      
        
      <section id='skills' className='skills-section'>
        <h1>Мои навыки</h1>
        <hr></hr>
        <div className='skills-block'>
          <div className='skills-tool html'><div className='tool-fill'><div className='skills-tool-img'></div><p>HTML</p></div></div>
          <div className='skills-tool js'><div className='tool-fill'><div className='skills-tool-img'></div><p>JS</p></div></div>
          <div className='skills-tool css'><div className='tool-fill'><div className='skills-tool-img'></div><p>CSS</p></div></div>
          <div className='skills-tool react'><div className='tool-fill'><div className='skills-tool-img'></div><p>REACT</p></div></div>
          <div className='skills-tool ts'><div className='tool-fill'><div className='skills-tool-img'></div><p>TypeScript</p></div></div>
          <div className='skills-tool redux'><div className='tool-fill'><div className='skills-tool-img'></div><p>REDUX</p></div></div>
          <div className='skills-tool git'><div className='tool-fill'><div className='skills-tool-img'></div><p>GIT</p></div></div>
          <div className='skills-tool next'><div className='tool-fill'><div className='skills-tool-img'></div><p>NEXT.JS</p></div></div>
        </div>
      </section>


      <section id='portfolio' className='portfolio-section'>
        <h1>Мои работы</h1>
        <hr></hr>
        <Carousel/>
      </section>

      <section className='contacts-section'>
        <h1 id='contacts'>Связь со мной</h1>
        <hr style={{width:'50%', maxWidth:'350px'}}></hr>

        <div className='contacts-block'>
          <div className="contacts-fill">
            <div onClick={() => {document.location='https://t.me/RealRable'}} className='telegram'></div>
            <div onClick={() => {document.location='https://wa.me/+79196280427'}} className='whatsapp'></div>
            <p>Тел: 89196280427</p>
          </div>
          
        </div>
        
      </section>
    </main>

    </>
  );
}

export default App;
