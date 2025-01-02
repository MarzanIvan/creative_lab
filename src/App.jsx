import './App.css'

function App() {
  return (
      <>
          <div className="website-wrapper">
              <header className="header">
                  <div className="container container--fluid">
                      <div className="logotype">
                          <div className="logotype__link borderless">
                              Creative Lab
                          </div>
                      </div>

                      <nav className="menu">
                          <div className="menu__item">
                              <a href="/projects/" className="menu__link">
                                  Проекты
                              </a>
                          </div>
                          <div className="menu__item">
                              <a href="/services/" className="menu__link">
                                  Услуги
                              </a>
                          </div>
                          <div className="menu__item">
                              <a href="/support/" className="menu__link">
                                  Поддержка
                              </a>
                          </div>
                          <div className="menu__item">
                              <a href="/contacts/" className="menu__link">
                                  Контакты
                              </a>
                          </div>
                      </nav>

                      <div className="contacts">
                          <a target="_blank" title="Телеграм" className="contacts__round-bt contacts__round-bt--tg"
                             href="https://t.me/dieserpaniker">
                              <svg width="25" height="24" viewBox="0 0 25 24" fill="none"
                                   xmlns="http://www.w3.org/2000/svg">
                                  <path
                                      d="M8.66481 14.2746L15.8952 7.74934C16.2125 7.4677 15.8259 7.33036 15.4047 7.58582L6.48107 13.2156L2.62657 12.0125C1.79416 11.7577 1.78819 11.1857 2.81345 10.7745L17.8336 4.98276C18.5196 4.67131 19.1817 5.14752 18.9198 6.19749L16.3619 18.2514C16.1833 19.108 15.6657 19.3128 14.9486 18.9172L11.0521 16.0383L9.17916 17.8595C9.17326 17.8652 9.16738 17.871 9.16154 17.8767C8.95206 18.0806 8.77875 18.2493 8.39951 18.2493L8.66481 14.2746Z"
                                      fill="black"/>
                              </svg>
                          </a>
                          <a target="_blank" title="Ватсап" className="contacts__round-bt contacts__round-bt--wa"
                             href="/">
                              <svg width="25" height="24" viewBox="0 0 25 24" fill="none"
                                   xmlns="http://www.w3.org/2000/svg">
                                  <path fillRule="evenodd" clipRule="evenodd"
                                        d="M12.1639 2.64282C14.6446 2.6438 16.9731 3.60955 18.7239 5.36243C20.4747 7.11527 21.4384 9.44523 21.4375 11.9231C21.4355 17.0362 17.2749 21.1965 12.164 21.1965H12.1602C10.6081 21.196 9.08306 20.8065 7.72854 20.0677L2.8125 21.3573L4.12811 16.5519C3.31656 15.1455 2.88956 13.5501 2.89023 11.9157C2.89227 6.80263 7.05239 2.64282 12.1639 2.64282ZM14.8085 13.1038C15.0209 13.1811 16.1601 13.7417 16.3918 13.8576C16.437 13.8802 16.4792 13.9006 16.5183 13.9195C16.68 13.9977 16.7893 14.0505 16.8359 14.1283C16.8938 14.2249 16.8938 14.6888 16.7007 15.2301C16.5076 15.7714 15.5819 16.2654 15.1367 16.3319C14.7375 16.3916 14.2324 16.4165 13.6772 16.2401C13.3408 16.1333 12.9091 15.9907 12.3563 15.752C10.184 14.814 8.716 12.7085 8.43857 12.3107C8.41914 12.2828 8.40555 12.2633 8.39797 12.2532L8.39605 12.2506C8.27323 12.0867 7.45178 10.9906 7.45178 9.8562C7.45178 8.78886 7.97604 8.22943 8.21741 7.97187C8.23395 7.95422 8.24917 7.93798 8.26279 7.9231C8.47516 7.69116 8.72621 7.63318 8.88069 7.63318C9.03512 7.63318 9.18977 7.6346 9.32477 7.64132C9.34144 7.64216 9.35879 7.64207 9.37673 7.64197C9.51177 7.64122 9.68009 7.6403 9.84613 8.03906C9.90973 8.19191 10.0027 8.41819 10.1008 8.65707C10.3005 9.14334 10.5217 9.68185 10.5606 9.75962C10.6185 9.87558 10.6571 10.0109 10.5799 10.1656C10.5682 10.1888 10.5575 10.2107 10.5473 10.2317C10.4893 10.3501 10.4466 10.4372 10.3481 10.5521C10.3095 10.5973 10.2695 10.646 10.2295 10.6946C10.1498 10.7918 10.07 10.8889 10.0006 10.9581C9.88459 11.0736 9.76382 11.199 9.89895 11.431C10.0341 11.663 10.4992 12.4217 11.188 13.0361C11.9284 13.6966 12.5719 13.9757 12.8982 14.1173C12.9619 14.1449 13.0136 14.1673 13.0514 14.1863C13.2831 14.3023 13.4183 14.2828 13.5534 14.1283C13.6886 13.9736 14.1327 13.4517 14.2871 13.2197C14.4416 12.9878 14.5961 13.0264 14.8085 13.1038Z"
                                        fill="black"/>
                              </svg>
                          </a>
                          <div className="contacts__element contacts__element--control contacts__order-bt">
                              <button
                                  className="button button--bigger-font button--semi-bold button--grey js-website-aside-open"
                                  type="button">Обсудить проект
                              </button>
                          </div>
                          <a title="Меню" className="contacts__round-bt contacts__menu-bt" href="#">
                              <svg className="ico-burger" width="24" height="24" viewBox="0 0 24 24" fill="none"
                                   xmlns="http://www.w3.org/2000/svg">
                                  <path fillRule="evenodd" clipRule="evenodd"
                                        d="M2 8.5C2 7.94772 2.44772 7.5 3 7.5H21C21.5523 7.5 22 7.94772 22 8.5C22 9.05228 21.5523 9.5 21 9.5H3C2.44772 9.5 2 9.05228 2 8.5ZM2 15.5C2 14.9477 2.44772 14.5 3 14.5H21C21.5523 14.5 22 14.9477 22 15.5C22 16.0523 21.5523 16.5 21 16.5H3C2.44772 16.5 2 16.0523 2 15.5Z"
                                        fill="black"/>
                              </svg>
                              <svg className="ico-close" width="24" height="24" viewBox="0 0 24 24" fill="none"
                                   xmlns="http://www.w3.org/2000/svg">
                                  <path fillRule="evenodd" clipRule="evenodd"
                                        d="M5.29289 5.29289C5.68342 4.90237 6.31658 4.90237 6.70711 5.29289L12 10.5858L17.2929 5.29289C17.6834 4.90237 18.3166 4.90237 18.7071 5.29289C19.0976 5.68342 19.0976 6.31658 18.7071 6.70711L13.4142 12L18.7071 17.2929C19.0976 17.6834 19.0976 18.3166 18.7071 18.7071C18.3166 19.0976 17.6834 19.0976 17.2929 18.7071L12 13.4142L6.70711 18.7071C6.31658 19.0976 5.68342 19.0976 5.29289 18.7071C4.90237 18.3166 4.90237 17.6834 5.29289 17.2929L10.5858 12L5.29289 6.70711C4.90237 6.31658 4.90237 5.68342 5.29289 5.29289Z"
                                        fill="black"/>
                              </svg>
                          </a>
                      </div>
                  </div>
              </header>

          </div>


          <main className="website-workarea js-website-workarea">
              <section>
                  <div className="container container--fluid">
                      <div className="promo">
                          <div className="promo__content">
                              <div className="promo__top">
                                  <div className="promo__title">
                                <span className="promo__title-row promo__title-row--first">
                                    <span>Отдых в Воркуте</span>
                                </span>
                                      <span className="promo__title-row promo__title-row--second">
                                    <span>Саша отсыпается...</span>
                                </span>
                                  </div>
                                  <div className="promo__subtitle">Специализируемся на&nbsp;сложных документах.</div>
                              </div>
                              <div className="promo__bottom">
                                  <div className="promo-sectors">
                                      <div className="promo-sectors__item"><span>Новый год</span>
                                          <div className="promo-sectors__item-bg"></div>
                                      </div>
                                      <div className="promo-sectors__item"><span>Почти хорошо сдала семак</span>
                                          <div className="promo-sectors__item-bg"></div>
                                      </div>
                                      <div className="promo-sectors__item"><span>Рядом с семьёй</span>
                                          <div className="promo-sectors__item-bg"></div>
                                      </div>
                                  </div>
                              </div>
                          </div>
                          <div className="gradient-bg">
                              <svg xmlns="http://www.w3.org/2000/svg">
                                  <defs>
                                      <filter id="goo">
                                          <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur"/>
                                          <feColorMatrix in="blur" mode="matrix"
                                                         values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -8"
                                                         result="goo"/>
                                          <feBlend in="SourceGraphic" in2="goo"/>
                                      </filter>
                                  </defs>
                              </svg>
                              <div className="gradients-container">
                                  <div className="g1"></div>
                                  <div className="g2"></div>
                                  <div className="g3"></div>
                                  <div className="g4"></div>
                                  <div className="g5"></div>
                                  <div className="interactive"></div>
                              </div>
                          </div>
                      </div>
                  </div>
              </section>
          </main>


      </>
  )
}

export default App
