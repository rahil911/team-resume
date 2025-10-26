import { useRef } from 'react';
import { motion } from 'framer-motion';
import { teamMembers } from '../../data/teamData';

const Prototype7 = () => {
  const printRef = useRef();

  return (
    <div className="min-h-screen bg-white">
      <div ref={printRef} className="flex flex-col gap-0 w-fit mx-auto">
        {/* Swiss Minimalism Typography System */}
        <style>{`
          @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap');

          .swiss-page {
            font-family: 'Inter', -apple-system, 'Helvetica Neue', 'Arial', sans-serif;
            width: 210mm;
            height: 297mm;
            max-height: 297mm;
            overflow: hidden;
            background: white;
            color: #000000;
            page-break-after: always;
            padding: 3.5mm;
            position: relative;
            box-sizing: border-box;
            margin: 0;
            flex-shrink: 0;
          }

          .swiss-page:last-child {
            page-break-after: auto;
          }

          /* Swiss Typography Hierarchy - Optimized for 8pt+ */
          .swiss-name {
            font-size: 10pt;
            font-weight: 700;
            letter-spacing: -0.03em;
            line-height: 1;
            margin: 0 0 0.3mm 0;
            text-transform: uppercase;
          }

          .swiss-role {
            font-size: 8pt;
            font-weight: 500;
            letter-spacing: 0.05em;
            text-transform: uppercase;
            margin: 0 0 0.25mm 0;
            color: #FF0000;
          }

          .swiss-contact {
            font-size: 8pt;
            font-weight: 400;
            line-height: 1.15;
            color: #000000;
          }

          .swiss-section-title {
            font-size: 8pt;
            font-weight: 700;
            letter-spacing: 0.1em;
            text-transform: uppercase;
            margin: 0 0 0.3mm 0;
            color: #000000;
          }

          .swiss-company {
            font-size: 8pt;
            font-weight: 600;
            margin: 0;
            color: #000000;
          }

          .swiss-position {
            font-size: 8pt;
            font-weight: 500;
            margin: 0;
            color: #000000;
          }

          .swiss-duration {
            font-size: 8pt;
            font-weight: 400;
            margin: 0;
            color: #666666;
          }

          .swiss-body-text {
            font-size: 8pt;
            font-weight: 400;
            line-height: 1.2;
            margin: 0;
            color: #000000;
          }

          .swiss-bullet {
            font-size: 8pt;
            font-weight: 400;
            line-height: 1.1;
            margin: 0 0 0.15mm 0;
            color: #1a1a1a;
            padding-left: 3mm;
            position: relative;
          }

          .swiss-bullet::before {
            content: "•";
            position: absolute;
            left: 0;
            color: #FF0000;
            font-weight: 700;
          }

          .swiss-skill-tag {
            font-size: 8pt;
            font-weight: 400;
            line-height: 1.15;
            color: #333333;
          }

          .swiss-divider {
            height: 0.5pt;
            background: #000000;
            margin: 0.8mm 0;
          }

          .swiss-red {
            color: #FF0000;
          }

          /* Spacing System - Ultra-Minimal */
          .mb-1 { margin-bottom: 0.25mm; }
          .mb-2 { margin-bottom: 0.5mm; }
          .mb-3 { margin-bottom: 0.8mm; }
          .mb-4 { margin-bottom: 1mm; }
          .mb-5 { margin-bottom: 1.3mm; }
          .mb-6 { margin-bottom: 1.8mm; }

          @media print {
            @page {
              size: A4 portrait;
              margin: 0;
            }
            .swiss-page {
              margin: 0;
              page-break-after: always;
            }
            .swiss-page:last-child {
              page-break-after: auto;
            }
            .no-print {
              display: none !important;
            }
          }
        `}</style>

        {/* PAGE 1 - Mathew & Rahil */}
        <div className="swiss-page">
          {/* MATHEW MELETH */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="mb-4"
          >
            <h1 className="swiss-name">{teamMembers[0].name}</h1>
            <p className="swiss-role mb-1">{teamMembers[0].role}</p>
            <div className="swiss-contact mb-2">
              <span>{teamMembers[0].email}</span> | <span>{teamMembers[0].phone}</span> | <span>{teamMembers[0].linkedin}</span> | <span>{teamMembers[0].location}</span>
            </div>

            {/* Summary */}
            <p className="swiss-body-text mb-2">{teamMembers[0].summary}</p>

            {/* Education */}
            <div className="mb-2">
              <h2 className="swiss-section-title">EDUCATION</h2>
              <div className="mb-1">
                <p className="swiss-company">{teamMembers[0].education.masters.school}</p>
                <p className="swiss-position">{teamMembers[0].education.masters.degree}</p>
                <p className="swiss-duration">GPA: {teamMembers[0].education.masters.gpa} | {teamMembers[0].education.masters.duration}</p>
              </div>
              <div>
                <p className="swiss-company">{teamMembers[0].education.bachelors.school}</p>
                <p className="swiss-position">{teamMembers[0].education.bachelors.degree}</p>
                <p className="swiss-duration">GPA: {teamMembers[0].education.bachelors.gpa} | {teamMembers[0].education.bachelors.duration}</p>
              </div>
            </div>

            {/* Skills */}
            <div className="mb-2">
              <h2 className="swiss-section-title">TECHNICAL SKILLS</h2>
              {Object.entries(teamMembers[0].technicalSkills).map(([category, skills], idx) => (
                <p key={idx} className="swiss-skill-tag mb-1">
                  <span className="font-semibold">{category}:</span> {Array.isArray(skills) ? skills.join(', ') : skills}
                </p>
              ))}
            </div>

            {/* Experience */}
            <div className="mb-3">
              <h2 className="swiss-section-title">WORK EXPERIENCE</h2>
              {teamMembers[0].experience.map((exp, idx) => (
                <div key={idx} className="mb-2">
                  <p className="swiss-company">{exp.company}</p>
                  <p className="swiss-position">{exp.role}</p>
                  <p className="swiss-duration mb-1">{exp.duration} | {exp.location}</p>
                  {exp.achievements.map((achievement, achIdx) => (
                    <p key={achIdx} className="swiss-bullet">{achievement}</p>
                  ))}
                </div>
              ))}
            </div>
          </motion.div>

          <div className="swiss-divider"></div>

          {/* RAHIL HARIHAR */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h1 className="swiss-name">{teamMembers[1].name}</h1>
            <p className="swiss-role mb-1">{teamMembers[1].role}</p>
            <div className="swiss-contact mb-2">
              <span>{teamMembers[1].email}</span> | <span>{teamMembers[1].phone}</span> | <span>{teamMembers[1].linkedin}</span> | <span>{teamMembers[1].location}</span>
            </div>

            {/* Summary */}
            <p className="swiss-body-text mb-2">{teamMembers[1].summary}</p>

            {/* Education */}
            <div className="mb-2">
              <h2 className="swiss-section-title">EDUCATION</h2>
              <div className="mb-1">
                <p className="swiss-company">{teamMembers[1].education.masters.school}</p>
                <p className="swiss-position">{teamMembers[1].education.masters.degree}</p>
                <p className="swiss-duration">GPA: {teamMembers[1].education.masters.gpa} | {teamMembers[1].education.masters.duration}</p>
              </div>
              <div>
                <p className="swiss-company">{teamMembers[1].education.bachelors.school}</p>
                <p className="swiss-position">{teamMembers[1].education.bachelors.degree}</p>
                <p className="swiss-duration">{teamMembers[1].education.bachelors.duration}</p>
              </div>
            </div>

            {/* Skills */}
            <div className="mb-2">
              <h2 className="swiss-section-title">TECHNICAL SKILLS</h2>
              {Object.entries(teamMembers[1].technicalSkills).map(([category, skills], idx) => (
                <p key={idx} className="swiss-skill-tag mb-1">
                  <span className="font-semibold">{category}:</span> {Array.isArray(skills) ? skills.join(', ') : skills}
                </p>
              ))}
            </div>

            {/* Experience */}
            <div>
              <h2 className="swiss-section-title">WORK EXPERIENCE</h2>
              {teamMembers[1].experience.map((exp, idx) => (
                <div key={idx} className="mb-2">
                  <p className="swiss-company">{exp.company}</p>
                  <p className="swiss-position">{exp.role}</p>
                  <p className="swiss-duration mb-1">{exp.duration} | {exp.location}</p>
                  {exp.achievements.map((achievement, achIdx) => (
                    <p key={achIdx} className="swiss-bullet">{achievement}</p>
                  ))}
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* PAGE 2 - Siddarth & Shreyas */}
        <div className="swiss-page">
          {/* SIDDARTH BHAVE */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mb-4"
          >
            <h1 className="swiss-name">{teamMembers[2].name}</h1>
            <p className="swiss-role mb-1">{teamMembers[2].role}</p>
            <div className="swiss-contact mb-2">
              <span>{teamMembers[2].email}</span> | <span>{teamMembers[2].phone}</span> | <span>{teamMembers[2].linkedin}</span> | <span>{teamMembers[2].github}</span> | <span>{teamMembers[2].location}</span>
            </div>

            {/* Summary */}
            <p className="swiss-body-text mb-2">{teamMembers[2].summary}</p>

            {/* Education */}
            <div className="mb-2">
              <h2 className="swiss-section-title">EDUCATION</h2>
              <div className="mb-1">
                <p className="swiss-company">{teamMembers[2].education.masters.school}</p>
                <p className="swiss-position">{teamMembers[2].education.masters.degree}</p>
                <p className="swiss-duration">GPA: {teamMembers[2].education.masters.gpa} | {teamMembers[2].education.masters.duration}</p>
                {teamMembers[2].education.masters.coursework && (
                  <p className="swiss-skill-tag">Coursework: {teamMembers[2].education.masters.coursework.join(', ')}</p>
                )}
              </div>
              <div>
                <p className="swiss-company">{teamMembers[2].education.bachelors.school}</p>
                <p className="swiss-position">{teamMembers[2].education.bachelors.degree}</p>
                <p className="swiss-duration">GPA: {teamMembers[2].education.bachelors.gpa} | {teamMembers[2].education.bachelors.duration}</p>
                {teamMembers[2].education.bachelors.coursework && (
                  <p className="swiss-skill-tag">Coursework: {teamMembers[2].education.bachelors.coursework.join(', ')}</p>
                )}
              </div>
            </div>

            {/* Skills */}
            <div className="mb-2">
              <h2 className="swiss-section-title">TECHNICAL SKILLS</h2>
              {Object.entries(teamMembers[2].technicalSkills).map(([category, skills], idx) => (
                <p key={idx} className="swiss-skill-tag mb-1">
                  <span className="font-semibold">{category}:</span> {Array.isArray(skills) ? skills.join(', ') : skills}
                </p>
              ))}
            </div>

            {/* Experience */}
            <div className="mb-2">
              <h2 className="swiss-section-title">WORK EXPERIENCE</h2>
              {teamMembers[2].experience.map((exp, idx) => (
                <div key={idx} className="mb-2">
                  <p className="swiss-company">{exp.company}</p>
                  <p className="swiss-position">{exp.role}</p>
                  <p className="swiss-duration mb-1">{exp.duration} | {exp.location}</p>
                  {exp.achievements.map((achievement, achIdx) => (
                    <p key={achIdx} className="swiss-bullet">{achievement}</p>
                  ))}
                </div>
              ))}
            </div>

            {/* Certifications */}
            {teamMembers[2].certifications && (
              <div className="mb-3">
                <h2 className="swiss-section-title">AWARDS & CERTIFICATIONS</h2>
                {teamMembers[2].certifications.map((cert, idx) => (
                  <p key={idx} className="swiss-bullet">{cert}</p>
                ))}
              </div>
            )}
          </motion.div>

          <div className="swiss-divider"></div>

          {/* SHREYAS B SUBRAMANYA */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <h1 className="swiss-name">{teamMembers[3].name}</h1>
            <p className="swiss-role mb-1">{teamMembers[3].role}</p>
            <div className="swiss-contact mb-2">
              <span>{teamMembers[3].email}</span> | <span>{teamMembers[3].phone}</span> | <span>{teamMembers[3].linkedin}</span> | <span>{teamMembers[3].location}</span>
            </div>

            {/* Summary */}
            <p className="swiss-body-text mb-2">{teamMembers[3].summary}</p>

            {/* Education */}
            <div className="mb-2">
              <h2 className="swiss-section-title">EDUCATION</h2>
              <div className="mb-1">
                <p className="swiss-company">{teamMembers[3].education.masters.school}</p>
                <p className="swiss-position">{teamMembers[3].education.masters.degree}</p>
                <p className="swiss-duration">GPA: {teamMembers[3].education.masters.gpa} | {teamMembers[3].education.masters.duration}</p>
              </div>
              <div>
                <p className="swiss-company">{teamMembers[3].education.bachelors.school}</p>
                <p className="swiss-position">{teamMembers[3].education.bachelors.degree}</p>
                <p className="swiss-duration">GPA: {teamMembers[3].education.bachelors.gpa} | {teamMembers[3].education.bachelors.duration}</p>
              </div>
            </div>

            {/* Skills */}
            <div className="mb-2">
              <h2 className="swiss-section-title">TECHNICAL SKILLS</h2>
              {Object.entries(teamMembers[3].technicalSkills).map(([category, skills], idx) => (
                <p key={idx} className="swiss-skill-tag mb-1">
                  <span className="font-semibold">{category}:</span> {Array.isArray(skills) ? skills.join(', ') : skills}
                </p>
              ))}
            </div>

            {/* Experience */}
            <div>
              <h2 className="swiss-section-title">WORK EXPERIENCE</h2>
              {teamMembers[3].experience.slice(0, 3).map((exp, idx) => (
                <div key={idx} className="mb-2">
                  <p className="swiss-company">{exp.company}</p>
                  <p className="swiss-position">{exp.role}</p>
                  <p className="swiss-duration mb-1">{exp.duration} | {exp.location}</p>
                  {exp.achievements.map((achievement, achIdx) => (
                    <p key={achIdx} className="swiss-bullet">{achievement}</p>
                  ))}
                </div>
              ))}
            </div>

            {/* Certifications */}
            {teamMembers[3].certifications && (
              <div className="mb-2">
                <h2 className="swiss-section-title">CERTIFICATIONS</h2>
                {teamMembers[3].certifications.map((cert, idx) => (
                  <p key={idx} className="swiss-bullet">{cert}</p>
                ))}
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Prototype7;
