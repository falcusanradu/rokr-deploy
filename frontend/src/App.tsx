import React from "react";
import "./App.css";
import { Objective, RAG, keyResults } from "./interfaces/interface";
import HeaderComponent from "./components/header/header";
import SidebarComponent from "./components/sidebar/sidebarComponent";

const App: React.FC = () => {
  return (
    <div className="App">
      <SidebarComponent></SidebarComponent>
      <div className="contentWrapper">
        <HeaderComponent></HeaderComponent>
      </div>
    </div>
  );
};

export default App;

const objectives: Objective[] = [
  {
    id: 1,
    quarter: "quarter",
    objective: "objectives",
    keyResults: 1,
    progress: 20,
    rag: RAG.AMBER
  },
  {
    id: 2,
    quarter: "quarter2",
    objective: "objectives2",
    keyResults: 3,
    progress: 5,
    rag: RAG.RED
  },
  {
    id: 3,
    quarter: "quarter33sdad3",
    objective: "objectives",
    keyResults: 66,
    progress: 90,
    rag: RAG.GREEN
  },
  {
    id: 4,
    quarter: "333333",
    objective: "333333333333",
    keyResults: 5,
    progress: 99,
    rag: RAG.AMBER
  }
];

const keyResultList: keyResults[] = [
  {
    id: 1,
    name: "quarter",
    currentValue: 321,
    progress: 324,
    rag: RAG.AMBER,
    owner: "Radu",
    timeline: new Date(),
    lastCheckIn: new Date()
  },
  {
    id: 2,
    name: "quarter",
    currentValue: 321,
    progress: 324,
    rag: RAG.AMBER,
    owner: "Radu",
    timeline: new Date(),
    lastCheckIn: new Date()
  },
  {
    id: 3,
    name: "quarter",
    currentValue: 321,
    progress: 324,
    rag: RAG.AMBER,
    owner: "Radu",
    timeline: new Date(),
    lastCheckIn: new Date()
  },
  {
    id: 4,
    name: "quarter",
    currentValue: 321,
    progress: 324,
    rag: RAG.AMBER,
    owner: "Radu",
    timeline: new Date(),
    lastCheckIn: new Date()
  },
  {
    id: 1,
    name: "quarter",
    currentValue: 321,
    progress: 324,
    rag: RAG.AMBER,
    owner: "Radu",
    timeline: new Date(),
    lastCheckIn: new Date()
  },
  {
    id: 2,
    name: "quarter",
    currentValue: 321,
    progress: 324,
    rag: RAG.AMBER,
    owner: "Radu",
    timeline: new Date(),
    lastCheckIn: new Date()
  },
  {
    id: 3,
    name: "quarter",
    currentValue: 321,
    progress: 324,
    rag: RAG.AMBER,
    owner: "Radu",
    timeline: new Date(),
    lastCheckIn: new Date()
  },
  {
    id: 4,
    name: "quarter",
    currentValue: 321,
    progress: 324,
    rag: RAG.AMBER,
    owner: "Radu",
    timeline: new Date(),
    lastCheckIn: new Date()
  },
  {
    id: 1,
    name: "quarter",
    currentValue: 321,
    progress: 324,
    rag: RAG.AMBER,
    owner: "Radu",
    timeline: new Date(),
    lastCheckIn: new Date()
  },
  {
    id: 2,
    name: "quarter",
    currentValue: 321,
    progress: 324,
    rag: RAG.AMBER,
    owner: "Radu",
    timeline: new Date(),
    lastCheckIn: new Date()
  },
  {
    id: 3,
    name: "quarter",
    currentValue: 321,
    progress: 324,
    rag: RAG.AMBER,
    owner: "Radu",
    timeline: new Date(),
    lastCheckIn: new Date()
  },
  {
    id: 4,
    name: "quarter",
    currentValue: 321,
    progress: 324,
    rag: RAG.AMBER,
    owner: "Radu",
    timeline: new Date(),
    lastCheckIn: new Date()
  },
  {
    id: 1,
    name: "quarter",
    currentValue: 321,
    progress: 324,
    rag: RAG.AMBER,
    owner: "Radu",
    timeline: new Date(),
    lastCheckIn: new Date()
  },
  {
    id: 2,
    name: "quarter",
    currentValue: 321,
    progress: 324,
    rag: RAG.AMBER,
    owner: "Radu",
    timeline: new Date(),
    lastCheckIn: new Date()
  },
  {
    id: 3,
    name: "quarter",
    currentValue: 321,
    progress: 324,
    rag: RAG.AMBER,
    owner: "Radu",
    timeline: new Date(),
    lastCheckIn: new Date()
  },
  {
    id: 4,
    name: "quarter",
    currentValue: 321,
    progress: 324,
    rag: RAG.AMBER,
    owner: "Radu",
    timeline: new Date(),
    lastCheckIn: new Date()
  },
  {
    id: 1,
    name: "quarter",
    currentValue: 321,
    progress: 324,
    rag: RAG.AMBER,
    owner: "Radu",
    timeline: new Date(),
    lastCheckIn: new Date()
  },
  {
    id: 2,
    name: "quarter",
    currentValue: 321,
    progress: 324,
    rag: RAG.AMBER,
    owner: "Radu",
    timeline: new Date(),
    lastCheckIn: new Date()
  },
  {
    id: 3,
    name: "quarter",
    currentValue: 321,
    progress: 324,
    rag: RAG.AMBER,
    owner: "Radu",
    timeline: new Date(),
    lastCheckIn: new Date()
  },
  {
    id: 4,
    name: "quarter",
    currentValue: 321,
    progress: 324,
    rag: RAG.AMBER,
    owner: "Radu",
    timeline: new Date(),
    lastCheckIn: new Date()
  },
  {
    id: 1,
    name: "quarter",
    currentValue: 321,
    progress: 324,
    rag: RAG.AMBER,
    owner: "Radu",
    timeline: new Date(),
    lastCheckIn: new Date()
  },
  {
    id: 2,
    name: "quarter",
    currentValue: 321,
    progress: 324,
    rag: RAG.AMBER,
    owner: "Radu",
    timeline: new Date(),
    lastCheckIn: new Date()
  },
  {
    id: 3,
    name: "quarter",
    currentValue: 321,
    progress: 324,
    rag: RAG.AMBER,
    owner: "Radu",
    timeline: new Date(),
    lastCheckIn: new Date()
  },
  {
    id: 4,
    name: "quarter",
    currentValue: 321,
    progress: 324,
    rag: RAG.AMBER,
    owner: "Radu",
    timeline: new Date(),
    lastCheckIn: new Date()
  },
  {
    id: 1,
    name: "quarter",
    currentValue: 321,
    progress: 324,
    rag: RAG.AMBER,
    owner: "Radu",
    timeline: new Date(),
    lastCheckIn: new Date()
  },
  {
    id: 2,
    name: "quarter",
    currentValue: 321,
    progress: 324,
    rag: RAG.AMBER,
    owner: "Radu",
    timeline: new Date(),
    lastCheckIn: new Date()
  },
  {
    id: 3,
    name: "quarter",
    currentValue: 321,
    progress: 324,
    rag: RAG.AMBER,
    owner: "Radu",
    timeline: new Date(),
    lastCheckIn: new Date()
  },
  {
    id: 4,
    name: "quarter",
    currentValue: 321,
    progress: 324,
    rag: RAG.AMBER,
    owner: "Radu",
    timeline: new Date(),
    lastCheckIn: new Date()
  },
  {
    id: 1,
    name: "quarter",
    currentValue: 321,
    progress: 324,
    rag: RAG.AMBER,
    owner: "Radu",
    timeline: new Date(),
    lastCheckIn: new Date()
  },
  {
    id: 2,
    name: "quarter",
    currentValue: 321,
    progress: 324,
    rag: RAG.AMBER,
    owner: "Radu",
    timeline: new Date(),
    lastCheckIn: new Date()
  },
  {
    id: 3,
    name: "quarter",
    currentValue: 321,
    progress: 324,
    rag: RAG.AMBER,
    owner: "Radu",
    timeline: new Date(),
    lastCheckIn: new Date()
  },
  {
    id: 4,
    name: "quarter",
    currentValue: 321,
    progress: 324,
    rag: RAG.AMBER,
    owner: "Radu",
    timeline: new Date(),
    lastCheckIn: new Date()
  },
  {
    id: 1,
    name: "quarter",
    currentValue: 321,
    progress: 324,
    rag: RAG.AMBER,
    owner: "Radu",
    timeline: new Date(),
    lastCheckIn: new Date()
  },
  {
    id: 2,
    name: "quarter",
    currentValue: 321,
    progress: 324,
    rag: RAG.AMBER,
    owner: "Radu",
    timeline: new Date(),
    lastCheckIn: new Date()
  },
  {
    id: 3,
    name: "quarter",
    currentValue: 321,
    progress: 324,
    rag: RAG.AMBER,
    owner: "Radu",
    timeline: new Date(),
    lastCheckIn: new Date()
  },
  {
    id: 4,
    name: "quarter",
    currentValue: 321,
    progress: 324,
    rag: RAG.AMBER,
    owner: "Radu",
    timeline: new Date(),
    lastCheckIn: new Date()
  },
  {
    id: 1,
    name: "quarter",
    currentValue: 321,
    progress: 324,
    rag: RAG.AMBER,
    owner: "Radu",
    timeline: new Date(),
    lastCheckIn: new Date()
  },
  {
    id: 2,
    name: "quarter",
    currentValue: 321,
    progress: 324,
    rag: RAG.AMBER,
    owner: "Radu",
    timeline: new Date(),
    lastCheckIn: new Date()
  },
  {
    id: 3,
    name: "quarter",
    currentValue: 321,
    progress: 324,
    rag: RAG.AMBER,
    owner: "Radu",
    timeline: new Date(),
    lastCheckIn: new Date()
  },
  {
    id: 4,
    name: "quarter",
    currentValue: 321,
    progress: 324,
    rag: RAG.AMBER,
    owner: "Radu",
    timeline: new Date(),
    lastCheckIn: new Date()
  }
];

export const mockData = {
  tableData1: objectives,
  tableData2: keyResultList,
};
