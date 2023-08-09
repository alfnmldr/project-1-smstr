function smoothScroll(target) {
      gsap.to(window, { duration: 3, scrollTo: target });
    }