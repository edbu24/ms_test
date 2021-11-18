module.exports = {
    elements: {
        shopButton: '#coreui-pivotheader-s3sdtmy > div > div > header > a:nth-child(1)',
        showAllAppLink: '#coreui-productplacement-f2jtswf > div.m-channel-placement > div.c-channel-placement-heading > a',
        countApps: 'h2[class=c-heading-4]',
        nextPageButton: 'div:nth-child(3) > ul > li:nth-child(7) > a > span',
        totalResultLabel: 'div:nth-child(3) > p.c-paragraph',

        //Games items
        showAllGames: '#coreui-productplacement-0eghfz1 > div.m-channel-placement > div.c-channel-placement-heading > a',
        regionGameButton: 'a[id=R1MarketRedirect-submit]',
        firstGame: 'div:nth-child(3) > div.c-group.f-wrap-items.context-list-page > div:nth-child(1)',
        secondGame: 'div:nth-child(3) > div.c-group.f-wrap-items.context-list-page > div:nth-child(2)',
        addToCartBtn: 'button[buttonid=CartButton]',
        selectMenuShopCart: 'div[class=ButtonWithFlyout-module__buttonContainer___SgyuW]',
        itemNumber: '#uhf-shopping-cart > span.shopping-cart-amount.x-hidden-focus'
    },
    commands: [{
        goToShop(clickShop){
            return this
                .click(clickShop)
        },
        validateTotalApps(countApps){
            return this
                .assert.containsText(countApps, 'Aplicaciones (718)')
        },
        
        clickShowAll(clickAll){
            return this
                .click(clickAll)

        },

        clickNextPage(clickNxtPage){
            return this
                .click(clickNxtPage)
        },

        validateTotalResults(totalResult){
            return this
                .assert.containsText(totalResult, '718 resultados')
        },

        validateNextPageDisplay(isDisplay){
            return this
                .isVisible(isDisplay)
        },

        selectItem(selectGame){
            return this
                .click(selectGame)
        },

        selectRegionGame(selectReg){
            return this
                .click(selectReg)
        },

        selectGame(selectNewgame){
            return this
                .click(selectNewgame)
        },

        addToCart(addToCartBtn){
            return this
                .click(addToCartBtn)
        },
        openMenu(clickOnMenu){
            return this
                .click(clickOnMenu)
        },
        validateCountItemIsDisplayed(countItem, value){
            return this
                .assert.containsText(countItem, value)
        }

    }]
}