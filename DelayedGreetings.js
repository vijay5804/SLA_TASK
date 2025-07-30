function delayedGreeting() {
  return new Promise(resolve => {
    setTimeout(() => resolve("Hello!"), 1000);
  });
}

async function greet() {
  const greeting = await delayedGreeting();
  console.log(greeting);
}

greet(); 
