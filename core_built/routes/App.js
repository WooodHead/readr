import React from 'react';
import { Router, Route, IndexRoute } from 'react-router';
import NoMatch from 'containers/NoMatch';
import Viewer from 'containers/Viewer';
import Signin from 'containers/Signin';
import Signup from 'containers/Signup';
import BookInfo from 'containers/BookInfo';
import App from 'containers/App';
import Home from 'containers/Home';
import Profile from 'containers/Profile';
import BookShelf from 'containers/BookShelf';
export default (React.createElement(Router, null, React.createElement(Route, {path: "/", component: App}, React.createElement(IndexRoute, {component: Home}), React.createElement(Route, {path: "book/:id", component: BookInfo}), React.createElement(Route, {path: "profile", component: Profile}), React.createElement(Route, {path: "shelf", component: BookShelf})), React.createElement(Route, {path: "signin", component: Signin}), React.createElement(Route, {path: "signup", component: Signup}), React.createElement(Route, {path: "viewer/book/:id", component: Viewer}), React.createElement(Route, {path: "*", component: NoMatch})));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQXBwLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vY29yZS9mcm9udGVuZC9yb3V0ZXMvQXBwLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiT0FBTyxLQUErQixNQUFNLE9BQU87T0FDNUMsRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLFVBQVUsRUFBbUMsTUFBTSxjQUFjO09BQ2xGLE9BQU8sTUFBTSxvQkFBb0I7T0FDakMsTUFBTSxNQUFNLG1CQUFtQjtPQUMvQixNQUFNLE1BQU0sbUJBQW1CO09BQy9CLE1BQU0sTUFBTSxtQkFBbUI7T0FDL0IsUUFBUSxNQUFNLHFCQUFxQjtPQUNuQyxHQUFHLE1BQU0sZ0JBQWdCO09BQ3pCLElBQUksTUFBTSxpQkFBaUI7T0FDM0IsT0FBTyxNQUFNLG9CQUFvQjtPQUNqQyxTQUFTLE1BQU0sc0JBQXNCO0FBRTVDLGVBQWUsQ0FDYixvQkFBQyxNQUFNLFFBQ0wsb0JBQUMsS0FBSyxHQUFDLElBQUksRUFBQyxHQUFHLEVBQUMsU0FBUyxFQUFFLEdBQUksR0FDN0Isb0JBQUMsVUFBVSxHQUFDLFNBQVMsRUFBRSxJQUFLLEVBQUcsRUFDL0Isb0JBQUMsS0FBSyxHQUFDLElBQUksRUFBQyxVQUFVLEVBQUMsU0FBUyxFQUFFLFFBQVMsRUFBRyxFQUM5QyxvQkFBQyxLQUFLLEdBQUMsSUFBSSxFQUFDLFNBQVMsRUFBQyxTQUFTLEVBQUUsT0FBUSxFQUFHLEVBQzVDLG9CQUFDLEtBQUssR0FBQyxJQUFJLEVBQUMsT0FBTyxFQUFDLFNBQVMsRUFBRSxTQUFVLEVBQUcsQ0FDdEMsRUFDUixvQkFBQyxLQUFLLEdBQUMsSUFBSSxFQUFDLFFBQVEsRUFBQyxTQUFTLEVBQUUsTUFBTyxFQUFHLEVBQzFDLG9CQUFDLEtBQUssR0FBQyxJQUFJLEVBQUMsUUFBUSxFQUFDLFNBQVMsRUFBRSxNQUFPLEVBQUcsRUFDMUMsb0JBQUMsS0FBSyxHQUFDLElBQUksRUFBQyxpQkFBaUIsRUFBQyxTQUFTLEVBQUUsTUFBTyxFQUFHLEVBQ25ELG9CQUFDLEtBQUssR0FBQyxJQUFJLEVBQUMsR0FBRyxFQUFDLFNBQVMsRUFBRSxPQUFRLEVBQUcsQ0FDL0IsQ0FDVixDQUFBIn0=