"use client";

interface ConceptMapProps {
  title: string;
  nodes: string[];
  className?: string;
}

export default function ConceptMap({ title, nodes, className = "" }: ConceptMapProps) {
  return (
    <div className={`rounded-2xl border border-slate-200/80 bg-white p-6 shadow-card ${className}`}>
      <h3 className="mb-4 text-sm font-bold uppercase tracking-wide text-slate-500">
        Chapter wrap-up
      </h3>
      <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-3">
        <span className="rounded-2xl bg-gradient-to-br from-blue-500 to-indigo-600 px-5 py-2.5 text-sm font-bold text-white shadow-md">
          {title}
        </span>
        {nodes.map((node, i) => (
          <span key={i} className="flex items-center gap-2">
            <span className="h-0.5 w-4 rounded bg-blue-200" />
            <span className="rounded-xl border border-slate-200 bg-slate-50 px-3 py-1.5 text-sm font-medium text-slate-700">
              ✓ {node}
            </span>
          </span>
        ))}
      </div>
    </div>
  );
}
