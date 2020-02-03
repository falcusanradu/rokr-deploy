export interface Objective {
  id: number;
  quarter: string;
  objective: string;
  keyResults: number;
  progress: number;
  rag: RAG;
}

export interface keyResults {
  id: number;
  name: string;
  currentValue: number;
  progress: number;
  rag: RAG;
  owner: string;
  timeline: Date;
  lastCheckIn: Date;
}

export enum RAG {
  GREEN = "Greeen",
  AMBER = "Amber",
  RED = "Red"
}
