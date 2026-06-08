
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
  "digital_products_list": Record<any, any>[],
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
      "title": string,
      "description": string
    },
    "info": {
      "title": string
      "description": string
    },
    "contactDetails": {
      "address": {
        "title": string
        "value": string
      },
      "phone": {
        "title": string
        "value": string
      },
      "email": {
        "title": string
        "value": string
      }
    },
    "responseTime": string
  },

  contact_form: {
    firstnameLabel: string
    firstnamePlaceholder: string

    lastnameLabel: string
    lastnamePlaceholder: string

    emailLabel: string
    emailPlaceholder: string

    numberLabel: string
    numberPlaceholder: string

    messageLabel: string
    messagePlaceholder: string

    submit: string
    submitting: string
    successMessage: string
  },
  privacy_page: PrivacyPageDict
}


export type PrivacyPageDict = {
  title: string
  last_updated: string

  intro: {
    p1: string
    p2: string
  }

  interpretation_definitions: {
    title: string
    interpretation_title: string
    interpretation_text: string
    definitions_title: string
    definitions: {
      account: DefinitionItem
      affiliate: DefinitionItem
      company: DefinitionItem
      cookies: DefinitionItem
      country: DefinitionItem
      device: DefinitionItem
      personal_data: DefinitionItem
      service: DefinitionItem
      website: DefinitionItem
      you: DefinitionItem
    }
  }

  collecting_data: {
    title: string
    types_title: string
    types_text: string
    usage_title: string
    usage_text: string
  }

  cookies_section: {
    title: string
    text: string
    items: {
      essential: DefinitionItem
      notice: DefinitionItem
      functionality: DefinitionItem
    }
  }

  use_data: {
    title: string
    text: string
    items: string[]
  }

  retention_transfer: TextSection
  delete_data: TextSection
  disclosure: TextSection
  security: TextSection
  children: TextSection
  external_links: TextSection
  changes: TextSection

  contact: {
    title: string
    text: string
  },
}

export type DefinitionItem = {
  label: string
  text: string
}

export type TextSection = {
  title: string
  text: string
}