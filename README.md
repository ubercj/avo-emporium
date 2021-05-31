# Shopping Cart

Check it out live [here](https://ubercj.github.io/avo-emporium).

The idea for this project comes from The Odin Project. Read more about it [here](https://www.theodinproject.com/paths/full-stack-ruby-on-rails/courses/javascript/lessons/shopping-cart).

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

#### Importing images

I had a heck of a time figuring out how to access the images in my assets/images folder. It turns out, in React, you can't just link straight to the relative path of the image file. According to the [React documentation](https://create-react-app.dev/docs/using-the-public-folder), you're supposed to import images one-by-one like modules. This would be fine if I only wanted to use a couple of images in a component, but in my case I wanted an `img` element in one of my components that uses a different file as a source depending on a variable.

Luckily, I found this [Stack Overflow thread](https://stackoverflow.com/questions/42118296/dynamically-import-images-from-a-directory-using-webpack) which provides a solution to import all of the images at once. This particular solution required a quick dive into the [webpack documentation](https://webpack.js.org/guides/dependency-management/#require-context) to understand `require.context()`.

So in the end, I ended up using a "photos" module with the suggested solution:

```
const importPhotos = (r) => {
  return r.keys().map(r);
}

const photos = importPhotos(require.context('../assets/images/', false, /\.(png|jpg)$/));
```

`context.require()` returns a __function__, so you have to call `r.keys().map(r)` to get an array you can work with.

There's one more wrinkle, though. The array I got from the above solution is an array __*of objects*__, so to get a url that you can actually pass into `<img src="">`, you have to access the property called "default" on each of the objects in the array. So I ended up doing this:

```
const photoList = photos.map((photo) => photo.default);
```

And then to get the correct photo to the correct product, I matched its index in the mapped array with its product ID like so:

```
src={photoList[product.prodId]}
```

There's almost certainly a better way to do this. Adding more images to the folder would make me have to go back and reassign product IDs to make sure the right photos go to the right products. If I get a chance, I might refactor this into a more sustainable solution. But it will work for the purposes of this project.

### Handling item quantities in the shopping cart

In my first iteration of the shopping cart, if I adjusted the quantity to add 2 toasters to my cart, it would show up as one item. BUT, if I added a single toaster twice, it would show up as two distinct items in the cart. This bothered me, because this isn't how shopping carts work in real-world websites.

This proved to be a bit trickier of an issue to solve than I had anticipated. I wanted a re-render when the quantity of an item is changed, so I ended up using separate States in both the listing of items in the store and in the cart.

With this in place, I managed to create the functionality I wanted: Adding an item to your cart when you already have one of that item in the cart simply updates the quantity rather than creating a duplicate entry. It was also important to me to be able to adjust the item quantity from the cart instead of needing to remove the item entirely and start over.

Something about this solution leaves a bad taste in my mouth, though. I'm certain there is a better way to handle item quantity, perhaps with the State centralized in a higher-level component. Or maybe using props and event hooks to achieve the re-renders. I might consider coming back and refactoring once I've thought about it some more.
