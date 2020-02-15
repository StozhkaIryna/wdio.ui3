import Page from "./Page";

class LoginPage extends Page{
    open(){
        super.open('https://stage.pasv.us/user/login')
    }

}

export default new LoginPage();