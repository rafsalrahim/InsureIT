/* eslint-disable no-console */
/* eslint-disable class-methods-use-this */

// works in strict mode


// require the handler module.
// declaring a constant variable.
const { TransactionHandler } = require('sawtooth-sdk/processor/handler');
var nodemailer = require('nodemailer');

const {
  InvalidTransaction,
  InternalError,
} = require('sawtooth-sdk/processor/exceptions');
const crypto = require('crypto');
const { TextEncoder, TextDecoder } = require('text-encoding/lib/encoding');

const _hash = x => crypto.createHash('sha512').update(x).digest('hex').toLowerCase();
const encoder = new TextEncoder('utf8');
const decoder = new TextDecoder('utf8');
const MIN_VALUE = 0;
const CJ_FAMILY = 'insureIT';
const CJ_NAMESPACE = _hash(CJ_FAMILY).substring(0, 6);
let addrList = [];



class InsureITHandler extends TransactionHandler {
  constructor() {
    super(CJ_FAMILY, ['1.0'], [CJ_NAMESPACE]);
    
  }

  decodepayload(payload) {
    const payloadDecoded = {
      /*Gender: payload[0],
      idNo: payload[1],
      Date: payload[2],
      name: payload[3],
      proc: payload[4],
      action: payload[5],*/

      from : payload[0],
      to: payload[1],
      amt: payload[2],
      name:payload[3],
      number:payload[4],
      status:payload[5],
      proc: payload[6],
      action: payload[7],
    };
    return payloadDecoded;
  }

  removeAddress(address) {
    Array.prototype.remByVal = function (address) {
      for (let i = 0; i < this.length; i++) {
        if (this[i] === address) {
          this.splice(i, 1);
          i--;
        }
      }
      return this;
    };
  }

  apply(transacationProcessRequest, context) {
    let newTxnId = '';
    let newStatus = '';
    let newRecp = '';
   
    const payload = transacationProcessRequest.payload.toString().split(',');
    const pl = this.decodepayload(payload);
  
    const header = transacationProcessRequest.header;
    const pblckey = header.signerPublicKey;
    const ipaddr = header.inputs[0];
    const superAddress = _hash('insureIT').substring(0, 70);
    const superAddress2 = _hash('insureIT').substring(0, 70);    
    const txnId = transacationProcessRequest.signature;
    

    if (pl.action == 'add') {
      console.log("teste here")

      const address = _hash('insureIT').substr(0, 6) + _hash(pl.name).substr(0, 32) + _hash(pl.to).substr(0, 32);


      var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
               user: 'certificateissuer@gmail.com',
               pass: 'blockcert'
           }
       });
      
      const mailOptions = {
        from: 'certificateissuer@gmail.com', // sender address
        to: "rafsal0098@gmail.com", // list of receivers
        subject: 'Registration confirmation mail', // Subject line
        html: '<p>Customer Block details<p> This will be the unique id for your account dont loose or disclose it '+address+'. Enjoy our service.</p></p>'// plain text body
      };
      transporter.sendMail(mailOptions, function (err, info) {
        if(err)
          console.log(err)
        else
          console.log(info);
      });



      return context.getState([address, superAddress])
        .then((currentStateMap) => {
          console.log('currentStateMap-->', currentStateMap);
          const prevMyState = currentStateMap[superAddress];
          console.log('prevMyState', prevMyState);
          const prevState = new Buffer(prevMyState, 'base64').toString();
          console.log('prevState', prevState);
          let addrLst = [];

          if (Object.keys(prevMyState).length !== 0) {
            console.log('not empty');
            const superState = decoder.decode(prevMyState);
            const superJson = JSON.parse(superState);
            addrLst = superJson.address;
          }

          addrLst.push(address);
            console.log('addrlst--->', addrLst);
            const addressJson = {
              address: addrLst,
            };
            const addressString = JSON.stringify(addressJson);
            const addressEncoded = encoder.encode(addressString);
            const superVal = {
              [superAddress]: addressEncoded,
            };

          const myState = currentStateMap[address];
          if (myState == '' || myState == null) { // registering from NHS
            newTxnId = txnId;
            newStatus = 'Unmatched';
            newRecp = '';

            // adding state
            const stateData = {
              Status: newStatus,
              Txnid: newTxnId,
              Recp: newRecp,

            };         
            
            const mynewState = encoder.encode(JSON.stringify(stateData));
            console.log('mynewState', mynewState);
            const newStateMap = {
              [address]: mynewState,
              
            };
            
            
            context.setState(superVal);
            return context.setState(newStateMap);
            
          }
          console.log('Address already in use');
        
        });
    }

    else if (pl.action == 'add_data') {
      console.log("Inside second if ie, test one")

      const address = _hash('insureIT').substr(0, 6) + _hash(pl.name).substr(0, 32) + _hash(pl.from).substr(0, 32);

      var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
               user: 'certificateissuer@gmail.com',
               pass: 'blockcert'
           }
       });
      
      const mailOptions = {
        from: 'certificateissuer@gmail.com', // sender address
        to: "rafsal0098@gmail.com", // list of receivers
        subject: 'Registration confirmation mail', // Subject line
        html: '<p>Hello'+pl.name+'<p> This will be the unique id for your Policy dont loose or disclose it '+address+'.<b> Enjoy our service.</p></p>'// plain text body
      };
      transporter.sendMail(mailOptions, function (err, info) {
        if(err)
          console.log(err)
        else
          console.log(info);
      });


      return context.getState([address, superAddress2])
        .then((currentStateMap) => {
          console.log('currentStateMap-->', currentStateMap);
          const prevMyState = currentStateMap[superAddress2];
          console.log('prevMyState', prevMyState);
          const prevState = new Buffer(prevMyState, 'base64').toString();
          console.log('prevState', prevState);
          let addrLst = [];

          if (Object.keys(prevMyState).length !== 0) {
            console.log('not empty');
            const superState = decoder.decode(prevMyState);
            const superJson = JSON.parse(superState);
            addrLst = superJson.address;
          }

          addrLst.push(address);
            console.log('addrlst--->', addrLst);
            const addressJson = {
              address: addrLst,
            };
            const addressString = JSON.stringify(addressJson);
            const addressEncoded = encoder.encode(addressString);
            const superVal = {
              [superAddress2]: addressEncoded,
            };
            
          const myState = currentStateMap[address];
          if (myState == '' || myState == null) { // registering from NHS
            newTxnId = txnId;
            newStatus = 'saved';
            newRecp = '';

            // adding state
            const stateData = {
              Status: newStatus,
              Txnid: newTxnId,
              Recp: newRecp,

            };         
            
            const mynewState = encoder.encode(JSON.stringify(stateData));
            console.log('mynewState', mynewState);
            const newStateMap = {
              [address]: mynewState,
              
            };
            
            
            context.setState(superVal);
            return context.setState(newStateMap);
            
          }
          console.log('Address already in use');
        
        });
    }

    else{
      throw new InvalidTransaction("Invalid payload or header")
    }
  }
}
module.exports = InsureITHandler;
