interface TechChipProps {
  label: string;
}

export function TechChip({ label }: TechChipProps) {
  return (
    <span className="inline-flex items-center px-3 py-1 text-2xs font-mono font-semibold text-primary-400 bg-primary-500/10 border border-primary-500/20 rounded-full">
      {label}
    </span>
  );
}
