
export default class RequsetInviteForm {

    private fullName:string;

    public getFullName():string {
        return this.fullName;
    }

    private email:string;   

    public getEmail():string {
        return this.email;
    } 

    constructor(fullName:string, email:string) {
        this.fullName = fullName;
        this.email = email;
    }
} 

