"use client";

import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useState } from "react";
import toast from "react-hot-toast";
import { sendContactEmail } from "@/app/actions/contact-action";

const ContactSection = () => {
  const [loading, setLoading] = useState(false);
  const [shakeMessage, setShakeMessage] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    budget: "",
    projectType: "",
    message: "",
  });

  const isFormValid =
    formData.name.trim() &&
    /^\S+@\S+\.\S+$/.test(formData.email) &&
    formData.phone.trim() &&
    formData.projectType.trim() &&
    formData.message.trim().length >= 10;

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));

    if (e.target.name === "message" && e.target.value.length >= 10) {
      setShakeMessage(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (loading) return;

    if (formData.message.trim().length < 10) {
      setShakeMessage(true);

      toast.error("Project details should be at least 10 characters");

      setTimeout(() => {
        setShakeMessage(false);
      }, 500);

      return;
    }

    if (!isFormValid) {
      toast.error("Please complete all required fields");
      return;
    }

    try {
      setLoading(true);

      const result = await sendContactEmail(formData);

      if (result.success) {
        setFormData({
          name: "",
          email: "",
          phone: "",
          company: "",
          budget: "",
          projectType: "",
          message: "",
        });

        toast.success("Inquiry sent successfully");
      } else {
        toast.error(result.message);
      }
    } catch {
      toast.error("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="max-w-5xl mx-auto px-4 py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="space-y-10"
      >
        {/* HEADER */}
        <div className="text-center space-y-4">
          <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight text-foreground">
            Hire Me
          </h2>

          <p className="text-muted-foreground max-w-lg mx-auto leading-relaxed text-sm md:text-base">
            Have a project, startup idea, freelance opportunity, or full-time
            role?
            <br />
            Fill out the form and I'll get back to you.
          </p>
        </div>

        <div className="max-w-3xl mx-auto rounded-3xl border border-border bg-background/70 backdrop-blur-md p-5 sm:p-6 md:p-8 shadow-sm">
          <form onSubmit={handleSubmit} className="space-y-5">
            {/* TOP GRID */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-sm text-muted-foreground">
                  Full Name *
                </label>

                <input
                  required
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  type="text"
                  placeholder="John Doe"
                  className="w-full rounded-2xl border border-border bg-background px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-foreground/10 transition"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm text-muted-foreground">
                  Email Address *
                </label>

                <input
                  required
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  type="email"
                  placeholder="john@company.com"
                  className="w-full rounded-2xl border border-border bg-background px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-foreground/10 transition"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-sm text-muted-foreground">
                  Phone / WhatsApp *
                </label>

                <input
                  required
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  type="tel"
                  placeholder="+234 906 123 4567"
                  className="w-full rounded-2xl border border-border bg-background px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-foreground/10 transition"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm text-muted-foreground">
                  Budget (Optional)
                </label>

                <input
                  name="budget"
                  value={formData.budget}
                  onChange={handleChange}
                  type="text"
                  placeholder="$500 - $10000"
                  className="w-full rounded-2xl border border-border bg-background px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-foreground/10 transition"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm text-muted-foreground">
                  Company (Optional)
                </label>

                <input
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  type="text"
                  placeholder="Company Name"
                  className="w-full rounded-2xl border border-border bg-background px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-foreground/10 transition"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm text-muted-foreground">
                  Project Type *
                </label>

                <div className="relative">
                  <select
                    required
                    name="projectType"
                    value={formData.projectType}
                    onChange={handleChange}
                    className="w-full appearance-none rounded-2xl border border-border bg-background px-4 pr-10 py-3 text-sm outline-none focus:ring-2 focus:ring-foreground/10"
                  >
                    <option value="">Select project type</option>
                    <option value="Full-time Role">Full-time Role</option>
                    <option value="Freelance Project">Freelance Project</option>
                    <option value="Startup Collaboration">
                      Startup Collaboration
                    </option>
                    <option value="Consulting">Consulting</option>
                    <option value="Other">Other</option>
                  </select>

                  <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground pointer-events-none" />
                </div>
              </div>
            </div>

            <motion.div
              animate={shakeMessage ? { x: [-10, 10, -8, 8, -5, 5, 0] } : {}}
              transition={{ duration: 0.4 }}
              className="space-y-2"
            >
              <label className="text-sm text-muted-foreground">
                Project Details *
              </label>

              <textarea
                required
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                placeholder="Tell me about your project..."
                className={`w-full rounded-2xl border px-4 py-3 text-sm outline-none resize-none transition
                  ${
                    formData.message && formData.message.length < 10
                      ? "border-red-500 focus:ring-2 focus:ring-red-500/20"
                      : "border-border focus:ring-2 focus:ring-foreground/10"
                  }`}
              />

              {formData.message && formData.message.length < 10 && (
                <p className="text-xs text-red-500">
                  Please provide at least 10 characters describing your project
                  ({formData.message.length}/10)
                </p>
              )}
            </motion.div>

            <div className="pt-2 flex justify-center md:justify-start">
              <button
                type="submit"
                disabled={!isFormValid || loading}
                className={`px-8 py-3 rounded-2xl border border-border text-sm font-medium transition-all duration-300
                ${
                  isFormValid && !loading
                    ? "bg-black text-white dark:bg-white dark:text-black hover:scale-[1.02]"
                    : "bg-background text-muted-foreground opacity-50 cursor-not-allowed"
                }`}
              >
                {loading ? "Sending..." : "Send Inquiry"}
              </button>
            </div>
          </form>
        </div>
      </motion.div>
    </section>
  );
};

export default ContactSection;
