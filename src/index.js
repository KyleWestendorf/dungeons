import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Route, Switch} from 'react-router-dom';


import reducers from './reducers';
import CharacterEnter from './components/character_enter';
import CharacterSheet from './containers/character_sheet';

const createStoreWithMiddleware = applyMiddleware()(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
      <div>
        <Switch>
          <Route path="/charactersheet" component={CharacterSheet} />
          <Route path="/" component={CharacterEnter} />


          </Switch>
      </div>
    </BrowserRouter>
  </Provider>
  , document.querySelector('.container'));
