/**
 * Real Interview & Placement Question Bank
 * Curated for Final Year Engineering / BCA / MCA / Tech Students
 * Covers: TCS NQT, Infosys DSE/SE, Wipro, Accenture, Amazon, Microsoft, Cognizant, Google, Capgemini
 */

const QUESTION_BANK = {
  aptitude: [
    {
      id: "apt_1",
      category: "Quantitative Aptitude",
      company: "TCS NQT / Infosys",
      topic: "Time & Work",
      difficulty: "Medium",
      question: "A can do a piece of work in 12 days, and B can do the same work in 16 days. They work together for 4 days, and then A leaves. In how many more days will B finish the remaining work?",
      options: [
        "6.67 days (6 2/3 days)",
        "8 days",
        "5.33 days (5 1/3 days)",
        "7 days"
      ],
      answer: 0,
      explanation: `**Step-by-step Solution:**\n1. Work done by A in 1 day = 1/12\n2. Work done by B in 1 day = 1/16\n3. Combined 1-day work = (1/12) + (1/16) = (4 + 3)/48 = 7/48\n4. Work done together in 4 days = 4 * (7/48) = 7/12\n5. Remaining work = 1 - 7/12 = 5/12\n6. Time taken by B alone to finish 5/12 work = (5/12) / (1/16) = (5/12) * 16 = 20/3 = **6 2/3 days (6.67 days)**.`
    },
    {
      id: "apt_2",
      category: "Quantitative Aptitude",
      company: "Accenture / Wipro",
      topic: "Speed, Distance & Time",
      difficulty: "Easy",
      question: "A train 240 m long passes a pole in 24 seconds. How long will it take to pass a platform 650 m long?",
      options: [
        "65 seconds",
        "89 seconds",
        "100 seconds",
        "75 seconds"
      ],
      answer: 1,
      explanation: `**Step-by-step Solution:**\n1. Speed of train = Distance / Time = 240 m / 24 sec = 10 m/s\n2. Total distance to cross platform = Length of train + Length of platform = 240 + 650 = 890 m\n3. Time required = Total Distance / Speed = 890 / 10 = **89 seconds**.`
    },
    {
      id: "apt_3",
      category: "Quantitative Aptitude",
      company: "Amazon / Cognizant",
      topic: "Profit & Loss",
      difficulty: "Medium",
      question: "A shopkeeper marks an article at 40% above the cost price and allows a discount of 25% on the marked price. Find his overall profit or loss percentage.",
      options: [
        "5% Profit",
        "5% Loss",
        "10% Profit",
        "No Profit No Loss"
      ],
      answer: 0,
      explanation: `**Step-by-step Solution:**\n1. Let Cost Price (CP) = ₹100\n2. Marked Price (MP) = 100 + 40% of 100 = ₹140\n3. Selling Price (SP) = MP - 25% discount = 140 - (0.25 * 140) = 140 - 35 = ₹105\n4. Profit = SP - CP = 105 - 100 = ₹5\n5. Profit % = (5 / 100) * 100 = **5% Profit**.`
    },
    {
      id: "apt_4",
      category: "Quantitative Aptitude",
      company: "Infosys / Capgemini",
      topic: "Permutations & Combinations",
      difficulty: "Hard",
      question: "In how many different ways can the letters of the word 'LEADING' be arranged in such a way that the vowels always come together?",
      options: [
        "360",
        "480",
        "720",
        "5040"
      ],
      answer: 2,
      explanation: `**Step-by-step Solution:**\n1. Word: 'LEADING' has 7 distinct letters.\n2. Vowels present: E, A, I (3 vowels).\n3. Consonants present: L, D, N, G (4 consonants).\n4. Treat the 3 vowels (E, A, I) as a single unit [EAI].\n5. Total entities to arrange = 4 consonants + 1 vowel unit = 5 entities.\n6. Number of ways to arrange 5 entities = 5! = 120.\n7. The 3 vowels among themselves can be arranged in 3! = 6 ways.\n8. Total arrangements = 5! * 3! = 120 * 6 = **720**.`
    },
    {
      id: "apt_5",
      category: "Quantitative Aptitude",
      company: "TCS Ninja / NQT",
      topic: "Probability",
      difficulty: "Medium",
      question: "Two dice are thrown simultaneously. What is the probability of getting two numbers whose product is even?",
      options: [
        "1/2",
        "3/4",
        "3/8",
        "5/16"
      ],
      answer: 1,
      explanation: `**Step-by-step Solution:**\n1. Total outcomes when rolling 2 dice = 6 * 6 = 36.\n2. Product is ODD only when BOTH dice show odd numbers (1, 3, 5).\n3. Odd outcomes for each die = 3 (1, 3, 5), so Odd x Odd outcomes = 3 * 3 = 9.\n4. Total outcomes where product is EVEN = Total - Odd outcomes = 36 - 9 = 27.\n5. Probability = 27 / 36 = **3/4**.`
    },
    {
      id: "apt_6",
      category: "Quantitative Aptitude",
      company: "Wipro / DXC",
      topic: "Ratios & Proportions",
      difficulty: "Easy",
      question: "If A : B = 3 : 4 and B : C = 8 : 9, then what is the value of A : C?",
      options: [
        "1 : 2",
        "3 : 2",
        "2 : 3",
        "1 : 3"
      ],
      answer: 2,
      explanation: `**Step-by-step Solution:**\n1. (A / C) = (A / B) * (B / C)\n2. (A / C) = (3 / 4) * (8 / 9) = 24 / 36 = **2 / 3**\n3. Therefore, A : C = **2 : 3**.`
    },
    {
      id: "apt_7",
      category: "Quantitative Aptitude",
      company: "TCS Digital / Cognizant",
      topic: "Pipes & Cisterns",
      difficulty: "Medium",
      question: "Pipe A can fill a tank in 20 hours and Pipe B can fill it in 30 hours. Both pipes are opened together. Due to a leakage at the bottom, it took 3 hours extra to fill. How long will the leak take to empty the full tank alone?",
      options: [
        "45 hours",
        "60 hours",
        "75 hours",
        "90 hours"
      ],
      answer: 1,
      explanation: `**Step-by-step Solution:**\n1. Time taken by (A + B) without leak = (20 * 30)/(20 + 30) = 600/50 = 12 hours.\n2. With leak, time taken = 12 + 3 = 15 hours.\n3. In 1 hour, (A + B - Leak) = 1/15.\n4. (1/20 + 1/30) - 1/Leak = 1/15 => 1/12 - 1/Leak = 1/15.\n5. 1/Leak = 1/12 - 1/15 = (5 - 4)/60 = 1/60.\n6. Hence, leak alone will empty the tank in **60 hours**.`
    },
    {
      id: "apt_8",
      category: "Quantitative Aptitude",
      company: "Deloitte / Mindtree",
      topic: "Simple & Compound Interest",
      difficulty: "Hard",
      question: "The difference between Simple Interest and Compound Interest compounded annually on a certain sum of money for 2 years at 10% per annum is ₹65. What is the principal sum?",
      options: [
        "₹6,500",
        "₹6,000",
        "₹5,500",
        "₹7,000"
      ],
      answer: 0,
      explanation: `**Step-by-step Solution:**\n1. Formula for difference between CI and SI for 2 years: Diff = P * (R / 100)^2\n2. Given Diff = 65, R = 10%\n3. 65 = P * (10 / 100)^2 = P * (1 / 100)\n4. P = 65 * 100 = **₹6,500**.`
    },
    {
      id: "apt_9",
      category: "Quantitative Aptitude",
      company: "Accenture / LTI",
      topic: "Problems on Ages",
      difficulty: "Easy",
      question: "Father's age is 3 times the sum of ages of his two children. After 5 years, his age will be twice the sum of ages of his two children. What is the father's present age?",
      options: [
        "40 years",
        "45 years",
        "50 years",
        "35 years"
      ],
      answer: 1,
      explanation: `**Step-by-step Solution:**\n1. Let sum of ages of 2 children = x. Father's age F = 3x.\n2. After 5 years: Father's age = 3x + 5, sum of 2 children's ages = x + 5 + 5 = x + 10.\n3. Given: (3x + 5) = 2 * (x + 10)\n4. 3x + 5 = 2x + 20 => x = 15.\n5. Present age of father = 3x = 3 * 15 = **45 years**.`
    },
    {
      id: "apt_10",
      category: "Quantitative Aptitude",
      company: "Infosys / Wipro",
      topic: "Averages & Mixtures",
      difficulty: "Medium",
      question: "The average weight of 8 persons increases by 2.5 kg when a new person comes in place of one of them weighing 65 kg. What is the weight of the new person?",
      options: [
        "80 kg",
        "82.5 kg",
        "85 kg",
        "76 kg"
      ],
      answer: 2,
      explanation: `**Step-by-step Solution:**\n1. Total increase in weight = 8 * 2.5 kg = 20 kg.\n2. Weight of new person = Weight of replaced person + Total increase\n3. Weight of new person = 65 kg + 20 kg = **85 kg**.`
    }
  ],

  reasoning: [
    {
      id: "reas_1",
      category: "Logical Reasoning",
      company: "TCS NQT / Accenture",
      topic: "Coding - Decoding",
      difficulty: "Medium",
      question: "In a certain code language, 'ROBUST' is coded as 'QNATRS'. How will 'ZXCMPL' be coded in that same language?",
      options: [
        "YYBNQK",
        "YWBLOK",
        "AYBLPK",
        "YWBLPK"
      ],
      answer: 1,
      explanation: `**Pattern:**\nEach letter is replaced by its preceding letter in the alphabet (-1 rule):\n- R (-1) -> Q\n- O (-1) -> N\n- B (-1) -> A\n- U (-1) -> T\n- S (-1) -> R\n- T (-1) -> S\n\nApplying to 'ZXCMPL':\n- Z (-1) -> Y\n- X (-1) -> W\n- C (-1) -> B\n- M (-1) -> L\n- P (-1) -> O\n- L (-1) -> K\nResult: **YWBLOK**.`
    },
    {
      id: "reas_2",
      category: "Logical Reasoning",
      company: "Infosys / Capgemini",
      topic: "Blood Relations",
      difficulty: "Medium",
      question: "Pointing to a photograph of a boy, Suresh said, 'He is the son of the only son of my mother.' How is Suresh related to that boy?",
      options: [
        "Brother",
        "Uncle",
        "Father",
        "Grandfather"
      ],
      answer: 2,
      explanation: `**Step-by-step Deduction:**\n1. 'My mother' = Suresh's mother.\n2. 'Only son of my mother' = Suresh himself (since Suresh is male).\n3. 'Son of Suresh' = Suresh's son.\n4. Therefore, Suresh is the **Father** of the boy.`
    },
    {
      id: "reas_3",
      category: "Logical Reasoning",
      company: "Amazon / Cognizant",
      topic: "Syllogism",
      difficulty: "Hard",
      question: "Statements:\n1. All cars are vehicles.\n2. No vehicle is a four-wheeler.\n\nConclusions:\nI. No car is a four-wheeler.\nII. Some vehicles are cars.",
      options: [
        "Only conclusion I follows",
        "Only conclusion II follows",
        "Neither I nor II follows",
        "Both conclusion I and II follow"
      ],
      answer: 3,
      explanation: `**Analysis:**\n1. Since 'All cars are vehicles' and 'No vehicle is a four-wheeler', cars are fully inside vehicles and vehicles have zero overlap with four-wheelers. Hence 'No car is a four-wheeler' (I) is TRUE.\n2. 'All cars are vehicles' naturally implies that 'Some vehicles are cars' (II) is TRUE.\nConclusion: **Both conclusion I and II follow**.`
    },
    {
      id: "reas_4",
      category: "Logical Reasoning",
      company: "Wipro / TCS",
      topic: "Number Series",
      difficulty: "Medium",
      question: "Find the missing number in the sequence: 4, 18, 48, 100, 180, ?",
      options: [
        "256",
        "294",
        "312",
        "284"
      ],
      answer: 1,
      explanation: `**Pattern:**\nThe nth term follows the formula: n^2 * (n + 1) or (n + 1)^3 - (n + 1)^2:\n- Term 1 (n=1): 1^2 * 4 = (1+1)^2 * 1... let's check:\n- 2^3 - 2^2 = 8 - 4 = 4\n- 3^3 - 3^2 = 27 - 9 = 18\n- 4^3 - 4^2 = 64 - 16 = 48\n- 5^3 - 5^2 = 125 - 25 = 100\n- 6^3 - 6^2 = 216 - 36 = 180\n- Next term (7): 7^3 - 7^2 = 343 - 49 = **294**.`
    },
    {
      id: "reas_5",
      category: "Logical Reasoning",
      company: "Capgemini / Deloitte",
      topic: "Direction Sense",
      difficulty: "Easy",
      question: "Ravi walks 10 km towards North. From there he walks 6 km towards South. Then, he walks 3 km towards East. How far and in which direction is he with reference to his starting point?",
      options: [
        "5 km North-East",
        "5 km East",
        "7 km North-East",
        "5 km South-East"
      ],
      answer: 0,
      explanation: `**Step-by-step Solution:**\n1. 10 km North - 6 km South = 4 km North.\n2. 3 km East.\n3. Distance from origin = √(4^2 + 3^2) = √(16 + 9) = √25 = **5 km**.\n4. Direction is **North-East**.`
    },
    {
      id: "reas_6",
      category: "Logical Reasoning",
      company: "TCS Digital / Infosys",
      topic: "Seating Arrangement",
      difficulty: "Hard",
      question: "Five people A, B, C, D, and E are sitting in a row facing North. C is sitting in the middle. A is to the immediate left of B and to the immediate right of E. Who is sitting at the extreme right end if D is not next to C?",
      options: [
        "B",
        "D",
        "E",
        "Cannot be determined"
      ],
      answer: 0,
      explanation: `**Step-by-step Arrangement:**\n1. 5 positions: [1, 2, 3, 4, 5].\n2. C is in the middle: [_, _, C, _, _].\n3. 'A is to immediate left of B and right of E' => order is E, A, B.\n4. The 3 consecutive spots are positions 3, 4, 5 or positions 1, 2, 3 (not possible since C is at 3).\n5. If D is at position 1 (extreme left), then D is not next to C. Positions 2, 3, 4, 5 can't fit EAB with C at 3.\n6. Arrangement: D, _, C, _, _ -> D is at 1, E is at 3 (conflict with C). If arrangement is D, C, E, A, B -> D is next to C (violates rule). Thus arrangement is: E, A, C, D, B or D, E, C, A, B.\n7. Valid arrangement satisfying all constraints places **B** at the extreme right end.`
    },
    {
      id: "reas_7",
      category: "Logical Reasoning",
      company: "Accenture / Cognizant",
      topic: "Analogy",
      difficulty: "Easy",
      question: "Clock : Time :: Thermometer : ?",
      options: [
        "Heat",
        "Radiation",
        "Temperature",
        "Energy"
      ],
      answer: 2,
      explanation: `**Analogy:** A clock measures time, while a thermometer measures **Temperature**.`
    },
    {
      id: "reas_8",
      category: "Logical Reasoning",
      company: "Tech Mahindra / Wipro",
      topic: "Odd One Out",
      difficulty: "Easy",
      question: "Find the odd one out from the given options:",
      options: [
        "Copper",
        "Zinc",
        "Brass",
        "Iron"
      ],
      answer: 2,
      explanation: `**Explanation:** Brass is an **alloy** (mixture of copper and zinc), whereas Copper, Zinc, and Iron are pure chemical elements (metals).`
    }
  ],

  verbal: [
    {
      id: "verb_1",
      category: "Verbal Ability",
      company: "TCS NQT / Infosys",
      topic: "Sentence Correction",
      difficulty: "Medium",
      question: "Choose the grammatically correct sentence:",
      options: [
        "Neither of the two candidates have submitted their resume.",
        "Neither of the two candidates has submitted his resume.",
        "Neither of the two candidates have submitted his resume.",
        "Neither of the two candidates were submitting resumes."
      ],
      answer: 1,
      explanation: `**Rule:** 'Neither' is a singular indefinite pronoun and always takes a **singular verb ('has')** and a **singular possessive pronoun ('his/her')**.`
    },
    {
      id: "verb_2",
      category: "Verbal Ability",
      company: "Accenture / Wipro",
      topic: "Synonyms / Vocabulary",
      difficulty: "Medium",
      question: "What is the most suitable SYNONYM for the word 'CANDID'?",
      options: [
        "Secretive",
        "Frank and Outspoken",
        "Arrogant",
        "Polite"
      ],
      answer: 1,
      explanation: `**Meaning:** 'Candid' means truthful, straightforward, and **frank**.`
    },
    {
      id: "verb_3",
      category: "Verbal Ability",
      company: "Amazon / Capgemini",
      topic: "Antonyms",
      difficulty: "Easy",
      question: "What is the ANTONYM of 'METICULOUS'?",
      options: [
        "Careless",
        "Painstaking",
        "Accurate",
        "Thorough"
      ],
      answer: 0,
      explanation: `**Meaning:** 'Meticulous' means showing great attention to detail / very careful. Its opposite is **Careless** or sloppy.`
    },
    {
      id: "verb_4",
      category: "Verbal Ability",
      company: "Cognizant / Infosys",
      topic: "Spotting Errors",
      difficulty: "Medium",
      question: "Identify the part of the sentence with an error:\n'Although he was tired (A) / he continued working (B) / until the project was completed. (C) / No error (D)'",
      options: [
        "A",
        "B",
        "C",
        "D (No error)"
      ],
      answer: 3,
      explanation: `**Analysis:** The sentence 'Although he was tired, he continued working until the project was completed' is grammatically correct and has **No error (D)**.`
    },
    {
      id: "verb_5",
      category: "Verbal Ability",
      company: "TCS Ninja / Wipro",
      topic: "Idioms & Phrases",
      difficulty: "Easy",
      question: "What is the meaning of the idiom 'To bite the bullet'?",
      options: [
        "To get into an accident",
        "To face an unavoidable, difficult situation with courage",
        "To eat in a hurry",
        "To lose control of temper"
      ],
      answer: 1,
      explanation: `**Meaning:** 'To bite the bullet' means to bravely endure a painful or unavoidable situation.`
    },
    {
      id: "verb_6",
      category: "Verbal Ability",
      company: "Deloitte / Tech Mahindra",
      topic: "Prepositions",
      difficulty: "Easy",
      question: "Fill in the blank: The manager congratulated him _____ his outstanding performance in the project.",
      options: [
        "for",
        "on",
        "at",
        "about"
      ],
      answer: 1,
      explanation: `**Rule:** The verb 'congratulate' is always paired with the preposition **'on'** (e.g. congratulate someone on something).`
    }
  ],

  dsa: [
    {
      id: "dsa_1",
      category: "Data Structures & Algorithms",
      company: "Amazon / Microsoft / Google",
      topic: "Time Complexity & Arrays",
      difficulty: "Medium",
      question: "What is the worst-case time complexity of QuickSort and how can it be mitigated?",
      options: [
        "O(N log N), cannot be changed",
        "O(N^2), mitigated by using Randomized Pivot / Median-of-Three",
        "O(N), mitigated by increasing array size",
        "O(log N), mitigated by Iteration"
      ],
      answer: 1,
      explanation: `**Key Concept:** QuickSort has worst-case time complexity **O(N^2)** when the chosen pivot is always the smallest or largest element (e.g., sorted array with first/last element as pivot). It is mitigated to expected **O(N log N)** by using a **Randomized Pivot** or **Median-of-Three** pivot selection.`
    },
    {
      id: "dsa_2",
      category: "Data Structures & Algorithms",
      company: "Infosys DSE / TCS Digital",
      topic: "Binary Search Trees",
      difficulty: "Easy",
      question: "Which tree traversal of a Binary Search Tree (BST) always produces keys in sorted ascending order?",
      options: [
        "Preorder Traversal",
        "Postorder Traversal",
        "Inorder Traversal",
        "Level Order Traversal"
      ],
      answer: 2,
      explanation: `**Key Concept:** In a BST, for every node, Left < Root < Right. Therefore, **Inorder traversal (Left -> Root -> Right)** always visits nodes in strictly non-decreasing (sorted) order.`
    },
    {
      id: "dsa_3",
      category: "Data Structures & Algorithms",
      company: "Amazon / Flipkart",
      topic: "Stack Applications",
      difficulty: "Medium",
      question: "Which data structure is optimal to find the 'Next Greater Element' for all elements in an array in O(N) total time?",
      options: [
        "Monotonic Stack",
        "Min-Heap",
        "Disjoint Set Union (DSU)",
        "Trie"
      ],
      answer: 0,
      explanation: `**Key Concept:** A **Monotonic Stack** (decreasing stack) allows each element to be pushed and popped at most once, solving the Next Greater Element problem in linear **O(N)** time and **O(N)** space.`
    },
    {
      id: "dsa_4",
      category: "Data Structures & Algorithms",
      company: "Google / Microsoft",
      topic: "Graph Algorithms",
      difficulty: "Hard",
      question: "Dijkstra's Algorithm fails or produces incorrect results in which of the following scenarios?",
      options: [
        "Disconnected Graphs",
        "Graphs with Negative Weight Edges",
        "Dense Graphs with cycles",
        "Unweighted Graphs"
      ],
      answer: 1,
      explanation: `**Key Concept:** Dijkstra's greedy assumption presumes that adding an edge to an already finalized shortest path will never decrease the total path cost. **Negative edge weights** violate this assumption, requiring the **Bellman-Ford Algorithm** or **SPFA** instead.`
    },
    {
      id: "dsa_5",
      category: "Data Structures & Algorithms",
      company: "TCS / Wipro / Cognizant",
      topic: "Linked List",
      difficulty: "Medium",
      question: "Which algorithm uses two pointers (Fast and Slow) to detect a cycle in a Singly Linked List in O(N) time and O(1) space?",
      options: [
        "KMP Algorithm",
        "Floyd's Cycle-Finding Algorithm (Tortoise and Hare)",
        "Kadane's Algorithm",
        "Boyer-Moore Voting Algorithm"
      ],
      answer: 1,
      explanation: `**Key Concept:** **Floyd's Cycle-Finding Algorithm** moves a 'slow' pointer by 1 step and a 'fast' pointer by 2 steps. If a loop exists, the fast pointer will eventually lap and meet the slow pointer in O(N) time with O(1) auxiliary space.`
    },
    {
      id: "dsa_6",
      category: "Data Structures & Algorithms",
      company: "Adobe / Amazon",
      topic: "Dynamic Programming",
      difficulty: "Hard",
      question: "What is the optimal time and auxiliary space complexity to find the Maximum Subarray Sum using Kadane's Algorithm?",
      options: [
        "Time: O(N), Space: O(1)",
        "Time: O(N log N), Space: O(N)",
        "Time: O(N^2), Space: O(1)",
        "Time: O(N), Space: O(N)"
      ],
      answer: 0,
      explanation: `**Key Concept:** **Kadane's Algorithm** tracks \`maxEndingHere = max(num, maxEndingHere + num)\` and \`maxSoFar = max(maxSoFar, maxEndingHere)\` in a single pass: **Time O(N)** and **Space O(1)**.`
    },
    {
      id: "dsa_7",
      category: "Data Structures & Algorithms",
      company: "Infosys / Accenture",
      topic: "Hash Tables",
      difficulty: "Easy",
      question: "What is the average time complexity to search, insert, and delete in a Hash Table with a good hash function?",
      options: [
        "O(1)",
        "O(log N)",
        "O(N)",
        "O(N log N)"
      ],
      answer: 0,
      explanation: `**Key Concept:** A Hash Table provides **O(1) average time complexity** for search, insertion, and deletion operations through direct key hashing and collision resolution techniques.`
    },
    {
      id: "dsa_8",
      category: "Data Structures & Algorithms",
      company: "Microsoft / Amazon",
      topic: "Binary Heap / Priority Queue",
      difficulty: "Medium",
      question: "Building a Binary Heap from an arbitrary array of N elements (Heapify) takes what time complexity?",
      options: [
        "O(N log N)",
        "O(N)",
        "O(log N)",
        "O(N^2)"
      ],
      answer: 1,
      explanation: `**Key Concept:** Using bottom-up heap construction (sift-down on all non-leaf nodes), building a heap takes linear time: **O(N)**, contrary to the intuitive misconception of O(N log N).`
    }
  ],

  core_cs: [
    {
      id: "cs_1",
      category: "Core Computer Science",
      company: "TCS Digital / Infosys / Amazon",
      topic: "Operating Systems (Deadlocks)",
      difficulty: "Medium",
      question: "Which of the following is NOT one of the 4 Coffman conditions required for a Deadlock to occur in an OS?",
      options: [
        "Mutual Exclusion",
        "Hold and Wait",
        "Preemption Allowed",
        "Circular Wait"
      ],
      answer: 2,
      explanation: `**The 4 Coffman Conditions are:**\n1. Mutual Exclusion\n2. Hold and Wait\n3. **No Preemption** (Resources cannot be forcibly preempted)\n4. Circular Wait\n\n'Preemption Allowed' prevents deadlocks rather than causing them.`
    },
    {
      id: "cs_2",
      category: "Core Computer Science",
      company: "Amazon / Microsoft / Oracle",
      topic: "DBMS (Transactions)",
      difficulty: "Easy",
      question: "What do the letters in the 'ACID' properties of Database Management Systems stand for?",
      options: [
        "Atomicity, Consistency, Isolation, Durability",
        "Accuracy, Concurrency, Integrity, Durability",
        "Access, Control, Isolation, Distribution",
        "Atomicity, Centralization, Indexing, Durability"
      ],
      answer: 0,
      explanation: `**Key Definition:** **ACID** properties guarantee reliable database transactions:\n- **A**tomicity (All or nothing)\n- **C**onsistency (Preserves validity rules)\n- **I**solation (Transactions execute concurrently without interference)\n- **D**urability (Committed data survives system crashes).`
    },
    {
      id: "cs_3",
      category: "Core Computer Science",
      company: "Cisco / Cognizant / Wipro",
      topic: "Computer Networks (OSI Model)",
      difficulty: "Medium",
      question: "At which OSI Layer do Routers operate, and which protocol data unit (PDU) is handled at that layer?",
      options: [
        "Data Link Layer - Frame",
        "Network Layer - Packet",
        "Transport Layer - Segment",
        "Physical Layer - Bit"
      ],
      answer: 1,
      explanation: `**Key Concept:** Routers work at **Layer 3: Network Layer**, routing IP **Packets** between disparate subnets based on logical IP addresses.`
    },
    {
      id: "cs_4",
      category: "Core Computer Science",
      company: "Accenture / Infosys / TCS",
      topic: "OOPs Concepts",
      difficulty: "Easy",
      question: "Which OOPs pillar allows a single function name or operator to have different behaviors based on arguments or object type at runtime?",
      options: [
        "Encapsulation",
        "Polymorphism",
        "Inheritance",
        "Abstraction"
      ],
      answer: 1,
      explanation: `**Key Concept:** **Polymorphism** (Greek for 'many forms') enables Compile-time (Method Overloading) and Run-time (Method Overriding / Virtual functions) multiple behaviors.`
    },
    {
      id: "cs_5",
      category: "Core Computer Science",
      company: "Amazon / Capgemini",
      topic: "DBMS (SQL Normalization)",
      difficulty: "Medium",
      question: "A relational database table is in 2nd Normal Form (2NF) if and only if it is in 1NF and contains no:",
      options: [
        "Transitive Dependencies",
        "Partial Functional Dependencies",
        "Multi-valued Dependencies",
        "Duplicate Rows"
      ],
      answer: 1,
      explanation: `**Normalization Rules:**\n- 1NF: Atomic values, no repeating groups.\n- **2NF: 1NF + No Partial Dependencies** (no non-prime attribute is dependent on a proper subset of any candidate key).\n- 3NF: 2NF + No Transitive Dependencies (non-prime attributes depend only on candidate keys).\n- BCNF: For any X -> Y, X must be a super key.`
    },
    {
      id: "cs_6",
      category: "Core Computer Science",
      company: "Microsoft / Google",
      topic: "Operating Systems (Paging & Virtual Memory)",
      difficulty: "Hard",
      question: "What is 'Thrashing' in an Operating System?",
      options: [
        "When CPU spends more time swapping pages in/out of memory than executing actual processes",
        "When two threads access the same memory location concurrently",
        "When disk drive fails due to head collision",
        "When a deadlock is resolved by terminating processes"
      ],
      answer: 0,
      explanation: `**Key Concept:** **Thrashing** occurs when the system does not have enough physical RAM for the working sets of active processes, causing the OS to spend excessive time on page faults and disk I/O rather than executing instructions.`
    },
    {
      id: "cs_7",
      category: "Core Computer Science",
      company: "TCS Ninja / Wipro",
      topic: "Computer Networks (TCP vs UDP)",
      difficulty: "Easy",
      question: "Which of the following protocols is Connectionless, Unreliable, and typically used in Video Streaming / Gaming / DNS?",
      options: [
        "TCP",
        "UDP",
        "FTP",
        "SMTP"
      ],
      answer: 1,
      explanation: `**Key Concept:** **UDP (User Datagram Protocol)** has no 3-way handshake, no acknowledgments, and low overhead, making it ideal for low-latency real-time apps like VoIP, gaming, and DNS.`
    },
    {
      id: "cs_8",
      category: "Core Computer Science",
      company: "Deloitte / Cognizant",
      topic: "DBMS (Indexing)",
      difficulty: "Medium",
      question: "Which data structure is most commonly used for implementing database indices in MySQL / PostgreSQL due to high fan-out and range query efficiency?",
      options: [
        "B+ Tree",
        "Red-Black Tree",
        "Binary Search Tree",
        "Linked List"
      ],
      answer: 0,
      explanation: `**Key Concept:** **B+ Trees** store all data records in leaf nodes connected as a doubly-linked list, ensuring fast sequential range queries, shallow height, and minimal disk I/O reads.`
    }
  ],

  web_dev: [
    {
      id: "web_1",
      category: "Web Development & Programming",
      company: "Amazon / Flipkart / Startups",
      topic: "JavaScript Engine & Event Loop",
      difficulty: "Medium",
      question: "What is the logged output order of the following JavaScript code snippet?",
      codeSnippet: `console.log("1");
setTimeout(() => console.log("2"), 0);
Promise.resolve().then(() => console.log("3"));
console.log("4");`,
      options: [
        "1, 2, 3, 4",
        "1, 4, 3, 2",
        "1, 4, 2, 3",
        "1, 3, 4, 2"
      ],
      answer: 1,
      explanation: `**Event Loop Execution Order:**\n1. Synchronous code runs first: prints **1**, then **4**.\n2. Microtask queue (Promises) has higher priority than Macrotask queue: prints **3**.\n3. Macrotask queue (setTimeout) runs next: prints **2**.\nResult: **1 -> 4 -> 3 -> 2**.`
    },
    {
      id: "web_2",
      category: "Web Development & Programming",
      company: "Infosys / TCS / Cognizant",
      topic: "JavaScript Scope & Closures",
      difficulty: "Medium",
      question: "What will the following code output to the console?",
      codeSnippet: `for (var i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 100);
}`,
      options: [
        "0, 1, 2",
        "3, 3, 3",
        "Undefined, Undefined, Undefined",
        "0, 0, 0"
      ],
      answer: 1,
      explanation: `**Explanation:** \`var\` is function-scoped (or global), not block-scoped. By the time the \`setTimeout\` callbacks fire after 100ms, the loop has already completed with \`i = 3\`. All 3 callbacks share the same \`i\` reference, logging **3, 3, 3**. (Using \`let\` instead would output 0, 1, 2 due to block scope).`
    },
    {
      id: "web_3",
      category: "Web Development & Programming",
      company: "Accenture / Capgemini",
      topic: "JavaScript Type Coercion",
      difficulty: "Easy",
      question: "What is the output of `typeof NaN` and `0 == '0'` vs `0 === '0'` in JavaScript?",
      options: [
        "'number', true, false",
        "'NaN', true, true",
        "'undefined', false, false",
        "'number', false, true"
      ],
      answer: 0,
      explanation: `**Key Concepts:**\n- \`typeof NaN\` is **'number'** (IEEE 754 standard).\n- \`0 == '0'\` performs type coercion and returns **true**.\n- \`0 === '0'\` strictly checks types (number vs string) and returns **false**.`
    },
    {
      id: "web_4",
      category: "Web Development & Programming",
      company: "Microsoft / Swiggy / Zomato",
      topic: "React & Virtual DOM",
      difficulty: "Medium",
      question: "Why does React require unique 'key' props when rendering lists of elements?",
      options: [
        "To apply CSS styles to individual items",
        "To help React identify which items have changed, been added, or removed during Reconciliation",
        "To bind JavaScript event listeners to DOM nodes",
        "To enable automatic caching in browser storage"
      ],
      answer: 1,
      explanation: `**Key Concept:** React uses the **key** prop in its **Reconciliation / Virtual DOM diffing algorithm** to match children across renders efficiently, avoiding unnecessary re-renders or DOM rebuilds.`
    },
    {
      id: "web_5",
      category: "Web Development & Programming",
      company: "TCS / Wipro / LTI",
      topic: "HTML5 & Web Security",
      difficulty: "Easy",
      question: "What does the 'CORS' mechanism in modern web browsers stand for and what is its primary purpose?",
      options: [
        "Cross-Origin Resource Sharing - allows servers to specify who can access their resources",
        "Core Object Routing System - manages internal URL routes",
        "Client Origin Redirection Security - prevents DNS spoofing",
        "Cascading Object Resource Sheets - handles dynamic styles"
      ],
      answer: 0,
      explanation: `**Key Concept:** **CORS (Cross-Origin Resource Sharing)** is an HTTP-header based security mechanism that allows a server to explicitly whitelist which origins (domain, scheme, or port) are permitted to load its resources.`
    },
    {
      id: "web_6",
      category: "Web Development & Programming",
      company: "Paytm / Razorpay",
      topic: "HTTP Methods & Status Codes",
      difficulty: "Easy",
      question: "Which HTTP status code corresponds to '401 Unauthorized' vs '403 Forbidden'?",
      options: [
        "401 means authentication is missing/invalid; 403 means authenticated but lacking permission",
        "401 means page not found; 403 means server error",
        "401 and 403 are completely identical and interchangeable",
        "401 is for GET requests; 403 is for POST requests"
      ],
      answer: 0,
      explanation: `**HTTP Standards:**\n- **401 Unauthorized**: User identity is unverified (authentication is missing or bad token).\n- **403 Forbidden**: User identity is recognized, but the user is not allowed access to this resource (authorization failure).`
    }
  ]
};

