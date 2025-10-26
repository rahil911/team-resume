import { useRef } from 'react';
import { motion } from 'framer-motion';
import { teamMembers } from '../../data/teamData';

const Prototype8 = () => {
  const printRef = useRef();

  return (
    <div className="min-h-screen bg-white">
      <div ref={printRef} className="flex gap-0 w-fit mx-auto">
        {/* Brutalist Typography System */}
        <style>{`
          @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;700;900&family=IBM+Plex+Mono:wght@400;700&display=swap');

          .brutal-container * {
            font-family: 'Space Grotesk', 'Arial Black', sans-serif;
          }

          .brutal-mono {
            font-family: 'IBM Plex Mono', monospace !important;
          }

          /* Typography - Ultra-Compact */
          .brutal-hero {
            font-size: 52pt;
            font-weight: 900;
            line-height: 0.75;
            letter-spacing: -0.05em;
            text-transform: uppercase;
          }

          .brutal-mega {
            font-size: 26pt;
            font-weight: 900;
            line-height: 0.8;
            letter-spacing: -0.03em;
            text-transform: uppercase;
          }

          .brutal-large {
            font-size: 12pt;
            font-weight: 700;
            line-height: 0.95;
            text-transform: uppercase;
            letter-spacing: -0.02em;
          }

          .brutal-medium {
            font-size: 9pt;
            font-weight: 700;
            line-height: 1.1;
            text-transform: uppercase;
            letter-spacing: -0.01em;
          }

          .brutal-body {
            font-size: 8pt;
            font-weight: 400;
            line-height: 1.15;
          }

          .brutal-tiny {
            font-size: 8pt;
            font-weight: 500;
            line-height: 1.1;
            letter-spacing: 0.01em;
          }

          /* Color System */
          .bg-yellow { background-color: #FFFF00; }
          .bg-black { background-color: #000000; }
          .text-yellow { color: #FFFF00; }
          .text-black { color: #000000; }
          .border-yellow { border-color: #FFFF00; }
          .border-black { border-color: #000000; }

          /* Duotone Image */
          .brutal-image {
            width: 100%;
            height: 100%;
            object-fit: cover;
            filter: grayscale(100%) contrast(2) brightness(0.8);
            mix-blend-mode: multiply;
          }

          .brutal-image-wrap {
            background: #FFFF00;
            position: relative;
            overflow: hidden;
          }

          .brutal-container {
            width: 210mm;
            padding: 3mm;
          }

          .force-page-break {
            page-break-after: always !important;
          }

          .team-member-card {
            page-break-inside: avoid !important;
          }

          /* Print Optimization */
          @media print {
            .brutal-container {
              width: 210mm;
            }
            @page {
              size: A4 portrait;
              margin: 0;
            }
            .bg-yellow, .bg-black {
              -webkit-print-color-adjust: exact;
              print-color-adjust: exact;
            }
            .force-page-break {
              page-break-after: always !important;
            }
          }

          /* Dense Grid System */
          .dense-grid {
            display: grid;
            grid-template-columns: repeat(12, 1fr);
            gap: 1mm;
          }

          .span-2 { grid-column: span 2; }
          .span-3 { grid-column: span 3; }
          .span-4 { grid-column: span 4; }
          .span-5 { grid-column: span 5; }
          .span-6 { grid-column: span 6; }
          .span-7 { grid-column: span 7; }
          .span-8 { grid-column: span 8; }
          .span-9 { grid-column: span 9; }
          .span-10 { grid-column: span 10; }
          .span-12 { grid-column: span 12; }
        `}</style>

        <div className="brutal-container">

            {/* Explosive Header */}
            <div className="bg-yellow" style={{ padding: '3mm' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                <div style={{ flex: 1 }}>
                  <h1 className="brutal-hero text-black" style={{ margin: 0 }}>
                    ELITE<br/>TEAM
                  </h1>
                  <div className="brutal-large text-black" style={{ marginTop: '2mm', maxWidth: '70%' }}>
                    FOUR ENGINEERS × UNLIMITED IMPACT
                  </div>
                </div>
                <div className="bg-black" style={{ padding: '3mm', transform: 'rotate(3deg)' }}>
                  <div className="brutal-mega text-yellow" style={{ margin: 0 }}>2026</div>
                  <div className="brutal-tiny text-yellow" style={{ textAlign: 'center' }}>UW MSIM</div>
                </div>
              </div>
            </div>

            {/* Dense Info Grid - Member 1 & 2 */}
            <div style={{ paddingLeft: '0mm', paddingRight: '0mm', paddingTop: '2mm', paddingBottom: '0mm' }}>

              {/* MATHEW MELETH */}
              <div className="bg-black" style={{ padding: '3mm', marginBottom: '2mm' }}>
                <div className="dense-grid">
                  {/* Left: Photo + Metric */}
                  <div className="span-3">
                    <div className="brutal-image-wrap" style={{ aspectRatio: '1', marginBottom: '1.5mm' }}>
                      <img src={teamMembers[0].image} alt={teamMembers[0].name} className="brutal-image" />
                    </div>
                    <div className="bg-yellow" style={{ padding: '2mm', transform: 'rotate(-1deg)' }}>
                      <div className="brutal-large text-black" style={{ margin: 0, fontSize: '14pt' }}>
                        {teamMembers[0].keyMetrics.primary}
                      </div>
                      <div className="brutal-tiny text-black">{teamMembers[0].keyMetrics.detail1}</div>
                      <div className="brutal-tiny text-black" style={{ marginTop: '0.5mm', opacity: 0.7 }}>
                        {teamMembers[0].keyMetrics.secondary} {teamMembers[0].keyMetrics.detail2}
                      </div>
                    </div>
                  </div>

                  {/* Middle: Identity + Skills */}
                  <div className="span-5">
                    <div className="brutal-mega text-yellow" style={{ margin: 0, lineHeight: 0.75 }}>
                      {teamMembers[0].name.toUpperCase()}
                    </div>
                    <div className="brutal-medium text-yellow" style={{ marginTop: '1mm', opacity: 0.8 }}>
                      {teamMembers[0].role}
                    </div>
                    <div className="brutal-body text-yellow" style={{ marginTop: '1.5mm', maxWidth: '95%' }}>
                      {teamMembers[0].summary}
                    </div>

                    {/* Contact */}
                    <div style={{ marginTop: '2mm', display: 'flex', gap: '2mm', flexWrap: 'wrap' }}>
                      <div className="brutal-tiny text-yellow">{teamMembers[0].email}</div>
                      <div className="brutal-tiny text-yellow">•</div>
                      <div className="brutal-tiny text-yellow">{teamMembers[0].phone}</div>
                      <div className="brutal-tiny text-yellow">•</div>
                      <div className="brutal-tiny text-yellow">{teamMembers[0].linkedin}</div>
                    </div>

                    {/* Top Skills Dense */}
                    <div style={{ marginTop: '2mm' }}>
                      <div className="brutal-medium text-yellow" style={{ borderBottom: '1.5pt solid #FFFF00', paddingBottom: '0.5mm', marginBottom: '1mm' }}>
                        CORE EXPERTISE
                      </div>
                      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.5mm 2mm' }}>
                        {teamMembers[0].topSkills.slice(0, 6).map((skill, i) => (
                          <div key={i} className="brutal-tiny text-yellow" style={{ opacity: 0.9 }}>• {skill}</div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Right: Technical Skills Grid */}
                  <div className="span-4">
                    <div className="brutal-medium text-yellow" style={{ marginBottom: '1mm' }}>
                      TECHNICAL STACK
                    </div>
                    {Object.entries(teamMembers[0].technicalSkills).map(([category, skills], i) => (
                      <div key={i} style={{ marginBottom: '1mm' }}>
                        <div className="brutal-tiny text-yellow" style={{ fontWeight: 700, marginBottom: '0.3mm' }}>
                          {category}
                        </div>
                        <div className="brutal-tiny text-yellow" style={{ opacity: 0.8, lineHeight: 1.2 }}>
                          {skills.join(', ')}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Experience - Full Width */}
                <div style={{ marginTop: '1.5mm', borderTop: '1.5pt solid #FFFF00', paddingTop: '1mm' }}>
                  <div className="brutal-medium text-yellow" style={{ marginBottom: '0.5mm' }}>EXPERIENCE</div>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '1.5mm' }}>
                    {teamMembers[0].experience.map((exp, i) => (
                      <div key={i} className="bg-yellow" style={{ padding: '2mm' }}>
                        <div className="brutal-medium text-black" style={{ fontSize: '7.5pt' }}>{exp.company}</div>
                        <div className="brutal-tiny text-black" style={{ marginTop: '0.5mm', opacity: 0.7 }}>{exp.role}</div>
                        <div className="brutal-tiny text-black" style={{ marginTop: '0.3mm', opacity: 0.6 }}>{exp.duration}</div>
                        <div className="brutal-tiny text-black" style={{ marginTop: '0.5mm', lineHeight: 1.1 }}>
                          {exp.achievements.slice(0, 1).map((ach, j) => (
                            <div key={j}>• {ach}</div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Education */}
                <div style={{ marginTop: '1mm' }}>
                  <div className="brutal-tiny text-yellow">
                    {teamMembers[0].education.masters.degree} • {teamMembers[0].education.masters.school} • GPA {teamMembers[0].education.masters.gpa}
                  </div>
                </div>
              </div>

              {/* RAHIL HARIHAR */}
              <div className="force-page-break" style={{ border: '2.5pt solid #000', padding: '3mm', marginBottom: '2mm' }}>
                <div className="dense-grid">
                  {/* Left: Photo + Metric */}
                  <div className="span-3">
                    <div className="brutal-image-wrap" style={{ aspectRatio: '1', marginBottom: '1.5mm' }}>
                      <img src={teamMembers[1].image} alt={teamMembers[1].name} className="brutal-image" />
                    </div>
                    <div className="bg-black" style={{ padding: '2mm', transform: 'rotate(2deg)' }}>
                      <div className="brutal-large text-yellow" style={{ margin: 0, fontSize: '14pt' }}>
                        {teamMembers[1].keyMetrics.primary}
                      </div>
                      <div className="brutal-tiny text-yellow">{teamMembers[1].keyMetrics.detail1}</div>
                      <div className="brutal-tiny text-yellow" style={{ marginTop: '0.5mm', opacity: 0.7 }}>
                        {teamMembers[1].keyMetrics.secondary} {teamMembers[1].keyMetrics.detail2}
                      </div>
                    </div>
                  </div>

                  {/* Middle: Identity + Skills */}
                  <div className="span-5">
                    <div className="brutal-mega text-black" style={{ margin: 0, lineHeight: 0.75 }}>
                      {teamMembers[1].name.toUpperCase()}
                    </div>
                    <div className="brutal-medium text-black" style={{ marginTop: '1mm', opacity: 0.8 }}>
                      {teamMembers[1].role}
                    </div>
                    <div className="brutal-body text-black" style={{ marginTop: '1.5mm', maxWidth: '95%' }}>
                      {teamMembers[1].summary}
                    </div>

                    {/* Contact */}
                    <div style={{ marginTop: '2mm', display: 'flex', gap: '2mm', flexWrap: 'wrap' }}>
                      <div className="brutal-tiny text-black">{teamMembers[1].email}</div>
                      <div className="brutal-tiny text-black">•</div>
                      <div className="brutal-tiny text-black">{teamMembers[1].phone}</div>
                      <div className="brutal-tiny text-black">•</div>
                      <div className="brutal-tiny text-black">{teamMembers[1].linkedin}</div>
                    </div>

                    {/* Top Skills */}
                    <div style={{ marginTop: '2mm' }}>
                      <div className="brutal-medium text-black" style={{ borderBottom: '1.5pt solid #000', paddingBottom: '0.5mm', marginBottom: '1mm' }}>
                        CORE EXPERTISE
                      </div>
                      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.5mm 2mm' }}>
                        {teamMembers[1].topSkills.slice(0, 6).map((skill, i) => (
                          <div key={i} className="brutal-tiny text-black" style={{ opacity: 0.9 }}>• {skill}</div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Right: Technical Stack */}
                  <div className="span-4">
                    <div className="brutal-medium text-black" style={{ marginBottom: '1mm' }}>
                      TECHNICAL STACK
                    </div>
                    {Object.entries(teamMembers[1].technicalSkills).map(([category, skills], i) => (
                      <div key={i} style={{ marginBottom: '1mm' }}>
                        <div className="brutal-tiny text-black" style={{ fontWeight: 700, marginBottom: '0.3mm' }}>
                          {category}
                        </div>
                        <div className="brutal-tiny text-black" style={{ opacity: 0.8, lineHeight: 1.2 }}>
                          {skills.join(', ')}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Experience */}
                <div style={{ marginTop: '1.5mm', borderTop: '1.5pt solid #000', paddingTop: '1mm' }}>
                  <div className="brutal-medium text-black" style={{ marginBottom: '0.5mm' }}>EXPERIENCE</div>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '1.5mm' }}>
                    {teamMembers[1].experience.map((exp, i) => (
                      <div key={i} className="bg-black" style={{ padding: '2mm' }}>
                        <div className="brutal-medium text-yellow" style={{ fontSize: '7.5pt' }}>{exp.company}</div>
                        <div className="brutal-tiny text-yellow" style={{ marginTop: '0.5mm', opacity: 0.7 }}>{exp.role}</div>
                        <div className="brutal-tiny text-yellow" style={{ marginTop: '0.3mm', opacity: 0.6 }}>{exp.duration}</div>
                        <div className="brutal-tiny text-yellow" style={{ marginTop: '0.5mm', lineHeight: 1.1 }}>
                          {exp.achievements.slice(0, 1).map((ach, j) => (
                            <div key={j}>• {ach}</div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Education */}
                <div style={{ marginTop: '1mm' }}>
                  <div className="brutal-tiny text-black">
                    {teamMembers[1].education.masters.degree} • {teamMembers[1].education.masters.school} • GPA {teamMembers[1].education.masters.gpa}
                  </div>
                </div>
              </div>

            </div>

            {/* PAGE 2 STARTS HERE */}
            <div style={{ paddingLeft: '0mm', paddingRight: '0mm', paddingTop: '2mm', paddingBottom: '0mm' }}>

              {/* SIDDARTH BHAVE */}
              <div className="bg-yellow" style={{ padding: '3mm', marginBottom: '2mm' }}>
                <div className="dense-grid">
                  {/* Left: Photo + Metric */}
                  <div className="span-3">
                    <div className="brutal-image-wrap" style={{ aspectRatio: '1', marginBottom: '1.5mm', background: '#000' }}>
                      <img src={teamMembers[2].image} alt={teamMembers[2].name} className="brutal-image" style={{ filter: 'grayscale(100%) contrast(2) brightness(1.2)', mixBlendMode: 'screen' }} />
                    </div>
                    <div className="bg-black" style={{ padding: '2mm', transform: 'rotate(-2deg)' }}>
                      <div className="brutal-large text-yellow" style={{ margin: 0, fontSize: '14pt' }}>
                        {teamMembers[2].keyMetrics.primary}
                      </div>
                      <div className="brutal-tiny text-yellow">{teamMembers[2].keyMetrics.detail1}</div>
                      <div className="brutal-tiny text-yellow" style={{ marginTop: '0.5mm', opacity: 0.7 }}>
                        {teamMembers[2].keyMetrics.secondary} {teamMembers[2].keyMetrics.detail2}
                      </div>
                    </div>
                  </div>

                  {/* Middle: Identity + Summary */}
                  <div className="span-5">
                    <div className="brutal-mega text-black" style={{ margin: 0, lineHeight: 0.75 }}>
                      {teamMembers[2].name.toUpperCase()}
                    </div>
                    <div className="brutal-medium text-black" style={{ marginTop: '1mm', opacity: 0.8 }}>
                      {teamMembers[2].role}
                    </div>
                    <div className="brutal-body text-black" style={{ marginTop: '1.5mm', maxWidth: '95%' }}>
                      {teamMembers[2].summary}
                    </div>

                    {/* Contact */}
                    <div style={{ marginTop: '2mm', display: 'flex', gap: '2mm', flexWrap: 'wrap' }}>
                      <div className="brutal-tiny text-black">{teamMembers[2].email}</div>
                      <div className="brutal-tiny text-black">•</div>
                      <div className="brutal-tiny text-black">{teamMembers[2].phone}</div>
                      <div className="brutal-tiny text-black">•</div>
                      <div className="brutal-tiny text-black">{teamMembers[2].linkedin}</div>
                    </div>

                    {/* Skills */}
                    <div style={{ marginTop: '2mm' }}>
                      <div className="brutal-medium text-black" style={{ borderBottom: '1.5pt solid #000', paddingBottom: '0.5mm', marginBottom: '1mm' }}>
                        CORE EXPERTISE
                      </div>
                      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.5mm 2mm' }}>
                        {teamMembers[2].topSkills.slice(0, 6).map((skill, i) => (
                          <div key={i} className="brutal-tiny text-black" style={{ opacity: 0.9 }}>• {skill}</div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Right: Tech Stack */}
                  <div className="span-4">
                    <div className="brutal-medium text-black" style={{ marginBottom: '1mm' }}>
                      TECHNICAL STACK
                    </div>
                    {Object.entries(teamMembers[2].technicalSkills).map(([category, skills], i) => (
                      <div key={i} style={{ marginBottom: '1mm' }}>
                        <div className="brutal-tiny text-black" style={{ fontWeight: 700, marginBottom: '0.3mm' }}>
                          {category}
                        </div>
                        <div className="brutal-tiny text-black" style={{ opacity: 0.8, lineHeight: 1.2 }}>
                          {skills.join(', ')}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Experience */}
                <div style={{ marginTop: '1.5mm', borderTop: '1.5pt solid #000', paddingTop: '1mm' }}>
                  <div className="brutal-medium text-black" style={{ marginBottom: '0.5mm' }}>EXPERIENCE</div>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '1.5mm' }}>
                    {teamMembers[2].experience.map((exp, i) => (
                      <div key={i} className="bg-black" style={{ padding: '2mm' }}>
                        <div className="brutal-medium text-yellow" style={{ fontSize: '7.5pt' }}>{exp.company}</div>
                        <div className="brutal-tiny text-yellow" style={{ marginTop: '0.5mm', opacity: 0.7 }}>{exp.role}</div>
                        <div className="brutal-tiny text-yellow" style={{ marginTop: '0.3mm', opacity: 0.6 }}>{exp.duration}</div>
                        <div className="brutal-tiny text-yellow" style={{ marginTop: '0.5mm', lineHeight: 1.1 }}>
                          {exp.achievements.slice(0, 1).map((ach, j) => (
                            <div key={j}>• {ach}</div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Education */}
                <div style={{ marginTop: '1mm' }}>
                  <div className="brutal-tiny text-black">
                    {teamMembers[2].education.masters.degree} • {teamMembers[2].education.masters.school} • GPA {teamMembers[2].education.masters.gpa}
                  </div>
                </div>
              </div>

              {/* SHREYAS SUBRAMANYA */}
              <div style={{ border: '2.5pt solid #000', padding: '3mm', marginBottom: '2mm' }}>
                <div className="dense-grid">
                  {/* Left: Photo + Metric */}
                  <div className="span-3">
                    <div className="brutal-image-wrap" style={{ aspectRatio: '1', marginBottom: '1.5mm' }}>
                      <img src={teamMembers[3].image} alt={teamMembers[3].name} className="brutal-image" />
                    </div>
                    <div className="bg-black" style={{ padding: '2mm', transform: 'rotate(1deg)' }}>
                      <div className="brutal-large text-yellow" style={{ margin: 0, fontSize: '14pt' }}>
                        {teamMembers[3].keyMetrics.primary}
                      </div>
                      <div className="brutal-tiny text-yellow">{teamMembers[3].keyMetrics.detail1}</div>
                      <div className="brutal-tiny text-yellow" style={{ marginTop: '0.5mm', opacity: 0.7 }}>
                        {teamMembers[3].keyMetrics.secondary} {teamMembers[3].keyMetrics.detail2}
                      </div>
                    </div>
                  </div>

                  {/* Middle: Identity */}
                  <div className="span-5">
                    <div className="brutal-mega text-black" style={{ margin: 0, lineHeight: 0.75 }}>
                      {teamMembers[3].name.toUpperCase()}
                    </div>
                    <div className="brutal-medium text-black" style={{ marginTop: '1mm', opacity: 0.8 }}>
                      {teamMembers[3].role}
                    </div>
                    <div className="brutal-body text-black" style={{ marginTop: '1.5mm', maxWidth: '95%' }}>
                      {teamMembers[3].summary}
                    </div>

                    {/* Contact */}
                    <div style={{ marginTop: '2mm', display: 'flex', gap: '2mm', flexWrap: 'wrap' }}>
                      <div className="brutal-tiny text-black">{teamMembers[3].email}</div>
                      <div className="brutal-tiny text-black">•</div>
                      <div className="brutal-tiny text-black">{teamMembers[3].phone}</div>
                      <div className="brutal-tiny text-black">•</div>
                      <div className="brutal-tiny text-black">{teamMembers[3].linkedin}</div>
                    </div>

                    {/* Skills */}
                    <div style={{ marginTop: '2mm' }}>
                      <div className="brutal-medium text-black" style={{ borderBottom: '1.5pt solid #000', paddingBottom: '0.5mm', marginBottom: '1mm' }}>
                        CORE EXPERTISE
                      </div>
                      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.5mm 2mm' }}>
                        {teamMembers[3].topSkills.slice(0, 6).map((skill, i) => (
                          <div key={i} className="brutal-tiny text-black" style={{ opacity: 0.9 }}>• {skill}</div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Right: Tech */}
                  <div className="span-4">
                    <div className="brutal-medium text-black" style={{ marginBottom: '1mm' }}>
                      TECHNICAL STACK
                    </div>
                    {Object.entries(teamMembers[3].technicalSkills).map(([category, skills], i) => (
                      <div key={i} style={{ marginBottom: '1mm' }}>
                        <div className="brutal-tiny text-black" style={{ fontWeight: 700, marginBottom: '0.3mm' }}>
                          {category}
                        </div>
                        <div className="brutal-tiny text-black" style={{ opacity: 0.8, lineHeight: 1.2 }}>
                          {skills.join(', ')}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Experience */}
                <div style={{ marginTop: '1.5mm', borderTop: '1.5pt solid #000', paddingTop: '1mm' }}>
                  <div className="brutal-medium text-black" style={{ marginBottom: '0.5mm' }}>EXPERIENCE</div>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '1.5mm' }}>
                    {teamMembers[3].experience.slice(0, 3).map((exp, i) => (
                      <div key={i} className="bg-black" style={{ padding: '2mm' }}>
                        <div className="brutal-medium text-yellow" style={{ fontSize: '7.5pt' }}>{exp.company}</div>
                        <div className="brutal-tiny text-yellow" style={{ marginTop: '0.5mm', opacity: 0.7 }}>{exp.role}</div>
                        <div className="brutal-tiny text-yellow" style={{ marginTop: '0.3mm', opacity: 0.6 }}>{exp.duration}</div>
                        <div className="brutal-tiny text-yellow" style={{ marginTop: '0.5mm', lineHeight: 1.1 }}>
                          {exp.achievements.slice(0, 1).map((ach, j) => (
                            <div key={j}>• {ach}</div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Education */}
                <div style={{ marginTop: '1mm' }}>
                  <div className="brutal-tiny text-black">
                    {teamMembers[3].education.masters.degree} • {teamMembers[3].education.masters.school} • GPA {teamMembers[3].education.masters.gpa}
                  </div>
                </div>
              </div>

              {/* Team Stats - Dense Info Block */}
              <div className="bg-black" style={{ padding: '2mm' }}>
                <div className="brutal-large text-yellow" style={{ marginBottom: '1mm' }}>
                  COLLECTIVE IMPACT
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(6, 1fr)', gap: '1.5mm' }}>
                  <div className="bg-yellow" style={{ padding: '2mm', textAlign: 'center' }}>
                    <div className="brutal-large text-black" style={{ fontSize: '16pt' }}>14</div>
                    <div className="brutal-tiny text-black">YEARS EXPERIENCE</div>
                  </div>
                  <div className="bg-yellow" style={{ padding: '2mm', textAlign: 'center' }}>
                    <div className="brutal-large text-black" style={{ fontSize: '16pt' }}>15+</div>
                    <div className="brutal-tiny text-black">FORTUNE 500</div>
                  </div>
                  <div className="bg-yellow" style={{ padding: '2mm', textAlign: 'center' }}>
                    <div className="brutal-large text-black" style={{ fontSize: '16pt' }}>$2M+</div>
                    <div className="brutal-tiny text-black">COST SAVINGS</div>
                  </div>
                  <div className="bg-yellow" style={{ padding: '2mm', textAlign: 'center' }}>
                    <div className="brutal-large text-black" style={{ fontSize: '16pt' }}>100+</div>
                    <div className="brutal-tiny text-black">PROJECTS</div>
                  </div>
                  <div className="bg-yellow" style={{ padding: '2mm', textAlign: 'center' }}>
                    <div className="brutal-large text-black" style={{ fontSize: '16pt' }}>50+</div>
                    <div className="brutal-tiny text-black">TECHNOLOGIES</div>
                  </div>
                  <div className="bg-yellow" style={{ padding: '2mm', textAlign: 'center' }}>
                    <div className="brutal-large text-black" style={{ fontSize: '16pt' }}>3.9</div>
                    <div className="brutal-tiny text-black">AVG GPA</div>
                  </div>
                </div>

                {/* Technology Stack - Ultra Dense */}
                <div style={{ marginTop: '1.5mm', borderTop: '1.5pt solid #FFFF00', paddingTop: '1mm' }}>
                  <div className="brutal-medium text-yellow" style={{ marginBottom: '0.5mm' }}>
                    COLLECTIVE TECHNOLOGY MASTERY
                  </div>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.5mm' }}>
                    <div>
                      <div className="brutal-tiny text-yellow" style={{ fontWeight: 700, marginBottom: '0.5mm' }}>
                        AI/ML & AGENTIC SYSTEMS
                      </div>
                      <div className="brutal-tiny text-yellow" style={{ opacity: 0.8, lineHeight: 1.2 }}>
                        LangChain • CrewAI • OpenAI SWARM • TensorFlow • PyTorch • Keras • Sklearn • Hugging Face • FAISS • AutoGen • Google ADK
                      </div>
                    </div>
                    <div>
                      <div className="brutal-tiny text-yellow" style={{ fontWeight: 700, marginBottom: '0.5mm' }}>
                        CLOUD & INFRASTRUCTURE
                      </div>
                      <div className="brutal-tiny text-yellow" style={{ opacity: 0.8, lineHeight: 1.2 }}>
                        AWS (Lambda, S3, Glue, DynamoDB, EC2) • Azure (Databricks, Data Factory) • GCP • Kubernetes • Docker • eBPF
                      </div>
                    </div>
                    <div>
                      <div className="brutal-tiny text-yellow" style={{ fontWeight: 700, marginBottom: '0.5mm' }}>
                        DATA ENGINEERING
                      </div>
                      <div className="brutal-tiny text-yellow" style={{ opacity: 0.8, lineHeight: 1.2 }}>
                        PySpark • Hadoop • Kafka • Delta Lake • PostgreSQL • MongoDB • MySQL • Cassandra • ETL Pipelines
                      </div>
                    </div>
                    <div>
                      <div className="brutal-tiny text-yellow" style={{ fontWeight: 700, marginBottom: '0.5mm' }}>
                        PROGRAMMING LANGUAGES
                      </div>
                      <div className="brutal-tiny text-yellow" style={{ opacity: 0.8, lineHeight: 1.2 }}>
                        Python • Java • C++ • JavaScript • SQL • Groovy • TypeScript
                      </div>
                    </div>
                    <div>
                      <div className="brutal-tiny text-yellow" style={{ fontWeight: 700, marginBottom: '0.5mm' }}>
                        FRAMEWORKS & TOOLS
                      </div>
                      <div className="brutal-tiny text-yellow" style={{ opacity: 0.8, lineHeight: 1.2 }}>
                        React • Node • Flask • FastAPI • Spring Boot • Django • SAP CPI • Grafana • Prometheus • Tableau • Power BI
                      </div>
                    </div>
                    <div>
                      <div className="brutal-tiny text-yellow" style={{ fontWeight: 700, marginBottom: '0.5mm' }}>
                        PRODUCT & LEADERSHIP
                      </div>
                      <div className="brutal-tiny text-yellow" style={{ opacity: 0.8, lineHeight: 1.2 }}>
                        Product Management • OKRs • PRDs • Agile/Scrum • Stakeholder Management • System Design • S&OP • APS
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            </div>

        </div>
      </div>
    </div>
  );
};

export default Prototype8;
