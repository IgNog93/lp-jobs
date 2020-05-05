import anime from 'animejs'

class ScrollAnimation {
  static navMenu = () => (
     anime({
         targets: '.hiring-btn',
         translateY: [-150, 0],
         duration: 5,
         delay: 500,
         easing: 'spring(1, 100, 8, 0)'
       })
   )
}

export default ScrollAnimation