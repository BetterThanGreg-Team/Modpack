{ pkgs, ... }:

{
  packages = [
    pkgs.pakku
  ];

  languages.java = {
    enable = true;
    jdk.package = pkgs.zulu21;
  };
}
