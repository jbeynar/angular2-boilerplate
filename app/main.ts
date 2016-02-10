import {bootstrap} from 'angular2/platform/browser'
import {Application} from './components/Application/Application'
import {ROUTER_PROVIDERS} from "angular2/router";
import {HTTP_PROVIDERS} from "angular2/http";

bootstrap(Application, [ROUTER_PROVIDERS, HTTP_PROVIDERS]);
