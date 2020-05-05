import anime from 'animejs'

class ScrollAnimation {
  static navMenu = () => (
     anime({
         targets: '.hiring-btn',
         translateY: [-150, 0],
         duration: 1000,
         delay: 1000,
         easing: 'spring(1, 80, 8, 0)'
       })
   )
}

export default ScrollAnimation