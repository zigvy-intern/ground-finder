import NewUser from '../components/NewUser.jsx';
import {useDeps, composeWithTracker, composeAll} from 'mantra-core';

export const composer = ({context, clearErrors}, onData) => {
  const {LocalState} = context();
  const error = LocalState.get('CREATE_USER_ERROR');
  onData(null, {error});
  return clearErrors;
};

export const depsMapper = (context, actions) => ({
  createUser: actions.users.create,
  clearErrors: actions. users. clearErrors,
  context: () => context
});

export default composeAll(
  composeWithTracker(composer),
  useDeps(depsMapper)
)(NewUser);