// Function to get a randomized set of questions for any domain or full mock test
function getQuizQuestions(domain = 'all', count = 10) {
  let pool = [];

  if (domain === 'all') {
    // Balanced mix from all domains
    const keys = Object.keys(QUESTION_BANK);
    keys.forEach(key => {
      pool.push(...QUESTION_BANK[key]);
    });
  } else if (QUESTION_BANK[domain]) {
    pool = [...QUESTION_BANK[domain]];
  } else {
    pool = [...QUESTION_BANK.aptitude];
  }

  // Fisher-Yates Shuffle on Question Pool
  for (let i = pool.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [pool[i], pool[j]] = [pool[j], pool[i]];
  }

  // Select the requested count (or pool size if smaller)
  const selectedQuestions = pool.slice(0, Math.min(count, pool.length));

  // Deep clone and shuffle options for each question so answers are never in fixed position
  return selectedQuestions.map((q, idx) => {
    const originalAnswerText = q.options[q.answer];
    const shuffledOptions = [...q.options];

    for (let i = shuffledOptions.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledOptions[i], shuffledOptions[j]] = [shuffledOptions[j], shuffledOptions[i]];
    }

    const newAnswerIndex = shuffledOptions.indexOf(originalAnswerText);

    return {
      ...q,
      instanceId: `q_${idx + 1}`,
      options: shuffledOptions,
      answer: newAnswerIndex
    };
  });
}

if (typeof window !== 'undefined') {
  window.QUESTION_BANK = QUESTION_BANK;
  window.getQuizQuestions = getQuizQuestions;
}

