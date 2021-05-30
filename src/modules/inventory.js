import product from './product';

const inventory = (() => {
  const toaster = product(1, "toaster", 12.5);
  const avocado = product(2, "avocado", 1);
  const bread = product(3, "whole-grain bread (loaf)", 5);
  const spoon = product(4, "spoon", 10);
  const butterKnife = product(5, "butter knife", 10);
  const chefsKnife = product(6, "chef's knife", 22);
  const eggs = product(7, "cage-free eggs (1 dozen)", 8);

  return { toaster, avocado, bread, spoon, butterKnife, chefsKnife, eggs };
})();

export default inventory;