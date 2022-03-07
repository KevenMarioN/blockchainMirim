import Blockchain from "./models/Blockchain";

const blockchain = new Blockchain();
blockchain.addBlock({
  from : 'Keven',
  to : 'Mário',
  amount : 5000
});

console.log(blockchain);