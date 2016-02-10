import {Injectable} from "angular2/core";
import {Http} from "angular2/http";
import 'rxjs/add/operator/map';

@Injectable()

export class IPService{

    public constructor(private http:Http){}

    public getUserAgentIp(){
        return this.http.get('http://ip.jsontest.com/').map(res => res.json());
    }
}
