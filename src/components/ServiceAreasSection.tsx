import React, { useState } from 'react';
import { MapPin, Navigation, Clock, ShieldCheck, CheckCircle2, Search, ArrowRight, Truck } from 'lucide-react';

interface ServiceAreasSectionProps {
  onBookInArea: (regionName: string) => void;
}

interface RegionInfo {
  id: string;
  name: string;
  type: string;
  eta: string;
  activeVans: number;
  coverage: string;
  landmarks: string[];
  x: number; // percentage on map
  y: number; // percentage on map
}

export const ServiceAreasSection: React.FC<ServiceAreasSectionProps> = ({
  onBookInArea,
}) => {
  const regions: RegionInfo[] = [
    {
      id: 'manhattan',
      name: 'Manhattan',
      type: 'Core Metro Zone',
      eta: '20 - 30 Mins',
      activeVans: 14,
      coverage: 'Downtown, Midtown, Uptown & Financial District',
      landmarks: ['Midtown Hub', 'SoHo & Tribeca', 'Upper East/West', 'Financial District'],
      x: 42,
      y: 40,
    },
    {
      id: 'brooklyn',
      name: 'Brooklyn',
      type: 'Priority Residential & Commercial',
      eta: '25 - 35 Mins',
      activeVans: 12,
      coverage: 'Williamsburg, DUMBO, Park Slope, Flatbush & Bay Ridge',
      landmarks: ['Downtown Brooklyn', 'Williamsburg', 'Park Slope', 'Coney Island'],
      x: 48,
      y: 65,
    },
    {
      id: 'queens',
      name: 'Queens',
      type: 'Rapid Dispatch Area',
      eta: '30 - 40 Mins',
      activeVans: 10,
      coverage: 'Astoria, Long Island City, Flushing, Forest Hills & Bayside',
      landmarks: ['Long Island City', 'Astoria', 'Flushing', 'Forest Hills'],
      x: 62,
      y: 44,
    },
    {
      id: 'bronx',
      name: 'The Bronx',
      type: 'North Metro District',
      eta: '30 - 45 Mins',
      activeVans: 7,
      coverage: 'South Bronx, Riverdale, Pelham Bay & Grand Concourse',
      landmarks: ['Mott Haven', 'Riverdale', 'Pelham Bay', 'Fordham'],
      x: 52,
      y: 20,
    },
    {
      id: 'staten_island',
      name: 'Staten Island',
      type: 'Dedicated Island Fleet',
      eta: '35 - 50 Mins',
      activeVans: 5,
      coverage: 'St. George, Todt Hill, Great Kills & Tottenville',
      landmarks: ['St. George', 'New Dorp', 'Tottenville'],
      x: 24,
      y: 78,
    },
    {
      id: 'suburbs',
      name: 'Long Island & Westchester',
      type: 'Extended Suburban Territory',
      eta: '45 - 60 Mins',
      activeVans: 8,
      coverage: 'Nassau County, Yonkers, White Plains & New Rochelle',
      landmarks: ['Nassau West', 'Yonkers', 'White Plains', 'New Rochelle'],
      x: 75,
      y: 26,
    },
  ];

  const [selectedRegion, setSelectedRegion] = useState<RegionInfo>(regions[0]);
  const [zipInput, setZipInput] = useState('');
  const [searchResult, setSearchResult] = useState<{
    found: boolean;
    region?: string;
    eta?: string;
    message?: string;
  } | null>(null);

  const handleZipCheck = (e: React.FormEvent) => {
    e.preventDefault();
    const cleanZip = zipInput.trim();
    if (!cleanZip) return;

    // Check first 3 digits for NY metro zips (100xx - 116xx)
    const zipNum = parseInt(cleanZip, 10);
    if (!isNaN(zipNum) && zipNum >= 10001 && zipNum <= 11999) {
      let matched = regions[0];
      if (zipNum >= 11201 && zipNum <= 11256) matched = regions[1]; // Brooklyn
      else if (zipNum >= 11101 && zipNum <= 11697) matched = regions[2]; // Queens
      else if (zipNum >= 10451 && zipNum <= 10475) matched = regions[3]; // Bronx
      else if (zipNum >= 10301 && zipNum <= 10314) matched = regions[4]; // Staten Island
      else if (zipNum >= 10500 || zipNum >= 11500) matched = regions[5]; // Suburbs

      setSelectedRegion(matched);
      setSearchResult({
        found: true,
        region: matched.name,
        eta: matched.eta,
        message: `Great news! ZIP code ${cleanZip} is fully covered with active dispatch.`,
      });
    } else if (cleanZip.toLowerCase().includes('brooklyn')) {
      setSelectedRegion(regions[1]);
      setSearchResult({ found: true, region: 'Brooklyn', eta: '25 - 35 Mins', message: 'Full Brooklyn coverage confirmed.' });
    } else if (cleanZip.toLowerCase().includes('manhattan')) {
      setSelectedRegion(regions[0]);
      setSearchResult({ found: true, region: 'Manhattan', eta: '20 - 30 Mins', message: 'Priority Manhattan coverage confirmed.' });
    } else if (cleanZip.toLowerCase().includes('queens')) {
      setSelectedRegion(regions[2]);
      setSearchResult({ found: true, region: 'Queens', eta: '30 - 40 Mins', message: 'Full Queens coverage confirmed.' });
    } else {
      setSearchResult({
        found: true,
        region: 'Greater Metro Region',
        eta: '30 - 45 Mins',
        message: `Coverage active for area "${cleanZip}". Certified electricians available.`,
      });
    }
  };

  return (
    <section id="service-areas" className="relative py-16 sm:py-24 bg-white overflow-hidden border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center justify-center gap-2 mb-2">
            <span className="w-7 h-[2px] bg-[#F59E0B] inline-block rounded-full"></span>
            <span className="text-xs sm:text-[13px] font-bold text-[#F59E0B] uppercase tracking-widest">
              SERVICE AREAS
            </span>
            <span className="w-7 h-[2px] bg-[#F59E0B] inline-block rounded-full"></span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-black tracking-tight text-[#0F172A] leading-tight">
            Powering Communities Across New York
          </h2>

          <p className="mt-3 text-slate-500 text-sm sm:text-base leading-relaxed max-w-lg mx-auto">
            Guaranteed rapid emergency arrival and scheduled electrical maintenance throughout all 5 boroughs and suburban districts.
          </p>

          {/* Interactive ZIP / Area Lookup Bar */}
          <form onSubmit={handleZipCheck} className="mt-7 max-w-md mx-auto">
            <div className="relative flex items-center shadow-sm rounded-full border-2 border-amber-300 bg-white p-1 hover:border-amber-400 focus-within:border-amber-500 transition-colors">
              <div className="pl-4 text-amber-500">
                <Search className="w-4 h-4" />
              </div>
              <input
                type="text"
                value={zipInput}
                onChange={(e) => setZipInput(e.target.value)}
                placeholder="Enter ZIP code (e.g. 10001, 11201)..."
                className="w-full px-3 py-2 text-xs sm:text-sm text-slate-800 placeholder-slate-400 focus:outline-none bg-transparent"
              />
              <button
                type="submit"
                className="bg-[#0B1320] hover:bg-[#1E293B] text-white text-xs font-bold px-5 py-2.5 rounded-full transition-all shrink-0 cursor-pointer"
              >
                Check Coverage
              </button>
            </div>

            {searchResult && (
              <div className="mt-3 bg-amber-50 border border-amber-200/80 rounded-2xl p-3 text-left animate-in fade-in duration-200 flex items-center justify-between gap-3">
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                  <div>
                    <div className="text-xs font-bold text-slate-900">{searchResult.message}</div>
                    <div className="text-[11px] text-amber-800">
                      Primary Zone: <span className="font-bold">{searchResult.region}</span> · Estimated Dispatch: <span className="font-bold">{searchResult.eta}</span>
                    </div>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => onBookInArea(searchResult.region || 'New York')}
                  className="bg-[#FBBF24] hover:bg-[#F59E0B] text-slate-950 text-[11px] font-bold px-3 py-1.5 rounded-full shrink-0 transition-colors cursor-pointer"
                >
                  Book Here
                </button>
              </div>
            )}
          </form>
        </div>

        {/* 2-Column Split: Interactive Map & Region Details */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center max-w-6xl mx-auto">
          {/* Left Column: Region Selector Grid */}
          <div className="lg:col-span-5 space-y-3">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                Coverage Districts
              </span>
              <span className="text-xs font-bold text-amber-700 bg-amber-50 px-2.5 py-0.5 rounded-full border border-amber-200/60">
                56 Mobile Units On Call
              </span>
            </div>

            {regions.map((region) => {
              const isSelected = selectedRegion.id === region.id;
              return (
                <button
                  key={region.id}
                  type="button"
                  onClick={() => setSelectedRegion(region)}
                  className={`w-full text-left p-4 rounded-2xl border transition-all duration-200 flex items-center justify-between cursor-pointer group ${
                    isSelected
                      ? 'bg-amber-50/70 border-amber-400 shadow-xs'
                      : 'bg-white border-slate-100 hover:border-slate-200 hover:bg-slate-50/50'
                  }`}
                >
                  <div className="flex items-center gap-3.5">
                    <div
                      className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 transition-colors ${
                        isSelected
                          ? 'bg-[#FBBF24] text-slate-950 shadow-xs'
                          : 'bg-slate-100 text-slate-600 group-hover:bg-amber-100 group-hover:text-amber-800'
                      }`}
                    >
                      <MapPin className="w-5 h-5" />
                    </div>

                    <div>
                      <div className="flex items-center gap-2">
                        <h4 className="text-sm font-bold text-slate-900 group-hover:text-amber-700 transition-colors">
                          {region.name}
                        </h4>
                        <span className="text-[10px] font-semibold text-slate-500 bg-white px-2 py-0.5 rounded-md border border-slate-200">
                          {region.activeVans} Vans
                        </span>
                      </div>
                      <div className="text-[11px] text-slate-500 flex items-center gap-2 mt-0.5">
                        <span className="flex items-center gap-1 text-emerald-700 font-medium">
                          <Clock className="w-3 h-3" /> {region.eta}
                        </span>
                      </div>
                    </div>
                  </div>

                  <span
                    className={`w-7 h-7 rounded-full flex items-center justify-center transition-all ${
                      isSelected
                        ? 'bg-[#0B1320] text-white'
                        : 'text-slate-400 group-hover:text-slate-800'
                    }`}
                  >
                    <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </button>
              );
            })}
          </div>

          {/* Right Column: Visual Vector Map & Active District Card */}
          <div className="lg:col-span-7 flex flex-col gap-4">
            {/* Visual Vector Map Container */}
            <div className="relative aspect-4/3 sm:aspect-16/11 w-full bg-gradient-to-br from-[#0F172A] via-[#1E293B] to-[#0B1320] rounded-3xl p-6 sm:p-8 overflow-hidden shadow-xl border border-slate-800 text-white flex flex-col justify-between">
              {/* Subtle Grid Lines */}
              <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#FBBF24_1px,transparent_1px)] [background-size:24px_24px]"></div>

              {/* Central Radar Rings */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 rounded-full border border-amber-500/20 pointer-events-none"></div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-56 h-56 rounded-full border border-amber-500/30 pointer-events-none"></div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 rounded-full border border-amber-500/40 pointer-events-none"></div>

              {/* Map Top Header Overlay */}
              <div className="relative z-10 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping"></div>
                  <span className="text-xs font-mono font-bold tracking-wider text-amber-400 uppercase">
                    Live Dispatch Radar
                  </span>
                </div>
                <div className="text-[11px] font-mono text-slate-400 bg-white/5 border border-white/10 px-3 py-1 rounded-full">
                  Central HQ: 123 Power St, NY
                </div>
              </div>

              {/* Interactive Vector Region Pins */}
              <div className="relative w-full h-full min-h-[220px]">
                {/* SVG connection lines between HQ and regions */}
                <svg className="absolute inset-0 w-full h-full pointer-events-none">
                  {regions.map((reg) => (
                    <line
                      key={reg.id}
                      x1="45%"
                      y1="45%"
                      x2={`${reg.x}%`}
                      y2={`${reg.y}%`}
                      stroke={selectedRegion.id === reg.id ? '#FBBF24' : 'rgba(255,255,255,0.15)'}
                      strokeWidth={selectedRegion.id === reg.id ? '2' : '1'}
                      strokeDasharray={selectedRegion.id === reg.id ? '4,4' : 'none'}
                    />
                  ))}
                </svg>

                {/* HQ Center Marker */}
                <div className="absolute left-[45%] top-[45%] -translate-x-1/2 -translate-y-1/2 z-20">
                  <div className="w-6 h-6 rounded-full bg-amber-400 border-2 border-[#0B1320] shadow-lg flex items-center justify-center animate-pulse">
                    <div className="w-2 h-2 rounded-full bg-black"></div>
                  </div>
                  <div className="absolute top-7 left-1/2 -translate-x-1/2 whitespace-nowrap bg-black/80 backdrop-blur-xs text-[10px] font-mono text-amber-300 px-2 py-0.5 rounded-md border border-amber-400/30">
                    Cospert HQ
                  </div>
                </div>

                {/* Region Nodes on Map */}
                {regions.map((region) => {
                  const isSelected = selectedRegion.id === region.id;
                  return (
                    <button
                      key={region.id}
                      type="button"
                      onClick={() => setSelectedRegion(region)}
                      style={{ left: `${region.x}%`, top: `${region.y}%` }}
                      className={`absolute -translate-x-1/2 -translate-y-1/2 z-20 transition-all duration-200 cursor-pointer group/pin ${
                        isSelected ? 'scale-110 z-30' : 'opacity-85 hover:opacity-100'
                      }`}
                    >
                      <div
                        className={`w-7 h-7 rounded-full flex items-center justify-center shadow-lg transition-colors ${
                          isSelected
                            ? 'bg-[#FBBF24] text-slate-950 ring-4 ring-amber-400/30'
                            : 'bg-slate-800 text-slate-200 border border-slate-600 group-hover/pin:bg-amber-300 group-hover/pin:text-black'
                        }`}
                      >
                        <MapPin className="w-4 h-4" />
                      </div>
                      <div
                        className={`mt-1.5 whitespace-nowrap text-[10px] font-bold px-2 py-0.5 rounded-md transition-colors ${
                          isSelected
                            ? 'bg-amber-400 text-slate-950 shadow-xs'
                            : 'bg-slate-900/80 text-slate-300 group-hover/pin:bg-slate-900'
                        }`}
                      >
                        {region.name}
                      </div>
                    </button>
                  );
                })}
              </div>

              {/* Active Region Highlights Card in Map */}
              <div className="relative z-10 bg-slate-900/85 backdrop-blur-md rounded-2xl p-4 border border-slate-700/80 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                <div>
                  <div className="flex items-center gap-2">
                    <h5 className="text-sm font-bold text-white">{selectedRegion.name}</h5>
                    <span className="text-[10px] text-amber-400 font-mono">
                      {selectedRegion.type}
                    </span>
                  </div>
                  <p className="text-[11px] text-slate-300 mt-0.5">
                    {selectedRegion.coverage}
                  </p>
                </div>

                <button
                  type="button"
                  onClick={() => onBookInArea(selectedRegion.name)}
                  className="bg-[#FBBF24] hover:bg-[#F59E0B] text-slate-950 font-bold px-4 py-2 rounded-full text-xs transition-colors shrink-0 flex items-center gap-1.5 cursor-pointer"
                >
                  <span>Dispatch To {selectedRegion.name}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Coverage Trust Indicators */}
            <div className="grid grid-cols-3 gap-3 text-center">
              <div className="bg-slate-50 border border-slate-100 rounded-xl p-3">
                <div className="text-base font-black text-slate-900">30 Mins</div>
                <div className="text-[10px] text-slate-500 font-medium">Avg. Emergency Arrival</div>
              </div>
              <div className="bg-slate-50 border border-slate-100 rounded-xl p-3">
                <div className="text-base font-black text-slate-900">5 Boroughs</div>
                <div className="text-[10px] text-slate-500 font-medium">Complete NY Coverage</div>
              </div>
              <div className="bg-slate-50 border border-slate-100 rounded-xl p-3">
                <div className="text-base font-black text-slate-900">Zero</div>
                <div className="text-[10px] text-slate-500 font-medium">Extra Travel Surcharges</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
