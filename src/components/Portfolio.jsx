import React from 'react';

export default function Portfolio() {
  return (
    <section id="portfolio">
      <div className="portfolio-header reveal">
        <div className="eyebrow">Selected Work</div>
        <h2 className="section-title">Projects I've delivered.</h2>
      </div>

      <div className="projects-list">
        <div className="project-row reveal">
          <div className="proj-num">01</div>
          <div className="proj-main">
            <div className="proj-category">Social Media Strategy · Personal Branding</div>
            <div className="proj-title">Founder X Strategy & Brand Positioning</div>
            <p className="proj-desc">Built a structured content calendar and post schedule for a Nigerian Federal Government grant recipient, positioning them as a credible industry voice. Optimised their X bio to establish clear founder identity and attract the right audience.</p>
            <div className="proj-deliverables">
              <span className="proj-del">Content Calendar</span>
              <span className="proj-del">Bio Copywriting</span>
              <span className="proj-del">Brand Visibility Strategy</span>
            </div>
          </div>
          <div className="proj-tools">
            <span className="proj-tool">X (Twitter)</span>
            <span className="proj-tool">Content Strategy</span>
          </div>
        </div>

        <div className="project-row reveal">
          <div className="proj-num">02</div>
          <div className="proj-main">
            <div className="proj-category">Executive Assistance · Administration</div>
            <div className="proj-title">Full-Spectrum Executive VA Support</div>
            <p className="proj-desc">Provided end-to-end executive support for a backend engineer — scheduling meetings, planning daily agendas, handling communications, conducting tool research, and producing summary documents to simplify intern task review and grading.</p>
            <div className="proj-deliverables">
              <span className="proj-del">Daily Planning</span>
              <span className="proj-del">Meeting Coordination</span>
              <span className="proj-del">Research Reports</span>
              <span className="proj-del">Task Summaries</span>
            </div>
          </div>
          <div className="proj-tools">
            <span className="proj-tool">Calendar</span>
            <span className="proj-tool">Email</span>
            <span className="proj-tool">Research</span>
          </div>
        </div>

        <div className="project-row reveal">
          <div className="proj-num">03</div>
          <div className="proj-main">
            <div className="proj-category">Travel Logistics · Executive Coordination</div>
            <div className="proj-title">9-City International Executive Trip Plan</div>
            <p className="proj-desc">Designed a complete travel system for a startup founder attending 8 of 9 international events within 32 days. Delivered a strategic travel document covering route design, event strategy, transport, accommodation, a $10,500 budget breakdown, timeline, logistics hub, and risk analysis — plus a fully built Notion workspace.</p>
            <div className="proj-deliverables">
              <span className="proj-del">Strategic Travel Doc</span>
              <span className="proj-del">$10,500 Budget Plan</span>
              <span className="proj-del">Notion Workspace</span>
              <span className="proj-del">Risk Analysis</span>
            </div>
          </div>
          <div className="proj-tools">
            <span className="proj-tool">Notion</span>
            <span className="proj-tool">Budgeting</span>
            <span className="proj-tool">Logistics</span>
          </div>
        </div>

        <div className="project-row reveal">
          <div className="proj-num">04</div>
          <div className="proj-main">
            <div className="proj-category">Automation · Business Systems</div>
            <div className="proj-title">Customer Communication Automation System</div>
            <p className="proj-desc">Solved a communication bottleneck for an overwhelmed business by setting up a WhatsApp Business automation and an Instagram comment-to-DM flow using ManyChat. Created detailed SOPs for maintaining both systems going forward.</p>
            <div className="proj-deliverables">
              <span className="proj-del">WhatsApp Automation</span>
              <span className="proj-del">Instagram DM Flow</span>
              <span className="proj-del">SOPs</span>
            </div>
          </div>
          <div className="proj-tools">
            <span className="proj-tool">ManyChat</span>
            <span className="proj-tool">WhatsApp Biz</span>
          </div>
        </div>

        <div className="project-row reveal">
          <div className="proj-num">05</div>
          <div className="proj-main">
            <div className="proj-category">CRM · Lead Management</div>
            <div className="proj-title">Airtable Lead Pipeline & Follow-Up System</div>
            <p className="proj-desc">Built a structured lead management system in Airtable for a growing business losing leads across multiple channels. Delivered a complete pipeline with defined stages, a follow-up tracking system, and a priority framework so the team could always see exactly where each lead stood.</p>
            <div className="proj-deliverables">
              <span className="proj-del">Lead Pipeline</span>
              <span className="proj-del">Follow-Up Tracker</span>
              <span className="proj-del">Priority System</span>
            </div>
          </div>
          <div className="proj-tools">
            <span className="proj-tool">Airtable</span>
            <span className="proj-tool">CRM Design</span>
          </div>
        </div>

        <div className="project-row reveal">
          <div className="proj-num">06</div>
          <div className="proj-main">
            <div className="proj-category">Startup Operations · Strategy</div>
            <div className="proj-title">Startup Incubator — Full Operations Infrastructure</div>
            <p className="proj-desc">Developed a complete operational foundation for a startup to run effectively within 30–90 days. Delivered a business operations manual, an investor presentation deck, and a 90-day execution roadmap — giving the team a clear, structured path from launch to scale.</p>
            <div className="proj-deliverables">
              <span className="proj-del">Operations Manual</span>
              <span className="proj-del">Investor Deck</span>
              <span className="proj-del">90-Day Roadmap</span>
            </div>
          </div>
          <div className="proj-tools">
            <span className="proj-tool">Operations</span>
            <span className="proj-tool">Strategy</span>
            <span className="proj-tool">Presentations</span>
          </div>
        </div>
      </div>
    </section>
  );
}
