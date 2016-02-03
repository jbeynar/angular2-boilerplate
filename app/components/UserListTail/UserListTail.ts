import {Component} from 'angular2/core';

@Component({
    selector: 'user-list-tail',
    inputs: ['user'],
    templateUrl: 'app/components/UserListTail/UserListTail.tpl.html',
    styleUrls: ['app/components/UserListTail/UserListTail.css']
})

export class UserListTail{
    user = {};
}
