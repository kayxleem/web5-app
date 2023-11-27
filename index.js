import { Web5 } from '@web5/api';

/*
Needs globalThis.crypto polyfill. 
This is *not* the crypto you're thinking of.
It's the original crypto...CRYPTOGRAPHY.
*/
import { webcrypto } from 'node:crypto';

// @ts-ignore
if (!globalThis.crypto) globalThis.crypto = webcrypto;

//connect
 const { web5, did: aliceDid } = await Web5.connect();

//console.log(aliceDid);

//create
// const { record } = await web5.dwn.records.create({
//     data: 'Hello, Web5!, This is kayode',
//     message: {
//       dataFormat: 'text/plain',
//     },
//   });

//console.log('writeResult', record);

//read
const readResult = await record.data.text();

console.log('readResult', readResult)

const updateResult = await record.update({
    data: 'Hello, Web5! I am updated.',
  });

console.log('updateResult', await record.data.text())

//delete
//const deleteResult = await record.delete();

//console.log('deleteResult', deleteResult)