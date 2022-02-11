---
layout: archive
title: "Software"
permalink: /software/
author_profile: true
---

{% include base_path %}

{% for post in site.software %}
  {% include archive-software.html %}
{% endfor %}
