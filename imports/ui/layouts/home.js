import { Template } from 'meteor/templating';

import '../imports/ui/layouts/home.html';

import './post.html';

Template.body.helpers({
  posts: [
    { post: 'This is post 1' },
    { post: 'This is post 2' },
    { post: 'This is post 3' },
  ],
});
