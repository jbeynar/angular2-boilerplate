import {Injectable} from "angular2/core";
import {IUser} from "./IUser";

@Injectable()

export class UserDAO{

    private mockUsers:IUser[] = [
        {"id":1513,"gender":"Female","firstName":"Anna","lastName":"Lewis","email":"alewis0@slideshare.net"},
        {"id":2410,"gender":"Male","firstName":"Chris","lastName":"Lane","email":"clane1@indiegogo.com"},
        {"id":6313,"gender":"Male","firstName":"Alan","lastName":"Burke","email":"aburke2@spiegel.de"},
        {"id":4014,"gender":"Female","firstName":"Kathy","lastName":"Tucker","email":"ktucker3@bbc.co.uk"},
        {"id":9120,"gender":"Male","firstName":"Douglas","lastName":"Alvarez","email":"dalvarez4@biglobe.ne.jp"}
    ];

    getUsers():Promise<IUser[]> {
        return Promise.resolve(this.mockUsers);
    }
}
