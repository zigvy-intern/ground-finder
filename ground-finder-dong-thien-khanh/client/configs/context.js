import * as Collections from '/lib/collections';
import {Meteor} from 'meteor/meteor';
import {ReactRouter} from 'react-router'
import {ReactiveDict} from 'meteor/reactive-dict';
import {Tracker} from 'meteor/tracker';
export default function () {
  return {
    Meteor,
    ReactRouter,
    Collections,
    LocalState: new ReactiveDict(),
    Tracker
  };
}
