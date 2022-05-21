module.exports = {
  // プリセットにjest-puppeteerを設定する。
  preset: 'jest-puppeteer',
  moduleFileExtensions: ['js', 'ts'],
  transform: {
    '^.+\\.ts$': 'ts-jest'
  },
  testMatch: ['<rootDir>/test/**/*.+(ts|js)'],
  // 上記のtest/jest-setup.tsをsetupファイルとして設定します。
  setupFilesAfterEnv: ['./test/jest-setup.ts'],
  // jest-setup.tsをテスト対象外にします。
  modulePathIgnorePatterns: ['jest-setup.ts']
};
