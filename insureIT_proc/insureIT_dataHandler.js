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
            from : payload[0],
            to: payload[1],
            amt: payload[2],
            proc: payload[4],
            action: payload[5],


        }
    }
}