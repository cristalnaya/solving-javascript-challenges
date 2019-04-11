function retrieveMajor(semver) {
  let split = semver.split('.');
  return split[0];
}

function retrieveMinor(semver) {
  let split = semver.split('.');
  return split[1];
}

function retrievePatch(semver) {
  let split = semver.split('.');
  return split[2];
}
console.log(retrieveMajor("6.1.9"));
console.log(retrieveMinor("6.1.9"));
console.log(retrievePatch("6.1.9"));