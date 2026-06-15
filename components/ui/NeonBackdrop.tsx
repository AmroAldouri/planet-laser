import { PageSparkles } from "@/components/ui/PageSparkles";

export function NeonBackdrop() {
  return (
    <>
      <div className="neon-flow-bg" aria-hidden>
        <div className="neon-flow-bg__base" />
        <div className="neon-flow-bg__orb neon-flow-bg__orb--1" />
        <div className="neon-flow-bg__orb neon-flow-bg__orb--2" />
        <div className="neon-flow-bg__orb neon-flow-bg__orb--3" />
        <div className="neon-flow-bg__sheen" />
      </div>

      <PageSparkles />
    </>
  );
}
