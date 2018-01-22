import {Template} from 'meteor/templating';

import './post.html';


Template.post_feed.helpers({
  posts() () {
    /*return Posts.find({}, sort: ... )*/
  }
});

Template.post_feed.events({
  'click .post'(event) {
    /*return Posts.find({}, sort: ... )*/
  }
});
