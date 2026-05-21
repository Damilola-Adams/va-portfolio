import React from 'react';

export default function Tools() {
  return (
    <section id="tools">
      <div className="tools-inner">
        <div className="tools-header-row reveal">
          <div>
            <div className="eyebrow">Tech Stack</div>
            <h2 className="section-title">Tools I work<br /><em>fluently with.</em></h2>
          </div>
          <p className="section-body">Proficient in the modern tools that keep businesses running — and quick to learn whatever your team already uses.</p>
        </div>
        <div className="tools-grid">
          <div className="tool-item reveal"><span className="tool-emoji">🗂️</span><div className="tool-label">Notion</div></div>
          <div className="tool-item reveal d1"><span className="tool-emoji">📋</span><div className="tool-label">Airtable</div></div>
          <div className="tool-item reveal d2"><span className="tool-emoji">💬</span><div className="tool-label">ManyChat</div></div>
          <div className="tool-item reveal d1"><span className="tool-emoji">📲</span><div className="tool-label">WhatsApp Biz</div></div>
          <div className="tool-item reveal d2"><span className="tool-emoji">📊</span><div className="tool-label">Excel</div></div>
          <div className="tool-item reveal d3"><span className="tool-emoji">🔗</span><div className="tool-label">HubSpot</div></div>
          <div className="tool-item reveal"><span className="tool-emoji">📧</span><div className="tool-label">Gmail</div></div>
          <div className="tool-item reveal d1"><span className="tool-emoji">📅</span><div className="tool-label">Google Cal</div></div>
          <div className="tool-item reveal d2"><span className="tool-emoji">📑</span><div className="tool-label">Google Docs</div></div>
          <div className="tool-item reveal d3"><span className="tool-emoji">📊</span><div className="tool-label">Sheets</div></div>
          <div className="tool-item reveal d1"><span className="tool-emoji">💬</span><div className="tool-label">Slack</div></div>
          <div className="tool-item reveal d2"><span className="tool-emoji">🎯</span><div className="tool-label">Trello</div></div>
        </div>
      </div>
    </section>
  );
}
