module.exports = {
  // プリセットにjest-puppeteerを設定する。
  preset: 'jest-puppeteer',
  moduleFileExtensions: ['js', 'ts'],
  transform: {
    '^.+\\.ts$': 'ts-jest'
  },
  testMatch: ['<rootDir>/test/**/*.+(ts|js)']
};
