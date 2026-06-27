ServerEvents.tags("item", (event) => {
  const validInformational = ["create:goggles", "aeronautics:aviators_goggles"];

  validInformational.forEach((item) => {
    event.add("kubejs:jade_enabled", item);
  });
});
