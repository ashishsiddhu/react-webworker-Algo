import React, { Suspense, useState } from "react";
import { BrowserRouter as Router, Route, Switch, useHistory, Link } from 'react-router-dom';
import logo from './logo.svg';
import './App.scss';
import Star from "./Star";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Jumbotron, Container } from 'react-bootstrap';

const LazyComponent = React.lazy(() => import('./LazyComponent'));
const ThreadComponent = React.lazy(() => import('./ThreadComponent'));
function App() {
  const history = useHistory();
  const [enable, setEnable] = useState(false);
  return (
    <Container className="App">
        <h4>WebWorker / Lazy Loading / Start Component / BootStrap Demo </h4>
        <Jumbotron className={"pt-4"}>
            <Button size={'sm'} onClick={() => setEnable(true)} className={'m-2'} variant={"success"}>Lazy Load WebWorker Component</Button>
            {enable > 0 &&
              <Suspense fallback={<div>Loading...</div>}>
                 <ThreadComponent />
              </Suspense>
            }
            {/* <Star /> */}
            <Router>
                <div>
                  <Link to="/star">Load Star Component</Link>
                </div>
                <Link to="/lazyLoad">Lazy Load</Link>
                <Suspense fallback={<div>Loading...</div>}>
                    <Switch>
                        <Route exact path="/lazyLoad" component={LazyComponent} />
                        <Route path="/star" component={Star} />
                    </Switch>
                </Suspense>
            </Router>
        </Jumbotron>
    </Container>
  );
}

export default App;
