import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Linkedin, Github, Mail, MapPin, Send, MessageCircle, Phone } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100, "Name too long"),
  email: z.string().trim().email("Invalid email").max(255, "Email too long"),
  message: z.string().trim().min(1, "Message is required").max(1000, "Message too long"),
});

const WHATSAPP_NUMBER = "919384146198"; // +91 India country code
const EMAIL = "moshinathabasum@gmail.com";

const Contact = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const result = contactSchema.safeParse(form);
    if (!result.success) {
      const fieldErrors: Record<string, string> = {};
      result.error.errors.forEach((err) => {
        if (err.path[0]) fieldErrors[err.path[0] as string] = err.message;
      });
      setErrors(fieldErrors);
      return false;
    }
    setErrors({});
    return true;
  };

  const handleWhatsApp = () => {
    if (!validate()) return;
    const text = `Hi Moshina, I'm ${form.name} (${form.email}).\n\n${form.message}`;
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
    window.open(url, "_blank", "noopener,noreferrer");
    toast({ title: "Opening WhatsApp", description: "Your message is ready to send." });
  };

  const handleEmail = () => {
    if (!validate()) return;
    const subject = `Portfolio contact from ${form.name}`;
    const body = `Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`;
    const url = `mailto:${EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = url;
    toast({ title: "Opening email client", description: "Your message is ready to send." });
  };

  return (
    <section id="contact" className="py-24 lg:py-32 bg-secondary/30">
      <div className="container px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-gold font-body tracking-widest uppercase text-sm mb-4">
              Get In Touch
            </p>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Let's work <span className="text-gradient">together</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Have a project in mind or just want to say hello? Fill in the form —
              your message will reach me on WhatsApp or email instantly.
            </p>
          </div>

          <div className="card-gradient rounded-2xl p-8 lg:p-12 border border-border/50 glow">
            <div className="grid md:grid-cols-2 gap-12">
              {/* Left: Contact info */}
              <div className="space-y-8">
                <div>
                  <h3 className="font-display text-2xl font-semibold mb-4">
                    Contact Information
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Reach me through any channel below. I'm always open to
                    discussing new projects and opportunities.
                  </p>
                </div>

                <div className="space-y-4">
                  <a
                    href={`mailto:${EMAIL}`}
                    className="flex items-center gap-4 text-muted-foreground hover:text-gold transition-colors group"
                  >
                    <div className="w-12 h-12 rounded-lg bg-gold/10 flex items-center justify-center group-hover:bg-gold/20 transition-colors">
                      <Mail className="text-gold" size={20} />
                    </div>
                    <span className="break-all">{EMAIL}</span>
                  </a>

                  <a
                    href={`https://wa.me/${WHATSAPP_NUMBER}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 text-muted-foreground hover:text-gold transition-colors group"
                  >
                    <div className="w-12 h-12 rounded-lg bg-gold/10 flex items-center justify-center group-hover:bg-gold/20 transition-colors">
                      <Phone className="text-gold" size={20} />
                    </div>
                    <span>+91 93841 46198</span>
                  </a>

                  <div className="flex items-center gap-4 text-muted-foreground">
                    <div className="w-12 h-12 rounded-lg bg-gold/10 flex items-center justify-center">
                      <MapPin className="text-gold" size={20} />
                    </div>
                    <span>Ranipet, Tamilnadu, India</span>
                  </div>
                </div>

                <div>
                  <h4 className="font-body text-sm uppercase tracking-widest text-muted-foreground mb-4">
                    Follow Me
                  </h4>
                  <div className="flex gap-4">
                    <a
                      href="https://www.linkedin.com/in/moshina05/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 rounded-lg bg-secondary flex items-center justify-center text-muted-foreground hover:text-gold hover:bg-gold/10 transition-all"
                      aria-label="LinkedIn"
                    >
                      <Linkedin size={20} />
                    </a>
                    <a
                      href="https://github.com/Mosi-na"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 rounded-lg bg-secondary flex items-center justify-center text-muted-foreground hover:text-gold hover:bg-gold/10 transition-all"
                      aria-label="GitHub"
                    >
                      <Github size={20} />
                    </a>
                  </div>
                </div>
              </div>

              {/* Right: Contact form */}
              <div className="bg-secondary/50 rounded-xl p-6 lg:p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center">
                    <Send className="text-gold" size={20} />
                  </div>
                  <h3 className="font-display text-xl font-semibold">Send a Message</h3>
                </div>

                <div className="space-y-4">
                  <div>
                    <Label htmlFor="name" className="text-foreground">Name</Label>
                    <Input
                      id="name"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      placeholder="Your name"
                      maxLength={100}
                      className="mt-1.5 bg-background/50"
                    />
                    {errors.name && <p className="text-destructive text-xs mt-1">{errors.name}</p>}
                  </div>

                  <div>
                    <Label htmlFor="email" className="text-foreground">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      placeholder="you@example.com"
                      maxLength={255}
                      className="mt-1.5 bg-background/50"
                    />
                    {errors.email && <p className="text-destructive text-xs mt-1">{errors.email}</p>}
                  </div>

                  <div>
                    <Label htmlFor="message" className="text-foreground">Message</Label>
                    <Textarea
                      id="message"
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      placeholder="Tell me about your project..."
                      rows={4}
                      maxLength={1000}
                      className="mt-1.5 bg-background/50 resize-none"
                    />
                    {errors.message && <p className="text-destructive text-xs mt-1">{errors.message}</p>}
                  </div>

                  <div className="flex flex-col sm:flex-row gap-3 pt-2">
                    <Button
                      onClick={handleWhatsApp}
                      className="flex-1 bg-gold hover:bg-gold/90 text-background font-semibold"
                    >
                      <MessageCircle className="mr-2 h-4 w-4" />
                      Send via WhatsApp
                    </Button>
                    <Button
                      onClick={handleEmail}
                      variant="gold-outline"
                      className="flex-1"
                    >
                      <Mail className="mr-2 h-4 w-4" />
                      Send via Email
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
