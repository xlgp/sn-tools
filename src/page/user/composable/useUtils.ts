import hmacSHA256 from 'crypto-js/hmac-sha256';

const passwordUtil = (value: string, secretKey: string): string => {
    return hmacSHA256(value, secretKey).toString();
}

const getUUid = () => {
    return crypto.randomUUID().replace(/-/g, "");
}

export default {

    passwordUtil, getUUid
}