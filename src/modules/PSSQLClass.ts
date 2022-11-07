import pgPromise from "pg-promise";

export class PSSQL {
    db;

    constructor() {
        const pg = pgPromise({});
        this.db = pg("postgres://dbuser:dbpassword@reports.tut.net:5432/reports");
    }

    async checkExistAccess(login: string){
        return await this.db.one('SELECT count(x.user_login) FROM public.access_users x where user_login = $1', login, a => a.count)
    }

}