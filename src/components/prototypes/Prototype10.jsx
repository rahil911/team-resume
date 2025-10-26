import { useRef } from 'react';
import { motion } from 'framer-motion';
import { teamMembers, skillsTaxonomy } from '../../data/teamData';

const Prototype10 = () => {
  const printRef = useRef();

  // Startup pitch color palette - red/teal on white
  const colors = {
    coral: '#FF4757',
    teal: '#4ECDC4',
    deepBlue: '#1A2B4A',
    white: '#FFFFFF',
    lightGray: '#F8F9FA',
    darkGray: '#2D3748',
    black: '#1F2937'
  };

  // Comprehensive business metrics
  const keyMetrics = [
    { value: '$2M+', label: 'Cost Savings', sub: 'Annual recurring' },
    { value: '75M/min', label: 'Scale', sub: 'Kafka records processed' },
    { value: '100+', label: 'Integrations', sub: 'Production deployments' },
    { value: '15+', label: 'Fortune 500', sub: 'Strategic clients' },
    { value: '$35K', label: 'Profit', sub: 'Bootstrapped exit' },
    { value: '83%', label: 'Performance', sub: 'Query time reduction' }
  ];

  const traction = [
    {
      company: 'AWS (DynamoDB)',
      role: 'SDE Intern',
      impact: '$1M annual savings via eBPF network monitoring',
      tech: 'eBPF, EC2, CloudWatch optimization'
    },
    {
      company: 'Morgan Stanley',
      role: 'SDE 2',
      impact: '75M Kafka records/min pipeline, 5min→45sec queries',
      tech: 'Spring Boot, Kubernetes, Mimir, Cortex'
    },
    {
      company: 'Rocket Mortgage',
      role: 'Cloud Engineer',
      impact: '35% faster ingestion, 20+ CI/CD migrations (40% efficiency)',
      tech: 'AWS Lambda, Step Functions, GitHub Actions'
    },
    {
      company: 'SAP (15+ Fortune 500)',
      role: 'Dev Consultant',
      impact: '100+ S/4HANA integrations, 30% latency reduction',
      tech: 'SAP CPI, IDoc, OData, Cloud Connector'
    },
    {
      company: 'o9 Solutions',
      role: 'Senior PM',
      impact: '70% batch-run reduction, 20+ global implementations',
      tech: 'APS, Delta Lake, Supply Chain optimization'
    },
    {
      company: 'AaMaRa Technologies',
      role: 'Co-Founders',
      impact: '$35K profit, beat Zoho for Dubai Islamic Bank, 15 devs',
      tech: 'Full-stack SaaS, ERP, profitable Day 0'
    }
  ];

  const technicalStack = [
    { category: 'AI/ML Systems', items: ['LangChain', 'CrewAI', 'OpenAI SWARM', 'PyTorch', 'TensorFlow', 'Hugging Face', 'FAISS', 'RAG', 'Multi-Agent Orchestration'] },
    { category: 'Cloud & Infra', items: ['AWS (Lambda, S3, Glue, DynamoDB)', 'Azure (Databricks, Data Factory)', 'Kubernetes', 'Docker', 'eBPF', 'Prometheus', 'Grafana', 'Mimir'] },
    { category: 'Data Engineering', items: ['PySpark', 'Hadoop', 'Kafka (75M/min)', 'Delta Lake', 'PostgreSQL', 'MongoDB', 'Cassandra', 'ETL Pipelines', 'OpenTSDB', 'Cortex'] },
    { category: 'Development', items: ['Python', 'Java', 'C++', 'JavaScript', 'React', 'Node', 'Flask', 'Spring Boot', 'Django', 'SQL', 'Groovy'] },
    { category: 'Enterprise', items: ['SAP S/4HANA', 'SAP CPI', 'Salesforce', 'SuccessFactors', 'ERP Integration', 'IDoc/OData/SOAP', 'Cloud Connector'] },
    { category: 'Product/PM', items: ['Roadmapping', 'OKRs', 'PRDs', 'RICE', 'Agile/Scrum', 'JIRA', 'Stakeholder Mgmt', 'Go-To-Market', 'S&OP', 'APS'] }
  ];

  return (
    <div className="min-h-screen bg-white">
      <div ref={printRef} className="a4-container w-[210mm] mx-auto shadow-2xl" style={{
        backgroundColor: colors.white,
        fontFamily: 'Inter, system-ui, -apple-system, sans-serif',
        padding: '5mm'
      }}>
        {/* PAGE 1 - OVERVIEW & TRACTION */}
        <div>
          {/* Top header bar */}
          <div
            className="px-4 py-2 flex items-center justify-between"
            style={{ backgroundColor: colors.coral, marginLeft: '-5mm', marginRight: '-5mm', marginTop: '-5mm' }}
          >
            <div>
              <h1 className="font-black tracking-tight" style={{ color: colors.white, fontSize: '18px' }}>
                TEAM INVESTMENT DECK
              </h1>
              <p className="font-semibold" style={{ color: colors.white, opacity: 0.9, fontSize: '8px' }}>
                Four Engineers Who Ship Production-Grade AI/Cloud Systems at Fortune 500 Scale
              </p>
            </div>
            <div className="text-right">
              <div className="font-bold" style={{ color: colors.white, fontSize: '9px' }}>University of Washington</div>
              <div className="font-semibold" style={{ color: colors.white, opacity: 0.9, fontSize: '8px' }}>MSIM 2026 | Available June 2026</div>
            </div>
          </div>

          {/* Key Metrics Bar */}
          <div
            className="px-4 py-2"
            style={{ backgroundColor: colors.teal, marginLeft: '-5mm', marginRight: '-5mm' }}
          >
            <div className="grid grid-cols-6 gap-2">
              {keyMetrics.map((metric, index) => (
                <div key={index} className="text-center">
                  <div className="font-black leading-none mb-0.5" style={{ color: colors.white, fontSize: '14px' }}>
                    {metric.value}
                  </div>
                  <div className="font-bold uppercase tracking-wide" style={{ color: colors.white, fontSize: '7px' }}>
                    {metric.label}
                  </div>
                  <div className="font-medium" style={{ color: colors.white, opacity: 0.8, fontSize: '6px' }}>
                    {metric.sub}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="py-2">
            {/* Value Proposition */}
            <div className="mb-3">
              <h2
                className="font-black uppercase tracking-wider mb-1 pb-0.5 border-b-2"
                style={{ color: colors.coral, borderColor: colors.coral, fontSize: '9px' }}
              >
                THE PROBLEM WE SOLVE
              </h2>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <p className="leading-tight mb-1" style={{ color: colors.black, fontSize: '8px' }}>
                    <span className="font-bold" style={{ color: colors.coral }}>85% of enterprise AI projects fail.</span> Not because models don't work—because implementations collapse under production load. Morgan Stanley queries take 5 minutes. AWS burns $1M on inefficient monitoring. SAP integrations bottleneck at 30% higher latency.
                  </p>
                  <p className="leading-tight font-bold" style={{ color: colors.deepBlue, fontSize: '8px' }}>
                    The issue isn't technology. It's execution at scale. We've proven it at AWS, Morgan Stanley, Rocket Mortgage, SAP, and o9 Solutions.
                  </p>
                </div>
                <div className="space-y-1">
                  <div className="flex items-start">
                    <div
                      className="w-1 h-1 rounded-full mr-1.5 mt-0.5 flex-shrink-0"
                      style={{ backgroundColor: colors.coral }}
                    />
                    <div>
                      <p className="font-bold leading-tight" style={{ color: colors.deepBlue, fontSize: '8px' }}>
                        Shipped, Not Hypothetical: 100+ production integrations, 20+ global implementations
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div
                      className="w-1 h-1 rounded-full mr-1.5 mt-0.5 flex-shrink-0"
                      style={{ backgroundColor: colors.coral }}
                    />
                    <div>
                      <p className="font-bold leading-tight" style={{ color: colors.deepBlue, fontSize: '8px' }}>
                        Technical + Business DNA: Founded profitable companies, consulted Fortune 500s
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div
                      className="w-1 h-1 rounded-full mr-1.5 mt-0.5 flex-shrink-0"
                      style={{ backgroundColor: colors.coral }}
                    />
                    <div>
                      <p className="font-bold leading-tight" style={{ color: colors.deepBlue, fontSize: '8px' }}>
                        Full-Stack Execution: Cloud → AI → Product → Delivery. Zero handoffs.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Proven Traction - Dense Info */}
            <div className="mb-3">
              <h2
                className="font-black uppercase tracking-wider mb-1 pb-0.5 border-b-2"
                style={{ color: colors.teal, borderColor: colors.teal, fontSize: '9px' }}
              >
                PROVEN TRACTION AT SCALE
              </h2>
              <div className="space-y-1">
                {traction.map((item, index) => (
                  <div
                    key={index}
                    className="pl-2 py-0.5"
                    style={{
                      borderColor: index % 2 === 0 ? colors.coral : colors.teal,
                      backgroundColor: colors.lightGray,
                      borderLeftWidth: '2px',
                      borderLeftStyle: 'solid'
                    }}
                  >
                    <div className="flex items-start justify-between mb-0.5">
                      <span className="font-black uppercase tracking-wide" style={{ color: colors.coral, fontSize: '7px' }}>
                        {item.company}
                      </span>
                      <span className="font-semibold" style={{ color: colors.darkGray, fontSize: '7px' }}>
                        {item.role}
                      </span>
                    </div>
                    <p className="font-bold leading-tight mb-0.5" style={{ color: colors.deepBlue, fontSize: '8px' }}>
                      {item.impact}
                    </p>
                    <p className="font-medium" style={{ color: colors.darkGray, fontSize: '7px' }}>
                      Tech: {item.tech}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Founder DNA */}
            <div className="mb-2">
              <h2
                className="font-black uppercase tracking-wider mb-1 pb-0.5 border-b-2"
                style={{ color: colors.coral, borderColor: colors.coral, fontSize: '9px' }}
              >
                ENTREPRENEURIAL DNA
              </h2>
              <div
                className="p-2"
                style={{ backgroundColor: colors.coral }}
              >
                <p className="font-black mb-1" style={{ color: colors.white, fontSize: '8px' }}>
                  AaMaRa Technologies: 2 Co-Founders on This Team
                </p>
                <div className="grid grid-cols-2 gap-2 mb-1">
                  <div>
                    <p className="font-bold mb-0.5" style={{ color: colors.white, fontSize: '7px' }}>BUSINESS OUTCOMES</p>
                    <ul className="space-y-0" style={{ color: colors.white, fontSize: '7px' }}>
                      <li>• $35K profit, bootstrapped (zero VC)</li>
                      <li>• Beat Zoho for Dubai Islamic Bank RFP</li>
                      <li>• 5 products shipped + AMC contracts</li>
                      <li>• Profitable from Day 0</li>
                    </ul>
                  </div>
                  <div>
                    <p className="font-bold mb-0.5" style={{ color: colors.white, fontSize: '7px' }}>LEADERSHIP PROOF</p>
                    <ul className="space-y-0" style={{ color: colors.white, fontSize: '7px' }}>
                      <li>• Led 15 developers across 6 projects</li>
                      <li>• 26 months, always profitable</li>
                      <li>• Product lifecycle: PRD → OKRs → GTM</li>
                      <li>• Real exit options (chose grad school)</li>
                    </ul>
                  </div>
                </div>
                <p className="italic font-semibold" style={{ color: colors.white, opacity: 0.95, fontSize: '7px' }}>
                  "We've already built a company once. Now we're building products at Fortune 500 scale."
                </p>
              </div>
            </div>

            {/* Academic Excellence */}
            <div className="mb-2">
              <h2
                className="font-black uppercase tracking-wider mb-1 pb-0.5 border-b-2"
                style={{ color: colors.teal, borderColor: colors.teal, fontSize: '9px' }}
              >
                ACADEMIC CREDENTIALS
              </h2>
              <div className="grid grid-cols-2 gap-2">
                <div>
                  <p className="font-bold uppercase mb-0.5" style={{ color: colors.deepBlue, fontSize: '7px' }}>Education</p>
                  <div className="space-y-0.5">
                    <div>
                      <p className="font-bold" style={{ color: colors.black, fontSize: '8px' }}>University of Washington</p>
                      <p style={{ color: colors.darkGray, fontSize: '7px' }}>MSIM 2026 | GPA: 3.88-4.0</p>
                    </div>
                    <div>
                      <p className="font-bold" style={{ color: colors.black, fontSize: '8px' }}>Top Engineering Schools (India)</p>
                      <p style={{ color: colors.darkGray, fontSize: '7px' }}>CS/IT | GPA: 8.71-9.22/10</p>
                    </div>
                  </div>
                </div>
                <div>
                  <p className="font-bold uppercase mb-0.5" style={{ color: colors.deepBlue, fontSize: '7px' }}>Recognition</p>
                  <div className="space-y-0.5">
                    <div className="flex items-center justify-between">
                      <span style={{ color: colors.darkGray, fontSize: '7px' }}>IEEE Best Paper Award</span>
                      <span className="font-bold" style={{ color: colors.coral, fontSize: '7px' }}>Published</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span style={{ color: colors.darkGray, fontSize: '7px' }}>AWS Internship 2025</span>
                      <span className="font-bold" style={{ color: colors.teal, fontSize: '7px' }}>Confirmed</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span style={{ color: colors.darkGray, fontSize: '7px' }}>Morgan Stanley SDE 2</span>
                      <span className="font-bold" style={{ color: colors.teal, fontSize: '7px' }}>Promoted</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span style={{ color: colors.darkGray, fontSize: '7px' }}>SAP Early Talent Ambassador</span>
                      <span className="font-bold" style={{ color: colors.coral, fontSize: '7px' }}>1,500 team</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Core Competencies Preview */}
            <div className="mb-2">
              <h2
                className="font-black uppercase tracking-wider mb-1 pb-0.5 border-b-2"
                style={{ color: colors.coral, borderColor: colors.coral, fontSize: '9px' }}
              >
                CORE COMPETENCIES - 6 TECHNOLOGY DOMAINS
              </h2>
              <div className="grid grid-cols-3 gap-1.5">
                {technicalStack.map((stack, index) => (
                  <div
                    key={index}
                    className="p-1.5 border"
                    style={{
                      borderColor: index % 3 === 0 ? colors.coral : index % 3 === 1 ? colors.teal : colors.deepBlue,
                      backgroundColor: colors.lightGray,
                      borderWidth: '1px'
                    }}
                  >
                    <h3 className="font-black uppercase mb-0.5" style={{ color: colors.deepBlue, fontSize: '7px' }}>
                      {stack.category}
                    </h3>
                    <div className="flex flex-wrap gap-0.5">
                      {stack.items.slice(0, 4).map((item, i) => (
                        <span
                          key={i}
                          className="font-semibold px-0.5 py-0.5"
                          style={{
                            backgroundColor: colors.white,
                            color: colors.black,
                            border: `0.5px solid ${colors.darkGray}`,
                            fontSize: '6px'
                          }}
                        >
                          {item}
                        </span>
                      ))}
                      {stack.items.length > 4 && (
                        <span
                          className="font-bold px-0.5 py-0.5"
                          style={{
                            backgroundColor: colors.deepBlue,
                            color: colors.white,
                            fontSize: '6px'
                          }}
                        >
                          +{stack.items.length - 4} more
                        </span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Why Hire This Team */}
            <div>
              <h2
                className="font-black uppercase tracking-wider mb-1 pb-0.5 border-b-2"
                style={{ color: colors.teal, borderColor: colors.teal, fontSize: '9px' }}
              >
                WHY COMPANIES CHOOSE US
              </h2>
              <div className="grid grid-cols-2 gap-2">
                <div
                  className="p-1.5"
                  style={{ backgroundColor: colors.lightGray, borderLeft: `2px solid ${colors.coral}` }}
                >
                  <h3 className="font-black uppercase mb-0.5" style={{ color: colors.deepBlue, fontSize: '7px' }}>
                    We Ship, Not Theorize
                  </h3>
                  <p className="leading-tight" style={{ color: colors.black, fontSize: '6px' }}>
                    100+ production integrations, 20+ global implementations, $2M+ cost savings. Every line of code has run at Fortune 500 scale.
                  </p>
                </div>
                <div
                  className="p-1.5"
                  style={{ backgroundColor: colors.lightGray, borderLeft: `2px solid ${colors.teal}` }}
                >
                  <h3 className="font-black uppercase mb-0.5" style={{ color: colors.deepBlue, fontSize: '7px' }}>
                    Full-Stack Execution
                  </h3>
                  <p className="leading-tight" style={{ color: colors.black, fontSize: '6px' }}>
                    Cloud → AI → Product → GTM. No handoffs. Founded companies, consulted F500s, shipped AWS/Morgan Stanley systems.
                  </p>
                </div>
                <div
                  className="p-1.5"
                  style={{ backgroundColor: colors.lightGray, borderLeft: `2px solid ${colors.deepBlue}` }}
                >
                  <h3 className="font-black uppercase mb-0.5" style={{ color: colors.deepBlue, fontSize: '7px' }}>
                    Business + Technical DNA
                  </h3>
                  <p className="leading-tight" style={{ color: colors.black, fontSize: '6px' }}>
                    $35K profit (bootstrapped), beat Zoho for Dubai Islamic Bank. We understand P&L, not just pull requests.
                  </p>
                </div>
                <div
                  className="p-1.5"
                  style={{ backgroundColor: colors.lightGray, borderLeft: `2px solid ${colors.coral}` }}
                >
                  <h3 className="font-black uppercase mb-0.5" style={{ color: colors.deepBlue, fontSize: '7px' }}>
                    Available June 2026
                  </h3>
                  <p className="leading-tight" style={{ color: colors.black, fontSize: '6px' }}>
                    Graduating MSIM from UW. Taking 3 high-impact projects now. Ready for YC, VC-backed, or F500 teams.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom CTA - Add force-page-break */}
          <div
            className="px-4 py-2 force-page-break"
            style={{ backgroundColor: colors.deepBlue, marginLeft: '-5mm', marginRight: '-5mm' }}
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="font-black leading-tight" style={{ color: colors.white, fontSize: '10px' }}>
                  Available June 2026 | Taking 3 High-Impact Projects Now
                </p>
                <p className="font-semibold" style={{ color: colors.teal, fontSize: '7px' }}>
                  For YC companies, VC-backed startups, or Fortune 500 teams shipping production AI/Cloud systems
                </p>
              </div>
              <div className="text-right">
                <div className="flex gap-1 mb-0.5">
                  {teamMembers.slice(0, 2).map((member) => (
                    <div
                      key={member.id}
                      className="font-bold px-1.5 py-0.5"
                      style={{
                        backgroundColor: colors.coral,
                        color: colors.white,
                        fontSize: '6px'
                      }}
                    >
                      {member.email}
                    </div>
                  ))}
                </div>
                <p className="font-medium" style={{ color: colors.white, opacity: 0.7, fontSize: '6px' }}>
                  LinkedIn: /rahil911 | /siddarthbhave | /mathewjerrymeleth | /shreyasbsubramanya
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* PAGE 2 - TEAM DETAILS & TECHNICAL STACK */}
        <div>
          {/* Header */}
          <div
            className="px-4 py-1.5 flex items-center justify-between"
            style={{ backgroundColor: colors.teal, marginLeft: '-5mm', marginRight: '-5mm', marginTop: '-5mm' }}
          >
            <h1 className="font-black tracking-tight" style={{ color: colors.white, fontSize: '14px' }}>
              TEAM PROFILES & TECHNICAL STACK
            </h1>
            <span className="font-bold" style={{ color: colors.white, fontSize: '8px' }}>Page 2 of 2</span>
          </div>

          <div className="py-2">
            {/* Team Member Grid - Dense */}
            <div className="mb-3">
              <h2
                className="font-black uppercase tracking-wider mb-1.5 pb-0.5 border-b-2"
                style={{ color: colors.coral, borderColor: colors.coral, fontSize: '9px' }}
              >
                THE TEAM - 4 MEMBERS | 14+ COMBINED YEARS | $2M+ IMPACT
              </h2>
              <div className="grid grid-cols-2 gap-2">
                {teamMembers.map((member, index) => (
                  <div
                    key={member.id}
                    className="border p-2 team-member-card"
                    style={{
                      borderColor: index % 2 === 0 ? colors.coral : colors.teal,
                      backgroundColor: colors.lightGray,
                      borderWidth: '1.5px'
                    }}
                  >
                    <div className="flex gap-1.5 mb-1">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-12 h-12 object-cover"
                        style={{ filter: 'contrast(1.1)' }}
                      />
                      <div className="flex-1">
                        <h3 className="font-black leading-tight mb-0.5" style={{ color: colors.deepBlue, fontSize: '8px' }}>
                          {member.name}
                        </h3>
                        <p className="font-bold mb-0.5" style={{ color: colors.coral, fontSize: '7px' }}>
                          {member.role}
                        </p>
                        <div className="flex gap-0.5">
                          <span
                            className="font-bold px-1 py-0.5"
                            style={{ backgroundColor: colors.coral, color: colors.white, fontSize: '6px' }}
                          >
                            {member.keyMetrics.primary}
                          </span>
                          <span
                            className="font-bold px-1 py-0.5"
                            style={{ backgroundColor: colors.teal, color: colors.white, fontSize: '6px' }}
                          >
                            {member.keyMetrics.secondary}
                          </span>
                        </div>
                      </div>
                    </div>

                    <p className="leading-tight mb-1 font-medium" style={{ color: colors.black, fontSize: '7px' }}>
                      {member.summary}
                    </p>

                    <div className="mb-1">
                      <p className="font-bold uppercase mb-0.5" style={{ color: colors.deepBlue, fontSize: '6px' }}>
                        Top Experience
                      </p>
                      {member.experience.slice(0, 2).map((exp, i) => (
                        <div key={i} className="mb-0.5">
                          <div className="flex items-start justify-between">
                            <span className="font-bold" style={{ color: colors.black, fontSize: '7px' }}>
                              {exp.company}
                            </span>
                            <span style={{ color: colors.darkGray, fontSize: '6px' }}>
                              {exp.duration.split('–')[0].trim()}
                            </span>
                          </div>
                          <p className="leading-tight" style={{ color: colors.darkGray, fontSize: '6px' }}>
                            {exp.role} • {exp.achievements[0].substring(0, 65)}...
                          </p>
                        </div>
                      ))}
                    </div>

                    <div className="mb-1">
                      <p className="font-bold uppercase mb-0.5" style={{ color: colors.deepBlue, fontSize: '6px' }}>
                        Education
                      </p>
                      <div style={{ color: colors.darkGray, fontSize: '6px' }}>
                        <div className="flex justify-between">
                          <span className="font-bold">{member.education.masters.school}</span>
                          <span>GPA: {member.education.masters.gpa}</span>
                        </div>
                      </div>
                    </div>

                    <div>
                      <p className="font-bold uppercase mb-0.5" style={{ color: colors.deepBlue, fontSize: '6px' }}>
                        Core Skills
                      </p>
                      <div className="flex flex-wrap gap-0.5">
                        {member.topSkills.slice(0, 3).map((skill, i) => (
                          <span
                            key={i}
                            className="font-bold px-1 py-0.5"
                            style={{
                              backgroundColor: colors.white,
                              color: colors.deepBlue,
                              border: `0.5px solid ${colors.deepBlue}`,
                              fontSize: '6px'
                            }}
                          >
                            {skill.length > 18 ? skill.substring(0, 18) + '...' : skill}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="mt-1 pt-1 border-t flex items-center justify-between" style={{ borderColor: colors.deepBlue }}>
                      <span className="font-semibold" style={{ color: colors.darkGray, fontSize: '5px' }}>
                        {member.email}
                      </span>
                      <span className="font-semibold" style={{ color: colors.darkGray, fontSize: '5px' }}>
                        {member.phone}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Technical Stack - Maximum Density */}
            <div className="mb-2">
              <h2
                className="font-black uppercase tracking-wider mb-1 pb-0.5 border-b-2"
                style={{ color: colors.teal, borderColor: colors.teal, fontSize: '9px' }}
              >
                COMPLETE TECHNICAL STACK - 50+ TECHNOLOGIES
              </h2>
              <div className="grid grid-cols-3 gap-1.5">
                {technicalStack.map((stack, index) => (
                  <div
                    key={index}
                    className="p-1.5 border"
                    style={{
                      borderColor: index % 3 === 0 ? colors.coral : index % 3 === 1 ? colors.teal : colors.deepBlue,
                      backgroundColor: colors.lightGray,
                      borderWidth: '1px'
                    }}
                  >
                    <h3 className="font-black uppercase mb-0.5" style={{ color: colors.deepBlue, fontSize: '7px' }}>
                      {stack.category}
                    </h3>
                    <div className="flex flex-wrap gap-0.5">
                      {stack.items.map((item, i) => (
                        <span
                          key={i}
                          className="font-semibold px-0.5 py-0.5"
                          style={{
                            backgroundColor: colors.white,
                            color: colors.black,
                            border: `0.5px solid ${colors.darkGray}`,
                            fontSize: '6px'
                          }}
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Detailed Experience Highlights */}
            <div className="mb-2">
              <h2
                className="font-black uppercase tracking-wider mb-1 pb-0.5 border-b-2"
                style={{ color: colors.coral, borderColor: colors.coral, fontSize: '9px' }}
              >
                DETAILED ACHIEVEMENTS - QUANTIFIED IMPACT
              </h2>
              <div className="grid grid-cols-2 gap-1.5">
                <div>
                  <div className="mb-1">
                    <h3 className="font-black uppercase mb-0.5" style={{ color: colors.deepBlue, fontSize: '7px' }}>
                      Cost Optimization & Efficiency
                    </h3>
                    <ul className="space-y-0" style={{ color: colors.black, fontSize: '6px' }}>
                      <li>• <span className="font-bold" style={{ color: colors.coral }}>$1M/year</span> AWS cost savings via eBPF monitoring optimization</li>
                      <li>• <span className="font-bold" style={{ color: colors.coral }}>$250K</span> revenue recovery insights from external data integration</li>
                      <li>• <span className="font-bold" style={{ color: colors.coral }}>35%</span> faster data ingestion at Rocket Mortgage (multi-TB datasets)</li>
                      <li>• <span className="font-bold" style={{ color: colors.coral }}>40%</span> deployment efficiency improvement (20+ CI/CD migrations)</li>
                      <li>• <span className="font-bold" style={{ color: colors.coral }}>30%</span> latency reduction across 30+ SAP cloud connections</li>
                      <li>• <span className="font-bold" style={{ color: colors.coral }}>70%</span> batch-run time reduction across 20+ global implementations</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-black uppercase mb-0.5" style={{ color: colors.deepBlue, fontSize: '7px' }}>
                      Scale & Performance
                    </h3>
                    <ul className="space-y-0" style={{ color: colors.black, fontSize: '6px' }}>
                      <li>• <span className="font-bold" style={{ color: colors.teal }}>75M records/min</span> Kafka pipeline at Morgan Stanley</li>
                      <li>• <span className="font-bold" style={{ color: colors.teal }}>5min → 45sec</span> query time (83% reduction) with Mimir integration</li>
                      <li>• <span className="font-bold" style={{ color: colors.teal }}>100+ GB</span> real-time ERP/CRM data pipelines to ML microservices</li>
                      <li>• <span className="font-bold" style={{ color: colors.teal }}>10,000+</span> business documents daily through hybrid cloud connections</li>
                      <li>• <span className="font-bold" style={{ color: colors.teal }}>48h → minutes</span> workflow cycle time reduction via AI orchestration</li>
                    </ul>
                  </div>
                </div>
                <div>
                  <div className="mb-1">
                    <h3 className="font-black uppercase mb-0.5" style={{ color: colors.deepBlue, fontSize: '7px' }}>
                      Production Deployments
                    </h3>
                    <ul className="space-y-0" style={{ color: colors.black, fontSize: '6px' }}>
                      <li>• <span className="font-bold" style={{ color: colors.coral }}>100+</span> SAP S/4HANA integrations for 15+ Fortune 500 clients</li>
                      <li>• <span className="font-bold" style={{ color: colors.coral }}>20+</span> global supply chain implementations</li>
                      <li>• <span className="font-bold" style={{ color: colors.coral }}>6 products</span> shipped in 26 months at AaMaRa (profitable Day 0)</li>
                      <li>• <span className="font-bold" style={{ color: colors.coral }}>Multi-tenant SaaS</span> for Dubai Islamic Bank (beat Zoho)</li>
                      <li>• <span className="font-bold" style={{ color: colors.coral }}>1,200-employee</span> factory ERP digitization (25% efficiency gain)</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-black uppercase mb-0.5" style={{ color: colors.deepBlue, fontSize: '7px' }}>
                      Leadership & Recognition
                    </h3>
                    <ul className="space-y-0" style={{ color: colors.black, fontSize: '6px' }}>
                      <li>• <span className="font-bold" style={{ color: colors.teal }}>15 developers</span> led across 6 projects at AaMaRa Technologies</li>
                      <li>• <span className="font-bold" style={{ color: colors.teal }}>1,500 team</span> represented as SAP Early Talent Ambassador ($60K budget)</li>
                      <li>• <span className="font-bold" style={{ color: colors.teal }}>IEEE Best Paper</span> Award for deep learning research (published)</li>
                      <li>• <span className="font-bold" style={{ color: colors.teal }}>500+ certified</span> professionals from o9 Solutions course content</li>
                      <li>• <span className="font-bold" style={{ color: colors.teal }}>Early promotion</span> to SDE 2 at Morgan Stanley + tech-excellence award</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* What We're Looking For */}
            <div>
              <h2
                className="font-black uppercase tracking-wider mb-1 pb-0.5 border-b-2"
                style={{ color: colors.deepBlue, borderColor: colors.deepBlue, fontSize: '9px' }}
              >
                IDEAL ENGAGEMENT PROFILE
              </h2>
              <div className="grid grid-cols-3 gap-1.5">
                <div
                  className="p-1.5"
                  style={{ backgroundColor: colors.lightGray, borderLeft: `2px solid ${colors.coral}` }}
                >
                  <h3 className="font-black uppercase mb-0.5" style={{ color: colors.deepBlue, fontSize: '7px' }}>
                    Company Type
                  </h3>
                  <ul className="space-y-0" style={{ color: colors.black, fontSize: '6px' }}>
                    <li>• YC-backed startups (Seed-Series B)</li>
                    <li>• VC-funded AI/SaaS companies</li>
                    <li>• Fortune 500 innovation teams</li>
                    <li>• Enterprise product companies</li>
                  </ul>
                </div>
                <div
                  className="p-1.5"
                  style={{ backgroundColor: colors.lightGray, borderLeft: `2px solid ${colors.teal}` }}
                >
                  <h3 className="font-black uppercase mb-0.5" style={{ color: colors.deepBlue, fontSize: '7px' }}>
                    Project Scope
                  </h3>
                  <ul className="space-y-0" style={{ color: colors.black, fontSize: '6px' }}>
                    <li>• Multi-agent AI systems at scale</li>
                    <li>• Cloud infrastructure optimization</li>
                    <li>• Enterprise ERP/CRM integrations</li>
                    <li>• Data pipeline architecture (TB+)</li>
                    <li>• Product strategy & GTM execution</li>
                  </ul>
                </div>
                <div
                  className="p-1.5"
                  style={{ backgroundColor: colors.lightGray, borderLeft: `2px solid ${colors.deepBlue}` }}
                >
                  <h3 className="font-black uppercase mb-0.5" style={{ color: colors.deepBlue, fontSize: '7px' }}>
                    Our Value
                  </h3>
                  <ul className="space-y-0" style={{ color: colors.black, fontSize: '6px' }}>
                    <li>• Ship to production (not just PoCs)</li>
                    <li>• Technical + business execution</li>
                    <li>• Founded/scaled companies before</li>
                    <li>• Fortune 500 battle-tested</li>
                    <li>• Available June 2026 full-time</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Footer */}
          <div
            className="px-4 py-1.5"
            style={{ backgroundColor: colors.deepBlue, marginLeft: '-5mm', marginRight: '-5mm', marginBottom: '-5mm' }}
          >
            <div className="flex items-center justify-between">
              <div className="font-bold" style={{ color: colors.white, fontSize: '7px' }}>
                Contact: rahil911@uw.edu | sidbhave@uw.edu | mathewjerry07@gmail.com | shrey674@uw.edu
              </div>
              <div className="font-bold" style={{ color: colors.teal, fontSize: '7px' }}>
                University of Washington MSIM 2026
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Print-specific styles */}
      <style>
        {`
        .a4-container {
          width: 210mm;
          padding: 5mm;
        }

        .force-page-break {
          page-break-after: always !important;
        }

        .team-member-card {
          page-break-inside: avoid !important;
        }

        @media print {
          @page {
            size: A4 portrait;
            margin: 0;
          }
          body {
            -webkit-print-color-adjust: exact;
            print-color-adjust: exact;
          }
          .no-print {
            display: none !important;
          }
          /* Ensure colors print correctly */
          * {
            -webkit-print-color-adjust: exact;
            print-color-adjust: exact;
          }
        }
        `}
      </style>
    </div>
  );
};

export default Prototype10;
