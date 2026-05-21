import React from 'react';

export default function Services() {
  return (
    <section id="services">
      <div className="section-header reveal">
        <div>
          <div className="eyebrow">What I Do</div>
          <h2 className="section-title">Executive support,<br /><em>done properly.</em></h2>
        </div>
        <p className="section-body">
          I go beyond task completion — I build frameworks, automate workflows, and manage complexity so you can stay focused on growth. From day-to-day admin to full operational builds, I own it end-to-end.
        </p>
      </div>

      <div className="services-list">
        <div className="service-item reveal">
          <div className="service-num">01</div>
          <div className="service-name">Executive & Administrative Support</div>
          <p className="service-desc">Calendar management, inbox handling, meeting coordination, day planning, and task research. I manage the details so nothing falls through the cracks.</p>
          <div className="service-tags">
            <span className="s-tag">Scheduling</span>
            <span className="s-tag">Email</span>
            <span className="s-tag">Research</span>
            <span className="s-tag">Meeting Prep</span>
          </div>
        </div>
        <div className="service-item reveal d1">
          <div className="service-num">02</div>
          <div className="service-name">Operations Systems Design</div>
          <p className="service-desc">SOPs, Notion workspaces, Airtable databases, and business operation manuals — built to give your business structure and consistency.</p>
          <div className="service-tags">
            <span className="s-tag">Notion</span>
            <span className="s-tag">Airtable</span>
            <span className="s-tag">SOPs</span>
            <span className="s-tag">Workflows</span>
          </div>
        </div>
        <div className="service-item reveal d2">
          <div className="service-num">03</div>
          <div className="service-name">Communication Automation</div>
          <p className="service-desc">WhatsApp Business flows and Instagram DM automations using ManyChat — so your business responds instantly without manual effort.</p>
          <div className="service-tags">
            <span className="s-tag">ManyChat</span>
            <span className="s-tag">WhatsApp</span>
            <span className="s-tag">Instagram</span>
          </div>
        </div>
        <div className="service-item reveal">
          <div className="service-num">04</div>
          <div className="service-name">Travel Coordination</div>
          <p className="service-desc">End-to-end executive travel planning — international itineraries, accommodation, visa research, full budget breakdowns, and contingency planning.</p>
          <div className="service-tags">
            <span className="s-tag">Itineraries</span>
            <span className="s-tag">Budgeting</span>
            <span className="s-tag">Logistics</span>
            <span className="s-tag">Risk Planning</span>
          </div>
        </div>
        <div className="service-item reveal d1">
          <div className="service-num">05</div>
          <div className="service-name">Lead & CRM Management</div>
          <p className="service-desc">Airtable pipelines, follow-up tracking systems, and lead priority frameworks — ensuring every potential client is seen and followed up properly.</p>
          <div className="service-tags">
            <span className="s-tag">Airtable</span>
            <span className="s-tag">Pipelines</span>
            <span className="s-tag">CRM</span>
          </div>
        </div>
        <div className="service-item reveal d2">
          <div className="service-num">06</div>
          <div className="service-name">Social Media & Personal Brand</div>
          <p className="service-desc">Content calendars, bio optimisation, and posting strategy — turning your online presence into a consistent, credible asset.</p>
          <div className="service-tags">
            <span className="s-tag">Content Planning</span>
            <span className="s-tag">Copywriting</span>
            <span className="s-tag">Strategy</span>
          </div>
        </div>
      </div>
    </section>
  );
}
