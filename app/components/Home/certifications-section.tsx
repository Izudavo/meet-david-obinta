"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { FaExternalLinkAlt, FaAws } from "react-icons/fa";
import { SiOpslevel } from "react-icons/si";

type Cert = {
  title: string;
  icon: any;
  color?: string;
  verify: string;
  subtitle?: string;
};

const certifications: Cert[] = [
  {
    title: "AWS Certified Cloud Practitioner (CLF-C02)",
    icon: FaAws,
    color: "#FF9900",
    verify:
      "https://www.credly.com/badges/f8bfece9-e4a9-465a-94fc-fb0dae08ddc5/public_url",
    subtitle: "Foundational cloud certification",
  },
  {
    title: "AWS Solutions Architect Associate (SAA-C02)",
    icon: FaAws,
    color: "#FF9900",
    verify:
      "https://www.credly.com/badges/eb645090-a761-42a4-9bef-0fd649748c07/public_url",
    subtitle: "Architecture & scalable systems",
  },
  {
    title: "OPSWAT Introduction to Critical Infrastructure Protection (ICIP)",
    icon: SiOpslevel,
    color: "#1BA0D7",
    verify:
      "https://www.credly.com/badges/e7590569-847a-41c5-85c8-7f4e0af5a612/linked_in_profile",
    subtitle: "Cybersecurity & infrastructure protection",
  },
  {
    title: "AltSchool Africa — Cloud Engineering Diploma",
    icon: "🎓",
    color: "#ffffff",
    verify: "https://drive.google.com/file/d/1YTSxGsZI-J0FRsXAjzpspyT0c_QGoYF_/view?usp=sharing",
    subtitle: "Cloud engineering & DevOps training",
  },
];

const CertificationsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="max-w-6xl mx-auto px-4 py-28 space-y-14">
      {/* HEADER */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="space-y-3"
      >
        <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight text-foreground">
         My Certifications
        </h2>

        <p className="text-muted-foreground max-w-2xl leading-relaxed">
          Verified credentials across cloud computing, cybersecurity, and
          enterprise infrastructure, demonstrating real-world engineering
          capability and industry alignment.
        </p>
      </motion.div>

      {/* GRID */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {certifications.map((cert, i) => (
          <motion.a
            key={i}
            href={cert.verify}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="group rounded-2xl border border-border bg-background/40 backdrop-blur-md p-6 flex items-center justify-between hover:scale-[1.02] hover:bg-background/60 transition-all cursor-pointer"
          >
            {/* LEFT SIDE */}
            <div className="flex items-center gap-4">
              {typeof cert.icon === "string" ? (
                <span className="text-2xl">{cert.icon}</span>
              ) : (
                <cert.icon
                  className="w-7 h-7"
                  style={{ color: cert.color }}
                />
              )}

              <div className="space-y-1">
                <h3 className="text-sm md:text-base font-semibold text-foreground ">
                  {cert.title}
                </h3>

                {cert.subtitle && (
                  <p className="text-xs text-muted-foreground">
                    {cert.subtitle}
                  </p>
                )}
              </div>
            </div>

            {/* ICON */}
            <FaExternalLinkAlt className="w-4 h-4 text-muted-foreground" />
          </motion.a>
        ))}
      </div>
    </section>
  );
};

export default CertificationsSection;