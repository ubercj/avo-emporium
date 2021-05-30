const importPhotos = (r) => {
  return r.keys().map(r);
}

const photos = importPhotos(require.context('../assets/images/', false, /\.(png|jpg)$/));

export default photos;