import {Router, RouterConfiguration} from 'aurelia-router';
import {inject} from 'aurelia-framework';
import {WebAPI} from './services/contacts-api';

@inject(WebAPI)
export class App {
  router: Router;

  constructor(public api: WebAPI) {}

  configureRouter(config: RouterConfiguration, router: Router){
    config.title = 'Contacts';
    config.map([
      { route: '',              moduleId: './no-selection',   title: 'Select'},
      { route: 'contacts/:id',  moduleId: './contacts/contact-detail', name:'contacts' }
    ]);

    this.router = router;
  }
}