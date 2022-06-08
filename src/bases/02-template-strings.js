// Template Strings

const nom = 'David';
const cognom = 'Castello';

const nomComplert = nom + ' ' + cognom;
console.log(nomComplert);

const ambTemplateStrings = `Des de template strings: ${nom} ${cognom}, te ${30 + 19} anys.`;
console.log(ambTemplateStrings);

function getSaludo(nom){
  return `Hola ${nom}`;
}
let saludo = getSaludo('David');
console.log(`Que me dices: ${saludo}`);
console.log(`Que me dices 2: ${getSaludo('Lurdes')} de nuevo.`);