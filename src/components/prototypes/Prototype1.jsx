import { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { teamMembers, teamMetrics, skillsTaxonomy } from '../../data/teamData';
import PrintButton from '../shared/PrintButton';
import BackButton from '../shared/BackButton';
import {
  Brain, Briefcase, GraduationCap, Award, Zap, Code, Database, Users
} from 'lucide-react';

const Prototype1 = () => {
  const printRef = useRef();

  // Signal to Puppeteer that React rendering is complete
  useEffect(() => {
    window.pdfReady = true;
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-white py-8">
      <BackButton />
      <PrintButton targetRef={printRef} fileName="ai-command-center-team-resume" />

      <div ref={printRef}>
        <style>{`
          @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap');

          /* PDF page size specification */
          @page {
            size: A4;
            margin: 0;
          }

          .a4-container {
            width: 210mm;
            padding: 3mm;
            font-family: 'Inter', sans-serif;
            background: white;
            margin: 0 auto;
            box-shadow: 0 0 20px rgba(0,0,0,0.1);
          }

          .force-page-break {
            page-break-after: always;
            break-after: page;
          }

          /* Prevent content from breaking across pages */
          .keep-together {
            page-break-inside: avoid;
            break-inside: avoid;
          }

          @media print {
            /* Essential for color accuracy */
            * {
              -webkit-print-color-adjust: exact !important;
              print-color-adjust: exact !important;
            }

            .a4-container {
              margin: 0;
              padding: 3mm;
              box-shadow: none;
            }

            /* Force page break */
            .force-page-break {
              page-break-after: always !important;
              break-after: page !important;
            }

            .team-member-card {
              page-break-inside: avoid;
              break-inside: avoid;
            }

            /* Prevent unwanted breaks */
            h1, h2, h3, h4 {
              page-break-after: avoid;
              break-after: avoid;
            }

            /* Font rendering optimization */
            body {
              -webkit-font-smoothing: antialiased;
              -moz-osx-font-smoothing: grayscale;
            }
          }
        `}</style>

        <div className="a4-container">
          {/* Header */}
          <div className="mb-0.25 pb-0.5 border-b-2 border-blue-600">
            <h1 className="text-lg font-black text-gray-900 mb-0" style={{fontSize: '16px', lineHeight: '1.2'}}>AI COMMAND CENTER - ELITE TEAM RESUME</h1>
            <div className="flex justify-between items-center">
              <p className="text-blue-600 font-bold" style={{fontSize: '8px'}}>UW | MSIM 2026 | Seattle</p>
              <div className="flex gap-0.5 font-bold" style={{fontSize: '8px'}}>
                <span className="text-purple-600">16+ Yrs Exp</span>
                <span className="text-green-600">$2M+ Impact</span>
                <span className="text-blue-600">15+ F500</span>
              </div>
            </div>
          </div>

          {/* Team Metrics Banner */}
          <div className="mb-0.25 grid grid-cols-8 gap-0.5 p-1 bg-gradient-to-r from-blue-100 to-purple-100 rounded border border-blue-600">
            <div className="text-center"><div className="text-sm font-black text-blue-600" style={{fontSize: '14px'}}>4</div><div style={{fontSize: '8px'}} className="font-bold text-gray-700">Members</div></div>
            <div className="text-center"><div className="text-sm font-black text-purple-600" style={{fontSize: '14px'}}>16+</div><div style={{fontSize: '8px'}} className="font-bold text-gray-700">Years</div></div>
            <div className="text-center"><div className="text-sm font-black text-green-600" style={{fontSize: '14px'}}>100+</div><div style={{fontSize: '8px'}} className="font-bold text-gray-700">Projects</div></div>
            <div className="text-center"><div className="text-sm font-black text-blue-600" style={{fontSize: '14px'}}>98%</div><div style={{fontSize: '8px'}} className="font-bold text-gray-700">On-Time</div></div>
            <div className="text-center"><div className="text-sm font-black text-purple-600" style={{fontSize: '14px'}}>15+</div><div style={{fontSize: '8px'}} className="font-bold text-gray-700">F500</div></div>
            <div className="text-center"><div className="text-sm font-black text-blue-600" style={{fontSize: '14px'}}>100+</div><div style={{fontSize: '8px'}} className="font-bold text-gray-700">SAP</div></div>
            <div className="text-center"><div className="text-sm font-black text-green-600" style={{fontSize: '14px'}}>75M</div><div style={{fontSize: '8px'}} className="font-bold text-gray-700">Rec/Min</div></div>
            <div className="text-center"><div className="text-sm font-black text-purple-600" style={{fontSize: '14px'}}>$2M+</div><div style={{fontSize: '8px'}} className="font-bold text-gray-700">Impact</div></div>
          </div>

          {/* First Team Member - Mathew */}
          {teamMembers.slice(0, 1).map((member) => (
            <div key={member.id} className="team-member-card mb-0.5 p-1 border border-blue-600 rounded bg-gradient-to-br from-blue-50 to-white">
              <div className="flex gap-0.5 mb-0">
                <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-blue-600 flex-shrink-0">
                  <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
                </div>
                <div className="flex-1">
                  <h2 className="font-black text-gray-900" style={{fontSize: '10px', lineHeight: '1'}}>{member.name}</h2>
                  <p className="text-blue-600 font-bold" style={{fontSize: '8px'}}>{member.role}</p>
                  <div className="flex gap-0.5 text-gray-600" style={{fontSize: '8px'}}>
                    <span>{member.email}</span>
                    <span>{member.phone}</span>
                  </div>
                </div>
                <div className="flex gap-0.5">
                  <div className="bg-green-600 text-white px-0.5 py-0.5 rounded font-bold" style={{fontSize: '8px', lineHeight: '1.2'}}>{member.keyMetrics.primary}<br/><span className="font-normal">{member.keyMetrics.detail1}</span></div>
                  <div className="bg-purple-600 text-white px-0.5 py-0.5 rounded font-bold" style={{fontSize: '8px', lineHeight: '1.2'}}>{member.keyMetrics.secondary}<br/><span className="font-normal">{member.keyMetrics.detail2}</span></div>
                </div>
              </div>

              <div className="mb-0 p-0.5 bg-white rounded border border-blue-200">
                <p className="text-gray-800" style={{fontSize: '8px', lineHeight: '1.2'}}><span className="font-bold text-blue-600">SUMMARY:</span> {member.summary}</p>
              </div>

              <div className="grid grid-cols-2 gap-0.5 mb-0">
                <div className="bg-white p-0.5 rounded border border-purple-200">
                  <div className="flex items-center gap-0.5 mb-0">
                    <GraduationCap className="text-purple-600" size={8} />
                    <h3 className="font-black text-gray-900" style={{fontSize: '8px'}}>EDUCATION</h3>
                  </div>
                  <div className="space-y-0" style={{fontSize: '8px', lineHeight: '1.2'}}>
                    <div>
                      <p className="font-bold text-blue-600">{member.education.masters.degree}</p>
                      <p className="text-gray-700">{member.education.masters.school} | GPA: {member.education.masters.gpa}</p>
                    </div>
                    <div className="pt-0.5 border-t border-gray-200">
                      <p className="font-bold text-blue-600">{member.education.bachelors.degree}</p>
                      <p className="text-gray-700">{member.education.bachelors.school} | GPA: {member.education.bachelors.gpa}</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-0.5 rounded border border-green-200">
                  <div className="flex items-center gap-0.5 mb-0">
                    <Code className="text-green-600" size={8} />
                    <h3 className="font-black text-gray-900" style={{fontSize: '8px'}}>SKILLS</h3>
                  </div>
                  <div className="space-y-0" style={{fontSize: '8px', lineHeight: '1.3'}}>
                    {Object.entries(member.technicalSkills).map(([category, skills]) => (
                      <div key={category}>
                        <span className="font-bold text-purple-600">{category}:</span>
                        <span className="text-gray-700"> {skills.join(', ')}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="bg-white p-0.5 rounded border border-green-200 mb-0">
                <div className="flex items-center gap-0.5 mb-0">
                  <Briefcase className="text-green-600" size={8} />
                  <h3 className="font-black text-gray-900" style={{fontSize: '8px'}}>EXPERIENCE ({member.experience.length})</h3>
                </div>
                <div className="space-y-0.5">
                  {member.experience.map((exp, idx) => (
                    <div key={idx} className={idx > 0 ? "pt-0.5 border-t border-gray-200" : ""}>
                      <div className="flex justify-between items-start">
                        <div>
                          <span className="font-bold text-blue-600" style={{fontSize: '8px'}}>{exp.company}</span>
                          <span className="text-gray-700" style={{fontSize: '8px'}}> | {exp.role}</span>
                        </div>
                        <div className="text-gray-600" style={{fontSize: '8px'}}>{exp.duration}</div>
                      </div>
                      <ul className="list-disc list-inside space-y-0 text-gray-700" style={{fontSize: '8px', lineHeight: '1.4'}}>
                        {exp.achievements.map((achievement, aidx) => (
                          <li key={aidx}>{achievement}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-2 gap-0.5">
                <div className="bg-gradient-to-r from-purple-100 to-blue-100 p-0.5 rounded border border-purple-600">
                  <div className="flex items-center gap-0.5 mb-0">
                    <Award className="text-purple-600" size={8} />
                    <h3 className="font-black text-gray-900" style={{fontSize: '8px'}}>CERTS & LEAD</h3>
                  </div>
                  <div className="space-y-0.5" style={{fontSize: '8px', lineHeight: '1.4'}}>
                    {member.certifications.map((cert, idx) => (
                      <div key={idx} className="flex items-center gap-0.5">
                        <span className="text-purple-600">★</span>
                        <span className="text-gray-700">{cert}</span>
                      </div>
                    ))}
                    {member.leadershipProfile.map((item, idx) => (
                      <div key={idx} className="flex items-center gap-0.5">
                        <span className="text-blue-600">▶</span>
                        <span className="text-gray-700">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="bg-gradient-to-r from-green-100 to-blue-100 p-0.5 rounded border border-green-600">
                  <div className="flex items-center gap-0.5 mb-0">
                    <Zap className="text-green-600" size={8} />
                    <h3 className="font-black text-gray-900" style={{fontSize: '8px'}}>TOP 5</h3>
                  </div>
                  <div className="space-y-0.5" style={{fontSize: '8px', lineHeight: '1.4'}}>
                    {member.topSkills.map((skill, idx) => (
                      <div key={idx} className="flex items-center gap-0.5">
                        <span className="text-green-600 font-bold">{idx + 1}.</span>
                        <span className="text-gray-700">{skill}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}

          {/* Second Team Member - Rahil - END OF PAGE 1 */}
          {teamMembers.slice(1, 2).map((member) => (
            <div key={member.id} className="team-member-card force-page-break mb-0.5 p-1 border border-purple-600 rounded bg-gradient-to-br from-purple-50 to-white">
              <div className="flex gap-0.5 mb-0">
                <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-purple-600 flex-shrink-0">
                  <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
                </div>
                <div className="flex-1">
                  <h2 className="font-black text-gray-900" style={{fontSize: '12px', lineHeight: '1.1'}}>{member.name}</h2>
                  <p className="text-purple-600 font-bold" style={{fontSize: '9px'}}>{member.role}</p>
                  <div className="flex gap-0.5 text-gray-600" style={{fontSize: '8px'}}>
                    <span>{member.email}</span>
                    <span>{member.phone}</span>
                  </div>
                </div>
                <div className="flex gap-0.5">
                  <div className="bg-green-600 text-white px-1 py-0.5 rounded font-bold" style={{fontSize: '8px', lineHeight: '1.2'}}>{member.keyMetrics.primary}<br/><span className="font-normal">{member.keyMetrics.detail1}</span></div>
                  <div className="bg-purple-600 text-white px-1 py-0.5 rounded font-bold" style={{fontSize: '8px', lineHeight: '1.2'}}>{member.keyMetrics.secondary}<br/><span className="font-normal">{member.keyMetrics.detail2}</span></div>
                </div>
              </div>

              <div className="mb-0 p-0.5 bg-white rounded border border-purple-200">
                <p className="text-gray-800" style={{fontSize: '8px', lineHeight: '1.1'}}><span className="font-bold text-purple-600">SUMMARY:</span> {member.summary}</p>
              </div>

              <div className="grid grid-cols-2 gap-0.5 mb-0.25">
                <div className="bg-white p-0.5 rounded border border-purple-200">
                  <div className="flex items-center gap-0.5 mb-0">
                    <GraduationCap className="text-purple-600" size={8} />
                    <h3 className="font-black text-gray-900" style={{fontSize: '8px'}}>EDUCATION</h3>
                  </div>
                  <div className="space-y-0" style={{fontSize: '8px', lineHeight: '1.2'}}>
                    <div>
                      <p className="font-bold text-purple-600">{member.education.masters.degree}</p>
                      <p className="text-gray-700">{member.education.masters.school} | GPA: {member.education.masters.gpa}</p>
                    </div>
                    <div className="pt-0.5 border-t border-gray-200">
                      <p className="font-bold text-purple-600">{member.education.bachelors.degree}</p>
                      <p className="text-gray-700">{member.education.bachelors.school}</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-0.5 rounded border border-green-200">
                  <div className="flex items-center gap-0.5 mb-0">
                    <Code className="text-green-600" size={8} />
                    <h3 className="font-black text-gray-900" style={{fontSize: '8px'}}>SKILLS</h3>
                  </div>
                  <div className="space-y-0" style={{fontSize: '8px', lineHeight: '1.3'}}>
                    {Object.entries(member.technicalSkills).map(([category, skills]) => (
                      <div key={category}>
                        <span className="font-bold text-purple-600">{category}:</span>
                        <span className="text-gray-700"> {skills.join(', ')}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="bg-white p-0.5 rounded border border-green-200 mb-0">
                <div className="flex items-center gap-0.5 mb-0">
                  <Briefcase className="text-green-600" size={8} />
                  <h3 className="font-black text-gray-900" style={{fontSize: '8px'}}>EXPERIENCE ({member.experience.length})</h3>
                </div>
                <div className="space-y-0.5">
                  {member.experience.map((exp, idx) => (
                    <div key={idx} className={idx > 0 ? "pt-0.5 border-t border-gray-200" : ""}>
                      <div className="flex justify-between items-start">
                        <div>
                          <span className="font-bold text-purple-600" style={{fontSize: '8px'}}>{exp.company}</span>
                          <span className="text-gray-700" style={{fontSize: '8px'}}> | {exp.role}</span>
                        </div>
                        <div className="text-gray-600" style={{fontSize: '8px'}}>{exp.duration} | {exp.location}</div>
                      </div>
                      <ul className="list-disc list-inside space-y-0 text-gray-700" style={{fontSize: '8px', lineHeight: '1.4'}}>
                        {exp.achievements.map((achievement, aidx) => (
                          <li key={aidx}>{achievement}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-2 gap-0.5">
                <div className="bg-gradient-to-r from-purple-100 to-blue-100 p-0.5 rounded border border-purple-600">
                  <div className="flex items-center gap-0.5 mb-0">
                    <Award className="text-purple-600" size={8} />
                    <h3 className="font-black text-gray-900" style={{fontSize: '8px'}}>CERTS & LEAD</h3>
                  </div>
                  <div className="space-y-0.5" style={{fontSize: '8px', lineHeight: '1.4'}}>
                    {member.certifications.map((cert, idx) => (
                      <div key={idx} className="flex items-center gap-0.5">
                        <span className="text-purple-600">★</span>
                        <span className="text-gray-700">{cert}</span>
                      </div>
                    ))}
                    {member.leadershipProfile.map((item, idx) => (
                      <div key={idx} className="flex items-center gap-0.5">
                        <span className="text-blue-600">▶</span>
                        <span className="text-gray-700">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="bg-gradient-to-r from-green-100 to-blue-100 p-0.5 rounded border border-green-600">
                  <div className="flex items-center gap-0.5 mb-0">
                    <Zap className="text-green-600" size={8} />
                    <h3 className="font-black text-gray-900" style={{fontSize: '8px'}}>TOP 5</h3>
                  </div>
                  <div className="space-y-0.5" style={{fontSize: '8px', lineHeight: '1.4'}}>
                    {member.topSkills.map((skill, idx) => (
                      <div key={idx} className="flex items-center gap-0.5">
                        <span className="text-green-600 font-bold">{idx + 1}.</span>
                        <span className="text-gray-700">{skill}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}

          {/* Third Team Member - Siddarth - PAGE 2 START */}
          {teamMembers.slice(2, 3).map((member) => (
            <div key={member.id} className="team-member-card mb-0.5 p-1.5 border border-green-600 rounded bg-gradient-to-br from-green-50 to-white">
              <div className="flex gap-0.5 mb-0">
                <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-green-600 flex-shrink-0">
                  <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
                </div>
                <div className="flex-1">
                  <h2 className="font-black text-gray-900" style={{fontSize: '12px', lineHeight: '1.1'}}>{member.name}</h2>
                  <p className="text-green-600 font-bold" style={{fontSize: '9px'}}>{member.role}</p>
                  <div className="flex gap-0.5 text-gray-600" style={{fontSize: '8px'}}>
                    <span>{member.email}</span>
                    <span>{member.phone}</span>
                  </div>
                </div>
                <div className="flex gap-0.5">
                  <div className="bg-green-600 text-white px-1 py-0.5 rounded font-bold" style={{fontSize: '8px', lineHeight: '1.2'}}>{member.keyMetrics.primary}<br/><span className="font-normal">{member.keyMetrics.detail1}</span></div>
                  <div className="bg-purple-600 text-white px-1 py-0.5 rounded font-bold" style={{fontSize: '8px', lineHeight: '1.2'}}>{member.keyMetrics.secondary}<br/><span className="font-normal">{member.keyMetrics.detail2}</span></div>
                </div>
              </div>

              <div className="mb-0 p-0.5 bg-white rounded border border-green-200">
                <p className="text-gray-800" style={{fontSize: '8px', lineHeight: '1.1'}}><span className="font-bold text-green-600">SUMMARY:</span> {member.summary}</p>
              </div>

              <div className="grid grid-cols-2 gap-0.5 mb-0.25">
                <div className="bg-white p-0.5 rounded border border-green-200">
                  <div className="flex items-center gap-0.5 mb-0">
                    <GraduationCap className="text-green-600" size={8} />
                    <h3 className="font-black text-gray-900" style={{fontSize: '8px'}}>EDUCATION</h3>
                  </div>
                  <div className="space-y-0" style={{fontSize: '8px', lineHeight: '1.2'}}>
                    <div>
                      <p className="font-bold text-green-600">{member.education.masters.degree}</p>
                      <p className="text-gray-700">{member.education.masters.school} | GPA: {member.education.masters.gpa}</p>
                    </div>
                    <div className="pt-0.5 border-t border-gray-200">
                      <p className="font-bold text-green-600">{member.education.bachelors.degree}</p>
                      <p className="text-gray-700">{member.education.bachelors.school} | GPA: {member.education.bachelors.gpa}</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-0.5 rounded border border-purple-200">
                  <div className="flex items-center gap-0.5 mb-0">
                    <Code className="text-purple-600" size={8} />
                    <h3 className="font-black text-gray-900" style={{fontSize: '8px'}}>SKILLS</h3>
                  </div>
                  <div className="space-y-0" style={{fontSize: '8px', lineHeight: '1.2'}}>
                    {Object.entries(member.technicalSkills).map(([category, skills]) => (
                      <div key={category}>
                        <span className="font-bold text-green-600">{category}:</span>
                        <span className="text-gray-700"> {skills.join(', ')}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="bg-white p-0.5 rounded border border-blue-200 mb-0">
                <div className="flex items-center gap-0.5 mb-0">
                  <Briefcase className="text-blue-600" size={8} />
                  <h3 className="font-black text-gray-900" style={{fontSize: '8px'}}>EXPERIENCE ({member.experience.length})</h3>
                </div>
                <div className="space-y-0.5">
                  {member.experience.map((exp, idx) => (
                    <div key={idx} className={idx > 0 ? "pt-0.5 border-t border-gray-200" : ""}>
                      <div className="flex justify-between items-start">
                        <div>
                          <span className="font-bold text-green-600" style={{fontSize: '8px'}}>{exp.company}</span>
                          <span className="text-gray-700" style={{fontSize: '8px'}}> | {exp.role}</span>
                        </div>
                        <div className="text-gray-600" style={{fontSize: '8px'}}>{exp.duration} | {exp.location}</div>
                      </div>
                      <ul className="list-disc list-inside space-y-0 text-gray-700" style={{fontSize: '8px', lineHeight: '1.4'}}>
                        {exp.achievements.map((achievement, aidx) => (
                          <li key={aidx}>{achievement}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-2 gap-0.5">
                <div className="bg-gradient-to-r from-green-100 to-blue-100 p-0.5 rounded border border-green-600">
                  <div className="flex items-center gap-0.5 mb-0.25">
                    <Award className="text-green-600" size={10} />
                    <h3 className="font-black text-gray-900" style={{fontSize: '9px'}}>CERTS & LEAD</h3>
                  </div>
                  <div className="space-y-0" style={{fontSize: '8px'}}>
                    {member.certifications.map((cert, idx) => (
                      <div key={idx} className="flex items-center gap-0.5">
                        <span className="text-green-600">★</span>
                        <span className="text-gray-700">{cert}</span>
                      </div>
                    ))}
                    {member.leadershipProfile.map((item, idx) => (
                      <div key={idx} className="flex items-center gap-0.5">
                        <span className="text-blue-600">▶</span>
                        <span className="text-gray-700">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="bg-gradient-to-r from-purple-100 to-green-100 p-1 rounded border border-purple-600">
                  <div className="flex items-center gap-0.5 mb-0.25">
                    <Zap className="text-purple-600" size={10} />
                    <h3 className="font-black text-gray-900" style={{fontSize: '9px'}}>TOP 5</h3>
                  </div>
                  <div className="space-y-0" style={{fontSize: '8px'}}>
                    {member.topSkills.map((skill, idx) => (
                      <div key={idx} className="flex items-center gap-0.5">
                        <span className="text-purple-600 font-bold">{idx + 1}.</span>
                        <span className="text-gray-700">{skill}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}

          {/* Fourth Team Member - Shreyas */}
          {teamMembers.slice(3, 4).map((member) => (
            <div key={member.id} className="team-member-card mb-0.5 p-1.5 border border-blue-600 rounded bg-gradient-to-br from-blue-50 to-white">
              <div className="flex gap-0.5 mb-0">
                <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-blue-600 flex-shrink-0">
                  <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
                </div>
                <div className="flex-1">
                  <h2 className="font-black text-gray-900" style={{fontSize: '10px', lineHeight: '1'}}>{member.name}</h2>
                  <p className="text-blue-600 font-bold" style={{fontSize: '8px'}}>{member.role}</p>
                  <div className="flex gap-0.5 text-gray-600" style={{fontSize: '8px'}}>
                    <span>{member.email}</span>
                    <span>{member.phone}</span>
                  </div>
                </div>
                <div className="flex gap-0.5">
                  <div className="bg-green-600 text-white px-0.5 py-0.5 rounded font-bold" style={{fontSize: '8px', lineHeight: '1.2'}}>{member.keyMetrics.primary}<br/><span className="font-normal">{member.keyMetrics.detail1}</span></div>
                  <div className="bg-purple-600 text-white px-0.5 py-0.5 rounded font-bold" style={{fontSize: '8px', lineHeight: '1.2'}}>{member.keyMetrics.secondary}<br/><span className="font-normal">{member.keyMetrics.detail2}</span></div>
                </div>
              </div>

              <div className="mb-0 p-0.5 bg-white rounded border border-blue-200">
                <p className="text-gray-800" style={{fontSize: '8px', lineHeight: '1.2'}}><span className="font-bold text-blue-600">SUMMARY:</span> {member.summary}</p>
              </div>

              <div className="grid grid-cols-2 gap-0.5 mb-0">
                <div className="bg-white p-0.5 rounded border border-blue-200">
                  <div className="flex items-center gap-0.5 mb-0">
                    <GraduationCap className="text-blue-600" size={8} />
                    <h3 className="font-black text-gray-900" style={{fontSize: '8px'}}>EDUCATION</h3>
                  </div>
                  <div className="space-y-0" style={{fontSize: '8px', lineHeight: '1.2'}}>
                    <div>
                      <p className="font-bold text-blue-600">{member.education.masters.degree}</p>
                      <p className="text-gray-700">{member.education.masters.school} | GPA: {member.education.masters.gpa}</p>
                    </div>
                    <div className="pt-0.5 border-t border-gray-200">
                      <p className="font-bold text-blue-600">{member.education.bachelors.degree}</p>
                      <p className="text-gray-700">{member.education.bachelors.school} | GPA: {member.education.bachelors.gpa}</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-0.5 rounded border border-purple-200">
                  <div className="flex items-center gap-0.5 mb-0">
                    <Code className="text-purple-600" size={8} />
                    <h3 className="font-black text-gray-900" style={{fontSize: '8px'}}>SKILLS</h3>
                  </div>
                  <div className="space-y-0" style={{fontSize: '8px', lineHeight: '1.2'}}>
                    {Object.entries(member.technicalSkills).map(([category, skills]) => (
                      <div key={category}>
                        <span className="font-bold text-blue-600">{category}:</span>
                        <span className="text-gray-700"> {skills.join(', ')}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="bg-white p-0.5 rounded border border-green-200 mb-0">
                <div className="flex items-center gap-0.5 mb-0">
                  <Briefcase className="text-green-600" size={8} />
                  <h3 className="font-black text-gray-900" style={{fontSize: '8px'}}>EXPERIENCE ({member.experience.length})</h3>
                </div>
                <div className="space-y-0.5">
                  {member.experience.map((exp, idx) => (
                    <div key={idx} className={idx > 0 ? "pt-0.5 border-t border-gray-200" : ""}>
                      <div className="flex justify-between items-start">
                        <div>
                          <span className="font-bold text-blue-600" style={{fontSize: '8px'}}>{exp.company}</span>
                          <span className="text-gray-700" style={{fontSize: '8px'}}> | {exp.role}</span>
                        </div>
                        <div className="text-gray-600" style={{fontSize: '8px'}}>{exp.duration}</div>
                      </div>
                      <ul className="list-disc list-inside space-y-0 text-gray-700" style={{fontSize: '8px', lineHeight: '1.4'}}>
                        {exp.achievements.map((achievement, aidx) => (
                          <li key={aidx}>{achievement}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-2 gap-0.5">
                <div className="bg-gradient-to-r from-blue-100 to-purple-100 p-1 rounded border border-blue-600">
                  <div className="flex items-center gap-0.5 mb-0.25">
                    <Award className="text-blue-600" size={10} />
                    <h3 className="font-black text-gray-900" style={{fontSize: '9px'}}>CERTS & LEAD</h3>
                  </div>
                  <div className="space-y-0" style={{fontSize: '8px'}}>
                    {member.certifications.map((cert, idx) => (
                      <div key={idx} className="flex items-center gap-0.5">
                        <span className="text-blue-600">★</span>
                        <span className="text-gray-700">{cert}</span>
                      </div>
                    ))}
                    {member.leadershipProfile.map((item, idx) => (
                      <div key={idx} className="flex items-center gap-0.5">
                        <span className="text-purple-600">▶</span>
                        <span className="text-gray-700">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="bg-gradient-to-r from-green-100 to-blue-100 p-1 rounded border border-green-600">
                  <div className="flex items-center gap-0.5 mb-0.25">
                    <Zap className="text-green-600" size={10} />
                    <h3 className="font-black text-gray-900" style={{fontSize: '9px'}}>TOP 5</h3>
                  </div>
                  <div className="space-y-0" style={{fontSize: '8px'}}>
                    {member.topSkills.map((skill, idx) => (
                      <div key={idx} className="flex items-center gap-0.5">
                        <span className="text-green-600 font-bold">{idx + 1}.</span>
                        <span className="text-gray-700">{skill}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}

          {/* Team Skills Matrix - Expanded */}
          <div className="mt-0.5 p-1.5 bg-gradient-to-br from-purple-100 via-blue-100 to-green-100 rounded border-2 border-purple-600">
            <div className="flex items-center gap-1 mb-0.5">
              <Brain className="text-purple-600" size={13} />
              <h3 className="font-black text-gray-900" style={{fontSize: '11px'}}>TEAM SKILLS MATRIX - COMPREHENSIVE EXPERTISE</h3>
            </div>
            <div className="grid grid-cols-7 gap-1">
              {Object.entries(skillsTaxonomy).map(([category, data]) => {
                const avgProficiency = data.proficiency.reduce((a, b) => a + b, 0) / 4;
                const allTools = [...(data.tools || []), ...(data.frameworks || []), ...(data.platforms || []), ...(data.services || []), ...(data.monitoring || []), ...(data.databases || []), ...(data.languages || []), ...(data.skills || []), ...(data.concepts || []), ...(data.cicd || []), ...(data.orchestration || [])];
                return (
                  <div key={category} className="bg-white p-1 rounded border border-blue-600">
                    <div className="text-center mb-0.5">
                      <div className="font-black text-blue-600" style={{fontSize: '14px', lineHeight: '1'}}>{avgProficiency.toFixed(1)}/5</div>
                      <div className="font-bold text-gray-900" style={{fontSize: '8px', lineHeight: '1.2'}}>{category}</div>
                    </div>
                    <div className="text-gray-600 space-y-0" style={{fontSize: '8px', lineHeight: '1.45'}}>
                      {allTools.slice(0, 10).map((tool, idx) => (
                        <div key={idx} className="truncate">• {tool}</div>
                      ))}
                      {allTools.length > 10 && (
                        <div className="text-purple-600 font-bold">+{allTools.length - 10}</div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Prototype1;
