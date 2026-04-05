import {
  ArrowRight,
  AudioLines,
  BadgeCheck,
  Blocks,
  BrainCircuit,
  CalendarClock,
  CheckCheck,
  CirclePlay,
  Clock3,
  FileText,
  ListTodo,
  MessageSquareText,
  NotebookPen,
  Search,
  ShieldCheck,
  Sparkles,
  Users,
  Workflow,
  Zap
} from 'lucide-react';

import { HeroVisual } from './components/sections/hero-visual';
import { BentoCard, BentoGrid } from './components/ui/bento-grid';
import { BorderBeam } from './components/ui/border-beam';
import { GradientText } from './components/ui/gradient-text';
import { LogoMark } from './components/ui/logo-mark';
import { SpotlightCard } from './components/ui/spotlight-card';

const demoLink = 'mailto:hello@minuteflow.app?subject=MinuteFlow%20demo';

const meetingTypes = [
  'Discovery calls',
  'Weekly standups',
  'Customer reviews',
  'Implementation kickoffs',
  'Hiring interviews',
  'Board prep',
  'Partner syncs',
  'QBR planning'
];

const trustSignals = [
  {
    icon: <BadgeCheck className="size-4" />,
    title: 'Live or recorded',
    body: 'Works with transcripts, recordings, or synced notes.'
  },
  {
    icon: <ShieldCheck className="size-4" />,
    title: 'Private by default',
    body: 'Visibility follows workspace and meeting type.'
  },
  {
    icon: <Clock3 className="size-4" />,
    title: 'Ready in minutes',
    body: 'The recap arrives while context is still fresh.'
  }
];

const testimonials = [
  {
    name: 'Nadia Park',
    role: 'RevOps Lead',
    body: 'We stopped losing action items between the meeting ending and Slack waking up.'
  },
  {
    name: 'Marcus Lee',
    role: 'Head of Customer Success',
    body: 'The summary is short enough to forward, and detailed enough to trust.'
  },
  {
    name: 'Elena Soto',
    role: 'Product Manager',
    body: 'The useful part is not the transcript. It is the decisions, owners, and next moves.'
  },
  {
    name: 'Ibrahim Khan',
    role: 'Sales Engineer',
    body: 'By the time I leave a discovery call, the recap draft is already waiting.'
  },
  {
    name: 'Tess Morgan',
    role: 'Operations Director',
    body: 'Meeting memory finally became searchable work context instead of another folder.'
  },
  {
    name: 'Jonas Reed',
    role: 'Founder',
    body: 'We use it because it removes the quiet tax of rewriting what everybody already heard.'
  }
];

const faqs = [
  {
    question: 'Does MinuteFlow replace my meeting bot?',
    answer:
      'It works with live transcripts, recordings, or synced notes. The output is a clean meeting record, not another transcript dump.'
  },
  {
    question: 'Where do the action items go?',
    answer:
      'Tasks can stay inside MinuteFlow or route into your shared workflow. Each one keeps its owner, due date, and meeting context.'
  },
  {
    question: 'How does it handle sensitive meetings?',
    answer:
      'Visibility follows workspace and meeting type. Leadership, hiring, and customer calls can each use different sharing rules.'
  },
  {
    question: 'Who is it built for?',
    answer:
      'It fits teams whose meetings create real follow-up: product, success, sales, ops, and founders.'
  }
];

const primaryButtonClass =
  'inline-flex items-center justify-center gap-2 rounded-full bg-[var(--text)] px-6 py-3.5 text-sm font-semibold text-white transition-transform duration-200 hover:-translate-y-0.5';
const secondaryButtonClass =
  'inline-flex items-center justify-center gap-2 rounded-full border border-[rgba(16,32,51,0.14)] bg-white/70 px-6 py-3.5 text-sm font-semibold text-[var(--text)] backdrop-blur-sm transition-transform duration-200 hover:-translate-y-0.5';

function SectionIntro({
  label,
  title,
  body
}: {
  label: string;
  title: string;
  body: string;
}) {
  return (
    <div className="max-w-3xl space-y-5">
      <div className="eyebrow">{label}</div>
      <div className="space-y-4">
        <h2 className="heading-font text-balance text-4xl font-semibold tracking-[-0.06em] text-[var(--text)] sm:text-5xl">
          {title}
        </h2>
        <p className="body-copy max-w-2xl text-lg">{body}</p>
      </div>
    </div>
  );
}

