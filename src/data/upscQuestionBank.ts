// UPSC Question Bank - General Studies, Polity, Economy, History, Geography

export type Difficulty = 'Easy' | 'Medium' | 'Hard';

export interface Question {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
  difficulty: Difficulty;
  topic: string;
  subject: string;
}

export interface Topic {
  id: string;
  name: string;
  description: string;
}

export interface Subject {
  id: string;
  name: string;
  description: string;
  topics: Topic[];
}

// UPSC Subjects with Topics
export const upscSubjects: Subject[] = [
  {
    id: 'polity',
    name: 'Indian Polity & Governance',
    description: 'Constitution, Government Structure, and Administrative System',
    topics: [
      { id: 'constitution', name: 'Constitution', description: 'Constitution structure and amendments' },
      { id: 'parliament', name: 'Parliament', description: 'Lok Sabha, Rajya Sabha, and Parliament functions' },
      { id: 'executive', name: 'Executive', description: 'President, PM, and Council of Ministers' },
      { id: 'judiciary', name: 'Judiciary', description: 'Supreme Court and High Courts' },
    ],
  },
  {
    id: 'economy',
    name: 'Indian Economy',
    description: 'Economic Systems, Development, and Policies',
    topics: [
      { id: 'macro-economy', name: 'Macro Economy', description: 'GDP, inflation, and unemployment' },
      { id: 'fiscal-policy', name: 'Fiscal Policy', description: 'Budget, taxation, and spending' },
      { id: 'monetary-policy', name: 'Monetary Policy', description: 'RBI, interest rates, and money supply' },
      { id: 'sectoral-economy', name: 'Sectoral Economy', description: 'Agriculture, industry, and services' },
    ],
  },
  {
    id: 'history',
    name: 'Indian History',
    description: 'Ancient, Medieval, and Modern Indian History',
    topics: [
      { id: 'ancient-history', name: 'Ancient History', description: 'Vedic period to Mauryan empire' },
      { id: 'medieval-history', name: 'Medieval History', description: 'Delhi Sultanate to Mughal empire' },
      { id: 'modern-history', name: 'Modern History', description: 'British rule to Independence' },
      { id: 'independence-movement', name: 'Independence Movement', description: 'Freedom struggle and leaders' },
    ],
  },
  {
    id: 'geography',
    name: 'Indian Geography',
    description: 'Physical Geography, Resource Management, and Regional Geography',
    topics: [
      { id: 'physical-geography', name: 'Physical Geography', description: 'Mountains, rivers, and climate' },
      { id: 'economic-geography', name: 'Economic Geography', description: 'Resources and industries' },
      { id: 'human-geography', name: 'Human Geography', description: 'Population and culture' },
      { id: 'environmental-geography', name: 'Environmental Geography', description: 'Environment and conservation' },
    ],
  },
];

