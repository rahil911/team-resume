import { useRef } from 'react';
import { motion } from 'framer-motion';
import { RadarChart, Radar, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Cell, LineChart, Line, CartesianGrid, Tooltip } from 'recharts';
import { teamMembers, teamMetrics, skillsTaxonomy } from '../../data/teamData';

/**
 * PROTOTYPE 6: DATA INFOGRAPHIC - MAXIMUM INFORMATION DENSITY
 * 2-PAGE LAYOUT with heavy data visualization
 * Theme: Vibrant infographic with blue/red/orange on white
 * Colors: #0066FF (blue), #FF4757 (red), #FFA726 (orange)
 * Font: Inter (highly readable for data-dense layouts)
 * Philosophy: Every pixel tells a story - maximum visual information density
 */

const Prototype6 = () => {
  const printRef = useRef();

  const colors = {
    blue: '#0066FF',
    red: '#FF4757',
    orange: '#FFA726',
    gray: '#6B7280'
  };

  // Generate comprehensive skill proficiency radar data
  const skillRadarData = [
    { skill: 'AI/ML', Mathew: 4, Rahil: 5, Siddarth: 5, Shreyas: 3 },
    { skill: 'Cloud', Mathew: 5, Rahil: 4, Siddarth: 5, Shreyas: 4 },
    { skill: 'Data Eng', Mathew: 5, Rahil: 4, Siddarth: 4, Shreyas: 5 },
    { skill: 'Product', Mathew: 3, Rahil: 5, Siddarth: 3, Shreyas: 5 },
    { skill: 'Full-Stack', Mathew: 4, Rahil: 4, Siddarth: 5, Shreyas: 3 },
    { skill: 'DevOps', Mathew: 5, Rahil: 4, Siddarth: 5, Shreyas: 3 }
  ];

  // Technology distribution across team
  const techStackData = [
    { name: 'Python', count: 4, color: colors.blue },
    { name: 'AWS', count: 4, color: colors.orange },
    { name: 'React', count: 3, color: colors.red },
    { name: 'SQL', count: 4, color: colors.blue },
    { name: 'K8s', count: 3, color: colors.orange },
    { name: 'LangChain', count: 3, color: colors.red },
    { name: 'Azure', count: 2, color: colors.blue },
    { name: 'SAP', count: 2, color: colors.orange }
  ];

  // Experience timeline data
  const experienceTimeline = [
    { year: '2019', events: 2 },
    { year: '2020', events: 3 },
    { year: '2021', events: 5 },
    { year: '2022', events: 8 },
    { year: '2023', events: 6 },
    { year: '2024', events: 10 },
    { year: '2025', events: 4 }
  ];

  // Company exposure data
  const companyData = [
    { name: 'AWS', type: 'FAANG', members: 1 },
    { name: 'Morgan Stanley', type: 'Finance', members: 1 },
    { name: 'SAP', type: 'Enterprise', members: 1 },
    { name: 'o9 Solutions', type: 'Product', members: 1 },
    { name: 'Adobe', type: 'FAANG', members: 1 },
    { name: 'Mu Sigma', type: 'Analytics', members: 1 },
    { name: 'Rocket Mortgage', type: 'FinTech', members: 1 }
  ];

  // Key metrics by member
  const memberMetrics = [
    { name: 'Mathew', metric1: '$250K', label1: 'Revenue', metric2: '35%', label2: 'Speed', color: colors.blue },
    { name: 'Rahil', metric1: '$35K', label1: 'Profit', metric2: '100+', label2: 'Integrations', color: colors.red },
    { name: 'Siddarth', metric1: '$1M', label1: 'Savings', metric2: '75M/min', label2: 'Records', color: colors.orange },
    { name: 'Shreyas', metric1: '70%', label1: 'Efficiency', metric2: '500+', label2: 'Certified', color: colors.blue }
  ];

  // GPA visualization
  const gpaData = [
    { name: 'Mathew', gpa: 4.0, max: 4.0 },
    { name: 'Rahil', gpa: 3.9, max: 4.0 },
    { name: 'Siddarth', gpa: 3.9, max: 4.0 },
    { name: 'Shreyas', gpa: 3.88, max: 4.0 }
  ];

  // Project categories breakdown
  const projectCategories = [
    { category: 'ERP Integration', count: 100, color: colors.blue },
    { category: 'Data Pipelines', count: 30, color: colors.orange },
    { category: 'AI/ML Systems', count: 15, color: colors.red },
    { category: 'Full-Stack Apps', count: 12, color: colors.blue },
    { category: 'Supply Chain', count: 20, color: colors.orange }
  ];

  return (
    <div className="min-h-screen bg-white">
      <div ref={printRef} className="a4-container w-[210mm] mx-auto bg-white" style={{ fontFamily: 'Inter, system-ui, sans-serif', padding: '0' }}>

          {/* Header - Ultra-Compact */}
          <div className="h-[32mm] relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #0066FF 0%, #FF4757 50%, #FFA726 100%)' }}>
            <div className="absolute inset-0 opacity-10">
              <svg width="100%" height="100%">
                <defs>
                  <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
                    <path d="M 20 0 L 0 0 0 20" fill="none" stroke="white" strokeWidth="0.5"/>
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#grid)" />
              </svg>
            </div>

            <div className="relative h-full px-6 pt-3">
              <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }}>
                <h1 className="text-4xl font-black text-white mb-1 tracking-tight">TEAM ANALYTICS</h1>
                <p className="text-white/90 text-[9px] font-medium mb-2">Maximum Information Density | Visual Data Intelligence | UW iSchool 2026</p>

                {/* Quick stats bar */}
                <div className="flex gap-4 mt-2">
                  <div className="text-white">
                    <div className="text-2xl font-black">14+</div>
                    <div className="text-[8px] uppercase tracking-wide opacity-90">Years Combined</div>
                  </div>
                  <div className="text-white">
                    <div className="text-2xl font-black">4</div>
                    <div className="text-[8px] uppercase tracking-wide opacity-90">Fortune 500</div>
                  </div>
                  <div className="text-white">
                    <div className="text-2xl font-black">177+</div>
                    <div className="text-[8px] uppercase tracking-wide opacity-90">Projects Shipped</div>
                  </div>
                  <div className="text-white">
                    <div className="text-2xl font-black">3.9</div>
                    <div className="text-[8px] uppercase tracking-wide opacity-90">Avg GPA/4.0</div>
                  </div>
                  <div className="text-white">
                    <div className="text-2xl font-black">$2M+</div>
                    <div className="text-[8px] uppercase tracking-wide opacity-90">Value Created</div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Main content grid - ULTRA-COMPACT */}
          <div className="px-6 py-2">

            {/* Row 1: Team member cards with dense info */}
            <div className="grid grid-cols-4 gap-2 mb-2">
              {teamMembers.map((member, idx) => (
                <motion.div
                  key={member.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: idx * 0.1 }}
                  className="border rounded overflow-hidden"
                  style={{ borderColor: [colors.blue, colors.red, colors.orange, colors.blue][idx] }}
                >
                  <div className="relative bg-gradient-to-br from-gray-100 to-gray-200 p-1">
                    <img src={member.image} alt={member.name} className="w-full h-16 object-contain rounded-lg" />
                    <div className="absolute top-0.5 right-0.5 bg-white rounded-full px-1 py-0.5 text-[8px] font-black shadow-sm" style={{ color: [colors.blue, colors.red, colors.orange, colors.blue][idx] }}>
                      {member.yearsExperience}Y
                    </div>
                  </div>
                  <div className="px-1.5 pt-0.5 pb-1">
                    <h3 className="font-black text-[9px] leading-tight text-gray-800">{member.name}</h3>
                  </div>

                  <div className="p-1.5 bg-gray-50">
                    <p className="text-[8px] leading-tight text-gray-700 mb-1 line-clamp-2">{member.role}</p>

                    {/* Key metric */}
                    <div className="flex justify-between items-center mb-1">
                      <div>
                        <div className="text-sm font-black" style={{ color: [colors.blue, colors.red, colors.orange, colors.blue][idx] }}>
                          {memberMetrics[idx].metric1}
                        </div>
                        <div className="text-[7px] text-gray-600">{memberMetrics[idx].label1}</div>
                      </div>
                      <div>
                        <div className="text-[10px] font-black text-gray-700">{memberMetrics[idx].metric2}</div>
                        <div className="text-[7px] text-gray-600">{memberMetrics[idx].label2}</div>
                      </div>
                    </div>

                    {/* Companies */}
                    <div className="text-[7px] text-gray-600 mb-0.5">
                      <span className="font-bold">Companies:</span> {member.experience.slice(0, 2).map(e => e.company.split(' ')[0]).join(', ')}
                    </div>

                    {/* GPA bar */}
                    <div className="mb-0.5">
                      <div className="flex justify-between text-[7px] mb-0.5">
                        <span className="font-bold">Masters GPA</span>
                        <span className="font-black">{member.education.masters.gpa}</span>
                      </div>
                      <div className="h-1 bg-gray-200 rounded-full overflow-hidden">
                        <div
                          className="h-full rounded-full"
                          style={{
                            width: `${(parseFloat(member.education.masters.gpa) / 4.0) * 100}%`,
                            backgroundColor: [colors.blue, colors.red, colors.orange, colors.blue][idx]
                          }}
                        />
                      </div>
                    </div>

                    {/* Top skills tags */}
                    <div className="flex flex-wrap gap-0.5">
                      {member.topSkills.slice(0, 3).map((skill, sIdx) => (
                        <span key={sIdx} className="text-[7px] px-1 py-0.5 rounded text-white font-semibold" style={{ backgroundColor: [colors.blue, colors.red, colors.orange][sIdx % 3] }}>
                          {skill.length > 10 ? skill.substring(0, 10) + '...' : skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Row 2: Skills Radar + Tech Stack + Timeline */}
            <div className="grid grid-cols-3 gap-2 mb-2">

              {/* Skills Radar Chart */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="border border-blue-500 rounded p-2"
              >
                <h3 className="text-[9px] font-black text-gray-800 mb-0.5 uppercase tracking-wide">Team Skills Matrix</h3>
                <div className="h-36">
                  <ResponsiveContainer width="100%" height="100%">
                    <RadarChart data={skillRadarData}>
                      <PolarGrid stroke="#E5E7EB" />
                      <PolarAngleAxis dataKey="skill" tick={{ fontSize: 8, fill: '#374151' }} />
                      <PolarRadiusAxis angle={90} domain={[0, 5]} tick={{ fontSize: 7 }} />
                      <Radar name="Mathew" dataKey="Mathew" stroke={colors.blue} fill={colors.blue} fillOpacity={0.2} strokeWidth={1.5} />
                      <Radar name="Rahil" dataKey="Rahil" stroke={colors.red} fill={colors.red} fillOpacity={0.2} strokeWidth={1.5} />
                      <Radar name="Siddarth" dataKey="Siddarth" stroke={colors.orange} fill={colors.orange} fillOpacity={0.2} strokeWidth={1.5} />
                      <Radar name="Shreyas" dataKey="Shreyas" stroke="#6B7280" fill="#6B7280" fillOpacity={0.1} strokeWidth={1} />
                    </RadarChart>
                  </ResponsiveContainer>
                </div>
                <div className="grid grid-cols-4 gap-0.5 text-[7px] mt-0.5">
                  <div className="flex items-center gap-0.5">
                    <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: colors.blue }} />
                    <span>Mathew</span>
                  </div>
                  <div className="flex items-center gap-0.5">
                    <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: colors.red }} />
                    <span>Rahil</span>
                  </div>
                  <div className="flex items-center gap-0.5">
                    <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: colors.orange }} />
                    <span>Siddarth</span>
                  </div>
                  <div className="flex items-center gap-0.5">
                    <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: colors.gray }} />
                    <span>Shreyas</span>
                  </div>
                </div>
              </motion.div>

              {/* Tech Stack Distribution */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="border border-red-500 rounded p-2"
              >
                <h3 className="text-[9px] font-black text-gray-800 mb-1 uppercase tracking-wide">Technology Coverage</h3>
                <div className="space-y-1">
                  {techStackData.map((tech, idx) => (
                    <div key={idx}>
                      <div className="flex justify-between text-[8px] mb-0.5">
                        <span className="font-bold">{tech.name}</span>
                        <span className="font-black">{tech.count}/4</span>
                      </div>
                      <div className="h-1.5 bg-gray-100 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: `${(tech.count / 4) * 100}%` }}
                          transition={{ delay: 0.6 + idx * 0.1, duration: 0.5 }}
                          className="h-full rounded-full"
                          style={{ backgroundColor: tech.color }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Experience Timeline */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="border border-orange-500 rounded p-2"
              >
                <h3 className="text-[9px] font-black text-gray-800 mb-1 uppercase tracking-wide">Career Trajectory</h3>
                <div className="h-36">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={experienceTimeline}>
                      <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
                      <XAxis dataKey="year" tick={{ fontSize: 8, fill: '#374151' }} />
                      <YAxis tick={{ fontSize: 8, fill: '#374151' }} />
                      <Line type="monotone" dataKey="events" stroke={colors.orange} strokeWidth={2} dot={{ fill: colors.orange, r: 3 }} />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
                <p className="text-[7px] text-gray-600 mt-0.5 text-center">Major career events & achievements (2019-2025)</p>
              </motion.div>
            </div>

            {/* Row 3: Company Exposure + Project Categories */}
            <div className="grid grid-cols-2 gap-2 mb-2">

              {/* Company Exposure */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7 }}
                className="border border-blue-500 rounded p-2"
              >
                <h3 className="text-[9px] font-black text-gray-800 mb-1 uppercase tracking-wide">Enterprise Exposure</h3>
                <div className="grid grid-cols-2 gap-1.5">
                  {companyData.map((company, idx) => (
                    <div key={idx} className="flex items-center gap-1.5 p-1 bg-gray-50 rounded">
                      <div className="w-6 h-6 rounded-full flex items-center justify-center text-white font-black text-[8px]" style={{ backgroundColor: [colors.blue, colors.red, colors.orange][idx % 3] }}>
                        {company.name.charAt(0)}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="text-[8px] font-black text-gray-900 truncate">{company.name}</div>
                        <div className="text-[7px] text-gray-600">{company.type}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Project Categories */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
                className="border border-red-500 rounded p-2"
              >
                <h3 className="text-[9px] font-black text-gray-800 mb-1 uppercase tracking-wide">Project Portfolio</h3>
                <div className="h-32">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={projectCategories} layout="vertical">
                      <XAxis type="number" tick={{ fontSize: 8 }} />
                      <YAxis type="category" dataKey="category" tick={{ fontSize: 7 }} width={70} />
                      <Bar dataKey="count" radius={[0, 3, 3, 0]}>
                        {projectCategories.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                      </Bar>
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </motion.div>
            </div>

            {/* Row 4: Education & Certifications */}
            <div className="grid grid-cols-4 gap-1.5">
              {teamMembers.map((member, idx) => (
                <div key={member.id} className="border rounded p-1.5 bg-gradient-to-br from-gray-50 to-white">
                  <h4 className="text-[8px] font-black text-gray-800 mb-0.5">{member.name.split(' ')[0]}'s Education</h4>

                  <div className="mb-1">
                    <div className="text-[7px] font-bold text-blue-600">MS - UW</div>
                    <div className="text-[7px] text-gray-600 line-clamp-1">{member.education.masters.degree.split('(')[0].substring(0, 30)}</div>
                    <div className="text-[9px] font-black" style={{ color: [colors.blue, colors.red, colors.orange, colors.blue][idx] }}>GPA: {member.education.masters.gpa}</div>
                  </div>

                  <div className="mb-1">
                    <div className="text-[7px] font-bold text-gray-700">BS - {member.education.bachelors.school.split(' ')[0]}</div>
                    <div className="text-[7px] text-gray-600 line-clamp-1">{member.education.bachelors.degree.split(',')[0].substring(0, 30)}</div>
                  </div>

                  {member.certifications && member.certifications.length > 0 && (
                    <div>
                      <div className="text-[7px] font-bold text-gray-700 mb-0.5">Honors:</div>
                      {member.certifications.slice(0, 1).map((cert, cIdx) => (
                        <div key={cIdx} className="text-[7px] text-gray-600 leading-tight line-clamp-1">• {cert}</div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Footer - LAST element of page 1 */}
          <div className="h-6 bg-gray-900 flex items-center justify-center force-page-break">
            <div className="text-white text-[8px] font-medium">
              PAGE 1 of 2 | Team Analytics Dashboard | Generated {new Date().toLocaleDateString()}
            </div>
          </div>

          {/* Header P2 - CONDENSED */}
          <div className="h-[15mm] px-6 py-1.5 bg-gradient-to-r from-gray-900 to-gray-700">
            <h2 className="text-xl font-black text-white mb-0.5">EXPERIENCE & IMPACT ANALYSIS</h2>
            <p className="text-white/80 text-[8px]">Detailed breakdown of individual contributions, achievements, and technical depth</p>
          </div>

          <div className="px-6 py-1.5">

            {/* Individual experience deep dives */}
            <div className="grid grid-cols-2 gap-2 mb-2">
              {teamMembers.map((member, idx) => (
                <motion.div
                  key={member.id}
                  initial={{ opacity: 0, x: idx % 2 === 0 ? -20 : 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.15 }}
                  className="border rounded overflow-hidden team-member-card"
                  style={{ borderColor: [colors.blue, colors.red, colors.orange, colors.blue][idx] }}
                >
                  {/* Member header - CONDENSED */}
                  <div className="p-1.5 bg-gradient-to-r" style={{ backgroundImage: `linear-gradient(135deg, ${[colors.blue, colors.red, colors.orange, colors.blue][idx]}15, ${[colors.blue, colors.red, colors.orange, colors.blue][idx]}05)` }}>
                    <div className="flex items-start gap-1.5">
                      <img src={member.image} alt={member.name} className="w-8 h-8 rounded-full object-cover border-2" style={{ borderColor: [colors.blue, colors.red, colors.orange, colors.blue][idx] }} />
                      <div className="flex-1">
                        <h3 className="text-[9px] font-black text-gray-900">{member.name}</h3>
                        <p className="text-[7px] text-gray-700 leading-tight">{member.role}</p>
                        <div className="flex gap-1 text-[7px]">
                          <span className="font-bold">{member.phone}</span>
                          <span className="text-gray-600">|</span>
                          <span className="text-gray-700">{member.location}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Professional summary - CONDENSED */}
                  <div className="px-1.5 py-1 bg-gray-50 border-b">
                    <p className="text-[7px] leading-tight text-gray-800 line-clamp-2">{member.summary}</p>
                  </div>

                  {/* Experience entries - CONDENSED */}
                  <div className="p-1.5">
                    <h4 className="text-[7px] font-black text-gray-800 mb-0.5 uppercase tracking-wide">Career History</h4>
                    <div className="space-y-1">
                      {member.experience.slice(0, 3).map((exp, expIdx) => (
                        <div key={expIdx} className="relative pl-2 border-l" style={{ borderColor: [colors.blue, colors.red, colors.orange][expIdx % 3] }}>
                          <div className="absolute -left-0.5 top-0 w-1 h-1 rounded-full" style={{ backgroundColor: [colors.blue, colors.red, colors.orange][expIdx % 3] }} />

                          <div className="mb-0.5">
                            <div className="text-[7px] font-black text-gray-900">{exp.company}</div>
                            <div className="text-[7px] text-gray-700">{exp.role}</div>
                            <div className="text-[7px] text-gray-500">{exp.duration}</div>
                          </div>

                          <ul className="space-y-0.5">
                            {exp.achievements.slice(0, 1).map((achievement, achIdx) => (
                              <li key={achIdx} className="text-[7px] leading-tight text-gray-700 flex">
                                <span className="mr-1">•</span>
                                <span className="line-clamp-1">{achievement}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Technical skills - CONDENSED */}
                  <div className="px-1.5 pb-1.5">
                    <h4 className="text-[7px] font-black text-gray-800 mb-0.5 uppercase tracking-wide">Technical Arsenal</h4>
                    <div className="space-y-0.5">
                      {Object.entries(member.technicalSkills).slice(0, 3).map(([category, skills], catIdx) => (
                        <div key={catIdx}>
                          <div className="text-[7px] font-bold text-gray-700">{category}: <span className="font-normal">{skills.slice(0, 4).join(', ')}</span></div>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Bottom section: Key achievements + Contact - CONDENSED */}
            <div className="grid grid-cols-3 gap-1.5">

              {/* Aggregate achievements - CONDENSED */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                className="col-span-2 border border-blue-500 rounded p-1.5"
              >
                <h3 className="text-[8px] font-black text-gray-800 mb-1 uppercase tracking-wide">Collective Impact Metrics</h3>

                <div className="grid grid-cols-4 gap-1 mb-1.5">
                  <div className="text-center p-1 bg-blue-50 rounded">
                    <div className="text-base font-black text-blue-600">$2M+</div>
                    <div className="text-[8px] text-gray-700">Cost Savings</div>
                  </div>
                  <div className="text-center p-1 bg-red-50 rounded">
                    <div className="text-base font-black text-red-600">100+</div>
                    <div className="text-[8px] text-gray-700">Integrations</div>
                  </div>
                  <div className="text-center p-1 bg-orange-50 rounded">
                    <div className="text-base font-black text-orange-600">15+</div>
                    <div className="text-[8px] text-gray-700">F500 Clients</div>
                  </div>
                  <div className="text-center p-1 bg-blue-50 rounded">
                    <div className="text-base font-black text-blue-600">98%</div>
                    <div className="text-[8px] text-gray-700">On-Time</div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-1.5">
                  <div>
                    <h4 className="text-[7px] font-black text-gray-800 mb-0.5 uppercase">Key Achievements</h4>
                    <ul className="space-y-0.5">
                      <li className="text-[7px] text-gray-700 flex leading-tight"><span className="text-blue-600 font-bold mr-1">•</span> $250K revenue recovery via data pipeline optimization</li>
                      <li className="text-[7px] text-gray-700 flex leading-tight"><span className="text-red-600 font-bold mr-1">•</span> Beat Zoho in competitive RFP at Dubai Islamic Bank</li>
                      <li className="text-[7px] text-gray-700 flex leading-tight"><span className="text-orange-600 font-bold mr-1">•</span> $1M annual savings via eBPF monitoring framework</li>
                      <li className="text-[7px] text-gray-700 flex leading-tight"><span className="text-blue-600 font-bold mr-1">•</span> 70% batch-run time reduction in supply chain ops</li>
                      <li className="text-[7px] text-gray-700 flex leading-tight"><span className="text-red-600 font-bold mr-1">•</span> IEEE Best Paper Award winner (CSITSS-23)</li>
                      <li className="text-[7px] text-gray-700 flex leading-tight"><span className="text-orange-600 font-bold mr-1">•</span> 500+ professionals certified on o9 platform</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-[7px] font-black text-gray-800 mb-0.5 uppercase">Industries Served</h4>
                    <div className="flex flex-wrap gap-0.5 mb-1.5">
                      {['Finance', 'Technology', 'Supply Chain', 'Healthcare', 'Retail', 'Banking'].map((industry, idx) => (
                        <span key={idx} className="text-[8px] px-1 py-0.5 bg-gray-100 text-gray-800 rounded-full font-semibold">
                          {industry}
                        </span>
                      ))}
                    </div>

                    <h4 className="text-[7px] font-black text-gray-800 mb-0.5 uppercase">Leadership Impact</h4>
                    <ul className="space-y-0.5">
                      <li className="text-[7px] text-gray-700 leading-tight">• Managed $60K annual budget (SAP Ambassador)</li>
                      <li className="text-[7px] text-gray-700 leading-tight">• Led 15-person development team</li>
                      <li className="text-[7px] text-gray-700 leading-tight">• 20+ global implementations</li>
                      <li className="text-[7px] text-gray-700 leading-tight">• 1,500+ employees represented</li>
                    </ul>
                  </div>
                </div>
              </motion.div>

              {/* Contact card - CONDENSED */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9 }}
                className="border border-orange-500 rounded p-1.5"
              >
                <h3 className="text-[8px] font-black text-gray-800 mb-1 uppercase tracking-wide">Contact Us</h3>

                <div className="space-y-1.5">
                  {teamMembers.map((member, idx) => (
                    <div key={member.id} className="pb-1 border-b border-gray-200 last:border-0">
                      <div className="text-[7px] font-black text-gray-900">{member.name.split(' ')[0]} {member.name.split(' ')[member.name.split(' ').length - 1]}</div>
                      <div className="text-[7px] text-gray-600 mt-0.5 line-clamp-1">{member.email}</div>
                      <div className="text-[7px] text-gray-500 line-clamp-1">{member.linkedin}</div>
                    </div>
                  ))}
                </div>

                <div className="mt-1.5 pt-1.5 border-t border-gray-200">
                  <div className="text-[7px] text-gray-700 text-center font-medium">
                    <div className="mb-0.5">University of Washington</div>
                    <div className="text-[8px] font-black text-blue-600">iSchool Class of 2026</div>
                    <div className="mt-0.5 text-[7px] text-gray-500">Seattle, WA</div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Footer P2 */}
          <div className="h-6 bg-gray-900 flex items-center justify-center">
            <div className="text-white text-[8px] font-medium">
              PAGE 2 of 2 | Detailed Experience Analysis | Available for Full-Time Opportunities Starting June 2026
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

          svg {
            shape-rendering: geometricPrecision;
          }

          @page {
            size: A4 portrait;
            margin: 0;
          }

          img {
            -webkit-print-color-adjust: exact;
            print-color-adjust: exact;
          }

          .page-break {
            page-break-after: always;
          }
        }
      `}</style>
    </div>
  );
};

export default Prototype6;
