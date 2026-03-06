import { useState } from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock, Send, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/layout/WhatsAppButton";
import emailjs from "@emailjs/browser";

const contactCards = [
  {
    icon: MapPin,
    title: "Office Address",
    details: "Plot 54374, Unit 3A, 1st Floor, Grand Union Buildings, CBD, Gaborone",
  },
  {
    icon: Phone,
    title: "Phone Numbers",
    details: "+267 391 9262 / +267 71 962 581",
    link: "tel:+2673919262",
  },
  {
    icon: Mail,
    title: "Email Address",
    details: "info@rantaoattorneys.co.bw",
    link: "mailto:info@rantaoattorneys.co.bw",
  },
  {
    icon: Clock,
    title: "Office Hours",
    details: "Mon – Fri: 8:00 AM – 5:00 PM",
  },
];

// ─── EmailJS & WhatsApp config ───────────────────────────────────────────────
const SERVICE_ID  = (import.meta.env.VITE_EMAILJS_SERVICE_ID  as string) ?? "service_myfwewb";
const TEMPLATE_ID = (import.meta.env.VITE_EMAILJS_TEMPLATE_ID as string) ?? "template_8ppfx0f";
const PUBLIC_KEY  = (import.meta.env.VITE_EMAILJS_PUBLIC_KEY  as string) ?? "cNLSVzB8QTul3FE4l";
const WHATSAPP_NUMBER = (import.meta.env.VITE_WHATSAPP_NUMBER as string) ?? "26771962581";

// ─── WhatsApp confirmation banner ────────────────────────────────────────────
interface WhatsAppBannerProps {
  onYes: () => void;
  onNo: () => void;
}

const WhatsAppBanner = ({ onYes, onNo }: WhatsAppBannerProps) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: 20 }}
    className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 w-[90vw] max-w-lg
               bg-white border border-border rounded-2xl shadow-xl p-5"
  >
    <div className="flex items-start gap-3 mb-4">
      <div className="w-9 h-9 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
        <CheckCircle className="h-5 w-5 text-green-600" />
      </div>
      <div>
        <p className="font-semibold text-charcoal text-sm">Email sent to Rantao Attorneys!</p>
        <p className="text-muted-foreground text-sm mt-1">
          Would you also like to forward your message via WhatsApp?
        </p>
      </div>
    </div>
    <div className="flex gap-3 justify-end">
      <Button
        variant="outline"
        size="sm"
        className="rounded-xl px-5"
        onClick={onNo}
      >
        No, thanks
      </Button>
      <Button
        size="sm"
        className="rounded-xl px-5 bg-green-600 hover:bg-green-700 text-white"
        onClick={onYes}
      >
        Yes, send to WhatsApp
      </Button>
    </div>
  </motion.div>
);

