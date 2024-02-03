
document.addEventListener('DOMContentLoaded', function () {
    const cardsWrapper = document.querySelector('.cards-wrapper');
  
    cardsWrapper.addEventListener('scroll', function () {
      if (isElementInViewport(cardsWrapper.lastElementChild)) {
        // Último cartão visível, adicione mais cartões se necessário
      }
    });
  
    function isElementInViewport(el) {
      const rect = el.getBoundingClientRect();
      return (
        rect.left >= 0 &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
      );
    }
  });