import product from './product';

const inventory = (() => {
  const toaster = product(1, "toaster", 12.5, 1);
  const avocado = product(2, "avocado", 1, 1);
  const bread = product(3, "whole-grain bread (loaf)", 5, 1);

  return { toaster, avocado, bread };
})();

export default inventory;