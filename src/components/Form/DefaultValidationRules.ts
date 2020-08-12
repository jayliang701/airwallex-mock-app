
export enum ValidationType {
    Email = "Email",
    CN_Mobile = "CN_Mobile",
    PersonName = "PersonName",
}

export const Email = (value?:string | null):boolean => {
    if (!value) return false;
    const regex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return regex.test(value);
}

export const CN_Mobile = (value?:string | null):boolean => {
    if (!value) return false;
    const regex = /^1[3456789]\d{9}$/;
    return regex.test(value);
}

export const PersonName = (value?:string | null):boolean => {
    if (!value) return false;
    return value.trim().length >= 3;
}

