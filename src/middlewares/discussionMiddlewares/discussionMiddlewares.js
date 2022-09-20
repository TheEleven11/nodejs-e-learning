import { Discussion } from '../../models/discussionModels/index.js';
import cleanObject from '../../utils/cleanObject.js';
import { checkOwnedUser } from '../middlewareFactory.js';

export const cleanCreatedDiscussionObject = cleanObject(
  'topic',
  'course',
  'detail'
);

export const checkUserOwnDiscussion = checkOwnedUser(Discussion, 'user');

export const cleanUpdatedDiscussionObject = cleanObject('topic', 'detail');
