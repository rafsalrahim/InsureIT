const crypto = require('crypto');
_hash = x => crypto.createHash('sha512').update(x).digest('hex').toLowerCase();


mailSent2(Gender,idproof,date,name,some,some2)
{

const address = this._hash('insureIT').substr(0, 6) + this._hash(name).substr(0, 32) + this._hash(idproof).substr(0, 32);
console.log(address);
}