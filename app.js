/**
 * PrepMaster - Final Year Campus Placement & Interview Platform
 * Developed & Maintained by Sachin Kumar
 * Pure Vanilla JavaScript Application Logic
 */

(function () {
  'use strict';

  // --- APPLICATION STATE ---
  const state = {
    domain: 'all',
    questionCount: 10,
    testMode: 'timed', // 'timed' or 'practice'
    questions: [],
    currentIndex: 0,
    userAnswers: [], // Array of { selectedIndex: number | null, isCorrect: boolean | null, flagged: boolean, eliminatedOptions: number[] }
    soundEnabled: true,
    theme: localStorage.getItem('prepmaster_theme') || 'dark',
    timerInterval: null,
    timeRemaining: 0,
    totalTime: 0,
    startTime: 0,
    elapsedSeconds: 0
  };

  // --- AUDIO SYNTHESIS ENGINE (Web Audio API - No External Assets) ---
  const AudioEngine = {
    ctx: null,

    init() {
      if (!this.ctx && (window.AudioContext || window.webkitAudioContext)) {
        this.ctx = new (window.AudioContext || window.webkitAudioContext)();
      }
    },

    playTone(freq, type, duration, delay = 0) {
      if (!state.soundEnabled) return;
      try {
        this.init();
        if (!this.ctx) return;
        if (this.ctx.state === 'suspended') {
          this.ctx.resume();
        }

        setTimeout(() => {
          const osc = this.ctx.createOscillator();
          const gain = this.ctx.createGain();

          osc.type = type;
          osc.frequency.setValueAtTime(freq, this.ctx.currentTime);

          gain.gain.setValueAtTime(0.15, this.ctx.currentTime);
          gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + duration);

          osc.connect(gain);
          gain.connect(this.ctx.destination);

          osc.start();
          osc.stop(this.ctx.currentTime + duration);
        }, delay * 1000);
      } catch (e) {
        console.warn('Audio error:', e);
      }
    },

    click() {
      this.playTone(600, 'sine', 0.05);
    },

    correct() {
      this.playTone(523.25, 'triangle', 0.12, 0);      // C5
      this.playTone(659.25, 'triangle', 0.15, 0.08);   // E5
      this.playTone(783.99, 'triangle', 0.22, 0.16);   // G5
    },

    wrong() {
      this.playTone(280, 'sawtooth', 0.15, 0);
      this.playTone(220, 'sawtooth', 0.25, 0.1);
    },

    finish() {
      this.playTone(440, 'triangle', 0.15, 0);
      this.playTone(554.37, 'triangle', 0.15, 0.1);
      this.playTone(659.25, 'triangle', 0.15, 0.2);
      this.playTone(880, 'triangle', 0.35, 0.3);
    }
  };

  // --- DOM ELEMENTS ---
  const DOM = {
    // Theme & Sound
    themeToggleBtn: document.getElementById('themeToggleBtn'),
    themeIcon: document.getElementById('themeIcon'),
    soundToggleBtn: document.getElementById('soundToggleBtn'),
    soundIcon: document.getElementById('soundIcon'),
    homeLogoBtn: document.getElementById('homeLogoBtn'),
    quitQuizBtn: document.getElementById('quitQuizBtn'),

    // Screens
    homeScreen: document.getElementById('homeScreen'),
    quizScreen: document.getElementById('quizScreen'),
    resultScreen: document.getElementById('resultScreen'),
    reviewScreen: document.getElementById('reviewScreen'),

    // Settings
    questionCountSelector: document.getElementById('questionCountSelector'),
    testModeSelector: document.getElementById('testModeSelector'),

    // Domain Cards
    domainCards: document.querySelectorAll('.domain-card'),

    // Active Quiz Elements
    quizHeaderInfo: document.getElementById('quizHeaderInfo'),
    activeCategoryBadge: document.getElementById('activeCategoryBadge'),
    quizTimer: document.getElementById('quizTimer'),
    timerDisplay: document.getElementById('timerDisplay'),
    currentQNum: document.getElementById('currentQNum'),
    totalQNum: document.getElementById('totalQNum'),
    companyTagBadge: document.getElementById('companyTagBadge'),
    difficultyTagBadge: document.getElementById('difficultyTagBadge'),
    lifelineBtn: document.getElementById('lifelineBtn'),
    flagQuestionBtn: document.getElementById('flagQuestionBtn'),
    flagIcon: document.getElementById('flagIcon'),
    progressBarFill: document.getElementById('progressBarFill'),
    questionTopic: document.getElementById('questionTopic'),
    questionText: document.getElementById('questionText'),
    codeSnippetArea: document.getElementById('codeSnippetArea'),
    codeSnippetContent: document.getElementById('codeSnippetContent'),
    copyCodeBtn: document.getElementById('copyCodeBtn'),
    optionsContainer: document.getElementById('optionsContainer'),
    instantFeedbackBox: document.getElementById('instantFeedbackBox'),
    feedbackResultBadge: document.getElementById('feedbackResultBadge'),
    feedbackExplanationText: document.getElementById('feedbackExplanationText'),
    questionStatusIndicator: document.getElementById('questionStatusIndicator'),
    statusText: document.getElementById('statusText'),
    prevBtn: document.getElementById('prevBtn'),
    nextBtn: document.getElementById('nextBtn'),
    submitQuizBtn: document.getElementById('submitQuizBtn'),

    // Palette Drawer
    paletteToggleBtn: document.getElementById('paletteToggleBtn'),
    paletteDrawer: document.getElementById('paletteDrawer'),
    paletteOverlay: document.getElementById('paletteOverlay'),
    closePaletteBtn: document.getElementById('closePaletteBtn'),
    paletteGrid: document.getElementById('paletteGrid'),

    // Results Screen Elements
    resultReadinessBadge: document.getElementById('resultReadinessBadge'),
    scoreCircleProgress: document.getElementById('scoreCircleProgress'),
    finalScoreText: document.getElementById('finalScoreText'),
    finalPercentText: document.getElementById('finalPercentText'),
    resultHeadline: document.getElementById('resultHeadline'),
    resultSubtext: document.getElementById('resultSubtext'),
    statCorrectCount: document.getElementById('statCorrectCount'),
    statWrongCount: document.getElementById('statWrongCount'),
    statSkippedCount: document.getElementById('statSkippedCount'),
    statTimeSpent: document.getElementById('statTimeSpent'),
    viewSolutionsBtn: document.getElementById('viewSolutionsBtn'),
    retakeQuizBtn: document.getElementById('retakeQuizBtn'),
    backToHomeBtn: document.getElementById('backToHomeBtn'),

    // Review Screen Elements
    reviewCardsList: document.getElementById('reviewCardsList'),
    reviewCountAll: document.getElementById('reviewCountAll'),
    reviewCountWrong: document.getElementById('reviewCountWrong'),
    reviewCountCorrect: document.getElementById('reviewCountCorrect'),
    backToResultBtn: document.getElementById('backToResultBtn'),
    reviewFilters: document.querySelectorAll('.review-filter-btn')
  };

  // --- INITIALIZATION ---
  function init() {
    applyTheme(state.theme);
    bindEvents();
    setupSoundState();
  }

  // --- THEME & SOUND HELPERS ---
  function applyTheme(theme) {
    state.theme = theme;
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('prepmaster_theme', theme);
    DOM.themeIcon.className = theme === 'dark' ? 'fa-solid fa-moon' : 'fa-solid fa-sun';
  }

  function toggleTheme() {
    AudioEngine.click();
    applyTheme(state.theme === 'dark' ? 'light' : 'dark');
  }

  function setupSoundState() {
    const saved = localStorage.getItem('prepmaster_sound');
    if (saved !== null) {
      state.soundEnabled = saved === 'true';
    }
    updateSoundIcon();
  }

  function toggleSound() {
    state.soundEnabled = !state.soundEnabled;
    localStorage.setItem('prepmaster_sound', state.soundEnabled);
    updateSoundIcon();
    if (state.soundEnabled) AudioEngine.click();
  }

  function updateSoundIcon() {
    DOM.soundIcon.className = state.soundEnabled ? 'fa-solid fa-volume-high' : 'fa-solid fa-volume-xmark';
  }

  // --- VIEW SWITCHING ---
  function showScreen(screenId) {
    [DOM.homeScreen, DOM.quizScreen, DOM.resultScreen, DOM.reviewScreen].forEach(el => {
      el.classList.remove('active-view');
    });

    const target = document.getElementById(screenId);
    if (target) {
      target.classList.add('active-view');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    // Toggle header context info
    if (screenId === 'quizScreen') {
      DOM.quizHeaderInfo.style.display = 'flex';
      DOM.quitQuizBtn.style.display = 'inline-flex';
    } else {
      DOM.quizHeaderInfo.style.display = 'none';
      DOM.quitQuizBtn.style.display = 'none';
    }
  }

  // --- QUIZ START ENGINE ---
  function startQuiz(domain) {
    AudioEngine.click();
    state.domain = domain;
    state.questions = getQuizQuestions(domain, state.questionCount);
    state.currentIndex = 0;

    // Initialize user answers array
    state.userAnswers = state.questions.map(() => ({
      selectedIndex: null,
      isCorrect: null,
      flagged: false,
      eliminatedOptions: []
    }));

    // Setup Category Badge text
    const domainLabels = {
      all: 'Full Placement Mock',
      aptitude: 'Quantitative Aptitude',
      reasoning: 'Logical Reasoning',
      verbal: 'Verbal Ability',
      dsa: 'Data Structures & Algo',
      core_cs: 'Core Computer Science',
      web_dev: 'Web Dev & Tech'
    };
    DOM.activeCategoryBadge.innerHTML = `<i class="fa-solid fa-layer-group"></i> <span>${domainLabels[domain] || 'Placement Test'}</span>`;

    // Setup Timer
    if (state.testMode === 'timed') {
      state.timeRemaining = state.questions.length * 60; // 60 seconds per question
      state.totalTime = state.timeRemaining;
      DOM.quizTimer.style.display = 'flex';
      startTimer();
    } else {
      DOM.quizTimer.style.display = 'none';
    }

    state.startTime = Date.now();

    showScreen('quizScreen');
    renderQuestion(state.currentIndex);
    renderPalette();
  }

  // --- TIMER MANAGEMENT ---
  function startTimer() {
    clearInterval(state.timerInterval);
    updateTimerDisplay();

    state.timerInterval = setInterval(() => {
      state.timeRemaining--;
      updateTimerDisplay();

      if (state.timeRemaining <= 60) {
        DOM.quizTimer.classList.add('warning');
      } else {
        DOM.quizTimer.classList.remove('warning');
      }

      if (state.timeRemaining <= 0) {
        clearInterval(state.timerInterval);
        submitQuiz(true); // Auto-submit when time expires
      }
    }, 1000);
  }

  function updateTimerDisplay() {
    const mins = Math.floor(Math.max(0, state.timeRemaining) / 60);
    const secs = Math.max(0, state.timeRemaining) % 60;
    DOM.timerDisplay.textContent = `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  }

  function stopTimer() {
    clearInterval(state.timerInterval);
    state.elapsedSeconds = Math.floor((Date.now() - state.startTime) / 1000);
  }

  // --- RENDER CURRENT QUESTION ---
  function renderQuestion(index) {
    const q = state.questions[index];
    const userAns = state.userAnswers[index];

    // Meta row
    DOM.currentQNum.textContent = index + 1;
    DOM.totalQNum.textContent = state.questions.length;
    DOM.companyTagBadge.innerHTML = `<i class="fa-solid fa-building"></i> ${q.company}`;
    
    DOM.difficultyTagBadge.textContent = q.difficulty;
    DOM.difficultyTagBadge.className = `difficulty-tag ${q.difficulty}`;

    // Flag button state
    if (userAns.flagged) {
      DOM.flagQuestionBtn.classList.add('flagged');
      DOM.flagIcon.className = 'fa-solid fa-bookmark';
    } else {
      DOM.flagQuestionBtn.classList.remove('flagged');
      DOM.flagIcon.className = 'fa-regular fa-bookmark';
    }

    // 50:50 Lifeline button state
    if (userAns.eliminatedOptions && userAns.eliminatedOptions.length > 0) {
      DOM.lifelineBtn.classList.add('used');
      DOM.lifelineBtn.disabled = true;
    } else {
      DOM.lifelineBtn.classList.remove('used');
      DOM.lifelineBtn.disabled = userAns.selectedIndex !== null; // disable if already answered
    }

    // Progress Bar
    const progressPercent = ((index + 1) / state.questions.length) * 100;
    DOM.progressBarFill.style.width = `${progressPercent}%`;

    // Question content
    DOM.questionTopic.textContent = q.topic;
    DOM.questionText.textContent = q.question;

    // Code snippet
    if (q.codeSnippet) {
      DOM.codeSnippetArea.style.display = 'block';
      DOM.codeSnippetContent.textContent = q.codeSnippet;
    } else {
      DOM.codeSnippetArea.style.display = 'none';
    }

    // Options Rendering
    DOM.optionsContainer.innerHTML = '';
    const optionPrefixes = ['A', 'B', 'C', 'D'];

    q.options.forEach((optText, optIdx) => {
      const optBtn = document.createElement('button');
      optBtn.className = 'option-item';
      optBtn.setAttribute('data-index', optIdx);

      // Check if eliminated by 50:50
      if (userAns.eliminatedOptions.includes(optIdx)) {
        optBtn.classList.add('eliminated');
        optBtn.disabled = true;
      }

      // Check selection state
      if (userAns.selectedIndex === optIdx) {
        optBtn.classList.add('selected');
      }

      // In Practice mode, highlight immediate correct/wrong
      if (state.testMode === 'practice' && userAns.selectedIndex !== null) {
        if (optIdx === q.answer) {
          optBtn.classList.add('correct-ans');
        } else if (userAns.selectedIndex === optIdx) {
          optBtn.classList.add('wrong-ans');
        }
      }

      optBtn.innerHTML = `
        <span class="opt-prefix">${optionPrefixes[optIdx]}</span>
        <span class="opt-text">${escapeHtml(optText)}</span>
      `;

      optBtn.addEventListener('click', () => handleOptionSelect(optIdx));
      DOM.optionsContainer.appendChild(optBtn);
    });

    // Practice mode instant feedback explanation
    if (state.testMode === 'practice' && userAns.selectedIndex !== null) {
      DOM.instantFeedbackBox.style.display = 'block';
      if (userAns.isCorrect) {
        DOM.feedbackResultBadge.className = 'badge-correct';
        DOM.feedbackResultBadge.innerHTML = `<i class="fa-solid fa-circle-check"></i> Correct Answer!`;
      } else {
        DOM.feedbackResultBadge.className = 'badge-wrong';
        DOM.feedbackResultBadge.innerHTML = `<i class="fa-solid fa-circle-xmark"></i> Incorrect! Correct is Option ${optionPrefixes[q.answer]}`;
      }
      DOM.feedbackExplanationText.innerHTML = formatExplanation(q.explanation);
    } else {
      DOM.instantFeedbackBox.style.display = 'none';
    }

    // Navigation buttons state
    DOM.prevBtn.disabled = index === 0;
    
    if (index === state.questions.length - 1) {
      DOM.nextBtn.style.display = 'none';
      DOM.submitQuizBtn.style.display = 'inline-flex';
    } else {
      DOM.nextBtn.style.display = 'inline-flex';
      DOM.submitQuizBtn.style.display = 'none';
    }

    // Status indicator
    updateStatusText();
    updatePaletteActiveItem();
  }

  // --- OPTION SELECTION HANDLER ---
  function handleOptionSelect(optionIndex) {
    const userAns = state.userAnswers[state.currentIndex];
    const q = state.questions[state.currentIndex];

    // In timed exam mode, user can change their choice before moving on.
    // In practice mode, lock once chosen.
    if (state.testMode === 'practice' && userAns.selectedIndex !== null) {
      return;
    }

    userAns.selectedIndex = optionIndex;
    userAns.isCorrect = (optionIndex === q.answer);

    if (userAns.isCorrect) {
      AudioEngine.correct();
    } else {
      AudioEngine.wrong();
    }

    renderQuestion(state.currentIndex);
    renderPalette();
  }

  // --- 50:50 LIFELINE ---
  function useLifeline() {
    const q = state.questions[state.currentIndex];
    const userAns = state.userAnswers[state.currentIndex];

    if (userAns.eliminatedOptions.length > 0 || userAns.selectedIndex !== null) {
      return;
    }

    AudioEngine.click();

    // Find all wrong option indices
    const wrongIndices = [];
    q.options.forEach((_, idx) => {
      if (idx !== q.answer) wrongIndices.push(idx);
    });

    // Shuffle and pick 2 wrong options to eliminate
    for (let i = wrongIndices.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [wrongIndices[i], wrongIndices[j]] = [wrongIndices[j], wrongIndices[i]];
    }

    userAns.eliminatedOptions = wrongIndices.slice(0, 2);
    renderQuestion(state.currentIndex);
  }

  // --- TOGGLE FLAG / BOOKMARK ---
  function toggleFlag() {
    AudioEngine.click();
    const userAns = state.userAnswers[state.currentIndex];
    userAns.flagged = !userAns.flagged;
    renderQuestion(state.currentIndex);
    renderPalette();
  }

  // --- QUESTION PALETTE / MATRIX ---
  function renderPalette() {
    DOM.paletteGrid.innerHTML = '';

    state.questions.forEach((_, idx) => {
      const uAns = state.userAnswers[idx];
      const btn = document.createElement('button');
      btn.className = 'palette-q-btn';
      btn.textContent = idx + 1;

      if (idx === state.currentIndex) {
        btn.classList.add('current');
      }

      if (uAns.selectedIndex !== null) {
        btn.classList.add('answered');
      } else if (uAns.flagged) {
        btn.classList.add('marked');
      }

      btn.addEventListener('click', () => {
        AudioEngine.click();
        state.currentIndex = idx;
        renderQuestion(state.currentIndex);
        closePalette();
      });

      DOM.paletteGrid.appendChild(btn);
    });
  }

  function updatePaletteActiveItem() {
    const buttons = DOM.paletteGrid.querySelectorAll('.palette-q-btn');
    buttons.forEach((btn, idx) => {
      if (idx === state.currentIndex) {
        btn.classList.add('current');
      } else {
        btn.classList.remove('current');
      }
    });
  }

  function openPalette() {
    AudioEngine.click();
    DOM.paletteDrawer.classList.add('open');
    DOM.paletteOverlay.classList.add('open');
  }

  function closePalette() {
    DOM.paletteDrawer.classList.remove('open');
    DOM.paletteOverlay.classList.remove('open');
  }

  function updateStatusText() {
    const answeredCount = state.userAnswers.filter(a => a.selectedIndex !== null).length;
    DOM.statusText.textContent = `${answeredCount} of ${state.questions.length} answered`;
    const dot = DOM.questionStatusIndicator.querySelector('.status-dot');
    if (dot) {
      if (answeredCount === state.questions.length) {
        dot.classList.add('active');
      } else {
        dot.classList.remove('active');
      }
    }
  }

  // --- SUBMIT QUIZ & SHOW RESULTS ---
  function submitQuiz(isTimeOut = false) {
    stopTimer();
    AudioEngine.finish();

    // Calculate Metrics
    let correctCount = 0;
    let wrongCount = 0;
    let skippedCount = 0;

    state.userAnswers.forEach(ans => {
      if (ans.selectedIndex === null) {
        skippedCount++;
      } else if (ans.isCorrect) {
        correctCount++;
      } else {
        wrongCount++;
      }
    });

    const total = state.questions.length;
    const percentage = Math.round((correctCount / total) * 100);

    // Update Result Screen DOM
    DOM.finalScoreText.textContent = `${correctCount}/${total}`;
    DOM.finalPercentText.textContent = `${percentage}%`;
    DOM.statCorrectCount.textContent = correctCount;
    DOM.statWrongCount.textContent = wrongCount;
    DOM.statSkippedCount.textContent = skippedCount;

    const timeSpentMins = Math.floor(state.elapsedSeconds / 60);
    const timeSpentSecs = state.elapsedSeconds % 60;
    DOM.statTimeSpent.textContent = `${timeSpentMins.toString().padStart(2, '0')}:${timeSpentSecs.toString().padStart(2, '0')}`;

    // Performance Badge & Headline
    let badgeText = '';
    let headline = '';
    let subtext = '';

    if (percentage >= 80) {
      badgeText = '<i class="fa-solid fa-trophy"></i> Placement Ready 🚀';
      headline = 'Outstanding Performance!';
      subtext = 'Your aptitude and core technical concepts are top-notch. You are well-positioned to clear technical assessment rounds of tier-1 companies!';
      triggerConfetti();
    } else if (percentage >= 60) {
      badgeText = '<i class="fa-solid fa-star"></i> Strong Contender ⭐';
      headline = 'Good Job! Almost There!';
      subtext = 'Solid foundation demonstrated. A quick revision of missed problem types and time optimization will boost your placement score to 90%+!';
    } else {
      badgeText = '<i class="fa-solid fa-book-open"></i> Needs Revision 📚';
      headline = 'Keep Practicing & Learning!';
      subtext = 'Interview preparation takes persistent practice. Check the detailed solutions below to master these authentic interview concepts.';
    }

    DOM.resultReadinessBadge.innerHTML = badgeText;
    DOM.resultHeadline.textContent = headline;
    DOM.resultSubtext.textContent = subtext;

    showScreen('resultScreen');

    // Animate Circular Gauge
    setTimeout(() => {
      const circumference = 2 * Math.PI * 45; // ~282.7
      const offset = circumference - (percentage / 100) * circumference;
      DOM.scoreCircleProgress.style.strokeDasharray = circumference;
      DOM.scoreCircleProgress.style.strokeDashoffset = offset;
    }, 150);
  }

  // --- CONFETTI CELEBRATION ---
  function triggerConfetti() {
    if (typeof confetti === 'function') {
      try {
        confetti({
          particleCount: 90,
          spread: 70,
          origin: { y: 0.6 }
        });
      } catch (e) {
        console.log('Confetti effect:', e);
      }
    }
  }

  // --- DETAILED SOLUTION REVIEW ---
  function renderSolutionReview(filter = 'all') {
    DOM.reviewCardsList.innerHTML = '';

    const optionLetters = ['A', 'B', 'C', 'D'];
    let correctTotal = 0;
    let wrongTotal = 0;

    state.userAnswers.forEach(a => {
      if (a.isCorrect) correctTotal++;
      else if (a.selectedIndex !== null) wrongTotal++;
    });

    DOM.reviewCountAll.textContent = state.questions.length;
    DOM.reviewCountCorrect.textContent = correctTotal;
    DOM.reviewCountWrong.textContent = wrongTotal;

    state.questions.forEach((q, idx) => {
      const uAns = state.userAnswers[idx];
      const isSkipped = uAns.selectedIndex === null;
      const isCorrect = uAns.isCorrect;

      // Filter logic
      if (filter === 'correct' && !isCorrect) return;
      if (filter === 'incorrect' && (isCorrect || isSkipped)) return;

      const card = document.createElement('div');
      card.className = `review-card ${isCorrect ? 'is-correct' : (isSkipped ? 'is-skipped' : 'is-incorrect')}`;

      // Status pill
      let statusPillHtml = '';
      if (isCorrect) {
        statusPillHtml = `<span class="review-status-pill correct"><i class="fa-solid fa-circle-check"></i> Correct</span>`;
      } else if (isSkipped) {
        statusPillHtml = `<span class="review-status-pill skipped"><i class="fa-solid fa-circle-minus"></i> Skipped</span>`;
      } else {
        statusPillHtml = `<span class="review-status-pill incorrect"><i class="fa-solid fa-circle-xmark"></i> Incorrect</span>`;
      }

      // Render Options
      let optionsHtml = '';
      q.options.forEach((opt, optIdx) => {
        let optClass = 'review-opt';
        let prefixLabel = optionLetters[optIdx];

        if (optIdx === q.answer) {
          optClass += ' is-correct-target';
        } else if (uAns.selectedIndex === optIdx && !isCorrect) {
          optClass += ' user-picked-wrong';
        }

        optionsHtml += `
          <div class="${optClass}">
            <strong>${prefixLabel}.</strong>
            <span>${escapeHtml(opt)}</span>
            ${optIdx === q.answer ? '<i class="fa-solid fa-check" style="margin-left:auto;"></i>' : ''}
            ${(uAns.selectedIndex === optIdx && !isCorrect) ? '<i class="fa-solid fa-xmark" style="margin-left:auto;"></i>' : ''}
          </div>
        `;
      });

      // Code snippet inside review if present
      let codeHtml = '';
      if (q.codeSnippet) {
        codeHtml = `
          <div class="code-snippet-box">
            <pre><code>${escapeHtml(q.codeSnippet)}</code></pre>
          </div>
        `;
      }

      card.innerHTML = `
        <div class="review-card-top">
          <div class="review-card-tags">
            <span class="question-tracker-pill">Q${idx + 1}</span>
            <span class="company-tag"><i class="fa-solid fa-building"></i> ${q.company}</span>
            <span class="difficulty-tag ${q.difficulty}">${q.difficulty}</span>
          </div>
          ${statusPillHtml}
        </div>

        <h3 class="review-q-title">${escapeHtml(q.question)}</h3>
        ${codeHtml}

        <div class="review-answers-grid">
          ${optionsHtml}
        </div>

        <div class="review-explanation-box">
          <h4><i class="fa-solid fa-lightbulb"></i> Step-by-Step Solution & Concept</h4>
          <div class="review-explanation-text">${formatExplanation(q.explanation)}</div>
        </div>
      `;

      DOM.reviewCardsList.appendChild(card);
    });
  }

  // --- TEXT & MARKDOWN FORMATTERS ---
  function escapeHtml(str) {
    if (!str) return '';
    return str
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#039;');
  }

  function formatExplanation(text) {
    if (!text) return '';
    // Format bold **text** to <strong>
    let formatted = text.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
    // Format inline code `code`
    formatted = formatted.replace(/`([^`]+)`/g, '<code style="background:rgba(255,255,255,0.08);padding:2px 6px;border-radius:4px;color:#38bdf8;">$1</code>');
    return formatted;
  }

  // --- EVENT BINDINGS ---
  function bindEvents() {
    // Theme & Sound toggles
    DOM.themeToggleBtn.addEventListener('click', toggleTheme);
    DOM.soundToggleBtn.addEventListener('click', toggleSound);

    // Header Home logo
    DOM.homeLogoBtn.addEventListener('click', () => {
      AudioEngine.click();
      if (document.getElementById('quizScreen').classList.contains('active-view')) {
        if (confirm('Are you sure you want to exit the current test? Your progress will be lost.')) {
          stopTimer();
          showScreen('homeScreen');
        }
      } else {
        showScreen('homeScreen');
      }
    });

    // Quit test button
    DOM.quitQuizBtn.addEventListener('click', () => {
      AudioEngine.click();
      if (confirm('Do you want to submit your test now or exit to home?')) {
        submitQuiz(false);
      }
    });

    // Number of Questions selector
    DOM.questionCountSelector.addEventListener('click', (e) => {
      const btn = e.target.closest('.pill-opt');
      if (!btn) return;
      AudioEngine.click();
      DOM.questionCountSelector.querySelectorAll('.pill-opt').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      state.questionCount = parseInt(btn.getAttribute('data-value'), 10);
    });

    // Test Mode selector (Timed vs Practice)
    DOM.testModeSelector.addEventListener('click', (e) => {
      const btn = e.target.closest('.pill-opt');
      if (!btn) return;
      AudioEngine.click();
      DOM.testModeSelector.querySelectorAll('.pill-opt').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      state.testMode = btn.getAttribute('data-mode');
    });

    // Domain Card Clicks
    DOM.domainCards.forEach(card => {
      card.addEventListener('click', () => {
        const domain = card.getAttribute('data-domain');
        startQuiz(domain);
      });
    });

    // Quiz Navigation Buttons
    DOM.prevBtn.addEventListener('click', () => {
      if (state.currentIndex > 0) {
        AudioEngine.click();
        state.currentIndex--;
        renderQuestion(state.currentIndex);
      }
    });

    DOM.nextBtn.addEventListener('click', () => {
      if (state.currentIndex < state.questions.length - 1) {
        AudioEngine.click();
        state.currentIndex++;
        renderQuestion(state.currentIndex);
      }
    });

    DOM.submitQuizBtn.addEventListener('click', () => {
      const unanswered = state.userAnswers.filter(a => a.selectedIndex === null).length;
      if (unanswered > 0) {
        if (confirm(`You have ${unanswered} unanswered question(s). Are you sure you want to submit the test?`)) {
          submitQuiz(false);
        }
      } else {
        submitQuiz(false);
      }
    });

    // Lifeline & Flag Buttons
    DOM.lifelineBtn.addEventListener('click', useLifeline);
    DOM.flagQuestionBtn.addEventListener('click', toggleFlag);

    // Palette Drawer
    DOM.paletteToggleBtn.addEventListener('click', openPalette);
    DOM.closePaletteBtn.addEventListener('click', closePalette);
    DOM.paletteOverlay.addEventListener('click', closePalette);

    // Copy Code snippet button
    if (DOM.copyCodeBtn) {
      DOM.copyCodeBtn.addEventListener('click', () => {
        const code = DOM.codeSnippetContent.textContent;
        navigator.clipboard.writeText(code).then(() => {
          DOM.copyCodeBtn.innerHTML = '<i class="fa-solid fa-check" style="color:#10b981;"></i>';
          setTimeout(() => {
            DOM.copyCodeBtn.innerHTML = '<i class="fa-regular fa-copy"></i>';
          }, 1500);
        });
      });
    }

    // Result Screen Actions
    DOM.viewSolutionsBtn.addEventListener('click', () => {
      AudioEngine.click();
      renderSolutionReview('all');
      showScreen('reviewScreen');
    });

    DOM.retakeQuizBtn.addEventListener('click', () => {
      startQuiz(state.domain);
    });

    DOM.backToHomeBtn.addEventListener('click', () => {
      AudioEngine.click();
      showScreen('homeScreen');
    });

    // Review Screen Actions
    DOM.backToResultBtn.addEventListener('click', () => {
      AudioEngine.click();
      showScreen('resultScreen');
    });

    DOM.reviewFilters.forEach(btn => {
      btn.addEventListener('click', () => {
        AudioEngine.click();
        DOM.reviewFilters.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        const filter = btn.getAttribute('data-filter');
        renderSolutionReview(filter);
      });
    });

    // Keyboard Shortcuts (1-4, A-D for options, Left/Right arrows for nav)
    window.addEventListener('keydown', (e) => {
      if (!document.getElementById('quizScreen').classList.contains('active-view')) {
        return;
      }

      const key = e.key.toLowerCase();
      if (['1', 'a'].includes(key)) handleOptionSelect(0);
      else if (['2', 'b'].includes(key)) handleOptionSelect(1);
      else if (['3', 'c'].includes(key)) handleOptionSelect(2);
      else if (['4', 'd'].includes(key)) handleOptionSelect(3);
      else if (e.key === 'ArrowLeft' && state.currentIndex > 0) {
        DOM.prevBtn.click();
      } else if (e.key === 'ArrowRight' && state.currentIndex < state.questions.length - 1) {
        DOM.nextBtn.click();
      }
    });
  }

  // Run on DOM ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
