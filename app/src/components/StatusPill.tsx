export function StatusPill() {
  return (
    <div className="inline-flex items-center gap-2 px-3 py-1 bg-success/10 border border-success/30 rounded-full">
      <span className="w-2 h-2 bg-success rounded-full animate-pulse-dot" />
      <span className="text-xs font-medium text-success">Available for work</span>
    </div>
  );
}
