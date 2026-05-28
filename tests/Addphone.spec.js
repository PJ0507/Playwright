import{test,expect} from '@playwright/test'
import{AddPhonetoCart} from '../Pages/AddPhone'

const validdata=require('../util/testdata.json') 
const userdata=require('../util/userdata.json') 

test('Purchase a Phone from Phones',async({page})=>{

    const phoneusername=validdata[0].validusername
    const phonepassword=validdata[0].validpassword

    const customername=userdata[1].name
    const customercountry=userdata[1].country
    const customercity=userdata[1].city
    const customercreditcard=userdata[1].card
    const expirymonth=userdata[1].month
    const expiryyear=userdata[1].year

  test.setTimeout(60000)
    const addphones=new AddPhonetoCart(page)
    await addphones.goto()
    await addphones.login()
     await addphones.username.fill(phoneusername)
        await addphones.password.fill(phonepassword)
    await addphones.loginbutton()
    await addphones.purchaseitem()
    await addphones.additem()
    await addphones.addproductitem()


    await page.on('dialog',async dialog=>{ 
    expect(dialog.message()).toBe('Product added.') 
    await dialog.accept()

    await expect(page).toHaveURL('https://demoblaze.com/prod.html?idp_=15#');

 })

 await addphones.clickcart()
 await addphones.placingorder()
 
await addphones.name.fill(customername)
await addphones.country.fill(customercountry)
await addphones.city.fill(customercity)
await addphones.creditcard.fill(customercreditcard)
await addphones.month.fill(expirymonth)
await addphones.year.fill(expiryyear)

await addphones.placeorderbtn()
await addphones.ordersucess()

})


