import { AngularDvdrentalPage } from './app.po';

describe('angular-dvdrental App', function() {
  let page: AngularDvdrentalPage;

  beforeEach(() => {
    page = new AngularDvdrentalPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
