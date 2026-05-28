import{test,expect} from '@playwright/test'
import{Addtocart} from '../Pages/Addtocart'

const validdata=require('../util/testdata.json') 
const userdata=require('../util/userdata.json') 
test('Purchase a laptopn from laptops',async({page})=>{

      const laptopusername=validdata[0].validusername
    const laptoppassword=validdata[0].validpassword

    const customername=userdata[0].name
    const customercountry=userdata[0].country
    const customercity=userdata[0].city
    const customercreditcard=userdata[0].card
    const expirymonth=userdata[0].month
    const expiryyear=userdata[0].year

  test.setTimeout(60000)
    const addtocart1=new Addtocart(page)
    await addtocart1.goto()
    await addtocart1.login()
     await addtocart1.username.fill(laptopusername)
        await addtocart1.password.fill(laptoppassword)
    await addtocart1.loginbutton()
    await addtocart1.purchaseitem()
    await addtocart1.additem()
    await addtocart1.addproductitem()


    await page.on('dialog',async dialog=>{ 
    expect(dialog.message()).toBe('Product added.') 
    await dialog.accept()

    await expect(page).toHaveURL('https://demoblaze.com/prod.html?idp_=15#');

 })

 await addtocart1.clickcart()
 await addtocart1.placingorder()
 await addtocart1.name.fill(customername)
await addtocart1.country.fill(customercountry)
await addtocart1.city.fill(customercity)
await addtocart1.creditcard.fill(customercreditcard)
await addtocart1.month.fill(expirymonth)
await addtocart1.year.fill(expiryyear)

await addtocart1.placeorderbtn()
await addtocart1.ordersucess()

})


