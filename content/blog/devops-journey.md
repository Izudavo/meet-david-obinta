---
title: "My Journey into DevOps as a Fullstack Engineer"
date: "2026-01-10"
image: "/blog/devops_img.svg"
excerpt: "How I evolved from building frontend applications to designing, deploying, and managing scalable cloud infrastructure and production systems."
---

I started my journey as a **frontend developer**, focused on building user interfaces, APIs, and fullstack applications.

Over time, I realized something important:

> Building interfaces was only one part of the system — not the whole picture.

That curiosity slowly shifted toward understanding what happens **after deployment** — how applications actually live in production.

---

## The Questions That Pulled Me Into DevOps

I began asking deeper engineering questions:

- How do systems stay online reliably under real-world traffic?
- How do applications scale when usage suddenly spikes?
- How do engineering teams automate deployments safely?
- How do we detect failures and recover quickly without downtime?

These questions pushed me beyond frontend development into **infrastructure, cloud engineering, and DevOps practices**.

---

## Learning Linux & Automation

My journey started in the Linux terminal, where I learned how systems actually work at a low level:

- Shell navigation and command-line workflows  
- Process management and system monitoring  
- File permissions and security fundamentals  
- SSH and remote server access  
- Package management and environment setup  
- Automation using Bash scripting  

What began as simple commands quickly evolved into real-world automation workflows.

---

### Deployment Automation Example

```bash
#!/bin/bash

APP_NAME="portfolio-app"

echo "Pulling latest changes..."
git pull origin main

echo "Installing dependencies..."
npm install

echo "Building application..."
npm run build

echo "Restarting application..."
pm2 restart $APP_NAME

echo "Deployment completed successfully."
```

This was my first step into thinking beyond writing code — into building systems that run continuously in production.

---

## Expanding Into Cloud & Infrastructure

As I progressed, I started exploring modern infrastructure and cloud engineering concepts:

- Docker containerization  
- CI/CD pipelines using GitHub Actions  
- Reverse proxies with NGINX  
- AWS cloud services and architecture  
- Server provisioning and scaling strategies  
- Monitoring, logging, and observability  
- Failover, recovery, and deployment rollback strategies  

At this stage, my mindset shifted:

> Applications are not just built — they are operated.

---

## Certifications & System Thinking

In **November 2024**, I earned the **AWS Certified Cloud Practitioner (CLF-C02)** certification.

In **December 2024**, I completed the **AWS Solutions Architect Associate (SAA-C03)** certification.

These certifications pushed me deeper into system design thinking:

- Distributed systems and how they scale  
- Availability zones and fault tolerance  
- Load balancing and traffic distribution  
- Storage and database scaling strategies  
- IAM security and access control  

More importantly, they changed how I think about engineering:

> It’s not just about building applications — it’s about designing systems that survive failure.

---

## Engineering Mindset Shift

That transition reshaped how I approach software entirely.

Today, I see engineering as a connected system:

- Building user-facing applications  
- Designing backend systems that support them  
- Automating deployment and infrastructure  
- Monitoring performance and reliability  
- Ensuring scalability under real-world load  

Everything is interconnected.

---

## Real-World System Thinking

Now my focus is always on production behavior:

- What happens when a server goes down?
- How does the system recover automatically?
- How do we minimize downtime during deployments?
- How do we maintain reliability under heavy traffic?
- How do we scale efficiently without unnecessary cost?

These questions now guide how I design and build systems.

---

## Final Perspective

I no longer see myself as just a developer.

I build, automate, deploy, monitor, and maintain systems designed for production — systems built to survive real-world conditions.
