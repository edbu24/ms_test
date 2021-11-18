module.exports = {
    url: 'https://www.microsoft.com/es-mx',
    elements: {
        logoButton: 'a[id=uhfLogo]',
        searchButton: 'button[id=search]',
        searchInput: 'input[id=cli_shellHeaderSearchInput]',
        regionButton: 'button[id=R1MarketRedirect-close]'
    },
    commands: [{
        fullS(){
            return this
                .fullscreenWindow()
        },
        validateHomePage(){
            return this
                .assert.visible('a[id=uhfLogo]')
        },

        search(searchB, searchI, value){
            return this
                .click(searchB)
                .sendKeys(searchI, value)
                .click(searchB)
        },
        selectRegion(regionMx){
            return this
                .click(regionMx)
        }
    }]
  };