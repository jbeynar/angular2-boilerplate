import {Component,OnInit} from "angular2/core";
import {UserListTail} from "../UserListTail/UserListTail";
import {UserDAO} from "../../services/User/UserDAO";
import {IUser} from "../../services/User/IUser";

@Component({
    selector: 'app-root',
    directives: [UserListTail],
    providers: [UserDAO],
    templateUrl: 'app/components/Application/Application.tpl.html',
})

export class Application implements OnInit{

    selectedUser:any;
    users: IUser[];

    constructor(private UserDAO:UserDAO){}

    ngOnInit(){
        this.UserDAO.getUsers().then((users:any[]) => {this.users=users})
    }

    selectUser(user:any){
        this.selectedUser = user;
    }
}
