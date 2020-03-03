const dict = {
  en: {
    btn: {
      registry: 'Apply for entry'
    },
    mainText: {
      date: '2nd & 3rd May, 2020'
    },
    timer: {
      daysLeft: ' days left until the event',
      daysAnd: ' days and',
      left: ' left until the event'
    }
  },
  pt: {
    btn: {
      registry: 'Inscrições'
    },
    mainText: {
      date: '2 & 3 de Maio, 2020'
    },
    timer: {
      daysLeft: ' dias até ao evento começar',
      daysAnd: ' dias e',
      left: ' até ao evento começar'
    }
  }
};

const dictLook = function(search) {
  function index(obj,i) { return obj[i] }
  return (lang + '.' + search).split('.').reduce(index, dict)
}