function ReviewCard({ name, role, body }: { name: string; role: string; body: string }) {
  return (
    <figure className="h-full rounded-[26px] border border-[rgba(16,32,51,0.12)] bg-[rgba(255,252,246,0.82)] p-5 shadow-[0_20px_60px_rgba(16,32,51,0.06)] backdrop-blur-sm">
      <div className="flex items-center gap-3">
        <div className="flex size-11 items-center justify-center rounded-full bg-[rgba(16,32,51,0.08)] text-sm font-extrabold text-[var(--text)]">
          {name
            .split(' ')
            .map((part) => part[0])
            .join('')}
        </div>
        <div>
          <figcaption className="font-semibold text-[var(--text)]">{name}</figcaption>
          <p className="text-sm text-[rgba(16,32,51,0.55)]">{role}</p>
        </div>
      </div>
      <blockquote className="mt-4 text-sm leading-7 text-[rgba(16,32,51,0.76)]">{body}</blockquote>
    </figure>
  );
}

function MeetingSurfacePill({ text }: { text: string }) {
  return (
    <div className="inline-flex items-center gap-2 rounded-full border border-[rgba(16,32,51,0.12)] bg-white/70 px-4 py-2 text-sm font-medium text-[rgba(16,32,51,0.76)]">
      <span className="size-2 rounded-full bg-[var(--accent)]" />
      {text}
    </div>
  );
}

