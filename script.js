document.addEventListener('DOMContentLoaded', ()=>{
  const navToggle = document.querySelector('.nav-toggle');
  const navLinks = document.querySelector('.nav-links');
  navToggle && navToggle.addEventListener('click', ()=>{
    navLinks.classList.toggle('open');
  });

  // Pill filter visuals
  document.querySelectorAll('.pill').forEach(p=>{
    p.addEventListener('click', ()=>{
      document.querySelectorAll('.pill').forEach(x=>x.classList.remove('active'));
      p.classList.add('active');
    })
  });

  // Simple product image carousel: rotate images every 3.5s
  const prodImgs = Array.from(document.querySelectorAll('.product img'));
  let idx = 0;
  if(prodImgs.length){
    setInterval(()=>{
      idx = (idx+1) % prodImgs.length;
      prodImgs.forEach((img,i)=>{
        img.style.opacity = (i===idx)?'1':'0.25';
      });
    },3500);
  }

  // Subtle hover animation for products
  document.querySelectorAll('.product').forEach(p=>{
    p.addEventListener('mouseenter', ()=> p.classList.add('hover'));
    p.addEventListener('mouseleave', ()=> p.classList.remove('hover'));
  });
});
