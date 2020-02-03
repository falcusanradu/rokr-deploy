import * as React from "react";
import { Router, Route, Link } from "react-router-dom";
import history from "./../../history";
import styles from "./pageRedirectComponent.module.scss";

interface IPageRedirectComponentProps {
  selected: string;
}

interface IPageRedirectComponentState {}

class PageRedirectComponent extends React.Component<
  IPageRedirectComponentProps,
  IPageRedirectComponentState
> {
  constructor(props: IPageRedirectComponentProps) {
    super(props);
  }

  public render(): JSX.Element {
    return (
      <Router history={history}>
        <div className={styles.root}>
          <Link to="/objectives" className={this.getLeftClasses().join(" ")}>
            Objectives
          </Link>

          <Link to="/keyResults" className={this.getRightClasses().join(" ")}>
            Key Results
          </Link>
        </div>
      </Router>
    );
  }

  private getLeftClasses(): [string] {
    const leftClasses: [string] = [styles.link];
    if (this.props.selected === "left") {
      leftClasses.push(styles.selected);
      leftClasses.push(styles.removeLeftPadding);
    }
    return leftClasses;
  }

  private getRightClasses(): [string] {
    const rightClasses: [string] = [styles.link];
    if (this.props.selected === "right") {
      rightClasses.push(styles.selected);
      rightClasses.push(styles.removeRightPadding);
    }
    return rightClasses;
  }
}

export default PageRedirectComponent;
