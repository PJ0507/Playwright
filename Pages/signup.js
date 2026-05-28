export class Signup{
    constructor(page){
        this.page=page
        this.signup=page.locator("#signin2")
        this.username=page.locator("#sign-username")
        this.password=page.locator("#sign-password")
        this.submitbtn=page.locator("//button[@onclick='register()']")
        this.signupclose=page.locator("(//button[text()='Close'])[2]")

    }

    async goto(){
       await  this.page.goto("https://demoblaze.com/")
    }

    async signupfn(){
       await this.signup.click()
      
    }

    async signupbutton(){

        await this.submitbtn.click()

    }
 async closebutton(){
    await this.signupclose.click()
}

    
}