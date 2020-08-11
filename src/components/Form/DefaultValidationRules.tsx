
export enum ValidationType {
    Email = "Email",
    CN_Mobile = "CN_Mobile",
    PersonName = "PersonName",
}

export const Email = (value:string):boolean => {
    const regex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return regex.test(value);
}

export const CN_Mobile = (value:string):boolean => {
    const regex = /^1[3456789]\d{9}$/;
    return regex.test(value);
}

export const PersonName = (value:string):boolean => {
    const regex = /[a-zA-Z\s]{3}/;
    const matches = value.match(regex);
    if (matches && matches[0] === value) {
        return true;
    }
    return false;
}

