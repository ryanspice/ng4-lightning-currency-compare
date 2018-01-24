import { HDTestPage } from './app.po';

describe('hdtest App', function() {
  let page: HDTestPage;

  beforeEach(() => {
    page = new HDTestPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
