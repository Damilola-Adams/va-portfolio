import React from 'react';

export default function Stats() {
  return (
    <section id="stats">
      <div className="stats-inner">
        <div className="stat-box reveal">
          <div className="stat-n">6<span className="stat-unit">+</span></div>
          <div className="stat-l">Projects Delivered</div>
        </div>
        <div className="stat-box reveal d1">
          <div className="stat-n">9</div>
          <div className="stat-l">Cities Coordinated</div>
        </div>
        <div className="stat-box reveal d2">
          <div className="stat-n">$10<span className="stat-unit">K+</span></div>
          <div className="stat-l">Budget Managed</div>
        </div>
        <div className="stat-box reveal d3">
          <div className="stat-n">100<span className="stat-unit">%</span></div>
          <div className="stat-l">On-Time Delivery</div>
        </div>
      </div>
    </section>
  );
}
