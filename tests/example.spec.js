describe('Sample Test', () => {
    it('should display the correct title', async ({ page }) => {
        await page.goto('http://localhost:3000');
        const title = await page.title();
        expect(title).toBe('Expected Title');
    });
});