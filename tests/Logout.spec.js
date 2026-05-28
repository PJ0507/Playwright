import{test,expect} from '@playwright/test'
import{Loginout} from '../Pages/Logout'

const validdata=require('../util/testdata.json') 

test('Login and Logout test in Playwright',async({page})=>{

   const Loginusername=validdata[0].validusername
    const Loginpassword=validdata[0].validpassword

  test.setTimeout(60000)
    const loginobject=new Loginout(page)
    await loginobject.goto()
    await loginobject.login()
     await loginobject.username.fill(Loginusername)
        await loginobject.password.fill(Loginpassword)
        await loginobject.loginbtn.click()
    await loginobject.logout()

    const signupoption=page.locator("#signin2")

    await expect(signupoption).toHaveText("Sign up")
})