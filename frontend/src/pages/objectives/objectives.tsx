import * as React from "react";
import styles from "./objectives.module.scss";
import "./objectives.scss";
import { Objective, RAG } from "../../interfaces/interface";
import { RouteComponentProps } from "react-router";
import PageRedirectComponent from "../../components/pageRedirectComponent/pageRedirectComponent";

interface IobjectivesProps {
  objectives: Objective[];
}

// interface IobjectivesState {}

class Objectives extends React.Component<
  IobjectivesProps,
  RouteComponentProps
  // IobjectivesState
> {
  constructor(props: IobjectivesProps) {
    super(props);
    // this.state = {};
  }

  public render(): JSX.Element {
    return (
      <div className={styles.objectiveWrapper}>
        <PageRedirectComponent selected="left"></PageRedirectComponent>
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
            <th>Quarter</th>
            <th>Objective</th>
            <th>Key Results</th>
            <th>Progress</th>
            <th>RAG</th>
            <th></th>
          </tr>
        </thead>
        <tbody>{this.renderTableData(this.props.objectives)}</tbody>
      </table>
    );
  }

  private renderTableData(objs: Objective[]) {
    return objs.map(o => {
      return (
        <tr key={o.id}>
          <td>{o.quarter}</td>
          <td>{o.objective}</td>
          <td>{o.keyResults}</td>
          <td>{o.progress}</td>
          <td className={this.getBackgroundColorByRag(o.rag)}>{o.rag}</td>
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

export default Objectives;
