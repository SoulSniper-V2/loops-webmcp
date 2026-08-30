export type LoopStatus = "owed" | "waiting" | "draft" | "done";

export type Filter = "today" | LoopStatus;

export type Actor = "you" | "agent" | "them";

export type DraftAuthor = "human" | "agent";

export interface Person {
  name: string;
  role?: string;
}

export interface LoopEvent {
  ts: string;
  actor: Actor;
  text: string;
}

export interface Draft {
  body: string;
  createdBy: DraftAuthor;
  createdAt: string;
}

export interface Loop {
  id: string;
  title: string;
  status: LoopStatus;
  due: string | null;
  people: Person[];
  notes: string;
  draft: Draft | null;
  events: LoopEvent[];
  /** After approve, stay open waiting on a reply. */
  awaitReply: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface Counts {
  today: number;
  owed: number;
  waiting: number;
  draft: number;
  done: number;
  all: number;
}

export interface CompactLoop {
  id: string;
  title: string;
  status: LoopStatus;
  due: string | null;
  people: string[];
  hasDraft: boolean;
  overdue: boolean;
  dueLabel: string | null;
}

export const FILTERS: { id: Filter; label: string }[] = [
  { id: "today", label: "Today" },
  { id: "owed", label: "Owed" },
  { id: "waiting", label: "Waiting" },
  { id: "draft", label: "Drafts" },
  { id: "done", label: "Done" },
];

export const STATUSES: LoopStatus[] = ["owed", "waiting", "draft", "done"];
