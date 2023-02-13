import React, { lazy, memo, Suspense } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Loader } from "../component/CommonComponent";
import ErrorBoundary from "../component/ErrorBoundary";
const NotFound = lazy(() => import("../container/404NotFound.js"));
const Dashboard = lazy(() => import("../container/Dashboard"));

const Routes = memo(() => {
    return (
        <Router>
            <ErrorBoundary>
                <Suspense fallback={<Loader />}>
                    <Switch>
                        <Route exact path="/">
                            <Dashboard />
                        </Route>
                        {/* <Route path="/dashboard">
                            <Dashboard />
                        </Route> */}
                        <Route component={NotFound} />
                    </Switch>
                </Suspense>
            </ErrorBoundary>
        </Router>
    );
});

export default Routes;