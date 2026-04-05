import { ReactNode, RefObject, useRef } from 'react';
import {
  AudioLines,
  BrainCircuit,
  CalendarClock,
  CheckCheck,
  FileText,
  ListTodo,
  MessageSquareText,
  Sparkles
} from 'lucide-react';

import { AnimatedBeam } from '../ui/animated-beam';
import { AnimatedGridPattern } from '../ui/animated-grid-pattern';
import { BorderBeam } from '../ui/border-beam';
import { GradientText } from '../ui/gradient-text';

function FlowChip({
  icon,
  title,
  body,
  innerRef
}: {
  icon: ReactNode;
  title: string;
  body: string;
  innerRef: RefObject<HTMLDivElement | null>;
}) {
  return (
    <div
      ref={innerRef}
      className="relative rounded-[24px] border border-white/10 bg-white/7 px-4 py-4 backdrop-blur-sm transition-transform duration-300 hover:-translate-y-0.5"
    >
      <div className="mb-3 flex items-center gap-3 text-[rgba(249,242,232,0.92)]">
        <div className="rounded-2xl bg-white/10 p-2.5 text-[var(--accent-soft)]">{icon}</div>
        <div className="text-sm font-semibold">{title}</div>
      </div>
      <p className="text-sm leading-6 text-[rgba(249,242,232,0.62)]">{body}</p>
    </div>
  );
}

