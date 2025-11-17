// JEE Question Bank - Modular structure for Physics, Chemistry, and Mathematics

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

// JEE Subjects with Topics
export const jeeSubjects: Subject[] = [
  {
    id: 'physics',
    name: 'Physics',
    description: 'Mechanics, Thermodynamics, Electromagnetism, Optics, and Modern Physics',
    topics: [
      { id: 'mechanics', name: 'Mechanics', description: 'Laws of motion, work, energy, and power' },
      { id: 'thermodynamics', name: 'Thermodynamics', description: 'Heat, temperature, and laws of thermodynamics' },
      { id: 'electromagnetism', name: 'Electromagnetism', description: 'Electric and magnetic fields' },
      { id: 'optics', name: 'Optics', description: 'Light, reflection, refraction, and wave optics' },
      { id: 'modern-physics', name: 'Modern Physics', description: 'Quantum mechanics and nuclear physics' },
    ],
  },
  {
    id: 'chemistry',
    name: 'Chemistry',
    description: 'Physical, Organic, and Inorganic Chemistry',
    topics: [
      { id: 'physical-chemistry', name: 'Physical Chemistry', description: 'Chemical kinetics, equilibrium, and thermodynamics' },
      { id: 'organic-chemistry', name: 'Organic Chemistry', description: 'Hydrocarbons, functional groups, and reactions' },
      { id: 'inorganic-chemistry', name: 'Inorganic Chemistry', description: 'Periodic table, coordination compounds' },
      { id: 'chemical-bonding', name: 'Chemical Bonding', description: 'Ionic, covalent, and metallic bonds' },
    ],
  },
  {
    id: 'mathematics',
    name: 'Mathematics',
    description: 'Algebra, Calculus, Coordinate Geometry, and Trigonometry',
    topics: [
      { id: 'algebra', name: 'Algebra', description: 'Equations, inequalities, and sequences' },
      { id: 'calculus', name: 'Calculus', description: 'Differentiation and integration' },
      { id: 'coordinate-geometry', name: 'Coordinate Geometry', description: 'Lines, circles, and conic sections' },
      { id: 'trigonometry', name: 'Trigonometry', description: 'Trigonometric functions and identities' },
      { id: 'vectors', name: 'Vectors', description: 'Vector algebra and 3D geometry' },
    ],
  },
];

