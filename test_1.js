// All 40 questions data for Test 1
const questionsData = [
    {
        id: 1,
        type: "spelling",
        question: "Choose the correctly spelt word.",
        options: ["Begining", "Beggining", "Beginning", "Beginig"],
        correctAnswer: "c",
        answer: "c) Beginning",
        discrepancy: "Only \"Beginning\" has correct double consonant spelling."
    },
    {
        id: 2,
        type: "spelling",
        question: "Choose the correctly spelt word.",
        options: ["Garentee", "Guarantee", "Guarentee", "Garantee"],
        correctAnswer: "b",
        answer: "b) Guarantee",
        discrepancy: "All other options are misspellings."
    },
    {
        id: 3,
        type: "vocabulary",
        question: "Choose the word which is most nearly the same in meaning as the word in capital letters. <span class='highlight'>BENEVOLENT</span>",
        options: ["Kind", "Hostile", "Cruel", "Angry"],
        correctAnswer: "a",
        answer: "a) Kind",
        discrepancy: "\"Benevolent\" means kind/charitable. Other options are antonyms."
    },
    {
        id: 4,
        type: "vocabulary",
        question: "Choose the word most opposite in meaning to the word in capital letters. <span class='highlight'>GENEROSITY</span>",
        options: ["Kindness", "Benevolence", "Meanness", "Helpfulness"],
        correctAnswer: "c",
        answer: "c) Meanness",
        discrepancy: "Generosity ≠ Meanness."
    },
    {
        id: 5,
        type: "grammar",
        question: "Fill in the blank. He is very good ___ playing football.",
        options: ["in", "at", "for", "with"],
        correctAnswer: "b",
        answer: "b) at",
        discrepancy: "Collocation → \"good at\" is correct."
    },
    {
        id: 6,
        type: "grammar",
        question: "Fill in the blank. She is looking forward ___ her vacation.",
        options: ["for", "to", "on", "at"],
        correctAnswer: "b",
        answer: "b) to",
        discrepancy: "Fixed phrase → \"look forward to\"."
    },
    {
        id: 7,
        type: "grammar",
        question: "Identify the part of speech of the underlined word. She ran <span class='highlight'>quickly</span> to catch the bus.",
        options: ["Adverb", "Verb", "Adjective", "Conjunction"],
        correctAnswer: "a",
        answer: "a) Adverb",
        discrepancy: "Describes \"ran\" → manner."
    },
    {
        id: 8,
        type: "grammar",
        question: "Identify the part of speech of the underlined word. <span class='highlight'>Honesty</span> is the best policy.",
        options: ["Noun", "Pronoun", "Adjective", "Verb"],
        correctAnswer: "a",
        answer: "a) Noun",
        discrepancy: "Refers to a quality."
    },
    {
        id: 9,
        type: "grammar",
        question: "Spot the error. He do not know the answer.",
        options: ["He", "do", "not know", "the answer"],
        correctAnswer: "b",
        answer: "b) do",
        discrepancy: "Subject-verb agreement → should be \"does\"."
    },
    {
        id: 10,
        type: "grammar",
        question: "Spot the error. She have completed the work.",
        options: ["She", "have", "completed", "the work"],
        correctAnswer: "b",
        answer: "b) have",
        discrepancy: "Singular subject → should be \"has\"."
    },
    {
        id: 11,
        type: "grammar",
        question: "Choose correct indirect speech. He said, \"I am tired.\"",
        options: ["He said that he was tired.", "He said that I was tired.", "He said that he is tired.", "He said that he will be tired."],
        correctAnswer: "a",
        answer: "a) He said that he was tired.",
        discrepancy: "Tense changes to past in indirect speech."
    },
    {
        id: 12,
        type: "grammar",
        question: "Choose correct indirect speech. She said, \"I will call you tomorrow.\"",
        options: ["She said that she will call me tomorrow.", "She said that she would call me the next day.", "She said that she will call you tomorrow.", "She said she would call you the next day."],
        correctAnswer: "b",
        answer: "b) She said that she would call me the next day.",
        discrepancy: "Future → \"would\", tomorrow → \"next day\"."
    },
    {
        id: 13,
        type: "grammar",
        question: "Choose the correct passive voice. They are repairing the road.",
        options: ["The road is repaired.", "The road is being repaired.", "The road has been repaired.", "The road repaired."],
        correctAnswer: "b",
        answer: "b) The road is being repaired.",
        discrepancy: "Present continuous → \"is being\"."
    },
    {
        id: 14,
        type: "grammar",
        question: "Choose the correct passive voice. He wrote a letter.",
        options: ["A letter is written by him.", "A letter was written by him.", "A letter is being written by him.", "A letter has written by him."],
        correctAnswer: "b",
        answer: "b) A letter was written by him.",
        discrepancy: "Past simple → \"was written\"."
    },
    {
        id: 15,
        type: "grammar",
        question: "Choose the correct tense. By next month, we ___ the project.",
        options: ["complete", "have completed", "will have completed", "completed"],
        correctAnswer: "c",
        answer: "c) will have completed",
        discrepancy: "Future perfect is required."
    },
    {
        id: 16,
        type: "grammar",
        question: "Choose the correct tense. She ___ here since 2010.",
        options: ["lives", "lived", "has been living", "was living"],
        correctAnswer: "c",
        answer: "c) has been living",
        discrepancy: "\"Since\" → present perfect continuous."
    },
    {
        id: 17,
        type: "vocabulary",
        question: "One-word substitution. A person who writes dictionaries.",
        options: ["Philologist", "Lexicographer", "Bibliographer", "Grammarian"],
        correctAnswer: "b",
        answer: "b) Lexicographer",
        discrepancy: "Correct technical word."
    },
    {
        id: 18,
        type: "vocabulary",
        question: "One-word substitution. A speech delivered without preparation.",
        options: ["Extempore", "Lecture", "Dialogue", "Oration"],
        correctAnswer: "a",
        answer: "a) Extempore",
        discrepancy: "Correct meaning."
    },
    {
        id: 19,
        type: "idioms",
        question: "Idiom meaning. \"To spill the beans\"",
        options: ["To cook food", "To reveal a secret", "To waste money", "To make a mistake"],
        correctAnswer: "b",
        answer: "b) To reveal a secret",
        discrepancy: "Idiomatic meaning."
    },
    {
        id: 20,
        type: "idioms",
        question: "Idiom meaning. \"A blessing in disguise\"",
        options: ["A good thing that seems bad at first", "A curse", "A punishment", "An unexpected loss"],
        correctAnswer: "a",
        answer: "a) A good thing that seems bad at first",
        discrepancy: "Correct idiomatic use."
    },
    {
        id: 21,
        type: "vocabulary",
        question: "Synonym of <span class='highlight'>Humble</span>",
        options: ["Proud", "Modest", "Arrogant", "Cruel"],
        correctAnswer: "b",
        answer: "b) Modest",
        discrepancy: "Humble = modest."
    },
    {
        id: 22,
        type: "vocabulary",
        question: "Antonym of <span class='highlight'>Ancient</span>",
        options: ["Old", "Modern", "Antique", "Historical"],
        correctAnswer: "b",
        answer: "b) Modern",
        discrepancy: "Opposite of ancient."
    },
    {
        id: 23,
        type: "grammar",
        question: "Fill in the blank. The book is ___ the table.",
        options: ["in", "on", "at", "over"],
        correctAnswer: "b",
        answer: "b) on",
        discrepancy: "Preposition of position."
    },
    {
        id: 24,
        type: "grammar",
        question: "Fill in the blank. He is senior ___ me.",
        options: ["than", "to", "from", "with"],
        correctAnswer: "b",
        answer: "b) to",
        discrepancy: "Correct idiomatic usage → \"senior to\"."
    },
    {
        id: 25,
        type: "grammar",
        question: "Spot error. Each of the boys have done their homework.",
        options: ["Each of the boys", "have done", "their homework", "No error"],
        correctAnswer: "b",
        answer: "b) have done",
        discrepancy: "\"Each\" → singular verb → \"has done\"."
    },
    {
        id: 26,
        type: "grammar",
        question: "Spot error. Neither of the answers are correct.",
        options: ["Neither of the answers", "are", "correct", "No error"],
        correctAnswer: "b",
        answer: "b) are",
        discrepancy: "\"Neither\" → singular → \"is\"."
    },
    {
        id: 27,
        type: "grammar",
        question: "Correct indirect speech. He said, \"Can you swim?\"",
        options: ["I asked my friend whether he could swim.", "I asked my friend whether he can be swim.", "I asked my friend whether he can swim.", "I asked my friend whether he could be swim."],
        correctAnswer: "a",
        answer: "a) I asked my friend whether he could swim.",
        discrepancy: "Correct tense and grammar."
    },
    {
        id: 28,
        type: "grammar",
        question: "Correct passive voice. They have finished the work.",
        options: ["The work has been finished.", "The work is finished.", "The work was finished.", "The work finished."],
        correctAnswer: "a",
        answer: "a) The work has been finished.",
        discrepancy: "Present perfect passive."
    },
    {
        id: 29,
        type: "grammar",
        question: "Correct tense. When I reached the station, the train ___.",
        options: ["left", "has left", "had left", "leaves"],
        correctAnswer: "c",
        answer: "c) had left",
        discrepancy: "Past perfect required."
    },
    {
        id: 30,
        type: "grammar",
        question: "Correct tense. She usually ___ tea in the morning.",
        options: ["drink", "drinks", "drank", "drinking"],
        correctAnswer: "b",
        answer: "b) drinks",
        discrepancy: "Present simple with \"usually\"."
    },
    {
        id: 31,
        type: "vocabulary",
        question: "One-word substitution. A person who can speak many languages.",
        options: ["Bilingual", "Multilingual", "Linguist", "Polyglot"],
        correctAnswer: "d",
        answer: "d) Polyglot",
        discrepancy: "Exact meaning."
    },
    {
        id: 32,
        type: "vocabulary",
        question: "One-word substitution. A person who loves mankind.",
        options: ["Philanthropist", "Misogynist", "Pessimist", "Optimist"],
        correctAnswer: "a",
        answer: "a) Philanthropist",
        discrepancy: "Correct meaning."
    },
    {
        id: 33,
        type: "idioms",
        question: "Idiom meaning. \"To hit the nail on the head\"",
        options: ["To hurt someone", "To guess correctly", "To say exactly the right thing", "To make mistake"],
        correctAnswer: "c",
        answer: "c) To say exactly the right thing",
        discrepancy: "Correct meaning."
    },
    {
        id: 34,
        type: "idioms",
        question: "Idiom meaning. \"To burn the midnight oil\"",
        options: ["To work late into the night", "To waste time", "To quarrel", "To feel sleepy"],
        correctAnswer: "a",
        answer: "a) To work late into the night",
        discrepancy: "Correct meaning."
    },
    {
        id: 35,
        type: "grammar",
        question: "Part of speech. There is <span class='highlight'>something</span> under the bed.",
        options: ["Pronoun", "Conjunction", "Noun", "Preposition"],
        correctAnswer: "a",
        answer: "a) Pronoun",
        discrepancy: "\"Something\" = indefinite pronoun."
    },
    {
        id: 36,
        type: "grammar",
        question: "Part of speech. The cat is <span class='highlight'>under</span> the table.",
        options: ["Pronoun", "Conjunction", "Noun", "Preposition"],
        correctAnswer: "d",
        answer: "d) Preposition",
        discrepancy: "Shows relation."
    },
    {
        id: 37,
        type: "grammar",
        question: "Spot error. Ravi as well as his friends are going.",
        options: ["Ravi", "as well as", "his friends", "are going"],
        correctAnswer: "d",
        answer: "d) are going",
        discrepancy: "Singular subject → \"is going\"."
    },
    {
        id: 38,
        type: "grammar",
        question: "Spot error. The teacher and the guide is present.",
        options: ["The teacher and the guide", "is", "present", "No error"],
        correctAnswer: "b",
        answer: "b) is",
        discrepancy: "Compound subject → \"are present\"."
    },
    {
        id: 39,
        type: "grammar",
        question: "Correction. People should be have their own mechanism...",
        options: ["shall be have their own", "should be having its own", "should have owning its", "should have their", "No correction required"],
        correctAnswer: "d",
        answer: "d) should have their",
        discrepancy: "Correct modal + verb."
    },
    {
        id: 40,
        type: "grammar",
        question: "Correction. We observed that traders were not primarily dedicated with art of selling.",
        options: ["dedicated to the art of", "dedicated by the art of", "dedicated in the art by", "None of these", "No correction required"],
        correctAnswer: "a",
        answer: "a) dedicated to the art of",
        discrepancy: "Correct preposition → \"dedicated to\"."
    }
];

