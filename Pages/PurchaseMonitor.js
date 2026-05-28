import { expect } from "@playwright/test"

export class Purchasemonitors{
    constructor(page){
        this.page=page
        this.loginfield=page.locator("#login2")
        this.username=page.locator("#loginusername")
        this.password=page.locator("#loginpassword")
        this.loginbtn=page.locator("//button[text()='Log in']")
        this.loginclose=page.locator("(//button[text()='Close'])[3]")
        this.item=page.locator("//a[text()='Monitors']")
        this.monitor1=page.locator("//a[text()='Apple monitor 24']")
        this.addproduct=page.locator("//a[@onclick='addToCart(10)']")
        this.cart=page.locator("//a[text()='Cart']")
        this.placeorder=page.locator("//button[text()='Place Order']")
        this.name=page.locator("//input[@id='name']")
        this.country=page.locator("//input[@id='country']")
        this.city=page.locator("//input[@id='city']")
        this.creditcard=page.locator("//input[@id='card']")
        this.month=page.locator("//input[@id='month']")
        this.year=page.locator("//input[@id='year']")
        this.purchase=page.locator("//button[text()='Purchase']")
        this.successmsg=page.locator("//h2[text()='Thank you for your purchase!']")
        this.ok=page.locator("//button[text()='OK']")

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
    async purchaseitem(){
        await this.item.click()

    }

    async additem(){
          await this.monitor1.click()
        
    }

    async addproductitem(){
        await this.addproduct.click()
    }

    async clickcart()
    {
    await this.cart.click()
    }
 
    async placingorder(){
     await this.placeorder.click()
    }
  
 async placeorderbtn(){
    await this.purchase.click()
 }

 async ordersucess(){

    const successmsg=this.page.locator("//h2[text()='Thank you for your purchase!']")
     await expect(successmsg).toHaveText("Thank you for your purchase!")
     await this.ok.click()
     await expect(this.page).toHaveURL("https://demoblaze.com/index.html")
 }
    async close(){
        await this.loginclose.click()
    }
}
