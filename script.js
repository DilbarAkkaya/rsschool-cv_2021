const hamburgerMenu = document.querySelector ('.hamburger-menu');
const navlist = document.querySelector(".nav-list");
const navLinks = document.querySelectorAll('.nav-item');
const navbar = document.querySelector('.navbar');

hamburgerMenu.addEventListener('click', () => {
 
  navLinks.forEach((link,index) => {
    if (link.style.animation) {
      link.style.animation = '';
    } else {
    link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
  }

navlist.classList.toggle("change");
hamburgerMenu.classList.toggle("active");});

  const anchors = document.querySelectorAll('a[href*="#"]')
  for (let anchor of anchors) {
    anchor.addEventListener('click', function (event) {
      event.preventDefault()
      const blockID = anchor.getAttribute('href').substr(1)
      document.getElementById(blockID).scrollIntoView({
        behavior: 'smooth',
        block: 'start'}
      )
      hamburgerMenu.classList.remove('active');
      navlist.classList.remove('change');
      
      })
    }})

    console.group('%cСамооценка, максимальная 160', 'color: #696969; background-color:  #7fffd4')
  console.log('%c+10. Вёрстка валидная', 'color: #696969; background-color:  #7fffd4')
  console.log('%c+10. Надпись "Document checking completed. No errors or warnings to show." +10 https://validator.w3.org/nu/?doc=https%3A%2F%2Fdilbarakkaya.github.io%2Frsschool-cv%2F', 'color: #696969; background-color:  #7fffd4')
  console.log('%c+20. Вёрстка семантическая В коде страницы присутствуют семантические теги HTML5: article +, aside +, figure +, figcaption +, footer +, header +, main +, nav +, section +, 9 * 2 = 18; используются h1+h2+h3+h4+h5. 5*2=10; h1-только один', 'color: #696969; background-color:  #7fffd4')
  console.log('%c+10. Для оформления СV используются css-стили', 'color: #696969; background-color:  #7fffd4')
  console.log('%c+10. Контент размещается в блоке, который горизонтально центрируется на странице. Фоновый цвет тянется во всю ширину страницы', 'color: #696969; background-color:  #7fffd4')
  console.log('%c+10. Вёрстка адаптивная: ни на одном из разрешений экрана до 320px включительно не появляется горизонтальная полоса прокрутки, при этом всё содержание страницы сохраняется.', 'color: #696969; background-color:  #7fffd4')
  console.log('%c+10. Есть адаптивное бургер-меню. Ссылки в пунктах меню ведут на основные разделы CV. При кликах по пунктам меню реализована плавная прокрутка по якорям. При уменьшении ширины экрана меню становится адаптивным.', 'color: #696969; background-color:  #7fffd4')
  console.log('%c+10. На странице СV присутствует изображение - фото или аватарка автора CV, пропорции изображения не искажены, у изображения есть атрибут alt (не пустой)', 'color: #696969; background-color:  #7fffd4')
  console.log('%c+10. Контакты для связи и перечень навыков оформлены в виде списка ul > li', 'color: #696969; background-color:  #7fffd4')
  console.log('%c+10. CV содержит контакты для связи, краткую информацию о себе, перечень навыков, информацию об образовании и уровне английского', 'color: #696969; background-color:  #7fffd4')
  console.log('%c+10. CV содержит пример кода с подсветкой кода.', 'color: #696969; background-color:  #7fffd4')
  console.log('%c+10. CV содержит изображения-ссылки на выполненные вами проекты. При клике по изображению страница проекта открывается в новой вкладке. У каждого проекта есть название, небольшое описание, указан перечень используемых технологий.', 'color: #696969; background-color:  #7fffd4')
  console.log('%c+10. CV выполнено на английском языке', 'color: #696969; background-color:  #7fffd4')
  console.log('%c+10. Выполнены требования к Pull Request: есть ссылка на задание, скриншот страницы СV, ссылка на деплой страницы CV на GitHub Pages, выполнена самооценка, по пунктам критериев оценки, указан балл за каждый пункт', 'color: #696969; background-color:  #7fffd4')
  console.log('%c+10. Выполнены требования к Pull Request: есть ссылка на задание, скриншот страницы СV, ссылка на деплой страницы CV на GitHub Pages, выполнена самооценка, по пунктам критериев оценки, указан балл за каждый пункт', 'color: #696969; background-color:  #7fffd4')
  console.log('%c+10. Есть видеорезюме автора CV на английском языке. Видеорезюме встраивается в страницу CV как видео, а не в виде кнопки или ссылки. Продолжительность видео 3-5 минут (±15 секунд). В описание видео на YouTube добавлена ссылка на его транскрипцию на английском языке', 'color: #696969; background-color:  #7fffd4')
  console.log('%c+10. Дизайн, оформление, качество выполнения CV не ниже чем в примерах CV, приведённых в материалах к заданию', 'color: #696969; background-color:  #7fffd4')