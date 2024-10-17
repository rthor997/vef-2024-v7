/**
 * Verkefni 7 í Vefforritun 1, 2024.
 * Notar jsdoc til að skrifa lýsingu á föllum, inntaki og úttaki.
 * Kveikið á `Check JS` í Visual Studio Code til að sjá mögulegar villur.
 * Notar `console.assert` til að athuga hvort föll virki rétt.
 */

//------------------------------------------------------------------------------
// Fastar

/** Íslenskir sérhljóðar */
const CONSONANTS = 'bcdfghjklmnpqrstvwxz'.split('');

/** Íslenskir samhljóðar */
const VOWELS = 'aeiouyáéýúíóöæ'.split('');

//------------------------------------------------------------------------------
// Hjálparföll

/**
 * Athuga hvort óþekkt gildi sé strengur eða ekki.
 * @param {unknown} str Óþekkt gildi sem athuga á hvort sé strengur.
 * @returns {boolean}`true` ef `str` er strengur, annars `false`.
 */
// Skilgreinum anonymous fall og bindum við breytuna `isString`
const isString = (str) => typeof str === 'string';

// Prófum fallið
console.assert(isString('hi') === true, 'isString: skilar `true` fyrir streng');
console.assert(isString(42) === false, 'isString: skilar `false` fyrir tölu');
console.assert(isString(null) === false, 'isString: skilar `false` fyrir null');

/**
 * Öruggt fall sem skilar fylki af strengjum úr gefnum streng, skipt upp með
 * gefnum afmkarkara (separator).
 * @param {string} str Hugsanlegur strengur sem skal skipta.
 * @returns {string[]} Fylki af strengjum eða tóma fylkið ef afmarkari kom
 * ekki fram.
 */
function split(str, separator = ' ') {
  if (!isString(str)) {
    return [];
  }

  return str.split(separator);
}

//------------------------------------------------------------------------------
// Grunnföll sem skilgreina á

function longest(str) {
//Ef str er ekki strengur skal skila null
if (!isString(str)) {
  return null;
}

//Ef str er tómur strengur skal skila tómum streng.
if (str.trim().length === 0) {
  return '';
}
  
const ordin = split(str, ' ');

let lengstaord = ordin[0];

for (const ord of ordin ) {
  if (ord.length > lengstaord.length) {
    lengstaord = ord
  }
}
return lengstaord;

}
console.assert(
  longest('halló heimur!') === 'heimur!',
   'longest: finnur lengsta orðið, heimur!'
   );
console.assert(
  longest('ég er að prófa þetta') === 'prófa',
   'longest: finnur lengsta orðið, prófa'
   );


function shortest(str) {

  if (!isString(str)) {
    return null;
  }

  if (str.trim().length === 0) {
    return '';
  }

  const ordin = split(str, ' ');

  let stystaord = ordin[0];

  for (const ord of ordin) {
    if (ord.length < stystaord.length) {
      stystaord = ord
    }
  }
  return stystaord;
}
console.assert(
  shortest('halló heimur!') === 'halló',
   'shortest: finnur stysta orðið, halló'
   );
console.assert(
  shortest('ég er að prófa þetta') === 'ég',
   'shortest: finnur stysta orðið, ég'
   );



function reverse(str) {
  if (isString(str)) {
    const split = str.split('');
    const reversed = split.reverse();

    return reversed.join('');
  }
  return null;
}
console.assert(
  reverse('hallo') === 'ollah', 
  'reverse: snýr við einföldum streng'
);
console.assert(
  reverse(false) === null,
  'reverse: ef ekki strengur, skila null'
);


function palindrome(str) {
  if (str.trim().length === 0) {
    return false;
  }
  if (isString(str)) {
    const venjulegistr = str;
    const reversestr = venjulegistr.split('').reverse().join('');
    return venjulegistr === reversestr;
  }else {
    return false;
  }
}
console.assert(
  palindrome('racecar') === true,
   'palindrome: racecar er samhverfur'
   );
console.assert(
  palindrome('') === false,
 'palindrome: tómur strengur er ekki samhverfur'
 );


function vowels(str) {
  if (isString(str)) {
    let count = 0;
    for (const char of str.toLowerCase()) {
      if (VOWELS.includes(char)) {
        count += 1
      }
    }
    return count;
  }
  return null;
}
console.assert(
  vowels('halló heimur!') === 5,
   'vowels: halló heimur! hefur 5 sérhljóða'
   );
console.assert(
  vowels('Ég er að prófa þetta.') === 7,
   'vowels: Ég er að prófa þetta. hefur 7 sérhljóða'
   );


function consonants(str) {
  if (isString(str)) {
    let count = 0;
    for (const char of str.toLowerCase()) {
      if (CONSONANTS.includes(char)) {
        count += 1
      }
    }
    return count;
  }
  return null;
}
console.assert(
  consonants('halló heimur!') === 6,
   'vowels: halló heimur! hefur 6 samhljóða'
   );   
console.assert(
  consonants('Ég er að prófa þetta.') === 7,
   'vowels: Ég er að prófa þetta. hefur 7 sérhljóða'
   );
   


//------------------------------------------------------------------------------
// Leiðbeint ferli

function start() {
  alert('Sláðu inn streng með nokkrun orðum til að fá upplýsingar um. \n-Lengsta orðið. \n-Stysta orðið. \n-Strenginn snúið orðið. \n-Fjöldi sérhljóða í streng. \n-Fjöldi samhljóða í streng. \n-Hvort strengurinn sé samhverfur.'); 

  while (true) {
    const input = prompt('Sláðu inn streng');

    if (input === null || input.trim().length === 0) {
      const reynaAftur = confirm('viltu prófa aftur?')
      if (!reynaAftur) {
        break;
      }else {
        continue
      }
    }

    const lengstaOrd = longest(input);
    const stystaOrd = shortest(input);
    const snuinstrengur = reverse(input);
    const fjoldivowels = vowels(input);
    const fjoldisamhljóða = consonants(input);
    const hvortsamhverfur = palindrome(input);

    alert(`
    Lengsta orðið er: ${lengstaOrd}
    Stysta orðið er: ${stystaOrd} 
    Strengurinn snúinn við: ${snuinstrengur}
    Fjöldi sérhlóða í streng: ${fjoldivowels}
    Fjöldi samhljóða í streng: ${fjoldisamhljóða}
    ${hvortsamhverfur ?'Strengurinn er samhverfur.':'Strengurinn er ekki samhverfur'} `);

    const haldaafram = confirm('viltu reyna aftur?')
    if (!haldaafram) {
      break;
    }else {
      continue;
    }
  }
}


