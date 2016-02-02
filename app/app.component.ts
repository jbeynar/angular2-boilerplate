// This corresponding to a Angular1.x dependency injection concept
import {Component} from 'angular2/core';

// Component metadata
// `@` turns Component call as a decorator
@Component({
    selector: 'my-app',
    template: '<h1>My First Angular 2 App</h1>'
})

// Declaring module; in Angular1.x it was angular.module('AppComponent'...
export class AppComponent { }
