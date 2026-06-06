export const projects = [
  {
    id: 1,
    title: "Digital Immortality Platform",
    description: "A futuristic AI system designed to preserve and simulate human personality, memory, and behavior digitally. This project explores how large-scale personal data combined with AI models can recreate conversational identity, enabling a form of digital continuity beyond human life.",
    tech: ["AI/ML", "NLP", "Personality Modeling"],
    features: [
      "Personality modeling using AI",
      "Conversational intelligence design",
      "Data-driven identity simulation"
    ],
    github: "https://github.com/Adhwaide",
    liveUrl: "",
    details: {
      extendedDescription: "The system design focuses on long-term memory modeling, personality pattern recognition, and contextual response generation, making interactions feel natural and consistent over time.",
      architecture: "A high-fidelity system architecture establishing identity mapping onto foundational models using custom fine-tuning and retrieval-augmented memory.",
      challenges: "Designing a system capable of interpreting and realistically holding human emotional nuances without reverting to generalized AI behavior.",
      learnings: "Advanced exploration of personality vector modeling, long-term memory integration, and continuous data assimilation using LLMs.",
      future: "Implementation of multi-modal sensory replication, continuous lifespan evaluation testing, and full speech-synthesizing integrations."
    }
  },
  {
    id: 2,
    title: "AI Vision Assistant with Real-Time Object Detection",
    description: "Developed a real-time AI system capable of understanding and interpreting visual environments using computer vision. The system detects objects, processes contextual information, and can be integrated with intelligent response systems for real-world assistance.",
    tech: ["Python", "YOLOv8", "OpenCV"],
    features: [
      "Real-time object detection",
      "Visual environment awareness",
      "Optimized for low-end hardware"
    ],
    github: "https://github.com/Adhwaide",
    liveUrl: "",
    details: {
      extendedDescription: "Special focus was given to optimizing performance for low-end hardware, ensuring efficient processing without sacrificing accuracy, making it practical for everyday usage scenarios.",
      architecture: "A computer vision pipeline leveraging YOLOv8 optimized through TensorRT for deployment on low-latency, edge-level hardware constraints.",
      challenges: "Hitting target framerates on constrained mobile or edge devices without dropping critical bounding box accuracy.",
      learnings: "Deepened expertise in frame-dropping algorithms and edge device deep learning optimization.",
      future: "Integrating quantized spatial tracking and depth estimation algorithms."
    }
  },
  {
    id: 3,
    title: "AI Assistant with Voice Interaction",
    description: "Designed a voice-driven AI assistant capable of understanding spoken commands and generating meaningful, context-aware responses. The system integrates speech recognition with language models to enable smooth conversational interaction.",
    tech: ["Python", "Speech Recognition", "Text-to-Speech", "Mistral"],
    features: [
      "Voice command input",
      "AI-generated conversational responses",
      "Natural language understanding"
    ],
    github: "https://github.com/Adhwaide/AI-Assistant-Local",
    liveUrl: "",
    details: {
      extendedDescription: "Emphasis was placed on creating a responsive and modular pipeline that can be extended with additional capabilities such as task automation and real-time assistance.",
      architecture: "Integration of real-time audio streams into Speech-to-Text inference, passed securely to a localized Mistral model, generating responses streamed back via TTS.",
      challenges: "Minimizing auditory loop lag to make conversations feel organic and immediate.",
      learnings: "Mastered bridging local LLM inference with asynchronous audio processing libraries in Python.",
      future: "Implementing emotion-based voice modulation based on the semantic context of the AI response."
    }
  },
  {
    id: 4,
    title: "Automated Algorithmic Trading System",
    description: "Engineered an automated trading system that analyzes financial market data and executes trades based on predefined strategies. The system is designed to reduce emotional bias in trading decisions while maintaining consistency and efficiency.",
    tech: ["Python", "Pandas", "Zerodha API", "Data Analysis"],
    features: [
      "Strategy-based autonomous execution",
      "Real-time market analytics",
      "Dynamic risk management protocols"
    ],
    github: "https://github.com/Adhwaide",
    liveUrl: "",
    details: {
      extendedDescription: "Includes components for data analysis, strategy testing, and risk management, with the potential for further enhancement using machine learning models for predictive insights.",
      architecture: "Data models pulling rapidly from APIs, feeding into analytical Pandas scripts that evaluate logical entry/exit conditions autonomously.",
      challenges: "Designing reliable strategies and managing risk parameters inside highly volatile gap-ups/downs.",
      learnings: "Gained insights into financial data analysis, trading psychology mechanics, and stateless automation systems.",
      future: "Machine learning-based trend predictions, real-time portfolio dashboards, and multi-asset tracking."
    }
  },
  {
    id: 5,
    title: "AnonTalk – Anonymous Real-Time Chat Platform",
    description: "Built a real-time anonymous communication platform that allows users to connect instantly without revealing their identity. The system focuses on privacy-first interaction while maintaining fast and seamless messaging.",
    tech: ["HTML", "CSS", "JavaScript", "WebSockets"],
    features: [
      "Instant anonymous user matching",
      "Real-time encrypted messaging",
      "Lightweight and fast architecture"
    ],
    github: "https://github.com/Adhwaide/-anonchat-frontend",
    liveUrl: "",
    details: {
      extendedDescription: "Implemented real-time communication using WebSockets, ensuring low-latency interaction and smooth user experience even with multiple concurrent users.",
      architecture: "Client-server architecture relying heavily on optimized WebSocket connections to handle real-time bi-directional messaging without persistence layers.",
      challenges: "Handling real-time communication drop-offs and managing ephemeral user sessions without identity tracking algorithms.",
      learnings: "Mastered WebSocket lifecycle communication, real-time connection pooling, and frontend interaction handling.",
      future: "AI moderation system implementation, interest-based matching, and end-to-end payload encryption."
    }
  },
  {
    id: 6,
    title: "NearConnect – Smart Proximity-Based Connection Platform",
    description: "Designed a smart proximity-based connection platform that enables users to discover and interact with nearby individuals who share similar interests. The system aims to bridge the gap between digital and real-world networking.",
    tech: ["React Native", "Node.js", "Firebase", "Geolocation API"],
    features: [
      "Geospatial nearby user discovery",
      "Algorithmic interest-based matching",
      "Proximity-driven interaction hub"
    ],
    github: "https://github.com/Adhwaide",
    liveUrl: "",
    details: {
      extendedDescription: "The concept combines location awareness with interest-based matching to create meaningful and context-aware connections in real time.",
      architecture: "An integrated application using precise geolocation APIs pinging a centralized server to calculate real-time haversine distances natively.",
      challenges: "Balancing precise location accuracy with extreme battery efficiency on user devices.",
      learnings: "Navigated complex user privacy protocols alongside efficient geospatial querying in NoSQL environments.",
      future: "Implementation of localized event discovery and temporary network meshes."
    }
  },
  {
  id: 7,
  title: "AI-Powered Vedic Astrology Platform",
  description: "Developed an interactive astrology platform that generates detailed Vedic horoscope insights using AI-driven analysis. The system combines traditional North Indian chart interpretation with modern web technologies for an accessible user experience.",
  tech: ["React","JavaScript","AI","Vedic Astrology","Responsive Design"],
  features: [
    "North Indian horoscope chart analysis",
    "AI-generated astrological interpretations",
    "Career, wealth, and relationship insights",
    "Interactive and responsive user interface",
    "Personalized horoscope reports"
  ],

  github: "https://github.com/Adhwaide/astro",
  liveUrl: "https://adhwaide.github.io/astro/",

  details: {
    extendedDescription:"Built a modern astrology platform that leverages AI to analyze Vedic horoscope charts and generate structured astrological insights. The application simplifies complex astrological concepts by providing users with clear interpretations related to personality, career, finances, relationships, and life patterns through an intuitive web interface.",
    architecture:"Designed a client-side web application using React and JavaScript. User inputs are processed through an AI-powered analysis workflow that structures astrological data into meaningful insights. The interface is optimized for responsiveness and accessibility across desktop and mobile devices.",
    challenges:"One of the primary challenges was transforming complex astrological calculations and interpretations into a user-friendly experience. Ensuring consistency in generated insights while maintaining an intuitive interface required careful design and prompt engineering.",
    learnings:"Gained practical experience in integrating AI-driven content generation into a web application, designing structured user experiences, and translating domain-specific knowledge into clear and accessible outputs. Improved skills in frontend architecture, prompt design, and user-centric development.",
    future:"Future enhancements include support for detailed Dasha analysis, transit predictions, compatibility matching, multilingual support, PDF horoscope report generation, user accounts, and advanced AI models capable of providing deeper astrological forecasting."
  }
}  
];
