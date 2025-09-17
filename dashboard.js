// Tests configuration
const testsConfig = [
    {
        id: 1,
        title: "Engineering 2-26-V-Test 1",
        description: "Comprehensive English grammar test with 40 questions covering spelling, vocabulary, grammar, and idioms.",
        questions: 40,
        timeLimit: 60, // minutes
        difficulty: "Intermediate",
        categories: ["Spelling", "Vocabulary", "Grammar", "Idioms"],
        file: "test_1.html",
        lastUpdated: "2025-08-24"
    },
    {
        id: 2,
        title: "Engineering-26-A-Test 1",
        description: "Advanced level test focusing on complex sentence structures and advanced analytical skills",
        questions: 40,
        timeLimit: 75,
        difficulty: "Advanced",
        categories: ["Math Problems", "Grammar", "Logic"],
        file: "test_2.html",
        lastUpdated: "2025-08-23"
    },
    {
        id: 3,
        title: "Engineering-26-V-Test 1",
        description: "Basic grammar test perfect for beginners and intermediate learners.",
        questions: 40,
        timeLimit: 45,
        difficulty: "Intermediate",
        categories: ["Grammar", "Basic"],
        file: "test_3.html",
        lastUpdated: "2025-08-24"
    },
    {
        id: 4,
        title: "NPTEL Deep Learning - IIT Ropar - Complete Answers(WEEK_6)",
        description: "Deep Learning ",
        questions: 27,
        timeLimit: 0.0,
        difficulty: "Intermediate",
        categories: ["DL Algorithm", "ML Algorithm"],
        file: "Test_3.html",
        lastUpdated: "2024-01-30"
    },
    {
        id: 5,
        title: "AI & Deep Learning Practice Quiz",
        description: "Test your knowledge of AI/DEEP_LEARNING",
        questions: 120,
        timeLimit: 600,
        difficulty: "Intermediate",
        categories: ["Tessorflow", "Keras"],
        file: "test_4.html",
        lastUpdated: "2024-02-01"
    },
        {
        id: 6,
        title: "Week 8 Assignment",
        description: "NPTEL Deep Learning - IIT Ropar",
        questions: 27,
        timeLimit: 600,
        difficulty: "Intermediate",
        categories: ["Tessorflow", "Keras"],
        file: "test_5.html",
        lastUpdated: "2025-09-17, 23:59 IST"
    }
];

// DOM elements
const testsGrid = document.getElementById('testsGrid');
const totalTestsEl = document.getElementById('totalTests');
const totalQuestionsEl = document.getElementById('totalQuestions');
const totalTimeEl = document.getElementById('totalTime');

// Initialize dashboard
document.addEventListener('DOMContentLoaded', function() {
    renderTests();
    updateStats();
});

// Render tests grid
function renderTests() {
    testsGrid.innerHTML = '';
    
    testsConfig.forEach(test => {
        const testCard = createTestCard(test);
        testsGrid.appendChild(testCard);
    });
}

// Create test card
function createTestCard(test) {
    const card = document.createElement('div');
    card.className = 'test-card fade-in';
    
    const difficultyColor = getDifficultyColor(test.difficulty);
    const categoriesHtml = test.categories.map(cat => `<span class="category-tag">${cat}</span>`).join('');
    
    card.innerHTML = `
        <div class="test-header">
            <div class="test-number">Test ${test.id}</div>
            <div class="difficulty-badge" style="background: ${difficultyColor}">
                ${test.difficulty}
            </div>
        </div>
        
        <h3 class="test-title">${test.title}</h3>
        <p class="test-description">${test.description}</p>
        
        <div class="test-categories">
            ${categoriesHtml}
        </div>
        
        <div class="test-meta">
            <div class="meta-item">
                <i class="fas fa-question-circle"></i>
                <span>${test.questions} Questions</span>
            </div>
            <div class="meta-item">
                <i class="fas fa-clock"></i>
                <span>${test.timeLimit} min</span>
            </div>
            <div class="meta-item">
                <i class="fas fa-calendar"></i>
                <span>${formatDate(test.lastUpdated)}</span>
            </div>
        </div>
        
        <div class="test-actions">
            <a href="${test.file}" class="btn-start-test">
                <i class="fas fa-play"></i>
                Start Test
            </a>
            <button class="btn-preview" onclick="previewTest(${test.id})">
                <i class="fas fa-eye"></i>
                Preview
            </button>
        </div>
    `;
    
    return card;
}

// Get difficulty color
function getDifficultyColor(difficulty) {
    const colors = {
        'Beginner': '#10b981',
        'Intermediate': '#f59e0b',
        'Advanced': '#ef4444'
    };
    return colors[difficulty] || '#64748b';
}

// Format date
function formatDate(dateString) {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
        year: 'numeric', 
        month: 'short', 
        day: 'numeric' 
    });
}

// Update statistics
function updateStats() {
    const totalTests = testsConfig.length;
    const totalQuestions = testsConfig.reduce((sum, test) => sum + test.questions, 0);
    const totalTime = testsConfig.reduce((sum, test) => sum + test.timeLimit, 0);
    
    totalTestsEl.textContent = totalTests;
    totalQuestionsEl.textContent = totalQuestions;
    totalTimeEl.textContent = totalTime;
}

// Preview test function
function previewTest(testId) {
    const test = testsConfig.find(t => t.id === testId);
    if (test) {
        // You can implement a modal preview here
        alert(`Preview for ${test.title}\n\nThis would show a sample of questions from the test.`);
    }
}

// Add smooth animations
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

// Observe test cards for animation
document.addEventListener('DOMContentLoaded', function() {
    const testCards = document.querySelectorAll('.test-card');
    testCards.forEach(card => observer.observe(card));
});