// DOM elements
const questionsContainer = document.getElementById('questionsContainer');
const searchInput = document.getElementById('searchInput');
const clearSearchBtn = document.getElementById('clearSearch');
const filterBtns = document.querySelectorAll('.filter-btn');
const totalQuestionsEl = document.getElementById('totalQuestions');
const visibleQuestionsEl = document.getElementById('visibleQuestions');
const searchResultsEl = document.getElementById('searchResults');

// Current filter state
let currentFilter = 'all';
let currentSearch = '';

// Initialize the page
document.addEventListener('DOMContentLoaded', function() {
    renderQuestions(questionsData);
    setupEventListeners();
    updateStats();
});

// Setup event listeners
function setupEventListeners() {
    // Search functionality
    searchInput.addEventListener('input', handleSearch);
    clearSearchBtn.addEventListener('click', clearSearch);
    
    // Filter functionality
    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const filter = btn.dataset.filter;
            setActiveFilter(filter);
            filterQuestions();
        });
    });
}

// Handle search
function handleSearch(e) {
    currentSearch = e.target.value.toLowerCase().trim();
    filterQuestions();
    updateStats();
}

// Clear search
function clearSearch() {
    searchInput.value = '';
    currentSearch = '';
    filterQuestions();
    updateStats();
}

// Set active filter
function setActiveFilter(filter) {
    currentFilter = filter;
    filterBtns.forEach(btn => {
        btn.classList.remove('active');
        if (btn.dataset.filter === filter) {
            btn.classList.add('active');
        }
    });
}

