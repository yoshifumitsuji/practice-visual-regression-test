describe('Sample test', () => {
  beforeEach(async () => {
    // テスト用WEBサイトにアクセスする
    await page.goto('http://localhost:8000');
  });

  it('title = test', async () => {
    // テスト用WEBサイトのテストページのタイトルを確認する
    const title = await page.title();
    expect(title).toBe('test');
  });

  it('type test', async () => {
    const inputText = 'hoge';

    // idがtxtのDOMに対して'hoge'を入力する
    await page.type('#txt', inputText);

    // idがtxtのinputタグの入力値を取得する
    const actual = await page.$eval('input[id="txt"]', (el) => (el as HTMLInputElement).value);
    expect(actual).toBe(inputText);
  });
});
