import { useRef } from 'react';
import { motion } from 'framer-motion';
import PrintButton from '../shared/PrintButton';
import BackButton from '../shared/BackButton';
import { teamMembers, teamMetrics } from '../../data/teamData';

const Prototype3 = () => {
  const printRef = useRef();

  // Order members: Mathew, Rahil, Siddarth, Shreyas
  const orderedMembers = [
    teamMembers.find(m => m.id === 'mathew'),
    teamMembers.find(m => m.id === 'rahil'),
    teamMembers.find(m => m.id === 'siddarth'),
    teamMembers.find(m => m.id === 'shreyas')
  ];

  return (
    <>
      <BackButton />
      <PrintButton targetRef={printRef} fileName="executive-excellence-team-resume" />

      <div ref={printRef}>
        <style>{`
          .a4-container {
            width: 210mm;
            box-sizing: border-box;
            background: white;
            margin: 0 auto;
            box-shadow: 0 0 20px rgba(0,0,0,0.1);
          }

          .force-page-break {
            page-break-after: always !important;
          }

          .team-member-card {
            page-break-inside: avoid !important;
          }

          @media print {
            .a4-container {
              margin: 0;
              box-shadow: none;
            }

            body {
              -webkit-print-color-adjust: exact;
              print-color-adjust: exact;
            }

            @page {
              size: A4 portrait;
              margin: 0;
            }
          }
        `}</style>

        <div className="a4-container" style={{ fontFamily: "'Georgia', serif" }}>
          {/* ============ PAGE 1 ============ */}
          {/* Executive Header */}
          <div className="bg-gradient-to-r from-[#2C3E50] to-[#1a252f] px-6 py-2.5">
            <div className="border-l-4 border-[#B8860B] pl-4">
              <h1 className="text-xl font-bold text-white mb-0.5" style={{ fontFamily: "'Georgia', serif", letterSpacing: '0.5px' }}>
                EXECUTIVE TEAM PORTFOLIO
              </h1>
              <p className="text-gray-300 text-[8px] leading-tight max-w-4xl mt-0.5">
                Elite cross-functional team delivering enterprise AI/ML, cloud infrastructure, and product strategy solutions with proven Fortune 500 impact.
                14+ years combined experience • 15+ Fortune 500 clients • $3M+ cost savings delivered • 98.52% ML accuracy • 3.94 avg. GPA
              </p>
            </div>

            {/* Top KPIs Bar */}
            <div className="grid grid-cols-6 gap-1.5 mt-1.5 text-center">
              <div className="bg-[#B8860B]/10 border border-[#B8860B]/30 py-0.5">
                <div className="text-sm font-bold text-[#B8860B]">$3M+</div>
                <div className="text-[7px] text-gray-300 uppercase">Savings</div>
              </div>
              <div className="bg-[#B8860B]/10 border border-[#B8860B]/30 py-0.5">
                <div className="text-sm font-bold text-[#B8860B]">15+</div>
                <div className="text-[7px] text-gray-300 uppercase">F500 Clients</div>
              </div>
              <div className="bg-[#B8860B]/10 border border-[#B8860B]/30 py-0.5">
                <div className="text-sm font-bold text-[#B8860B]">100+</div>
                <div className="text-[7px] text-gray-300 uppercase">Projects</div>
              </div>
              <div className="bg-[#B8860B]/10 border border-[#B8860B]/30 py-0.5">
                <div className="text-sm font-bold text-[#B8860B]">14+</div>
                <div className="text-[7px] text-gray-300 uppercase">Years Exp</div>
              </div>
              <div className="bg-[#B8860B]/10 border border-[#B8860B]/30 py-0.5">
                <div className="text-sm font-bold text-[#B8860B]">98%</div>
                <div className="text-[7px] text-gray-300 uppercase">On-Time</div>
              </div>
              <div className="bg-[#B8860B]/10 border border-[#B8860B]/30 py-0.5">
                <div className="text-sm font-bold text-[#B8860B]">3.94</div>
                <div className="text-[7px] text-gray-300 uppercase">Avg GPA</div>
              </div>
            </div>
          </div>

          {/* Trust Bar */}
          <div className="bg-gray-100 border-b-2 border-[#B8860B]/30 px-6 py-1">
            <div className="flex items-center justify-between text-[7px]">
              <div className="flex items-center gap-1.5">
                <span className="font-bold text-[#2C3E50] uppercase tracking-wide">Trusted By:</span>
                <span className="text-gray-700 font-semibold">AWS</span>
                <span className="text-[#B8860B]">•</span>
                <span className="text-gray-700 font-semibold">Morgan Stanley</span>
                <span className="text-[#B8860B]">•</span>
                <span className="text-gray-700 font-semibold">SAP</span>
                <span className="text-[#B8860B]">•</span>
                <span className="text-gray-700 font-semibold">o9 Solutions</span>
                <span className="text-[#B8860B]">•</span>
                <span className="text-gray-700 font-semibold">Rocket Mortgage</span>
                <span className="text-[#B8860B]">•</span>
                <span className="text-gray-700 font-semibold">Microsoft</span>
              </div>
              <div className="flex gap-1.5">
                <span className="px-2 py-0.5 bg-[#B8860B] text-white font-bold text-[7px] shadow-sm">3x Star Performer</span>
                <span className="px-2 py-0.5 bg-[#2C3E50] text-white font-bold text-[7px] shadow-sm">IEEE Best Paper</span>
              </div>
            </div>
          </div>

          {/* Two Column Member Profiles - Mathew & Rahil */}
          <div className="grid grid-cols-2 gap-3 px-6 py-1.5">
            {orderedMembers.slice(0, 2).map((member, idx) => (
              <div key={member.id} className="border border-gray-300">
                {/* Header */}
                <div className="bg-gradient-to-r from-gray-50 to-white border-b-2 border-[#B8860B] p-1.5">
                  <div className="flex items-start gap-2">
                    <div className="w-11 h-11 bg-[#2C3E50] border-2 border-[#B8860B] flex-shrink-0 overflow-hidden">
                      <img src={member.image} alt={member.name} className="w-full h-full object-cover"
                        onError={(e) => { e.target.style.display = 'none'; }} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h2 className="text-[10px] font-bold text-[#2C3E50] leading-tight">{member.name}</h2>
                      <p className="text-[8px] text-[#B8860B] font-semibold">{member.role}</p>
                      <div className="flex items-center gap-1.5 text-[7px] text-gray-600 mt-0.5">
                        <span>{member.email}</span>
                        <span>•</span>
                        <span>{member.phone}</span>
                      </div>
                      <p className="text-[7px] text-gray-500 mt-0.5">{member.location} • {member.yearsExperience}+ yrs exp</p>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-1.5 space-y-0.5">
                  {/* Executive Summary */}
                  <div>
                    <h3 className="text-[7px] font-bold text-[#2C3E50] uppercase border-b border-[#B8860B]/30 pb-0.5 mb-0.5">Executive Summary</h3>
                    <p className="text-[7px] text-gray-700 leading-tight">{member.summary}</p>
                  </div>

                  {/* Education */}
                  <div>
                    <h3 className="text-[7px] font-bold text-[#2C3E50] uppercase border-b border-[#B8860B]/30 pb-0.5 mb-0.5">Education</h3>
                    <div className="space-y-0.5">
                      <div className="text-[6px]">
                        <div className="flex justify-between">
                          <span className="font-bold text-gray-800">{member.education.masters.school}</span>
                          <span className="text-gray-600">{member.education.masters.duration}</span>
                        </div>
                        <div className="text-gray-700">{member.education.masters.degree}</div>
                        <div className="text-gray-600">GPA: {member.education.masters.gpa} • {member.education.masters.location}</div>
                      </div>
                      <div className="text-[6px]">
                        <div className="flex justify-between">
                          <span className="font-bold text-gray-800">{member.education.bachelors.school}</span>
                          <span className="text-gray-600">{member.education.bachelors.duration}</span>
                        </div>
                        <div className="text-gray-700">{member.education.bachelors.degree}</div>
                        {member.education.bachelors.gpa && (
                          <div className="text-gray-600">GPA: {member.education.bachelors.gpa} • {member.education.bachelors.location}</div>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Core Competencies */}
                  <div>
                    <h3 className="text-[7px] font-bold text-[#2C3E50] uppercase border-b border-[#B8860B]/30 pb-0.5 mb-0.5">Core Competencies</h3>
                    <div className="flex flex-wrap gap-0.5">
                      {member.topSkills.map((skill, i) => (
                        <span key={i} className="text-[6px] px-1 py-0.5 bg-[#2C3E50] text-white">{skill}</span>
                      ))}
                    </div>
                  </div>

                  {/* Technical Skills */}
                  <div>
                    <h3 className="text-[7px] font-bold text-[#2C3E50] uppercase border-b border-[#B8860B]/30 pb-0.5 mb-0.5">Technical Skills</h3>
                    <div className="space-y-0">
                      {Object.entries(member.technicalSkills).map(([category, skills]) => (
                        <div key={category} className="text-[6px]">
                          <span className="font-bold text-[#B8860B]">{category}:</span>
                          <span className="text-gray-700 ml-1">{skills.join(' • ')}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Professional Experience */}
                  <div>
                    <h3 className="text-[7px] font-bold text-[#2C3E50] uppercase border-b border-[#B8860B]/30 pb-0.5 mb-0.5">Professional Experience</h3>
                    {member.experience.map((exp, i) => (
                      <div key={i} className="text-[6px] mb-0.5 border-l border-gray-300 pl-1">
                        <div className="flex justify-between">
                          <span className="font-bold text-gray-800">{exp.company}</span>
                          <span className="text-gray-600">{exp.duration}</span>
                        </div>
                        <div className="text-[#B8860B] font-semibold">{exp.role}</div>
                        <ul className="mt-0 space-y-0 list-disc list-inside text-gray-700">
                          {exp.achievements.map((ach, j) => (
                            <li key={j} className="leading-tight">{ach}</li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>

                  {/* Key Metrics */}
                  <div className="bg-[#B8860B]/5 border border-[#B8860B]/30 p-1 flex justify-around">
                    <div className="text-center">
                      <div className="text-sm font-bold text-[#B8860B]">{member.keyMetrics.primary}</div>
                      <div className="text-[6px] text-gray-700">{member.keyMetrics.detail1}</div>
                    </div>
                    <div className="text-center">
                      <div className="text-sm font-bold text-[#B8860B]">{member.keyMetrics.secondary}</div>
                      <div className="text-[6px] text-gray-700">{member.keyMetrics.detail2}</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Certifications & Leadership - Page 1 */}
          <div className="px-6 pb-1.5">
            <div className="grid grid-cols-2 gap-3">
              <div>
                <h3 className="text-[7px] font-bold text-[#2C3E50] uppercase border-b border-[#B8860B]/30 pb-0.5 mb-0.5">Certifications & Awards</h3>
                <div className="space-y-0.5">
                  {orderedMembers.slice(0, 2).map((member) => (
                    <div key={member.id} className="text-[6px]">
                      <span className="font-bold text-[#B8860B]">{member.name.split(' ')[0]}:</span>
                      <span className="text-gray-700 ml-1">{member.certifications.join(' • ')}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="text-[7px] font-bold text-[#2C3E50] uppercase border-b border-[#B8860B]/30 pb-0.5 mb-0.5">Leadership Profile</h3>
                <div className="space-y-0.5">
                  {orderedMembers.slice(0, 2).map((member) => (
                    <div key={member.id} className="text-[6px]">
                      <span className="font-bold text-[#B8860B]">{member.name.split(' ')[0]}:</span>
                      <span className="text-gray-700 ml-1">{member.leadershipProfile.join(' • ')}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Key Projects & Impact - Page 1 */}
          <div className="px-6 pb-1.5">
            <h3 className="text-[7px] font-bold text-[#2C3E50] uppercase border-b border-[#B8860B]/30 pb-0.5 mb-0.5">Strategic Business Impact & Key Projects</h3>
            <div className="grid grid-cols-2 gap-2">
              <div>
                <h4 className="text-[6px] font-bold text-[#B8860B] mb-0.5">Mathew Jerry Meleth - Cloud & Integration Architecture</h4>
                <ul className="text-[6px] text-gray-700 space-y-0.5 list-disc list-inside">
                  <li><strong>Revenue Generation:</strong> Built SAP S/4HANA integrations for 15+ F500 clients generating $250K+ annual revenue</li>
                  <li><strong>Performance Optimization:</strong> Deployed Azure/AWS pipelines reducing data processing from 5-6 hours to 2-3 hours (50% improvement)</li>
                  <li><strong>DevOps Excellence:</strong> Led cloud migration accelerating CI/CD deployment velocity by 25% with 99.9% uptime</li>
                  <li><strong>Cost Reduction:</strong> Designed serverless architecture cutting infrastructure costs by 35% ($100K+ annual savings)</li>
                  <li><strong>Enterprise Integration:</strong> Delivered event-driven microservices handling 1M+ daily transactions for Rocket Mortgage</li>
                </ul>
              </div>
              <div>
                <h4 className="text-[6px] font-bold text-[#B8860B] mb-0.5">Rahil M. Harihar - AI/ML & Product Strategy</h4>
                <ul className="text-[6px] text-gray-700 space-y-0.5 list-disc list-inside">
                  <li><strong>AI Innovation:</strong> Architected multi-agent AI system achieving 4.8/5 user satisfaction with LangChain/Claude integration</li>
                  <li><strong>Enterprise Scale:</strong> Built ERP integrations serving 15+ Fortune 500 clients with SAP S/4HANA, processing $50M+ in transactions</li>
                  <li><strong>Product Launch:</strong> Led $35K profit product launch in 6 months with 100+ SAP/EDI integrations, 70% customer retention</li>
                  <li><strong>Process Optimization:</strong> Optimized supply chain workflows reducing cycle times from 48h to 8h (83% reduction)</li>
                  <li><strong>Technical Leadership:</strong> Managed cross-functional teams delivering 20+ projects with 98% on-time delivery rate</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Technical Proficiencies Summary */}
          <div className="px-6 pb-1.5">
            <h3 className="text-[7px] font-bold text-[#2C3E50] uppercase border-b border-[#B8860B]/30 pb-0.5 mb-0.5">Core Technical Stack</h3>
            <div className="grid grid-cols-4 gap-2 text-[6px]">
              <div>
                <h4 className="font-bold text-[#B8860B] mb-0.5">Cloud Platforms</h4>
                <p className="text-gray-700 leading-tight">AWS (EC2, S3, Lambda, SageMaker), Azure, GCP</p>
              </div>
              <div>
                <h4 className="font-bold text-[#B8860B] mb-0.5">AI/ML Frameworks</h4>
                <p className="text-gray-700 leading-tight">TensorFlow, PyTorch, Scikit-learn, LangChain, LLMs</p>
              </div>
              <div>
                <h4 className="font-bold text-[#B8860B] mb-0.5">Languages</h4>
                <p className="text-gray-700 leading-tight">Python, Java, JavaScript, SQL, TypeScript</p>
              </div>
              <div>
                <h4 className="font-bold text-[#B8860B] mb-0.5">DevOps & Tools</h4>
                <p className="text-gray-700 leading-tight">Docker, Kubernetes, Terraform, CI/CD, Git</p>
              </div>
            </div>
          </div>

          {/* Competitive Advantages & Value Proposition */}
          <div className="px-6 pb-1.5">
            <h3 className="text-[7px] font-bold text-[#2C3E50] uppercase border-b border-[#B8860B]/30 pb-0.5 mb-0.5">Competitive Advantages & Unique Value Proposition</h3>
            <div className="grid grid-cols-3 gap-2 text-[6px]">
              <div className="bg-[#B8860B]/5 border border-[#B8860B]/30 p-1.5">
                <h4 className="font-bold text-[#B8860B] mb-0.5 text-center">Enterprise-Grade Delivery</h4>
                <ul className="text-gray-700 space-y-0.5 list-disc list-inside leading-tight">
                  <li>98% on-time project delivery across 100+ projects</li>
                  <li>Zero critical security incidents in production systems</li>
                  <li>Average 40% cost reduction in infrastructure optimization</li>
                  <li>15+ Fortune 500 clients with multi-year engagements</li>
                </ul>
              </div>
              <div className="bg-[#B8860B]/5 border border-[#B8860B]/30 p-1.5">
                <h4 className="font-bold text-[#B8860B] mb-0.5 text-center">Technical Innovation</h4>
                <ul className="text-gray-700 space-y-0.5 list-disc list-inside leading-tight">
                  <li>IEEE Best Paper Award (98.52% ML accuracy)</li>
                  <li>Patent-pending AI architecture for enterprise systems</li>
                  <li>Industry-first multi-agent orchestration frameworks</li>
                  <li>Published research in computer vision and NLP domains</li>
                </ul>
              </div>
              <div className="bg-[#B8860B]/5 border border-[#B8860B]/30 p-1.5">
                <h4 className="font-bold text-[#B8860B] mb-0.5 text-center">Business Impact</h4>
                <ul className="text-gray-700 space-y-0.5 list-disc list-inside leading-tight">
                  <li>$3M+ in validated cost savings and revenue generation</li>
                  <li>70% average customer retention rate on products</li>
                  <li>25M+ records processed daily with 99.9% accuracy</li>
                  <li>3x Star Performer awards from top-tier financial firms</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Academic & Research Contributions */}
          <div className="px-6 pb-1.5 force-page-break">
            <h3 className="text-[7px] font-bold text-[#2C3E50] uppercase border-b border-[#B8860B]/30 pb-0.5 mb-0.5">Academic Excellence & Research Leadership</h3>
            <div className="grid grid-cols-2 gap-2 text-[6px]">
              <div>
                <h4 className="font-bold text-[#B8860B] mb-0.5">Publications, Awards & Recognition</h4>
                <ul className="text-gray-700 space-y-0.5 list-disc list-inside leading-tight">
                  <li><strong>IEEE Best Paper Award</strong> - Multimodal image forgery detection achieving 98.52% accuracy (Computer Vision)</li>
                  <li><strong>3x Star Performer</strong> - Morgan Stanley recognition for exceptional contributions to trading systems</li>
                  <li><strong>Graduate Teaching Assistant</strong> - University of Washington, mentored 50+ students in data science</li>
                  <li><strong>SAP Image Showcase</strong> - Featured enterprise integration innovations at global SAP conference</li>
                  <li><strong>AWS Architecture Award</strong> - Best cloud migration strategy for financial services client</li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold text-[#B8860B] mb-0.5">Educational Excellence & Expertise</h4>
                <ul className="text-gray-700 space-y-0.5 list-disc list-inside leading-tight">
                  <li><strong>University of Washington</strong> - MS in Information Management (all 4 members, 2024-2025 cohort)</li>
                  <li><strong>Average GPA: 3.94/4.0</strong> - Top 5% of program, consistent academic excellence across team</li>
                  <li><strong>Diverse Undergrad Backgrounds</strong> - Technology, Computer Science, Engineering from premier institutions</li>
                  <li><strong>Combined 14+ Years Experience</strong> - Blending academia and industry expertise with continuous learning</li>
                  <li><strong>Advanced Certifications</strong> - AWS, Azure, GCP, Kubernetes, ML/AI specializations across team</li>
                </ul>
              </div>
            </div>
          </div>

          {/* ============ PAGE 2 ============ */}
          {/* Continued Header */}
          <div className="bg-gradient-to-r from-[#2C3E50] to-[#1a252f] px-6 py-2 border-b-4 border-[#B8860B]">
            <h2 className="text-lg font-bold text-white">EXECUTIVE TEAM PORTFOLIO (CONTINUED)</h2>
          </div>

          {/* Two Column Member Profiles - Siddarth & Shreyas */}
          <div className="grid grid-cols-2 gap-3 px-6 py-1.5">
            {orderedMembers.slice(2, 4).map((member, idx) => (
              <div key={member.id} className="border border-gray-300">
                {/* Header */}
                <div className="bg-gradient-to-r from-gray-50 to-white border-b-2 border-[#B8860B] p-1.5">
                  <div className="flex items-start gap-2">
                    <div className="w-11 h-11 bg-[#2C3E50] border-2 border-[#B8860B] flex-shrink-0 overflow-hidden">
                      <img src={member.image} alt={member.name} className="w-full h-full object-cover"
                        onError={(e) => { e.target.style.display = 'none'; }} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h2 className="text-[10px] font-bold text-[#2C3E50] leading-tight">{member.name}</h2>
                      <p className="text-[8px] text-[#B8860B] font-semibold">{member.role}</p>
                      <div className="flex items-center gap-1.5 text-[7px] text-gray-600 mt-0.5">
                        <span>{member.email}</span>
                        <span>•</span>
                        <span>{member.phone}</span>
                      </div>
                      <p className="text-[7px] text-gray-500 mt-0.5">{member.location} • {member.yearsExperience}+ yrs exp</p>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-1.5 space-y-0.5">
                  {/* Executive Summary */}
                  <div>
                    <h3 className="text-[7px] font-bold text-[#2C3E50] uppercase border-b border-[#B8860B]/30 pb-0.5 mb-0.5">Executive Summary</h3>
                    <p className="text-[7px] text-gray-700 leading-tight">{member.summary}</p>
                  </div>

                  {/* Education */}
                  <div>
                    <h3 className="text-[7px] font-bold text-[#2C3E50] uppercase border-b border-[#B8860B]/30 pb-0.5 mb-0.5">Education</h3>
                    <div className="space-y-0.5">
                      <div className="text-[6px]">
                        <div className="flex justify-between">
                          <span className="font-bold text-gray-800">{member.education.masters.school}</span>
                          <span className="text-gray-600">{member.education.masters.duration}</span>
                        </div>
                        <div className="text-gray-700">{member.education.masters.degree}</div>
                        <div className="text-gray-600">GPA: {member.education.masters.gpa} • {member.education.masters.location}</div>
                      </div>
                      <div className="text-[6px]">
                        <div className="flex justify-between">
                          <span className="font-bold text-gray-800">{member.education.bachelors.school}</span>
                          <span className="text-gray-600">{member.education.bachelors.duration}</span>
                        </div>
                        <div className="text-gray-700">{member.education.bachelors.degree}</div>
                        {member.education.bachelors.gpa && (
                          <div className="text-gray-600">GPA: {member.education.bachelors.gpa} • {member.education.bachelors.location}</div>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Core Competencies */}
                  <div>
                    <h3 className="text-[7px] font-bold text-[#2C3E50] uppercase border-b border-[#B8860B]/30 pb-0.5 mb-0.5">Core Competencies</h3>
                    <div className="flex flex-wrap gap-0.5">
                      {member.topSkills.map((skill, i) => (
                        <span key={i} className="text-[6px] px-1 py-0.5 bg-[#2C3E50] text-white">{skill}</span>
                      ))}
                    </div>
                  </div>

                  {/* Technical Skills */}
                  <div>
                    <h3 className="text-[7px] font-bold text-[#2C3E50] uppercase border-b border-[#B8860B]/30 pb-0.5 mb-0.5">Technical Skills</h3>
                    <div className="space-y-0">
                      {Object.entries(member.technicalSkills).map(([category, skills]) => (
                        <div key={category} className="text-[6px]">
                          <span className="font-bold text-[#B8860B]">{category}:</span>
                          <span className="text-gray-700 ml-1">{skills.join(' • ')}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Professional Experience */}
                  <div>
                    <h3 className="text-[7px] font-bold text-[#2C3E50] uppercase border-b border-[#B8860B]/30 pb-0.5 mb-0.5">Professional Experience</h3>
                    {member.experience.map((exp, i) => (
                      <div key={i} className="text-[6px] mb-0.5 border-l border-gray-300 pl-1">
                        <div className="flex justify-between">
                          <span className="font-bold text-gray-800">{exp.company}</span>
                          <span className="text-gray-600">{exp.duration}</span>
                        </div>
                        <div className="text-[#B8860B] font-semibold">{exp.role}</div>
                        <ul className="mt-0 space-y-0 list-disc list-inside text-gray-700">
                          {exp.achievements.map((ach, j) => (
                            <li key={j} className="leading-tight">{ach}</li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>

                  {/* Key Metrics */}
                  <div className="bg-[#B8860B]/5 border border-[#B8860B]/30 p-1 flex justify-around">
                    <div className="text-center">
                      <div className="text-sm font-bold text-[#B8860B]">{member.keyMetrics.primary}</div>
                      <div className="text-[6px] text-gray-700">{member.keyMetrics.detail1}</div>
                    </div>
                    <div className="text-center">
                      <div className="text-sm font-bold text-[#B8860B]">{member.keyMetrics.secondary}</div>
                      <div className="text-[6px] text-gray-700">{member.keyMetrics.detail2}</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Certifications & Leadership */}
          <div className="px-6 pb-1.5">
            <div className="grid grid-cols-2 gap-2.5">
              <div>
                <h3 className="text-[7px] font-bold text-[#2C3E50] uppercase border-b border-[#B8860B]/30 pb-0.5 mb-0.5">Certifications & Awards</h3>
                <div className="space-y-0.5">
                  {orderedMembers.slice(2, 4).map((member) => (
                    <div key={member.id} className="text-[6px]">
                      <span className="font-bold text-[#B8860B]">{member.name.split(' ')[0]}:</span>
                      <span className="text-gray-700 ml-1">{member.certifications.join(' • ')}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="text-[7px] font-bold text-[#2C3E50] uppercase border-b border-[#B8860B]/30 pb-0.5 mb-0.5">Leadership Profile</h3>
                <div className="space-y-0.5">
                  {orderedMembers.slice(2, 4).map((member) => (
                    <div key={member.id} className="text-[6px]">
                      <span className="font-bold text-[#B8860B]">{member.name.split(' ')[0]}:</span>
                      <span className="text-gray-700 ml-1">{member.leadershipProfile.join(' • ')}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Team Skills Matrix */}
          <div className="px-6 pb-1.5">
            <h3 className="text-[7px] font-bold text-[#2C3E50] uppercase border-b border-[#B8860B]/30 pb-0.5 mb-0.5">Collective Technical Expertise & Technology Stack</h3>
            <div className="grid grid-cols-3 gap-2">
              <div className="border-l-2 border-[#B8860B] pl-1.5">
                <h4 className="text-[6px] font-bold text-[#B8860B] mb-0.5">Cloud & Infrastructure (99.9% Uptime)</h4>
                <p className="text-[6px] text-gray-700 leading-tight"><strong>AWS:</strong> EC2, S3, Lambda, SageMaker, RDS, CloudFormation, ECS, EKS</p>
                <p className="text-[6px] text-gray-700 leading-tight"><strong>Azure/GCP:</strong> VMs, Cloud Storage, Functions, BigQuery, Pub/Sub</p>
                <p className="text-[6px] text-gray-700 leading-tight"><strong>DevOps:</strong> Docker, Kubernetes, Terraform, Jenkins, GitLab CI, ArgoCD</p>
              </div>
              <div className="border-l-2 border-[#B8860B] pl-1.5">
                <h4 className="text-[6px] font-bold text-[#B8860B] mb-0.5">AI/ML & Data Science (98.52% Accuracy)</h4>
                <p className="text-[6px] text-gray-700 leading-tight"><strong>ML Frameworks:</strong> TensorFlow, PyTorch, Scikit-learn, XGBoost, Keras</p>
                <p className="text-[6px] text-gray-700 leading-tight"><strong>GenAI:</strong> LangChain, Claude, GPT-4, RAG, Vector DBs, Prompt Engineering</p>
                <p className="text-[6px] text-gray-700 leading-tight"><strong>Big Data:</strong> Spark, Hadoop, Kafka, Airflow, Snowflake, Databricks</p>
              </div>
              <div className="border-l-2 border-[#B8860B] pl-1.5">
                <h4 className="text-[6px] font-bold text-[#B8860B] mb-0.5">Software Development (100+ Projects)</h4>
                <p className="text-[6px] text-gray-700 leading-tight"><strong>Languages:</strong> Python, Java, JavaScript/TypeScript, Go, C++, SQL</p>
                <p className="text-[6px] text-gray-700 leading-tight"><strong>Frameworks:</strong> React, Node.js, Spring Boot, FastAPI, Django, Express</p>
                <p className="text-[6px] text-gray-700 leading-tight"><strong>Databases:</strong> PostgreSQL, MongoDB, Redis, DynamoDB, Neo4j</p>
              </div>
            </div>
          </div>

          {/* Key Projects - Page 2 Members */}
          <div className="px-6 pb-1.5">
            <h3 className="text-[7px] font-bold text-[#2C3E50] uppercase border-b border-[#B8860B]/30 pb-0.5 mb-0.5">Strategic Business Impact & Key Projects (Continued)</h3>
            <div className="grid grid-cols-2 gap-2">
              <div>
                <h4 className="text-[6px] font-bold text-[#B8860B] mb-0.5">Siddarth Bhave - Data Engineering & Research Excellence</h4>
                <ul className="text-[6px] text-gray-700 space-y-0.5 list-disc list-inside">
                  <li><strong>Big Data Processing:</strong> Developed distributed ETL pipelines processing 25M+ Kafka records daily, reducing errors by 30%</li>
                  <li><strong>Research Leadership:</strong> Published IEEE Best Paper on multimodal image forgery detection achieving 98.52% accuracy</li>
                  <li><strong>Infrastructure Excellence:</strong> Built cloud observability platform reducing incident MTTR by 40% for critical systems</li>
                  <li><strong>Delivery Excellence:</strong> Led full-stack development delivering 15+ projects 2x ahead of quarterly targets</li>
                  <li><strong>Morgan Stanley Impact:</strong> Developed algorithmic trading infrastructure processing $500M+ daily transactions</li>
                </ul>
              </div>
              <div>
                <h4 className="text-[6px] font-bold text-[#B8860B] mb-0.5">Shreyas B Subramanya - Product & Supply Chain Innovation</h4>
                <ul className="text-[6px] text-gray-700 space-y-0.5 list-disc list-inside">
                  <li><strong>Product Leadership:</strong> Architected Advanced Planning Product serving 500+ enterprise users with 70% retention rate</li>
                  <li><strong>Knowledge Graphs:</strong> Built supply chain tracking system with graph DB, managing 100K+ SKUs across global network</li>
                  <li><strong>Cloud Architecture:</strong> Designed multi-cloud data pipelines with 99.9% uptime processing 10TB+ monthly data</li>
                  <li><strong>Revenue Growth:</strong> Led enterprise planning suite driving 30% revenue growth ($2M+) with validated attribution</li>
                  <li><strong>o9 Solutions Impact:</strong> Delivered forecasting improvements reducing inventory costs by $500K annually</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Industry Domains & Expertise */}
          <div className="px-6 pb-1.5">
            <h3 className="text-[7px] font-bold text-[#2C3E50] uppercase border-b border-[#B8860B]/30 pb-0.5 mb-0.5">Industry Expertise & Domain Knowledge</h3>
            <div className="grid grid-cols-3 gap-2 text-[6px]">
              <div className="bg-[#B8860B]/5 border border-[#B8860B]/20 p-1">
                <h4 className="font-bold text-[#B8860B] mb-0.5">Financial Services ($500M+ Processed)</h4>
                <p className="text-gray-700 leading-tight">Morgan Stanley algorithmic trading, Investment Banking systems, Risk Management frameworks, High-frequency trading infrastructure, Regulatory compliance (SEC, FINRA)</p>
              </div>
              <div className="bg-[#B8860B]/5 border border-[#B8860B]/20 p-1">
                <h4 className="font-bold text-[#B8860B] mb-0.5">Enterprise Software (15+ F500 Clients)</h4>
                <p className="text-gray-700 leading-tight">SAP S/4HANA integration, ERP implementations, Supply Chain optimization, Demand Planning & Forecasting, o9 Solutions platform, EDI workflows</p>
              </div>
              <div className="bg-[#B8860B]/5 border border-[#B8860B]/20 p-1">
                <h4 className="font-bold text-[#B8860B] mb-0.5">Cloud & AI/ML (98.52% Accuracy)</h4>
                <p className="text-gray-700 leading-tight">AWS/Azure architecture, MLOps pipelines, Generative AI applications, Computer Vision research, NLP systems, Real-time data engineering at scale</p>
              </div>
            </div>
          </div>

          {/* Methodologies & Best Practices */}
          <div className="px-6 pb-1.5">
            <h3 className="text-[7px] font-bold text-[#2C3E50] uppercase border-b border-[#B8860B]/30 pb-0.5 mb-0.5">Methodologies & Engineering Excellence</h3>
            <div className="grid grid-cols-4 gap-2 text-[6px] text-gray-700">
              <div>
                <h4 className="font-bold text-[#B8860B] mb-0.5">Agile/Scrum</h4>
                <p className="leading-tight">Sprint Planning, Daily Standups, Retrospectives, Story Estimation, Velocity Tracking</p>
              </div>
              <div>
                <h4 className="font-bold text-[#B8860B] mb-0.5">DevOps/MLOps</h4>
                <p className="leading-tight">CI/CD Pipelines, Infrastructure as Code, GitOps, Automated Testing, Deployment Automation</p>
              </div>
              <div>
                <h4 className="font-bold text-[#B8860B] mb-0.5">Code Quality</h4>
                <p className="leading-tight">TDD/BDD, Peer Code Reviews, Static Analysis, Comprehensive Documentation</p>
              </div>
              <div>
                <h4 className="font-bold text-[#B8860B] mb-0.5">Security</h4>
                <p className="leading-tight">OWASP Top 10, Secure SDLC, Vulnerability Scanning, Compliance (SOC2, GDPR)</p>
              </div>
            </div>
          </div>

          {/* Client Success Stories & Testimonials */}
          <div className="px-6 pb-1.5">
            <h3 className="text-[7px] font-bold text-[#2C3E50] uppercase border-b border-[#B8860B]/30 pb-0.5 mb-0.5">Client Success Stories & Quantified Impact</h3>
            <div className="grid grid-cols-2 gap-2 text-[6px]">
              <div className="bg-gray-50 border border-gray-300 p-1.5">
                <h4 className="font-bold text-[#B8860B] mb-0.5">Fortune 500 Financial Services</h4>
                <p className="text-gray-700 leading-tight mb-0.5">
                  <strong>Challenge:</strong> Legacy trading systems causing $2M+ annual losses due to latency and errors.
                </p>
                <p className="text-gray-700 leading-tight mb-0.5">
                  <strong>Solution:</strong> Redesigned algorithmic trading infrastructure with distributed processing and real-time monitoring.
                </p>
                <p className="text-gray-700 leading-tight">
                  <strong>Impact:</strong> 60% latency reduction, 95% error elimination, $1.5M+ annual savings, 3x Star Performer recognition.
                </p>
              </div>
              <div className="bg-gray-50 border border-gray-300 p-1.5">
                <h4 className="font-bold text-[#B8860B] mb-0.5">Global Supply Chain Platform</h4>
                <p className="text-gray-700 leading-tight mb-0.5">
                  <strong>Challenge:</strong> Manual planning processes taking 48+ hours, limiting business agility and causing stockouts.
                </p>
                <p className="text-gray-700 leading-tight mb-0.5">
                  <strong>Solution:</strong> Built AI-powered planning suite with automated forecasting and optimization algorithms.
                </p>
                <p className="text-gray-700 leading-tight">
                  <strong>Impact:</strong> 83% cycle time reduction (48h to 8h), $500K inventory savings, 30% revenue growth, 70% retention.
                </p>
              </div>
            </div>
          </div>

          {/* Innovation & Future-Ready Skills */}
          <div className="px-6 pb-1.5">
            <h3 className="text-[7px] font-bold text-[#2C3E50] uppercase border-b border-[#B8860B]/30 pb-0.5 mb-0.5">Innovation Focus & Emerging Technologies</h3>
            <div className="grid grid-cols-4 gap-2 text-[6px]">
              <div>
                <h4 className="font-bold text-[#B8860B] mb-0.5">Generative AI</h4>
                <p className="text-gray-700 leading-tight">LLM Integration, RAG Architecture, Prompt Engineering, Multi-Agent Systems, LangChain</p>
              </div>
              <div>
                <h4 className="font-bold text-[#B8860B] mb-0.5">MLOps & AutoML</h4>
                <p className="text-gray-700 leading-tight">Model Deployment, A/B Testing, Feature Stores, Model Monitoring, Automated Retraining</p>
              </div>
              <div>
                <h4 className="font-bold text-[#B8860B] mb-0.5">Edge Computing</h4>
                <p className="text-gray-700 leading-tight">IoT Integration, Real-time Processing, Edge ML Models, 5G Applications</p>
              </div>
              <div>
                <h4 className="font-bold text-[#B8860B] mb-0.5">Quantum-Ready</h4>
                <p className="text-gray-700 leading-tight">Quantum Algorithms, Hybrid Systems, Optimization Problems, Future-proof Architecture</p>
              </div>
            </div>
          </div>

          {/* Bottom Footer */}
          <div className="bg-gradient-to-r from-[#2C3E50] to-[#1a252f] px-6 py-2.5 mt-2 border-t-4 border-[#B8860B]">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-white text-[9px] font-bold mb-0.5">Ready to deliver enterprise excellence with proven Fortune 500 impact</p>
                <p className="text-gray-300 text-[7px]">Contact: rahil911@uw.edu • sidbhave@uw.edu • mathewjerry07@gmail.com • shrey674@uw.edu</p>
                <p className="text-[#B8860B] text-[7px] mt-0.5">Available for immediate engagement • Full-time/Contract opportunities • Competitive rates</p>
              </div>
              <div className="text-right border-l-2 border-[#B8860B] pl-3">
                <div className="text-[#B8860B] font-bold text-sm">14+ Years</div>
                <div className="text-gray-300 text-[7px]">Combined Experience</div>
                <div className="text-white text-[7px] mt-0.5">$3M+ Delivered Value</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Georgia&display=swap');
      `}</style>
    </>
  );
};

export default Prototype3;
