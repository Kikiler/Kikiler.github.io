// Tableau d'objets contenant tous les membres de l'équipe
export const teamMembers = [
  {
    name: "Thibaut Dochen",
    role: "Founder & Team Principal",
    category: "leadership",
    badgeText: "Leadership",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80",
    initials: "TD",
    bio: "Spearheaded the creation of ESET after identifying the lack of student automotive projects. Directs team strategy, administration relations, race calendar planning, and cross-team execution.",
    tags: ["Team Direction", "Strategy", "Operations"]
  },
  {
    name: "Mathieu Noblesse",
    role: "Co-Founder & Chassis Lead",
    category: "chassis",
    badgeText: "Chassis & Mechanical",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=600&q=80",
    initials: "MN",
    bio: "Heads tubular spaceframe engineering, suspension kinematics, braking circuits, and pilot cockpit ergonomics. Oversees workshop welding, CNC machining, and structural torsion testing.",
    tags: ["Spaceframe", "Suspension", "TIG Welding"]
  },
  {
    name: "Guillaume Warichet",
    role: "Co-Founder & Powertrain Lead",
    category: "powertrain",
    badgeText: "Powertrain & Electrical",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=600&q=80",
    initials: "GW",
    bio: "Architect of the high-voltage drivetrain, custom battery pack modules, Battery Management System (BMS), inverter tuning, and the low-voltage vehicle harness loom.",
    tags: ["High-Voltage Battery", "BMS", "Telemetry"]
  },
  {
    name: "Julie Balfroid",
    role: "Co-Founder & Aerodynamics Lead",
    category: "aero",
    badgeText: "Aerodynamics",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80",
    initials: "JB",
    bio: "Conducts computational fluid dynamics (CFD) drag modeling, surface curvature refinement, and composite shell mold fabrication to maximize aerodynamic endurance on track.",
    tags: ["CFD Simulation", "Carbon Fiber", "Drag Reduction"]
  },
  {
    name: "Oscar Vuylsteke",
    role: "Co-Founder & Solar Array Lead",
    category: "solar",
    badgeText: "Solar & Energy",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=600&q=80",
    initials: "OV",
    bio: "Engineers the rooftop photovoltaic array layout, Maximum Power Point Tracking (MPPT) converters, and energy budget prediction models to harvest peak wattage across changing race conditions.",
    tags: ["PV Arrays", "MPPT Converters", "Energy Budgeting"]
  },
  {
    name: "Diandra Lahaeye",
    role: "Co-Founder & Operations Lead",
    category: "operations",
    badgeText: "Operations & Media",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=600&q=80",
    initials: "DL",
    bio: "Manages corporate sponsor acquisition, industry partnerships, external media presence, and paddock logistics to ensure the crew has every tool, part, and connection required to compete.",
    tags: ["Sponsorship", "Logistics", "Communications"]
  },
  {
    name: "Philippe Melotte",
    role: "Faculty Advisor & Mentor",
    category: "advisory",
    badgeText: "Faculty Advisory",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=600&q=80",
    initials: "PM",
    bio: "Professor at ECAM Brussels providing technical supervision, safety regulations compliance, academic sponsorship, and vital liaison with university laboratories and tooling facilities.",
    tags: ["Academic Oversight", "Safety Compliance", "Engineering Mentorship"]
  },
  {
    name: "Lucas Moreau",
    role: "Former Mechanical Contributor",
    category: "past chassis",
    badgeText: "Past Member",
    image: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=600&q=80",
    initials: "LM",
    bio: "Contributed to initial chassis stress simulations and early suspension bracket prototyping during the concept phase of Season 01.",
    tags: ["Past Member", "Chassis FEA", "Prototyping"],
    customTagClass: "past-tag" // Permet de garder le style spécifique de Lucas Moreau sur son premier tag
  },
  {
    name: "Killian Evouna",
    role: "Data Lead",
    category: "Data transmission & processing",
    badgeText: "Data",
    image: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=600&q=80",
    initials: "KE",
    bio: "Responsible for the management of all the acquired data from the cars to the humans.",
    tags: ["Data"]
  }
];