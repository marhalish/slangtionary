import { Meteor }     from 'meteor/meteor';
import { FlowRouter } from 'meteor/ostrio:flow-router-extra';
//import { BlazeLayout } from 'meteor/kadira:blaze-layout';

//import to load these templates
// When the imports below are commented out, no imports load in main.js
//import '/imports/ui/layouts/mainLayout.js';
//import '/imports/ui/pages/home.js';
//import '/imports/client/loading/loading.html';
//import '../imports/ui/pages/about.js';
//import '/imports/client/misc/appHeaderLayout.html';
//import '../imports/ui/pages/notFound.js';
//import '../imports/ui/pages/contact.js';

// Create home route
FlowRouter.route('/', {
  name: 'home',
  action() {
    this.render('_mainLayout', 'home');
  },
  waitOn() {
    return import('/imports/client/home/home.js');
  },
  whileWaiting() {
    this.render('_mainLayout', 'loading');
  }
});

// 404 route (catch all)
FlowRouter.route('*', {
  action() {
    this.render('_mainLayout', 'notFound');
  },
});
