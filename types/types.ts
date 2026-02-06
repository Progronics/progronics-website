
export type DictionatiesTypes = {
  "nav_bar": {
    "home": string
    "about": string
    "portfolio": string
    "services": string
    "careers": string
  },
  "more_links": {
    "contact": string
    "careers": string
    "privacy policy": string
  },
  "quick_links": string
  "more": string
  "all_rights_reserved": string
  "get_in_touch": string
  "next_gen_solutions": string
  "hero_header": string
  "hero_description": string
  "explore_services": string
  "digital_product_dev": string
  "digital_product_description": string
  "digital_products_list": Record<string, string>[],
  "Intelligent_Apps": string
  "Modern_Interfaces": string
  "Smart_Businesses": string
  "Automated_Systems": string
  "Data_driven_Solutions": string
  features_section: {
    title: string;
    description: string;
  };
  performance_files: {
    name: string;
    body: string;
  }[];
  features_cards: {
    ai_powered: {
      name: string;
      description: string;
    };
    high_performance: {
      name: string;
      description: string;
    };
    automation: {
      name: string;
      description: string;
    };
    scalable: {
      name: string;
      description: string;
    };
  };
  why_section: {
    title: string;
    description: string;
  };
  why_cards: {
    title: string;
    description: string;
  }[];
  process_section: {
    title: string;
    description: string;
  };
  process_steps: {
    text: string;
    description: string;
  }[];
  technologies_section: {
    title: string;
  };
  technologies_stats: {
    number: number;
    label: string;
    additional: string;
  }[];
  cta_section: {
    title: string;
    description: string;
    button_text: string;
  };
  services_section: {
    cards: {
      title: string;
      description: string;
      points: string[];
    }[];
  };
  learn_more: string
  about_section: {
    "title": string
    "description": string
    "who": string
    "who_title": string
    "who_description": string
    "who_vision": string
  },
  about_values: {
    title: string
    description: string
  }[]
  portfolio_section: {
    title: string
    description: string
  },


  projects: Record<string, {
    title: string;
    description: string;
    features: string[]
  }>

  careersDict: {
    section: {
      title: string;
      description: string;
    };
    form: {
      fullname: {
        label: string;
        placeholder: string;
      };
      designation: {
        label: string;
        placeholder: string;
      };
      email: {
        label: string;
        placeholder: string;
      };
      number: {
        label: string;
        placeholder: string;
      };
      resume: {
        label: string;
        acceptFormats: string;
        fileNote: string;
      };
      submitButton: {
        submitting: string;
        idle: string;
      };
    }

  }

  services_page: {
    title: string
    description: string
    cards: { title: string, paragraphs: string[] }[]
  },
  faq_section: {
    title: string
    description: string
    cards: { question: string, answer: string }[]
  },

  contact_page: {
    "section": {
      "title": "Let's Talk",
      "description": "Get in touch with our team and let's explore how we can help transform your vision into reality."
    },
    "info": {
      "title": "Get In Touch",
      "description": "Have a question or ready to start a project? We'd love to hear from you. Reach out using any of the methods below."
    },
    "contactDetails": {
      "address": {
        "title": "Address",
        "value": "Room LG-05 Basement Floor, 156, m block, Main Blvd, near khokhar Chowk, Block M Phase 2 Johar Town, Lahore, 54000, Pakistan"
      },
      "phone": {
        "title": "Phone",
        "value": "+92 (323) 4784400"
      },
      "email": {
        "title": "Email",
        "value": "info@progronics.com"
      }
    },
    "responseTime": "Response time: Within 24 hours"
  },

  contact_form : {
    firstnameLabel: string
  firstnamePlaceholder: string

  lastnameLabel: string
  lastnamePlaceholder:string

  emailLabel: string
  emailPlaceholder: string

  numberLabel: string
  numberPlaceholder: string

  messageLabel: string
  messagePlaceholder:string

  submit: string
  submitting: string
  successMessage:string
  }
}