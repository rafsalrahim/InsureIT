const { TransactionHandler } = require('sawtooth-sdk/processor/handler');


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
const CJ_FAMILY = 'datainsure';
const CJ_NAMESPACE = _hash(CJ_FAMILY).substring(0, 6);
let addrList = [];

class InsureITData extends TransactionHandler{
    constructor(){
        super(CJ_FAMILY,['1.0'],[CJ_NAMESPACE]);

    }

    decodepayload(payload){
      const payloadDecoded={
      Gender: payload[0],
      idNo: payload[1],
      Date: payload[2],
      name: payload[3],
      proc: payload[4],
      action: payload[5],
        };
        return payloadDecoded;
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
      const superAddress = _hash('datainsure').substring(0, 70);
      
      const txnId = transacationProcessRequest.signature;

      if (pl.action == 'add') {

        console.log(idNo)
        console.log("teste here")
      
      
      }
      else{
        throw new InvalidTransaction("Invalid payload or header")
      }
  
    }
    }
    module.exports = InsureITData;
    