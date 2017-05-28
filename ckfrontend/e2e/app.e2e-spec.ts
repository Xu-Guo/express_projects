import { CkfrontendPage } from './app.po';

describe('ckfrontend App', () => {
  let page: CkfrontendPage;

  beforeEach(() => {
    page = new CkfrontendPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
