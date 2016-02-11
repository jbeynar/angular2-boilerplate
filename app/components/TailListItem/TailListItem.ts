import {Component} from 'angular2/core';

@Component({
    selector: 'tail-list-item',
    inputs: ['item'],
    moduleId: module.id,
    templateUrl: './TailListItem.html',
    styleUrls: ['./TailListItem.css']
})

export class TailListItem {
    item = {};
}
