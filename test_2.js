// Sample questions data for Advanced Grammar Test
const questionsData = [
    {
        id: 1,
        type: "grammar",
        question: "Identify the complex sentence structure. <span class='highlight'>Although it was raining heavily, she decided to go for a walk.</span>",
        options: ["Simple sentence", "Compound sentence", "Complex sentence", "Compound-complex sentence"],
        correctAnswer: "c",
        answer: "c) Complex sentence",
        discrepancy: "Contains one independent clause and one dependent clause introduced by 'Although'."
    },
    {
        id: 2,
        type: "grammar",
        question: "Choose the correct subjunctive mood. If I ___ rich, I would travel the world.",
        options: ["am", "was", "were", "will be"],
        correctAnswer: "c",
        answer: "c) were",
        discrepancy: "Subjunctive mood requires 'were' for hypothetical situations."
    },
    {
        id: 3,
        type: "vocabulary",
        question: "Select the most appropriate word. The ___ of the novel was so intricate that readers were captivated.",
        options: ["plot", "story", "narrative", "tale"],
        correctAnswer: "a",
        answer: "a) plot",
        discrepancy: "'Plot' refers to the sequence of events in a story, which can be intricate."
    },
    {
        id: 4,
        type: "advanced",
        question: "Identify the rhetorical device. <span class='highlight'>The wind whispered through the trees.</span>",
        options: ["Metaphor", "Personification", "Simile", "Alliteration"],
        correctAnswer: "b",
        answer: "b) Personification",
        discrepancy: "Giving human characteristics (whispering) to non-human objects (wind)."
    },
    {
        id: 5,
        type: "grammar",
        question: "Choose the correct conditional sentence. If you had studied harder, you ___ the exam.",
        options: ["would pass", "would have passed", "will pass", "pass"],
        correctAnswer: "b",
        answer: "b) would have passed",
        discrepancy: "Third conditional: past perfect in if-clause, would have + past participle in main clause."
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