// UPSC Question Bank
export const upscQuestionBank: Question[] = [
  // Polity - Constitution
  {
    id: 1,
    question: "When was the Indian Constitution adopted?",
    options: ["26 January 1950", "15 August 1947", "26 November 1949", "26 January 1949"],
    correctAnswer: 0,
    explanation: "The Indian Constitution was adopted on 26 January 1950, and this date is celebrated as Republic Day.",
    difficulty: "Easy",
    topic: "constitution",
    subject: "polity",
  },
  {
    id: 2,
    question: "Who is the chief architect of the Indian Constitution?",
    options: ["Jawaharlal Nehru", "B.R. Ambedkar", "M.K. Gandhi", "Sardar Patel"],
    correctAnswer: 1,
    explanation: "Dr. B.R. Ambedkar is known as the chief architect of the Indian Constitution and headed the drafting committee.",
    difficulty: "Easy",
    topic: "constitution",
    subject: "polity",
  },

  // Polity - Parliament
  {
    id: 3,
    question: "What is the maximum strength of the Lok Sabha?",
    options: ["500", "545", "552", "600"],
    correctAnswer: 2,
    explanation: "The maximum strength of the Lok Sabha is 552 members (530 from states + 20 from union territories + 2 nominated).",
    difficulty: "Medium",
    topic: "parliament",
    subject: "polity",
  },
  {
    id: 4,
    question: "What is the tenure of a Rajya Sabha member?",
    options: ["5 years", "6 years", "4 years", "3 years"],
    correctAnswer: 1,
    explanation: "A Rajya Sabha member's tenure is 6 years, with one-third retiring every 2 years.",
    difficulty: "Medium",
    topic: "parliament",
    subject: "polity",
  },

  // Polity - Executive
  {
    id: 5,
    question: "Who is the head of the state in a parliamentary democracy like India?",
    options: ["Prime Minister", "President", "Chief Minister", "Governor"],
    correctAnswer: 1,
    explanation: "The President is the head of state and chief executive authority in India, though the PM is head of government.",
    difficulty: "Easy",
    topic: "executive",
    subject: "polity",
  },
  {
    id: 6,
    question: "What is the term of the President of India?",
    options: ["4 years", "5 years", "6 years", "7 years"],
    correctAnswer: 1,
    explanation: "The President of India is elected for a term of 5 years and can be re-elected.",
    difficulty: "Easy",
    topic: "executive",
    subject: "polity",
  },

  // Economy - Macro Economy
  {
    id: 7,
    question: "What does GDP stand for?",
    options: ["Gross Domestic Product", "Gross Development Program", "General Domestic Policy", "Growth Development Plan"],
    correctAnswer: 0,
    explanation: "GDP (Gross Domestic Product) is the total monetary value of all goods and services produced within a country.",
    difficulty: "Easy",
    topic: "macro-economy",
    subject: "economy",
  },
  {
    id: 8,
    question: "Which of the following is a measure of inflation in India?",
    options: ["WPI", "CPI", "Both A and B", "Neither A nor B"],
    correctAnswer: 2,
    explanation: "Both Wholesale Price Index (WPI) and Consumer Price Index (CPI) are used to measure inflation in India.",
    difficulty: "Medium",
    topic: "macro-economy",
    subject: "economy",
  },

  // Economy - Fiscal Policy
  {
    id: 9,
    question: "Which body approves the Union Budget in India?",
    options: ["President", "Prime Minister", "Parliament", "Finance Commission"],
    correctAnswer: 2,
    explanation: "The Parliament of India approves the Union Budget through both Lok Sabha and Rajya Sabha.",
    difficulty: "Easy",
    topic: "fiscal-policy",
    subject: "economy",
  },
  {
    id: 10,
    question: "What is the financial year in India?",
    options: ["January to December", "April to March", "July to June", "October to September"],
    correctAnswer: 1,
    explanation: "India's financial year runs from 1 April to 31 March.",
    difficulty: "Easy",
    topic: "fiscal-policy",
    subject: "economy",
  },

  // History - Ancient History
  {
    id: 11,
    question: "Which Mauryan emperor is known for propagating Buddhism?",
    options: ["Chandragupta Maurya", "Ashoka", "Bindusara", "Dasaratha"],
    correctAnswer: 1,
    explanation: "Emperor Ashoka (268-232 BCE) is famous for converting to Buddhism and spreading it throughout his empire.",
    difficulty: "Easy",
    topic: "ancient-history",
    subject: "history",
  },
  {
    id: 12,
    question: "What was the capital of the Mauryan Empire?",
    options: ["Ujjayini", "Pataliputra", "Taxila", "Sarnath"],
    correctAnswer: 1,
    explanation: "Pataliputra (modern Patna) was the capital of the Mauryan Empire.",
    difficulty: "Medium",
    topic: "ancient-history",
    subject: "history",
  },

  // History - Medieval History
  {
    id: 13,
    question: "Who founded the Mughal Empire in India?",
    options: ["Aurangzeb", "Akbar", "Babur", "Shah Jahan"],
    correctAnswer: 2,
    explanation: "Babur (1483-1530) founded the Mughal Empire in 1526 after defeating Ibrahim Lodi.",
    difficulty: "Easy",
    topic: "medieval-history",
    subject: "history",
  },
  {
    id: 14,
    question: "Which monument was built by Shah Jahan?",
    options: ["Qutub Minar", "Taj Mahal", "Red Fort", "Jama Masjid"],
    correctAnswer: 1,
    explanation: "The Taj Mahal was built by Mughal Emperor Shah Jahan in memory of his wife Mumtaz Mahal.",
    difficulty: "Easy",
    topic: "medieval-history",
    subject: "history",
  },

  // History - Independence Movement
  {
    id: 15,
    question: "In which year did India get independence?",
    options: ["1945", "1947", "1950", "1949"],
    correctAnswer: 1,
    explanation: "India gained independence from British rule on 15 August 1947.",
    difficulty: "Easy",
    topic: "independence-movement",
    subject: "history",
  },
  {
    id: 16,
    question: "Who was the first Prime Minister of independent India?",
    options: ["Sardar Patel", "Dr. B.R. Ambedkar", "Jawaharlal Nehru", "Lal Bahadur Shastri"],
    correctAnswer: 2,
    explanation: "Jawaharlal Nehru was the first Prime Minister of independent India (1947-1964).",
    difficulty: "Easy",
    topic: "independence-movement",
    subject: "history",
  },

  // Geography - Physical Geography
  {
    id: 17,
    question: "What is the highest peak in India?",
    options: ["Kangchenjunga", "Makalu", "Kanchenjunga", "Mount Everest (Indian territory)"],
    correctAnswer: 0,
    explanation: "Kangchenjunga (8,586 m) is the highest peak in India, located in Sikkim.",
    difficulty: "Easy",
    topic: "physical-geography",
    subject: "geography",
  },
  {
    id: 18,
    question: "Which is the longest river in India?",
    options: ["Ganges", "Brahmaputra", "Yamuna", "Godavari"],
    correctAnswer: 0,
    explanation: "The Ganges (2,525 km) is the longest river in India, flowing through northern India.",
    difficulty: "Easy",
    topic: "physical-geography",
    subject: "geography",
  },

  // Geography - Economic Geography
  {
    id: 19,
    question: "Which country is the largest trading partner of India?",
    options: ["USA", "China", "Japan", "Germany"],
    correctAnswer: 1,
    explanation: "China is currently the largest trading partner of India in terms of trade volume.",
    difficulty: "Medium",
    topic: "economic-geography",
    subject: "geography",
  },
  {
    id: 20,
    question: "Which mineral is found abundantly in Chhattisgarh?",
    options: ["Bauxite", "Iron Ore", "Copper", "Gold"],
    correctAnswer: 1,
    explanation: "Chhattisgarh is rich in iron ore deposits and is known as the 'Iron Bowl of India'.",
    difficulty: "Medium",
    topic: "economic-geography",
    subject: "geography",
  },

  // Additional Polity
  {
    id: 21,
    question: "How many states are there in India?",
    options: ["26", "28", "29", "30"],
    correctAnswer: 2,
    explanation: "As of 2024, India has 28 states and 8 union territories.",
    difficulty: "Easy",
    topic: "constitution",
    subject: "polity",
  },
  {
    id: 22,
    question: "Who can amend the Constitution of India?",
    options: ["President", "Prime Minister", "Parliament", "Supreme Court"],
    correctAnswer: 2,
    explanation: "Only the Parliament can amend the Indian Constitution (Articles 368).",
    difficulty: "Medium",
    topic: "constitution",
    subject: "polity",
  },
  {
    id: 23,
    question: "What is the term of a Member of Legislative Assembly (MLA)?",
    options: ["3 years", "4 years", "5 years", "6 years"],
    correctAnswer: 2,
    explanation: "MLAs serve a term of 5 years unless the assembly is dissolved earlier.",
    difficulty: "Easy",
    topic: "parliament",
    subject: "polity",
  },
  {
    id: 24,
    question: "How many members can the President nominate to the Rajya Sabha?",
    options: ["10", "12", "15", "20"],
    correctAnswer: 1,
    explanation: "The President can nominate 12 members to the Rajya Sabha.",
    difficulty: "Medium",
    topic: "parliament",
    subject: "polity",
  },
  {
    id: 25,
    question: "Who appoints the judges of the Supreme Court?",
    options: ["Prime Minister", "President", "Chief Justice", "Parliament"],
    correctAnswer: 1,
    explanation: "The President appoints the judges of the Supreme Court on the advice of the Chief Justice.",
    difficulty: "Easy",
    topic: "judiciary",
    subject: "polity",
  },

  // Additional Economy
  {
    id: 26,
    question: "What is the tenure of the Reserve Bank of India Governor?",
    options: ["3 years", "4 years", "5 years", "6 years"],
    correctAnswer: 2,
    explanation: "The RBI Governor serves a term of 5 years.",
    difficulty: "Easy",
    topic: "monetary-policy",
    subject: "economy",
  },
  {
    id: 27,
    question: "Which of the following is NOT a function of the RBI?",
    options: ["Controlling money supply", "Regulating commercial banks", "Collecting taxes", "Banker to the government"],
    correctAnswer: 2,
    explanation: "The RBI does not collect taxes; that is a government function.",
    difficulty: "Medium",
    topic: "monetary-policy",
    subject: "economy",
  },
  {
    id: 28,
    question: "What does GATT stand for?",
    options: ["General Agreement on Trade and Tariffs", "Global Agreements on Trade Treaty", "Government and Trade Test", "General Accord on Trade Terms"],
    correctAnswer: 0,
    explanation: "GATT stands for General Agreement on Trade and Tariffs.",
    difficulty: "Medium",
    topic: "macro-economy",
    subject: "economy",
  },
  {
    id: 29,
    question: "What is the GST rate for essential commodities?",
    options: ["0%", "5%", "12%", "18%"],
    correctAnswer: 0,
    explanation: "GST on essential commodities is 0% (zero-rated goods).",
    difficulty: "Medium",
    topic: "fiscal-policy",
    subject: "economy",
  },
  {
    id: 30,
    question: "Which Five-Year Plan focused on self-reliance in India?",
    options: ["First Plan", "Fourth Plan", "Sixth Plan", "Eighth Plan"],
    correctAnswer: 1,
    explanation: "The Fourth Five-Year Plan (1969-1974) focused on self-reliance.",
    difficulty: "Hard",
    topic: "macro-economy",
    subject: "economy",
  },

  // Additional History
  {
    id: 31,
    question: "Who was the first Mughal Emperor?",
    options: ["Akbar", "Babur", "Jahangir", "Shah Jahan"],
    correctAnswer: 1,
    explanation: "Babur founded the Mughal Empire and ruled from 1526-1530.",
    difficulty: "Easy",
    topic: "medieval-history",
    subject: "history",
  },
  {
    id: 32,
    question: "In which year did the Battle of Plassey take place?",
    options: ["1757", "1760", "1765", "1770"],
    correctAnswer: 0,
    explanation: "The Battle of Plassey was fought in 1757 between Robert Clive and Siraj-ud-Daulah.",
    difficulty: "Medium",
    topic: "modern-history",
    subject: "history",
  },
  {
    id: 33,
    question: "Who was the leader of the Quit India Movement?",
    options: ["Bal Gangadhar Tilak", "Mahatma Gandhi", "Jawaharlal Nehru", "Subhash Chandra Bose"],
    correctAnswer: 1,
    explanation: "Mahatma Gandhi led the Quit India Movement in 1942.",
    difficulty: "Easy",
    topic: "independence-movement",
    subject: "history",
  },
  {
    id: 34,
    question: "Which emperor built the Taj Mahal?",
    options: ["Akbar", "Jahangir", "Shah Jahan", "Aurangzeb"],
    correctAnswer: 2,
    explanation: "Shah Jahan built the Taj Mahal (1632-1653).",
    difficulty: "Easy",
    topic: "medieval-history",
    subject: "history",
  },
  {
    id: 35,
    question: "What was the main objective of the Revolt of 1857?",
    options: ["Economic reforms", "End British rule", "Social reforms", "Religious reforms"],
    correctAnswer: 1,
    explanation: "The Revolt of 1857 aimed to end British colonial rule in India.",
    difficulty: "Easy",
    topic: "modern-history",
    subject: "history",
  },

  // Additional Geography
  {
    id: 36,
    question: "Which is the hottest state in India?",
    options: ["Rajasthan", "Gujarat", "Andhra Pradesh", "Tamil Nadu"],
    correctAnswer: 0,
    explanation: "Rajasthan is the hottest state with temperatures often exceeding 45°C.",
    difficulty: "Medium",
    topic: "physical-geography",
    subject: "geography",
  },
  {
    id: 37,
    question: "Which river is the shortest among the Indian rivers?",
    options: ["Sutlej", "Jhelum", "Ravi", "Chenab"],
    correctAnswer: 0,
    explanation: "Sutlej is the shortest among these rivers.",
    difficulty: "Hard",
    topic: "physical-geography",
    subject: "geography",
  },
  {
    id: 38,
    question: "What is the capital of Chhattisgarh?",
    options: ["Raipur", "Bilaspur", "Durg", "Rajnandgaon"],
    correctAnswer: 0,
    explanation: "Raipur is the capital of Chhattisgarh.",
    difficulty: "Easy",
    topic: "human-geography",
    subject: "geography",
  },
  {
    id: 39,
    question: "Which Western Ghats mountain pass connects Karnataka and Goa?",
    options: ["Bhor Ghats", "Pal Ghats", "Thal Ghats", "Westernghats"],
    correctAnswer: 0,
    explanation: "Bhor Ghats is the mountain pass connecting Karnataka and Goa.",
    difficulty: "Hard",
    topic: "physical-geography",
    subject: "geography",
  },
  {
    id: 40,
    question: "Which state is the largest producer of mica in India?",
    options: ["Odisha", "Karnataka", "Madhya Pradesh", "Rajasthan"],
    correctAnswer: 0,
    explanation: "Odisha is the largest producer of mica in India.",
    difficulty: "Medium",
    topic: "economic-geography",
    subject: "geography",
  },
  // Additional Hard questions for balanced difficulty
  {
    id: 41,
    question: "What is the primary distinction between a Lok Sabha member and a Rajya Sabha member?",
    options: ["Lok Sabha members are directly elected", "Rajya Sabha members have fixed tenure", "Both are correct", "Lok Sabha represents states"],
    correctAnswer: 2,
    explanation: "Lok Sabha members are directly elected by voters, while Rajya Sabha members are either elected by state assemblies or nominated.",
    difficulty: "Hard",
    topic: "indian-governance",
    subject: "polity",
  },
  {
    id: 42,
    question: "Under which articles of the Constitution can the President declare a National Emergency?",
    options: ["Article 352", "Article 356", "Article 360", "All of the above"],
    correctAnswer: 3,
    explanation: "Article 352 (national emergency), 356 (state emergency), and 360 (financial emergency) allow emergency declarations.",
    difficulty: "Hard",
    topic: "indian-governance",
    subject: "polity",
  },
  {
    id: 43,
    question: "What does GDP at constant prices eliminate?",
    options: ["Inflation effects", "Deflation effects", "Exchange rate volatility", "Trade deficits"],
    correctAnswer: 0,
    explanation: "GDP at constant prices removes inflation effects by measuring in prices of a base year.",
    difficulty: "Hard",
    topic: "national-income",
    subject: "economy",
  },
  {
    id: 44,
    question: "What is Quantitative Easing (QE) primarily designed to do?",
    options: ["Increase taxation", "Increase money supply in economy", "Reduce government spending", "Increase interest rates"],
    correctAnswer: 1,
    explanation: "QE increases money supply by purchasing long-term bonds to stimulate economic growth.",
    difficulty: "Hard",
    topic: "monetary-policy",
    subject: "economy",
  },
  {
    id: 45,
    question: "Which historical event marked the beginning of the Indian National Congress's radical phase?",
    options: ["Surat Session 1907", "Lucknow Pact 1916", "Non-cooperation Movement 1920", "Dandi March 1930"],
    correctAnswer: 0,
    explanation: "The Surat Session of 1907 marked the radical phase with the rise of Bal Gangadhar Tilak and others.",
    difficulty: "Hard",
    topic: "national-movement",
    subject: "history",
  },
  {
    id: 46,
    question: "What was the Treaty of Allahabad (1765) outcome?",
    options: ["End of Mughal power", "British control of Bengal and Bihar", "Peace with France", "Maratha supremacy"],
    correctAnswer: 1,
    explanation: "Treaty of Allahabad established British control over Bengal and Bihar after the Battle of Buxar.",
    difficulty: "Hard",
    topic: "british-india",
    subject: "history",
  },
  {
    id: 47,
    question: "Which geographic feature separates India from Myanmar (Burma)?",
    options: ["Brahmaputra River", "Arakan Mountains", "Salween River", "Bay of Bengal"],
    correctAnswer: 1,
    explanation: "The Arakan Mountains form the natural boundary between India and Myanmar.",
    difficulty: "Hard",
    topic: "physical-geography",
    subject: "geography",
  },
  {
    id: 48,
    question: "What is the primary function of the Indian Planning Commission/NITI Aayog?",
    options: ["Execute government projects", "Frame economic and social development policies", "Collect taxes", "Administer justice"],
    correctAnswer: 1,
    explanation: "NITI Aayog frames developmental policies and strategies for India's sustainable growth.",
    difficulty: "Hard",
    topic: "planning",
    subject: "economy",
  },
  {
    id: 49,
    question: "Which principle of the Indian Constitution ensures that state policies shall not discriminate on grounds of caste?",
    options: ["Equality before law", "Prohibition of discrimination", "Right to equality", "All ensure this"],
    correctAnswer: 1,
    explanation: "Article 17 explicitly prohibits discrimination on grounds of caste or religion.",
    difficulty: "Hard",
    topic: "constitutional-law",
    subject: "polity",
  },
  {
    id: 50,
    question: "What is the primary cause of the monsoon system in the Indian subcontinent?",
    options: ["Coriolis effect alone", "Differential heating and pressure systems", "Ocean currents", "Rotation of Earth"],
    correctAnswer: 1,
    explanation: "The monsoon is primarily caused by differential heating creating pressure differences between land and ocean.",
    difficulty: "Hard",
    topic: "climate",
    subject: "geography",
  },
  // Additional questions to ensure 6+ per topic
  {
    id: 51,
    question: "Which article of the Indian Constitution deals with the appointment of the President?",
    options: ["Article 52", "Article 53", "Article 54", "Article 55"],
    correctAnswer: 2,
    explanation: "Article 54 deals with the election of the President of India.",
    difficulty: "Hard",
    topic: "indian-governance",
    subject: "polity",
  },
  {
    id: 52,
    question: "What is the tenure of a member of Rajya Sabha?",
    options: ["5 years", "6 years", "7 years", "Lifetime"],
    correctAnswer: 1,
    explanation: "Rajya Sabha members have a 6-year tenure, with one-third retiring every 2 years.",
    difficulty: "Easy",
    topic: "indian-governance",
    subject: "polity",
  },
  {
    id: 53,
    question: "Which fiscal policy instrument is used to control inflation?",
    options: ["Increasing government spending", "Decreasing tax rates", "Decreasing government spending", "Increasing money supply"],
    correctAnswer: 2,
    explanation: "Decreasing government spending (contractionary fiscal policy) helps control inflation.",
    difficulty: "Medium",
    topic: "monetary-policy",
    subject: "economy",
  },
  {
    id: 54,
    question: "What does GST stand for?",
    options: ["General Sales Tax", "Goods and Services Tax", "General State Tax", "Global Systems Tax"],
    correctAnswer: 1,
    explanation: "GST (Goods and Services Tax) is a comprehensive indirect tax in India.",
    difficulty: "Easy",
    topic: "national-income",
    subject: "economy",
  },
  {
    id: 55,
    question: "Who was the first President of the Indian National Congress?",
    options: ["Dadabhai Naoroji", "William Wedderburn", "A.O. Hume", "Surendranath Banerjea"],
    correctAnswer: 2,
    explanation: "A.O. Hume is considered the founder and first president of the Indian National Congress in 1885.",
    difficulty: "Easy",
    topic: "national-movement",
    subject: "history",
  },
  {
    id: 56,
    question: "Which battle marked the end of British expansion in India?",
    options: ["Battle of Plassey", "Battle of Talikota", "Battle of Panipat", "Battle of Wandiwash"],
    correctAnswer: 3,
    explanation: "The Battle of Wandiwash (1760) between the British and French marked the end of French power in India.",
    difficulty: "Hard",
    topic: "british-india",
    subject: "history",
  },
  {
    id: 57,
    question: "Which plateau covers the largest area in India?",
    options: ["Chota Nagpur Plateau", "Deccan Plateau", "Malwa Plateau", "Tibetan Plateau"],
    correctAnswer: 1,
    explanation: "The Deccan Plateau covers the largest area among Indian plateaus (500,000 km²).",
    difficulty: "Easy",
    topic: "physical-geography",
    subject: "geography",
  },
  {
    id: 58,
    question: "What is the major river system in South India?",
    options: ["Ganga", "Brahmaputra", "Godavari", "Sutlej"],
    correctAnswer: 2,
    explanation: "The Godavari is the second largest river in India and the major river system in South India.",
    difficulty: "Easy",
    topic: "physical-geography",
    subject: "geography",
  },
  {
    id: 59,
    question: "Which state has the highest literacy rate in India?",
    options: ["Haryana", "Kerala", "Delhi", "Punjab"],
    correctAnswer: 1,
    explanation: "Kerala has consistently maintained the highest literacy rate in India (over 93%).",
    difficulty: "Medium",
    topic: "human-geography",
    subject: "geography",
  },
  {
    id: 60,
    question: "What is the primary occupation in India by workforce participation?",
    options: ["Manufacturing", "Services", "Agriculture", "Mining"],
    correctAnswer: 2,
    explanation: "Despite urbanization, agriculture remains the primary occupation for a significant portion of India's workforce.",
    difficulty: "Easy",
    topic: "human-geography",
    subject: "geography",
  },
];

// Helper functions
export const getUpscSubjects = () => upscSubjects;

export const getUpscQuestionsBySubject = (subject: string): Question[] => {
  return upscQuestionBank.filter((q) => q.subject === subject.toLowerCase());
};

export const getUpscQuestionsByTopic = (subject: string, topic: string): Question[] => {
  return upscQuestionBank.filter(
    (q) => q.subject === subject.toLowerCase() && q.topic === topic.toLowerCase()
  );
};
