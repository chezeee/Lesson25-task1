// TODO: implement FetchWrapper

// Sample usage - do not modify
try {
  const API = new FetchWrapper(
    "https://jsdemo-3f387-default-rtdb.europe-west1.firebasedatabase.app"
  );

  API.get("/notifications/new.json").then((data) => {
    console.log(data);
  });
} catch (error) {}
