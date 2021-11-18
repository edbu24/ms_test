
describe('Testing Microsft page', function() {
    test('validate shopcart is displaying item number', function(browser) {
      const pageHome = browser.page.homePage();
      const resultSearch = browser.page.resultSearchPage();

      pageHome
        .navigate()
        .validateHomePage()
        .search('@searchButton', '@searchInput', 'Halo')
        .selectRegion('@regionButton')


      resultSearch
        .goToShop('@shopButton')
        .clickShowAll('@showAllGames')
        .selectRegionGame('@regionGameButton')
        .selectGame('@firstGame')        
        .pause(6000)
        .openMenu('@selectMenuShopCart')
        .addToCart('@addToCartBtn')
        .pause(7000)
        .validateCountItemIsDisplayed('@itemNumber', '1')
        .pause(8000)

    })
  });