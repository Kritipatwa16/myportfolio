import React, { useEffect, useRef, useState } from 'react';
import advaiyaLogo from "../../assets/Advaiya_logo.png";

const experiences = [
  {
    company: 'Advaiya Solutions',
    role: 'Application Engineer (Intern)',
    duration: 'Feb 2026 – Apr 2026',
    type: 'Internship',
    description:
      'Worked on real-world enterprise projects involving geospatial mapping and data visualization.',
    projects: [
      {
        name: 'Dealer & Retailer Mapping System (OpenStreetMap)',
        points: [
          'Developed a map-based interface using OpenStreetMap to visualize dealer and retailer locations across regions.',
          'Implemented location markers and dynamic data rendering for better tracking and actionable business insights.',
        ],
      },
    ],
    techStack: ['React', 'OpenStreetMap', 'JavaScript', 'REST APIs'],
  },
];

const ExperienceCard = ({ exp, index }) => {
  const cardRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    if (cardRef.current) observer.observe(cardRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={cardRef}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(40px)',
        transition: `opacity 0.7s ease ${index * 0.15}s, transform 0.7s ease ${index * 0.15}s`,
        position: 'relative',
      }}
    >
      {/* Glow blob */}
      <div
        style={{
          position: 'absolute',
          top: '-30px',
          left: '-30px',
          width: '180px',
          height: '180px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(130,69,236,0.18) 0%, transparent 70%)',
          pointerEvents: 'none',
          zIndex: 0,
        }}
      />

      <div
        style={{
          position: 'relative',
          zIndex: 1,
          background: 'rgba(255,255,255,0.03)',
          border: '1px solid rgba(130,69,236,0.25)',
          borderRadius: '16px',
          padding: '2rem',
          backdropFilter: 'blur(10px)',
          transition: 'border-color 0.3s ease, box-shadow 0.3s ease',
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.borderColor = 'rgba(130,69,236,0.6)';
          e.currentTarget.style.boxShadow = '0 0 32px rgba(130,69,236,0.15)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.borderColor = 'rgba(130,69,236,0.25)';
          e.currentTarget.style.boxShadow = 'none';
        }}
      >
        {/* Header Row */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-start',
            flexWrap: 'wrap',
            gap: '1rem',
            marginBottom: '1.25rem',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            {/* Icon bubble */}
          <div style={{
  width: '52px', height: '52px', borderRadius: '12px',
  background: '#ffffff',           // white bg so logo looks clean
  border: '1px solid rgba(130,69,236,0.35)',
  display: 'flex', alignItems: 'center',
  justifyContent: 'center', flexShrink: 0,
  overflow: 'hidden', padding: '6px',
}}>
  <img
    src={advaiyaLogo}
    alt="Advaiya Solutions"
    style={{ width: '100%', height: '100%', objectFit: 'contain' }}
  />
</div>
            <div>
              <h3
                style={{
                  margin: 0,
                  fontSize: '1.2rem',
                  fontWeight: 700,
                  color: '#ffffff',
                  fontFamily: "'Syne', sans-serif",
                  letterSpacing: '0.01em',
                }}
              >
                {exp.company}
              </h3>
              <p
                style={{
                  margin: '2px 0 0',
                  fontSize: '0.95rem',
                  color: '#a855f7',
                  fontWeight: 600,
                }}
              >
                {exp.role}
              </p>
            </div>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '6px' }}>
            {/* Duration badge */}
            <span
              style={{
                fontSize: '0.78rem',
                color: '#c084fc',
                background: 'rgba(130,69,236,0.12)',
                border: '1px solid rgba(130,69,236,0.3)',
                borderRadius: '20px',
                padding: '4px 14px',
                whiteSpace: 'nowrap',
                fontFamily: "'JetBrains Mono', monospace",
              }}
            >
              📅 {exp.duration}
            </span>
            {/* Type badge */}
            <span
              style={{
                fontSize: '0.72rem',
                color: '#86efac',
                background: 'rgba(134,239,172,0.08)',
                border: '1px solid rgba(134,239,172,0.2)',
                borderRadius: '20px',
                padding: '3px 12px',
              }}
            >
              {exp.type}
            </span>
          </div>
        </div>

        {/* Description */}
        <p
          style={{
            margin: '0 0 1.5rem',
            fontSize: '0.93rem',
            color: '#9ca3af',
            lineHeight: '1.7',
          }}
        >
          {exp.description}
        </p>

        {/* Divider */}
        <div
          style={{
            height: '1px',
            background: 'linear-gradient(90deg, rgba(130,69,236,0.5) 0%, transparent 100%)',
            marginBottom: '1.5rem',
          }}
        />

        {/* Projects */}
        {exp.projects.map((proj, pi) => (
          <div key={pi} style={{ marginBottom: '1.25rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '0.75rem' }}>
              <div
                style={{
                  width: '6px',
                  height: '6px',
                  borderRadius: '50%',
                  background: '#8245ec',
                  boxShadow: '0 0 6px #8245ec',
                  flexShrink: 0,
                }}
              />
              <h4
                style={{
                  margin: 0,
                  fontSize: '0.95rem',
                  fontWeight: 600,
                  color: '#e9d5ff',
                  fontFamily: "'Syne', sans-serif",
                }}
              >
                {proj.name}
              </h4>
            </div>

            <ul style={{ margin: 0, padding: 0, listStyle: 'none' }}>
              {proj.points.map((point, idx) => (
                <li
                  key={idx}
                  style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '10px',
                    marginBottom: '0.6rem',
                    fontSize: '0.88rem',
                    color: '#9ca3af',
                    lineHeight: '1.65',
                  }}
                >
                  <span
                    style={{
                      color: '#8245ec',
                      fontSize: '1rem',
                      lineHeight: '1.65',
                      flexShrink: 0,
                    }}
                  >
                    ▸
                  </span>
                  {point}
                </li>
              ))}
            </ul>
          </div>
        ))}

        {/* Tech Stack */}
        <div
          style={{
            marginTop: '1.25rem',
            display: 'flex',
            flexWrap: 'wrap',
            gap: '8px',
            alignItems: 'center',
          }}
        >
          <span
            style={{
              fontSize: '0.75rem',
              color: '#6b7280',
              marginRight: '4px',
              fontFamily: "'JetBrains Mono', monospace",
            }}
          >
            Tech:
          </span>
          {exp.techStack.map((tech, ti) => (
            <span
              key={ti}
              style={{
                fontSize: '0.75rem',
                color: '#c084fc',
                background: 'rgba(130,69,236,0.1)',
                border: '1px solid rgba(130,69,236,0.2)',
                borderRadius: '6px',
                padding: '3px 10px',
                fontFamily: "'JetBrains Mono', monospace",
                transition: 'background 0.2s, border-color 0.2s',
                cursor: 'default',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'rgba(130,69,236,0.2)';
                e.currentTarget.style.borderColor = 'rgba(130,69,236,0.5)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'rgba(130,69,236,0.1)';
                e.currentTarget.style.borderColor = 'rgba(130,69,236,0.2)';
              }}
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

const Experience = () => {
  const titleRef = useRef(null);
  const [titleVisible, setTitleVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTitleVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    if (titleRef.current) observer.observe(titleRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=JetBrains+Mono:wght@400;500&display=swap');
      `}</style>

      <section
        id="experience"
        style={{
          padding: '5rem 7vw',
          fontFamily: "'Syne', sans-serif",
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Background decorative orbs */}
        <div
          style={{
            position: 'absolute',
            top: '10%',
            right: '-5%',
            width: '350px',
            height: '350px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(130,69,236,0.08) 0%, transparent 70%)',
            pointerEvents: 'none',
          }}
        />
        <div
          style={{
            position: 'absolute',
            bottom: '5%',
            left: '-8%',
            width: '300px',
            height: '300px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(168,85,247,0.06) 0%, transparent 70%)',
            pointerEvents: 'none',
          }}
        />

        {/* Section Title */}
        <div
          ref={titleRef}
          style={{
            textAlign: 'center',
            marginBottom: '3.5rem',
            opacity: titleVisible ? 1 : 0,
            transform: titleVisible ? 'translateY(0)' : 'translateY(20px)',
            transition: 'opacity 0.6s ease, transform 0.6s ease',
          }}
        >
          <h2
            style={{
              fontSize: 'clamp(2rem, 4vw, 2.5rem)',
              fontWeight: 700,
              color: '#ffffff',
              margin: '0 0 1rem',
              lineHeight: 1.15,
            }}
          >
            Technical{' '}
            <span
              style={{
                background: 'linear-gradient(90deg, #8245ec, #a855f7)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              Experience
            </span>
          </h2>
          {/* Underline accent */}
          <div
            style={{
              width: '80px',
              height: '3px',
              background: 'linear-gradient(90deg, #8245ec, #a855f7)',
              borderRadius: '99px',
              margin: '0 auto',
              boxShadow: '0 0 12px rgba(130,69,236,0.6)',
            }}
          />
        </div>

        {/* Timeline container */}
        <div
          style={{
            maxWidth: '860px',
            margin: '0 auto',
            position: 'relative',
          }}
        >
          {/* Vertical timeline line */}
          <div
            style={{
              position: 'absolute',
              left: '-24px',
              top: '0',
              bottom: '0',
              width: '2px',
              background: 'linear-gradient(180deg, rgba(130,69,236,0.8) 0%, rgba(130,69,236,0.1) 100%)',
              borderRadius: '2px',
            }}
          />

          {experiences.map((exp, i) => (
            <div key={i} style={{ position: 'relative', marginBottom: '2rem' }}>
              {/* Timeline dot */}
              <div
                style={{
                  position: 'absolute',
                  left: '-30px',
                  top: '28px',
                  width: '14px',
                  height: '14px',
                  borderRadius: '50%',
                  background: '#8245ec',
                  border: '2px solid #1a0a2e',
                  boxShadow: '0 0 10px rgba(130,69,236,0.8), 0 0 20px rgba(130,69,236,0.4)',
                  zIndex: 2,
                }}
              />
              <ExperienceCard exp={exp} index={i} />
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Experience;