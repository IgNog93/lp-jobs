import anime from 'animejs'

class ScrollAnimation {
  static navMenu = () => (
     anime({
         targets: '.hiring-btn',
         translateY: [-150, 0],
         duration: 1500,
       })
   )
}

export default ScrollAnimation