function OutputPreview() {
  return (
    <div
      id="sample-output"
      className="relative overflow-hidden rounded-[34px] border border-[rgba(16,32,51,0.12)] bg-[rgba(255,252,246,0.9)] p-6 shadow-[0_24px_70px_rgba(16,32,51,0.08)] backdrop-blur-xl"
    >
      <BorderBeam duration={9} size={120} colorFrom="#d97a4a" colorTo="#1f8f84" />
      <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
        <div className="space-y-4">
          <div className="eyebrow">Sample output</div>
          <h3 className="heading-font text-3xl font-semibold tracking-[-0.05em] text-[var(--text)]">
            One meeting record. Three things your team will actually use.
          </h3>
          <p className="body-copy text-base">
            Notes for context, action items for accountability, and a short recap for everyone who was not in the room.
          </p>
          <div className="grid gap-3 sm:grid-cols-3">
            {[
              { icon: <NotebookPen className="size-4" />, label: 'Readable notes' },
              { icon: <ListTodo className="size-4" />, label: 'Owned tasks' },
              { icon: <MessageSquareText className="size-4" />, label: 'Shareable recap' }
            ].map((item) => (
              <div
                key={item.label}
                className="rounded-[22px] border border-[rgba(16,32,51,0.1)] bg-white/72 p-4 text-sm font-medium text-[var(--text)]"
              >
                <div className="mb-2 text-[var(--accent)]">{item.icon}</div>
                {item.label}
              </div>
            ))}
          </div>
        </div>
        <div className="dark-panel relative rounded-[28px] p-5">
          <div className="mb-4 flex items-center justify-between text-xs uppercase tracking-[0.16em] text-[rgba(249,242,232,0.48)]">
            <span>Customer call recap</span>
            <span>Ready 14 min later</span>
          </div>
          <div className="space-y-4">
            <div className="rounded-[24px] border border-white/10 bg-white/5 p-4">
              <div className="mb-2 text-sm font-semibold text-white">Summary</div>
              <p className="text-sm leading-6 text-[rgba(249,242,232,0.68)]">
                The customer is ready for a 30-day pilot if rollout starts in one workspace and security gets reviewed this week.
              </p>
            </div>
            <div className="rounded-[24px] border border-white/10 bg-white/5 p-4">
              <div className="mb-2 text-sm font-semibold text-white">Action items</div>
              <div className="space-y-2 text-sm text-[rgba(249,242,232,0.76)]">
                <div className="flex items-start gap-2">
                  <CheckCheck className="mt-0.5 size-4 text-[var(--accent-soft)]" />
                  Send pilot scope to Nadia by Thursday
                </div>
                <div className="flex items-start gap-2">
                  <CheckCheck className="mt-0.5 size-4 text-[var(--accent-soft)]" />
                  Invite sales engineer to the technical follow-up
                </div>
                <div className="flex items-start gap-2">
                  <CheckCheck className="mt-0.5 size-4 text-[var(--accent-soft)]" />
                  Attach the security FAQ for procurement
                </div>
              </div>
            </div>
            <div className="rounded-[24px] border border-white/10 bg-white/5 p-4">
              <div className="mb-2 text-sm font-semibold text-white">Risk notes</div>
              <p className="text-sm leading-6 text-[rgba(249,242,232,0.68)]">
                Budget is available, but timing depends on procurement confidence. Security collateral is the blocker.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function TranscriptBackground() {
  return (
    <div className="absolute inset-0 p-5">
      <div className="absolute inset-x-8 top-8 rounded-[22px] border border-[rgba(16,32,51,0.08)] bg-white/70 p-4 backdrop-blur-sm">
        <div className="mb-3 flex items-center justify-between text-xs uppercase tracking-[0.16em] text-[rgba(16,32,51,0.45)]">
          <span>Detected decisions</span>
          <span>9 moments</span>
        </div>
        <div className="space-y-2 text-sm text-[rgba(16,32,51,0.72)]">
          <div className="rounded-2xl bg-[rgba(217,122,74,0.08)] px-3 py-2">
            Pilot stays in one workspace
          </div>
          <div className="rounded-2xl bg-[rgba(31,143,132,0.08)] px-3 py-2">
            Send security note before Friday
          </div>
          <div className="rounded-2xl bg-[rgba(16,32,51,0.06)] px-3 py-2">
            Add SE to next technical review
          </div>
        </div>
      </div>
      <div className="absolute bottom-8 left-8 right-20 rounded-[24px] border border-[rgba(16,32,51,0.08)] bg-[rgba(255,250,242,0.78)] p-4 backdrop-blur-sm">
        <div className="mb-2 flex items-center gap-2 text-sm font-semibold text-[var(--text)]">
          <BrainCircuit className="size-4 text-[var(--accent)]" />
          Keep the signal, drop the filler
        </div>
        <p className="text-sm leading-6 text-[rgba(16,32,51,0.68)]">
          MinuteFlow separates decisions, blockers, objections, and promises before the transcript turns into noise.
        </p>
      </div>
    </div>
  );
}

function TasksBackground() {
  return (
    <div className="absolute inset-0 p-5">
      <div className="absolute left-6 right-6 top-8 rounded-[26px] border border-[rgba(16,32,51,0.1)] bg-white/74 p-4 shadow-[0_16px_40px_rgba(16,32,51,0.06)]">
        <div className="mb-3 flex items-center justify-between text-xs uppercase tracking-[0.16em] text-[rgba(16,32,51,0.45)]">
          <span>Task digest</span>
          <span>Auto-assigned</span>
        </div>
        <div className="space-y-3">
          {[
            ['Nadia', 'Send recap to customer', 'Today'],
            ['Marcus', 'Review pilot scope', 'Tomorrow'],
            ['Elena', 'Capture objections in product brief', 'Today']
          ].map(([owner, task, due]) => (
            <div
              key={task}
              className="rounded-[22px] border border-[rgba(16,32,51,0.08)] bg-[rgba(16,32,51,0.03)] px-3 py-3"
            >
              <div className="flex items-center justify-between gap-3 text-sm font-semibold text-[var(--text)]">
                <span>{task}</span>
                <span className="rounded-full bg-[rgba(31,143,132,0.12)] px-2.5 py-1 text-xs text-[var(--teal)]">
                  {due}
                </span>
              </div>
              <div className="mt-2 text-xs uppercase tracking-[0.16em] text-[rgba(16,32,51,0.45)]">
                Owner: {owner}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function SearchBackground() {
  return (
    <div className="absolute inset-0 p-5">
      <div className="absolute inset-x-6 top-10 rounded-[22px] border border-[rgba(16,32,51,0.1)] bg-white/80 px-4 py-3 shadow-[0_12px_30px_rgba(16,32,51,0.05)]">
        <div className="flex items-center gap-3 text-sm text-[rgba(16,32,51,0.56)]">
          <Search className="size-4 text-[var(--accent)]" />
          Search “procurement blocker + Acme”
        </div>
      </div>
      <div className="absolute inset-x-6 bottom-10 space-y-3">
        {[
          'Acme | Discovery call | security collateral blocker',
          'Pilot sync | workspace rollout approved',
          'QBR prep | customer asked for owner list'
        ].map((item) => (
          <div
            key={item}
            className="rounded-[22px] border border-[rgba(16,32,51,0.08)] bg-[rgba(255,250,242,0.82)] px-4 py-3 text-sm text-[rgba(16,32,51,0.72)]"
          >
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}

function BriefingBackground() {
  return (
    <div className="absolute inset-0 p-5">
      <div className="absolute left-6 right-6 top-8 rounded-[26px] border border-[rgba(16,32,51,0.08)] bg-[rgba(16,32,51,0.05)] p-5">
        <div className="mb-4 flex items-center justify-between">
          <div>
            <div className="text-xs font-black uppercase tracking-[0.16em] text-[rgba(16,32,51,0.45)]">
              Weekly briefing
            </div>
            <div className="mt-2 heading-font text-2xl font-semibold tracking-[-0.05em] text-[var(--text)]">
              What changed across 11 meetings
            </div>
          </div>
          <div className="rounded-2xl bg-white/70 p-3 text-[var(--teal)]">
            <Sparkles className="size-5" />
          </div>
        </div>
        <div className="grid gap-3 sm:grid-cols-3">
          {[
            ['4', 'new blockers'],
            ['7', 'promises made'],
            ['3', 'decisions moved forward']
          ].map(([value, label]) => (
            <div key={label} className="rounded-[22px] bg-white/74 px-4 py-4 text-center">
              <div className="heading-font text-3xl font-semibold tracking-[-0.05em] text-[var(--text)]">
                {value}
              </div>
              <div className="mt-1 text-sm text-[rgba(16,32,51,0.58)]">{label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <div className="page-shell pb-20">
      <div
        className="absolute left-[-10rem] top-40 h-80 w-80 rounded-full bg-[rgba(217,122,74,0.12)] blur-3xl"
        aria-hidden="true"
      />
      <div
        className="absolute right-[-10rem] top-[32rem] h-96 w-96 rounded-full bg-[rgba(31,143,132,0.12)] blur-3xl"
        aria-hidden="true"
      />

      <header className="sticky top-0 z-50">
        <div className="container-shell pt-4">
          <div className="panel-glass flex items-center justify-between rounded-full px-4 py-3 sm:px-6">
            <a href="#hero" className="flex items-center gap-3">
              <LogoMark className="size-11" />
              <div>
                <div className="heading-font text-lg font-semibold tracking-[-0.05em] text-[var(--text)]">
                  MinuteFlow
                </div>
                <div className="text-xs uppercase tracking-[0.16em] text-[rgba(16,32,51,0.45)]">
                  AI meeting memory for teams
                </div>
              </div>
            </a>
            <nav className="hidden items-center gap-7 text-sm font-medium text-[rgba(16,32,51,0.72)] md:flex">
              <a href="#product">Product</a>
              <a href="#workflow">How it works</a>
              <a href="#proof">Proof</a>
              <a href="#faq">FAQ</a>
            </nav>
            <a
              href={demoLink}
              className="rounded-full border border-[rgba(16,32,51,0.12)] bg-white/75 px-4 py-2 text-sm font-semibold text-[var(--text)]"
            >
              Book demo
            </a>
          </div>
        </div>
      </header>

      <main>
        <section id="hero" className="pt-8 sm:pt-12">
          <div className="container-shell space-y-6">
            <div className="grid gap-10 lg:grid-cols-[0.98fr_1.02fr] lg:items-center">
              <div className="space-y-8">
                <div className="space-y-5">
                  <div className="eyebrow">
                    <Sparkles className="size-3.5" />
                    After every meeting
                  </div>
                  <div className="space-y-4">
                    <h1 className="heading-font text-balance text-5xl font-semibold tracking-[-0.08em] text-[var(--text)] sm:text-6xl lg:text-[4.65rem] lg:leading-[0.96]">
                      Turn every meeting into
                      <span className="block">
                        <GradientText>clear next steps.</GradientText>
                      </span>
                    </h1>
                    <p className="body-copy max-w-xl text-lg sm:text-xl">
                      MinuteFlow turns calls into notes, action items, and a shareable recap before your team forgets what mattered.
                    </p>
                  </div>
                </div>

                <div className="flex flex-col gap-3 sm:flex-row">
                  <a href={demoLink} className={primaryButtonClass}>
                    Book demo
                    <ArrowRight className="size-4" />
                  </a>
                  <a href="#sample-output" className={secondaryButtonClass}>
                    <CirclePlay className="size-4" />
                    See sample output
                  </a>
                </div>
              </div>

              <HeroVisual />
            </div>

            <div className="grid gap-4 sm:grid-cols-3">
              {[
                {
                  title: 'Notes, tasks, recap',
                  body: 'Every meeting record ships with all three, so follow-up does not start from a blank page.'
                },
                {
                  title: 'Private by workspace',
                  body: 'Customer, hiring, and leadership calls can each stay visible to the right people.'
                },
                {
                  title: 'Searchable later',
                  body: 'Find blockers, decisions, and owners by account or project without opening five old docs.'
                }
              ].map((item) => (
                <div
                  key={item.title}
                  className="rounded-[26px] border border-[rgba(16,32,51,0.1)] bg-white/70 p-5 backdrop-blur-sm"
                >
                  <div className="heading-font text-2xl font-semibold tracking-[-0.05em] text-[var(--text)]">
                    {item.title}
                  </div>
                  <div className="mt-2 text-sm leading-6 text-[rgba(16,32,51,0.62)]">{item.body}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="pb-24 pt-16">
          <div className="container-shell panel-glass rounded-[34px] px-6 py-8 sm:px-8">
            <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
              <div className="space-y-4">
                <div className="eyebrow">Built for real work</div>
                <h2 className="heading-font text-balance text-3xl font-semibold tracking-[-0.06em] text-[var(--text)] sm:text-4xl">
                  Fits the meetings that create follow-up.
                </h2>
                <p className="body-copy text-base">
                  Discovery calls, standups, handoffs, interviews, and board prep all create decisions somebody has to carry forward.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex flex-wrap gap-3">
                  {meetingTypes.map((item) => (
                    <MeetingSurfacePill key={item} text={item} />
                  ))}
                </div>

                <div className="grid gap-4 sm:grid-cols-3">
                  {trustSignals.map((item) => (
                    <div
                      key={item.title}
                      className="rounded-[24px] border border-[rgba(16,32,51,0.1)] bg-white/74 p-4"
                    >
                      <div className="mb-3 inline-flex rounded-2xl bg-[rgba(16,32,51,0.06)] p-2.5 text-[var(--teal)]">
                        {item.icon}
                      </div>
                      <div className="text-sm font-semibold text-[var(--text)]">{item.title}</div>
                      <div className="mt-2 text-sm leading-6 text-[rgba(16,32,51,0.62)]">{item.body}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="product" className="pb-24">
          <div className="container-shell space-y-10">
            <SectionIntro
              label="Product"
              title="One meeting record, three jobs done."
              body="MinuteFlow captures what happened, assigns what happens next, and keeps the result searchable after the room clears."
            />

            <BentoGrid>
              <BentoCard
                label="Capture"
                title="Catch decisions inside messy conversation"
                description="Separate the moments that matter before the transcript turns into noise."
                icon={<AudioLines className="size-5" />}
                className="xl:col-span-2"
                background={<TranscriptBackground />}
              />
              <BentoCard
                label="Owners"
                title="Assign follow-up before context disappears"
                description="Action items leave the call with owners, due dates, and enough context to execute."
                icon={<ListTodo className="size-5" />}
                background={<TasksBackground />}
              />
              <BentoCard
                label="Search"
                title="Find the moment that changed the deal"
                description="Search meeting memory by account, project, blocker, or decision instead of by file name."
                icon={<Search className="size-5" />}
                background={<SearchBackground />}
              />
              <BentoCard
                label="Briefings"
                title="Roll calls into a weekly team brief"
                description="Turn multiple meetings into one clean view for managers, account owners, or leadership."
                icon={<Blocks className="size-5" />}
                className="xl:col-span-2"
                background={<BriefingBackground />}
              />
            </BentoGrid>
          </div>
        </section>

        <section id="workflow" className="pb-24">
          <div className="container-shell grid gap-6 lg:grid-cols-[0.82fr_1.18fr] lg:items-start">
            <div className="space-y-5">
              <SectionIntro
                label="How it works"
                title="From live call to clean recap in minutes."
                body="Capture the meeting once, separate the signal, and send the right output before momentum drops."
              />
              <div className="grid gap-4">
                {[
                  {
                    icon: <CalendarClock className="size-5" />,
                    title: 'Capture context',
                    body: 'Pull the title, attendees, transcript, and surrounding notes before anyone starts rewriting by hand.'
                  },
                  {
                    icon: <Workflow className="size-5" />,
                    title: 'Separate the signal',
                    body: 'Break out decisions, blockers, owners, and promised follow-up into explicit sections.'
                  },
                  {
                    icon: <Zap className="size-5" />,
                    title: 'Publish the recap',
                    body: 'Share a short summary, route tasks, and keep the meeting searchable later.'
                  }
                ].map((item) => (
                  <SpotlightCard key={item.title} className="p-6">
                    <div className="mb-4 inline-flex rounded-2xl bg-[rgba(16,32,51,0.06)] p-3 text-[var(--accent)]">
                      {item.icon}
                    </div>
                    <h3 className="heading-font text-2xl font-semibold tracking-[-0.05em] text-[var(--text)]">
                      {item.title}
                    </h3>
                    <p className="mt-3 text-sm leading-7 text-[rgba(16,32,51,0.68)]">{item.body}</p>
                  </SpotlightCard>
                ))}
              </div>
            </div>
            <OutputPreview />
          </div>
        </section>

        <section id="proof" className="pb-24">
          <div className="container-shell space-y-10">
            <SectionIntro
              label="Proof"
              title="Why teams keep using it after week one."
              body="The value shows up after the meeting ends: less rewriting, cleaner handoffs, and better visibility on what changed."
            />

            <div className="grid gap-5 md:grid-cols-3">
              {[
                {
                  icon: <Clock3 className="size-5" />,
                  title: 'The recap is ready before Slack starts.',
                  body: 'The meeting ends with a usable draft instead of another round of manual note cleanup.'
                },
                {
                  icon: <Users className="size-5" />,
                  title: 'Everyone sees the same owners and deadlines.',
                  body: 'One shared record keeps follow-up aligned across product, sales, success, and ops.'
                },
                {
                  icon: <ShieldCheck className="size-5" />,
                  title: 'Sensitive meetings stay scoped correctly.',
                  body: 'Leadership, hiring, and customer threads can each use different visibility rules.'
                }
              ].map((item) => (
                <SpotlightCard key={item.title} spotlightColor="rgba(31, 143, 132, 0.18)">
                  <div className="mb-4 inline-flex rounded-2xl bg-[rgba(16,32,51,0.06)] p-3 text-[var(--teal)]">
                    {item.icon}
                  </div>
                  <h3 className="heading-font text-2xl font-semibold tracking-[-0.05em] text-[var(--text)]">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-[rgba(16,32,51,0.68)]">{item.body}</p>
                </SpotlightCard>
              ))}
            </div>

            <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
              {testimonials.map((item) => (
                <ReviewCard key={item.name} {...item} />
              ))}
            </div>
          </div>
        </section>

        <section id="demo" className="pb-24">
          <div className="container-shell dark-panel relative overflow-hidden rounded-[36px] px-6 py-10 sm:px-10 sm:py-12">
            <div
              className="absolute -right-20 top-1/2 h-56 w-56 -translate-y-1/2 rounded-full bg-[rgba(217,122,74,0.2)] blur-3xl"
              aria-hidden="true"
            />
            <div
              className="absolute left-[-4rem] top-[-4rem] h-44 w-44 rounded-full bg-[rgba(31,143,132,0.16)] blur-3xl"
              aria-hidden="true"
            />
            <div className="relative z-10 grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
              <div className="space-y-5">
                <div className="eyebrow border-white/10 bg-white/6 text-[rgba(249,242,232,0.68)]">
                  Book a demo
                </div>
                <h2 className="heading-font max-w-2xl text-balance text-4xl font-semibold tracking-[-0.06em] text-[rgba(249,242,232,0.96)] sm:text-5xl">
                  Bring one real meeting. Leave with a working recap.
                </h2>
                <p className="max-w-xl text-base leading-8 text-[rgba(249,242,232,0.68)]">
                  We will turn a recent call into notes, tasks, and a manager-ready summary so your team can see the workflow end to end.
                </p>
                <div className="flex flex-col gap-3 sm:flex-row">
                  <a
                    href={demoLink}
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-[var(--cream)] px-6 py-3.5 text-sm font-semibold text-[var(--text)] transition-transform duration-200 hover:-translate-y-0.5"
                  >
                    Book demo
                    <ArrowRight className="size-4" />
                  </a>
                  <a
                    href="#faq"
                    className="inline-flex items-center justify-center gap-2 rounded-full border border-white/12 bg-white/6 px-6 py-3.5 text-sm font-semibold text-[rgba(249,242,232,0.92)] transition-transform duration-200 hover:-translate-y-0.5"
                  >
                    Review FAQ
                  </a>
                </div>
              </div>
              <div className="relative overflow-hidden rounded-[30px] border border-white/10 bg-white/5 p-5">
                <BorderBeam duration={8} size={120} colorFrom="#f4b48c" colorTo="#1f8f84" />
                <div className="space-y-4">
                  <div className="flex items-center gap-3 text-[rgba(249,242,232,0.84)]">
                    <div className="rounded-2xl bg-white/10 p-3 text-[var(--accent-soft)]">
                      <FileText className="size-5" />
                    </div>
                    <div>
                      <div className="text-sm font-semibold">What you will see</div>
                      <div className="text-xs uppercase tracking-[0.16em] text-[rgba(249,242,232,0.48)]">
                        Demo walkthrough
                      </div>
                    </div>
                  </div>
                  <div className="space-y-3 text-sm text-[rgba(249,242,232,0.72)]">
                    <div className="rounded-[22px] border border-white/10 bg-white/5 px-4 py-3">
                      One live or recorded meeting turned into a structured record.
                    </div>
                    <div className="rounded-[22px] border border-white/10 bg-white/5 px-4 py-3">
                      Tasks with owners, due dates, and enough context to execute.
                    </div>
                    <div className="rounded-[22px] border border-white/10 bg-white/5 px-4 py-3">
                      Visibility rules for customer, hiring, or leadership calls.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="faq" className="pb-8">
          <div className="container-shell space-y-10">
            <SectionIntro
              label="FAQ"
              title="The obvious questions, answered directly."
              body="Short answers for teams deciding whether MinuteFlow fits their meeting workflow."
            />
            <div className="grid gap-4">
              {faqs.map((item) => (
                <details
                  key={item.question}
                  className="group rounded-[28px] border border-[rgba(16,32,51,0.12)] bg-[rgba(255,252,246,0.82)] px-6 py-5 shadow-[0_18px_60px_rgba(16,32,51,0.05)]"
                >
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-left">
                    <span className="heading-font text-2xl font-semibold tracking-[-0.05em] text-[var(--text)]">
                      {item.question}
                    </span>
                    <div className="rounded-full border border-[rgba(16,32,51,0.12)] p-2 transition-transform duration-200 group-open:rotate-45">
                      <ArrowRight className="size-4 rotate-[-45deg] text-[var(--accent)]" />
                    </div>
                  </summary>
                  <p className="body-copy mt-4 max-w-3xl text-base">{item.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="container-shell mt-10 border-t border-[rgba(16,32,51,0.1)] py-6 text-sm text-[rgba(16,32,51,0.58)]">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-3">
            <LogoMark className="size-9" />
            <span>MinuteFlow turns meetings into notes, tasks, and recaps teams can act on.</span>
          </div>
          <div className="flex items-center gap-4">
            <a href="#hero">Top</a>
            <a href="#product">Product</a>
            <a href={demoLink}>Book demo</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
