import { isoAt, nextFridayIso } from "./dates";
import type { Loop } from "./types";

export function seedLoops(): Loop[] {
  const maya: Loop = {
    id: "lp_maya",
    title: "Follow up with Maya Chen on the Series A intro",
    status: "owed",
    due: isoAt(-2),
    people: [{ name: "Maya Chen", role: "Index" }],
    notes:
      "She offered intros to two Series A leads. We said the one-pager would land Wednesday. It didn't.",
    awaitReply: true,
    createdAt: isoAt(-9, 11),
    updatedAt: isoAt(-1, 16),
    draft: {
      createdBy: "agent",
      createdAt: isoAt(-1, 16),
      body: `Maya \u2014\n\nQuick nudge on the Index intros. The one-pager is ready (same thread). Happy to do a 15-minute brief with either of them this week or next.\n\nThank you again for offering this.\n\n\u2014 A`,
    },
    events: [
      { ts: isoAt(-9, 11), actor: "you", text: "Opened after coffee with Maya." },
      { ts: isoAt(-6, 14), actor: "them", text: "Maya: Send the one-pager and I'll make the intros." },
      { ts: isoAt(-2, 9), actor: "you", text: "Due date hit. Still no send." },
      { ts: isoAt(-1, 16), actor: "agent", text: "Drafted a short follow-up. Waiting on you." },
    ],
  };

  const jordan: Loop = {
    id: "lp_jordan",
    title: "Send Jordan the contractor invoice recap",
    status: "owed",
    due: isoAt(0, 15),
    people: [{ name: "Jordan Hale", role: "ops" }],
    notes:
      "Three invoices, June-August, $14,200. He needs one PDF for the bookkeeper before month-end close.",
    draft: null,
    awaitReply: false,
    createdAt: isoAt(-4, 10),
    updatedAt: isoAt(-1, 9),
    events: [
      { ts: isoAt(-4, 10), actor: "them", text: "Jordan asked for a single recap, not three PDFs." },
      { ts: isoAt(-1, 9), actor: "you", text: "Pulled the files. Still need to write the cover note." },
    ],
  };

  const airline: Loop = {
    id: "lp_airline",
    title: "United refund for the JFK-SFO delay",
    status: "waiting",
    due: null,
    people: [{ name: "United Airlines" }],
    notes:
      "UA 472, four-hour delay, missed a customer meeting. Case #3821944. They said 7-10 business days. Last ping four days ago.",
    draft: null,
    awaitReply: true,
    createdAt: isoAt(-12, 8),
    updatedAt: isoAt(-4, 11),
    events: [
      { ts: isoAt(-12, 8), actor: "you", text: "Filed the claim from the lounge." },
      { ts: isoAt(-8, 15), actor: "them", text: "United: case opened, 7-10 business days." },
      { ts: isoAt(-4, 11), actor: "you", text: "Nudged through the app. No new ETA." },
    ],
  };

  const podcast: Loop = {
    id: "lp_podcast",
    title: "Decline the Building in Public podcast",
    status: "draft",
    due: isoAt(1, 10),
    people: [{ name: "Sam Ortiz", role: "host" }],
    notes: "Kind invite. This month is a close plus a fundraise. Offer Q4.",
    awaitReply: false,
    createdAt: isoAt(-3, 13),
    updatedAt: isoAt(0, 8),
    draft: {
      createdBy: "agent",
      createdAt: isoAt(0, 8),
      body: `Sam \u2014 thank you for thinking of me. This month is a mess (fundraise + a close), so I should pass. If you're still recording in Q4 I'd like to come back to it.\n\nAppreciate the invite.`,
    },
    events: [
      { ts: isoAt(-3, 13), actor: "them", text: "Sam invited you for a 40-minute taping next week." },
      { ts: isoAt(0, 8), actor: "agent", text: "Drafted a short decline. Waiting on you." },
    ],
  };

  const dinner: Loop = {
    id: "lp_dinner",
    title: "Dinner with Priya \u2014 Friday",
    status: "owed",
    due: nextFridayIso(),
    people: [{ name: "Priya Menon", role: "friend" }],
    notes:
      "She lands Thursday night. Quiet, not a scene. Two people, 7:30. Need a reservation \u2014 and a note confirming.",
    draft: null,
    awaitReply: true,
    createdAt: isoAt(-5, 19),
    updatedAt: isoAt(-5, 19),
    events: [
      { ts: isoAt(-5, 19), actor: "them", text: "Priya: Friday if you can. I'll be wrecked \u2014 somewhere we can talk." },
    ],
  };

  const candidate: Loop = {
    id: "lp_candidate",
    title: "Priya Shah \u2014 take-home still out",
    status: "waiting",
    due: isoAt(1, 10),
    people: [{ name: "Priya Shah", role: "infra" }],
    notes:
      "Strong infra candidate. Sent the take-home Tuesday, asked for Friday. Nothing back. Don't pile on \u2014 one calm nudge if Monday is quiet.",
    draft: null,
    awaitReply: true,
    createdAt: isoAt(-10, 16),
    updatedAt: isoAt(-5, 11),
    events: [
      { ts: isoAt(-10, 16), actor: "you", text: "Screened. Wanted to move her forward." },
      { ts: isoAt(-5, 11), actor: "you", text: "Sent the take-home. Due Friday." },
    ],
  };

  const intro: Loop = {
    id: "lp_intro",
    title: "Intro Elena Vargas and Tomokazu Ito",
    status: "owed",
    due: isoAt(1, 11),
    people: [
      { name: "Elena Vargas", role: "hiring" },
      { name: "Tomokazu Ito", role: "design" },
    ],
    notes:
      "Elena is hiring a founding designer. Tomo just left a staff role at Figma. Both asked to meet. Double-opt-in already yes.",
    draft: null,
    awaitReply: true,
    createdAt: isoAt(-2, 12),
    updatedAt: isoAt(-2, 12),
    events: [
      { ts: isoAt(-2, 12), actor: "you", text: "Both said yes to an intro. You still have to write it." },
    ],
  };

  const done: Loop = {
    id: "lp_office",
    title: "Signed the office amendment",
    status: "done",
    due: isoAt(-1, 12),
    people: [{ name: "Leah Ortiz", role: "landlord" }],
    notes: "Desk count 8 -> 4. Saves $3,100 / month. Countersigned yesterday.",
    draft: null,
    awaitReply: false,
    createdAt: isoAt(-18, 10),
    updatedAt: isoAt(-1, 17),
    events: [
      { ts: isoAt(-18, 10), actor: "you", text: "Opened after the headcount freeze." },
      { ts: isoAt(-3, 14), actor: "them", text: "Leah sent the amendment." },
      { ts: isoAt(-1, 17), actor: "you", text: "Signed and filed. Closed." },
    ],
  };

  return [maya, jordan, airline, podcast, dinner, candidate, intro, done];
}
