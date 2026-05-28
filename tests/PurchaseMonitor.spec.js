import{test,expect} from '@playwright/test'
import{Purchasemonitors} from '../Pages/PurchaseMonitor'

const validdata=require('../util/testdata.json') 

const userdata=require('../util/userdata.json') 

test('Purchase a Monitor from Monitors',async({page})=>{

     const purchaseusername=validdata[0].validusername
    const purchasepassword=validdata[0].validpassword

    const customername=userdata[1].name
    const customercountry=userdata[1].country
    const customercity=userdata[1].city
    const customercreditcard=userdata[1].card
    const expirymonth=userdata[1].month
    const expiryyear=userdata[1].year

  test.setTimeout(60000)
    const addmonitor=new Purchasemonitors(page)
    await addmonitor.goto()
    await addmonitor.login()
      await addmonitor.username.fill(purchaseusername)
      await addmonitor.password.fill(purchasepassword)
    await addmonitor.loginbutton()
    await addmonitor.purchaseitem()
    await addmonitor.additem()
    await addmonitor.addproductitem()


    await page.on('dialog',async dialog=>{ 
    expect(dialog.message()).toBe('Product added.') 
    await dialog.accept()

    await expect(page).toHaveURL('https://demoblaze.com/prod.html?idp_=15#');

 })

 await addmonitor.clickcart()
 await addmonitor.placingorder()
 await addmonitor.name.fill(customername)
await addmonitor.country.fill(customercountry)
await addmonitor.city.fill(customercity)
await addmonitor.creditcard.fill(customercreditcard)
await addmonitor.month.fill(expirymonth)
await addmonitor.year.fill(expiryyear)

await addmonitor.placeorderbtn()
await addmonitor.ordersucess()

})


