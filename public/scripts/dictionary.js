const dict = {
  en: {
    btn: {
      registry: 'Apply for entry'
    },
    mainText: {
      date: '2nd & 3rd May, 2020'
    },
    sideText: {
      card: 'IFBB Elite Pro Cards awarded to Overall Winners',
      ranking: 'This championship awards points for the International Amateur Ranking',
      hotelTitle: 'Lodgings in Lisbon',
      hotelText: 'There are a few hotels and guesthouses within walking distance of the championship venue. There are also several hotels in the nearby Campo Pequeno area, accessible by metro or a longer walk.'
    },
    timer: {
      daysLeft: ' days left until the championship',
      daysAnd: ' days and',
      left: ' left until the championship'
    }
  },
  pt: {
    btn: {
      registry: 'Inscrições'
    },
    mainText: {
      date: '2 & 3 de Maio, 2020'
    },
    sideText: {
      card: 'Oferta de IFBB Elite Pro cards aos vencedores de overall',
      ranking: 'Este campeonato atribui pontos ao Ranking Amador Internacional',
      hotelTitle: 'Alojamento em Lisboa',
      hotelText: 'Há alguns hoteis e casas de hóspedes a curta distância do local do campeonato. Também há vários hóteis na área de Campo Pequeno, acessível por metro ou uma caminhada mais longa.'
    },
    timer: {
      daysLeft: ' dias até o campeonato começar',
      daysAnd: ' dias e',
      left: ' até o campeonato começar'
    }
  }
};

const dictLook = function(search) {
  function index(obj,i) { return obj[i] }
  return (lang + '.' + search).split('.').reduce(index, dict)
}
