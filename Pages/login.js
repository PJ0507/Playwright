export class LoginPages{
    constructor(page){
        this.page=page
        this.loginfield=page.locator("#login2")
        this.username=page.locator("#loginusername")
        this.password=page.locator("#loginpassword")
        this.loginbtn=page.locator("//button[text()='Log in']")
        this.loginclose=page.locator("(//button[text()='Close'])[3]")

    }

    async goto(){
        await this.page.goto("https://demoblaze.com/")
    }
    async login(){
        await this.loginfield.click()
    }

    async loginbutton(){
        await this.loginbtn.click()
    }

    async close(){
        await this.loginclose.click()
    }
}