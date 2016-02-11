import {Component,OnInit} from 'angular2/core';
import {RouteParams} from 'angular2/router';
import {IPService} from '../../services/IP/IPService';

@Component({
    moduleId: module.id,
    templateUrl: './Home.html',
    providers: [IPService]
})

export class Home implements OnInit {

    public name:String;
    public ipAddress:String = 'Unknown IP';

    constructor(private routeParams:RouteParams, private ipService:IPService) {
        this.ipService.getUserAgentIp().subscribe(
            data => this.ipAddress = data['ip'] + 'hello',
            error => console.error(error)
        );
    }

    ngOnInit() {
        this.name = this.routeParams.params['name'];
    }
}
