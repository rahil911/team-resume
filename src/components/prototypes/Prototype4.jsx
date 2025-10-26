import { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { teamMembers, skillsTaxonomy } from '../../data/teamData';

const Prototype4 = () => {
  const printRef = useRef();
  const [hoveredCell, setHoveredCell] = useState(null);

  // Order members: Mathew, Rahil, Siddarth, Shreyas
  const orderedMembers = [
    teamMembers.find(m => m.id === 'mathew'),
    teamMembers.find(m => m.id === 'rahil'),
    teamMembers.find(m => m.id === 'siddarth'),
    teamMembers.find(m => m.id === 'shreyas')
  ];

  // Enhanced skill breakdown with ALL tools from taxonomy
  const getDetailedSkills = () => {
    const allSkills = [];

    Object.entries(skillsTaxonomy).forEach(([category, data]) => {
      const skills = [];
      if (data.tools) skills.push(...data.tools);
      if (data.platforms) skills.push(...data.platforms);
      if (data.frameworks) skills.push(...data.frameworks);
      if (data.services) skills.push(...data.services);
      if (data.monitoring) skills.push(...data.monitoring);
      if (data.databases) skills.push(...data.databases);
      if (data.skills) skills.push(...data.skills);
      if (data.languages) skills.push(...data.languages);
      if (data.concepts) skills.push(...data.concepts);
      if (data.cicd) skills.push(...data.cicd);
      if (data.orchestration) skills.push(...data.orchestration);

      if (skills.length > 0) {
        allSkills.push({
          category,
          skills: [...new Set(skills)], // Remove duplicates
          proficiency: data.proficiency
        });
      }
    });

    return allSkills;
  };

  const detailedSkills = getDetailedSkills();

  return (
    <div className="bg-white">
      <style>{`
        @media print {
          .no-print { display: none !important; }
          .force-page-break { page-break-after: always !important; }

          /* Ensure proper page sizing */
          @page {
            size: A4;
            margin: 0;
          }
        }

        .a4-container {
          width: 210mm;
          padding: 5mm;
          background: white;
          font-family: 'Inter', sans-serif;
        }

        .team-member-card {
          page-break-inside: avoid !important;
        }
      `}</style>

      {/* PAGE 1 - SKILLS MATRIX */}
      <div ref={printRef} className="a4-container">
        {/* Header */}
        <div style={{ padding: '3mm 5mm 1.5mm 5mm' }} className="border-b-2 border-[#14B8A6]">
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <h1 style={{ fontSize: '13px', marginBottom: '0.5px' }} className="font-black text-gray-900">
              COMPREHENSIVE SKILLS MATRIX
            </h1>
            <p style={{ fontSize: '8px' }} className="text-gray-600 font-medium">
              Technical Competency Deep-Dive • 4 Engineers • 13 Years Combined • Fortune 500 Experience
            </p>
          </motion.div>
        </div>

        {/* Main Skills Grid */}
        <div style={{ padding: '2mm 5mm' }}>
          <div className="grid grid-cols-3 gap-1.5">
            {detailedSkills.map((skillGroup, idx) => (
              <motion.div
                key={skillGroup.category}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.05 }}
                className="border border-gray-200 rounded p-1 bg-white"
              >
                {/* Category Header */}
                <div className="mb-0.5 pb-0.5 border-b border-[#14B8A6]">
                  <h3 style={{ fontSize: '8px' }} className="font-black text-gray-900 uppercase tracking-wide">
                    {skillGroup.category}
                  </h3>
                  {/* Team proficiency indicators */}
                  <div className="flex gap-0.5 mt-0.5">
                    {orderedMembers.map((member, memberIdx) => (
                      <div key={member.id} className="flex items-center gap-0.5">
                        <div
                          style={{ width: '6px', height: '6px' }}
                          className={`rounded-full ${
                            skillGroup.proficiency[memberIdx] === 5 ? 'bg-[#14B8A6]' :
                            skillGroup.proficiency[memberIdx] === 4 ? 'bg-teal-400' :
                            skillGroup.proficiency[memberIdx] === 3 ? 'bg-[#FFA726]' :
                            'bg-gray-300'
                          }`}
                          title={`${member.name.split(' ')[0]}: ${skillGroup.proficiency[memberIdx]}/5`}
                        />
                        <span style={{ fontSize: '8px' }} className="text-gray-500">
                          {member.name.split(' ')[0][0]}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Skills List */}
                <div className="flex flex-wrap gap-0.5">
                  {skillGroup.skills.map((skill, skillIdx) => (
                    <span
                      key={skillIdx}
                      style={{ fontSize: '8px', padding: '0.5px 2px' }}
                      className="bg-gray-50 text-gray-700 border border-gray-300 rounded font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Team Overview Cards - Compact */}
        <div style={{ padding: '1.5mm 5mm' }}>
          <div className="border-t border-gray-200 pt-0.5">
            <h2 style={{ fontSize: '8px', marginBottom: '1mm' }} className="font-black text-gray-900 uppercase flex items-center gap-1">
              <span style={{ width: '2px', height: '8px' }} className="bg-[#FFA726]"></span>
              Team Member Profiles
            </h2>
            <div className="grid grid-cols-4 gap-1">
              {orderedMembers.map((member, idx) => (
                <motion.div
                  key={member.id}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.3 + idx * 0.05 }}
                  className="bg-gradient-to-br from-gray-50 to-white border border-gray-200 rounded p-1"
                >
                  <div className="flex items-start gap-0.5 mb-0.5">
                    <div style={{ width: '16px', height: '16px', fontSize: '8px' }} className="rounded-full bg-gradient-to-br from-[#14B8A6] to-[#0d9488] flex items-center justify-center text-white font-bold flex-shrink-0">
                      {member.name.split(' ')[0][0]}{member.name.split(' ')[1]?.[0]}
                    </div>
                    <div className="min-w-0 flex-1">
                      <h3 style={{ fontSize: '8px', lineHeight: '1.1' }} className="font-bold text-gray-900">
                        {member.name.split(' ').slice(0, 2).join(' ')}
                      </h3>
                      <p style={{ fontSize: '8px', lineHeight: '1.1' }} className="text-[#14B8A6] font-semibold">
                        {member.role}
                      </p>
                    </div>
                  </div>

                  <div style={{ fontSize: '8px' }} className="space-y-0.5">
                    <div className="flex items-center justify-between">
                      <span className="text-gray-600">Exp:</span>
                      <span className="font-semibold text-gray-900">{member.yearsExperience}y</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-600">GPA:</span>
                      <span className="font-semibold text-gray-900">{member.education.masters.gpa}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-600">Impact:</span>
                      <span className="font-bold text-[#FFA726]">{member.keyMetrics.primary}</span>
                    </div>
                  </div>

                  <div style={{ fontSize: '8px' }} className="mt-0.5 pt-0.5 border-t border-gray-200">
                    <div className="text-gray-700 font-medium truncate" title={member.experience[0].company}>
                      {member.experience[0].company}
                    </div>
                    <div className="text-gray-500 truncate">{member.experience[0].role}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Core Technical Specializations */}
        <div style={{ padding: '1.5mm 5mm' }}>
          <div className="border-t border-gray-200 pt-0.5">
            <h2 style={{ fontSize: '8px', marginBottom: '1mm' }} className="font-black text-gray-900 uppercase flex items-center gap-1">
              <span style={{ width: '2px', height: '8px' }} className="bg-[#14B8A6]"></span>
              Core Technical Specializations
            </h2>
            <div className="grid grid-cols-3 gap-1">
              <div className="bg-gradient-to-br from-teal-50 to-emerald-50 border border-teal-200 rounded p-1">
                <div style={{ fontSize: '8px' }} className="font-bold text-teal-900 mb-0.5">Cloud Architecture</div>
                <div style={{ fontSize: '8px', lineHeight: '1.2' }} className="text-gray-700">
                  AWS (DynamoDB, Lambda, S3), Azure, GCP • Kubernetes orchestration • eBPF monitoring • Microservices • API Design
                </div>
              </div>
              <div className="bg-gradient-to-br from-blue-50 to-cyan-50 border border-blue-200 rounded p-1">
                <div style={{ fontSize: '8px' }} className="font-bold text-blue-900 mb-0.5">AI/ML Engineering</div>
                <div style={{ fontSize: '8px', lineHeight: '1.2' }} className="text-gray-700">
                  Multi-agent orchestration (LangChain, CrewAI, SWARM) • PyTorch, TensorFlow • NLP (NLTK, Hugging Face) • 90% accuracy
                </div>
              </div>
              <div className="bg-gradient-to-br from-purple-50 to-pink-50 border border-purple-200 rounded p-1">
                <div style={{ fontSize: '8px' }} className="font-bold text-purple-900 mb-0.5">Data Engineering</div>
                <div style={{ fontSize: '8px', lineHeight: '1.2' }} className="text-gray-700">
                  ETL Pipelines • PySpark, Hadoop, Kafka • PostgreSQL, MongoDB, Cassandra • Real-time processing • Big Data
                </div>
              </div>
              <div className="bg-gradient-to-br from-orange-50 to-yellow-50 border border-orange-200 rounded p-1">
                <div style={{ fontSize: '8px' }} className="font-bold text-orange-900 mb-0.5">Full-Stack Development</div>
                <div style={{ fontSize: '8px', lineHeight: '1.2' }} className="text-gray-700">
                  React, Node.js, Python, Django • Spring Boot, Flask • RESTful APIs • Microservices • CI/CD automation
                </div>
              </div>
              <div className="bg-gradient-to-br from-red-50 to-pink-50 border border-red-200 rounded p-1">
                <div style={{ fontSize: '8px' }} className="font-bold text-red-900 mb-0.5">DevOps & CI/CD</div>
                <div style={{ fontSize: '8px', lineHeight: '1.2' }} className="text-gray-700">
                  Prometheus, Grafana, GitHub Actions • Docker, Kubernetes • Infrastructure as Code • Monitoring & observability
                </div>
              </div>
              <div className="bg-gradient-to-br from-yellow-50 to-amber-50 border border-yellow-200 rounded p-1">
                <div style={{ fontSize: '8px' }} className="font-bold text-yellow-900 mb-0.5">Product Leadership</div>
                <div style={{ fontSize: '8px', lineHeight: '1.2' }} className="text-gray-700">
                  Stakeholder management • Agile/Scrum • JIRA, Confluence • 20+ global implementations • Fortune 500 experience
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Education & Certifications */}
        <div style={{ padding: '1.5mm 5mm' }}>
          <div className="border-t border-gray-200 pt-0.5">
            <h2 style={{ fontSize: '8px', marginBottom: '1mm' }} className="font-black text-gray-900 uppercase flex items-center gap-1">
              <span style={{ width: '2px', height: '8px' }} className="bg-[#FFA726]"></span>
              Education & Key Credentials
            </h2>
            <div className="grid grid-cols-4 gap-1">
              <div className="bg-gradient-to-br from-teal-50 to-emerald-50 border border-teal-200 rounded p-1">
                <div style={{ fontSize: '8px' }} className="font-bold text-teal-900 mb-0.5">Masters (MSIM)</div>
                <div style={{ fontSize: '8px', lineHeight: '1.2' }} className="text-gray-700">
                  University of Washington • Information Management • Team avg GPA: 3.8/4.0
                </div>
              </div>
              <div className="bg-gradient-to-br from-blue-50 to-cyan-50 border border-blue-200 rounded p-1">
                <div style={{ fontSize: '8px' }} className="font-bold text-blue-900 mb-0.5">Cloud Certified</div>
                <div style={{ fontSize: '8px', lineHeight: '1.2' }} className="text-gray-700">
                  AWS, Azure, GCP professionals • Multi-cloud architecture • DynamoDB specialist
                </div>
              </div>
              <div className="bg-gradient-to-br from-purple-50 to-pink-50 border border-purple-200 rounded p-1">
                <div style={{ fontSize: '8px' }} className="font-bold text-purple-900 mb-0.5">13 Years Exp</div>
                <div style={{ fontSize: '8px', lineHeight: '1.2' }} className="text-gray-700">
                  Combined team experience • Fortune 500 companies • Enterprise-scale systems
                </div>
              </div>
              <div className="bg-gradient-to-br from-orange-50 to-yellow-50 border border-orange-200 rounded p-1">
                <div style={{ fontSize: '8px' }} className="font-bold text-orange-900 mb-0.5">Elite Companies</div>
                <div style={{ fontSize: '8px', lineHeight: '1.2' }} className="text-gray-700">
                  Morgan Stanley • Amazon Web Services • o9 Solutions • Global impact
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Notable Projects & Achievements */}
        <div style={{ padding: '1.5mm 5mm' }}>
          <div className="border-t border-gray-200 pt-0.5">
            <h2 style={{ fontSize: '8px', marginBottom: '1mm' }} className="font-black text-gray-900 uppercase flex items-center gap-1">
              <span style={{ width: '2px', height: '8px' }} className="bg-[#14B8A6]"></span>
              Notable Projects & Impact
            </h2>
            <div className="grid grid-cols-2 gap-1">
              <div className="bg-gradient-to-br from-teal-50 to-emerald-50 border border-teal-200 rounded p-1">
                <div style={{ fontSize: '8px' }} className="font-black text-teal-900 mb-0.5">AI-Powered Revenue Optimization</div>
                <div style={{ fontSize: '8px', lineHeight: '1.2' }} className="text-gray-700">
                  Built scalable $250K revenue recovery system using Azure/AWS pipeline architecture. Reduced data processing from 2 weeks to 2 days using Pandas, ETL pipelines, and DynamoDB optimization. Led 10+ person team.
                </div>
              </div>
              <div className="bg-gradient-to-br from-orange-50 to-yellow-50 border border-orange-200 rounded p-1">
                <div style={{ fontSize: '8px' }} className="font-black text-orange-900 mb-0.5">Multi-Agent Orchestration Platform</div>
                <div style={{ fontSize: '8px', lineHeight: '1.2' }} className="text-gray-700">
                  Prototyped multi-agent orchestration with LangChain & CrewAI during 9 domain agents. Integrated ETL ML pipelines (Python, React, Node.js) at Morgan Stanley. 90% ML model accuracy in production.
                </div>
              </div>
              <div className="bg-gradient-to-br from-blue-50 to-cyan-50 border border-blue-200 rounded p-1">
                <div style={{ fontSize: '8px' }} className="font-black text-blue-900 mb-0.5">Enterprise eBPF Monitoring</div>
                <div style={{ fontSize: '8px', lineHeight: '1.2' }} className="text-gray-700">
                  Engineered AWS cost optimization using ETL Security. Led technical eBPF system processing 75M+ transactions, achieving 99% uptime across microservices with Kubernetes and distributed systems.
                </div>
              </div>
              <div className="bg-gradient-to-br from-purple-50 to-pink-50 border border-purple-200 rounded p-1">
                <div style={{ fontSize: '8px' }} className="font-black text-purple-900 mb-0.5">Global Product Implementations</div>
                <div style={{ fontSize: '8px', lineHeight: '1.2' }} className="text-gray-700">
                  Drove 70% supply chain performance improvement across 20+ global implementations. Managed $35K profit bootstrapped startup (o9 Solutions). Expertise in Advanced Planning Systems and stakeholder management.
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Key Metrics Bar */}
        <div style={{ padding: '1.5mm 5mm' }} className="bg-gradient-to-r from-[#14B8A6] to-[#0d9488] force-page-break">
          <div style={{ fontSize: '8px' }} className="flex items-center justify-between text-white">
            <div className="font-bold">
              Full-Stack • Cloud-Native • AI/ML • Product-Driven
            </div>
            <div className="flex items-center gap-2">
              <span>100+ Projects</span>
              <span>•</span>
              <span>Fortune 500</span>
              <span>•</span>
              <span>$2M+ Savings</span>
            </div>
          </div>
        </div>

      {/* PAGE 2 - DETAILED BREAKDOWN */}
        {/* Header */}
        <div style={{ padding: '4mm 6mm 2mm 6mm' }} className="border-b-2 border-[#FFA726]">
          <h1 style={{ fontSize: '14px', marginBottom: '1px' }} className="font-black text-gray-900">
            INDIVIDUAL TECHNICAL PROFILES
          </h1>
          <p style={{ fontSize: '8px' }} className="text-gray-600 font-medium">
            Detailed Skills Inventory • Experience Highlights • Education & Certifications
          </p>
        </div>

        {/* Individual Member Details */}
        <div style={{ padding: '3mm 6mm' }}>
          <div className="grid grid-cols-2 gap-2">
            {orderedMembers.map((member, idx) => (
              <motion.div
                key={member.id}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.1 }}
                className="border border-gray-300 rounded p-2 bg-white"
                style={{ maxHeight: '130mm' }}
              >
                {/* Member Header */}
                <div className="mb-1.5 pb-1 border-b border-[#14B8A6]">
                  <div className="flex items-center gap-1.5 mb-1">
                    <div style={{ width: '24px', height: '24px', fontSize: '10px' }} className="rounded-full bg-gradient-to-br from-[#14B8A6] to-[#0d9488] flex items-center justify-center text-white font-bold">
                      {member.name.split(' ')[0][0]}{member.name.split(' ')[1]?.[0]}
                    </div>
                    <div>
                      <h2 style={{ fontSize: '9px', lineHeight: '1.1' }} className="font-black text-gray-900">
                        {member.name.toUpperCase()}
                      </h2>
                      <p style={{ fontSize: '8px', lineHeight: '1.1' }} className="text-[#14B8A6] font-bold">
                        {member.role}
                      </p>
                    </div>
                  </div>

                  {/* Contact Info */}
                  <div style={{ fontSize: '7px' }} className="grid grid-cols-2 gap-x-1">
                    <div className="flex items-center gap-0.5">
                      <span className="text-gray-600">Email:</span>
                      <span className="text-gray-900 font-medium truncate">{member.email.split('@')[0]}</span>
                    </div>
                    <div className="flex items-center gap-0.5">
                      <span className="text-gray-600">Phone:</span>
                      <span className="text-gray-900 font-medium">{member.phone}</span>
                    </div>
                    <div className="flex items-center gap-0.5">
                      <span className="text-gray-600">Location:</span>
                      <span className="text-gray-900 font-medium">{member.location}</span>
                    </div>
                    <div className="flex items-center gap-0.5">
                      <span className="text-gray-600">LinkedIn:</span>
                      <span className="text-gray-900 font-medium truncate">{member.linkedin?.split('/').pop() || 'Available'}</span>
                    </div>
                  </div>
                </div>

                {/* Summary */}
                <div className="mb-1.5">
                  <div className="bg-gradient-to-r from-orange-50 to-yellow-50 border-l-2 border-[#FFA726] p-1 rounded">
                    <p style={{ fontSize: '7px', lineHeight: '1.3' }} className="text-gray-800">
                      {member.summary}
                    </p>
                  </div>
                </div>

                {/* Technical Skills Grid */}
                <div className="mb-1.5">
                  <h3 style={{ fontSize: '8px' }} className="font-black text-gray-900 uppercase mb-0.5 flex items-center gap-0.5">
                    <span style={{ width: '2px', height: '8px' }} className="bg-[#14B8A6]"></span>
                    Technical Skills
                  </h3>
                  <div className="space-y-0.5">
                    {Object.entries(member.technicalSkills).map(([category, skills]) => (
                      <div key={category} style={{ fontSize: '7px' }}>
                        <span className="font-bold text-gray-700">{category}:</span>
                        <span className="text-gray-600 ml-0.5">
                          {Array.isArray(skills) ? skills.join(', ') : skills}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Experience Highlights */}
                <div className="mb-1.5">
                  <h3 style={{ fontSize: '8px' }} className="font-black text-gray-900 uppercase mb-0.5 flex items-center gap-0.5">
                    <span style={{ width: '2px', height: '8px' }} className="bg-[#FFA726]"></span>
                    Experience
                  </h3>
                  <div className="space-y-1">
                    {member.experience.slice(0, 1).map((exp, expIdx) => (
                      <div key={expIdx} className="bg-gray-50 rounded p-1 border border-gray-200">
                        <div className="flex items-start justify-between mb-0.5">
                          <div>
                            <div style={{ fontSize: '7px' }} className="font-bold text-gray-900">{exp.company}</div>
                            <div style={{ fontSize: '7px' }} className="text-gray-600">{exp.role}</div>
                          </div>
                          <div style={{ fontSize: '7px' }} className="text-gray-500 whitespace-nowrap">
                            {exp.duration.split('–')[0].trim()}
                          </div>
                        </div>
                        <ul className="space-y-0.5">
                          {exp.achievements.slice(0, 1).map((achievement, achIdx) => (
                            <li key={achIdx} style={{ fontSize: '7px', lineHeight: '1.2' }} className="text-gray-700 pl-1 border-l border-[#14B8A6]">
                              {achievement.length > 100 ? achievement.substring(0, 100) + '...' : achievement}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Education & Certifications */}
                <div className="grid grid-cols-2 gap-1">
                  <div className="bg-gradient-to-br from-teal-50 to-emerald-50 rounded p-1 border border-teal-200">
                    <div style={{ fontSize: '7px' }} className="font-bold text-teal-900 mb-0.5">Education</div>
                    <div style={{ fontSize: '7px' }} className="text-gray-700">
                      <div className="font-semibold">UW - MSIM</div>
                      <div className="text-gray-600">GPA: {member.education.masters.gpa}</div>
                    </div>
                  </div>
                  <div className="bg-gradient-to-br from-orange-50 to-yellow-50 rounded p-1 border border-orange-200">
                    <div style={{ fontSize: '7px' }} className="font-bold text-orange-900 mb-0.5">Key Metrics</div>
                    <div style={{ fontSize: '7px' }}>
                      <div className="font-bold text-[#FFA726]">{member.keyMetrics.primary}</div>
                      <div className="text-gray-600">{member.keyMetrics.detail1}</div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Team Strengths Summary */}
        <div style={{ padding: '2mm 6mm' }}>
          <div className="border-t border-gray-300 pt-1">
            <h2 style={{ fontSize: '8px', marginBottom: '1mm' }} className="font-black text-gray-900 uppercase flex items-center gap-1">
              <span style={{ width: '2px', height: '8px' }} className="bg-[#14B8A6]"></span>
              Collective Team Strengths
            </h2>
            <div className="grid grid-cols-3 gap-1.5">
              <div className="bg-gradient-to-br from-teal-50 to-emerald-50 border border-teal-200 rounded p-1.5">
                <div style={{ fontSize: '8px' }} className="font-black text-teal-900 mb-0.5">Cloud & Infrastructure</div>
                <div style={{ fontSize: '7px', lineHeight: '1.3' }} className="text-gray-700">
                  3 experts (AWS, Azure, GCP). DynamoDB networking, Kubernetes orchestration, eBPF monitoring. $1M+ annual savings achieved.
                </div>
              </div>
              <div className="bg-gradient-to-br from-orange-50 to-yellow-50 border border-orange-200 rounded p-1.5">
                <div style={{ fontSize: '8px' }} className="font-black text-orange-900 mb-0.5">AI & Machine Learning</div>
                <div style={{ fontSize: '7px', lineHeight: '1.3' }} className="text-gray-700">
                  Multi-agent orchestration (LangChain, CrewAI, SWARM). PyTorch, TensorFlow deployment. 90% ML model accuracy in production.
                </div>
              </div>
              <div className="bg-gradient-to-br from-blue-50 to-cyan-50 border border-blue-200 rounded p-1.5">
                <div style={{ fontSize: '8px' }} className="font-black text-blue-900 mb-0.5">Product & Strategy</div>
                <div style={{ fontSize: '7px', lineHeight: '1.3' }} className="text-gray-700">
                  2 product leaders. 20+ global implementations. $35K profit bootstrapped. Fortune 500 stakeholder management.
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Complementarity Matrix */}
        <div style={{ padding: '2mm 6mm' }}>
          <div className="bg-gray-50 border border-gray-300 rounded p-1.5">
            <h3 style={{ fontSize: '8px', marginBottom: '1mm' }} className="font-black text-gray-900 uppercase">Team Skill Complementarity Matrix</h3>
            <div className="grid grid-cols-7 gap-0.5" style={{ fontSize: '7px' }}>
              {/* Headers */}
              <div className="font-bold text-gray-700 text-center">Member</div>
              {Object.keys(skillsTaxonomy).slice(0, 6).map((cat) => (
                <div key={cat} className="font-bold text-gray-700 text-center leading-tight">
                  {cat.split(' ')[0]}
                </div>
              ))}

              {/* Member rows */}
              {orderedMembers.map((member, mIdx) => (
                <>
                  <div key={`name-${member.id}`} className="font-semibold text-gray-900 truncate">
                    {member.name.split(' ')[0]}
                  </div>
                  {Object.entries(skillsTaxonomy).slice(0, 6).map(([cat, data]) => (
                    <div
                      key={`${member.id}-${cat}`}
                      style={{ height: '16px', fontSize: '7px' }}
                      className={`rounded flex items-center justify-center font-bold text-white ${
                        data.proficiency[mIdx] === 5 ? 'bg-[#14B8A6]' :
                        data.proficiency[mIdx] === 4 ? 'bg-teal-400' :
                        data.proficiency[mIdx] === 3 ? 'bg-[#FFA726]' :
                        'bg-gray-300 text-gray-600'
                      }`}
                    >
                      {data.proficiency[mIdx]}
                    </div>
                  ))}
                </>
              ))}
            </div>
            <div style={{ fontSize: '7px' }} className="mt-1 pt-1 border-t border-gray-300 flex items-center justify-between">
              <span className="font-semibold text-gray-700">Legend:</span>
              <div className="flex gap-2">
                <div className="flex items-center gap-0.5">
                  <div style={{ width: '10px', height: '10px' }} className="bg-[#14B8A6] rounded"></div>
                  <span className="text-gray-600">5=Expert</span>
                </div>
                <div className="flex items-center gap-0.5">
                  <div style={{ width: '10px', height: '10px' }} className="bg-teal-400 rounded"></div>
                  <span className="text-gray-600">4=Advanced</span>
                </div>
                <div className="flex items-center gap-0.5">
                  <div style={{ width: '10px', height: '10px' }} className="bg-[#FFA726] rounded"></div>
                  <span className="text-gray-600">3=Intermediate</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div style={{ padding: '2mm 6mm' }} className="bg-gradient-to-r from-[#FFA726] to-[#ff8f00] mt-2">
          <div style={{ fontSize: '8px' }} className="flex items-center justify-between text-white">
            <div className="font-bold">
              Contact: rahil911@uw.edu • sidbhave@uw.edu • mathewjerry07@gmail.com • shrey674@uw.edu
            </div>
            <div className="font-bold">
              Page 2 of 2
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Prototype4;
