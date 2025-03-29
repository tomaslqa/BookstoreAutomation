exports.HomePage = class HomePage {
    constructor(page) {
        this.page = page;
        this.loginBtn = page.getByTestId('goto-signin');
        this.shoppingCart = page.getByAltText('Cart');
        this.allBooks = page.getByText('All Books');
        this.searchField = page.getByTestId('search-input');
        this.searchBtn = page.getByTestId('search-btn');
        this.sortNew = page.getByRole('link', { name: 'New' });

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
}