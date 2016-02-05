import {Component,OnInit} from "angular2/core";
import {RouteParams} from "angular2/router";

@Component({
    templateUrl: 'app/components/Home/Home.html'
})

export class Home implements OnInit{

    public name: String;

    constructor(private routeParams : RouteParams){}

    ngOnInit(){
        this.name = this.routeParams.params['name'];
    }
}
