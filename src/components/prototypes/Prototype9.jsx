import { useRef } from 'react';
import { motion } from 'framer-motion';
import { teamMembers } from '../../data/teamData';
import PrintButton from '../shared/PrintButton';
import BackButton from '../shared/BackButton';

const Prototype9 = () => {
  const printRef = useRef();

  // Academic color palette
  const colors = {
    background: '#FAFAFA',
    text: '#2C2C2C',
    accent: '#2196F3',
    muted: '#607D8B',
    border: '#E0E0E0',
    lightBlue: '#E3F2FD',
    darkGray: '#424242'
  };

  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <PrintButton targetRef={printRef} fileName="research-team-profile" />
      <BackButton />

      <div ref={printRef} className="a4-container mx-auto bg-white shadow-2xl" style={{
        width: '210mm',
        padding: '4mm',
        backgroundColor: colors.background,
        fontFamily: 'Georgia, serif'
      }}>
        {/* PAGE 1 CONTENT */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Academic Paper Header */}
          <div className="pt-[1mm] pb-[3mm] border-b-2" style={{ borderColor: colors.accent }}>
            <div className="text-center mb-2">
              <h1 className="text-[16px] font-bold mb-1 leading-tight" style={{
                color: colors.text,
                fontFamily: 'Georgia, serif',
                letterSpacing: '-0.3px'
              }}>
                Enterprise-Scale Technology Solutions Through Multidisciplinary Engineering:
              </h1>
              <h2 className="text-[13px] font-semibold mb-1" style={{ color: colors.accent }}>
                A Comprehensive Analysis of Cloud, AI/ML, and Product Management Capabilities
              </h2>
              <p className="text-[8px] italic" style={{ color: colors.muted }}>
                Technical White Paper on Integrated Systems Architecture and Business Impact Delivery
              </p>
            </div>

            {/* Authors */}
            <div className="text-center text-[8px] mt-2" style={{ color: colors.text }}>
              <p className="mb-1">
                <span className="font-bold">Mathew Jerry Meleth</span><sup>1,†</sup>,
                <span className="font-bold"> Rahil M. Harihar</span><sup>2,‡</sup>,
                <span className="font-bold"> Siddarth Bhave</span><sup>3,*</sup>,
                <span className="font-bold"> Shreyas B Subramanya</span><sup>4,§</sup>
              </p>
              <p className="text-[8px]" style={{ color: colors.muted }}>
                <sup>1-4</sup>Information Management Program, University of Washington, Seattle, WA 98105
              </p>
              <p className="text-[7px] mt-1" style={{ color: colors.muted }}>
                <sup>†</sup>Cloud & Data Engineer, GTA | <sup>‡</sup>Product Lead & AI/ML Engineer, Allan Frank Apprentice |
                <sup>*</sup>Software Engineer, IEEE Best Paper Award | <sup>§</sup>Senior Product Manager, Supply Chain
              </p>
            </div>
          </div>

          {/* Two-column content */}
          <div className="py-[1.5mm]">
            {/* Abstract */}
            <section className="mb-1.5">
              <h2 className="text-[9px] font-bold mb-0.5 uppercase tracking-wide" style={{ color: colors.accent }}>
                Abstract
              </h2>
              <p className="text-[7.5px] leading-tight text-justify" style={{ color: colors.text }}>
                This paper presents a comprehensive analysis of an elite technical team comprising four graduate researchers with 13+ years of combined
                industry experience spanning cloud infrastructure, artificial intelligence, enterprise software engineering, and product management.
                The team has demonstrated quantifiable impact across Fortune 500 organizations, delivering $2M+ in verified cost savings, processing
                75M+ Kafka records/minute, and managing 20+ global supply-chain implementations. Key technical contributions include: (1) AWS serverless
                architecture optimization achieving 35% data ingestion improvements [1]; (2) eBPF-based observability frameworks with sub-5μs latency
                overhead generating $1M annual savings [2]; (3) Multi-agent AI orchestration systems reducing enterprise workflow cycles from 48 hours
                to minutes [3]; (4) Distributed ETL pipelines with 70% batch-run optimization [4]. All team members hold Master of Science degrees in
                Information Management from University of Washington (GPA: 3.88-4.0) with specializations in AI/ML systems, cloud engineering, and
                strategic product development. Industrial partnerships include Amazon Web Services, Morgan Stanley, SAP, o9 Solutions, and Rocket Mortgage.
              </p>
            </section>

            {/* Keywords */}
            <section className="mb-1.5 pb-1 border-b" style={{ borderColor: colors.border }}>
              <p className="text-[6.5px]" style={{ color: colors.muted }}>
                <span className="font-semibold">Keywords:</span> Cloud Architecture, Multi-Agent AI, Distributed Systems, Product Management,
                ETL Pipelines, Kubernetes, Enterprise Integration, Supply Chain Optimization, eBPF Observability, Machine Learning
              </p>
            </section>

            {/* Two-column layout */}
            <div className="grid grid-cols-2 gap-2">
              {/* Left Column */}
              <div>
                {/* Section 1: Introduction */}
                <section className="mb-1.5">
                  <h2 className="text-[9px] font-bold mb-0.5" style={{ color: colors.text }}>
                    1. INTRODUCTION
                  </h2>
                  <p className="text-[7px] leading-tight text-justify mb-0.5" style={{ color: colors.text }}>
                    Contemporary enterprise technology demands cross-functional expertise spanning cloud infrastructure, machine learning systems,
                    and business intelligence. This research team combines deep technical capabilities with demonstrated business outcomes across
                    multiple Fortune 500 deployments. Our collective expertise addresses the critical gap between academic AI/ML research and
                    production-scale enterprise systems requiring 99.9%+ uptime, regulatory compliance, and measurable ROI.
                  </p>
                  <p className="text-[7px] leading-tight text-justify" style={{ color: colors.text }}>
                    The team's 13+ years combined experience spans: Amazon Web Services (DynamoDB Networking), Morgan Stanley (Observability
                    Platform Engineering), SAP (Enterprise Integration Consulting for 15+ Fortune 500 clients), o9 Solutions (Advanced Planning
                    Systems), and Rocket Mortgage (Cloud Data Engineering). This diversity enables holistic solution design addressing technical,
                    operational, and strategic business requirements.
                  </p>
                </section>

                {/* Section 2: Technical Capabilities */}
                <section className="mb-1.5">
                  <h2 className="text-[9px] font-bold mb-0.5" style={{ color: colors.text }}>
                    2. CORE TECHNICAL CAPABILITIES
                  </h2>

                  <h3 className="text-[8px] font-semibold mb-0.5" style={{ color: colors.accent }}>
                    2.1 Cloud Infrastructure & Distributed Systems
                  </h3>
                  <p className="text-[7px] leading-tight text-justify mb-0.5" style={{ color: colors.text }}>
                    <span className="font-semibold">AWS Expertise:</span> Serverless architecture (Lambda, Step Functions), data lakes (S3, Glue,
                    Athena), multi-terabyte ETL workloads. Demonstrated: 35% ingestion time reduction, 40% deployment efficiency improvement via
                    CircleCI → GitHub Actions migration [1].
                  </p>
                  <p className="text-[7px] leading-tight text-justify mb-0.5" style={{ color: colors.text }}>
                    <span className="font-semibold">Azure Stack:</span> Databricks PySpark pipelines, Data Factory orchestration, Data Lake Storage.
                    Achievements: 40% processing acceleration, $250K revenue-loss discovery through external dataset integration [5].
                  </p>
                  <p className="text-[7px] leading-tight text-justify mb-0.5" style={{ color: colors.text }}>
                    <span className="font-semibold">Kubernetes & Observability:</span> eBPF-based metrics collection with sub-5μs latency overhead,
                    Mimir time-series database integration (50% retention increase, 5min → 45sec query optimization), Prometheus/Grafana stack [2,6].
                  </p>

                  <h3 className="text-[8px] font-semibold mb-0.5 mt-1" style={{ color: colors.accent }}>
                    2.2 Artificial Intelligence & Machine Learning
                  </h3>
                  <p className="text-[7px] leading-tight text-justify mb-0.5" style={{ color: colors.text }}>
                    <span className="font-semibold">Multi-Agent Orchestration:</span> LangChain, CrewAI, OpenAI SWARM frameworks. Production
                    implementation: GPT-4 central reasoning engine coordinating 5 domain agents (Finance, SCM, HR, Customer Service, Operations)
                    with Pydantic-validated REST/MQ/IDoc ingestion [3].
                  </p>
                  <p className="text-[7px] leading-tight text-justify mb-0.5" style={{ color: colors.text }}>
                    <span className="font-semibold">ML Microservices:</span> Containerized SARIMAX/Prophet (time-series), XGBoost/LightGBM
                    (classification), Isolation Forest/Autoencoder (anomaly detection), LSTM deep learning. Real-time pipelines processing 100GB+
                    historical + 5GB/day incremental with 90% accuracy, sub-200ms inference latency [3].
                  </p>
                  <p className="text-[7px] leading-tight text-justify" style={{ color: colors.text }}>
                    <span className="font-semibold">Frameworks:</span> TensorFlow, Keras, PyTorch, Sklearn, NLTK, Hugging Face, FAISS vector search.
                    NVIDIA Artificial Neural Networks certification, IEEE Best Paper Award for deep learning pose classification [7].
                  </p>

                  <h3 className="text-[8px] font-semibold mb-0.5 mt-1" style={{ color: colors.accent }}>
                    2.3 Distributed Data Processing
                  </h3>
                  <p className="text-[7px] leading-tight text-justify mb-0.5" style={{ color: colors.text }}>
                    <span className="font-semibold">Big Data Pipelines:</span> PySpark, Hadoop, Spark SQL processing multi-terabyte datasets.
                    Kafka streaming architectures extracting 75M records/minute with OpenTSDB/Cortex storage backends [6].
                  </p>
                  <p className="text-[7px] leading-tight text-justify mb-0.5" style={{ color: colors.text }}>
                    <span className="font-semibold">Database Technologies:</span> PostgreSQL, MongoDB, MySQL, Cassandra, SQL Server, DynamoDB.
                    Delta Lake validation frameworks ensuring high-quality ERP data flow across global operations [8].
                  </p>
                  <p className="text-[7px] leading-tight text-justify" style={{ color: colors.text }}>
                    <span className="font-semibold">Real-world Impact:</span> Raw material cost analysis automation reducing processing from
                    1 month → 2 days; 20+ CI/CD pipeline migrations; automated logging/monitoring improving reliability by 25% [1,5].
                  </p>
                </section>

                {/* Section 3: Business Impact */}
                <section className="mb-1.5">
                  <h2 className="text-[9px] font-bold mb-0.5" style={{ color: colors.text }}>
                    3. QUANTIFIED BUSINESS IMPACT
                  </h2>

                  <h3 className="text-[8px] font-semibold mb-0.5" style={{ color: colors.accent }}>
                    3.1 Cost Optimization & Revenue Generation
                  </h3>
                  <ul className="text-[7px] leading-tight mb-0.5 ml-3 space-y-0.5" style={{ color: colors.text }}>
                    <li>• <span className="font-semibold">$1M annual savings</span> via eBPF network monitoring (AWS DynamoDB) [2]</li>
                    <li>• <span className="font-semibold">$250K revenue recovery</span> through Azure data integration (Mu Sigma) [5]</li>
                    <li>• <span className="font-semibold">$35K bootstrapped profit</span> over 3 years (AaMaRa Technologies SaaS) [9]</li>
                    <li>• <span className="font-semibold">$10K/month Google Ads</span> generating $18K donations in 60 days [10]</li>
                  </ul>

                  <h3 className="text-[8px] font-semibold mb-0.5 mt-0.5" style={{ color: colors.accent }}>
                    3.2 Performance & Efficiency Improvements
                  </h3>
                  <ul className="text-[7px] leading-tight mb-0.5 ml-3 space-y-0.5" style={{ color: colors.text }}>
                    <li>• <span className="font-semibold">70% batch-run reduction</span> in supply-chain planning (o9 Solutions) [4]</li>
                    <li>• <span className="font-semibold">48h → minutes</span> workflow cycle time via AI orchestration [3]</li>
                    <li>• <span className="font-semibold">35% data ingestion improvement</span> (Rocket Mortgage serverless) [1]</li>
                    <li>• <span className="font-semibold">40% deployment efficiency</span> (CircleCI → GitHub Actions) [1]</li>
                    <li>• <span className="font-semibold">50% metric retention increase</span> + 5min → 45sec queries (Mimir) [6]</li>
                    <li>• <span className="font-semibold">30% latency reduction</span> via SAP Cloud Connector (10K+ docs/day) [11]</li>
                    <li>• <span className="font-semibold">25% employee efficiency</span> increase via ERP digitization [12]</li>
                  </ul>

                  <h3 className="text-[8px] font-semibold mb-0.5 mt-0.5" style={{ color: colors.accent }}>
                    3.3 Enterprise-Scale Deployments
                  </h3>
                  <ul className="text-[7px] leading-tight mb-0.5 ml-3 space-y-0.5" style={{ color: colors.text }}>
                    <li>• <span className="font-semibold">15+ Fortune 500</span> strategic SAP implementations (S/4HANA, ECC, SuccessFactors)</li>
                    <li>• <span className="font-semibold">100+ complex integrations</span> deployed (SAP CPI: SOAP, OData, IDoc adapters)</li>
                    <li>• <span className="font-semibold">20+ global implementations</span> of Advanced Planning Systems</li>
                    <li>• <span className="font-semibold">75M Kafka records/min</span> distributed ETL pipeline throughput [6]</li>
                    <li>• <span className="font-semibold">500+ certified professionals</span> via o9 platform training content [8]</li>
                  </ul>
                </section>
              </div>

              {/* Right Column */}
              <div>
                {/* Section 4: Team Composition */}
                <section className="mb-1.5">
                  <h2 className="text-[9px] font-bold mb-0.5" style={{ color: colors.text }}>
                    4. TEAM COMPOSITION & EXPERTISE
                  </h2>

                  {/* Mathew */}
                  <div className="mb-1.5 pb-1.5 border-b" style={{ borderColor: colors.border }}>
                    <h3 className="text-[8px] font-bold mb-0.5" style={{ color: colors.text }}>
                      4.1 Mathew Jerry Meleth
                    </h3>
                    <p className="text-[6.5px] italic mb-0.5" style={{ color: colors.muted }}>
                      Cloud & Data Engineer | mathewjerry07@gmail.com | +1 (206) 941-5460
                    </p>
                    <p className="text-[7px] leading-tight mb-0.5" style={{ color: colors.text }}>
                      <span className="font-semibold">Education:</span> MS Information Management (UW, 4.0/4.0, 2024-2026); BTech Information
                      Technology (VIT, 8.71/10, 2021). iSchool Scholar, Graduate Teaching Assistant.
                    </p>
                    <p className="text-[7px] leading-tight mb-0.5" style={{ color: colors.text }}>
                      <span className="font-semibold">Core Expertise:</span> AWS (Lambda, Step Functions, S3, Glue, Athena), Azure (Databricks,
                      Data Factory, Data Lake), ETL Pipeline Automation, Serverless Architecture, Data Warehousing.
                    </p>
                    <p className="text-[7px] leading-tight mb-0.5" style={{ color: colors.text }}>
                      <span className="font-semibold">Key Achievements:</span>
                    </p>
                    <ul className="text-[6.5px] leading-tight ml-3 space-y-0.5" style={{ color: colors.text }}>
                      <li>• Rocket Mortgage: AWS serverless pipelines, 35% ingestion reduction, 20+ CI/CD migrations (40% efficiency)</li>
                      <li>• Mu Sigma: PySpark/ADF pipelines (40% speed-up), $250K revenue discovery, 1mo → 2day processing</li>
                      <li>• Adobe: Python automation reducing manual effort 20%</li>
                      <li>• 3x Star Performer recognition for enterprise workflow acceleration</li>
                    </ul>
                  </div>

                  {/* Rahil */}
                  <div className="mb-1.5 pb-1.5 border-b" style={{ borderColor: colors.border }}>
                    <h3 className="text-[8px] font-bold mb-0.5" style={{ color: colors.text }}>
                      4.2 Rahil M. Harihar
                    </h3>
                    <p className="text-[6.5px] italic mb-0.5" style={{ color: colors.muted }}>
                      Product Lead & AI/ML Engineer | rahil911@uw.edu | +1 (206) 245 0653
                    </p>
                    <p className="text-[7px] leading-tight mb-0.5" style={{ color: colors.text }}>
                      <span className="font-semibold">Education:</span> MS Information Management - AI + Product/Project Mgmt (UW, 3.9/4, 2024-2026);
                      BTech Computer Science (Ramaiah, 2018-2022). Allan Frank Apprentice, NVIDIA ANN Certified, SAP Certified.
                    </p>
                    <p className="text-[7px] leading-tight mb-0.5" style={{ color: colors.text }}>
                      <span className="font-semibold">Core Expertise:</span> Product Management & Strategy, Multi-Agent AI (LangChain, CrewAI,
                      SWARM), ERP Integration (SAP S/4HANA), Full-Stack Development (React, Node, Flask), Go-To-Market Strategy.
                    </p>
                    <p className="text-[7px] leading-tight mb-0.5" style={{ color: colors.text }}>
                      <span className="font-semibold">Key Achievements:</span>
                    </p>
                    <ul className="text-[6.5px] leading-tight ml-3 space-y-0.5" style={{ color: colors.text }}>
                      <li>• Allan Frank: 5-agent orchestration (LangChain/CrewAI), 100GB+ ML pipelines (90% accuracy), 48h → min cycles</li>
                      <li>• SAP: 15+ Fortune 500 clients, 100+ CPI integrations, 30+ Cloud Connector configs (30% latency cut)</li>
                      <li>• AaMaRa Tech (Founder/CEO): $35K profit, Dubai Islamic Bank RFP win vs Zoho, 5 products shipped</li>
                      <li>• Early Talent Ambassador: 1,500+ employees, $60K budget management</li>
                    </ul>
                  </div>

                  {/* Siddarth */}
                  <div className="mb-1.5 pb-1.5 border-b" style={{ borderColor: colors.border }}>
                    <h3 className="text-[8px] font-bold mb-0.5" style={{ color: colors.text }}>
                      4.3 Siddarth Bhave
                    </h3>
                    <p className="text-[6.5px] italic mb-0.5" style={{ color: colors.muted }}>
                      Software Development Engineer | sidbhave@uw.edu | +1 (206) 859 3417
                    </p>
                    <p className="text-[7px] leading-tight mb-0.5" style={{ color: colors.text }}>
                      <span className="font-semibold">Education:</span> MS Information Management (UW, 3.9/4, 2024-2026); BE Computer Science
                      (Ramaiah, 9.22/10, 2018-2022). IEEE CSITSS-23 Best Paper Award.
                    </p>
                    <p className="text-[7px] leading-tight mb-0.5" style={{ color: colors.text }}>
                      <span className="font-semibold">Core Expertise:</span> Distributed Systems & Cloud Infrastructure, Python/Java/C++,
                      Kubernetes & AWS Services, Multi-Agent AI (LangChain, CrewAI), System Design & Platform Engineering.
                    </p>
                    <p className="text-[7px] leading-tight mb-0.5" style={{ color: colors.text }}>
                      <span className="font-semibold">Key Achievements:</span>
                    </p>
                    <ul className="text-[6.5px] leading-tight ml-3 space-y-0.5" style={{ color: colors.text }}>
                      <li>• AWS: eBPF metrics framework (sub-5μs latency), $1M annual monitoring cost savings</li>
                      <li>• Morgan Stanley: Mimir integration (50% retention, 5min → 45sec queries), 75M Kafka rec/min ETL, early promotion</li>
                      <li>• AaMaRa (CTO): 15-dev team, 6 projects in 26mo, 1,200-employee ERP (25% efficiency gain), profitable day-0</li>
                      <li>• UW: AskHusky multi-agent assistant (CrewAI, Canvas LMS integration), demoed to iSchool Dean</li>
                    </ul>
                  </div>

                  {/* Shreyas */}
                  <div className="mb-1.5">
                    <h3 className="text-[8px] font-bold mb-0.5" style={{ color: colors.text }}>
                      4.4 Shreyas B Subramanya
                    </h3>
                    <p className="text-[6.5px] italic mb-0.5" style={{ color: colors.muted }}>
                      Senior Product Manager | shrey674@uw.edu | +1 (206) 530-9975
                    </p>
                    <p className="text-[7px] leading-tight mb-0.5" style={{ color: colors.text }}>
                      <span className="font-semibold">Education:</span> MS Information Management (UW, 3.88/4, 2024-2026); BE Mechanical Engineering
                      (BMS College, 3.98/4, 2020). Product Management Professional Certified.
                    </p>
                    <p className="text-[7px] leading-tight mb-0.5" style={{ color: colors.text }}>
                      <span className="font-semibold">Core Expertise:</span> Advanced Planning Systems (APS), Supply Planning & S&OP, Data Validation
                      & Integration, Stakeholder Management, Network Optimization, Delta Lake, Tableau/Power BI.
                    </p>
                    <p className="text-[7px] leading-tight mb-0.5" style={{ color: colors.text }}>
                      <span className="font-semibold">Key Achievements:</span>
                    </p>
                    <ul className="text-[6.5px] leading-tight ml-3 space-y-0.5" style={{ color: colors.text }}>
                      <li>• o9 Solutions: AI-driven automation agents (knowledge graphs), Delta Lake validation layer</li>
                      <li>• Product Manager II: Strategic roadmap (20+ global implementations), 70% batch-run reduction</li>
                      <li>• Product Manager I: Project-health tracking (35% faster resolution), 10+ hrs content (500+ certified)</li>
                      <li>• IISc Research: Low-pressure respiratory sensing device (EM-immune)</li>
                    </ul>
                  </div>
                </section>

                {/* Section 5: Skills Taxonomy */}
                <section className="mb-1.5">
                  <h2 className="text-[9px] font-bold mb-0.5" style={{ color: colors.text }}>
                    5. COMPREHENSIVE SKILLS TAXONOMY
                  </h2>

                  <div className="grid grid-cols-2 gap-1">
                    <div>
                      <h3 className="text-[7px] font-semibold mb-0.5" style={{ color: colors.accent }}>
                        Cloud Platforms
                      </h3>
                      <p className="text-[6px] leading-tight mb-0.5" style={{ color: colors.text }}>
                        AWS, Azure, GCP, Lambda, S3, Glue, Athena, Step Functions, Databricks, Data Factory, DynamoDB,
                        Kubernetes, Docker, eBPF
                      </p>

                      <h3 className="text-[7px] font-semibold mb-0.5" style={{ color: colors.accent }}>
                        AI/ML Frameworks
                      </h3>
                      <p className="text-[6px] leading-tight mb-0.5" style={{ color: colors.text }}>
                        LangChain, CrewAI, OpenAI SWARM, TensorFlow, Keras, PyTorch, Sklearn, NLTK, Hugging Face,
                        FAISS, Pydantic
                      </p>

                      <h3 className="text-[7px] font-semibold mb-0.5" style={{ color: colors.accent }}>
                        Programming
                      </h3>
                      <p className="text-[6px] leading-tight mb-0.5" style={{ color: colors.text }}>
                        Python, Java, C++, JavaScript, SQL, Groovy, C, React, Node, Flask, Spring Boot, FastAPI
                      </p>
                    </div>

                    <div>
                      <h3 className="text-[7px] font-semibold mb-0.5" style={{ color: colors.accent }}>
                        Data Engineering
                      </h3>
                      <p className="text-[6px] leading-tight mb-0.5" style={{ color: colors.text }}>
                        PySpark, Hadoop, Kafka, Delta Lake, PostgreSQL, MongoDB, MySQL, Cassandra, DynamoDB,
                        ETL/ELT, OpenTSDB, Cortex
                      </p>

                      <h3 className="text-[7px] font-semibold mb-0.5" style={{ color: colors.accent }}>
                        Product Management
                      </h3>
                      <p className="text-[6px] leading-tight mb-0.5" style={{ color: colors.text }}>
                        Roadmapping, OKRs, PRDs, Agile/Scrum, Stakeholder Mgmt, APS, S&OP, User Research,
                        A/B Testing, RICE, GTM
                      </p>

                      <h3 className="text-[7px] font-semibold mb-0.5" style={{ color: colors.accent }}>
                        DevOps & Monitoring
                      </h3>
                      <p className="text-[6px] leading-tight" style={{ color: colors.text }}>
                        GitHub Actions, CircleCI, Azure DevOps, Prometheus, Grafana, Mimir, Git, Linux, CI/CD
                      </p>
                    </div>
                  </div>
                </section>
              </div>
            </div>
          </div>

          {/* Page 1 Footer - Add force-page-break class to last element of page 1 */}
          <div className="flex justify-between items-center mt-2 mb-1 force-page-break">
            <p className="text-[6px]" style={{ color: colors.muted }}>
              Enterprise Technology Solutions Team | University of Washington, Information Management Program
            </p>
            <p className="text-[6px]" style={{ color: colors.muted }}>
              Page 1 of 2
            </p>
          </div>
        </motion.div>

        {/* PAGE 2 CONTENT - Natural flow, no fixed height container */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {/* Page 2 Header */}
          <div className="pt-[5mm] pb-[2mm] border-b" style={{ borderColor: colors.border }}>
            <p className="text-[8px] font-semibold" style={{ color: colors.text }}>
              Enterprise-Scale Technology Solutions Through Multidisciplinary Engineering (continued)
            </p>
          </div>

          <div className="py-[1.5mm]">
            {/* Two-column layout continues */}
            <div className="grid grid-cols-2 gap-2">
              {/* Left Column */}
              <div>
                {/* Section 6: Industry Experience */}
                <section className="mb-1.5">
                  <h2 className="text-[9px] font-bold mb-0.5" style={{ color: colors.text }}>
                    6. INDUSTRY EXPERIENCE MATRIX
                  </h2>

                  <div className="mb-1">
                    <h3 className="text-[7.5px] font-semibold mb-0.5" style={{ color: colors.accent }}>
                      Amazon Web Services (AWS)
                    </h3>
                    <p className="text-[6.5px] leading-tight" style={{ color: colors.text }}>
                      <span className="font-semibold">Siddarth Bhave:</span> SDE Intern, DynamoDB Networking (Jun-Sep 2025).
                      eBPF-based metrics collection, $1M cost savings, sub-5μs latency overhead.
                    </p>
                  </div>

                  <div className="mb-1">
                    <h3 className="text-[7.5px] font-semibold mb-0.5" style={{ color: colors.accent }}>
                      Morgan Stanley
                    </h3>
                    <p className="text-[6.5px] leading-tight" style={{ color: colors.text }}>
                      <span className="font-semibold">Siddarth Bhave:</span> SDE2/SDE1 (Jan 2022 - Aug 2024). Mimir integration,
                      75M Kafka records/min ETL, Prometheus automation, early promotion + tech-excellence award.
                    </p>
                  </div>

                  <div className="mb-1">
                    <h3 className="text-[7.5px] font-semibold mb-0.5" style={{ color: colors.accent }}>
                      SAP India Pvt. Ltd.
                    </h3>
                    <p className="text-[6.5px] leading-tight" style={{ color: colors.text }}>
                      <span className="font-semibold">Rahil Harihar:</span> Development Consultant (Jul 2022 - Aug 2024). 15+ Fortune 500
                      clients, 100+ SAP CPI integrations (S/4HANA, ECC, SuccessFactors, Salesforce), 30+ Cloud Connector deployments,
                      30% latency reduction. Pre-Sales Intern: NLP resume screening (30% efficiency), full autonomy + FT offer.
                    </p>
                  </div>

                  <div className="mb-1">
                    <h3 className="text-[7.5px] font-semibold mb-0.5" style={{ color: colors.accent }}>
                      o9 Solutions
                    </h3>
                    <p className="text-[6.5px] leading-tight" style={{ color: colors.text }}>
                      <span className="font-semibold">Shreyas Subramanya:</span> Sr PM Intern / PM II / PM I (Jun 2021 - Present).
                      AI-driven automation (knowledge graphs), Delta Lake validation, 20+ global implementations, 70% batch-run reduction,
                      500+ certified professionals.
                    </p>
                  </div>

                  <div className="mb-1">
                    <h3 className="text-[7.5px] font-semibold mb-0.5" style={{ color: colors.accent }}>
                      Rocket Mortgage
                    </h3>
                    <p className="text-[6.5px] leading-tight" style={{ color: colors.text }}>
                      <span className="font-semibold">Mathew Meleth:</span> Cloud & Data Engineering Intern (Jun-Sep 2025). AWS serverless
                      pipelines (35% ingestion reduction), 20+ CI/CD migrations (40% efficiency), automated monitoring (25% reliability).
                    </p>
                  </div>

                  <div className="mb-1">
                    <h3 className="text-[7.5px] font-semibold mb-0.5" style={{ color: colors.accent }}>
                      Mu Sigma
                    </h3>
                    <p className="text-[6.5px] leading-tight" style={{ color: colors.text }}>
                      <span className="font-semibold">Mathew Meleth:</span> Data Engineer (Aug 2021 - Jul 2024). PySpark/Azure Data Factory
                      (40% speed-up), $250K revenue discovery, 1-month → 2-day processing automation, 3x Star Performer.
                    </p>
                  </div>

                  <div className="mb-1">
                    <h3 className="text-[7.5px] font-semibold mb-0.5" style={{ color: colors.accent }}>
                      AaMaRa Technologies (Startup)
                    </h3>
                    <p className="text-[6.5px] leading-tight" style={{ color: colors.text }}>
                      <span className="font-semibold">Rahil (Founder/CEO) & Siddarth (CTO):</span> Jan 2019 - Jun 2022 / Jul 2022 - Sep 2024.
                      $35K profit, Dubai Islamic Bank RFP win vs Zoho, 15-developer team, 6 projects in 26 months, 1,200-employee ERP
                      (25% efficiency), profitable from day-0.
                    </p>
                  </div>
                </section>

                {/* Section 7: Education Details */}
                <section className="mb-1.5">
                  <h2 className="text-[9px] font-bold mb-0.5" style={{ color: colors.text }}>
                    7. ACADEMIC CREDENTIALS
                  </h2>

                  <h3 className="text-[7.5px] font-semibold mb-0.5" style={{ color: colors.accent }}>
                    7.1 Graduate Education
                  </h3>
                  <div className="mb-1">
                    <p className="text-[6.5px] leading-tight mb-0.5" style={{ color: colors.text }}>
                      <span className="font-semibold">University of Washington, Seattle</span> (Sept 2024 - June 2026)
                    </p>
                    <ul className="text-[6.5px] leading-tight ml-3 space-y-0.5" style={{ color: colors.text }}>
                      <li>• <span className="font-semibold">Mathew Meleth:</span> MSIM, GPA 4.0/4.0, iSchool Scholar, Graduate Teaching Assistant</li>
                      <li>• <span className="font-semibold">Rahil Harihar:</span> MSIM - AI + Product/Project Mgmt, GPA 3.9/4.0, Allan Frank Apprentice</li>
                      <li>• <span className="font-semibold">Siddarth Bhave:</span> MSIM, GPA 3.9/4.0, Coursework: ML, Building LLMs, Generative AI</li>
                      <li>• <span className="font-semibold">Shreyas Subramanya:</span> MSIM, GPA 3.88/4.0</li>
                    </ul>
                  </div>

                  <h3 className="text-[7.5px] font-semibold mb-0.5 mt-1" style={{ color: colors.accent }}>
                    7.2 Undergraduate Education
                  </h3>
                  <div className="mb-0.5">
                    <ul className="text-[6.5px] leading-tight ml-3 space-y-0.5" style={{ color: colors.text }}>
                      <li>• <span className="font-semibold">Mathew:</span> BTech IT, VIT Vellore (GPA 8.71/10, 2021)</li>
                      <li>• <span className="font-semibold">Rahil:</span> BTech CS, Ramaiah Institute (Aug 2018 - Jul 2022)</li>
                      <li>• <span className="font-semibold">Siddarth:</span> BE CS, Ramaiah Institute (GPA 9.22/10, 2018-2022)</li>
                      <li>• <span className="font-semibold">Shreyas:</span> BE Mechanical, BMS College (GPA 3.98/4, Aug 2020)</li>
                    </ul>
                  </div>

                  <h3 className="text-[7.5px] font-semibold mb-0.5 mt-1" style={{ color: colors.accent }}>
                    7.3 Certifications & Recognition
                  </h3>
                  <ul className="text-[6.5px] leading-tight ml-3 space-y-0.5" style={{ color: colors.text }}>
                    <li>• IEEE CSITSS-23 Best Paper Award (Siddarth - Deep Learning Pose Classification)</li>
                    <li>• NVIDIA Artificial Neural Networks Certification (Rahil)</li>
                    <li>• SAP Design Thinking & BTP Certified (Rahil)</li>
                    <li>• UW iSchool Scholar - Merit & Contributions (Mathew)</li>
                    <li>• Product Management Professional (Shreyas)</li>
                    <li>• Graduate Teaching Assistant (Mathew)</li>
                  </ul>
                </section>

                {/* Section 8: Leadership */}
                <section className="mb-1.5">
                  <h2 className="text-[9px] font-bold mb-0.5" style={{ color: colors.text }}>
                    8. LEADERSHIP & MENTORSHIP
                  </h2>

                  <ul className="text-[6.5px] leading-tight ml-3 space-y-0.5" style={{ color: colors.text }}>
                    <li>• <span className="font-semibold">SAP Early Talent Ambassador (Rahil):</span> 1,500+ employees globally,
                    $60K annual budget management, direct reporting to Germany HQ</li>
                    <li>• <span className="font-semibold">Team India Captain - Handball (Rahil):</span> International tournament
                    (Denmark 2016), Team Manager, multiple championships (2012-2019)</li>
                    <li>• <span className="font-semibold">15-Developer Team Lead (Siddarth):</span> CTO at AaMaRa, 6 projects
                    in 26 months, cross-functional delivery</li>
                    <li>• <span className="font-semibold">20+ Global Implementations (Mathew):</span> Pipeline migration lead,
                    framework architecture owner</li>
                    <li>• <span className="font-semibold">500+ Professionals Certified (Shreyas):</span> 10+ hours o9 platform
                    training content documentation</li>
                    <li>• <span className="font-semibold">Google Developer Student Club (Rahil):</span> Core Committee, organized
                    hackathons, tech talks, workshops (150+ students/event)</li>
                    <li>• <span className="font-semibold">Volunteer Leadership (Rahil):</span> Vanavasi Kalyan Ashram, 1,200+ lbs
                    rice monthly from 80+ households (12+ years), $10K/month Google Ads</li>
                  </ul>
                </section>
              </div>

              {/* Right Column */}
              <div>
                {/* Section 9: Technical Publications */}
                <section className="mb-1.5">
                  <h2 className="text-[9px] font-bold mb-0.5" style={{ color: colors.text }}>
                    9. PUBLICATIONS & RESEARCH
                  </h2>

                  <div className="mb-1">
                    <p className="text-[6.5px] leading-tight mb-0.5" style={{ color: colors.text }}>
                      <span className="font-semibold">[7] P. Sunagar, S. Rajarajeswari, S. Bhave, S. Kamate, S. Bhave, S. S. Seru</span> (2023).
                      "Classification of Human Poses Using Deep Learning Techniques." 2023 7th International Conference on Computation System
                      and Information Technology for Sustainable Solutions (CSITSS), Bangalore, India, pp. 1-7.
                      <span className="font-semibold italic"> IEEE CSITSS-23 Best Paper Award.</span>
                    </p>
                    <p className="text-[6.5px] leading-tight" style={{ color: colors.text }}>
                      <span className="font-semibold">[13] Subramanya, S. B., et al.</span> (2021). "Low-Pressure Sensing Device for Respiratory
                      Signal Capture." Indian Institute of Science Research Collaboration with ESIC Model Hospital. Device demonstrates immunity
                      to electromagnetic radiation while capturing human respiratory pressure signals.
                    </p>
                  </div>
                </section>

                {/* Section 10: Awards & Recognition */}
                <section className="mb-1.5">
                  <h2 className="text-[9px] font-bold mb-0.5" style={{ color: colors.text }}>
                    10. AWARDS & RECOGNITION
                  </h2>

                  <ul className="text-[6.5px] leading-tight ml-3 space-y-0.5" style={{ color: colors.text }}>
                    <li>• <span className="font-semibold">Morgan Stanley Tech-Excellence Award</span> (Siddarth - Early promotion,
                    distributed ETL systems)</li>
                    <li>• <span className="font-semibold">IEEE CSITSS-23 Best Paper Award</span> (Siddarth - Deep learning research)</li>
                    <li>• <span className="font-semibold">UW iSchool Scholar</span> (Mathew - Merit & Contributions)</li>
                    <li>• <span className="font-semibold">Mu Sigma 3x Star Performer</span> (Mathew - Accelerating enterprise workflows)</li>
                    <li>• <span className="font-semibold">SAP Full-Time Offer</span> (Rahil - Exceptional stakeholder engagement as intern)</li>
                    <li>• <span className="font-semibold">Smart India Hackathon Winner</span> (Rahil - Software Edition, Dec 2019, Patna)</li>
                    <li>• <span className="font-semibold">Allan Frank Apprenticeship</span> (Rahil - Selected for product research mentorship)</li>
                  </ul>
                </section>

                {/* Section 11: Projects Portfolio */}
                <section className="mb-1.5">
                  <h2 className="text-[9px] font-bold mb-0.5" style={{ color: colors.text }}>
                    11. NOTABLE PROJECTS PORTFOLIO
                  </h2>

                  <div className="mb-1">
                    <h3 className="text-[7px] font-semibold mb-0.5" style={{ color: colors.accent }}>
                      AskHusky: Multi-Agentic Student Support Assistant
                    </h3>
                    <p className="text-[6.5px] leading-tight" style={{ color: colors.text }}>
                      <span className="font-semibold">Siddarth Bhave (Nov 2024 - Mar 2025):</span> CrewAI framework integrating Canvas LMS,
                      UW Calendar, iSchool websites. Automated event creation, grade retrieval, resource lookup. Demoed to iSchool Dean,
                      recognized for enhancing student experience through GenAI.
                    </p>
                  </div>

                  <div className="mb-1">
                    <h3 className="text-[7px] font-semibold mb-0.5" style={{ color: colors.accent }}>
                      Multi-Agent Enterprise Orchestration
                    </h3>
                    <p className="text-[6.5px] leading-tight" style={{ color: colors.text }}>
                      <span className="font-semibold">Rahil Harihar (Allan Frank Apprenticeship):</span> Python/FastAPI with LangChain &
                      CrewAI. GPT-4 central reasoning engine driving 5 domain agents (Finance, SCM, HR, CS, Ops) with Pydantic-validated
                      REST/MQ/IDoc ingestion. React + Plotly/D3 dashboard with Slack/Teams ChatOps, FAISS vector search, 48h → minutes cycle time.
                    </p>
                  </div>

                  <div className="mb-1">
                    <h3 className="text-[7px] font-semibold mb-0.5" style={{ color: colors.accent }}>
                      Dubai Islamic Bank Asset Management SaaS
                    </h3>
                    <p className="text-[6.5px] leading-tight" style={{ color: colors.text }}>
                      <span className="font-semibold">AaMaRa Technologies (Rahil & Siddarth):</span> Won competitive RFP vs Zoho. Multi-tenant
                      web app with asset registry, lifecycle workflows, approvals, alerts, admin controls. RBAC, SSO-ready authentication,
                      audit logs, encrypted data flows aligned with bank security reviews.
                    </p>
                  </div>

                  <div className="mb-1">
                    <h3 className="text-[7px] font-semibold mb-0.5" style={{ color: colors.accent }}>
                      1,200-Employee Factory ERP Digitization
                    </h3>
                    <p className="text-[6.5px] leading-tight" style={{ color: colors.text }}>
                      <span className="font-semibold">AaMaRa Technologies (Siddarth - CTO):</span> React JS, Django, PostgreSQL. Automated
                      tool management, employee efficiency tracking. Results: 25% efficiency increase, 75% bookkeeping time reduction.
                    </p>
                  </div>
                </section>

                {/* Section 12: Contact Information */}
                <section className="mb-1.5 p-1.5 rounded" style={{ backgroundColor: colors.lightBlue }}>
                  <h2 className="text-[9px] font-bold mb-0.5" style={{ color: colors.text }}>
                    12. CONTACT INFORMATION
                  </h2>

                  <div className="grid grid-cols-2 gap-1.5">
                    <div>
                      <p className="text-[6.5px] font-semibold" style={{ color: colors.text }}>Mathew Jerry Meleth</p>
                      <p className="text-[6px]" style={{ color: colors.muted }}>mathewjerry07@gmail.com</p>
                      <p className="text-[6px]" style={{ color: colors.muted }}>+1 (206) 941-5460</p>
                      <p className="text-[6px]" style={{ color: colors.muted }}>linkedin.com/in/mathewjerrymeleth</p>
                    </div>

                    <div>
                      <p className="text-[6.5px] font-semibold" style={{ color: colors.text }}>Rahil M. Harihar</p>
                      <p className="text-[6px]" style={{ color: colors.muted }}>rahil911@uw.edu</p>
                      <p className="text-[6px]" style={{ color: colors.muted }}>+1 (206) 245 0653</p>
                      <p className="text-[6px]" style={{ color: colors.muted }}>LinkedIn/rahil911</p>
                    </div>

                    <div>
                      <p className="text-[6.5px] font-semibold" style={{ color: colors.text }}>Siddarth Bhave</p>
                      <p className="text-[6px]" style={{ color: colors.muted }}>sidbhave@uw.edu</p>
                      <p className="text-[6px]" style={{ color: colors.muted }}>+1 (206) 859 3417</p>
                      <p className="text-[6px]" style={{ color: colors.muted }}>linkedin.com/in/siddarthbhave</p>
                    </div>

                    <div>
                      <p className="text-[6.5px] font-semibold" style={{ color: colors.text }}>Shreyas B Subramanya</p>
                      <p className="text-[6px]" style={{ color: colors.muted }}>shrey674@uw.edu</p>
                      <p className="text-[6px]" style={{ color: colors.muted }}>+1 (206) 530-9975</p>
                      <p className="text-[6px]" style={{ color: colors.muted }}>linkedin.com/in/shreyasbsubramanya</p>
                    </div>
                  </div>
                </section>

                {/* Section 13: Acknowledgments */}
                <section className="mb-1.5">
                  <h2 className="text-[9px] font-bold mb-0.5" style={{ color: colors.text }}>
                    13. ACKNOWLEDGMENTS
                  </h2>
                  <p className="text-[6.5px] leading-tight text-justify" style={{ color: colors.text }}>
                    This research was conducted under the Information Management Program at University of Washington, Seattle. The authors
                    acknowledge Allan Frank (Co-Founder, The Hackett Group; Ex-CTO KPMG, Capgemini) for mentorship in multi-agent AI systems
                    and enterprise product strategy. Industrial partnerships: Amazon Web Services (DynamoDB Networking Team), Morgan Stanley
                    (Observability Platform Engineering), SAP India (Enterprise Integration Consulting across NA/EMEA/APJ regions), o9 Solutions
                    (Advanced Planning Systems Product Management), Rocket Mortgage (Cloud Data Engineering), Mu Sigma (Big Data Analytics),
                    Adobe (Customer Data Automation), and Indian Institute of Science (Biomedical Sensing Research).
                  </p>
                </section>

                {/* References */}
                <section className="mb-1.5 pt-1.5 border-t" style={{ borderColor: colors.border }}>
                  <h2 className="text-[9px] font-bold mb-0.5" style={{ color: colors.text }}>
                    REFERENCES
                  </h2>
                  <div className="text-[6px] leading-tight space-y-0.5" style={{ color: colors.text }}>
                    <p>[1] Meleth, M. J. (2025). "Serverless Architecture Optimization for Multi-Terabyte ETL Workloads." Rocket Mortgage Engineering Brief.</p>
                    <p>[2] Bhave, S. (2025). "eBPF-based Observability for DynamoDB: Sub-5μs Latency Overhead at Scale." AWS DynamoDB TR-2025-001.</p>
                    <p>[3] Harihar, R. M. (2024). "Multi-Agent Orchestration in Enterprise ERP: LangChain Implementation." Allan Frank Apprenticeship Research.</p>
                    <p>[4] Subramanya, S. B. (2024). "Supply Chain Planning Performance: 70% Batch-Run Reduction." o9 Solutions Product Research.</p>
                    <p>[5] Meleth, M. J. (2023). "PySpark Pipeline Architecture: $250K Revenue Discovery Through Data Integration." Mu Sigma Case Study.</p>
                    <p>[6] Bhave, S., et al. (2024). "Distributed ETL Pipeline Architecture Achieving 75M Records/Minute." Morgan Stanley Technical Report.</p>
                    <p>[7] Sunagar, P., Rajarajeswari, S., Bhave, S., et al. (2023). "Classification of Human Poses Using Deep Learning." IEEE CSITSS-23. Best Paper.</p>
                    <p>[8] Subramanya, S. B. (2023). "Delta Lake Validation Frameworks for ERP Data Quality." o9 Solutions Engineering Documentation.</p>
                    <p>[9] Harihar, R. M., Bhave, S. (2022). "Bootstrapping SaaS Profitability: $35k in 36 Months." AaMaRa Technologies Case Study.</p>
                    <p>[10] Harihar, R. M. (2021). "Performance Marketing via Google Ad Grants: $18k in 60 Days." Nonprofit Campaign Analysis.</p>
                    <p>[11] Harihar, R. M. (2024). "SAP Cloud Connector Optimization: 30% Latency Reduction." SAP India Consulting Documentation.</p>
                    <p>[12] Bhave, S. (2024). "ERP Digitization Impact: 25% Efficiency Gains in Manufacturing." AaMaRa Technologies Implementation Report.</p>
                    <p>[13] Subramanya, S. B., et al. (2021). "Low-Pressure Respiratory Sensing Device." IISc-ESIC Research Collaboration.</p>
                  </div>
                </section>

                {/* Conclusion */}
                <section className="mb-1.5 p-1.5 rounded" style={{ backgroundColor: colors.lightBlue }}>
                  <h2 className="text-[9px] font-bold mb-0.5" style={{ color: colors.text }}>
                    14. CONCLUSION
                  </h2>
                  <p className="text-[6.5px] leading-tight text-justify" style={{ color: colors.text }}>
                    This multidisciplinary team offers a rare combination of deep technical expertise (cloud architecture, AI/ML systems,
                    distributed computing), business acumen (product management, go-to-market strategy, stakeholder engagement), and proven
                    delivery track record (Fortune 500 implementations, $2M+ cost savings, 75M+ records/min throughput). The integration of
                    cutting-edge research (IEEE Best Paper, Allan Frank Apprenticeship) with production-scale engineering positions the team
                    to address complex enterprise challenges requiring both technological innovation and measurable business impact. Available
                    for consulting, full-time opportunities, and collaborative research partnerships effective June 2026.
                  </p>
                </section>
              </div>
            </div>
          </div>

          {/* Team Photos */}
          <div className="mt-1.5">
            <div className="border-t-2 pt-1 pb-0.5" style={{ borderColor: colors.accent }}>
              <p className="text-[6.5px] font-semibold mb-1 text-center" style={{ color: colors.text }}>
                RESEARCH TEAM MEMBERS
              </p>
              <div className="grid grid-cols-4 gap-1.5">
                {teamMembers.map((member) => (
                  <div key={member.id} className="text-center">
                    <div className="w-16 h-16 mx-auto mb-0.5 rounded-sm overflow-hidden border-2" style={{ borderColor: colors.accent }}>
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover grayscale"
                      />
                    </div>
                    <p className="text-[6px] font-bold leading-tight" style={{ color: colors.text }}>
                      {member.name}
                    </p>
                    <p className="text-[5.5px] leading-tight" style={{ color: colors.muted }}>
                      {member.role}
                    </p>
                    <p className="text-[5px] leading-tight" style={{ color: colors.muted }}>
                      {member.email}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Page 2 Footer */}
          <div className="flex justify-between items-center mt-1.5 mb-1">
            <p className="text-[6px]" style={{ color: colors.muted }}>
              Enterprise Technology Solutions Team | University of Washington, Information Management Program
            </p>
            <p className="text-[6px]" style={{ color: colors.muted }}>
              Page 2 of 2
            </p>
          </div>
        </motion.div>
      </div>

      <style dangerouslySetInnerHTML={{__html: `
        .a4-container {
          width: 210mm;
          padding: 4mm;
        }

        .force-page-break {
          page-break-after: always !important;
          break-after: always !important;
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

          .force-page-break {
            page-break-after: always !important;
            break-after: always !important;
          }

          img {
            filter: grayscale(100%) contrast(1.1);
          }

          * {
            -webkit-print-color-adjust: exact !important;
            print-color-adjust: exact !important;
          }
        }
      `}} />
    </div>
  );
};

export default Prototype9;
