export default store => {
  store.subscribe((mutation, state) => {
    var css = "text-shadow: 0 0 5px #fff, 0 0 10px #fff, 0 0 15px #fff, 0 0 20px #ff00de, 0 0 35px #ff00de, 0 0 40px #ff00de, 0 0 50px #ff00de, 0 0 75px #ff00de;";
    console.groupCollapsed("%c --%s--", css, mutation.type);
    console.log("Payload:", mutation.payload);
    console.log("State:", state);
    console.groupEnd();
  });
};
