exports.ShoppingCartPage = class ShoppingCartPage {
    constructor(page) {
        this.page = page;
        this.allBooks = page.getByRole('link', { name: 'All Books' });
        this.checkoutBtn = page.getByTestId('checkout');
        this.total = page.getByText('Total: ');
    }
}