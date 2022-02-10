// // for lazy load
// var observer = new IntersectionObserver(lazyLoad, {
//   rootMargin: "100px",
//   threshold: 1.0,
// });

// function lazyLoad(elements) {
//   console.log(elements.length);

//   elements.forEach((image) => {
//     if (image.intersectionRation > 0) {
//       image.src = image.dataset.src;
//       observer.unobserve(item.target);
//     }
//   });
// }

// var lazyImgs = document.querySelectorAll("img.lazy");
// lazyImgs.forEach((img) => {
//   console.log("found image");
//   observer.observe(img);
// });
