function generateExcuse() {
  let who = ['The dog', 'My grandma', 'The mailman', 'My bird'];
  let action = ['ate', 'peed on', 'crushed', 'broke'];
  let what = ['my homework', 'my phone', 'the car', 'my laptop'];
  let when = ['before the class', 'when I was sleeping', 'while I was exercising', 'during lunch'];

  let excuse =
    who[Math.floor(Math.random() * who.length)] + ' ' +
    action[Math.floor(Math.random() * action.length)] + ' ' +
    what[Math.floor(Math.random() * what.length)] + ' ' +
    when[Math.floor(Math.random() * when.length)];

  document.getElementById("excuse").innerHTML = excuse;
}
