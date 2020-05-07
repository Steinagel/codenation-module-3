const op = require("./operations");
("use strict");

const fibonacci = () => {
  const MAX = 350;

  return op.getFiboSeq(MAX);
};

const isFibonnaci = (num) => {
  return fibonacci().includes(num);
};

module.exports = {
  fibonacci,
  // isFibonnaci: op.isFibonnaci,
  isFibonnaci,
};
