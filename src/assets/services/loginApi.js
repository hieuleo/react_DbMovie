export default function getToken ({username, password}){
    let token = null;
    if ( username === "admin" && password === "admin") {
        token = "locationJsonWebTokenFake";
    }
    return token;
}