// ─── Main component ───────────────────────────────────────────────────────────
const Contact = () => {
  const { toast } = useToast();

  const [inquiryType, setInquiryType] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    companyName: "",
    email: "",
    phone: "",
    inquiry: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showWhatsAppBanner, setShowWhatsAppBanner] = useState(false);

  // Snapshot used to build the WhatsApp message after form is cleared
  const [lastSubmission, setLastSubmission] = useState(typeof formData);

  const buildWhatsAppUrl = (data: typeof formData) => {
    const waText = [
      `*New Enquiry – Rantao Attorneys*`,
      ``,
      `*Name:* ${data.name}`,
      `*Email:* ${data.email}`,
      `*Phone:* ${data.phone || "N/A"}`,
      `*Inquiry Type:* ${inquiryType === "company" ? "Company / Organization" : "Individual"}`,
      data.companyName ? `*Company:* ${data.companyName}` : null,
      `*Nature of Inquiry:* ${data.inquiry}`,
      ``,
      `*Message:*`,
      data.message,
    ]
      .filter((line) => line !== null)
      .join("\n");

    const waNumber = WHATSAPP_NUMBER.replace(/^\+/, "");
    return `https://wa.me/${waNumber}?text=${encodeURIComponent(waText)}`;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const templateParams = {
      name: formData.name,
      inquiry_type: inquiryType === "company" ? "Company / Organization" : "Individual",
      organisation_name: formData.companyName || "N/A",
      from_email: formData.email,
      phone: formData.phone || "N/A",
      nature_of_inquiry: formData.inquiry,
      message: formData.message,
      time: new Date().toLocaleString(),
    };

    try {
      await emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY);

      // Save a snapshot before clearing the form
      setLastSubmission({ ...formData } as any);

      // Clear form
      setFormData({ name: "", companyName: "", email: "", phone: "", inquiry: "", message: "" });
      setInquiryType("");

      // Show the WhatsApp confirmation banner
      setShowWhatsAppBanner(true);
    } catch (err) {
      console.error("EmailJS error:", err);
      toast({
        title: "Send failed",
        description: "Failed to send message. Please try again later.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleWhatsAppYes = () => {
    setShowWhatsAppBanner(false);
    window.open(buildWhatsAppUrl(lastSubmission as typeof formData), "_blank");
  };

  const handleWhatsAppNo = () => {
    setShowWhatsAppBanner(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-20 bg-off-white">
        <div className="container-wide">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center"
          >
            <p className="text-primary font-medium mb-4 tracking-wide uppercase text-sm">Get in Touch</p>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-charcoal mb-6">
              Contact <span className="text-primary">Us</span>
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Have a legal matter to discuss? Reach out to our team for professional consultation
              and representation.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Section — Two Column Layout */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <div className="grid lg:grid-cols-[1fr_1.4fr] gap-12 lg:gap-16 max-w-6xl mx-auto">

            {/* Left Column — Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="order-2 lg:order-1"
            >
              <h2 className="font-serif text-2xl md:text-3xl font-bold text-charcoal mb-6">
                Contact Information
              </h2>
              <div className="space-y-4">
                {contactCards.map((card, index) => (
                  <motion.div
                    key={card.title}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start gap-4 bg-card border border-border rounded-[20px] p-5 shadow-subtle card-hover"
                  >
                    <div className="w-11 h-11 bg-primary/10 rounded-[20px] flex items-center justify-center flex-shrink-0">
                      <card.icon className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-charcoal text-sm mb-1">{card.title}</h3>
                      {card.link ? (
                        <a href={card.link} className="text-muted-foreground text-sm hover:text-primary transition-colors">
                          {card.details}
                        </a>
                      ) : (
                        <p className="text-muted-foreground text-sm">{card.details}</p>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Map */}
              <div className="mt-6">
                <h3 className="font-serif text-xl font-bold text-charcoal mb-4">Our Location</h3>
                <div className="rounded-[20px] overflow-hidden shadow-medium h-64">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3681.6397553970584!2d25.9116!3d-24.6544!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sGrand%20Union%20Building!5e0!3m2!1sen!2sbw!4v1234567890"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Rantao Attorneys Location"
                  />
                </div>
              </div>
            </motion.div>

            {/* Right Column — Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="order-1 lg:order-2 bg-card border border-border rounded-[20px] p-8 md:p-10 shadow-subtle"
            >
              <h2 className="font-serif text-2xl md:text-3xl font-bold text-charcoal mb-2">
                Send Us a Message
              </h2>
              <p className="text-muted-foreground mb-8">
                Fill out the form below and we'll get back to you within 24 hours.
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-charcoal mb-2">
                    Full Name *
                  </label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Your full name"
                    className="bg-background"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-charcoal mb-2">
                    Inquiry Type
                  </label>
                  <Select value={inquiryType} onValueChange={setInquiryType}>
                    <SelectTrigger className="bg-background">
                      <SelectValue placeholder="Select inquiry type" />
                    </SelectTrigger>
                    <SelectContent className="bg-background z-50">
                      <SelectItem value="individual">Individual</SelectItem>
                      <SelectItem value="company">Company / Organization</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {inquiryType === "company" && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                  >
                    <label htmlFor="companyName" className="block text-sm font-medium text-charcoal mb-2">
                      Company Name
                    </label>
                    <Input
                      id="companyName"
                      name="companyName"
                      value={formData.companyName}
                      onChange={handleChange}
                      placeholder="Your company name"
                      className="bg-background"
                    />
                  </motion.div>
                )}

                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-charcoal mb-2">
                      Email Address
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="Enter your email"
                      className="bg-background"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-charcoal mb-2">
                      Phone Number
                    </label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+267..."
                      className="bg-background"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="inquiry" className="block text-sm font-medium text-charcoal mb-2">
                    Nature of Inquiry
                  </label>
                  <Select
                    value={formData.inquiry}
                    onValueChange={(value) => setFormData({ ...formData, inquiry: value })}
                  >
                    <SelectTrigger className="bg-background">
                      <SelectValue placeholder="Select inquiry type" />
                    </SelectTrigger>
                    <SelectContent className="bg-background z-50">
                      <SelectItem value="litigation">Litigation</SelectItem>
                      <SelectItem value="labour">Labour Law</SelectItem>
                      <SelectItem value="commercial">Commercial / Advisory</SelectItem>
                      <SelectItem value="conveyancing">Conveyancing</SelectItem>
                      <SelectItem value="constitutional">Constitutional Law</SelectItem>
                      <SelectItem value="debt">Debt Collection</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-charcoal mb-2">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    placeholder="Please describe your legal matter..."
                    rows={5}
                    className="bg-background resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  variant="crimson"
                  size="lg"
                  className="w-full"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    "Sending..."
                  ) : (
                    <>
                      Send Message
                      <Send className="ml-2 h-5 w-5" />
                    </>
                  )}
                </Button>

                <p className="text-xs text-muted-foreground text-center">
                  By submitting this form, you agree to our privacy policy and terms of service.
                </p>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />

      {/* WhatsApp confirmation banner — shown after successful email send */}
      {showWhatsAppBanner && (
        <WhatsAppBanner onYes={handleWhatsAppYes} onNo={handleWhatsAppNo} />
      )}
    </div>
  );
};

export default Contact;