import { MyFilmAppPage } from './app.po';

describe('my-film-app App', () => {
  let page: MyFilmAppPage;

  beforeEach(() => {
    page = new MyFilmAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
