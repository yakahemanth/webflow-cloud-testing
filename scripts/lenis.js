import Lenis from "lenis";


    const lenis = new Lenis({
      smooth: true,
      lerp : 0.06,
      WheelMultiplier : 1,
      infinite : false
      
    });
    
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    
    requestAnimationFrame(raf);
      
    
  
