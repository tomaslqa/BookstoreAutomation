exports.HomePage = class HomePage {
    constructor(page) {
        this.page = page;
        this.loginBtn = page.getByTestId('goto-signin');
        this.shoppingCart = page.getByAltText('Cart');
        this.allBooks = page.getByText('All Books');
        this.searchField = page.getByRole('textbox', { name: 'Enter keywords...' });
        this.searchBtn = page.getByTestId('search-btn');
        this.sortNew = page.getByRole('link', { name: 'New' });
        this.sortDesc = page.getByRole('link', { name: 'Sort By DESC' });
        this.sortAsc = page.getByRole('link', { name: 'Sort By ASC' });
        this.sortPrice = page.getByText('Price');
        this.addToCartJS = page.getByAltText('JavaScript for Web Developers');
        this.addToCartAgile = page.getByAltText('Agile Testing');
        this.addToCartDevops = page.getByAltText('The DevOps Handbook');
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
        await this.searchField.sendKeys(text);
    }
    async clickSearchBtn() {
        await this.searchBtn.click();
    }
    async searchForBook(text) {
        enterTxtIntoSearch(text);
        clickSearchBtn() 
    }
    async sortByNew() {
        await this.sortNew.click();
    }
    async sortByAsc() {
        await this.sortAsc.click();
    }
    async sorByDesc() {
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