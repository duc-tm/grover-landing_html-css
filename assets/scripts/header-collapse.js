(function () {
  const headerCollapse = document.getElementById('header-collapse');
  const collapseBody = document.querySelector('#header-collapse .collapse-body');
  const collapseToggle = document.querySelector('.collapse-toggle');

  if (headerCollapse && collapseBody && collapseToggle) {
    collapseBody.addEventListener('click', (e) => {
      e.stopPropagation();
    });

    headerCollapse.addEventListener('click', (e) => {
      console.log(e)
      if (headerCollapse.classList.contains('open')) {
        headerCollapse.classList.remove('open');
      }
    });

    collapseToggle.addEventListener('click', () => {
      headerCollapse.classList.add('open');
    });
  }
})();