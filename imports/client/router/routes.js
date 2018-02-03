import { Meteor }     from 'meteor/meteor';
import { FlowRouter } from 'meteor/ostrio:flow-router-extra';

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

FlowRouter.route('/about', {
  name: 'about',
  waitOn() {
    return import('/imports/client/about/about.js');
  },
  whileWaiting() {
    this.render('_mainLayout', 'loading');
  },
  action() {
    this.render('_mainLayout', 'about');
  },
});


FlowRouter.route('/contact', {
  name: 'contact',
  waitOn() {
    return import('/imports/client/contact/contact.js');
  },
  whileWaiting() {
    this.render('_mainLayout', 'loading');
  },
  action() {
    this.render('_mainLayout', 'contact_slangtionary');
  },
});

// 404 route (catch all)
FlowRouter.route('*', {
  action() {
    this.render('_mainLayout', 'notFound');
  },
});
