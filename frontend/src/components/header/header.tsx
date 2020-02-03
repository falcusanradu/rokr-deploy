import * as React from "react";
import styles from "./header.module.scss";
import { useHistory, Router, Route, Link } from "react-router-dom";
import Objectives from "../../pages/objectives/objectives";
import KeyResultPage from "../../pages/keyResults/keyResults";
import { mockData } from "../../App";
import history from "./../../history";

interface IheaderProps {}

interface IheaderState {}

class HeaderComponent extends React.Component<IheaderProps, IheaderState> {
  // history = useHistory();

  constructor(props: any) {
    super(props);
    this.state = {
      message: null,
    };
  }

  public render(): JSX.Element {
    return (
      <Router history={history}>
        <div>
          <div className={styles.linkWrapper}>
            <Link className={styles.button} to="/objectives">
              Obj
            </Link>
            <Link className={styles.button} to="/keyResults">
              Key
            </Link>
          </div>
          <Route
            exact
            path="/keyResults"
            component={() => (
              <KeyResultPage keyResults={mockData.tableData2} />
            )}
          />
          <Route
            path="/objectives"
            component={() => <Objectives objectives={mockData.tableData1} />}
          />
        </div>
      </Router>
    );
  }

 componentDidMount() {
     setInterval(this.hello, 250);
 }

 hello = () => {
     fetch('/api/hello')
         .then(response => response.text())
         .then(message => {
             this.setState({message: message});
         });
 };
}

export default HeaderComponent;
