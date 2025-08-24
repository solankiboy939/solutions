# English Grammar Tests - Multiple Test Platform

A professional, interactive multi-test platform containing various English grammar tests with detailed answers, explanations, and search functionality.

## Features

### 📚 Multiple Test Platform
- **Dashboard interface** to browse and select from multiple tests
- **5 different tests** with varying difficulty levels and topics
- **180+ total questions** across all tests
- **Detailed explanations** for each answer
- **Professional formatting** with clear visual hierarchy

### 🔍 Advanced Search & Filter
- **Real-time search** across questions, options, answers, and explanations
- **Category filtering**: All Questions, Spelling, Vocabulary, Grammar, Idioms
- **Statistics display**: Total questions, visible questions, search results
- **Keyboard shortcuts**: Ctrl+F to focus search, Escape to clear

### 🎨 Professional Design
- **Modern, responsive design** that works on all devices
- **Beautiful gradient header** with professional styling
- **Interactive question cards** with hover effects
- **Color-coded answers**: Green for correct, red for incorrect
- **Smooth animations** and transitions

### 📱 Mobile-Friendly
- **Responsive layout** that adapts to different screen sizes
- **Touch-friendly interface** for mobile devices
- **Optimized typography** for readability

## How to Use

### Opening the Platform
1. Open `index.html` in any modern web browser
2. You'll see the dashboard with all available tests
3. Click on any test to start practicing

### Searching Questions
1. Use the search box at the top to find specific questions
2. Search works across:
   - Question text
   - Answer options
   - Correct answers
   - Explanations
3. Results update in real-time as you type

### Navigating Tests
1. **Dashboard**: Browse all available tests with difficulty levels and descriptions
2. **Test Selection**: Click "Start Test" to begin any test
3. **Back Navigation**: Use "Back to Dashboard" button to return to main page

### Filtering Questions Within Tests
1. Click on the filter buttons below the search box:
   - **All Questions**: Shows all questions in the current test
   - **Spelling**: Questions about correct word spelling
   - **Vocabulary**: Synonyms, antonyms, and word meanings
   - **Grammar**: Grammar rules, tenses, parts of speech
   - **Idioms**: Idiomatic expressions and their meanings

### Keyboard Shortcuts
- **Ctrl+F** (or Cmd+F on Mac): Focus the search box
- **Escape**: Clear the search and show all questions

### Understanding the Display
Each question card shows:
- **Question number** and **category type**
- **Question text** with highlighted keywords
- **All options** (a, b, c, d) with correct/incorrect indicators
- **Correct answer** in a highlighted box
- **Detailed explanation** of why the answer is correct

## Available Tests

### Test 1: Engineering 2-26-V-Test 1
- **40 questions** | **60 minutes** | **Intermediate**
- **Categories**: Spelling, Vocabulary, Grammar, Idioms
- **Topics**: Basic grammar rules, common vocabulary, spelling corrections

### Test 2: Advanced Grammar Test
- **50 questions** | **75 minutes** | **Advanced**
- **Categories**: Grammar, Vocabulary, Advanced
- **Topics**: Complex sentence structures, advanced vocabulary, subjunctive mood

### Test 3: Basic Grammar Fundamentals
- **30 questions** | **45 minutes** | **Beginner**
- **Categories**: Grammar, Basic
- **Topics**: Fundamental grammar concepts for beginners

### Test 4: Vocabulary Mastery Test
- **35 questions** | **50 minutes** | **Intermediate**
- **Categories**: Vocabulary, Synonyms, Antonyms
- **Topics**: Advanced vocabulary, word meanings, synonyms and antonyms

### Test 5: Idioms and Phrases Test
- **25 questions** | **35 minutes** | **Intermediate**
- **Categories**: Idioms, Phrases
- **Topics**: Common English idioms and phrases

## Technical Details

### Files Included
- `index.html` - Main dashboard page
- `dashboard.js` - Dashboard functionality and test management
- `test_1.html` - Test 1: Engineering 2-26-V-Test 1
- `test_1.js` - Questions and functionality for Test 1
- `test_2.html` - Test 2: Advanced Grammar Test
- `test_2.js` - Questions and functionality for Test 2
- `styles.css` - Professional styling and responsive design
- `README.md` - This documentation file

### Browser Compatibility
- Chrome (recommended)
- Firefox
- Safari
- Edge
- Any modern browser with JavaScript enabled

### No Dependencies
- No external libraries required
- Uses only vanilla HTML, CSS, and JavaScript
- Font Awesome icons loaded from CDN
- Google Fonts (Inter) loaded from CDN

## Study Tips

1. **Start with categories** you're weakest in using the filter buttons
2. **Use the search** to find specific topics you want to review
3. **Read explanations carefully** - they contain important grammar rules
4. **Practice regularly** - review questions multiple times
5. **Take notes** on patterns you notice in the explanations

## Adding New Tests

You can easily add new tests by:
1. **Create HTML file**: Create `test_X.html` following the template structure
2. **Create JS file**: Create `test_X.js` with your questions data
3. **Update dashboard**: Add test configuration to `dashboard.js`
4. **Add questions**: Populate the questions array with your content

### Test Structure Template
```javascript
// In dashboard.js - add to testsConfig array
{
    id: X,
    title: "Your Test Title",
    description: "Test description",
    questions: 25,
    timeLimit: 45,
    difficulty: "Intermediate",
    categories: ["Grammar", "Vocabulary"],
    file: "test_X.html",
    lastUpdated: "2024-01-01"
}
```

## Support

This webpage is designed to be self-contained and doesn't require any server setup. Simply open the HTML file in a browser to start studying!

---

**Happy Learning! 📖✨**
