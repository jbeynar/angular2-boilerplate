import {Component,OnInit} from 'angular2/core';
import {RouteParams,RouteData} from 'angular2/router';
import {NgForm} from 'angular2/common';
import {TailListItem} from '../TailListItem/TailListItem';
import {UserDAO} from '../../services/User/UserDAO';
import {User} from '../../services/User/User';

@Component({
    moduleId: module.id,
    templateUrl: './TailList.html',
    selector: 'tail-list',
    properties: ['items'],
    directives: [TailListItem],
    providers: [UserDAO]
})

export class TailList implements OnInit {

    public users:Array<User>;
    public selectedUser:User;

    constructor(private routeParams:RouteParams, private routeData:RouteData, private userDAO:UserDAO) {}

    ngOnInit() {
        this.userDAO.getUsers().then((users)=> {this.users = users;});
    }

    selectUser(user:any) {
        this.selectedUser = user;
    }

    userSubmit(userForm:NgForm) {
        console.log(userForm);
    }
}
