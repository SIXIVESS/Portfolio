let app = document.getElementById('typewriter');

let typewriter = new Typewriter(app, {
  loop: true,
  delay: 75, 
});

typewriter
  .pauseFor(2500) 
  .typeString('SIXIVESS')
  .pauseFor(4000) 
  .deleteChars(10)
  .start();
