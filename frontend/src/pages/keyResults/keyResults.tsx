import * as React from "react";
import styles from "./keyResults.module.scss";
import PageRedirectComponent from "../../components/pageRedirectComponent/pageRedirectComponent";
import { RAG, keyResults } from "../../interfaces/interface";

interface IkeyResultsProps {
  keyResults: keyResults[];
}

class KeyResultPage extends React.Component<IkeyResultsProps> {
  constructor(props: IkeyResultsProps) {
    super(props);
  }

  public render(): JSX.Element {
    return (
      <div className={`${styles.tableWrapper}`}>
        <PageRedirectComponent selected="right"></PageRedirectComponent>
        {this.renderTable()}
        {this.renderButtons()}
      </div>
    );
  }

  private renderButtons() {
    return (
      <div className={styles.buttonWrapper}>
        <button className={styles.defaultButton}>Add objective</button>
        <button className={styles.defaultButton}>Show past</button>
      </div>
    );
  }

  private renderTable() {
    return (
      <table>
        <thead>
          <tr className={styles.tableHeader}>
            <th>Name</th>
            <th>Current value</th>
            <th>Progress</th>
            <th>RAG</th>
            <th>Owner</th>
            <th>Timeline</th>
            <th>Last check-in</th>
            <th></th>
          </tr>
        </thead>
        <tbody>{this.renderTableData(this.props.keyResults)}</tbody>
      </table>
    );
  }

  private renderTableData(objs: keyResults[]) {
    return objs.map(k => {
      return (
        <tr key={k.id}>
          <td>{k.name}</td>
          <td>{k.currentValue}</td>
          <td>{k.progress}</td>
          <td className={this.getBackgroundColorByRag(k.rag)}>{k.rag}</td>
          <td>{k.owner}</td>
          <td>{k.owner}</td>
          <td>{k.owner}</td>
          <td>{k.rag}</td>
          <td className={styles.iconRow}>
            <img
              src={require("./../../assets/editPencil.jpg")}
              height="30"
              width="50"
            />
          </td>
        </tr>
      );
    });
  }
  private getBackgroundColorByRag(rag: RAG) {
    switch (rag) {
      case RAG.GREEN: {
        return `${styles.green}`;
      }

      case RAG.AMBER: {
        return `${styles.amber}`;
      }
      default: {
        return `${styles.red}`;
      }
    }
  }
}

export default KeyResultPage;
