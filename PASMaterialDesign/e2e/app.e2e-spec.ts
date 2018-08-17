import { PASMaterialDesignPage } from './app.po';

describe('pasmaterial-design App', function() {
  let page: PASMaterialDesignPage;

  beforeEach(() => {
    page = new PASMaterialDesignPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
