import { useMemo } from 'react';
import clsx from 'clsx';
import { Hash } from 'lucide-react';
import type { MultiplierRow } from '@/types';

type MultiplicationTableProps = {
  base: number;
};

export default function MultiplicationTable({ base }: MultiplicationTableProps) {
  const rows: MultiplierRow[] = useMemo(() => {
    return Array.from({ length: 12 }, (_, i) => ({
      multiplier: i + 1,
      result: base * (i + 1),
    }));
  }, [base]);

  return (
    <div className="w-full max-w-md">
      {/* Header */}
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-xl bg-brand flex items-center justify-center shadow-md">
          <Hash className="w-5 h-5 text-white" />
        </div>
        <div>
          <h1 className="text-2xl font-bold text-gray-800">Table of {base}</h1>
          <p className="text-sm text-gray-500">Multiplication table from 1 to 12</p>
        </div>
      </div>

      {/* Table Card */}
      <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100">
        {/* Table Header */}
        <div className="grid grid-cols-3 bg-brand text-white text-sm font-semibold">
          <div className="px-5 py-3 text-center">Multiplicand</div>
          <div className="px-5 py-3 text-center">Multiplier</div>
          <div className="px-5 py-3 text-center">Result</div>
        </div>

        {/* Table Rows */}
        {rows.map((row, idx) => (
          <div
            key={row.multiplier}
            className={clsx(
              'grid grid-cols-3 items-center border-b border-gray-100 last:border-0 transition-colors duration-150 hover:bg-indigo-50',
              idx % 2 === 0 ? 'bg-white' : 'bg-gray-50'
            )}
          >
            {/* Multiplicand (base number) */}
            <div className="px-5 py-3 text-center">
              <span className="inline-block w-8 h-8 rounded-full bg-brand-light text-brand font-bold text-sm leading-8 text-center">
                {base}
              </span>
            </div>

            {/* Multiplier */}
            <div className="px-5 py-3 text-center">
              <span className="text-gray-600 font-medium">{row.multiplier}</span>
            </div>

            {/* Result */}
            <div className="px-5 py-3 text-center">
              <span
                className={clsx(
                  'inline-block px-3 py-1 rounded-lg font-bold text-sm',
                  row.result % 4 === 0
                    ? 'bg-purple-100 text-purple-700'
                    : 'bg-indigo-100 text-indigo-700'
                )}
              >
                {row.result}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Footer note */}
      <p className="mt-4 text-center text-xs text-gray-400">
        {base} &times; 1 through {base} &times; 12
      </p>
    </div>
  );
}
