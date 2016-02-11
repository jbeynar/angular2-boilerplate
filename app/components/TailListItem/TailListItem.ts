import {Component} from 'angular2/core';

@Component({
    selector: 'tail-list-item',
    inputs: ['item'],
    templateUrl: 'app/components/TailListItem/TailListItem.html',
    styleUrls: ['app/components/TailListItem/TailListItem.css']
})

export class TailListItem {
    item = {};
}
