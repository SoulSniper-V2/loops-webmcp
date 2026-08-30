# Loops

An inbox for open loops — things you owe, things waiting on someone else, and drafts that need a human tap before they go out.

You work it like Superhuman or Linear. ChatGPT works the same live state via WebMCP. The agent can draft and file; it cannot send without approval.

That is what people actually want agents to do: email, follow-ups, calendar nudges, admin — without going rogue.

## Why WebMCP

Loops registers imperative tools on `document.modelContext` / `navigator.modelContext`. ChatGPT (desktop in-app browser) and Chrome 149+ with WebMCP testing can read your inbox, draft a reply, and stop. Sending is a separate, consequential tool (`approve_draft`) that the human can also click in the UI. Same store. Same lock.

The agent proposes. You approve.

## Run

```bash
npm install
npm run dev
```

Production build:

```bash
npm run build
npm run preview
```

No auth. State lives in `localStorage` under `loops.v1`. First visit seeds a believable founder week. Clear that key to reseed.

Required headers (already set for Vite dev/preview, Vercel, Netlify, and `public/_headers`):

- `Origin-Agent-Cluster: ?1`
- `Permissions-Policy: tools=(self)`

Never ship `Origin-Agent-Cluster: ?0`.

## How judges test

Open the deployed URL in ChatGPT desktop’s in-app browser (or Chrome 149+ with `chrome://flags/#enable-webmcp-testing`). Then:

1. **`plan_today`** — prioritized work: overdue, drafts awaiting approval, due today.
2. **`draft_message`** on a loop — writes a pending draft. Does **not** send. Status becomes `draft` if it wasn’t already done.
3. **Human Approve** in the UI, *or* **`approve_draft`** — the only send. Appends a `sent` event, clears the draft, marks the loop done (one-shot) or waiting (if a reply is expected).
4. **`list_loops`** — confirm the new state. Same data the human sees.

The lock/approval story: drafting is cheap and reversible. Sending is explicit. The agent never “just sends.”

### Tools

| Tool | Access | What it does |
|---|---|---|
| `list_loops` | read | Compact list + counts. `status` may be `owed`, `waiting`, `draft`, `done`, or `today`. |
| `get_loop` | read | Full loop: people, notes, draft, events. |
| `search_loops` | read | Title / people / notes / draft search. |
| `plan_today` | read | Structured plan the agent can act on. |
| `add_loop` | write | Create a loop. |
| `update_loop` | write | Patch title, status, due, notes, people. |
| `draft_message` | write | File a pending draft. Does not send. |
| `approve_draft` | **consequential** | Send / close out the draft. Human-equivalent of Approve. |
| `snooze_loop` | write | Push due (`until` is ISO or relative, e.g. `3d`). |
| `close_loop` | write | Mark done, optional reason. |

## Keyboard

`j` / `k` move · `↵` open · `a` approve · `e` edit draft · `s` snooze · `c` close · `n` new · `/` search · `esc` back

## Stack

Vite · React · TypeScript. Client-only. MIT.
