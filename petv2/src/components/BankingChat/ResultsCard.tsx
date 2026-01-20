import React from 'react';
import type { ResultsCard as ResultsCardType, BankResult } from '../../types/bankingChat';
import { ChevronRight, AlertCircle } from 'lucide-react';

interface ResultsCardProps {
  results: ResultsCardType;
}

const BankRow: React.FC<{ result: BankResult; rank: number }> = ({ result, rank }) => {
  const { bank, matchReasons } = result;
  const ratingText = `${bank.rating.toFixed(1)} / 5`;

  return (
    <div className="flex items-start gap-4 p-4 border-b border-gray-100 last:border-b-0 hover:bg-gray-50/50 transition-colors">
      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#007AC8] text-white flex items-center justify-center font-bold text-sm">
        {rank}
      </div>

      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2 mb-1">
          <h4 className="font-semibold text-gray-900 text-base" style={{ fontFamily: 'Work Sans' }}>
            {bank.name}
          </h4>
          <span className="text-xs text-gray-500 bg-gray-100 px-2 py-0.5 rounded-full">
            {ratingText}
          </span>
        </div>
        <p className="text-xs text-gray-500 mb-2" style={{ fontFamily: 'Work Sans' }}>
          {bank.category}
        </p>
        <div className="space-y-1">
          {matchReasons.slice(0, 2).map((reason, idx) => (
            <div key={idx} className="flex items-center gap-1.5 text-sm text-gray-600" style={{ fontFamily: 'Work Sans' }}>
              <span className="text-green-500">•</span>
              {reason}
            </div>
          ))}
        </div>
      </div>

      <a
        href={bank.applyUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="flex-shrink-0 flex items-center gap-1 px-3 py-2 bg-[#007AC8] text-white rounded-lg text-sm font-medium hover:bg-[#006bb3] transition-colors"
        style={{ fontFamily: 'Work Sans' }}
      >
        View
        <ChevronRight className="w-4 h-4" />
      </a>
    </div>
  );
};

export const ResultsCard: React.FC<ResultsCardProps> = ({ results }) => {
  return (
    <div className="mt-4 rounded-2xl border border-gray-200 bg-white overflow-hidden shadow-sm">
      <div className="px-4 py-3 bg-gradient-to-r from-[#007AC8] to-[#0066a3]">
        <h3 className="font-bold text-white text-sm tracking-wide" style={{ fontFamily: 'Work Sans' }}>
          {results.title}
        </h3>
      </div>

      <div>
        {results.results.map((result, index) => (
          <BankRow key={result.bank.id} result={result} rank={index + 1} />
        ))}
      </div>

      {results.disclosureNeeded && (
        <div className="px-4 py-3 bg-amber-50 border-t border-amber-100 flex items-start gap-2">
          <AlertCircle className="w-4 h-4 text-amber-600 flex-shrink-0 mt-0.5" />
          <p className="text-xs text-amber-700" style={{ fontFamily: 'Work Sans' }}>
            These are the closest matches based on the info provided.
          </p>
        </div>
      )}

      <div className="px-4 py-3 bg-gray-50 border-t border-gray-100">
        <p className="text-xs text-gray-500 text-center" style={{ fontFamily: 'Work Sans' }}>
          Rankings based on Forbes Advisor editorial analysis
        </p>
      </div>
    </div>
  );
};