// JEE Question Bank
export const jeeQuestionBank: Question[] = [
  // Physics - Mechanics
  {
    id: 1,
    question: "A body of mass 2 kg is moving with velocity 10 m/s. What is its kinetic energy?",
    options: ["50 J", "100 J", "200 J", "400 J"],
    correctAnswer: 1,
    explanation: "Kinetic Energy = (1/2)mv² = (1/2) × 2 × 10² = 100 J",
    difficulty: "Easy",
    topic: "mechanics",
    subject: "physics",
  },
  {
    id: 2,
    question: "What is the SI unit of force?",
    options: ["Joule", "Newton", "Watt", "Pascal"],
    correctAnswer: 1,
    explanation: "Newton (N) is the SI unit of force, defined as kg⋅m/s²",
    difficulty: "Easy",
    topic: "mechanics",
    subject: "physics",
  },
  {
    id: 3,
    question: "A car accelerates from rest to 20 m/s in 5 seconds. What is its acceleration?",
    options: ["2 m/s²", "4 m/s²", "5 m/s²", "10 m/s²"],
    correctAnswer: 1,
    explanation: "Acceleration = (v - u)/t = (20 - 0)/5 = 4 m/s²",
    difficulty: "Medium",
    topic: "mechanics",
    subject: "physics",
  },
  
  // Physics - Thermodynamics
  {
    id: 4,
    question: "What is the first law of thermodynamics?",
    options: ["Energy cannot be created or destroyed", "Entropy always increases", "Heat flows from hot to cold", "Work equals force times distance"],
    correctAnswer: 0,
    explanation: "The first law states that energy cannot be created or destroyed, only converted from one form to another (ΔU = Q - W)",
    difficulty: "Easy",
    topic: "thermodynamics",
    subject: "physics",
  },
  {
    id: 5,
    question: "An ideal gas undergoes isothermal expansion. What remains constant?",
    options: ["Pressure", "Volume", "Temperature", "Internal Energy"],
    correctAnswer: 2,
    explanation: "In isothermal process, temperature remains constant. For ideal gas, internal energy also remains constant.",
    difficulty: "Medium",
    topic: "thermodynamics",
    subject: "physics",
  },
  {
    id: 6,
    question: "The efficiency of a Carnot engine operating between 400K and 300K is:",
    options: ["25%", "33%", "50%", "75%"],
    correctAnswer: 0,
    explanation: "Efficiency = 1 - (T₂/T₁) = 1 - (300/400) = 0.25 = 25%",
    difficulty: "Hard",
    topic: "thermodynamics",
    subject: "physics",
  },
  
  // Physics - Electromagnetism
  {
    id: 7,
    question: "What is Coulomb's law?",
    options: ["F = ma", "F = kq₁q₂/r²", "F = GMm/r²", "F = BIL"],
    correctAnswer: 1,
    explanation: "Coulomb's law states that the force between two charges is F = kq₁q₂/r²",
    difficulty: "Easy",
    topic: "electromagnetism",
    subject: "physics",
  },
  {
    id: 8,
    question: "The unit of electric field is:",
    options: ["N/C", "C/N", "V/m", "Both A and C"],
    correctAnswer: 3,
    explanation: "Electric field can be expressed as N/C (force per unit charge) or V/m (voltage per unit distance)",
    difficulty: "Medium",
    topic: "electromagnetism",
    subject: "physics",
  },
  {
    id: 9,
    question: "A charged particle moving perpendicular to a magnetic field experiences:",
    options: ["No force", "Force parallel to motion", "Force perpendicular to both v and B", "Force opposite to motion"],
    correctAnswer: 2,
    explanation: "Lorentz force F = q(v × B) is perpendicular to both velocity and magnetic field",
    difficulty: "Hard",
    topic: "electromagnetism",
    subject: "physics",
  },
  
  // Chemistry - Physical Chemistry
  {
    id: 10,
    question: "What is the rate law for a first-order reaction?",
    options: ["Rate = k", "Rate = k[A]", "Rate = k[A]²", "Rate = k[A][B]"],
    correctAnswer: 1,
    explanation: "For first-order reaction, rate is directly proportional to concentration: Rate = k[A]",
    difficulty: "Easy",
    topic: "physical-chemistry",
    subject: "chemistry",
  },
  {
    id: 11,
    question: "The pH of a neutral solution at 25°C is:",
    options: ["0", "7", "14", "Depends on solution"],
    correctAnswer: 1,
    explanation: "At 25°C, pure water has pH = 7, which is neutral",
    difficulty: "Easy",
    topic: "physical-chemistry",
    subject: "chemistry",
  },
  {
    id: 12,
    question: "For an exothermic reaction, increasing temperature will:",
    options: ["Increase equilibrium constant", "Decrease equilibrium constant", "Not affect equilibrium", "Stop the reaction"],
    correctAnswer: 1,
    explanation: "By Le Chatelier's principle, increasing temperature shifts equilibrium backward for exothermic reactions, decreasing K",
    difficulty: "Medium",
    topic: "physical-chemistry",
    subject: "chemistry",
  },
  
  // Chemistry - Organic Chemistry
  {
    id: 13,
    question: "What is the general formula for alkanes?",
    options: ["CₙH₂ₙ", "CₙH₂ₙ₊₂", "CₙH₂ₙ₋₂", "CₙHₙ"],
    correctAnswer: 1,
    explanation: "Alkanes are saturated hydrocarbons with general formula CₙH₂ₙ₊₂",
    difficulty: "Easy",
    topic: "organic-chemistry",
    subject: "chemistry",
  },
  {
    id: 14,
    question: "Which functional group is present in alcohols?",
    options: ["-COOH", "-OH", "-CHO", "-CO-"],
    correctAnswer: 1,
    explanation: "Alcohols contain the hydroxyl (-OH) functional group",
    difficulty: "Easy",
    topic: "organic-chemistry",
    subject: "chemistry",
  },
  {
    id: 15,
    question: "In SN2 reaction, the mechanism involves:",
    options: ["Carbocation intermediate", "One-step process", "Free radical", "Elimination"],
    correctAnswer: 1,
    explanation: "SN2 is a one-step bimolecular nucleophilic substitution with backside attack",
    difficulty: "Hard",
    topic: "organic-chemistry",
    subject: "chemistry",
  },
  
  // Mathematics - Algebra
  {
    id: 16,
    question: "What is the solution of x² - 5x + 6 = 0?",
    options: ["x = 1, 6", "x = 2, 3", "x = -2, -3", "x = 1, -6"],
    correctAnswer: 1,
    explanation: "Factoring: (x-2)(x-3) = 0, so x = 2 or x = 3",
    difficulty: "Easy",
    topic: "algebra",
    subject: "mathematics",
  },
  {
    id: 17,
    question: "The sum of first n natural numbers is:",
    options: ["n(n+1)", "n(n+1)/2", "n²", "2n"],
    correctAnswer: 1,
    explanation: "Sum = 1+2+3+...+n = n(n+1)/2",
    difficulty: "Easy",
    topic: "algebra",
    subject: "mathematics",
  },
  {
    id: 18,
    question: "If log₂(x) = 5, then x equals:",
    options: ["10", "25", "32", "64"],
    correctAnswer: 2,
    explanation: "log₂(x) = 5 means 2⁵ = x, so x = 32",
    difficulty: "Medium",
    topic: "algebra",
    subject: "mathematics",
  },
  
  // Mathematics - Calculus
  {
    id: 19,
    question: "What is the derivative of x³?",
    options: ["x²", "2x²", "3x²", "3x"],
    correctAnswer: 2,
    explanation: "Using power rule: d/dx(x³) = 3x²",
    difficulty: "Easy",
    topic: "calculus",
    subject: "mathematics",
  },
  {
    id: 20,
    question: "The integral of 1/x dx is:",
    options: ["ln|x| + C", "x² + C", "1/x² + C", "e^x + C"],
    correctAnswer: 0,
    explanation: "∫(1/x)dx = ln|x| + C, where C is the constant of integration",
    difficulty: "Easy",
    topic: "calculus",
    subject: "mathematics",
  },
  {
    id: 21,
    question: "The value of lim(x→0) (sin x)/x is:",
    options: ["0", "1", "∞", "Does not exist"],
    correctAnswer: 1,
    explanation: "This is a standard limit: lim(x→0) (sin x)/x = 1",
    difficulty: "Medium",
    topic: "calculus",
    subject: "mathematics",
  },
  
  // Mathematics - Coordinate Geometry
  {
    id: 22,
    question: "The distance between points (0,0) and (3,4) is:",
    options: ["5", "7", "12", "25"],
    correctAnswer: 0,
    explanation: "Distance = √[(3-0)² + (4-0)²] = √(9+16) = √25 = 5",
    difficulty: "Easy",
    topic: "coordinate-geometry",
    subject: "mathematics",
  },
  {
    id: 23,
    question: "The equation of a circle with center (0,0) and radius 5 is:",
    options: ["x² + y² = 5", "x² + y² = 25", "x + y = 5", "(x-5)² + (y-5)² = 0"],
    correctAnswer: 1,
    explanation: "Circle equation: x² + y² = r², so x² + y² = 25",
    difficulty: "Medium",
    topic: "coordinate-geometry",
    subject: "mathematics",
  },
  {
    id: 24,
    question: "The slope of the line perpendicular to y = 2x + 3 is:",
    options: ["2", "-2", "1/2", "-1/2"],
    correctAnswer: 3,
    explanation: "Circle equation: x² + y² = r², so x² + y² = 25",
    difficulty: "Medium",
    topic: "coordinate-geometry",
    subject: "mathematics",
  },
  {
    id: 24,
    question: "The slope of the line perpendicular to y = 2x + 3 is:",
    options: ["2", "-2", "1/2", "-1/2"],
    correctAnswer: 3,
    explanation: "Perpendicular slope = -1/m = -1/2",
    difficulty: "Hard",
    topic: "coordinate-geometry",
    subject: "mathematics",
  },

  // Additional Physics Questions
  {
    id: 25,
    question: "A projectile is fired at angle 45°. At what angle is the range maximum?",
    options: ["30°", "45°", "60°", "90°"],
    correctAnswer: 1,
    explanation: "Range is maximum at 45° angle in projectile motion.",
    difficulty: "Medium",
    topic: "mechanics",
    subject: "physics",
  },
  {
    id: 26,
    question: "What is the dimensional formula for work?",
    options: ["ML²T⁻²", "MLT⁻²", "ML²T⁻¹", "ML⁻¹T⁻²"],
    correctAnswer: 0,
    explanation: "Work = Force × Distance = [MLT⁻²][L] = [ML²T⁻²]",
    difficulty: "Medium",
    topic: "mechanics",
    subject: "physics",
  },
  {
    id: 27,
    question: "Two bodies with masses in ratio 1:2 have equal kinetic energy. What is the ratio of their velocities?",
    options: ["1:2", "2:1", "√2:1", "1:√2"],
    correctAnswer: 2,
    explanation: "KE = (1/2)mv², if KE is same, v ∝ 1/√m, so v₁:v₂ = √2:1",
    difficulty: "Hard",
    topic: "mechanics",
    subject: "physics",
  },
  {
    id: 28,
    question: "What is the SI unit of pressure?",
    options: ["Dyne", "Pascal", "Joule", "Newton"],
    correctAnswer: 1,
    explanation: "Pascal (Pa) is the SI unit of pressure (N/m²).",
    difficulty: "Easy",
    topic: "mechanics",
    subject: "physics",
  },
  {
    id: 29,
    question: "What is the condition for simple harmonic motion?",
    options: ["a = -ωx", "a ∝ displacement", "a ∝ -displacement", "All of above"],
    correctAnswer: 3,
    explanation: "In SHM, acceleration is proportional to negative displacement: a = -ω²x",
    difficulty: "Medium",
    topic: "mechanics",
    subject: "physics",
  },
  {
    id: 30,
    question: "The second law of thermodynamics relates to:",
    options: ["Energy conservation", "Entropy", "Heat transfer", "Temperature"],
    correctAnswer: 1,
    explanation: "The second law of thermodynamics deals with entropy and spontaneity.",
    difficulty: "Medium",
    topic: "thermodynamics",
    subject: "physics",
  },
  {
    id: 31,
    question: "At what temperature are Celsius and Fahrenheit equal?",
    options: ["-40°", "0°", "100°", "-273°"],
    correctAnswer: 0,
    explanation: "At -40°, C = F. Formula: C = (F-32)×5/9",
    difficulty: "Hard",
    topic: "thermodynamics",
    subject: "physics",
  },
  {
    id: 32,
    question: "What is the capacitance of a parallel plate capacitor?",
    options: ["C = ε₀A/d", "C = ε₀d/A", "C = A/d", "C = d/A"],
    correctAnswer: 0,
    explanation: "Capacitance C = ε₀(A/d), where A is area and d is distance.",
    difficulty: "Medium",
    topic: "electromagnetism",
    subject: "physics",
  },
  {
    id: 33,
    question: "What is the magnetic force on a moving charge?",
    options: ["F = qE", "F = qvB", "F = qv×B", "F = BqE"],
    correctAnswer: 2,
    explanation: "Lorentz force: F = q(v × B), a cross product.",
    difficulty: "Medium",
    topic: "electromagnetism",
    subject: "physics",
  },
  {
    id: 34,
    question: "What is the critical angle for total internal reflection?",
    options: ["sin θc = n₂/n₁", "sin θc = n₁/n₂", "θc = n₁/n₂", "θc = n₂/n₁"],
    correctAnswer: 0,
    explanation: "Critical angle: sin θc = n₂/n₁ (for light from denser to rarer medium)",
    difficulty: "Hard",
    topic: "optics",
    subject: "physics",
  },
  {
    id: 35,
    question: "What is the focal length of a plane mirror?",
    options: ["0", "∞", "1 m", "Negative"],
    correctAnswer: 1,
    explanation: "A plane mirror has infinite focal length.",
    difficulty: "Easy",
    topic: "optics",
    subject: "physics",
  },

  // Additional Chemistry Questions
  {
    id: 36,
    question: "What is the electron configuration of Nitrogen?",
    options: ["1s² 2s² 2p³", "1s² 2s² 2p⁴", "1s² 2s¹ 2p⁴", "1s¹ 2s² 2p³"],
    correctAnswer: 0,
    explanation: "Nitrogen (Z=7): 1s² 2s² 2p³",
    difficulty: "Easy",
    topic: "physical-chemistry",
    subject: "chemistry",
  },
  {
    id: 37,
    question: "What is the IUPAC name for CH₃-CH=CH-CH₃?",
    options: ["Butane", "Butene", "But-2-ene", "2-Butene"],
    correctAnswer: 3,
    explanation: "This is 2-Butene (double bond starts at position 2)",
    difficulty: "Medium",
    topic: "organic-chemistry",
    subject: "chemistry",
  },
  {
    id: 38,
    question: "What is the hybridization of carbon in ethene?",
    options: ["sp", "sp²", "sp³", "sp³d"],
    correctAnswer: 1,
    explanation: "In C=C, carbon is sp² hybridized.",
    difficulty: "Medium",
    topic: "organic-chemistry",
    subject: "chemistry",
  },
  {
    id: 39,
    question: "What is Avogadro's number?",
    options: ["6.02 × 10²²", "6.02 × 10²³", "6.02 × 10²⁴", "6.02 × 10²⁵"],
    correctAnswer: 1,
    explanation: "Avogadro's number = 6.022 × 10²³ particles/mol",
    difficulty: "Easy",
    topic: "physical-chemistry",
    subject: "chemistry",
  },
  {
    id: 40,
    question: "What is the oxidation state of Cr in K₂Cr₂O₇?",
    options: ["+2", "+3", "+4", "+6"],
    correctAnswer: 3,
    explanation: "In K₂Cr₂O₇: K is +1, O is -2, so 2(+1) + 2x + 7(-2) = 0, x = +6",
    difficulty: "Hard",
    topic: "inorganic-chemistry",
    subject: "chemistry",
  },
  {
    id: 41,
    question: "What is the normality if molarity is 2 M and valency is 2?",
    options: ["0.5 N", "1 N", "2 N", "4 N"],
    correctAnswer: 3,
    explanation: "Normality = Molarity × Valency = 2 × 2 = 4 N",
    difficulty: "Easy",
    topic: "physical-chemistry",
    subject: "chemistry",
  },
  {
    id: 42,
    question: "What is the bond angle in CH₄?",
    options: ["90°", "109.5°", "120°", "180°"],
    correctAnswer: 1,
    explanation: "In CH₄, carbon is sp³ hybridized with tetrahedral geometry (109.5°).",
    difficulty: "Easy",
    topic: "chemical-bonding",
    subject: "chemistry",
  },
  {
    id: 43,
    question: "What is the conjugate acid of NH₃?",
    options: ["N²⁻", "NH₂⁻", "NH₄⁺", "N⁺"],
    correctAnswer: 2,
    explanation: "Conjugate acid of NH₃ is NH₄⁺ (ammonium ion).",
    difficulty: "Easy",
    topic: "physical-chemistry",
    subject: "chemistry",
  },
  {
    id: 44,
    question: "What is the main ore of iron?",
    options: ["Bauxite", "Hematite", "Magnetite", "Siderite"],
    correctAnswer: 1,
    explanation: "Hematite (Fe₂O₃) is the main ore of iron.",
    difficulty: "Easy",
    topic: "inorganic-chemistry",
    subject: "chemistry",
  },

  // Additional Mathematics Questions
  {
    id: 45,
    question: "What is the derivative of x³?",
    options: ["x²", "3x²", "3x", "x"],
    correctAnswer: 1,
    explanation: "d/dx(x³) = 3x²",
    difficulty: "Easy",
    topic: "calculus",
    subject: "mathematics",
  },
  {
    id: 46,
    question: "What is ∫x² dx?",
    options: ["x³/3 + C", "2x + C", "x³ + C", "3x + C"],
    correctAnswer: 0,
    explanation: "∫x² dx = x³/3 + C",
    difficulty: "Easy",
    topic: "calculus",
    subject: "mathematics",
  },
  {
    id: 47,
    question: "What is the value of sin(90°)?",
    options: ["0", "1/2", "1", "√3/2"],
    correctAnswer: 2,
    explanation: "sin(90°) = 1",
    difficulty: "Easy",
    topic: "trigonometry",
    subject: "mathematics",
  },
  {
    id: 48,
    question: "What is the value of cos(0°)?",
    options: ["0", "1", "-1", "∞"],
    correctAnswer: 1,
    explanation: "cos(0°) = 1",
    difficulty: "Easy",
    topic: "trigonometry",
    subject: "mathematics",
  },
  {
    id: 49,
    question: "What is the sum of vectors (1, 2) and (3, 4)?",
    options: ["(2, 3)", "(3, 4)", "(4, 6)", "(1, 1)"],
    correctAnswer: 2,
    explanation: "(1, 2) + (3, 4) = (1+3, 2+4) = (4, 6)",
    difficulty: "Easy",
    topic: "vectors",
    subject: "mathematics",
  },
  {
    id: 50,
    question: "What is the magnitude of vector (3, 4)?",
    options: ["3", "4", "5", "7"],
    correctAnswer: 2,
    explanation: "|v| = √(3² + 4²) = √(9 + 16) = √25 = 5",
    difficulty: "Easy",
    topic: "vectors",
    subject: "mathematics",
  },
  // Additional questions to ensure 6+ per topic
  {
    id: 51,
    question: "What is the SI unit of velocity?",
    options: ["m/s²", "m/s", "kg⋅m/s", "N/s"],
    correctAnswer: 1,
    explanation: "Velocity is the rate of change of displacement, measured in meters per second (m/s).",
    difficulty: "Easy",
    topic: "kinematics",
    subject: "physics",
  },
  {
    id: 52,
    question: "Which of the following is a vector quantity?",
    options: ["Speed", "Temperature", "Displacement", "Distance"],
    correctAnswer: 2,
    explanation: "Displacement has both magnitude and direction, making it a vector quantity.",
    difficulty: "Easy",
    topic: "forces",
    subject: "physics",
  },
  {
    id: 53,
    question: "What is Planck's constant value?",
    options: ["6.63 × 10⁻²⁷ J⋅s", "6.63 × 10⁻³⁴ J⋅s", "6.63 × 10⁻³¹ J⋅s", "6.63 × 10⁻³⁸ J⋅s"],
    correctAnswer: 1,
    explanation: "Planck's constant h = 6.63 × 10⁻³⁴ J⋅s, fundamental to quantum mechanics.",
    difficulty: "Medium",
    topic: "optics",
    subject: "physics",
  },
  {
    id: 54,
    question: "What is the hydration of benzene when treated with H₂SO₄?",
    options: ["Benzyl alcohol", "Phenol", "Not possible", "Cyclohexanol"],
    correctAnswer: 2,
    explanation: "Benzene with its aromatic stability does not undergo hydration with H₂SO₄.",
    difficulty: "Hard",
    topic: "organic-chemistry",
    subject: "chemistry",
  },
  {
    id: 55,
    question: "What is the shape of NH₃ molecule?",
    options: ["Linear", "Trigonal planar", "Trigonal pyramidal", "Tetrahedral"],
    correctAnswer: 2,
    explanation: "NH₃ has a trigonal pyramidal shape due to the lone pair on nitrogen.",
    difficulty: "Medium",
    topic: "chemical-bonding",
    subject: "chemistry",
  },
  {
    id: 56,
    question: "What is ∫ x² dx?",
    options: ["2x", "x³/3 + C", "2x³ + C", "x²/2 + C"],
    correctAnswer: 1,
    explanation: "Using power rule: ∫ x^n dx = x^(n+1)/(n+1) + C, so ∫ x² dx = x³/3 + C",
    difficulty: "Easy",
    topic: "integration",
    subject: "mathematics",
  },
  {
    id: 57,
    question: "What is the derivative of sin(x)?",
    options: ["cos(x)", "-cos(x)", "sin(x)", "-sin(x)"],
    correctAnswer: 0,
    explanation: "d/dx[sin(x)] = cos(x)",
    difficulty: "Easy",
    topic: "differentiation",
    subject: "mathematics",
  },
  {
    id: 58,
    question: "If det(A) = 3 and det(B) = 2, what is det(AB)?",
    options: ["5", "6", "1", "3/2"],
    correctAnswer: 1,
    explanation: "det(AB) = det(A) × det(B) = 3 × 2 = 6",
    difficulty: "Medium",
    topic: "matrices",
    subject: "mathematics",
  },
  {
    id: 59,
    question: "What is the range of sin(x)?",
    options: ["[0, ∞)", "(-∞, ∞)", "[-1, 1]", "[0, 1]"],
    correctAnswer: 2,
    explanation: "The sine function oscillates between -1 and 1 for all real values of x.",
    difficulty: "Easy",
    topic: "trigonometry",
    subject: "mathematics",
  },
  {
    id: 60,
    question: "What is the dot product of vectors (1, 2) and (3, 4)?",
    options: ["5", "10", "11", "12"],
    correctAnswer: 2,
    explanation: "(1, 2) · (3, 4) = 1×3 + 2×4 = 3 + 8 = 11",
    difficulty: "Easy",
    topic: "vectors",
    subject: "mathematics",
  },
];

// Helper Functions
export const getJeeSubjectById = (subjectId: string): Subject | undefined => {
  return jeeSubjects.find(s => s.id === subjectId);
};

export const getJeeTopicsBySubject = (subjectId: string): Topic[] => {
  const subject = getJeeSubjectById(subjectId);
  return subject ? subject.topics : [];
};

export const getJeeQuestionsBySubject = (subjectId: string): Question[] => {
  return jeeQuestionBank.filter(q => q.subject === subjectId);
};

export const getJeeQuestionsByTopic = (subjectId: string, topicId: string): Question[] => {
  return jeeQuestionBank.filter(q => q.subject === subjectId && q.topic === topicId);
};

export const getJeeQuestionsByDifficulty = (questions: Question[], difficulty: Difficulty): Question[] => {
  return questions.filter(q => q.difficulty === difficulty);
};

export const getJeeRandomQuestions = (questions: Question[], count: number): Question[] => {
  const shuffled = [...questions].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, Math.min(count, questions.length));
};
