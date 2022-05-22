describe('Sample test', () => {
  beforeEach(async () => {
    await page.goto('http://localhost:8000');
  });

  it('screenshot', async () => {
    // ページのスクリーンショットを保存
    const image = await page.screenshot();
    // スクリーンショットと画像スナップショットを比較
    expect(image).toMatchImageSnapshot();
  });

  // it('type test', async () => {
  //   const inputText = 'hoge';
  //   await page.type('#txt', inputText);
  //   const actual = await page.$eval('input[id="txt"]', (el) => (el as HTMLInputElement).value);
  //   expect(actual).toBe(inputText);

  //   // ページのスクリーンショットを保存
  //   const image = await page.screenshot();
  //   // スクリーンショットと画像スナップショットを比較
  //   expect(image).toMatchImageSnapshot();
  // });

  it('type test', async () => {
    // hoge -> hogeeee
    const inputText = 'hogeeee';
    await page.type('#txt', inputText);
    const actual = await page.$eval('input[id="txt"]', (el) => (el as HTMLInputElement).value);
    expect(actual).toBe(inputText);

    // ページのスクリーンショットを保存
    const image = await page.screenshot();
    // スクリーンショットと画像スナップショットを比較
    expect(image).toMatchImageSnapshot();
  });
});
