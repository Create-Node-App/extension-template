module.exports = function resolvePackage(setup) {
  // add dependencies here
  const dependencies = []

  // add dev dependencies here
  const devDependencies = []

  // modify existing package.json file
  const packageJson = setup.packageJson

  // return next setup
  return {
    ...setup,
    packageJson,
    dependencies: [...setup.dependencies, ...dependencies],
    devDependencies: [...setup.devDependencies, ...devDependencies],
  }
}
