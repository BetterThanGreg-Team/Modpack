StartupEvents.init(event => {
  let requiredMod = "physicsmod";
  let downloadLink = "https://www.patreon.com/Haubna";

  if (!Platform.getMods().containsKey(requiredMod)) {
      console.error(`
        Physics Mod Pro (${requiredMod}) is missing!
        Please download it from Haubna's patreon page (${downloadLink})
      `);
  }
});