export function HeroVisual() {
  const containerRef = useRef<HTMLDivElement>(null);
  const calendarRef = useRef<HTMLDivElement>(null);
  const transcriptRef = useRef<HTMLDivElement>(null);
  const chatRef = useRef<HTMLDivElement>(null);
  const engineRef = useRef<HTMLDivElement>(null);
  const notesRef = useRef<HTMLDivElement>(null);
  const tasksRef = useRef<HTMLDivElement>(null);
  const summaryRef = useRef<HTMLDivElement>(null);

  return (
    <div ref={containerRef} className="dark-panel relative overflow-hidden rounded-[36px] p-5 sm:p-7 lg:p-8">
      <AnimatedGridPattern
        width={56}
        height={56}
        numSquares={36}
        maxOpacity={0.18}
        duration={5}
        repeatDelay={0.8}
        className="grid-mask opacity-70"
      />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(217,122,74,0.18),transparent_22%),radial-gradient(circle_at_bottom_right,rgba(31,143,132,0.18),transparent_24%)]" />

      <div className="relative z-10 space-y-6">
        <div className="flex items-center justify-between gap-4">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.2em] text-[rgba(249,242,232,0.5)]">Live meeting in</p>
            <p className="mt-2 text-sm leading-6 text-[rgba(249,242,232,0.68)]">
              Decisions, tasks, and recap out.
            </p>
          </div>
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/6 px-3 py-2 text-xs font-semibold text-[rgba(249,242,232,0.84)]">
            <span className="size-2 rounded-full bg-[var(--accent)] shadow-[0_0_16px_var(--accent)]" />
            Live capture
          </div>
        </div>

        <div className="grid gap-5 md:grid-cols-[0.9fr_1.12fr_0.9fr] md:items-center">
          <div className="grid gap-3">
            <FlowChip
              innerRef={calendarRef}
              icon={<CalendarClock className="size-4" />}
              title="Calendar context"
              body="Title, attendees, and prep are pulled in automatically."
            />
            <FlowChip
              innerRef={transcriptRef}
              icon={<AudioLines className="size-4" />}
              title="Live transcript"
              body="Decisions and blockers are caught while people talk."
            />
            <FlowChip
              innerRef={chatRef}
              icon={<MessageSquareText className="size-4" />}
              title="Team context"
              body="Projects and customer history sharpen the recap."
            />
          </div>

          <div
            ref={engineRef}
            className="relative overflow-hidden rounded-[30px] border border-white/12 bg-[linear-gradient(180deg,rgba(255,255,255,0.08),rgba(255,255,255,0.03))] p-5 shadow-[0_24px_70px_rgba(0,0,0,0.24)]"
          >
            <BorderBeam duration={10} size={120} colorFrom="#d97a4a" colorTo="#1f8f84" />
            <div className="mb-5 flex items-center justify-between gap-4">
              <div>
                <p className="text-xs font-black uppercase tracking-[0.18em] text-[rgba(249,242,232,0.48)]">MinuteFlow engine</p>
                <h3 className="heading-font mt-2 text-2xl font-semibold tracking-[-0.05em] text-[rgba(249,242,232,0.96)]">
                  Talking turns into next steps.
                </h3>
              </div>
              <div className="rounded-3xl bg-white/10 p-3 text-[var(--accent-soft)]">
                <BrainCircuit className="size-5" />
              </div>
            </div>

            <div className="rounded-[26px] border border-white/10 bg-[rgba(9,17,29,0.52)] p-4">
              <div className="mb-4 flex items-center justify-between text-xs text-[rgba(249,242,232,0.52)]">
                <span>Detected signal</span>
                <span>9 action moments</span>
              </div>
              <div className="space-y-3 text-sm leading-6 text-[rgba(249,242,232,0.84)]">
                <div className="rounded-2xl bg-white/5 p-3">
                  <span className="font-semibold text-white">Budget concern:</span> customer wants a phased rollout before procurement review.
                </div>
                <div className="rounded-2xl bg-white/5 p-3">
                  <span className="font-semibold text-white">Decision made:</span> keep the pilot to one workspace and add an SE to the next call.
                </div>
                <div className="rounded-2xl bg-white/5 p-3">
                  <span className="font-semibold text-white">Follow-up required:</span> send recap, owner list, and risk notes within the hour.
                </div>
              </div>
            </div>

            <div className="mt-5 flex items-center justify-between gap-3 rounded-[24px] border border-white/10 bg-white/5 px-4 py-3">
              <div className="flex items-center gap-3">
                <div className="rounded-2xl bg-white/10 p-2 text-[var(--teal-soft)]">
                  <Sparkles className="size-4" />
                </div>
                <div>
                  <div className="text-sm font-semibold text-[rgba(249,242,232,0.92)]">Clean output, not transcript overload</div>
                  <div className="text-xs text-[rgba(249,242,232,0.56)]">Owners, deadlines, decisions, and recap are separated automatically.</div>
                </div>
              </div>
              <GradientText className="heading-font text-sm font-semibold">Ready in minutes</GradientText>
            </div>
          </div>

          <div className="grid gap-3">
            <FlowChip
              innerRef={notesRef}
              icon={<FileText className="size-4" />}
              title="Structured notes"
              body="Readable notes with the moments worth keeping."
            />
            <FlowChip
              innerRef={tasksRef}
              icon={<ListTodo className="size-4" />}
              title="Assigned tasks"
              body="Owners and due dates are broken out automatically."
            />
            <FlowChip
              innerRef={summaryRef}
              icon={<CheckCheck className="size-4" />}
              title="Shareable recap"
              body="A short summary for the team, manager, or customer."
            />
          </div>
        </div>
      </div>

      <AnimatedBeam
        containerRef={containerRef}
        fromRef={calendarRef}
        toRef={engineRef}
        curvature={-40}
        gradientStartColor="#d97a4a"
        gradientStopColor="#f0b48d"
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={transcriptRef}
        toRef={engineRef}
        gradientStartColor="#d97a4a"
        gradientStopColor="#1f8f84"
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={chatRef}
        toRef={engineRef}
        curvature={40}
        gradientStartColor="#1f8f84"
        gradientStopColor="#d97a4a"
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={engineRef}
        toRef={notesRef}
        reverse
        curvature={-40}
        gradientStartColor="#1f8f84"
        gradientStopColor="#f0b48d"
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={engineRef}
        toRef={tasksRef}
        reverse
        gradientStartColor="#d97a4a"
        gradientStopColor="#1f8f84"
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={engineRef}
        toRef={summaryRef}
        reverse
        curvature={40}
        gradientStartColor="#f0b48d"
        gradientStopColor="#1f8f84"
      />
    </div>
  );
}