// Filter questions based on search and filter
function filterQuestions() {
    let filteredQuestions = questionsData;
    
    // Apply type filter
    if (currentFilter !== 'all') {
        filteredQuestions = filteredQuestions.filter(q => q.type === currentFilter);
    }
    
    // Apply search filter
    if (currentSearch) {
        filteredQuestions = filteredQuestions.filter(q => {
            const searchText = `${q.question} ${q.options.join(' ')} ${q.answer} ${q.discrepancy}`.toLowerCase();
            return searchText.includes(currentSearch);
        });
    }
    
    renderQuestions(filteredQuestions);
}

// Render questions
function renderQuestions(questions) {
    questionsContainer.innerHTML = '';
    
    if (questions.length === 0) {
        questionsContainer.innerHTML = `
            <div class="loading">
                <i class="fas fa-search"></i>
                <p>No questions found matching your search criteria.</p>
            </div>
        `;
        return;
    }
    
    questions.forEach((question, index) => {
        const questionCard = createQuestionCard(question, index);
        questionsContainer.appendChild(questionCard);
    });
}

// Create question card
function createQuestionCard(question, index) {
    const card = document.createElement('div');
    card.className = 'question-card fade-in';
    
    const optionsList = question.options.map((option, i) => {
        const optionLetter = String.fromCharCode(97 + i); // a, b, c, d
        const isCorrect = optionLetter === question.correctAnswer;
        const optionClass = isCorrect ? 'correct' : 'incorrect';
        
        return `<li class="option ${optionClass}">${optionLetter}) ${option}</li>`;
    }).join('');
    
    card.innerHTML = `
        <div class="question-number">
            Question ${question.id}
            <span class="question-type">${question.type}</span>
        </div>
        
        <div class="question-text">${question.question}</div>
        
        <ul class="options-list">
            ${optionsList}
        </ul>
        
        <div class="answer-section">
            <span class="answer-label">Correct Answer:</span>
            <div class="answer-text">${question.answer}</div>
        </div>
        
        <div class="discrepancy-section">
            <span class="discrepancy-label">Explanation:</span>
            <div class="discrepancy-text">${question.discrepancy}</div>
        </div>
    `;
    
    return card;
}

