import Blockchain from "./models/Blockchain";

const blockchain = new Blockchain();
blockchain.addBlock({
  from : 'Keven',
  to : 'Mário',
  amount : 5000
});
blockchain.addBlock({
  from : 'Mário',
  to : 'Keven',
  amount : 90000
});

console.log(JSON.stringify(blockchain.blocks[1]));
console.log(blockchain.isValid());
blockchain.blocks[1].data = {
  from : 'Keven',
  to : 'Mário',
  amount : 2
};

console.log(JSON.stringify(blockchain.blocks[1]));
console.log(blockchain.isValid());