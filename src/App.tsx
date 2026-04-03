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
import { CountUp } from './components/ui/count-up';
import { GradientText } from './components/ui/gradient-text';
import { LogoMark } from './components/ui/logo-mark';
import { Marquee } from './components/ui/marquee';
import { SpotlightCard } from './components/ui/spotlight-card';

const surfaces = [
  'Product reviews',
  'Customer calls',
  'Weekly standups',
  'Hiring interviews',
  'Partner syncs',
  'Board prep',
  'Support escalations',
  'Implementation kickoffs'
];

const useCases = [
  'Follow-up never depends on whoever took notes',
  'Tasks land with owners before the team context switches',
  'Managers get a brief, not a wall of transcript',
  'Search works by project, customer, and decision',
  'The whole team sees what changed after the call',
  'Private meetings stay private by default'
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
    question: 'Does MinuteFlow replace my meeting bot? ',
    answer:
      'It can work with recorded meetings, live transcripts, or synced notes. The point is not another raw transcript. The point is structured outputs your team can act on.'
  },
  {
    question: 'Where do the action items go?',
    answer:
      'Teams can route tasks into their shared workflow, send them into chat, or keep them inside the meeting record. The landing page focuses on the product story, so the integration list is shown as conceptually open.'
  },
  {
    question: 'How does it handle sensitive meetings?',
    answer:
      'Access is scoped by workspace and meeting visibility. Leadership, hiring, and customer calls can each follow different sharing rules instead of one default summary for everyone.'
  },
  {
    question: 'Who is this built for?',
    answer:
      'MinuteFlow is for teams with too many meetings that still create real work: product, success, sales, ops, and founders who need clean follow-up without manual rewriting.'
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
    <figure className="h-full w-[19rem] rounded-[26px] border border-[rgba(16,32,51,0.12)] bg-[rgba(255,252,246,0.82)] p-5 shadow-[0_20px_60px_rgba(16,32,51,0.06)] backdrop-blur-sm">
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
    <div id="sample-output" className="relative overflow-hidden rounded-[34px] border border-[rgba(16,32,51,0.12)] bg-[rgba(255,252,246,0.9)] p-6 shadow-[0_24px_70px_rgba(16,32,51,0.08)] backdrop-blur-xl">
      <BorderBeam duration={9} size={120} colorFrom="#d97a4a" colorTo="#1f8f84" />
      <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
        <div className="space-y-4">
          <div className="eyebrow">Sample output</div>
          <h3 className="heading-font text-3xl font-semibold tracking-[-0.05em] text-[var(--text)]">
            One meeting record. Three artifacts your team will actually open.
          </h3>
          <p className="body-copy text-base">
            Notes for context, tasks for accountability, and a summary for speed. Each section is short enough to scan and structured enough to act on.
          </p>
          <div className="grid gap-3 sm:grid-cols-3">
            {[
              { icon: <NotebookPen className="size-4" />, label: 'Readable notes' },
              { icon: <ListTodo className="size-4" />, label: 'Owners and due dates' },
              { icon: <MessageSquareText className="size-4" />, label: 'Forwardable recap' }
            ].map((item) => (
              <div key={item.label} className="rounded-[22px] border border-[rgba(16,32,51,0.1)] bg-white/72 p-4 text-sm font-medium text-[var(--text)]">
                <div className="mb-2 text-[var(--accent)]">{item.icon}</div>
                {item.label}
              </div>
            ))}
          </div>
        </div>
        <div className="dark-panel relative rounded-[28px] p-5">
          <div className="mb-4 flex items-center justify-between text-xs uppercase tracking-[0.16em] text-[rgba(249,242,232,0.48)]">
            <span>Customer call recap</span>
            <span>Generated 14 min after call</span>
          </div>
          <div className="space-y-4">
            <div className="rounded-[24px] border border-white/10 bg-white/5 p-4">
              <div className="mb-2 text-sm font-semibold text-white">Summary</div>
              <p className="text-sm leading-6 text-[rgba(249,242,232,0.68)]">
                The customer is ready to start a 30-day pilot if we limit rollout to one workspace and send a security note before Friday.
              </p>
            </div>
            <div className="rounded-[24px] border border-white/10 bg-white/5 p-4">
              <div className="mb-2 text-sm font-semibold text-white">Action items</div>
              <div className="space-y-2 text-sm text-[rgba(249,242,232,0.76)]">
                <div className="flex items-start gap-2"><CheckCheck className="mt-0.5 size-4 text-[var(--accent-soft)]" />Send pilot scope to Nadia by Thursday</div>
                <div className="flex items-start gap-2"><CheckCheck className="mt-0.5 size-4 text-[var(--accent-soft)]" />Invite sales engineer to technical follow-up</div>
                <div className="flex items-start gap-2"><CheckCheck className="mt-0.5 size-4 text-[var(--accent-soft)]" />Attach security FAQ for procurement review</div>
              </div>
            </div>
            <div className="rounded-[24px] border border-white/10 bg-white/5 p-4">
              <div className="mb-2 text-sm font-semibold text-white">Risk notes</div>
              <p className="text-sm leading-6 text-[rgba(249,242,232,0.68)]">
                Budget is available, but timeline depends on procurement confidence. Security collateral is the blocker.
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
          <div className="rounded-2xl bg-[rgba(217,122,74,0.08)] px-3 py-2">Pilot stays in one workspace</div>
          <div className="rounded-2xl bg-[rgba(31,143,132,0.08)] px-3 py-2">Send security note before Friday</div>
          <div className="rounded-2xl bg-[rgba(16,32,51,0.06)] px-3 py-2">Add SE to next technical review</div>
        </div>
      </div>
      <div className="absolute bottom-8 left-8 right-20 rounded-[24px] border border-[rgba(16,32,51,0.08)] bg-[rgba(255,250,242,0.78)] p-4 backdrop-blur-sm">
        <div className="mb-2 flex items-center gap-2 text-sm font-semibold text-[var(--text)]">
          <BrainCircuit className="size-4 text-[var(--accent)]" /> Context that matters survives the meeting
        </div>
        <p className="text-sm leading-6 text-[rgba(16,32,51,0.68)]">
          MinuteFlow separates decisions, blockers, objections, and promises instead of leaving the team inside one long transcript.
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
            <div key={task} className="rounded-[22px] border border-[rgba(16,32,51,0.08)] bg-[rgba(16,32,51,0.03)] px-3 py-3">
              <div className="flex items-center justify-between gap-3 text-sm font-semibold text-[var(--text)]">
                <span>{task}</span>
                <span className="rounded-full bg-[rgba(31,143,132,0.12)] px-2.5 py-1 text-xs text-[var(--teal)]">{due}</span>
              </div>
              <div className="mt-2 text-xs uppercase tracking-[0.16em] text-[rgba(16,32,51,0.45)]">Owner: {owner}</div>
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
          <Search className="size-4 text-[var(--accent)]" /> Search “procurement blocker + Acme”
        </div>
      </div>
      <div className="absolute inset-x-6 bottom-10 space-y-3">
        {['Acme | Discovery call | security collateral blocker', 'Pilot sync | workspace rollout approved', 'QBR prep | customer asked for owner list'].map((item) => (
          <div key={item} className="rounded-[22px] border border-[rgba(16,32,51,0.08)] bg-[rgba(255,250,242,0.82)] px-4 py-3 text-sm text-[rgba(16,32,51,0.72)]">
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
            <div className="text-xs font-black uppercase tracking-[0.16em] text-[rgba(16,32,51,0.45)]">Weekly briefing</div>
            <div className="mt-2 heading-font text-2xl font-semibold tracking-[-0.05em] text-[var(--text)]">What changed across 11 meetings</div>
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
              <div className="heading-font text-3xl font-semibold tracking-[-0.05em] text-[var(--text)]">{value}</div>
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
      <div className="absolute left-[-10rem] top-40 h-80 w-80 rounded-full bg-[rgba(217,122,74,0.12)] blur-3xl" aria-hidden="true" />
      <div className="absolute right-[-10rem] top-[32rem] h-96 w-96 rounded-full bg-[rgba(31,143,132,0.12)] blur-3xl" aria-hidden="true" />

      <header className="sticky top-0 z-50">
        <div className="container-shell pt-4">
          <div className="panel-glass flex items-center justify-between rounded-full px-4 py-3 sm:px-6">
            <a href="#hero" className="flex items-center gap-3">
              <LogoMark className="size-11" />
              <div>
                <div className="heading-font text-lg font-semibold tracking-[-0.05em] text-[var(--text)]">MinuteFlow</div>
                <div className="text-xs uppercase tracking-[0.16em] text-[rgba(16,32,51,0.45)]">AI meeting memory for teams</div>
              </div>
            </a>
            <nav className="hidden items-center gap-7 text-sm font-medium text-[rgba(16,32,51,0.72)] md:flex">
              <a href="#product">Product</a>
              <a href="#workflow">Workflow</a>
              <a href="#proof">Proof</a>
              <a href="#faq">FAQ</a>
            </nav>
            <a href="#early-access" className="rounded-full border border-[rgba(16,32,51,0.12)] bg-white/75 px-4 py-2 text-sm font-semibold text-[var(--text)]">
              Join pilot
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
                    Meeting notes, tasks, and summary in one pass
                  </div>
                  <div className="space-y-4">
                    <h1 className="heading-font text-balance text-5xl font-semibold tracking-[-0.08em] text-[var(--text)] sm:text-6xl lg:text-[4.65rem] lg:leading-[0.96]">
                      Every meeting ends with
                      <span className="block">
                        <GradientText>notes, tasks, and a clean summary.</GradientText>
                      </span>
                    </h1>
                    <p className="body-copy max-w-xl text-lg sm:text-xl">
                      MinuteFlow listens once, then delivers the useful output: structured notes, accountable action items, and a recap the rest of the team can scan in under a minute.
                    </p>
                  </div>
                </div>

                <div className="flex flex-col gap-3 sm:flex-row">
                  <a href="#early-access" className={primaryButtonClass}>
                    Book a demo
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
              <div className="rounded-[26px] border border-[rgba(16,32,51,0.1)] bg-white/70 p-5 backdrop-blur-sm">
                <div className="heading-font text-4xl font-semibold tracking-[-0.06em] text-[var(--text)]">
                  <CountUp to={3} suffix="x" />
                </div>
                <div className="mt-2 text-sm leading-6 text-[rgba(16,32,51,0.62)]">Outputs from every meeting: notes, tasks, and summary.</div>
              </div>
              <div className="rounded-[26px] border border-[rgba(16,32,51,0.1)] bg-white/70 p-5 backdrop-blur-sm">
                <div className="heading-font text-4xl font-semibold tracking-[-0.06em] text-[var(--text)]">
                  <CountUp to={8} />
                </div>
                <div className="mt-2 text-sm leading-6 text-[rgba(16,32,51,0.62)]">Common meeting surfaces represented across the landing story.</div>
              </div>
              <div className="rounded-[26px] border border-[rgba(16,32,51,0.1)] bg-white/70 p-5 backdrop-blur-sm">
                <div className="heading-font text-4xl font-semibold tracking-[-0.06em] text-[var(--text)]">
                  <CountUp to={24} suffix="/7" />
                </div>
                <div className="mt-2 text-sm leading-6 text-[rgba(16,32,51,0.62)]">Searchable memory instead of meeting context trapped in chat.</div>
              </div>
            </div>
          </div>
        </section>

        <section className="pb-24 pt-16">
          <div className="container-shell panel-glass rounded-[34px] px-4 py-6 sm:px-6">
            <div className="mb-4 flex items-center justify-between gap-4">
              <div>
                <div className="text-xs font-black uppercase tracking-[0.18em] text-[rgba(16,32,51,0.45)]">Built around real team conversations</div>
                <div className="mt-2 text-sm text-[rgba(16,32,51,0.7)]">Use cases and operating surfaces that create work after the meeting ends.</div>
              </div>
              <BadgeCheck className="hidden size-5 text-[var(--teal)] sm:block" />
            </div>
            <Marquee pauseOnHover className="[--duration:24s]">
              {surfaces.map((item) => (
                <MeetingSurfacePill key={item} text={item} />
              ))}
            </Marquee>
            <Marquee reverse pauseOnHover className="[--duration:28s]">
              {useCases.map((item) => (
                <MeetingSurfacePill key={item} text={item} />
              ))}
            </Marquee>
          </div>
        </section>

        <section id="product" className="pb-24">
          <div className="container-shell space-y-10">
            <SectionIntro
              label="Product"
              title="The page is designed around one idea: conversation becomes structured work."
              body="Instead of a generic SaaS stack of sections, the page keeps returning to the same narrative. Meeting context flows into a decision engine, then out into notes, tasks, and briefs your team can use right away."
            />

            <BentoGrid>
              <BentoCard
                label="Signal capture"
                title="Understands decisions inside messy conversation"
                description="Important moments are separated from filler, so the team keeps the decisions and drops the noise."
                icon={<AudioLines className="size-5" />}
                className="xl:col-span-2"
                background={<TranscriptBackground />}
              />
              <BentoCard
                label="Owners"
                title="Turns follow-up into assigned work"
                description="Tasks leave the meeting with owners, due dates, and enough context to execute without another sync."
                icon={<ListTodo className="size-5" />}
                background={<TasksBackground />}
              />
              <BentoCard
                label="Search"
                title="Search meeting memory by project or customer"
                description="You do not need to remember who wrote the notes. Search the underlying decisions and risk language directly."
                icon={<Search className="size-5" />}
                background={<SearchBackground />}
              />
              <BentoCard
                label="Briefings"
                title="Creates a manager-ready recap after the week, not just after the call"
                description="The same meeting intelligence can roll up into team, account, or leadership briefings without manual synthesis."
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
                label="Workflow"
                title="Three simple moves after every call."
                body="The product story is intentionally operational: capture once, decide what matters, then ship the recap before context disappears."
              />
              <div className="grid gap-4">
                {[
                  {
                    icon: <CalendarClock className="size-5" />,
                    title: 'Capture the meeting',
                    body: 'Pull participants, agenda, transcript, and related context before anyone starts taking notes by hand.'
                  },
                  {
                    icon: <Workflow className="size-5" />,
                    title: 'Separate what matters',
                    body: 'Split decisions, tasks, blockers, and recap-worthy details into explicit sections.'
                  },
                  {
                    icon: <Zap className="size-5" />,
                    title: 'Publish momentum',
                    body: 'Share the right summary with the team and keep a searchable record for later.'
                  }
                ].map((item) => (
                  <SpotlightCard key={item.title} className="p-6">
                    <div className="mb-4 inline-flex rounded-2xl bg-[rgba(16,32,51,0.06)] p-3 text-[var(--accent)]">{item.icon}</div>
                    <h3 className="heading-font text-2xl font-semibold tracking-[-0.05em] text-[var(--text)]">{item.title}</h3>
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
              label="Why teams care"
              title="Less rewriting. Better follow-through. Shared memory after the meeting ends."
              body="The proof section uses plausible role-based feedback instead of fake enterprise logos. It keeps the concept credible while still selling the operational value of the product."
            />

            <div className="grid gap-5 md:grid-cols-3">
              {[
                {
                  icon: <Clock3 className="size-5" />,
                  title: 'Teams stop spending the next 20 minutes rewriting the last 30.',
                  body: 'The recap draft starts where the conversation ended. Nobody volunteers to type everything back into existence.'
                },
                {
                  icon: <Users className="size-5" />,
                  title: 'Everyone sees the same owners, deadlines, and decisions.',
                  body: 'Instead of parallel note docs and scattered chat messages, follow-up lives in one shared record.'
                },
                {
                  icon: <ShieldCheck className="size-5" />,
                  title: 'Sensitive meetings can stay scoped to the right people.',
                  body: 'Leadership, hiring, and customer threads can each keep different visibility rules without changing the workflow.'
                }
              ].map((item) => (
                <SpotlightCard key={item.title} spotlightColor="rgba(31, 143, 132, 0.18)">
                  <div className="mb-4 inline-flex rounded-2xl bg-[rgba(16,32,51,0.06)] p-3 text-[var(--teal)]">{item.icon}</div>
                  <h3 className="heading-font text-2xl font-semibold tracking-[-0.05em] text-[var(--text)]">{item.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-[rgba(16,32,51,0.68)]">{item.body}</p>
                </SpotlightCard>
              ))}
            </div>

            <div className="panel-glass relative overflow-hidden rounded-[34px] py-5">
              <Marquee pauseOnHover className="[--duration:26s] px-2">
                {testimonials.slice(0, 3).map((item) => (
                  <ReviewCard key={item.name} {...item} />
                ))}
              </Marquee>
              <Marquee reverse pauseOnHover className="[--duration:30s] px-2">
                {testimonials.slice(3).map((item) => (
                  <ReviewCard key={item.name} {...item} />
                ))}
              </Marquee>
              <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-linear-to-r from-[var(--bg)] to-transparent" />
              <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-linear-to-l from-[var(--bg)] to-transparent" />
            </div>
          </div>
        </section>

        <section id="early-access" className="pb-24">
          <div className="container-shell dark-panel relative overflow-hidden rounded-[36px] px-6 py-10 sm:px-10 sm:py-12">
            <div className="absolute -right-20 top-1/2 h-56 w-56 -translate-y-1/2 rounded-full bg-[rgba(217,122,74,0.2)] blur-3xl" aria-hidden="true" />
            <div className="absolute left-[-4rem] top-[-4rem] h-44 w-44 rounded-full bg-[rgba(31,143,132,0.16)] blur-3xl" aria-hidden="true" />
            <div className="relative z-10 grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
              <div className="space-y-5">
                <div className="eyebrow border-white/10 bg-white/6 text-[rgba(249,242,232,0.68)]">Early access</div>
                <h2 className="heading-font max-w-2xl text-balance text-4xl font-semibold tracking-[-0.06em] text-[rgba(249,242,232,0.96)] sm:text-5xl">
                  If your team leaves meetings with hidden work, MinuteFlow is the fix.
                </h2>
                <p className="max-w-xl text-base leading-8 text-[rgba(249,242,232,0.68)]">
                  The landing page positions the product for teams that run enough meetings to feel the follow-up tax. Book a demo, show one real call, and turn it into structured output the same day.
                </p>
                <div className="flex flex-col gap-3 sm:flex-row">
                  <a href="mailto:hello@minuteflow.app?subject=MinuteFlow%20pilot" className="inline-flex items-center justify-center gap-2 rounded-full bg-[var(--cream)] px-6 py-3.5 text-sm font-semibold text-[var(--text)] transition-transform duration-200 hover:-translate-y-0.5">
                    Start the pilot
                    <ArrowRight className="size-4" />
                  </a>
                  <a href="#faq" className="inline-flex items-center justify-center gap-2 rounded-full border border-white/12 bg-white/6 px-6 py-3.5 text-sm font-semibold text-[rgba(249,242,232,0.92)] transition-transform duration-200 hover:-translate-y-0.5">
                    Review FAQ
                  </a>
                </div>
              </div>
              <div className="relative overflow-hidden rounded-[30px] border border-white/10 bg-white/5 p-5">
                <BorderBeam duration={8} size={120} colorFrom="#f4b48c" colorTo="#1f8f84" />
                <div className="space-y-4">
                  <div className="flex items-center gap-3 text-[rgba(249,242,232,0.84)]">
                    <div className="rounded-2xl bg-white/10 p-3 text-[var(--accent-soft)]"><FileText className="size-5" /></div>
                    <div>
                      <div className="text-sm font-semibold">Demo deliverables</div>
                      <div className="text-xs uppercase tracking-[0.16em] text-[rgba(249,242,232,0.48)]">What the page promises</div>
                    </div>
                  </div>
                  <div className="space-y-3 text-sm text-[rgba(249,242,232,0.72)]">
                    <div className="rounded-[22px] border border-white/10 bg-white/5 px-4 py-3">One live meeting transformed into notes, tasks, and a manager brief.</div>
                    <div className="rounded-[22px] border border-white/10 bg-white/5 px-4 py-3">Routing options for chat, project tools, and searchable archive.</div>
                    <div className="rounded-[22px] border border-white/10 bg-white/5 px-4 py-3">Visibility rules for leadership, hiring, or customer-sensitive calls.</div>
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
              body="This section keeps the concept grounded and avoids fake certainty. It explains what the product does, where the outputs go, and who should care."
            />
            <div className="grid gap-4">
              {faqs.map((item) => (
                <details key={item.question} className="group rounded-[28px] border border-[rgba(16,32,51,0.12)] bg-[rgba(255,252,246,0.82)] px-6 py-5 shadow-[0_18px_60px_rgba(16,32,51,0.05)]">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-left">
                    <span className="heading-font text-2xl font-semibold tracking-[-0.05em] text-[var(--text)]">{item.question}</span>
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
            <span>MinuteFlow turns team conversations into notes, tasks, and summaries.</span>
          </div>
          <div className="flex items-center gap-4">
            <a href="#hero">Top</a>
            <a href="#product">Product</a>
            <a href="#early-access">Demo</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
