const axios = require('axios');
const fs = require('fs');



// __________ CONST __________ //
const __GITHUB_API_ENTRYPOINT__ = 'https://api.github.com/search/users?q=location:';

const headers = { 'Content-Type': 'application/json' };

const __PATH__ = './data/Tunisia.json';

const __ENCODED__ = 'utf-8';


const Wilayet = [
  'Tunis',    
  'Ariana',      
  'Ben Arous',      
  'Manouba',      
  'Nabeul',      
  'Zaghouan',      
  'Bizerte',      
  'Béja',      
  'Jendouba',      
  'Le Kef',      
  'Siliana',      
  'Kairouan',      
  'Kassérine',      
  'Sidi Bouzid',      
  'Sousse',      
  'Monastir',      
  'Mahdia',      
  'Sfax',      
  'Gafsa',      
  'Tozeur',      
  'Kébili',      
  'Gabès',      
  'Médenine',      
  'Tataouine',      
];



// __________ FUNC __________ //
(async () => {

  let content = [];

  for (let [index, wilaya] of Wilayet.entries()) {
    try {
      let response = await axios.get(`${__GITHUB_API_ENTRYPOINT__}${wilaya}`, { headers });
      content.push({ id: ++index, name: wilaya, value: response.data.total_count });
      console.log(`GOOD FOR \`Wilaya\` ${index} 🤩.. `);  
    } catch (error) {
      console.log(`GITHUB API V3 CATCHED 😢..`);  
    }
  }

  fs.createWriteStream(__PATH__, __ENCODED__)
    .write(JSON.stringify({ Tunisia: content }, null, 2));

})();
