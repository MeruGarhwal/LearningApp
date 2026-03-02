interface ProgressBarProps {
  value: number;
  max?: number;
  label?: string;
  className?: string;
}

export default function ProgressBar({
  value,
  max = 100,
  label,
  className = "",
}: ProgressBarProps) {
  const percent = Math.min(100, Math.max(0, (value / max) * 100));

  return (
    <div className={className}>
      <div className="mb-1 flex justify-between text-xs text-slate-500">
        {label && <span>{label}</span>}
        <span>{Math.round(percent)}%</span>
      </div>
      <div className="h-2 overflow-hidden rounded-full bg-slate-200">
        <div
          className="h-full rounded-full bg-brand-500 transition-all duration-300"
          style={{ width: `${percent}%` }}
        />
      </div>
    </div>
  );
}
