module.exports = {
  preset: '@testing-library/react-native',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  setupFilesAfterEnv: ['@testing-library/jest-native/extend-expect',],
  /**
   * resolves issue with libraries that are uncompiled es6+ code
   * @see https://stackoverflow.com/a/55803188
   * @see https://jestjs.io/docs/tutorial-react-native#transformignorepatterns-customization
   */
  transformIgnorePatterns: ['jest-runner'],
}
