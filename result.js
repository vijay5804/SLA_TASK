function donePromise() {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve("Done!"), 2000);
  });
}

async function getResult() {
  try {
    const result = await donePromise();
    console.log(result);
  } catch (error) {
    console.log("Error:", error.message);
  }
}

getResult(); 