// Update statistics
function updateStats() {
    const totalQuestions = questionsData.length;
    let visibleQuestions = questionsData.length;
    let searchResults = 0;
    
    if (currentFilter !== 'all') {
        visibleQuestions = questionsData.filter(q => q.type === currentFilter).length;
    }
    
    if (currentSearch) {
        searchResults = questionsData.filter(q => {
            const searchText = `${q.question} ${q.options.join(' ')} ${q.answer} ${q.discrepancy}`.toLowerCase();
            return searchText.includes(currentSearch);
        }).length;
    }
    
    totalQuestionsEl.textContent = totalQuestions;
    visibleQuestionsEl.textContent = visibleQuestions;
    searchResultsEl.textContent = searchResults;
}

// Add smooth scrolling for better UX
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Add keyboard shortcuts
document.addEventListener('keydown', function(e) {
    // Ctrl/Cmd + F to focus search
    if ((e.ctrlKey || e.metaKey) && e.key === 'f') {
        e.preventDefault();
        searchInput.focus();
    }
    
    // Escape to clear search
    if (e.key === 'Escape') {
        clearSearch();
    }
});

// Add loading animation
window.addEventListener('load', function() {
    document.body.classList.add('loaded');
});

// Add intersection observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
        }
    });
}, observerOptions);

// Observe question cards for animation
document.addEventListener('DOMContentLoaded', function() {
    const questionCards = document.querySelectorAll('.question-card');
    questionCards.forEach(card => observer.observe(card));
});
