describe('Find airline tickets successfully', () => {
    it('should login with valid credentials', async () => {
        const expectedFrom = 'Hà Nội'
        const timVeMayBayBtn = await $('//input[@name="From"]')
        const fromTextbox = await $('//span[@class="twitter-typeahead"]//input[@data-id="flight_from"]')
        const listFrom = await $('//div[@class="list-flight-des"]//ul//li//strong[text()="' + expectedFrom + '"]')
        const toTextbox = await $('//span[@class="twitter-typeahead"]//input[@data-id="flight_to"]')
       
        await browser.url("https://www.bestprice.vn/")

        await timVeMayBayBtn.click()

        await fromTextbox.setValue('Han')
        await browser.pause(3000)

        await listFrom.click()
        await browser.pause(3000)

        await toTextbox.click()
        await browser.pause(3000)
       
    })
})