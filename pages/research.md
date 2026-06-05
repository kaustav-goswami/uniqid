---
layout: page
title: Research
subtitle: Peer-reviewed work from the UniqID team on hardware-based device fingerprinting
permalink: /research/
---

UniqID builds on our published research in hardware-based device fingerprinting — techniques that distinguish real devices (and real users) from bots and spoofed environments using signals rooted in physical hardware, not just browser metadata.

<div class="research-card">
  <h3>FP-Rowhammer: DRAM-Based Device Fingerprinting</h3>
  <div class="research-meta">Venugopalan, Goswami, Din, Lowe-Power, King &amp; Shafiq · ACM ASIA CCS 2025</div>
  <p>
    This paper presents a Rowhammer-based fingerprinting approach that leverages DRAM manufacturing
    variations to produce unique, stable device identifiers — even when software configurations are
    normalized or obfuscated. Evaluated on 98 DRAM modules, FP-Rowhammer achieves 99.91% fingerprinting
    accuracy in under five seconds. These hardware-rooted signals are a core building block for
    distinguishing legitimate devices from automated or spoofed clients.
  </p>
  <a class="research-link" href="https://dl.acm.org/doi/10.1145/3708821.3733880" target="_blank" rel="noopener">
    Read publication <i class="fas fa-external-link-alt"></i>
  </a>
</div>

<div class="research-card">
  <h3>CPU-Print: From Multiplying Matrices to Uniquely Identifying Devices using DVFS</h3>
  <div class="research-meta">Goswami, Venugopalan, Swift, Chuah, Lowe-Power &amp; Shafiq · IEEE S&amp;P 2025 (Poster)</div>
  <p>
    This poster introduces CPU-Print, a DVFS-based device fingerprinting technique that exploits
    CPU power-draw side channels via controlled workloads (matrix multiplication) to induce
    frequency-state changes unique to each device. Deployed in the wild with 50,000 traces across
    225 devices, CPU-Print achieves up to 88% fingerprinting accuracy — applicable to bot detection,
    fraud prevention, and stateless device identification from the browser.
  </p>
  <a class="research-link" href="https://sp2025.ieee-security.org/downloads/posters/sp25posters-final14.pdf" target="_blank" rel="noopener">
    Read poster (PDF) <i class="fas fa-external-link-alt"></i>
  </a>
</div>

<p style="color: #8b949e; margin-top: 2rem;">
  UniqID is currently in the R&amp;D phase — we're translating this research into a deployable product.
  Interested in collaborating or following our progress? <a href="{{ '/contact' | relative_url }}">Get in touch</a>.
</p>
