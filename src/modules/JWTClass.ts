import jwt, {JwtPayload} from "jsonwebtoken";

export class JWT {
    private readonly secret = '0e7aa013169ee008afafa0b10e357c14173b8f6460a49cd10bc22c26ad8b306e';

    generateToken(payload): string {
        return jwt.sign(payload, this.secret, { expiresIn: '720h' });
    }

    checkToken(token): JwtPayload | string {
        return jwt.verify(token, this.secret);
    }
}