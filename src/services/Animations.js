import anime from 'animejs'
class ScrollAnimation {
  static navMenu = () => (
     anime({
         targets: '.hiring-btn',
         translateY: [-150, 0],
         duration: 5,
         delay: 1000,
         easing: 'spring(1, 100, 8, 0)'
       })
   )
   static sectionOneLeft = () => (
    anime({
        targets: '.left-content',
        translateX: [-1000, 0],
        duration: 5500,
        delay: 2000,
        easing: 'spring(1, 40, 10, 0)'
      })
  )
  static sectionOneRight = () => (
    anime({
        targets: '.right-content',
        translateX: [1000, 0],
        duration: 5500,
        delay: 2000,
        easing: 'spring(1, 40, 10, 0)'
      })
  )
}
export default ScrollAnimation