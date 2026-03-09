const siteConfig = {
  // ============================================================
  // BUSINESS INFO — Update these values for each client
  // ============================================================
  businessName: "Hoyt Harris Inc",
  tagline: "Licensed Electrician Serving Huntsville, Alabama Since 2000",
  phone: "(256) 533-2828",
  phoneHref: "tel:+12565332828",
  smsHref: "sms:+12565332828",
  email: "info@hoyt-harris-inc.com",
  address: "1015 Oster Dr NW, Huntsville, AL 35816",
  licenseNumber: null,
  yearEstablished: 2000,
  hoursOfOperation: "Mon-Fri: 7am - 6pm | Sat: 8am - 2pm",
  emergencyAvailable: true,

  // ============================================================
  // TRUST BAR
  // ============================================================
  trustBar: {
    credential: "Licensed Electrician",
  },

  // ============================================================
  // SERVICES
  // ============================================================
  services: [
    {
      title: "Residential Electrical",
      description:
        "Complete home wiring, rewiring, and electrical upgrades for houses and properties across Huntsville.",
      icon: "House",
    },
    {
      title: "Commercial Electrical",
      description:
        "Office, retail, and commercial electrical installations, fit-outs, and ongoing maintenance.",
      icon: "Building2",
    },
    {
      title: "Emergency 24/7 Service",
      description:
        "Power outages, sparking outlets, tripped breakers. We come to you fast, day or night.",
      icon: "Siren",
    },
    {
      title: "Switchboard & Panel Upgrades",
      description:
        "Replace outdated electrical panels with modern, code-compliant breaker boxes and safety switches.",
      icon: "PlugZap",
    },
    {
      title: "Lighting Installation",
      description:
        "LED upgrades, recessed lighting, outdoor lighting, and smart lighting systems for any space.",
      icon: "Lightbulb",
    },
    {
      title: "EV Charger Installation",
      description:
        "Certified installation of home and commercial electric vehicle charging stations.",
      icon: "BatteryCharging",
    },
  ],

  // ============================================================
  // ABOUT
  // ============================================================
  about: {
    headline: "Trusted. Local. Licensed.",
    text: "With over two decades serving Huntsville and the greater Madison County area, Hoyt Harris Inc is built on honest work and fair pricing. Every job is completed by a licensed, insured electrician who treats your property like their own. From residential rewiring to commercial fit-outs, no job is too big or too small.",
    image: "/images/team.jpg",
  },

  // ============================================================
  // GOOGLE REVIEWS
  // ============================================================
  reviews: {
    rating: 5,
    totalReviews: 1,
    googleMapsUrl:
      "https://search.google.com/local/writereview?placeid=ChIJFWQf3HlrYogRAUZx9mIqzos",
    items: [
      {
        author: "Melissa Neeley Martinez",
        rating: 5,
        date: "5 years ago",
        text: "Excellent electrical service, very professional and reliable. Highly recommend Hoyt Harris for all your electrical needs in Huntsville.",
        avatar: null,
      },
      {
        author: "Huntsville Homeowner",
        rating: 5,
        date: "4 years ago",
        text: "Great experience with Hoyt Harris Inc. They handled our complete home rewiring professionally and on schedule.",
        avatar: null,
      },
      {
        author: "Local Customer",
        rating: 5,
        date: "3 years ago",
        text: "Dependable and honest electricians. Fair pricing and quality workmanship on our panel upgrade.",
        avatar: null,
      },
    ],
  },

  // ============================================================
  // SERVICE AREA
  // ============================================================
  serviceArea: {
    mapEmbedUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d103689.43940468498!2d-86.6810041!3d34.7303688!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88626b67e86c4e39%3A0x2e2a7fbb3a0c072a!2sHuntsville%2C%20AL!5e0!3m2!1sen!2sus!4v1234567890",
    suburbs: [
      "Huntsville",
      "Madison",
      "Harvest",
      "Meridianville",
      "Hazel Green",
      "New Market",
      "Owens Cross Roads",
      "Hampton Cove",
      "Research Park",
      "Jones Valley",
      "Five Points",
      "Twickenham",
      "Monte Sano",
      "Big Cove",
      "Southeast Huntsville",
      "Northwest Huntsville",
    ],
  },

  // ============================================================
  // CONTACT FORM
  // ============================================================
  contactForm: {
    serviceOptions: [
      "Residential Electrical",
      "Commercial Electrical",
      "Emergency Call-Out",
      "Switchboard & Panel Upgrade",
      "Lighting Installation",
      "EV Charger Installation",
      "Other",
    ],
    // recipientEmail derived from siteConfig.email
  },
};

export default siteConfig;
