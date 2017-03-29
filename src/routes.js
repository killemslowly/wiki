import {Route} from 'react-router';

import {FirstPage} from './containers/FirstPage/FirstPage';
import {ConnectedHelloWorlds} from './containers/HelloWorlds/HelloWorlds';
import {ConnectedWikiSearch} from './containers/CustomWikiSearch/CustomWikiSearch';

export const indexRoute = function() {
    return <Route key="index" path="/" component={FirstPage} onEnter={function(nextState, replace) {

    }}/>
};

export const defaultRoute = function() {
    return <Route key="default" path="/index" onEnter={function(nextState, replace) {
        replace('/');
    }}/>
};

export const helloWorldsRoute = function() {
    return <Route key="helloWorlds" path="/hello_worlds" component={ConnectedHelloWorlds}/>
};

export const wikiSearchRoute = function() {
    return <Route key="wikiSearch" path="/wiki_search" component={ConnectedWikiSearch}/>
};

