exports.HomePage = class HomePage {
    constructor(page) {
        this.page = page;
        this.loginBtn = page.getByTestId('goto-signin');
        this.shoppingCart = page.getByAltText('Cart');
        this.allBooks = page.getByText('All Books');
        this.searchField = page.getByRole('textbox', { name: 'Enter keywords...' });
        this.searchBtn = page.getByRole('button', { name: 'Search' });
        this.sortNew = page.getByRole('link', { name: 'New' });
        this.sortDesc = page.getByRole('link', { name: 'Sort By DESC' });
        this.sortAsc = page.getByRole('link', { name: 'Sort By ASC' });
        this.sortPrice = page.getByText('Price');
        this.addToCartJS = page.getByAltText('JavaScript for Web Developers');
        this.addToCartAgile = page.getByAltText('Agile Testing');
        this.addToCartDevops = page.getByAltText('The DevOps Handbook');
        this.results = page.locator('#books');
        this.resultsTitle = page.locator('h5');
        this.noResultsError = page.locator('p');
    }

    async clickLoginBtn() {
        await this.loginBtn.click();
    }
    async clickCart() {
        await this.shoppingCart.click();
    }
    async clickAllBooks() {
        await this.allBooks.click();
    }
    async enterTxtIntoSearch(text) {
        await this.searchField.fill(text);
    }
    async clickSearchBtn() {
        await this.searchBtn.click();
    }
    async searchForBook(text) {
        await this.enterTxtIntoSearch(text);
        await this.clickSearchBtn()
    }
    async sortByNew() {
        await this.sortNew.click();
    }
    async sortByAsc() {
        await this.sortPrice.click()
        await this.sortAsc.click();
    }
    async sorByDesc() {
        await this.sortPrice.click()
        await this.sortDesc.click();
    }
    async sorByPrice() {
        await this.sortPrice.click();
    }
    async addToCartDevops() {
        await this.addToCartDevops.click();
    }
    async addToCartJS() {
        await this.addToCartJS.click();
    }
    async addToCartAgile() {
        await this.addToCartAgile.click();
    }
}