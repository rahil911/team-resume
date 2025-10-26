import { useRef } from 'react';
import { motion } from 'framer-motion';
import { teamMembers, teamMetrics } from '../../data/teamData';

/**
 * PROTOTYPE 5: JOURNEY NARRATIVE - REDESIGNED
 * MAXIMUM INFORMATION DENSITY storytelling layout
 * 2-page format showing complete career journeys with timeline narrative
 * Design: Story-based with blue/orange (#24AAE2, #FFA726) on light gray
 * All experience, education, skills, achievements shown
 */

const Prototype5 = () => {
  const printRef = useRef();

  // Enhanced journey data with ALL details
  const getFullJourneyData = (member) => {
    const journeyMap = {
      mathew: {
        timeline: [
          { year: '2018-2021', phase: 'Foundation', event: 'BTech IT @ VIT (GPA 8.71/10)', color: '#94A3B8' },
          { year: '2019', phase: 'First Steps', event: 'Adobe Summer Intern - Python automation', color: '#94A3B8' },
          { year: '2021-2024', phase: 'Industry Impact', event: 'Mu Sigma Data Engineer - PySpark, Azure', color: '#24AAE2' },
          { year: '2024-2026', phase: 'UW Excellence', event: 'MS Info Mgmt @ UW (GPA 4.0/4.0)', color: '#FFA726' },
          { year: '2025', phase: 'Peak Performance', event: 'Rocket Mortgage - AWS Serverless, 35% faster', color: '#FFA726' }
        ],
        awards: ['3x Star Performer', 'iSchool Scholar', 'Graduate TA'],
        topImpact: '$250K revenue uncovered, 1 month→2 days processing'
      },
      rahil: {
        timeline: [
          { year: '2018-2022', phase: 'Foundation', event: 'BTech CS @ Ramaiah Institute', color: '#94A3B8' },
          { year: '2019-2022', phase: 'Entrepreneurship', event: 'Founder & CEO AaMaRa Tech - $35K profit', color: '#24AAE2' },
          { year: '2022-2024', phase: 'Enterprise Scale', event: 'SAP Dev Consultant - 100+ integrations', color: '#24AAE2' },
          { year: '2024-2026', phase: 'UW Innovation', event: 'MS Info Mgmt @ UW (GPA 3.9/4.0)', color: '#FFA726' },
          { year: '2024-2025', phase: 'AI Leadership', event: 'Allan Frank Apprentice - Multi-agent AI', color: '#FFA726' }
        ],
        awards: ['Team India Captain Handball', 'SAP Early Talent Ambassador', 'Smart India Hackathon Winner', 'NVIDIA Neural Networks Cert'],
        topImpact: 'Beat Zoho at Dubai Islamic Bank RFP, 48h→minutes cycle reduction'
      },
      siddarth: {
        timeline: [
          { year: '2018-2022', phase: 'Foundation', event: 'BTech CS @ Ramaiah (GPA 9.22/10)', color: '#94A3B8' },
          { year: '2022-2024', phase: 'Enterprise Systems', event: 'Morgan Stanley - 75M Kafka records/min', color: '#24AAE2' },
          { year: '2022-2024', phase: 'Entrepreneurship', event: 'CTO AaMaRa Tech - 15 developers, 6 projects', color: '#24AAE2' },
          { year: '2024-2026', phase: 'UW Excellence', event: 'MS Info Mgmt @ UW (GPA 3.9/4.0)', color: '#FFA726' },
          { year: '2025', phase: 'Cloud Mastery', event: 'AWS DynamoDB - eBPF, $1M annual savings', color: '#FFA726' }
        ],
        awards: ['IEEE Best Paper Award', 'Tech Excellence Award', 'Early Promotion at Morgan Stanley'],
        topImpact: '$1M cost optimization, 5min→45sec query time, <5μs latency'
      },
      shreyas: {
        timeline: [
          { year: '2016-2020', phase: 'Foundation', event: 'BTech Mechanical @ BMS (GPA 3.98/4.0)', color: '#94A3B8' },
          { year: '2020-2021', phase: 'Research', event: 'IISc Research - Medical device engineering', color: '#94A3B8' },
          { year: '2021-2024', phase: 'Product Growth', event: 'o9 Solutions PM I→PM II - 20+ deployments', color: '#24AAE2' },
          { year: '2024-2026', phase: 'UW Leadership', event: 'MS Info Mgmt @ UW (GPA 3.88/4.0)', color: '#FFA726' },
          { year: '2025', phase: 'Senior PM', event: 'o9 Sr PM - AI automation, Delta Lake validation', color: '#FFA726' }
        ],
        awards: ['Product Management Professional', '500+ certified professionals trained'],
        topImpact: '70% batch-run reduction, 35% faster issue resolution, global roadmap owner'
      }
    };
    return journeyMap[member.id];
  };

  return (
    <div className="min-h-screen bg-white">
      <div ref={printRef} className="a4-container" style={{ fontFamily: 'Inter, system-ui, sans-serif', width: '210mm', padding: '0', backgroundColor: 'white' }}>

          {/* Compact Header */}
          <div className="bg-gradient-to-r from-[#24AAE2] to-[#FFA726] px-[6mm] py-2">
            <div className="flex items-end justify-between">
              <div>
                <h1 className="font-black text-white mb-0" style={{ fontSize: '16px', lineHeight: '1.1' }}>TEAM JOURNEY NARRATIVE</h1>
                <p className="text-white/90 font-medium" style={{ fontSize: '8px', marginTop: '1px' }}>16 Years Collective Experience | $2M+ Value Delivered</p>
              </div>
              <div className="text-right text-white space-y-0" style={{ fontSize: '8px', lineHeight: '1.3' }}>
                <div className="font-bold">100+ Projects Shipped</div>
                <div>15+ Fortune 500 Clients</div>
                <div>All @ UW MSIM 2024-26</div>
              </div>
            </div>
          </div>

          {/* Team Grid with Photos and Key Stats */}
          <div className="grid grid-cols-4 gap-2 px-[6mm] py-2 bg-gray-50 border-b border-gray-200">
            {teamMembers.map((member, idx) => (
              <div key={member.id} className="text-center">
                <div className="relative w-full aspect-square rounded overflow-hidden mb-1 border border-[#24AAE2]">
                  <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
                  <div className="absolute top-0.5 right-0.5 bg-[#FFA726] text-white font-bold px-1 py-0.5 rounded" style={{ fontSize: '8px' }}>
                    {member.yearsExperience}Y
                  </div>
                </div>
                <h3 className="font-bold text-gray-900 leading-tight mb-0" style={{ fontSize: '8px' }}>{member.name}</h3>
                <p className="text-[#24AAE2] font-semibold uppercase mb-0.5" style={{ fontSize: '8px' }}>{member.role}</p>
                <div className="bg-[#FFA726] text-white font-bold px-1 py-0.5 rounded" style={{ fontSize: '8px' }}>
                  {member.keyMetrics.primary}
                </div>
                <div className="text-gray-600 mt-0" style={{ fontSize: '8px' }}>{member.keyMetrics.detail1}</div>
              </div>
            ))}
          </div>

          {/* Individual Journey Timelines - MAXIMUM DENSITY */}
          <div className="px-[6mm] py-2 space-y-2">
            {teamMembers.map((member) => {
              const journey = getFullJourneyData(member);
              return (
                <div key={member.id} className="border border-gray-200 rounded p-2 bg-white team-member-card">
                  {/* Header Row */}
                  <div className="flex items-start justify-between mb-1 pb-1 border-b border-gray-200">
                    <div className="flex-1">
                      <div className="flex items-center gap-1 mb-0.5">
                        <h3 className="font-black text-gray-900" style={{ fontSize: '10px' }}>{member.name.split(' ')[0].toUpperCase()}</h3>
                        <span className="bg-[#24AAE2] text-white px-1.5 py-0.5 rounded-full font-bold" style={{ fontSize: '8px' }}>
                          {member.role}
                        </span>
                      </div>
                      <div className="flex flex-wrap gap-0.5 mb-0">
                        {journey.awards.map((award, idx) => (
                          <span key={idx} className="bg-[#FFA726]/10 text-[#FFA726] px-1 py-0.5 rounded border border-[#FFA726]/30 font-semibold" style={{ fontSize: '8px' }}>
                            {award}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="font-bold text-gray-500" style={{ fontSize: '8px' }}>CONTACT</div>
                      <div className="text-gray-600" style={{ fontSize: '8px' }}>{member.email}</div>
                      <div className="text-gray-600" style={{ fontSize: '8px' }}>{member.phone}</div>
                      <div className="text-[#24AAE2] font-semibold" style={{ fontSize: '8px' }}>{member.linkedin}</div>
                    </div>
                  </div>

                  {/* Timeline Visualization */}
                  <div className="relative">
                    {/* Timeline line */}
                    <div className="absolute left-0 right-0 top-2 bg-gradient-to-r from-gray-300 via-[#24AAE2] to-[#FFA726]" style={{ height: '2px' }} />

                    {/* Timeline nodes */}
                    <div className="relative flex justify-between items-start pt-4">
                      {journey.timeline.map((event, idx) => (
                        <div key={idx} className="flex-1 relative" style={{ maxWidth: `${100 / journey.timeline.length}%` }}>
                          {/* Node dot */}
                          <div
                            className="absolute left-1/2 transform -translate-x-1/2 rounded-full border border-white shadow-sm"
                            style={{ backgroundColor: event.color, width: '6px', height: '6px', top: '-5px' }}
                          />
                          {/* Content */}
                          <div className="text-center px-0.5">
                            <div className="font-black text-gray-900 mb-0" style={{ fontSize: '8px' }}>{event.year}</div>
                            <div className="font-bold" style={{ color: event.color, fontSize: '8px' }}>{event.phase}</div>
                            <div className="text-gray-700 leading-tight mt-0" style={{ fontSize: '8px' }}>{event.event}</div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Top Impact Bar */}
                  <div className="mt-1.5 pt-1 border-t border-gray-200">
                    <div className="bg-gradient-to-r from-[#24AAE2]/10 to-[#FFA726]/10 border-l-2 border-[#24AAE2] px-1.5 py-1 rounded">
                      <div className="text-gray-500 font-bold uppercase mb-0" style={{ fontSize: '8px' }}>Peak Impact</div>
                      <div className="font-bold text-gray-900" style={{ fontSize: '8px' }}>{journey.topImpact}</div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Page 1 Footer - force page break */}
          <div className="px-[6mm] py-1 mt-2 force-page-break">
            <div className="bg-gray-100 border-t border-gray-300 px-2 py-1 rounded">
              <div className="flex justify-between items-center text-gray-600" style={{ fontSize: '8px' }}>
                <div>Team Resume | Journey Narrative</div>
                <div className="font-bold">Page 1 of 2</div>
                <div>Seattle, WA | 2025</div>
              </div>
            </div>
          </div>

        {/* ============ PAGE 2: DETAILED EXPERIENCE + SKILLS ============ */}

          {/* Page 2 Header */}
          <div className="bg-gray-900 px-[6mm] py-2 flex justify-between items-center">
            <div>
              <h2 className="font-black text-white" style={{ fontSize: '14px', lineHeight: '1.2' }}>DETAILED EXPERIENCE & EXPERTISE</h2>
              <p className="text-gray-400" style={{ fontSize: '8px', marginTop: '1px' }}>Complete professional history with all achievements</p>
            </div>
            <div className="text-white" style={{ fontSize: '8px' }}>Page 2 of 2</div>
          </div>

          <div className="grid grid-cols-2 gap-3 px-[6mm] py-2">
            {/* Left Column - Mathew & Rahil */}
            <div className="space-y-2">
              {[teamMembers[0], teamMembers[1]].map((member) => (
                <div key={member.id} className="border border-gray-300 rounded p-2 bg-gray-50 team-member-card">
                  {/* Member Header */}
                  <div className="bg-gradient-to-r from-[#24AAE2] to-[#24AAE2]/80 px-2 py-1 rounded -mx-2 -mt-2 mb-1">
                    <h3 className="font-black text-white" style={{ fontSize: '10px' }}>{member.name.toUpperCase()}</h3>
                  </div>

                  {/* Experience Section */}
                  <div className="mb-1">
                    <div className="font-black text-[#24AAE2] uppercase mb-0.5 flex items-center" style={{ fontSize: '8px' }}>
                      <div className="bg-[#24AAE2] mr-0.5" style={{ width: '2px', height: '8px' }} />
                      Professional Experience
                    </div>
                    <div className="space-y-1">
                      {member.experience.map((exp, idx) => (
                        <div key={idx} className="border-l border-[#FFA726] pl-1.5">
                          <div className="flex justify-between items-start mb-0">
                            <div className="font-bold text-gray-900" style={{ fontSize: '8px' }}>{exp.company}</div>
                            <div className="text-gray-600" style={{ fontSize: '8px' }}>{exp.duration.split('–')[0].trim()}</div>
                          </div>
                          <div className="text-[#24AAE2] font-semibold mb-0.5" style={{ fontSize: '8px' }}>{exp.role}</div>
                          <ul className="space-y-0">
                            {exp.achievements.slice(0, 2).map((achievement, aidx) => (
                              <li key={aidx} className="text-gray-700 leading-tight flex" style={{ fontSize: '8px' }}>
                                <span className="text-[#FFA726] mr-0.5">▸</span>
                                <span>{achievement}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Education */}
                  <div className="mb-1">
                    <div className="font-black text-[#24AAE2] uppercase mb-0.5 flex items-center" style={{ fontSize: '8px' }}>
                      <div className="bg-[#24AAE2] mr-0.5" style={{ width: '2px', height: '8px' }} />
                      Education
                    </div>
                    <div className="space-y-0.5">
                      <div className="bg-white border border-gray-200 p-1 rounded">
                        <div className="font-bold text-gray-900" style={{ fontSize: '8px' }}>{member.education.masters.degree}</div>
                        <div className="text-[#24AAE2]" style={{ fontSize: '8px' }}>{member.education.masters.school}</div>
                        <div className="text-gray-600" style={{ fontSize: '8px' }}>GPA: {member.education.masters.gpa} | {member.education.masters.duration}</div>
                      </div>
                      <div className="bg-white border border-gray-200 p-1 rounded">
                        <div className="font-bold text-gray-900" style={{ fontSize: '8px' }}>{member.education.bachelors.degree}</div>
                        <div className="text-[#24AAE2]" style={{ fontSize: '8px' }}>{member.education.bachelors.school}</div>
                        <div className="text-gray-600" style={{ fontSize: '8px' }}>
                          {member.education.bachelors.gpa && `GPA: ${member.education.bachelors.gpa} | `}
                          {member.education.bachelors.duration}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Top Skills */}
                  <div>
                    <div className="font-black text-[#24AAE2] uppercase mb-0.5 flex items-center" style={{ fontSize: '8px' }}>
                      <div className="bg-[#24AAE2] mr-0.5" style={{ width: '2px', height: '8px' }} />
                      Core Expertise
                    </div>
                    <div className="flex flex-wrap gap-0.5">
                      {member.topSkills.slice(0, 6).map((skill, idx) => (
                        <span key={idx} className="bg-[#24AAE2]/10 text-[#24AAE2] px-1 py-0.5 rounded border border-[#24AAE2]/30 font-semibold" style={{ fontSize: '8px' }}>
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Right Column - Siddarth & Shreyas */}
            <div className="space-y-2">
              {[teamMembers[2], teamMembers[3]].map((member) => (
                <div key={member.id} className="border border-gray-300 rounded p-2 bg-gray-50 team-member-card">
                  {/* Member Header */}
                  <div className="bg-gradient-to-r from-[#FFA726] to-[#FFA726]/80 px-2 py-1 rounded -mx-2 -mt-2 mb-1">
                    <h3 className="font-black text-white" style={{ fontSize: '10px' }}>{member.name.toUpperCase()}</h3>
                  </div>

                  {/* Experience Section */}
                  <div className="mb-1">
                    <div className="font-black text-[#FFA726] uppercase mb-0.5 flex items-center" style={{ fontSize: '8px' }}>
                      <div className="bg-[#FFA726] mr-0.5" style={{ width: '2px', height: '8px' }} />
                      Professional Experience
                    </div>
                    <div className="space-y-1">
                      {member.experience.map((exp, idx) => (
                        <div key={idx} className="border-l border-[#24AAE2] pl-1.5">
                          <div className="flex justify-between items-start mb-0">
                            <div className="font-bold text-gray-900" style={{ fontSize: '8px' }}>{exp.company}</div>
                            <div className="text-gray-600" style={{ fontSize: '8px' }}>{exp.duration.split('–')[0].trim()}</div>
                          </div>
                          <div className="text-[#FFA726] font-semibold mb-0.5" style={{ fontSize: '8px' }}>{exp.role}</div>
                          <ul className="space-y-0">
                            {exp.achievements.slice(0, 2).map((achievement, aidx) => (
                              <li key={aidx} className="text-gray-700 leading-tight flex" style={{ fontSize: '8px' }}>
                                <span className="text-[#24AAE2] mr-0.5">▸</span>
                                <span>{achievement}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Education */}
                  <div className="mb-1">
                    <div className="font-black text-[#FFA726] uppercase mb-0.5 flex items-center" style={{ fontSize: '8px' }}>
                      <div className="bg-[#FFA726] mr-0.5" style={{ width: '2px', height: '8px' }} />
                      Education
                    </div>
                    <div className="space-y-0.5">
                      <div className="bg-white border border-gray-200 p-1 rounded">
                        <div className="font-bold text-gray-900" style={{ fontSize: '8px' }}>{member.education.masters.degree}</div>
                        <div className="text-[#FFA726]" style={{ fontSize: '8px' }}>{member.education.masters.school}</div>
                        <div className="text-gray-600" style={{ fontSize: '8px' }}>GPA: {member.education.masters.gpa} | {member.education.masters.duration}</div>
                      </div>
                      <div className="bg-white border border-gray-200 p-1 rounded">
                        <div className="font-bold text-gray-900" style={{ fontSize: '8px' }}>{member.education.bachelors.degree}</div>
                        <div className="text-[#FFA726]" style={{ fontSize: '8px' }}>{member.education.bachelors.school}</div>
                        <div className="text-gray-600" style={{ fontSize: '8px' }}>
                          {member.education.bachelors.gpa && `GPA: ${member.education.bachelors.gpa} | `}
                          {member.education.bachelors.duration}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Top Skills */}
                  <div>
                    <div className="font-black text-[#FFA726] uppercase mb-0.5 flex items-center" style={{ fontSize: '8px' }}>
                      <div className="bg-[#FFA726] mr-0.5" style={{ width: '2px', height: '8px' }} />
                      Core Expertise
                    </div>
                    <div className="flex flex-wrap gap-0.5">
                      {member.topSkills.slice(0, 6).map((skill, idx) => (
                        <span key={idx} className="bg-[#FFA726]/10 text-[#FFA726] px-1 py-0.5 rounded border border-[#FFA726]/30 font-semibold" style={{ fontSize: '8px' }}>
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}

              {/* Collective Skills Matrix */}
              <div className="border border-[#24AAE2] rounded p-2 bg-gradient-to-br from-blue-50 to-orange-50">
                <div className="font-black text-gray-900 uppercase mb-1 text-center" style={{ fontSize: '8px' }}>
                  UNIFIED TECHNOLOGY STACK
                </div>
                <div className="grid grid-cols-3 gap-1.5" style={{ fontSize: '8px' }}>
                  <div>
                    <div className="font-bold text-[#24AAE2] mb-0.5">AI/ML</div>
                    <div className="text-gray-700 leading-tight">PyTorch, TensorFlow, LangChain, CrewAI, SWARM</div>
                  </div>
                  <div>
                    <div className="font-bold text-[#FFA726] mb-0.5">Cloud</div>
                    <div className="text-gray-700 leading-tight">AWS, Azure, GCP, Kubernetes, Docker</div>
                  </div>
                  <div>
                    <div className="font-bold text-[#24AAE2] mb-0.5">Data</div>
                    <div className="text-gray-700 leading-tight">PySpark, Kafka, Delta Lake, SQL, MongoDB</div>
                  </div>
                  <div>
                    <div className="font-bold text-[#FFA726] mb-0.5">Languages</div>
                    <div className="text-gray-700 leading-tight">Python, Java, C++, JavaScript, SQL</div>
                  </div>
                  <div>
                    <div className="font-bold text-[#24AAE2] mb-0.5">Product</div>
                    <div className="text-gray-700 leading-tight">PM, Roadmap, OKRs, Agile, Stakeholder Mgmt</div>
                  </div>
                  <div>
                    <div className="font-bold text-[#FFA726] mb-0.5">Systems</div>
                    <div className="text-gray-700 leading-tight">Distributed, Microservices, eBPF, ETL</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Team Highlights Summary */}
          <div className="px-[6mm] py-2">
            <div className="bg-gradient-to-r from-[#24AAE2]/10 to-[#FFA726]/10 border border-gray-300 rounded p-2">
              <div className="grid grid-cols-4 gap-2 text-center" style={{ fontSize: '8px' }}>
                <div>
                  <div className="font-black text-[#24AAE2]" style={{ fontSize: '10px' }}>16 YEARS</div>
                  <div className="text-gray-700">Collective Experience</div>
                </div>
                <div>
                  <div className="font-black text-[#FFA726]" style={{ fontSize: '10px' }}>$2M+</div>
                  <div className="text-gray-700">Value Delivered</div>
                </div>
                <div>
                  <div className="font-black text-[#24AAE2]" style={{ fontSize: '10px' }}>100+</div>
                  <div className="text-gray-700">Projects Shipped</div>
                </div>
                <div>
                  <div className="font-black text-[#FFA726]" style={{ fontSize: '10px' }}>15+</div>
                  <div className="text-gray-700">Fortune 500 Clients</div>
                </div>
              </div>
            </div>
          </div>

          {/* Page 2 Footer */}
          <div className="bg-gradient-to-r from-[#24AAE2] to-[#FFA726] px-[6mm] py-1">
            <div className="flex justify-between items-center text-white" style={{ fontSize: '8px' }}>
              <div className="font-bold">Ready to deliver excellence from day one</div>
              <div>Contact any team member above</div>
            </div>
          </div>
      </div>

      {/* Print Styles */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap');

        .a4-container {
          width: 210mm;
          padding: 0;
        }

        .force-page-break {
          page-break-after: always !important;
        }

        .team-member-card {
          page-break-inside: avoid !important;
        }

        @media print {
          .no-print {
            display: none !important;
          }

          body {
            -webkit-print-color-adjust: exact;
            print-color-adjust: exact;
          }

          @page {
            size: A4 portrait;
            margin: 0;
          }

          .force-page-break {
            page-break-after: always !important;
          }

          .team-member-card {
            page-break-inside: avoid !important;
          }

          /* Ensure all content is visible */
          * {
            -webkit-print-color-adjust: exact !important;
            print-color-adjust: exact !important;
          }
        }
      `}</style>
    </div>
  );
};

export default Prototype5;
