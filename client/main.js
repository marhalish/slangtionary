import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import '../imports/startup/client';

//The layouts are not importing based on routes in startup/client/routes.js
import '../imports/ui/layouts/mainLayout.html';
