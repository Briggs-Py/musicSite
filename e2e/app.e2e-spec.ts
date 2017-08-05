import { MusicWebsitePage } from './app.po';

describe('music-website App', () => {
  let page: MusicWebsitePage;

  beforeEach(() => {
    page = new MusicWebsitePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
