
describe('Testing Microsft page', function() {
    test('search for Xbox appps', function(browser) {
      const pageHome = browser.page.homePage();
      const resultSearch = browser.page.resultSearchPage();

      pageHome
        .navigate()
        .validateHomePage()
        .search('@searchButton', '@searchInput', 'Xbox')
        .selectRegion('@regionButton')


      resultSearch
        .goToShop('@shopButton')
        .clickShowAll('@showAllAppLink')

        for (var index = 0; index <= 8; index++) {
          resultSearch
            .validateTotalResults('@totalResultLabel')
            .validateNextPageDisplay('@nextPageButton', function(isVis) {
              if (isVis) {
                resultSearch
                .clickNextPage('@nextPageButton')
              }
            })
        }

    })
  });