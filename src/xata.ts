// Generated by Xata Codegen 0.25.1. Please do not edit.
import { buildClient } from "@xata.io/client";
import type {
  BaseClientOptions,
  SchemaInference,
  XataRecord,
} from "@xata.io/client";

const tables = [
  {
    name: "case_play",
    columns: [
      { name: "title", type: "string", notNull: true, defaultValue: "" },
      { name: "prompt", type: "text", notNull: true, defaultValue: "" },
      { name: "answer", type: "text", notNull: true, defaultValue: "" },
      { name: "author", type: "link", link: { table: "user" } },
      { name: "rulebook", type: "link", link: { table: "rulebook" } },
      { name: "edition", type: "string" },
      { name: "difficulty", type: "int", notNull: true, defaultValue: "1" },
      {
        name: "date_created",
        type: "datetime",
        notNull: true,
        defaultValue: "1970-12-23T00:00:00Z",
      },
      {
        name: "date_updated",
        type: "datetime",
        notNull: true,
        defaultValue: "1970-12-23T00:00:00Z",
      },
      { name: "sport", type: "link", link: { table: "sport" } },
      { name: "film", type: "string" },
    ],
  },
  {
    name: "user",
    columns: [
      { name: "first_name", type: "string", notNull: true, defaultValue: "" },
      { name: "last_name", type: "string", notNull: true, defaultValue: "" },
    ],
    revLinks: [{ column: "", table: "case_play" }],
  },
  {
    name: "rulebook",
    columns: [
      { name: "title", type: "string", notNull: true, defaultValue: "" },
      {
        name: "slug",
        type: "string",
        notNull: true,
        defaultValue: "nirsa-flag",
      },
    ],
    revLinks: [{ column: "", table: "case_play" }],
  },
  {
    name: "playlist",
    columns: [
      { name: "case_plays", type: "multiple" },
      { name: "title", type: "string", defaultValue: "Untitled Playlist" },
    ],
  },
  {
    name: "sport",
    columns: [
      { name: "slug", type: "string", unique: true },
      { name: "name", type: "string" },
    ],
    revLinks: [{ column: "sport", table: "case_play" }],
  },
] as const;

export type SchemaTables = typeof tables;
export type InferredTypes = SchemaInference<SchemaTables>;

export type CasePlay = InferredTypes["case_play"];
export type CasePlayRecord = CasePlay & XataRecord;

export type User = InferredTypes["user"];
export type UserRecord = User & XataRecord;

export type Rulebook = InferredTypes["rulebook"];
export type RulebookRecord = Rulebook & XataRecord;

export type Playlist = InferredTypes["playlist"];
export type PlaylistRecord = Playlist & XataRecord;

export type Sport = InferredTypes["sport"];
export type SportRecord = Sport & XataRecord;

export type DatabaseSchema = {
  case_play: CasePlayRecord;
  user: UserRecord;
  rulebook: RulebookRecord;
  playlist: PlaylistRecord;
  sport: SportRecord;
};

const DatabaseClient = buildClient();

const defaultOptions = {
  databaseURL:
    "https://jh7-s-workspace-bj4527.us-west-2.xata.sh/db/case-play-db",
};

export class XataClient extends DatabaseClient<DatabaseSchema> {
  constructor(options?: BaseClientOptions) {
    super({ ...defaultOptions, ...options }, tables);
  }
}

let instance: XataClient | undefined = undefined;

export const getXataClient = () => {
  if (instance) return instance;

  instance = new XataClient();
  return instance;
};
