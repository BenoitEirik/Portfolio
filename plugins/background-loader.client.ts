export default defineNuxtPlugin(() => {
  const img = new Image();
  img.src = '/images/wallpapers/TD1.jpg';
  img.onload = () => {
    document.body.classList.add('loaded');
  };
});
