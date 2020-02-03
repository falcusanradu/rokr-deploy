import * as React from "react";
import styles from "./sidebarComponent.module.scss";
interface SidebarComponentsProps {}

interface SidebarComponentState {
  isOpen: boolean;
}

class SidebarComponent extends React.Component<
  SidebarComponentsProps,
  SidebarComponentState
> {
  isOpen: boolean = false;

  constructor(props: SidebarComponentState) {
    super(props);
    this.state = {
      isOpen: true
    };
  }

  toggleSidebar(event: Event) {
    console.log(event);
    this.isOpen = !this.isOpen;
    console.log(this.isOpen);
    this.setState({ isOpen: !this.state.isOpen });
  }

  render() {
    return (
      <div className={styles.sidebarWrapper}>
        <button
          className={styles.hideShowBtn}
          onClick={($event: any) => this.toggleSidebar($event)}
        >
          Toggle
        </button>
        <div
          className={this.isOpen ? styles.sidebarOpen : styles.sidebarClosed}
        >
          <div>
            <div>
              <h3>Left header</h3>
            </div>
            <div>
              <h3>Left content</h3>
              <p>random sidebar test</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SidebarComponent;
