import {Component} from 'angular2/core';

@Component({
    selector: 'my-app',
    templateUrl: 'app/app.tpl.html'
})

export class AppComponent {

    selectedUser;

    users = [
        {"id":1,"gender":"Female","firstName":"Anna","lastName":"Lewis","email":"alewis0@slideshare.net"},
        {"id":2,"gender":"Male","firstName":"Chris","lastName":"Lane","email":"clane1@indiegogo.com"},
        {"id":3,"gender":"Male","firstName":"Alan","lastName":"Burke","email":"aburke2@spiegel.de"},
        {"id":4,"gender":"Female","firstName":"Kathy","lastName":"Tucker","email":"ktucker3@bbc.co.uk"},
        {"id":5,"gender":"Male","firstName":"Douglas","lastName":"Alvarez","email":"dalvarez4@biglobe.ne.jp"}
    ];

    selectUser(user){
        this.selectedUser = user;
    }
}
