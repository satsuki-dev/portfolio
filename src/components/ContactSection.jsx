import { Mail, MapPin, Phone } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";

export const ContactSection = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    setIsSubmitting(true);

    setTimeout(() => {
      toast({
        title: "Message sent!",
        description: "Thank you for your message. I'll get back to you soon.",
      });
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <section
      id="contact"
      className="py-24 px-4 relative bg-secondary/30 flex flex-col items-center justify-center min-h-screen"
    >
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Contact <span className="text-primary"> Me</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          If you have a project opportunity or would like to connect, please
          feel free to contact me. I am always open to discussing new
          professional opportunities.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 relative">
          {/* Contact Information */}
          <div className="space-y-8 text-center md:ml-12 flex flex-col items-center justify-center">
            <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>

            <div className="space-y-6">
              <div className="flex flex-col items-center space-y-2">
                <div className="p-3 rounded-full bg-primary/10">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium">Email</h4>
                  <a className="text-muted-foreground hover:text-primary transition-colors">
                    tubillaral@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex flex-col items-center space-y-2">
                <div className="p-3 rounded-full bg-primary/10">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium">Phone</h4>
                  <a
                    href="cp:+639752404623"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    +63 9752404623
                  </a>
                </div>
              </div>

              <div className="flex flex-col items-center space-y-2">
                <div className="p-3 rounded-full bg-primary/10">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium">Location</h4>
                  <a className="text-muted-foreground hover:text-primary transition-colors">
                    3B Bayabas St., Western Bicutan, Taguig City
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Vertical Divider */}
          <div className="hidden md:block absolute top-0 bottom-0 left-1/2 border-l border-gray-300 opacity-30"></div>

          {/* Availability Section */}
          <div className="flex flex-col items-center text-center md:pl-12 mt-4 md:mt-0 md:translate-y-[-3px]">
            <h3 className="text-2xl font-semibold mb-4">Availability</h3>
            <p className="text-muted-foreground max-w-md">
              I am currently open to freelance, part-time, or full-time
              opportunities.
            </p>
            <p className="text-muted-foreground max-w-md mt-2">
              Remote work is preferred, but I am flexible for hybrid and onsite
              setups around Metro Manila.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
