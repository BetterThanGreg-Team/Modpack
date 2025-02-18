StartupEvents.init(event => {
  let requiredMod = "physicsmod";
  let downloadLink = "https://www.patreon.com/file?h=114047283&m=366094398";

  if (!Platform.getMods().containsKey(requiredMod)) {
      console.error(`${requiredMod} is missing!`);
      console.error(`Please download it from: ${downloadLink}`);
  }
});
