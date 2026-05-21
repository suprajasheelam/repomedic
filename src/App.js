import React, { useState } from 'react';

function App() {
  const [expandedPanel, setExpandedPanel] = useState(null);

  const togglePanel = (panelId) => {
    setExpandedPanel(expandedPanel === panelId ? null : panelId);
  };

  return (
    <div className="min-h-screen bg-slate-900 text-white">
      {/* SECTION 1 - HEADER */}
      <header className="bg-slate-800 border-b border-slate-700 py-6">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center gap-3 mb-2">
            <span className="text-4xl">⚕️</span>
            <h1 className="text-4xl font-bold text-emerald-500">RepoMedic</h1>
          </div>
          <p className="text-xl text-gray-300 mb-1">AI-Powered Technical Debt Diagnosis & Modernization Copilot</p>
          <p className="text-sm text-gray-400">Built with IBM Bob</p>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 py-8 space-y-8">
        {/* SECTION 2 - REPO HEALTH SCORE */}
        <section className="bg-slate-800 rounded-lg p-6 border border-slate-700">
          <div className="mb-6">
            <h2 className="text-2xl font-bold mb-2">Repository Health Score</h2>
            <p className="text-gray-400">messy-ecommerce-api</p>
          </div>
          
          <div className="flex items-center justify-center mb-8">
            <div className="relative w-48 h-48">
              <svg className="w-full h-full transform -rotate-90">
                <circle
                  cx="96"
                  cy="96"
                  r="88"
                  stroke="currentColor"
                  strokeWidth="12"
                  fill="none"
                  className="text-slate-700"
                />
                <circle
                  cx="96"
                  cy="96"
                  r="88"
                  stroke="currentColor"
                  strokeWidth="12"
                  fill="none"
                  strokeDasharray={`${(2.1 / 10) * 553} 553`}
                  className="text-red-500"
                />
              </svg>
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <span className="text-5xl font-bold text-red-500">2.1</span>
                <span className="text-2xl text-gray-400">/ 10</span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            <div className="bg-slate-900 rounded-lg p-4 border border-red-900">
              <h3 className="text-sm font-semibold text-gray-400 mb-2">Security</h3>
              <div className="text-3xl font-bold text-red-500 mb-2">0/10</div>
              <p className="text-xs text-gray-400">8 critical vulnerabilities</p>
            </div>
            
            <div className="bg-slate-900 rounded-lg p-4 border border-red-900">
              <h3 className="text-sm font-semibold text-gray-400 mb-2">Code Duplication</h3>
              <div className="text-3xl font-bold text-red-500 mb-2">2/10</div>
              <p className="text-xs text-gray-400">Tax logic in 3 files, coupon logic in 4 places</p>
            </div>
            
            <div className="bg-slate-900 rounded-lg p-4 border border-red-900">
              <h3 className="text-sm font-semibold text-gray-400 mb-2">Architecture</h3>
              <div className="text-3xl font-bold text-red-500 mb-2">1/10</div>
              <p className="text-xs text-gray-400">No separation of concerns</p>
            </div>
            
            <div className="bg-slate-900 rounded-lg p-4 border border-red-900">
              <h3 className="text-sm font-semibold text-gray-400 mb-2">Test Coverage</h3>
              <div className="text-3xl font-bold text-red-500 mb-2">0/10</div>
              <p className="text-xs text-gray-400">No tests exist</p>
            </div>
            
            <div className="bg-slate-900 rounded-lg p-4 border border-amber-900">
              <h3 className="text-sm font-semibold text-gray-400 mb-2">Dead Code</h3>
              <div className="text-3xl font-bold text-amber-500 mb-2">4/10</div>
              <p className="text-xs text-gray-400">3 unused functions (28% of utils.js)</p>
            </div>
          </div>
        </section>

        {/* SECTION 3 - TOP HOTSPOTS TABLE */}
        <section className="bg-slate-800 rounded-lg p-6 border border-slate-700">
          <h2 className="text-2xl font-bold mb-4">Critical Hotspots</h2>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-slate-700">
                  <th className="text-left py-3 px-4 text-gray-400 font-semibold">File</th>
                  <th className="text-left py-3 px-4 text-gray-400 font-semibold">Issue</th>
                  <th className="text-left py-3 px-4 text-gray-400 font-semibold">Severity</th>
                  <th className="text-left py-3 px-4 text-gray-400 font-semibold">Impact</th>
                  <th className="text-left py-3 px-4 text-gray-400 font-semibold">Lines</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-slate-700 hover:bg-slate-750">
                  <td className="py-3 px-4 font-mono text-sm">server.js</td>
                  <td className="py-3 px-4">All business logic mixed with routes</td>
                  <td className="py-3 px-4"><span className="px-2 py-1 bg-red-900 text-red-200 rounded text-xs font-semibold">Critical</span></td>
                  <td className="py-3 px-4 text-sm text-gray-400">7 endpoints affected</td>
                  <td className="py-3 px-4 font-mono text-sm">141 lines</td>
                </tr>
                <tr className="border-b border-slate-700 hover:bg-slate-750">
                  <td className="py-3 px-4 font-mono text-sm">server.js</td>
                  <td className="py-3 px-4">Plain text password storage</td>
                  <td className="py-3 px-4"><span className="px-2 py-1 bg-red-900 text-red-200 rounded text-xs font-semibold">Critical</span></td>
                  <td className="py-3 px-4 text-sm text-gray-400">All user accounts at risk</td>
                  <td className="py-3 px-4 font-mono text-sm">Line 15</td>
                </tr>
                <tr className="border-b border-slate-700 hover:bg-slate-750">
                  <td className="py-3 px-4 font-mono text-sm">server.js</td>
                  <td className="py-3 px-4">Duplicated pricing logic</td>
                  <td className="py-3 px-4"><span className="px-2 py-1 bg-red-900 text-red-200 rounded text-xs font-semibold">Critical</span></td>
                  <td className="py-3 px-4 text-sm text-gray-400">Inconsistent calculations possible</td>
                  <td className="py-3 px-4 font-mono text-sm">Lines 71-77, 106-112</td>
                </tr>
                <tr className="border-b border-slate-700 hover:bg-slate-750">
                  <td className="py-3 px-4 font-mono text-sm">utils.js</td>
                  <td className="py-3 px-4">Overlapping functions with helpers.js</td>
                  <td className="py-3 px-4"><span className="px-2 py-1 bg-amber-900 text-amber-200 rounded text-xs font-semibold">High</span></td>
                  <td className="py-3 px-4 text-sm text-gray-400">Developer confusion</td>
                  <td className="py-3 px-4 font-mono text-sm">54 lines</td>
                </tr>
                <tr className="border-b border-slate-700 hover:bg-slate-750">
                  <td className="py-3 px-4 font-mono text-sm">helpers.js</td>
                  <td className="py-3 px-4">Duplicate tax and coupon logic</td>
                  <td className="py-3 px-4"><span className="px-2 py-1 bg-amber-900 text-amber-200 rounded text-xs font-semibold">High</span></td>
                  <td className="py-3 px-4 text-sm text-gray-400">3rd copy of same logic</td>
                  <td className="py-3 px-4 font-mono text-sm">36 lines</td>
                </tr>
                <tr className="hover:bg-slate-750">
                  <td className="py-3 px-4 font-mono text-sm">server.js</td>
                  <td className="py-3 px-4">No authentication on endpoints</td>
                  <td className="py-3 px-4"><span className="px-2 py-1 bg-red-900 text-red-200 rounded text-xs font-semibold">Critical</span></td>
                  <td className="py-3 px-4 text-sm text-gray-400">Anyone can create products</td>
                  <td className="py-3 px-4 font-mono text-sm">Lines 37-46</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* SECTION 4 - DETAILED ANALYSIS */}
        <section className="bg-slate-800 rounded-lg p-6 border border-slate-700">
          <h2 className="text-2xl font-bold mb-4">AI Diagnosis by IBM Bob</h2>
          
          <div className="space-y-3">
            {/* Panel 1 */}
            <div className="border border-slate-700 rounded-lg overflow-hidden">
              <button
                onClick={() => togglePanel('security')}
                className="w-full px-4 py-3 bg-slate-900 hover:bg-slate-750 flex items-center justify-between transition-colors"
              >
                <span className="font-semibold">Security Vulnerabilities (12 found)</span>
                <span className="text-2xl">{expandedPanel === 'security' ? '−' : '+'}</span>
              </button>
              {expandedPanel === 'security' && (
                <div className="px-4 py-4 bg-slate-900 border-t border-slate-700">
                  <p className="text-gray-300 leading-relaxed">
                    Bob identified 12 security issues including plain text password storage, passwords exposed in API responses, 
                    no authentication on product creation, no session management, no input validation, no rate limiting, 
                    IDOR on order receipts, no HTTPS, no CORS configuration, predictable resource IDs, no request size limits, 
                    and no error handling. Security Score: 0/100.
                  </p>
                </div>
              )}
            </div>

            {/* Panel 2 */}
            <div className="border border-slate-700 rounded-lg overflow-hidden">
              <button
                onClick={() => togglePanel('duplication')}
                className="w-full px-4 py-3 bg-slate-900 hover:bg-slate-750 flex items-center justify-between transition-colors"
              >
                <span className="font-semibold">Code Duplication Analysis</span>
                <span className="text-2xl">{expandedPanel === 'duplication' ? '−' : '+'}</span>
              </button>
              {expandedPanel === 'duplication' && (
                <div className="px-4 py-4 bg-slate-900 border-t border-slate-700">
                  <p className="text-gray-300 leading-relaxed">
                    Tax calculation (0.08 multiplier) exists in 3 separate locations: server.js line 80, utils.js lines 4-6, 
                    and helpers.js lines 4-6. Coupon discount logic exists in 4 locations: server.js lines 71-77, 
                    server.js lines 106-112, utils.js lines 17-22, and helpers.js lines 14-21. The implementations differ — 
                    utils.js returns a multiplied total while helpers.js returns a discount rate, creating subtle bug risks.
                  </p>
                </div>
              )}
            </div>

            {/* Panel 3 */}
            <div className="border border-slate-700 rounded-lg overflow-hidden">
              <button
                onClick={() => togglePanel('architecture')}
                className="w-full px-4 py-3 bg-slate-900 hover:bg-slate-750 flex items-center justify-between transition-colors"
              >
                <span className="font-semibold">Architecture Score: 1/10</span>
                <span className="text-2xl">{expandedPanel === 'architecture' ? '−' : '+'}</span>
              </button>
              {expandedPanel === 'architecture' && (
                <div className="px-4 py-4 bg-slate-900 border-t border-slate-700">
                  <p className="text-gray-300 leading-relaxed">
                    7 separation of concerns violations found. HTTP layer mixed with business logic. Data access mixed with 
                    business logic. Validation scattered across routes. Business rules in 3 different files. No service layer. 
                    No repository pattern. No middleware layer. The codebase cannot be tested, scaled, or maintained in its 
                    current state.
                  </p>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* SECTION 5 - MODERNIZATION PLAN */}
        <section className="bg-slate-800 rounded-lg p-6 border border-slate-700">
          <h2 className="text-2xl font-bold mb-6">Safe Modernization Plan (Generated by IBM Bob Plan Mode)</h2>
          
          <div className="space-y-4">
            <div className="flex gap-4">
              <div className="flex flex-col items-center">
                <div className="w-10 h-10 rounded-full bg-emerald-500 flex items-center justify-center font-bold">1</div>
                <div className="w-0.5 h-full bg-slate-700 mt-2"></div>
              </div>
              <div className="flex-1 pb-6">
                <div className="flex items-center gap-3 mb-2">
                  <h3 className="text-lg font-semibold">Extract Pricing Logic</h3>
                  <span className="px-2 py-1 bg-emerald-900 text-emerald-200 rounded text-xs font-semibold">COMPLETED</span>
                </div>
                <p className="text-gray-400 text-sm mb-1">Create services/pricing.js with centralized tax, coupon, and total calculation.</p>
                <p className="text-gray-500 text-xs">Effort: 4-8 hours</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex flex-col items-center">
                <div className="w-10 h-10 rounded-full bg-slate-700 flex items-center justify-center font-bold">2</div>
                <div className="w-0.5 h-full bg-slate-700 mt-2"></div>
              </div>
              <div className="flex-1 pb-6">
                <div className="flex items-center gap-3 mb-2">
                  <h3 className="text-lg font-semibold">Extract Validation Logic</h3>
                  <span className="px-2 py-1 bg-slate-700 text-gray-300 rounded text-xs font-semibold">Planned</span>
                </div>
                <p className="text-gray-400 text-sm mb-1">Create services/validation.js with shared validation schemas.</p>
                <p className="text-gray-500 text-xs">Effort: 2-4 hours</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex flex-col items-center">
                <div className="w-10 h-10 rounded-full bg-slate-700 flex items-center justify-center font-bold">3</div>
                <div className="w-0.5 h-full bg-slate-700 mt-2"></div>
              </div>
              <div className="flex-1 pb-6">
                <div className="flex items-center gap-3 mb-2">
                  <h3 className="text-lg font-semibold">Separate Routes from Business Logic</h3>
                  <span className="px-2 py-1 bg-slate-700 text-gray-300 rounded text-xs font-semibold">Planned</span>
                </div>
                <p className="text-gray-400 text-sm mb-1">Create controllers for each domain.</p>
                <p className="text-gray-500 text-xs">Effort: 8-12 hours</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex flex-col items-center">
                <div className="w-10 h-10 rounded-full bg-slate-700 flex items-center justify-center font-bold">4</div>
                <div className="w-0.5 h-full bg-slate-700 mt-2"></div>
              </div>
              <div className="flex-1 pb-6">
                <div className="flex items-center gap-3 mb-2">
                  <h3 className="text-lg font-semibold">Remove Dead Code</h3>
                  <span className="px-2 py-1 bg-slate-700 text-gray-300 rounded text-xs font-semibold">Planned</span>
                </div>
                <p className="text-gray-400 text-sm mb-1">Delete formatCurrency, generateId, calculateShipping from utils.js.</p>
                <p className="text-gray-500 text-xs">Effort: 1 hour</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex flex-col items-center">
                <div className="w-10 h-10 rounded-full bg-slate-700 flex items-center justify-center font-bold">5</div>
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <h3 className="text-lg font-semibold">Add Security Layer</h3>
                  <span className="px-2 py-1 bg-slate-700 text-gray-300 rounded text-xs font-semibold">Planned</span>
                </div>
                <p className="text-gray-400 text-sm mb-1">Implement password hashing, JWT tokens, auth middleware.</p>
                <p className="text-gray-500 text-xs">Effort: 16-24 hours</p>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 6 - BEFORE / AFTER COMPARISON */}
        <section className="bg-slate-800 rounded-lg p-6 border border-slate-700">
          <h2 className="text-2xl font-bold mb-6">Refactoring Results</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* BEFORE */}
            <div className="bg-red-950 bg-opacity-20 border border-red-900 rounded-lg p-4">
              <h3 className="text-lg font-semibold text-red-400 mb-3">BEFORE</h3>
              <pre className="bg-slate-900 rounded p-4 overflow-x-auto text-sm">
                <code className="text-gray-300">{`// server.js - Lines 71-77
// Pricing logic DUPLICATED in route handler
if (couponCode === 'SAVE10') {
  total = total * 0.9;
} else if (couponCode === 'SAVE20') {
  total = total * 0.8;
} else if (couponCode === 'HALFOFF') {
  total = total * 0.5;
}
const tax = total * 0.08;
// Same logic copied in receipt endpoint (lines 106-112)
// Same logic in utils.js and helpers.js`}</code>
              </pre>
            </div>

            {/* AFTER */}
            <div className="bg-emerald-950 bg-opacity-20 border border-emerald-900 rounded-lg p-4">
              <h3 className="text-lg font-semibold text-emerald-400 mb-3">AFTER</h3>
              <pre className="bg-slate-900 rounded p-4 overflow-x-auto text-sm">
                <code className="text-gray-300">{`// services/pricing.js - Single Source of Truth
const TAX_RATE = 0.08;
const COUPONS = { SAVE10: 0.1, SAVE20: 0.2, HALFOFF: 0.5 };

function applyCoupon(amount, code) {
  const discount = COUPONS[code] || 0;
  return amount * (1 - discount);
}

function calculateTax(amount) {
  return amount * TAX_RATE;
}
// Used by ALL endpoints - one change updates everything`}</code>
              </pre>
            </div>
          </div>
        </section>

        {/* SECTION 7 - IMPACT SUMMARY */}
        <section className="bg-slate-800 rounded-lg p-6 border border-slate-700">
          <h2 className="text-2xl font-bold mb-6">Modernization Impact</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="bg-slate-900 rounded-lg p-4 border border-slate-700">
              <h3 className="text-sm font-semibold text-gray-400 mb-3">Duplicated Logic</h3>
              <div className="flex items-center gap-2 mb-2">
                <span className="text-gray-400">Before:</span>
                <span className="font-semibold">7 locations</span>
              </div>
              <div className="flex items-center gap-2 mb-3">
                <span className="text-gray-400">After:</span>
                <span className="font-semibold text-emerald-400">1 location</span>
              </div>
              <div className="flex items-center gap-1 text-emerald-400">
                <span className="text-2xl">↓</span>
                <span className="text-sm font-semibold">86% reduction</span>
              </div>
            </div>

            <div className="bg-slate-900 rounded-lg p-4 border border-slate-700">
              <h3 className="text-sm font-semibold text-gray-400 mb-3">Security Score</h3>
              <div className="flex items-center gap-2 mb-2">
                <span className="text-gray-400">Before:</span>
                <span className="font-semibold text-red-400">0/100</span>
              </div>
              <div className="flex items-center gap-2 mb-3">
                <span className="text-gray-400">After:</span>
                <span className="font-semibold text-emerald-400">Improved</span>
              </div>
              <div className="text-xs text-gray-500">
                Pricing fix as foundation
              </div>
            </div>

            <div className="bg-slate-900 rounded-lg p-4 border border-slate-700">
              <h3 className="text-sm font-semibold text-gray-400 mb-3">Dead Code</h3>
              <div className="flex items-center gap-2 mb-2">
                <span className="text-gray-400">Before:</span>
                <span className="font-semibold">15 lines (28%)</span>
              </div>
              <div className="flex items-center gap-2 mb-3">
                <span className="text-gray-400">After:</span>
                <span className="font-semibold text-emerald-400">0 lines</span>
              </div>
              <div className="flex items-center gap-1 text-emerald-400">
                <span className="text-2xl">✓</span>
                <span className="text-sm font-semibold">Eliminated</span>
              </div>
            </div>

            <div className="bg-slate-900 rounded-lg p-4 border border-slate-700">
              <h3 className="text-sm font-semibold text-gray-400 mb-3">Test Coverage</h3>
              <div className="flex items-center gap-2 mb-2">
                <span className="text-gray-400">Before:</span>
                <span className="font-semibold text-red-400">0%</span>
              </div>
              <div className="flex items-center gap-2 mb-3">
                <span className="text-gray-400">After:</span>
                <span className="font-semibold text-emerald-400">Pricing tested</span>
              </div>
              <div className="flex items-center gap-1 text-emerald-400">
                <span className="text-2xl">↑</span>
                <span className="text-sm font-semibold">Foundation set</span>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* SECTION 8 - FOOTER */}
      <footer className="bg-slate-800 border-t border-slate-700 py-6 mt-12">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-gray-300 mb-2">
            <span className="font-semibold text-emerald-500">RepoMedic</span> — Built with IBM Bob for the IBM Bob Hackathon 2026
          </p>
          <p className="text-sm text-gray-400">
            Powered by IBM Bob Ask, Plan, and Code modes
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;

// Made with Bob
