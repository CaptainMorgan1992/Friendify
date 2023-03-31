import crypto from "crypto";

const salt = "frends_iidsajk282nd".toString('hex')
export default function getHash (password){
    let hash = crypto.pbkdf2Sync(password, salt, 1000, 64, 'sha512').toString('hex')

}

