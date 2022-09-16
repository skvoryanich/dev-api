import jwt from "jsonwebtoken";

export class JWT {
    private jwt;
    private readonly secret = '0e7aa013169ee008afafa0b10e357c14173b8f6460a49cd10bc22c26ad8b306e';

    constructor() {
        this.jwt = jwt;
    }

    generateToken(payload) {
        return jwt.sign(payload, this.secret, { expiresIn: '720h' });
    }

    checkToken(token) {
        try {
            return jwt.verify(token, this.secret);
        } catch (error) {
            return false;
        }
    }
}