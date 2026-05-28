# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Addphone.spec.js >> Purchase a Phone from Phones
- Location: tests\Addphone.spec.js:7:5

# Error details

```
Error: expect(page).toHaveURL(expected) failed

Expected: "https://demoblaze.com/prod.html?idp_=15#"
Received: "https://demoblaze.com/cart.html"
Timeout:  5000ms

Call log:
  - Expect "toHaveURL" with timeout 5000ms
    - waiting for" https://demoblaze.com/cart.html" navigation to finish...
    - navigated to "https://demoblaze.com/cart.html"
    13 × unexpected value "https://demoblaze.com/cart.html"

```

```yaml
- dialog "Place order":
  - document:
    - heading "Place order" [level=5]
    - button "Close"
    - text: "Total: 1580 Name:"
    - 'textbox "Total: 1580 Name:"': Kithu
    - text: "Country:"
    - textbox "Country:": Germany
    - text: "City:"
    - textbox "City:": Germany
    - text: "Credit card:"
    - textbox "Credit card:"
    - text: "Month:"
    - textbox "Month:"
    - text: "Year:"
    - textbox "Year:"
    - button "Close"
    - button "Purchase"
- navigation:
  - link "PRODUCT STORE":
    - /url: index.html
    - img
    - text: PRODUCT STORE
  - list:
    - listitem:
      - link "Home (current)":
        - /url: index.html
    - listitem:
      - link "Contact":
        - /url: "#"
    - listitem:
      - link "About us":
        - /url: "#"
    - listitem:
      - link "Cart":
        - /url: "#"
    - listitem
    - listitem:
      - link "Log out":
        - /url: "#"
    - listitem:
      - link "Welcome preethy":
        - /url: "#"
    - listitem
- heading "Products" [level=2]
- table:
  - rowgroup:
    - row "Pic Title Price x":
      - columnheader "Pic"
      - columnheader "Title"
      - columnheader "Price"
      - columnheader "x"
  - rowgroup:
    - row "Iphone 6 32gb 790 Delete":
      - cell:
        - img
      - cell "Iphone 6 32gb"
      - cell "790"
      - cell "Delete":
        - link "Delete":
          - /url: "#"
    - row "Iphone 6 32gb 790 Delete":
      - cell:
        - img
      - cell "Iphone 6 32gb"
      - cell "790"
      - cell "Delete":
        - link "Delete":
          - /url: "#"
- heading "Total" [level=2]
- heading "1580" [level=3]
- button "Place Order"
- heading "About Us" [level=4]
- paragraph: We believe performance needs to be validated at every stage of the software development cycle and our open source compatible, massively scalable platform makes that a reality.
- heading "Get in Touch" [level=4]
- paragraph: "Address: 2390 El Camino Real"
- paragraph: "Phone: +440 123456"
- paragraph: "Email: demo@blazemeter.com"
- heading "PRODUCT STORE" [level=4]:
  - img
  - text: PRODUCT STORE
- contentinfo:
  - paragraph: Copyright © Product Store
```

# Test source

```ts
  1  | import{test,expect} from '@playwright/test'
  2  | import{AddPhonetoCart} from '../Pages/AddPhone'
  3  | 
  4  | const validdata=require('../util/testdata.json') 
  5  | const userdata=require('../util/userdata.json') 
  6  | 
  7  | test('Purchase a Phone from Phones',async({page})=>{
  8  | 
  9  |     const phoneusername=validdata[0].validusername
  10 |     const phonepassword=validdata[0].validpassword
  11 | 
  12 |     const customername=userdata[1].name
  13 |     const customercountry=userdata[1].country
  14 |     const customercity=userdata[1].city
  15 |     const customercreditcard=userdata[1].card
  16 |     const expirymonth=userdata[1].month
  17 |     const expiryyear=userdata[1].year
  18 | 
  19 |   test.setTimeout(60000)
  20 |     const addphones=new AddPhonetoCart(page)
  21 |     await addphones.goto()
  22 |     await addphones.login()
  23 |      await addphones.username.fill(phoneusername)
  24 |         await addphones.password.fill(phonepassword)
  25 |     await addphones.loginbutton()
  26 |     await addphones.purchaseitem()
  27 |     await addphones.additem()
  28 |     await addphones.addproductitem()
  29 | 
  30 | 
  31 |     await page.on('dialog',async dialog=>{ 
  32 |     expect(dialog.message()).toBe('Product added.') 
  33 |     await dialog.accept()
  34 | 
> 35 |     await expect(page).toHaveURL('https://demoblaze.com/prod.html?idp_=15#');
     |                        ^ Error: expect(page).toHaveURL(expected) failed
  36 | 
  37 |  })
  38 | 
  39 |  await addphones.clickcart()
  40 |  await addphones.placingorder()
  41 |  
  42 | await addphones.name.fill(customername)
  43 | await addphones.country.fill(customercountry)
  44 | await addphones.city.fill(customercity)
  45 | await addphones.creditcard.fill(customercreditcard)
  46 | await addphones.month.fill(expirymonth)
  47 | await addphones.year.fill(expiryyear)
  48 | 
  49 | await addphones.placeorderbtn()
  50 | await addphones.ordersucess()
  51 | 
  52 | })
  53 | 
  54 | 
  55 | 
```