import{test,expect} from '@playwright/test'
import{LoginPages} from '../Pages/login'

const validdata=require('../util/testdata.json') 

test('valid username and valid password',async({page})=>{

   const testuser=validdata[0].validusername
    const testpassword=validdata[0].validpassword

  test.setTimeout(60000)
    const loginpages1=new LoginPages(page)
    await loginpages1.goto()
    await loginpages1.login()
     await loginpages1.username.fill(testuser)
     await loginpages1.password.fill(testpassword)
    await loginpages1.loginbutton()

    const successfullogin=page.locator("#logout2")
    await expect(successfullogin).toHaveText("Log out")

})

test('Invalid username and valid password',async({page})=>{

   const testuser1=validdata[1].Invalidusername
    const testpassword1=validdata[1].validpassword1

  test.setTimeout(60000)
    const loginpages1=new LoginPages(page)
    await loginpages1.goto()
    await loginpages1.login()
      await loginpages1.username.fill(testuser1)
      await loginpages1.password.fill(testpassword1)
    await loginpages1.loginbutton()
    
    await page.on('dialog',async dialog=>{ 
    expect(dialog.message()).toBe('User does not exist.') 
    await dialog.accept()
    await expect(page).toHaveURL("https://demoblaze.com/")
})
})

test('valid username and Invalid password',async({page})=>{

    const testuser2=validdata[2].validusername1
    const testpassword2=validdata[2].Invalidpassword1

  test.setTimeout(60000)
    const loginpages1=new LoginPages(page)
    await loginpages1.goto()
    await loginpages1.login()
    await loginpages1.username.fill(testuser2)
    await loginpages1.password.fill(testpassword2)
    await loginpages1.loginbutton()
   

 await page.on('dialog',async dialog=>{ 
    expect(dialog.message()).toBe('Wrong password.') 
    await dialog.accept()
    await expect(page).toHaveURL("https://demoblaze.com/")
})
})

test('Invalid username and Invalid password',async({page})=>{
  
    const testuser3=validdata[3].Invalidusername2
    const testpassword3=validdata[3].Invalidpassword2

  test.setTimeout(60000)
    const loginpages1=new LoginPages(page)
    await loginpages1.goto()
    await loginpages1.login()
    await loginpages1.username.fill(testuser3)
    await loginpages1.password.fill(testpassword3)
    await loginpages1.loginbutton()
   

  await page.on('dialog',async dialog=>{ 
    expect(dialog.message()).toBe('Wrong password.') 
    await dialog.accept()
    await expect(page).toHaveURL("https://demoblaze.com/")
})
})
