// https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/find
// import per defecte i especific

import heroes, {owners} from "../data/heroes"
console.log(heroes)
console.log(owners)



// busca amb find() el primer que troba
console.log('************* find *******************')
const getHeroeById = (id) => heroes.find(hero => hero.id === id)

const heroTrobat = getHeroeById(1);
console.log(heroTrobat)


// manera de buscar tots els elements de la condicio amb foreach
console.log('*********** foreach *********************')
const heroisPerCompanya = ( companyia ) => {
  let herois = [];

  heroes.forEach((heroi) => {
    if(heroi.owner === companyia){
      herois = [...herois, heroi];
    }
  })

  return herois;

}

console.log(heroisPerCompanya('DC'));
console.log(heroisPerCompanya('Marvel'));




// manera de buscar tots els elements de la condicio amb filter
console.log('************* filter *******************')
const heroisCompanyia  = (companyia) => heroes.filter((heroi) => heroi.owner === companyia)

console.log(heroisCompanyia('DC'));
console.log(heroisCompanyia('Marvel'));

