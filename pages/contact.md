---
layout: page
title: Contact
subtitle: Get in touch with the UniqID team
permalink: /contact/
---

<div class="research-card" id="rnd-notice" style="display: none; margin-bottom: 2rem; border-color: #d29922;">
  <p style="margin: 0; color: #e6edf3;">
    <strong style="color: #d29922;"><i class="fas fa-flask"></i> Not quite ready yet</strong> —
    UniqID is still in the research and development phase and is not available for deployment at this time.
    We're glad you're interested in the <span id="selected-plan"></span> plan — leave your details below and
    we'll reach out when we're ready, or feel free to ask about our research in the meantime.
  </p>
</div>

<p id="contact-intro">Have a question about UniqID, our AI cybersecurity platform, or a potential partnership? Fill out the form below and we'll get back to you.</p>

<div class="uniqid-form">
  <form id="contact-form" action="{{ site.contact_form_endpoint }}" method="POST">
    <input type="hidden" name="_subject" value="UniqID Enquiry">
    <input type="hidden" name="_captcha" value="false">
    <input type="hidden" name="_template" value="table">
    <input type="hidden" name="_next" value="{{ '/contact/?sent=true' | absolute_url }}">
    <input type="text" name="_honey" style="display:none">
    <input type="hidden" id="plan-field" name="plan" value="">

    <div class="form-group">
      <label for="name">Name</label>
      <input type="text" id="name" name="name" class="form-control" placeholder="Your full name" required>
    </div>

    <div class="form-group">
      <label for="email">Email</label>
      <input type="email" id="email" name="email" class="form-control" placeholder="you@company.com" required>
    </div>

    <div class="form-group">
      <label for="company">Company</label>
      <input type="text" id="company" name="company" class="form-control" placeholder="Organization (optional)">
    </div>

    <div class="form-group">
      <label for="message">Message</label>
      <textarea id="message" name="message" class="form-control" rows="5" placeholder="Tell us about your use case or questions" required></textarea>
    </div>

    <button type="submit" class="btn-uniqid-primary" style="border: none; cursor: pointer;">Send Enquiry</button>

    <div class="form-success" id="form-success">
      <i class="fas fa-check-circle"></i> Thank you — your enquiry has been sent. We'll be in touch soon.
    </div>
  </form>
</div>

<script>
  (function () {
    var params = new URLSearchParams(window.location.search);
    var planLabels = {
      basic: 'Basic',
      professional: 'Professional',
      enterprise: 'Enterprise',
      custom: 'Custom'
    };

    if (params.get('from') === 'pricing') {
      var plan = params.get('plan') || 'custom';
      var label = planLabels[plan] || plan;

      document.getElementById('rnd-notice').style.display = 'block';
      document.getElementById('selected-plan').textContent = label;
      document.getElementById('plan-field').value = label;
      document.getElementById('contact-intro').style.display = 'none';

      var subjectField = document.querySelector('input[name="_subject"]');
      if (subjectField) {
        subjectField.value = 'UniqID Enquiry — ' + label + ' plan';
      }
    }

    if (params.get('sent') === 'true') {
      document.getElementById('form-success').style.display = 'block';
    }
  })();
</script>

<p style="color: #8b949e; margin-top: 2rem;">
  For pricing details, visit our <a href="{{ '/pricing' | relative_url }}">pricing page</a>.
  To learn about our research, see <a href="{{ '/research' | relative_url }}">Research</a>.
</p>
