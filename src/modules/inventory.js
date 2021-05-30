import product from './product';

const inventory = (() => {
  const toaster = product(1, "Toaster", "Without a toaster, you'd just be spreading avocado on plain bread. Avoid this tragic and unimaginable scenario by adding one of these essential appliances to your cart.", 12.5);
  const avocado = product(2, "Avocado", "You can't have avocado toast without the eponymous avocado. Buttery, smooth, and versatile - avocados are technically fruits, but they may as well be a whole distinct food group.", 1);
  const bread = product(3, "Whole-grain Bread", "For the health-conscious millenial. This loaf is whole-grain, whole-wheat, and a wholesome way to start your day.", 5);
  const spoon = product(4, "Spoon", "Use this to easily and efficiently scoop the avocado out of its skin. If you're cheap, you can use the spoon to spread it on the toast, too.", 10);
  const butterKnife = product(5, "Butter Knife", "What, were you going to spread avocado on your toast with your BARE HANDS?? ", 10);
  const chefsKnife = product(6, "Chef's Knife", "You're going to need a sharp, robust knife to slice open the fruit. You can also use this knife to remove the large seed at the center of your avocado, but be careful! Don't end up with \"avocado hands.\"", 22);
  const eggs = product(7, "Cage-free Eggs (1 dozen)", "For those who want to add a savory bit of protein to their avocado toast. Cage sold separately.", 8);
  const sdBread = product(8, "Sourdough Bread", "A delicious crusty loaf with that signature sourdough flavor. But who am I kidding? You're probably making your own sourdough, aren't you?", 5);

  return { toaster, avocado, bread, spoon, butterKnife, chefsKnife, eggs, sdBread };
})();

export default inventory;