import React from "react";
import {
  Route as ReactDOMRoute,
  RouteProps as ReactDOMReactProps,
  Redirect
} from 'react-router-dom';

import { useAuth } from "../hooks/auth";

interface RouteProps extends ReactDOMReactProps {
  isPrivate?: boolean;
  component: React.ComponentType;
}

const Route: React.FC<RouteProps> = ({ isPrivate = false, component: Component, ...rest }) => {
  const { user } = useAuth();
  const isSigned = !!user;

  return (
    <ReactDOMRoute
      {...rest}
      render={() => {
        return isPrivate === isSigned ? (
          < Component />
        ) : (
          <Redirect to={{ pathname: isPrivate ? '/' : '/dashboard' }} />
        )
      }}
    />
  )
}

export default Route;