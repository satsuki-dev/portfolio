import { ArrowRight, ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Human Resource Information System (HRIS)",
    description:
      "Developed the backend of a Human Resource Information System with features such as employee self-service, payroll, and employee management, focusing on performance, scalability, and flexibility to meet organizational requirements.",
    image: "/projects/project1.png",
    tags: ["Laravel", "TailwindCSS", "Alpine JS", "Livewire", "MySQL"],
  },
  {
    id: 2,
    title: "Ticketwise Bus Online Booking",
    description:
      "An online bus booking system that allows users to search, book, and manage bus trips with ease. The platform includes real-time seat availability, user-friendly booking flow, and admin controls for managing routes, schedules, and reservations.",
    image: "/projects/project2.png",
    tags: ["React", "REST API", "Laravel", "Java"],
  },
  {
    id: 3,
    title: "Flood Guard",
    description:
      " A mobile navigation app that helps users avoid flooded areas through real-time markers and turn-by-turn directions. The app allows users to report flood incidents, enabling the system to update routes and assist others with the latest flood information.",
    image: "/projects/project3.png",
    tags: ["Flutter", "Kotlin", "Firebase", "Python", "Mapbox API"],
  },
  {
    id: 4,
    title: "Marketing Dashboard",
    description:
      "A dynamic dashboard with CRUD operations, QR code generation, messaging via Twilio SMS and Gmail SMTP, and integrated Google Maps API for geolocation tracking of partner schools, reducing manual workflows by around 40% and becoming the department’s main lead management tool.",
    image: "/projects/project4.png",
    tags: [
      "Laravel",
      "Google Map API",
      "Javascript",
      "Twilio SMS",
      "Gmail SMTP",
    ],
  },
  {
    id: 5,
    title: "USB Secure",
    description:
      "A Python-based security tool with a database and batch script integration that allows only admins to block or allow USB devices based on their Device ID. It supports user and admin roles, displays user IP addresses, and ensures controlled USB access across systems.",
    image: "/projects/project5.png",
    tags: ["Python", "MySQL", "Batch Scripts"],
  },
  {
    id: 6,
    title: "Billing Management System",
    description:
      " Developed billing management system for a restaurant to efficiently handle order billing, payment processing, and receipt generation. The system tracks daily sales, manages customer transactions in real-time, and helps ensure accurate and fast service during peak hours.",
    image: "/projects/project6.png",
    tags: ["Java", "MySql"],
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          {" "}
          Featured <span className="text-primary"> Projects </span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of my recent projects. I put a lot of effort into making
          sure they work well, look good, and are easy for users to use.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, key) => (
            <div
              key={key}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground">
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-1"> {project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex space-x-3"></div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12"></div>
      </div>
    </section>
  );
};
