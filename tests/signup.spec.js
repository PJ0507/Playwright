import{test,expect} from '@playwright/test'
import{Signup} from '../Pages/signup'

const validdatas=require('../util/testdata.json') 

test.only('Signup test in Playwright',async({page})=>{

    const signupusername=validdatas[0].validusername
    const signuppassword=validdatas[0].validpassword

    test.setTimeout(60000)
    const signup1=new Signup(page)
    await signup1.goto()
    await signup1.signupfn()
     await signup1.username.fill(signupusername)
    await signup1.password.fill(signuppassword)
    await signup1.signupbutton()


 
   await page.on('dialog',async dialog=>{ 
    const alertmessage=dialog.message()
    console.log("Alert message: ", alertmessage)
    expect(dialog.message()).toBe('Sign up successful.') 
    await dialog.accept()

    const successful=page.locator("#login2")
    await expect(successful).toHaveText("Log in")
   
})

})
 

/*test('Close button test in Playwright',async({page})=>{
    test.setTimeout(60000)
    const signup2=new Signup(page)
    await signup2.goto()
    await signup2.signupfn("testname05","testpwd05")
    await signup2.closebutton()

   await expect(page).toHaveURL("https://demoblaze.com/") 
})*/
