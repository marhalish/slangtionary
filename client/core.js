import { Meteor }            from 'meteor/meteor';
import { Template } from 'meteor/templating';
import { FlowRouter }    from 'meteor/ostrio:flow-router-extra';
import { ReactiveVar }       from 'meteor/reactive-var';


import '/imports/client/layout/_mainLayout.html';
import '/imports/client/about/about.js';
import '/imports/client/contact/contact.js';
import '/imports/client/home/home.js';
import '/imports/client/misc/notFound.js';


import '/imports/client/misc/loading.html';
import '/imports/client/router/routes.js';
