import { useRef } from 'react';
import { motion } from 'framer-motion';
import { teamMembers, teamMetrics, skillsTaxonomy } from '../../data/teamData';
import PrintButton from '../shared/PrintButton';
import BackButton from '../shared/BackButton';
import {
  Server, Database, Cloud, Cpu, GitBranch, Users, Code, Terminal, Briefcase, GraduationCap, Award, Mail, Phone, MapPin, Linkedin
} from 'lucide-react';

const Prototype2 = () => {
  const printRef = useRef();

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
        delayChildren: 0.05
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.3, ease: 'easeOut' }
    }
  };

  // Corner bracket component
  const CornerBrackets = ({ className = '' }) => (
    <div className={`corner-brackets ${className}`}>
      <svg className="absolute top-0 left-0 w-3 h-3" viewBox="0 0 16 16">
        <path d="M 0 4 L 0 0 L 4 0" stroke="currentColor" fill="none" strokeWidth="1.5" />
      </svg>
      <svg className="absolute top-0 right-0 w-3 h-3" viewBox="0 0 16 16">
        <path d="M 16 4 L 16 0 L 12 0" stroke="currentColor" fill="none" strokeWidth="1.5" />
      </svg>
      <svg className="absolute bottom-0 left-0 w-3 h-3" viewBox="0 0 16 16">
        <path d="M 0 12 L 0 16 L 4 16" stroke="currentColor" fill="none" strokeWidth="1.5" />
      </svg>
      <svg className="absolute bottom-0 right-0 w-3 h-3" viewBox="0 0 16 16">
        <path d="M 16 12 L 16 16 L 12 16" stroke="currentColor" fill="none" strokeWidth="1.5" />
      </svg>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 py-8">
      <BackButton />
      <PrintButton targetRef={printRef} fileName="technical-blueprint-team-resume" />

      <div ref={printRef} className="mx-auto" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
        <style>{`
          @import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@300;400;500;600;700;800&family=Inter:wght@300;400;500;600;700;800&display=swap');

          .a4-container {
            width: 210mm;
            padding: 5mm;
            font-family: 'Inter', 'JetBrains Mono', monospace;
            position: relative;
            background: #E3F2FD;
            background-image:
              linear-gradient(rgba(33, 150, 243, 0.12) 1px, transparent 1px),
              linear-gradient(90deg, rgba(33, 150, 243, 0.12) 1px, transparent 1px),
              linear-gradient(rgba(33, 150, 243, 0.06) 0.5px, transparent 0.5px),
              linear-gradient(90deg, rgba(33, 150, 243, 0.06) 0.5px, transparent 0.5px);
            background-size: 5mm 5mm, 5mm 5mm, 1mm 1mm, 1mm 1mm;
          }

          .force-page-break {
            page-break-after: always !important;
          }

          .team-member-card {
            page-break-inside: avoid !important;
          }

          .blueprint-card {
            background: rgba(255, 255, 255, 0.75);
            border: 1px solid rgba(33, 150, 243, 0.4);
            position: relative;
            backdrop-filter: blur(8px);
          }

          .blueprint-card-dark {
            background: rgba(13, 71, 161, 0.08);
            border: 1px solid rgba(33, 150, 243, 0.5);
            position: relative;
          }

          .corner-brackets {
            position: absolute;
            inset: -1px;
            color: #2196F3;
            pointer-events: none;
          }

          .technical-label {
            font-family: 'JetBrains Mono', monospace;
            text-transform: uppercase;
            letter-spacing: 0.08em;
            font-weight: 600;
          }

          .spec-value {
            font-family: 'JetBrains Mono', monospace;
            font-weight: 700;
            color: #0D47A1;
          }

          .text-blueprint-primary {
            color: #0D47A1;
          }

          .text-blueprint-secondary {
            color: #1565C0;
          }

          .text-blueprint-accent {
            color: #1976D2;
          }

          .text-blueprint-muted {
            color: #424242;
          }

          .border-blueprint {
            border-color: rgba(33, 150, 243, 0.4);
          }

          .bg-blueprint-light {
            background: rgba(227, 242, 253, 0.6);
          }

          @media print {
            .a4-container {
              margin: 0;
              box-shadow: none;
              background: #E3F2FD !important;
            }

            body {
              -webkit-print-color-adjust: exact;
              print-color-adjust: exact;
              color-adjust: exact;
            }

            .blueprint-card,
            .blueprint-card-dark {
              -webkit-print-color-adjust: exact;
              print-color-adjust: exact;
              color-adjust: exact;
            }

            @page {
              size: A4;
              margin: 0;
            }
          }
        `}</style>

        {/* Content flows naturally across pages */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="a4-container"
        >
          {/* Header */}
          <motion.div variants={itemVariants} className="border-b-2 border-blueprint pb-1 mb-2">
            <div className="flex items-start justify-between">
              <div>
                <div className="flex items-center gap-2 mb-0.5">
                  <Terminal className="text-blueprint-primary" size={18} />
                  <h1 className="text-lg font-bold text-blueprint-primary tracking-wider">
                    TECHNICAL TEAM BLUEPRINT
                  </h1>
                </div>
                <p className="technical-label text-blueprint-secondary" style={{ fontSize: '9px' }}>
                  Document No: UW-MSIM-2025-TEAM-001
                </p>
                <p className="text-blueprint-muted" style={{ fontSize: '8px' }}>
                  Complete System Architecture & Component Specifications
                </p>
              </div>
              <div className="blueprint-card px-1.5 py-1 rounded-sm">
                <CornerBrackets />
                <div className="technical-label text-blueprint-primary" style={{ fontSize: '9px' }}>REV: 2.0</div>
                <div className="text-blueprint-secondary" style={{ fontSize: '8px' }}>2025-10-25</div>
              </div>
            </div>
          </motion.div>

          {/* System Overview Metrics */}
          <motion.div variants={itemVariants} className="grid grid-cols-5 gap-1 mb-2">
            {[
              { label: 'CORES', value: teamMetrics.totalMembers, unit: 'ENGINEERS', icon: Users },
              { label: 'RUNTIME', value: `${teamMetrics.combinedExperience}Y`, unit: 'COMBINED', icon: Server },
              { label: 'THROUGHPUT', value: `${teamMetrics.projectsDelivered}+`, unit: 'PROJECTS', icon: Code },
              { label: 'UPTIME', value: `${teamMetrics.onTimeDelivery}%`, unit: 'DELIVERY', icon: Cpu },
              { label: 'CLIENT SAT', value: `${teamMetrics.clientSatisfaction}%`, unit: 'RATING', icon: Award }
            ].map((spec, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                className="blueprint-card p-1.5 rounded-sm relative"
              >
                <CornerBrackets />
                <spec.icon className="text-blueprint-accent mb-0.5" size={12} />
                <div className="spec-value text-sm leading-none">{spec.value}</div>
                <div className="technical-label text-blueprint-muted mt-0.5" style={{ fontSize: '8px' }}>{spec.label}</div>
                <div className="text-blueprint-secondary opacity-70" style={{ fontSize: '8px' }}>{spec.unit}</div>
              </motion.div>
            ))}
          </motion.div>

          {/* Team Member Details - Dense Layout */}
          <motion.div variants={itemVariants} className="mb-2">
            <div className="flex items-center gap-1 mb-1">
              <Users className="text-blueprint-primary" size={12} />
              <h2 className="technical-label text-blueprint-primary" style={{ fontSize: '10px' }}>COMPONENT MATRIX - PERSONNEL</h2>
            </div>

            <div className="grid grid-cols-2 gap-2">
              {teamMembers.map((member, idx) => (
                <motion.div
                  key={member.id}
                  variants={itemVariants}
                  className="blueprint-card rounded-sm p-2 relative"
                >
                  <CornerBrackets />

                  <div className="flex gap-2 mb-1">
                    {/* Photo */}
                    <div className="relative flex-shrink-0">
                      <div className="border-2 border-blueprint-primary p-0.5">
                        <img
                          src={member.image}
                          alt={member.name}
                          className="w-16 h-16 object-cover"
                          style={{ filter: 'grayscale(0.2) contrast(1.1)' }}
                        />
                      </div>
                      <div className="absolute -bottom-1 -right-1 bg-blueprint-primary text-white px-1 py-0.5 font-bold" style={{ fontSize: '8px' }}>
                        {member.id.substring(0, 3).toUpperCase()}
                      </div>
                    </div>

                    {/* Info */}
                    <div className="flex-1 min-w-0">
                      <h3 className="font-bold text-blueprint-primary mb-0.5 leading-tight uppercase" style={{ fontSize: '10px' }}>
                        {member.name}
                      </h3>
                      <p className="text-blueprint-secondary font-semibold mb-1 uppercase leading-tight" style={{ fontSize: '9px' }}>
                        {member.role}
                      </p>

                      {/* Contact - Ultra compact */}
                      <div className="space-y-0.5 mb-1 text-xs text-blueprint-muted">
                        <div className="flex items-center gap-1">
                          <Mail size={8} className="text-blueprint-accent flex-shrink-0" />
                          <span className="truncate" style={{ fontSize: '8px' }}>{member.email}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Phone size={8} className="text-blueprint-accent flex-shrink-0" />
                          <span style={{ fontSize: '8px' }}>{member.phone}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <MapPin size={8} className="text-blueprint-accent flex-shrink-0" />
                          <span style={{ fontSize: '8px' }}>{member.location}</span>
                        </div>
                      </div>

                      {/* Key Metrics */}
                      <div className="grid grid-cols-2 gap-1">
                        <div className="blueprint-card-dark rounded-sm px-1 py-0.5">
                          <div className="text-blueprint-primary text-xs font-bold leading-none">{member.keyMetrics.primary}</div>
                          <div className="text-blueprint-muted leading-tight mt-0.5" style={{ fontSize: '8px' }}>{member.keyMetrics.detail1}</div>
                        </div>
                        <div className="blueprint-card-dark rounded-sm px-1 py-0.5">
                          <div className="text-blueprint-primary text-xs font-bold leading-none">{member.keyMetrics.secondary}</div>
                          <div className="text-blueprint-muted leading-tight mt-0.5" style={{ fontSize: '8px' }}>{member.keyMetrics.detail2}</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Summary */}
                  <div className="border-t border-blueprint pt-1 mt-1">
                    <p className="text-blueprint-muted leading-tight" style={{ fontSize: '8px' }}>
                      {member.summary}
                    </p>
                  </div>

                  {/* Top Skills - Compact */}
                  <div className="mt-1">
                    <div className="technical-label text-blueprint-primary mb-0.5" style={{ fontSize: '8px' }}>CORE COMPETENCIES</div>
                    <div className="flex flex-wrap gap-0.5">
                      {member.topSkills.slice(0, 4).map((skill, sidx) => (
                        <span
                          key={sidx}
                          className="bg-blueprint-light border border-blueprint-primary text-blueprint-primary px-1 py-0.5 rounded-sm font-medium"
                          style={{ fontSize: '7px' }}
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Aggregate Skills Overview */}
          <motion.div variants={itemVariants} className="grid grid-cols-2 gap-2 mb-2">
            {/* Technical Stack */}
            <div className="blueprint-card rounded-sm p-2 relative">
              <CornerBrackets />
              <div className="flex items-center gap-1 mb-1">
                <Database className="text-blueprint-primary" size={12} />
                <h3 className="technical-label text-blueprint-primary" style={{ fontSize: '9px' }}>TECHNOLOGY STACK</h3>
              </div>

              <div className="space-y-1">
                {Object.entries(skillsTaxonomy).map(([category, data], idx) => {
                  const avgProf = data.proficiency.reduce((a, b) => a + b, 0) / 4;
                  return (
                    <div key={idx} className="border-l-2 border-blueprint-primary pl-1.5">
                      <div className="flex justify-between items-center mb-0.5">
                        <span className="technical-label text-blueprint-secondary" style={{ fontSize: '8px' }}>
                          {category.toUpperCase()}
                        </span>
                        <span className="text-blueprint-primary font-bold" style={{ fontSize: '9px' }}>
                          {avgProf.toFixed(1)}/5
                        </span>
                      </div>
                      <div className="flex gap-0.5">
                        {[...Array(5)].map((_, bidx) => (
                          <div
                            key={bidx}
                            className={`h-1 flex-1 ${bidx < Math.round(avgProf) ? 'bg-blueprint-primary' : 'bg-blueprint-primary opacity-20'}`}
                          />
                        ))}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Impact Metrics */}
            <div className="blueprint-card rounded-sm p-2 relative">
              <CornerBrackets />
              <div className="flex items-center gap-1 mb-1">
                <Award className="text-blueprint-primary" size={12} />
                <h3 className="technical-label text-blueprint-primary" style={{ fontSize: '9px' }}>IMPACT METRICS</h3>
              </div>

              <div className="space-y-1">
                <div className="blueprint-card-dark rounded-sm p-1.5">
                  <div className="technical-label text-blueprint-secondary mb-0.5" style={{ fontSize: '8px' }}>CLIENTS SERVED</div>
                  <div className="spec-value text-sm">15+ Fortune 500</div>
                </div>
                <div className="blueprint-card-dark rounded-sm p-1.5">
                  <div className="technical-label text-blueprint-secondary mb-0.5" style={{ fontSize: '8px' }}>COST SAVINGS GENERATED</div>
                  <div className="spec-value text-sm">{teamMetrics.costSavingsGenerated}</div>
                </div>
                <div className="blueprint-card-dark rounded-sm p-1.5">
                  <div className="technical-label text-blueprint-secondary mb-0.5" style={{ fontSize: '8px' }}>INDUSTRIES</div>
                  <div className="text-blueprint-muted" style={{ fontSize: '8px' }}>{teamMetrics.industries.join(' • ')}</div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Footer - Force page break after this */}
          <motion.div variants={itemVariants} className="border-t-2 border-blueprint pt-1 mb-2 force-page-break">
            <div className="grid grid-cols-3 gap-2 items-center">
              <div className="technical-label text-blueprint-muted" style={{ fontSize: '8px' }}>
                <div>ISSUED BY: UW ISCHOOL</div>
                <div className="text-blueprint-primary mt-0.5">CLASS OF 2026</div>
              </div>
              <div className="technical-label text-blueprint-muted text-center" style={{ fontSize: '8px' }}>
                <div>CLASSIFICATION: TALENT PORTFOLIO</div>
                <div className="text-blueprint-primary mt-0.5">PAGE 1 OF 2</div>
              </div>
              <div className="technical-label text-blueprint-muted text-right" style={{ fontSize: '8px' }}>
                <div>SCALE: 1:1 / SHEET 1 OF 2</div>
                <div className="text-blueprint-primary mt-0.5">ISO 216 (A4)</div>
              </div>
            </div>
          </motion.div>

          {/* PAGE 2 STARTS HERE */}
          {/* Page 2 Header */}
          <motion.div variants={itemVariants} className="border-b-2 border-blueprint pb-1 mb-2">
            <div className="flex items-start justify-between">
              <div>
                <h2 className="text-lg font-bold text-blueprint-primary tracking-wider mb-0.5">
                  DETAILED SPECIFICATIONS
                </h2>
                <p className="technical-label text-blueprint-secondary" style={{ fontSize: '9px' }}>
                  Experience Archive, Education Records, Certifications
                </p>
              </div>
              <div className="blueprint-card px-1.5 py-1 rounded-sm">
                <CornerBrackets />
                <div className="technical-label text-blueprint-primary" style={{ fontSize: '9px' }}>PAGE 2/2</div>
              </div>
            </div>
          </motion.div>

          {/* Detailed Experience for Each Member - Ultra Compact 2-column */}
          <motion.div variants={itemVariants} className="grid grid-cols-2 gap-1 mb-1">
            {teamMembers.map((member, midx) => (
              <motion.div
                key={member.id}
                variants={itemVariants}
                className="blueprint-card rounded-sm p-1 relative team-member-card"
              >
                <CornerBrackets />

                {/* Member Header */}
                <div className="mb-0.5 pb-0.5 border-b border-blueprint">
                  <h3 className="font-bold text-blueprint-primary uppercase leading-tight" style={{ fontSize: '9px' }}>{member.name}</h3>
                  <p className="text-blueprint-secondary leading-tight" style={{ fontSize: '8px' }}>{member.role} • {member.yearsExperience}Y</p>
                </div>

                {/* Experience Section - Top 2 only */}
                <div className="mb-0.5">
                  <h4 className="technical-label text-blueprint-primary mb-0.5" style={{ fontSize: '8px' }}>EXPERIENCE</h4>
                  <div className="space-y-0.5">
                    {member.experience.slice(0, 2).map((exp, eidx) => (
                      <div key={eidx} className="blueprint-card-dark rounded-sm p-0.5">
                        <div className="font-bold text-blueprint-primary leading-tight" style={{ fontSize: '8px' }}>{exp.company}</div>
                        <div className="text-blueprint-secondary italic leading-tight" style={{ fontSize: '8px' }}>{exp.role} • {exp.duration}</div>
                        <ul className="ml-2">
                          {exp.achievements.slice(0, 2).map((achievement, aidx) => (
                            <li key={aidx} className="text-blueprint-muted leading-tight list-disc" style={{ fontSize: '8px' }}>
                              {achievement}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Education - Compact */}
                <div className="mb-0.5">
                  <h4 className="technical-label text-blueprint-primary mb-0.5" style={{ fontSize: '8px' }}>EDUCATION</h4>
                  <div className="space-y-0.5">
                    <div className="blueprint-card-dark rounded-sm p-0.5">
                      <div className="font-bold text-blueprint-primary leading-tight" style={{ fontSize: '8px' }}>{member.education.masters.degree}</div>
                      <div className="text-blueprint-secondary leading-tight" style={{ fontSize: '8px' }}>{member.education.masters.school} • GPA: {member.education.masters.gpa}</div>
                    </div>
                    <div className="blueprint-card-dark rounded-sm p-0.5">
                      <div className="font-bold text-blueprint-primary leading-tight" style={{ fontSize: '8px' }}>{member.education.bachelors.degree}</div>
                      <div className="text-blueprint-secondary leading-tight" style={{ fontSize: '8px' }}>{member.education.bachelors.school}</div>
                    </div>
                  </div>
                </div>

                {/* Skills - Compact */}
                <div>
                  <h4 className="technical-label text-blueprint-primary mb-0.5" style={{ fontSize: '8px' }}>TOP SKILLS</h4>
                  <div className="flex flex-wrap gap-0.5">
                    {member.topSkills.slice(0, 6).map((skill, sidx) => (
                      <span
                        key={sidx}
                        className="text-blueprint-muted bg-blueprint-light border border-blueprint-primary rounded-sm px-0.5"
                        style={{ fontSize: '8px' }}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Technology Stack - Condensed */}
          <motion.div variants={itemVariants} className="blueprint-card rounded-sm p-1.5 relative mb-1">
            <CornerBrackets />
            <div className="flex items-center gap-1 mb-0.5">
              <Cloud className="text-blueprint-primary" size={10} />
              <h3 className="technical-label text-blueprint-primary" style={{ fontSize: '8px' }}>TECHNOLOGY STACK</h3>
            </div>

            <div className="grid grid-cols-3 gap-1">
              {Object.entries(skillsTaxonomy).map(([category, data], idx) => (
                <div key={idx} className="blueprint-card-dark rounded-sm p-1">
                  <div className="technical-label text-blueprint-secondary mb-0.5 leading-tight" style={{ fontSize: '8px' }}>
                    {category.toUpperCase()}
                  </div>
                  <div className="space-y-0.5">
                    {Object.entries(data).filter(([key]) => key !== 'proficiency').map(([subcat, items], sidx) => (
                      <div key={sidx}>
                        <div className="text-blueprint-accent font-semibold leading-tight" style={{ fontSize: '8px' }}>
                          {subcat.toUpperCase()}:
                        </div>
                        <div className="text-blueprint-muted leading-tight" style={{ fontSize: '8px' }}>
                          {items.slice(0, 5).join(', ')}{items.length > 5 ? '...' : ''}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Footer Page 2 */}
          <motion.div variants={itemVariants} className="border-t-2 border-blueprint pt-1 mt-2">
            <div className="grid grid-cols-3 gap-2 items-center">
              <div className="technical-label text-blueprint-muted" style={{ fontSize: '8px' }}>
                <div>APPROVED BY: UW ISCHOOL</div>
                <div className="text-blueprint-primary mt-0.5">MSIM PROGRAM 2024-2026</div>
              </div>
              <div className="technical-label text-blueprint-muted text-center" style={{ fontSize: '8px' }}>
                <div>STATUS: ACTIVE / READY FOR DEPLOYMENT</div>
                <div className="text-blueprint-primary mt-0.5">PAGE 2 OF 2</div>
              </div>
              <div className="technical-label text-blueprint-muted text-right" style={{ fontSize: '8px' }}>
                <div>REVISION: 2.0 / FINAL</div>
                <div className="text-blueprint-primary mt-0.5">CONFIDENTIAL</div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Prototype2;
