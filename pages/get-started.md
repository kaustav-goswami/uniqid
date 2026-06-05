---
layout: page
title: Getting Started
subtitle: Integrate UniqID bot detection in four steps
permalink: /get-started/
---

UniqID makes it straightforward to bring hardware-backed bot scoring into your application stack. Each visitor receives a continuous bot probability that your server admin dashboard displays in real time.

## Integration workflow

### 1. Identify protection points

Review your traffic flows and decide where bot verification should occur — typically login, signup, password reset, checkout, and high-value API endpoints.

### 2. Choose your plan

Select the UniqID tier that matches your monthly check volume and support requirements on the <a href="{{ '/pricing' | relative_url }}">pricing page</a>.

### 3. Integrate the API

Add the UniqID SDK or REST API to your endpoints. Each request returns a float bot score (0.000–1.000) along with hardware attestation status and recommended action.

```json
{
  "session_id": "sess_8f3a2b",
  "bot_score": 0.042,
  "verdict": "human",
  "attestation": "verified",
  "latency_ms": 38
}
```

### 4. Monitor and tune

Use the admin dashboard to watch live traffic, set score thresholds, and adjust policies to balance false positives against bot coverage.

## Recommended deployment patterns

- **Inline gate**: Block or challenge sessions where `bot_score >= 0.70`
- **Review queue**: Route scores between 0.40 and 0.70 for manual inspection
- **Allow list**: Pass through sessions below 0.40 with minimal friction

> Detailed SDK documentation is coming soon. In the meantime, <a href="{{ '/contact' | relative_url }}">contact us</a> for early access and integration support.
