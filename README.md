# Shopping Cart

This is a project from The Odin Project. Read more about it [here](https://www.theodinproject.com/paths/full-stack-ruby-on-rails/courses/javascript/lessons/shopping-cart).

### State, Props, and the React Router

As I was planning out this app, the issue of where to put State was a headscratcher for me. I wanted the shopping cart to live at the highest level so it could be shared across components that are rendered at different routes, but I wasn't even sure it was possible to pass props down into a `BrowserRouter` component. I found [this article](https://dev.to/halented/passing-state-to-components-rendered-by-react-router-and-other-fun-things-3pjf), which was super helpful.

In short, instead of passing `component={SomeComponent}` to the `Route` component, you pass a `render` method to the `Route`. For example:

```
<Route path="/" render={() => <SomeComponent someProp={someProp} />} />
```

*Note: You must pass a __function__ into render - hence the arrow function*

### Modules

As I was conceptualizing an online store, I was thinking about a real store: There's a predetermined list of products for sale, and some warehouse in the back with all of the products, which are in turn created in a factory somewhere. 

So, this is the approach I took with the items, i.e. creating a factory function called `product` for creating new products and a module called `inventory` that creates each type of product. Those products are then passed into components on the main store page. Breaking these out into their own files might have been overkill, but it made sense to me conceptually.

### Handling item quantities in the shopping cart

In my first iteration of the shopping cart, if I adjusted the quantity to add 2 toasters to my cart, it would show up as one item. BUT, if I added a single toaster twice, it would show up as two distinct items in the cart. This bothered me, because this isn't how shopping carts work in real-world websites.

This proved to be a bit trickier of an issue to solve than I had anticipated. I wanted a re-render when the quantity of an item is changed, so I ended up using separate States in both the listing of items in the store and in the cart.

With this in place, I managed to create the functionality I wanted: Adding an item to your cart when you already have one of that item in the cart simply updates the quantity rather than creating a duplicate entry. It was also important to me to be able to adjust the item quantity from the cart instead of needing to remove the item entirely and start over.

Something about this solution leaves a bad taste in my mouth, though. I'm certain there is a better way to handle item quantity, perhaps with the State centralized in a higher-level component. Or maybe using props and event hooks to achieve the re-renders. I might consider coming back and refactoring once I've thought about it some more.