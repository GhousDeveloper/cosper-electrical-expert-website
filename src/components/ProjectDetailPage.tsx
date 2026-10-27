import React from 'react';
import { ArrowLeft, ArrowRight, MapPin, Clock, CheckCircle2, ShieldCheck } from 'lucide-react';
import { PROJECTS_DATA, ProjectItem } from '../data/websiteData.ts';

interface ProjectDetailPageProps {
  projectId: string;
  onBackToHome: () => void;
  onSelectProject: (id: string) => void;
  onGetQuote: () => void;
}

export const ProjectDetailPage: React.FC<ProjectDetailPageProps> = ({
  projectId,
  onBackToHome,
  onSelectProject,
  onGetQuote,
}) => {
  const project: ProjectItem =
    PROJECTS_DATA.find((p) => p.id === projectId) || PROJECTS_DATA[0];

  const relatedProjects = PROJECTS_DATA.filter((p) => p.id !== project.id);

  return (
    <div className="pt-24 pb-20 bg-white min-h-screen">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Navigation Breadcrumb */}
        <button
          type="button"
          onClick={onBackToHome}
          className="inline-flex items-center gap-2 text-xs font-bold text-slate-600 hover:text-black mb-8 transition-colors cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to All Projects</span>
        </button>

        {/* Project Header */}
        <div className="mb-10">
          <div className="flex flex-wrap items-center gap-2.5 mb-3">
            <span className="text-xs font-bold uppercase tracking-wider text-amber-800 bg-amber-50 px-3 py-1 rounded-full border border-amber-200">
              {project.type}
            </span>
            <span className="flex items-center gap-1 text-xs text-slate-500 font-medium">
              <MapPin className="w-3.5 h-3.5 text-amber-600" /> {project.location}
            </span>
            <span className="flex items-center gap-1 text-xs text-slate-500 font-medium">
              <Clock className="w-3.5 h-3.5 text-amber-600" /> Completed in {project.completionTime}
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0F172A] tracking-tight leading-tight">
            {project.title}
          </h1>
        </div>

        {/* Featured Image */}
        <div className="relative rounded-3xl overflow-hidden shadow-xl mb-12 border border-slate-200 aspect-16/9">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover select-none"
            loading="eager"
            referrerPolicy="no-referrer"
          />
        </div>

        {/* Challenge & Solution Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* Challenge */}
          <div className="bg-rose-50/50 border border-rose-200/60 rounded-3xl p-7 sm:p-8">
            <div className="text-xs font-bold uppercase tracking-wider text-rose-700 mb-2">
              The Engineering Challenge
            </div>
            <h2 className="text-xl font-bold text-slate-900 mb-3">Initial Conditions &amp; Hazards</h2>
            <p className="text-sm text-slate-600 leading-relaxed">
              {project.challenge}
            </p>
          </div>

          {/* Solution */}
          <div className="bg-emerald-50/50 border border-emerald-200/60 rounded-3xl p-7 sm:p-8">
            <div className="text-xs font-bold uppercase tracking-wider text-emerald-700 mb-2">
              The Cospert Solution
            </div>
            <h2 className="text-xl font-bold text-slate-900 mb-3">Executed Master Plan</h2>
            <p className="text-sm text-slate-600 leading-relaxed">
              {project.solution}
            </p>
          </div>
        </div>

        {/* Services Performed & Result */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {/* Services Performed */}
          <div className="md:col-span-1 bg-[#FFFDF5] border border-amber-200/60 rounded-3xl p-7">
            <h3 className="text-base font-bold text-slate-900 mb-4">Services Performed</h3>
            <ul className="space-y-3">
              {project.servicesPerformed.map((serv, idx) => (
                <li key={idx} className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-slate-800">
                  <CheckCircle2 className="w-4 h-4 text-amber-500 shrink-0" />
                  <span>{serv}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Result Card */}
          <div className="md:col-span-2 bg-[#0B1320] text-white rounded-3xl p-7 sm:p-8 flex flex-col justify-between">
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-bold text-amber-400 uppercase tracking-wider mb-2">
                <ShieldCheck className="w-4 h-4 text-amber-400" />
                <span>Verified Client Outcome</span>
              </div>
              <h3 className="text-2xl font-black mb-3">Final Delivered Result</h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                {project.result}
              </p>
            </div>

            <div className="mt-6 pt-5 border-t border-slate-800 flex items-center justify-between">
              <span className="text-xs text-slate-400">Inspected by NYC DOB Master Inspector</span>
              <button
                type="button"
                onClick={onGetQuote}
                className="bg-[#FBBF24] hover:bg-[#F59E0B] text-slate-950 font-bold text-xs px-5 py-2.5 rounded-full transition-colors cursor-pointer"
              >
                Plan a Similar Project &rarr;
              </button>
            </div>
          </div>
        </div>

        {/* Related Projects */}
        <div className="border-t border-slate-100 pt-12">
          <h2 className="text-2xl font-black text-slate-900 mb-6">Explore Other Completed Projects</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {relatedProjects.map((p) => (
              <button
                key={p.id}
                type="button"
                onClick={() => onSelectProject(p.id)}
                className="group bg-white rounded-2xl p-6 border border-slate-200 hover:border-amber-400 text-left transition-all hover:-translate-y-1 shadow-xs cursor-pointer flex flex-col justify-between"
              >
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-amber-700 bg-amber-50 px-2.5 py-0.5 rounded-full">
                    {p.type}
                  </span>
                  <h3 className="text-base font-bold text-slate-900 group-hover:text-amber-600 transition-colors mt-2 mb-1">
                    {p.title}
                  </h3>
                  <div className="text-xs text-slate-400 flex items-center gap-1">
                    <MapPin className="w-3 h-3 text-amber-500" /> {p.location}
                  </div>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-[#0F172A] group-hover:text-amber-600">
                  <span>View Case Study</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
