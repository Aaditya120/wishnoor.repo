// Enhanced Theme System with Gallery Swapping and Smooth Transitions
document.addEventListener('DOMContentLoaded', () => {
  console.log("Enhanced theme system initializing...");

  // Step 1: Remove any previous theme elements and bottom theme chooser
  document.querySelectorAll('.multi-theme-panel, .multi-theme-btn, .toggle-theme-text, .theme-effect-element, .theme-buttons, [class*="Choose a Theme"]').forEach(el => el.remove());

  // Step 2: Create a simple floating theme button with smoother animation
  const themeButton = document.createElement('button');
  themeButton.id = 'theme-palette-btn';
  themeButton.innerHTML = '<i class="fas fa-palette"></i>';
  themeButton.title = "Theme Gallery";
  document.body.appendChild(themeButton);

  // Step 3: Create enhanced theme panel with previews
  const themePanel = document.createElement('div');
  themePanel.id = 'simple-theme-panel';
  themePanel.innerHTML = `
    <div class="panel-header">
      <h3>Theme Gallery</h3>
      <button class="close-btn">&times;</button>
    </div>
    <div class="theme-search">
      <input type="text" id="theme-search-input" placeholder="Search themes...">
    </div>
    <div class="theme-categories">
      <button class="category-btn active" data-category="all">All</button>
      <button class="category-btn" data-category="light">Light</button>
      <button class="category-btn" data-category="dark">Dark</button>
      <button class="category-btn" data-category="vibrant">Vibrant</button>
    </div>
    <div class="theme-grid">
      <div class="theme-item" data-theme="default" data-category="light">
        <div class="theme-preview" style="background: linear-gradient(135deg, #FFB74D 0%, #FF9800 100%)"></div>
        <div class="theme-label">Classic</div>
      </div>
      <div class="theme-item" data-theme="neon" data-category="dark vibrant">
        <div class="theme-preview" style="background: linear-gradient(135deg, #f72585 0%, #4361ee 100%)"></div>
        <div class="theme-label">Neon</div>
      </div>
      <div class="theme-item" data-theme="pastel" data-category="light">
        <div class="theme-preview" style="background: linear-gradient(135deg, #ffafcc 0%, #a2d2ff 100%)"></div>
        <div class="theme-label">Pastel</div>
      </div>
      <div class="theme-item" data-theme="tropical" data-category="light vibrant">
        <div class="theme-preview" style="background: linear-gradient(135deg, #00b4d8 0%, #02c39a 100%)"></div>
        <div class="theme-label">Tropical</div>
      </div>
      <div class="theme-item" data-theme="galaxy" data-category="dark vibrant">
        <div class="theme-preview" style="background: linear-gradient(135deg, #4a0072 0%, #7b2cbf 100%)"></div>
        <div class="theme-label">Galaxy</div>
      </div>
      <div class="theme-item" data-theme="sunset" data-category="light vibrant">
        <div class="theme-preview" style="background: linear-gradient(135deg, #ff7e5f 0%, #feb47b 100%)"></div>
        <div class="theme-label">Sunset</div>
      </div>
      <div class="theme-item" data-theme="forest" data-category="light">
        <div class="theme-preview" style="background: linear-gradient(135deg, #2d6a4f 0%, #95d5b2 100%)"></div>
        <div class="theme-label">Forest</div>
      </div>
      <div class="theme-item" data-theme="midnight" data-category="dark">
        <div class="theme-preview" style="background: linear-gradient(135deg, #0f2027 0%, #203a43 50%, #2c5364 100%)"></div>
        <div class="theme-label">Midnight</div>
      </div>
    </div>
    <div class="theme-customize-section">
      <button id="customize-theme-btn">Customize Theme</button>
    </div>
  `;
  document.body.appendChild(themePanel);

  // Add customization panel
  const customizePanel = document.createElement('div');
  customizePanel.id = 'theme-customize-panel';
  customizePanel.innerHTML = `
    <div class="panel-header">
      <h3>Customize Theme</h3>
      <button class="back-btn"><i class="fas fa-arrow-left"></i></button>
    </div>
    <div class="customize-controls">
      <div class="control-group">
        <label>Primary Color</label>
        <input type="color" id="primary-color" value="#FF9800">
      </div>
      <div class="control-group">
        <label>Secondary Color</label>
        <input type="color" id="secondary-color" value="#FFB74D">
      </div>
      <div class="control-group">
        <label>Background Color</label>
        <input type="color" id="bg-color" value="#FFFFFF">
      </div>
      <div class="control-group">
        <label>Text Color</label>
        <input type="color" id="text-color" value="#333333">
      </div>
      <div class="control-group">
        <label>Effects Intensity</label>
        <input type="range" id="effects-intensity" min="0" max="100" value="50">
      </div>
      <div class="control-group">
        <label>Animation Speed</label>
        <input type="range" id="animation-speed" min="0" max="100" value="50">
      </div>
    </div>
    <div class="customize-preview">
      <div id="custom-theme-preview"></div>
    </div>
    <button id="apply-custom-theme">Apply Custom Theme</button>
  `;
  document.body.appendChild(customizePanel);

  // Step 4: Add enhanced CSS with smooth transitions
  const styleEl = document.createElement('style');
  styleEl.id = 'enhanced-theme-styles';
  styleEl.textContent = `
    /* Theme Button */
    #theme-palette-btn {
      position: fixed;
      left: 20px;
      bottom: 90px;
      width: 50px;
      height: 50px;
      background: linear-gradient(145deg, #FF9800, #FFB74D);
      color: white;
      border: none;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      box-shadow: 0 3px 10px rgba(0,0,0,0.2);
      z-index: 2000;
      font-size: 1.2rem;
      transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
      overflow: hidden;
    }
    
    #theme-palette-btn::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: linear-gradient(145deg, rgba(255,255,255,0.3), rgba(255,255,255,0));
      border-radius: 50%;
      transform: scale(0);
      transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    }
    
    #theme-palette-btn:hover {
      transform: scale(1.1) rotate(15deg);
      box-shadow: 0 5px 15px rgba(0,0,0,0.3);
    }
    
    #theme-palette-btn:hover::before {
      transform: scale(1);
    }
    
    #theme-palette-btn:active {
      transform: scale(0.95);
    }
    
    /* Theme Panel */
    #simple-theme-panel {
      position: fixed;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%) scale(0.8);
      background: white;
      width: 340px;
      padding: 20px;
      border-radius: 15px;
      box-shadow: 0 10px 30px rgba(0,0,0,0.3);
      z-index: 2001;
      opacity: 0;
      visibility: hidden;
      transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
      max-height: 80vh;
      overflow-y: auto;
    }
    
    #simple-theme-panel.active {
      opacity: 1;
      visibility: visible;
      transform: translate(-50%, -50%) scale(1);
    }
    
    /* Theme Customize Panel */
    #theme-customize-panel {
      position: fixed;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%) scale(0.8);
      background: white;
      width: 340px;
      padding: 20px;
      border-radius: 15px;
      box-shadow: 0 10px 30px rgba(0,0,0,0.3);
      z-index: 2002;
      opacity: 0;
      visibility: hidden;
      transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
      max-height: 80vh;
      overflow-y: auto;
    }
    
    #theme-customize-panel.active {
      opacity: 1;
      visibility: visible;
      transform: translate(-50%, -50%) scale(1);
    }
    
    .panel-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 15px;
      padding-bottom: 10px;
      border-bottom: 1px solid #eee;
    }
    
    .panel-header h3 {
      font-family: 'Pacifico', cursive;
      font-size: 1.5rem;
      color: #FF9800;
      margin: 0;
      transition: color 0.3s ease;
    }
    
    .close-btn, .back-btn {
      background: none;
      border: none;
      font-size: 1.5rem;
      cursor: pointer;
      color: #999;
      transition: color 0.3s ease;
      display: flex;
      align-items: center;
      justify-content: center;
      width: 30px;
      height: 30px;
      border-radius: 50%;
    }
    
    .close-btn:hover, .back-btn:hover {
      color: #333;
      background: #f5f5f5;
    }
    
    .theme-search {
      margin-bottom: 15px;
    }
    
    #theme-search-input {
      width: 100%;
      padding: 10px;
      border: 1px solid #ddd;
      border-radius: 8px;
      font-size: 0.9rem;
      transition: all 0.3s ease;
    }
    
    #theme-search-input:focus {
      border-color: #FF9800;
      box-shadow: 0 0 0 2px rgba(255, 152, 0, 0.2);
      outline: none;
    }
    
    .theme-categories {
      display: flex;
      gap: 8px;
      margin-bottom: 15px;
      flex-wrap: wrap;
    }
    
    .category-btn {
      padding: 6px 12px;
      border: 1px solid #ddd;
      border-radius: 20px;
      background: #f5f5f5;
      font-size: 0.8rem;
      cursor: pointer;
      transition: all 0.3s ease;
    }
    
    .category-btn.active {
      background: #FF9800;
      color: white;
      border-color: #FF9800;
    }
    
    .category-btn:hover:not(.active) {
      background: #eee;
    }
    
    .theme-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 15px;
      margin-bottom: 20px;
    }
    
    .theme-item {
      display: flex;
      flex-direction: column;
      border-radius: 12px;
      overflow: hidden;
      cursor: pointer;
      transition: all 0.3s ease;
      box-shadow: 0 2px 10px rgba(0,0,0,0.1);
      position: relative;
    }
    
    .theme-item::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: rgba(255,255,255,0.1);
      opacity: 0;
      transition: opacity 0.3s ease;
      z-index: 1;
      pointer-events: none;
    }
    
    .theme-item:hover {
      transform: translateY(-5px);
      box-shadow: 0 8px 20px rgba(0,0,0,0.15);
    }
    
    .theme-item:hover::before {
      opacity: 1;
    }
    
    .theme-item:active {
      transform: translateY(-2px);
      box-shadow: 0 4px 10px rgba(0,0,0,0.1);
    }
    
    .theme-preview {
      height: 80px;
      width: 100%;
    }
    
    .theme-label {
      padding: 8px;
      text-align: center;
      background: white;
      font-weight: 500;
      font-size: 0.9rem;
    }
    
    .theme-customize-section {
      text-align: center;
      padding-top: 10px;
    }
    
    #customize-theme-btn {
      background: #f0f0f0;
      border: 1px solid #ddd;
      border-radius: 8px;
      padding: 10px 15px;
      font-size: 0.9rem;
      cursor: pointer;
      transition: all 0.3s ease;
    }
    
    #customize-theme-btn:hover {
      background: #e0e0e0;
    }
    
    /* Customize Panel Styles */
    .customize-controls {
      display: grid;
      gap: 15px;
      margin-bottom: 20px;
    }
    
    .control-group {
      display: flex;
      flex-direction: column;
      gap: 5px;
    }
    
    .control-group label {
      font-size: 0.9rem;
      font-weight: 500;
    }
    
    .control-group input[type="color"] {
      height: 40px;
      border: 1px solid #ddd;
      border-radius: 8px;
    }
    
    .control-group input[type="range"] {
      width: 100%;
    }
    
    .customize-preview {
      margin-bottom: 20px;
      border-radius: 8px;
      overflow: hidden;
      height: 100px;
      box-shadow: 0 2px 10px rgba(0,0,0,0.1);
    }
    
    #custom-theme-preview {
      height: 100%;
      width: 100%;
      background: linear-gradient(135deg, #FF9800, #FFB74D);
      transition: background 0.3s ease;
    }
    
    #apply-custom-theme {
      width: 100%;
      padding: 12px;
      background: #FF9800;
      color: white;
      border: none;
      border-radius: 8px;
      cursor: pointer;
      font-weight: 500;
      transition: all 0.3s ease;
    }
    
    #apply-custom-theme:hover {
      background: #F57C00;
    }
    
    /* Theme specific styles */
    body.theme-neon {
      background: #0c0c2c !important;
      color: #fff !important;
    }
    
    body.theme-neon .hero-section {
      background: linear-gradient(135deg, #0c0c2c 0%, #1a1a4c 100%) !important;
    }
    
    body.theme-neon .card-front {
      background: linear-gradient(135deg, #3a0ca3 0%, #4361ee 100%) !important;
    }
    
    body.theme-neon .card-back {
      background: #1a1a4c !important;
      color: #E0E0E0 !important;
    }
    
    body.theme-neon .section-title {
      background: linear-gradient(135deg, #f72585 0%, #4361ee 100%) !important;
      -webkit-background-clip: text !important;
      -webkit-text-fill-color: transparent !important;
    }
    
    body.theme-neon .countdown-box {
      background: #1a1a4c !important;
    }
    
    body.theme-neon .countdown-value,
    body.theme-neon .countdown-label {
      color: #4cc9f0 !important;
    }
    
    body.theme-neon .gift-section,
    body.theme-neon .wishes-section,
    body.theme-neon .cake-section,
    body.theme-neon .gallery-section,
    body.theme-neon .candle-game-section,
    body.theme-neon .avatar-section {
      background: #0c0c2c !important;
    }
    
    body.theme-neon .gift-box-body {
      background: linear-gradient(135deg, #f72585 0%, #4361ee 100%) !important;
    }
    
    /* Pastel theme */
    body.theme-pastel {
      background: #f8edeb !important;
      color: #774c60 !important;
    }
    
    body.theme-pastel .hero-section {
      background: linear-gradient(135deg, #f8edeb 0%, #ffc8dd 100%) !important;
    }
    
    body.theme-pastel .card-front {
      background: linear-gradient(135deg, #bde0fe 0%, #a2d2ff 100%) !important;
    }
    
    body.theme-pastel .card-back {
      background: #fff0f3 !important;
      color: #774c60 !important;
    }
    
    body.theme-pastel .section-title {
      background: linear-gradient(135deg, #ffafcc 0%, #a2d2ff 100%) !important;
      -webkit-background-clip: text !important;
      -webkit-text-fill-color: transparent !important;
    }
    
    body.theme-pastel .countdown-box {
      background: #fff0f3 !important;
    }
    
    body.theme-pastel .countdown-value,
    body.theme-pastel .countdown-label {
      color: #774c60 !important;
    }
    
    body.theme-pastel .gift-section,
    body.theme-pastel .wishes-section,
    body.theme-pastel .cake-section,
    body.theme-pastel .gallery-section,
    body.theme-pastel .candle-game-section,
    body.theme-pastel .avatar-section {
      background: #f8edeb !important;
    }
    
    body.theme-pastel .gift-box-body {
      background: linear-gradient(135deg, #ffafcc 0%, #ffc8dd 100%) !important;
    }
    
    /* Tropical theme */
    body.theme-tropical {
      background: #caf0f8 !important;
      color: #03045e !important;
    }
    
    body.theme-tropical .hero-section {
      background: linear-gradient(135deg, #caf0f8 0%, #90e0ef 100%) !important;
    }
    
    body.theme-tropical .card-front {
      background: linear-gradient(135deg, #00b4d8 0%, #0077b6 100%) !important;
    }
    
    body.theme-tropical .card-back {
      background: #ade8f4 !important;
      color: #03045e !important;
    }
    
    body.theme-tropical .section-title {
      background: linear-gradient(135deg, #00b4d8 0%, #0077b6 100%) !important;
      -webkit-background-clip: text !important;
      -webkit-text-fill-color: transparent !important;
    }
    
    body.theme-tropical .countdown-box {
      background: #ade8f4 !important;
    }
    
    body.theme-tropical .countdown-value,
    body.theme-tropical .countdown-label {
      color: #03045e !important;
    }
    
    body.theme-tropical .gift-section,
    body.theme-tropical .wishes-section,
    body.theme-tropical .cake-section,
    body.theme-tropical .gallery-section,
    body.theme-tropical .candle-game-section,
    body.theme-tropical .avatar-section {
      background: #caf0f8 !important;
    }
    
    body.theme-tropical .gift-box-body {
      background: linear-gradient(135deg, #00b4d8 0%, #0077b6 100%) !important;
    }
    
    /* Galaxy theme */
    body.theme-galaxy {
      background: #0a0a23 !important;
      color: #e6e6ff !important;
    }
    
    body.theme-galaxy .hero-section {
      background: linear-gradient(135deg, #0a0a23 0%, #1a1a3a 100%) !important;
    }
    
    body.theme-galaxy .card-front {
      background: linear-gradient(135deg, #3c096c 0%, #7b2cbf 100%) !important;
    }
    
    body.theme-galaxy .card-back {
      background: #1a1a3a !important;
      color: #e6e6ff !important;
    }
    
    body.theme-galaxy .section-title {
      background: linear-gradient(135deg, #7b2cbf 0%, #c77dff 100%) !important;
      -webkit-background-clip: text !important;
      -webkit-text-fill-color: transparent !important;
    }
    
    body.theme-galaxy .countdown-box {
      background: #1a1a3a !important;
    }
    
    body.theme-galaxy .countdown-value,
    body.theme-galaxy .countdown-label {
      color: #c77dff !important;
    }
    
    body.theme-galaxy .gift-section,
    body.theme-galaxy .wishes-section,
    body.theme-galaxy .cake-section,
    body.theme-galaxy .gallery-section,
    body.theme-galaxy .candle-game-section,
    body.theme-galaxy .avatar-section {
      background: #0a0a23 !important;
    }
    
    body.theme-galaxy .gift-box-body {
      background: linear-gradient(135deg, #3c096c 0%, #7b2cbf 100%) !important;
    }
    
    /* Sunset theme */
    body.theme-sunset {
      background: #fff4e6 !important;
      color: #774936 !important;
    }
    
    body.theme-sunset .hero-section {
      background: linear-gradient(135deg, #fff4e6 0%, #ffe8d6 100%) !important;
    }
    
    body.theme-sunset .card-front {
      background: linear-gradient(135deg, #ff7e5f 0%, #feb47b 100%) !important;
    }
    
    body.theme-sunset .card-back {
      background: #ffeed6 !important;
      color: #774936 !important;
    }
    
    body.theme-sunset .section-title {
      background: linear-gradient(135deg, #ff7e5f 0%, #feb47b 100%) !important;
      -webkit-background-clip: text !important;
      -webkit-text-fill-color: transparent !important;
    }
    
    body.theme-sunset .countdown-box {
      background: #ffeed6 !important;
    }
    
    body.theme-sunset .countdown-value,
    body.theme-sunset .countdown-label {
      color: #774936 !important;
    }
    
    body.theme-sunset .gift-section,
    body.theme-sunset .wishes-section,
    body.theme-sunset .cake-section,
    body.theme-sunset .gallery-section,
    body.theme-sunset .candle-game-section,
    body.theme-sunset .avatar-section {
      background: #fff4e6 !important;
    }
    
    body.theme-sunset .gift-box-body {
      background: linear-gradient(135deg, #ff7e5f 0%, #feb47b 100%) !important;
    }
    
    /* Forest theme */
    body.theme-forest {
      background: #f0f7f4 !important;
      color: #2d6a4f !important;
    }
    
    body.theme-forest .hero-section {
      background: linear-gradient(135deg, #f0f7f4 0%, #d8f3dc 100%) !important;
    }
    
    body.theme-forest .card-front {
      background: linear-gradient(135deg, #2d6a4f 0%, #52b788 100%) !important;
    }
    
    body.theme-forest .card-back {
      background: #d8f3dc !important;
      color: #2d6a4f !important;
    }
    
    body.theme-forest .section-title {
      background: linear-gradient(135deg, #2d6a4f 0%, #52b788 100%) !important;
      -webkit-background-clip: text !important;
      -webkit-text-fill-color: transparent !important;
    }
    
    body.theme-forest .countdown-box {
      background: #d8f3dc !important;
    }
    
    body.theme-forest .countdown-value,
    body.theme-forest .countdown-label {
      color: #2d6a4f !important;
    }
    
    body.theme-forest .gift-section,
    body.theme-forest .wishes-section,
    body.theme-forest .cake-section,
    body.theme-forest .gallery-section,
    body.theme-forest .candle-game-section,
    body.theme-forest .avatar-section {
      background: #f0f7f4 !important;
    }
    
    body.theme-forest .gift-box-body {
      background: linear-gradient(135deg, #2d6a4f 0%, #52b788 100%) !important;
    }
    
    /* Midnight theme */
    body.theme-midnight {
      background: #0f2027 !important;
      color: #e0e0e0 !important;
    }
    
    body.theme-midnight .hero-section {
      background: linear-gradient(135deg, #0f2027 0%, #203a43 100%) !important;
    }
    
    body.theme-midnight .card-front {
      background: linear-gradient(135deg, #203a43 0%, #2c5364 100%) !important;
    }
    
    body.theme-midnight .card-back {
      background: #203a43 !important;
      color: #e0e0e0 !important;
    }
    
    body.theme-midnight .section-title {
      background: linear-gradient(135deg, #203a43 0%, #2c5364 100%) !important;
      -webkit-background-clip: text !important;
      -webkit-text-fill-color: transparent !important;
    }
    
    body.theme-midnight .countdown-box {
      background: #203a43 !important;
    }
    
    body.theme-midnight .countdown-value,
    body.theme-midnight .countdown-label {
      color: #4ecdc4 !important;
    }
    
    body.theme-midnight .gift-section,
    body.theme-midnight .wishes-section,
    body.theme-midnight .cake-section,
    body.theme-midnight .gallery-section,
    body.theme-midnight .candle-game-section,
    body.theme-midnight .avatar-section {
      background: #0f2027 !important;
    }
    
    body.theme-midnight .gift-box-body {
      background: linear-gradient(135deg, #203a43 0%, #2c5364 100%) !important;
    }
    
    /* Dark mode compatibility */
    body.theme-dark #theme-palette-btn {
      background: linear-gradient(145deg, #81D4FA, #4FC3F7);
      color: #1E1E1E;
    }
    
    body.theme-dark #simple-theme-panel,
    body.theme-dark #theme-customize-panel {
      background: #1E1E1E;
      color: #E0E0E0;
    }
    
    body.theme-dark .panel-header h3 {
      color: #81D4FA;
    }
    
    body.theme-dark .close-btn,
    body.theme-dark .back-btn {
      color: #999;
    }
    
    body.theme-dark .close-btn:hover,
    body.theme-dark .back-btn:hover {
      color: #eee;
      background: #333;
    }
    
    body.theme-dark #theme-search-input {
      background: #333;
      border-color: #444;
      color: #eee;
    }
    
    body.theme-dark .theme-label {
      background: #333;
      color: #eee;
    }
    
    body.theme-dark .category-btn {
      background: #333;
      border-color: #444;
      color: #ddd;
    }
    
    body.theme-dark .category-btn.active {
      background: #81D4FA;
      color: #1E1E1E;
    }
    
    body.theme-dark .category-btn:hover:not(.active) {
      background: #444;
    }
    
    body.theme-dark #customize-theme-btn {
      background: #333;
      border-color: #444;
      color: #ddd;
    }
    
    body.theme-dark #customize-theme-btn:hover {
      background: #444;
    }
    
    /* Enhanced theme transition overlay */
    .theme-transition-overlay {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      z-index: 9999;
      opacity: 0;
      pointer-events: none;
      transition: opacity 0.5s ease;
    }
    
    .theme-transition-overlay.active {
      opacity: 1;
    }
    
    .theme-transition-overlay .transition-content {
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      background: rgba(0, 0, 0, 0.1);
      backdrop-filter: blur(5px);
    }
    
    .theme-transition-overlay .transition-spinner {
      width: 60px;
      height: 60px;
      border: 4px solid rgba(255, 255, 255, 0.3);
      border-radius: 50%;
      border-top-color: #FF9800;
      animation: spin 1s ease-in-out infinite;
    }
    
    @keyframes spin {
      to { transform: rotate(360deg); }
    }
    
    /* Animation keyframes */
    @keyframes fade-in {
      from { opacity: 0; }
      to { opacity: 1; }
    }
    
    @keyframes scale-in {
      from { transform: scale(0.8); opacity: 0; }
      to { transform: scale(1); opacity: 1; }
    }
    
    @keyframes slide-in {
      from { transform: translateY(30px); opacity: 0; }
      to { transform: translateY(0); opacity: 1; }
    }
    
    @keyframes twinkle {
      0% { opacity: 0.3; }
      50% { opacity: 1; }
      100% { opacity: 0.3; }
    }
    
    @keyframes neon-pulse {
      0% { opacity: 0.3; filter: blur(2px); }
      50% { opacity: 0.8; filter: blur(4px); }
      100% { opacity: 0.3; filter: blur(2px); }
    }
    
    @keyframes palm-sway {
      0% { transform: rotate(-5deg); }
      50% { transform: rotate(5deg); }
      100% { transform: rotate(-5deg); }
    }
    
    @keyframes bubble-float {
      0% { transform: translate(0, 0); }
      50% { transform: translate(var(--x, 10px), var(--y, -10px)); }
      100% { transform: translate(0, 0); }
    }
    
    @keyframes rotate-slow {
      from { transform: rotate(0deg); }
      to { transform: rotate(360deg); }
    }
    
    /* Confetti animation */
    @keyframes confetti-fall {
      0% { transform: translateY(-100vh) rotate(0deg); }
      100% { transform: translateY(100vh) rotate(720deg); }
    }
    
    .confetti-container {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      pointer-events: none;
      z-index: 9990;
      overflow: hidden;
    }
    
    .confetti {
      position: absolute;
      width: 10px;
      height: 10px;
      background-color: var(--color);
      opacity: 0.8;
      animation: confetti-fall var(--duration, 3s) ease-in-out forwards;
    }
  `;
  document.head.appendChild(styleEl);

  // Step 5: Create enhanced transition overlay
  const transitionOverlay = document.createElement('div');
  transitionOverlay.className = 'theme-transition-overlay';
  transitionOverlay.innerHTML = `
    <div class="transition-content">
      <div class="transition-spinner"></div>
    </div>
  `;
  document.body.appendChild(transitionOverlay);

  // Create confetti container
  const confettiContainer = document.createElement('div');
  confettiContainer.className = 'confetti-container';
  document.body.appendChild(confettiContainer);

  // Function to create confetti
  function createConfetti(theme) {
    // Clear previous confetti
    confettiContainer.innerHTML = '';

    // Set colors based on theme
    let colors;
    switch(theme) {
      case 'neon':
        colors = ['#f72585', '#4361ee', '#4cc9f0', '#7209b7', '#3a0ca3'];
        break;
      case 'pastel':
        colors = ['#ffafcc', '#bde0fe', '#a2d2ff', '#cdb4db', '#ffc8dd'];
        break;
      case 'tropical':
        colors = ['#00b4d8', '#0077b6', '#90e0ef', '#ade8f4', '#023e8a'];
        break;
      case 'galaxy':
        colors = ['#7b2cbf', '#c77dff', '#e0aaff', '#9d4edd', '#240046'];
        break;
      case 'sunset':
        colors = ['#ff7e5f', '#feb47b', '#ff9e7d', '#ffac91', '#ffbb93'];
        break;
      case 'forest':
        colors = ['#2d6a4f', '#52b788', '#95d5b2', '#d8f3dc', '#1b4332'];
        break;
      case 'midnight':
        colors = ['#0f2027', '#203a43', '#2c5364', '#2b4160', '#356085'];
        break;
      default:
        colors = ['#FF9800', '#FFB74D', '#FFA726', '#FFC107', '#FFD54F'];
    }

    // Create 50 confetti pieces
    for (let i = 0; i < 50; i++) {
      const confetti = document.createElement('div');
      confetti.className = 'confetti';

      const size = Math.random() * 10 + 5;
      const color = colors[Math.floor(Math.random() * colors.length)];
      const left = Math.random() * 100;
      const duration = Math.random() * 3 + 2;
      const delay = Math.random() * 2;

      // Randomly choose between square, circle, and triangle
      const shape = Math.floor(Math.random() * 3);
      if (shape === 0) {
        // Square (default)
      } else if (shape === 1) {
        // Circle
        confetti.style.borderRadius = '50%';
      } else {
        // Triangle (using clip-path)
        confetti.style.clipPath = 'polygon(50% 0%, 0% 100%, 100% 100%)';
      }

      confetti.style.setProperty('--color', color);
      confetti.style.setProperty('--duration', `${duration}s`);
      confetti.style.width = `${size}px`;
      confetti.style.height = `${size}px`;
      confetti.style.left = `${left}%`;
      confetti.style.animationDelay = `${delay}s`;

      confettiContainer.appendChild(confetti);
    }

    // Remove confetti after 5 seconds
    setTimeout(() => {
      confettiContainer.innerHTML = '';
    }, 5000);
  }

  // Step 6: Add event listeners
  // Open panel when clicking the button
  themeButton.addEventListener('click', () => {
    themePanel.classList.add('active');
    try {
      if (typeof playSound === 'function' && window.clickSound) {
        playSound(clickSound);
      }
    } catch(e) {}
  });

  // Close panel with close button
  themePanel.querySelector('.close-btn').addEventListener('click', () => {
    themePanel.classList.remove('active');
    try {
      if (typeof playSound === 'function' && window.clickSound) {
        playSound(clickSound);
      }
    } catch(e) {}
  });

  // Close panel when clicking outside
  document.addEventListener('click', (e) => {
    if (!themePanel.contains(e.target) && !customizePanel.contains(e.target) && e.target !== themeButton) {
      themePanel.classList.remove('active');
      customizePanel.classList.remove('active');
    }
  });

  // Open customize panel
  document.getElementById('customize-theme-btn').addEventListener('click', () => {
    themePanel.classList.remove('active');
    customizePanel.classList.add('active');

    try {
      if (typeof playSound === 'function' && window.clickSound) {
        playSound(clickSound);
      }
    } catch(e) {}
  });

  // Back to theme panel
  customizePanel.querySelector('.back-btn').addEventListener('click', () => {
    customizePanel.classList.remove('active');
    themePanel.classList.add('active');

    try {
      if (typeof playSound === 'function' && window.clickSound) {
        playSound(clickSound);
      }
    } catch(e) {}
  });

  // Live preview for custom theme
  const customPreview = document.getElementById('custom-theme-preview');
  const primaryColor = document.getElementById('primary-color');
  const secondaryColor = document.getElementById('secondary-color');

  function updateCustomPreview() {
    customPreview.style.background = `linear-gradient(135deg, ${primaryColor.value}, ${secondaryColor.value})`;
  }

  primaryColor.addEventListener('input', updateCustomPreview);
  secondaryColor.addEventListener('input', updateCustomPreview);

  // Apply custom theme
  document.getElementById('apply-custom-theme').addEventListener('click', () => {
    const primary = primaryColor.value;
    const secondary = secondaryColor.value;
    const bg = document.getElementById('bg-color').value;
    const text = document.getElementById('text-color').value;

    // Create and add custom theme styles
    let customStyles = document.getElementById('custom-theme-styles');
    if (!customStyles) {
      customStyles = document.createElement('style');
      customStyles.id = 'custom-theme-styles';
      document.head.appendChild(customStyles);
    }

    customStyles.textContent = `
      body.theme-custom {
        background: ${bg} !important;
        color: ${text} !important;
      }
      
      body.theme-custom .hero-section {
        background: linear-gradient(135deg, ${bg} 0%, ${secondary}33 100%) !important;
      }
      
      body.theme-custom .card-front {
        background: linear-gradient(135deg, ${primary} 0%, ${secondary} 100%) !important;
      }
      
      body.theme-custom .card-back {
        background: ${secondary}22 !important;
        color: ${text} !important;
      }
      
      body.theme-custom .section-title {
        background: linear-gradient(135deg, ${primary} 0%, ${secondary} 100%) !important;
        -webkit-background-clip: text !important;
        -webkit-text-fill-color: transparent !important;
      }
      
      body.theme-custom .countdown-box {
        background: ${secondary}22 !important;
      }
      
      body.theme-custom .countdown-value,
      body.theme-custom .countdown-label {
        color: ${primary} !important;
      }
      
      body.theme-custom .gift-section,
      body.theme-custom .wishes-section,
      body.theme-custom .cake-section,
      body.theme-custom .gallery-section,
      body.theme-custom .candle-game-section,
      body.theme-custom .avatar-section {
        background: ${bg} !important;
      }
      
      body.theme-custom .gift-box-body {
        background: linear-gradient(135deg, ${primary} 0%, ${secondary} 100%) !important;
      }
    `;

    // Apply the custom theme
    applyTheme('custom');

    // Save custom theme colors
    localStorage.setItem('custom-theme-primary', primary);
    localStorage.setItem('custom-theme-secondary', secondary);
    localStorage.setItem('custom-theme-bg', bg);
    localStorage.setItem('custom-theme-text', text);

    customizePanel.classList.remove('active');
  });

  // Theme category filtering
  document.querySelectorAll('.category-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      // Update active state
      document.querySelectorAll('.category-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const category = btn.dataset.category;
      const themeItems = document.querySelectorAll('.theme-item');

      themeItems.forEach(item => {
        if (category === 'all' || item.dataset.category.includes(category)) {
          item.style.display = '';
        } else {
          item.style.display = 'none';
        }
      });
    });
  });

  // Theme search functionality
  const searchInput = document.getElementById('theme-search-input');
  searchInput.addEventListener('input', () => {
    const query = searchInput.value.toLowerCase();
    const themeItems = document.querySelectorAll('.theme-item');

    themeItems.forEach(item => {
      const themeName = item.querySelector('.theme-label').textContent.toLowerCase();
      if (themeName.includes(query)) {
        item.style.display = '';
      } else {
        item.style.display = 'none';
      }
    });
  });

  // Function to apply a theme with enhanced transitions
  function applyTheme(theme) {
    // Show transition with loading spinner
    transitionOverlay.classList.add('active');

    setTimeout(() => {
      // Remove all special theme classes
      document.body.classList.remove(
        'theme-neon',
        'theme-pastel',
        'theme-tropical',
        'theme-galaxy',
        'theme-sunset',
        'theme-forest',
        'theme-midnight',
        'theme-custom'
      );

      // Add the new theme if not default
      if (theme !== 'default') {
        document.body.classList.add(`theme-${theme}`);
      }

      // Apply effects to all sections
      applyThemeToAllSections(theme);

      // Swap gallery images
      swapGalleryImages(theme);

      // Change background music
      changeBackgroundMusic(theme);

      // Apply theme-specific visual effects
      applyThemeEffects(theme);

      // Create confetti
      createConfetti(theme);

      // Save theme preference
      localStorage.setItem('birthday-theme', theme);

      // Show message
      try {
        if (typeof showPopupMessage === 'function') {
          showPopupMessage(`Theme applied successfully! 🎨`);
        }
      } catch(e) {}

      // Play sound
      try {
        if (typeof playSound === 'function' && window.clickSound) {
          playSound(clickSound);
        }
      } catch(e) {}

      // Hide transition overlay after animations complete
      setTimeout(() => {
        transitionOverlay.classList.remove('active');
      }, 800);
    }, 400);
  }

  // Apply themes when clicking theme buttons
  themePanel.querySelectorAll('.theme-item').forEach(item => {
    item.addEventListener('click', () => {
      const theme = item.dataset.theme;
      applyTheme(theme);
      themePanel.classList.remove('active');
    });
  });

  // Function to swap gallery images based on theme
  function swapGalleryImages(theme) {
    const gallery = document.getElementById('gallery');
    if (!gallery) return;

    const photoWrappers = gallery.querySelectorAll('.photo-wrapper');

    photoWrappers.forEach((wrapper, index) => {
      const photo = wrapper.querySelector('.photo img');
      if (!photo) return;

      // Reset any existing effects
      photo.style.filter = '';
      photo.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
      wrapper.style.boxShadow = '';
      wrapper.style.transform = '';

      // Fade out the image
      photo.style.opacity = '0';
      photo.style.transform = 'scale(0.9)';

      // After a short delay, change the image source and fade it back in
      setTimeout(() => {
        // Construct the image path based on the theme and index
        const imagePath = `images/${theme}/photo${index + 1}.jpg`;

        // Update the photo source to the new theme-specific image
        photo.src = imagePath;

        // Add an onload handler to fade the image back in when loaded
        photo.onload = function() {
          photo.style.opacity = '1';
          photo.style.transform = 'scale(1)';

          // Apply a subtle theme-specific filter if desired
          switch(theme) {
            case 'neon':
              photo.style.filter = 'brightness(1.1) contrast(1.1)';
              wrapper.style.boxShadow = '0 0 15px rgba(247, 37, 133, 0.3)';
              break;
            case 'pastel':
              photo.style.filter = 'brightness(1.05) contrast(0.95)';
              wrapper.style.boxShadow = '0 5px 15px rgba(255, 175, 204, 0.2)';
              break;
            // Add more theme-specific subtle filters as needed
          }
        };

        // Error handler in case the image doesn't exist
        photo.onerror = function() {
          // Revert to original image or fallback
          photo.src = `images/default/photo${index + 1}.jpg`;
          photo.style.opacity = '1';
          photo.style.transform = 'scale(1)';
        };
      }, 300);
    });
  }

  // Function to change background music based on theme
  function changeBackgroundMusic(theme) {
    const bgMusic = document.getElementById('bgMusic');
    if (!bgMusic) {
      console.log("Background music element '#bgMusic' not found in the DOM.");
      return;
    }

    // Save current playback state
    const wasPlaying = !bgMusic.paused;
    const currentTimePercentage = bgMusic.duration ? bgMusic.currentTime / bgMusic.duration : 0;

    // Store original src if not already stored
    if (!bgMusic.dataset.originalSrc) {
      bgMusic.dataset.originalSrc = bgMusic.src || "assets/sounds/default-theme-music.mp3";
    }

    // Set new music source based on theme
    let newSrc;
    switch (theme) {
      case 'default':
        newSrc = bgMusic.dataset.originalSrc;
        break;
      case 'neon':
        newSrc = "assests/sounds/Apsara Ringtone Ringtone (DjPunjab.is).mp3";
        break;
      case 'pastel':
        newSrc = "assests/sounds/happy-birthday-258264.mp3";
        break;
      case 'tropical':
        newSrc = "assests/sounds/Water - Diljit Dosanjh.mp3";
        break;
      case 'galaxy':
        newSrc = "assests/sounds/Nain - Arjan Dhillon.mp3";
        break;
      case 'sunset':
        newSrc = "assests/sounds/Tareefan - DjPunjab.Com.Se.mp3";
        break;
      case 'forest':
        newSrc = "assests/sounds/Ishq Di Baajiyaan - DjPunjab.Com.Se.mp3";
        break;
      case 'midnight':
        newSrc = "assests/sounds/Mehrma - The Prophec.mp3";
        break;
      case 'custom':
        newSrc = bgMusic.dataset.originalSrc; // Use default for custom
        break;
      default:
        newSrc = bgMusic.dataset.originalSrc;
    }

    // Fade out current audio
    if (wasPlaying) {
      const fadeOutInterval = setInterval(() => {
        if (bgMusic.volume > 0.1) {
          bgMusic.volume -= 0.1;
        } else {
          clearInterval(fadeOutInterval);
          bgMusic.pause();

          // Update the source
          bgMusic.src = newSrc;
          bgMusic.volume = 0;

          // When metadata loaded, set time and fade in
          bgMusic.addEventListener('loadedmetadata', function onLoadedMetadata() {
            if (!isNaN(bgMusic.duration)) {
              bgMusic.currentTime = bgMusic.duration * currentTimePercentage;
            }

            bgMusic.play().then(() => {
              // Fade in
              const fadeInInterval = setInterval(() => {
                if (bgMusic.volume < 0.9) {
                  bgMusic.volume += 0.1;
                } else {
                  bgMusic.volume = 1;
                  clearInterval(fadeInInterval);
                }
              }, 100);
            }).catch(error => {
              console.error(`Error playing audio file '${newSrc}':`, error);
            });

            bgMusic.removeEventListener('loadedmetadata', onLoadedMetadata);
          }, { once: true });
        }
      }, 100);
    } else {
      // Just update the source if not playing
      bgMusic.src = newSrc;
    }

    // Add error listener for debugging
    bgMusic.addEventListener('error', () => {
      console.error(`Failed to load audio file: ${bgMusic.src}`);
    }, { once: true });
  }

  // Function to apply theme effects to all sections with animations
  function applyThemeToAllSections(theme) {
    // Apply to all sections in the site
    const sections = document.querySelectorAll('section');

    sections.forEach((section, index) => {
      // Add animation delay for staggered effect
      const delay = index * 0.1;
      section.style.transition = `background 0.5s ease ${delay}s, color 0.5s ease ${delay}s`;

      // Remove any existing theme-specific classes
      section.classList.remove(
        'theme-neon-section',
        'theme-pastel-section',
        'theme-tropical-section',
        'theme-galaxy-section',
        'theme-sunset-section',
        'theme-forest-section',
        'theme-midnight-section',
        'theme-custom-section'
      );

      // Add theme-specific class if not default
      if (theme !== 'default') {
        section.classList.add(`theme-${theme}-section`);
      }
    });

    // Apply to specific elements that might need theme-specific styling
    document.querySelectorAll('.card, .birthday-cake, .gift-box, .firework-launcher, .wish-note').forEach((element, index) => {
      // Add animation delay
      const delay = index * 0.05 + 0.2;
      element.style.transition = `all 0.5s ease ${delay}s`;

      // Remove existing theme classes
      element.classList.remove(
        'theme-neon-element',
        'theme-pastel-element',
        'theme-tropical-element',
        'theme-galaxy-element',
        'theme-sunset-element',
        'theme-forest-element',
        'theme-midnight-element',
        'theme-custom-element'
      );

      // Add theme-specific class if not default
      if (theme !== 'default') {
        element.classList.add(`theme-${theme}-element`);
      }
    });
  }

  // Enhanced theme effects with smoother transitions
  function applyThemeEffects(theme) {
    // Remove any existing theme effect elements with fade out animation
    document.querySelectorAll('.theme-effect-element').forEach(el => {
      el.style.transition = 'opacity 0.5s ease';
      el.style.opacity = '0';

      setTimeout(() => {
        el.remove();
      }, 500);
    });

    // Wait for removal animation to complete
    setTimeout(() => {
      // Apply different effects based on theme
      switch(theme) {
        case 'galaxy':
          createStarfield();
          break;
        case 'neon':
          createNeonEffects();
          break;
        case 'tropical':
          createTropicalEffects();
          break;
        case 'pastel':
          createPastelEffects();
          break;
        case 'sunset':
          createSunsetEffects();
          break;
        case 'forest':
          createForestEffects();
          break;
        case 'midnight':
          createMidnightEffects();
          break;
      }
    }, 600);
  }

  // Create a starfield for Galaxy theme
  function createStarfield() {
    const starfield = document.createElement('div');
    starfield.className = 'theme-effect-element starfield';
    starfield.style.cssText = `
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      z-index: -1;
      pointer-events: none;
      opacity: 0;
      transition: opacity 1s ease;
    `;

    // Create stars with varying sizes and animations
    for (let i = 0; i < 150; i++) {
      const star = document.createElement('div');
      star.className = 'star';

      const size = Math.random() * 3 + 1;
      const brightnessVar = Math.random() * 0.5 + 0.5; // For varied brightness

      star.style.cssText = `
        position: absolute;
        width: ${size}px;
        height: ${size}px;
        background: rgba(255, 255, 255, ${brightnessVar});
        border-radius: 50%;
        top: ${Math.random() * 100}%;
        left: ${Math.random() * 100}%;
        opacity: ${Math.random() * 0.7 + 0.3};
        animation: twinkle ${Math.random() * 3 + 2}s infinite;
        box-shadow: 0 0 ${size * 2}px rgba(255, 255, 255, 0.8);
      `;
      starfield.appendChild(star);
    }

    // Create 5 shooting stars
    for (let i = 0; i < 5; i++) {
      const shootingStar = document.createElement('div');
      shootingStar.className = 'shooting-star';

      // Random angle
      const angle = Math.random() * 20 - 10;

      shootingStar.style.cssText = `
        position: absolute;
        width: 80px;
        height: 2px;
        background: linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(255,255,255,1) 50%, rgba(255,255,255,0) 100%);
        top: ${Math.random() * 50}%;
        left: -80px;
        opacity: 0.8;
        filter: blur(1px);
        box-shadow: 0 0 10px rgba(255,255,255,0.8), 0 0 20px rgba(255,255,255,0.3);
        transform: rotate(${angle}deg);
        --angle: ${angle}deg;
        animation: shooting-star ${Math.random() * 2 + 3}s linear infinite;
        animation-delay: ${Math.random() * 5}s;
      `;
      starfield.appendChild(shootingStar);
    }

    // Create nebula effects
    for (let i = 0; i < 3; i++) {
      const nebula = document.createElement('div');
      nebula.className = 'nebula';

      const size = Math.random() * 200 + 100;
      const colors = ['rgba(123, 44, 191, 0.2)', 'rgba(199, 125, 255, 0.2)', 'rgba(74, 0, 114, 0.2)'];

      nebula.style.cssText = `
        position: absolute;
        width: ${size}px;
        height: ${size}px;
        background: radial-gradient(ellipse at center, ${colors[i % 3]} 0%, rgba(0,0,0,0) 70%);
        border-radius: 50%;
        top: ${Math.random() * 100}%;
        left: ${Math.random() * 100}%;
        filter: blur(20px);
        opacity: 0;
        animation: fade-in 3s ease forwards, rotate-slow 120s linear infinite;
      `;
      starfield.appendChild(nebula);
    }

    document.body.appendChild(starfield);

    // Fade in the starfield
    setTimeout(() => {
      starfield.style.opacity = '1';
    }, 100);
  }

  // Create enhanced neon effects
  function createNeonEffects() {
    const neonContainer = document.createElement('div');
    neonContainer.className = 'theme-effect-element neon-container';
    neonContainer.style.cssText = `
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      z-index: -1;
      pointer-events: none;
      opacity: 0;
      transition: opacity 1s ease;
    `;

    // Create neon lines with staggered appearance
    const colors = ['#f72585', '#4361ee', '#4cc9f0', '#480ca8'];
    for (let i = 0; i < 12; i++) {
      const line = document.createElement('div');
      line.className = 'neon-line';
      const color = colors[Math.floor(Math.random() * colors.length)];
      const delay = i * 0.2;

      line.style.cssText = `
        position: absolute;
        width: ${Math.random() * 300 + 100}px;
        height: 2px;
        background: ${color};
        box-shadow: 0 0 10px ${color}, 0 0 20px ${color};
        top: ${Math.random() * 100}%;
        left: ${Math.random() * 100}%;
        transform: rotate(${Math.random() * 360}deg);
        opacity: 0;
        animation: fade-in 1s ease forwards ${delay}s, neon-pulse ${Math.random() * 2 + 3}s infinite alternate;
      `;
      neonContainer.appendChild(line);
    }

    // Create neon glow circles
    for (let i = 0; i < 8; i++) {
      const glow = document.createElement('div');
      glow.className = 'neon-glow';
      const color = colors[Math.floor(Math.random() * colors.length)];
      const delay = i * 0.25 + 0.5;
      const size = Math.random() * 300 + 100;

      glow.style.cssText = `
        position: absolute;
        width: ${size}px;
        height: ${size}px;
        background: radial-gradient(circle, ${color}33 0%, ${color}00 70%);
        top: ${Math.random() * 100}%;
        left: ${Math.random() * 100}%;
        opacity: 0;
        border-radius: 50%;
        filter: blur(30px);
        animation: fade-in 2s ease forwards ${delay}s, neon-pulse ${Math.random() * 4 + 4}s infinite alternate;
      `;
      neonContainer.appendChild(glow);
    }

    // Create cyberpunk-style grid lines
    const grid = document.createElement('div');
    grid.className = 'neon-grid';
    grid.style.cssText = `
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 30%;
      background-image: linear-gradient(0deg, ${colors[0]}33 1px, transparent 1px),
                        linear-gradient(90deg, ${colors[1]}33 1px, transparent 1px);
      background-size: 20px 20px;
      background-position: bottom center;
      perspective: 500px;
      transform: rotateX(60deg);
      transform-origin: bottom;
      opacity: 0;
      animation: fade-in 2s ease forwards 1s;
    `;
    neonContainer.appendChild(grid);

    document.body.appendChild(neonContainer);

    // Fade in the container
    setTimeout(() => {
      neonContainer.style.opacity = '1';
    }, 100);
  }

  // Create enhanced tropical effects
  function createTropicalEffects() {
    const tropicalContainer = document.createElement('div');
    tropicalContainer.className = 'theme-effect-element tropical-container';
    tropicalContainer.style.cssText = `
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      z-index: -1;
      pointer-events: none;
      opacity: 0;
      transition: opacity 1s ease;
    `;

    // Create sun
    const sun = document.createElement('div');
    sun.className = 'tropical-sun';
    sun.style.cssText = `
      position: absolute;
      top: 10%;
      right: 10%;
      width: 100px;
      height: 100px;
      background: radial-gradient(circle, #ffdd00 30%, rgba(255, 221, 0, 0) 70%);
      border-radius: 50%;
      filter: blur(5px);
      opacity: 0;
      animation: fade-in 2s ease forwards;
    `;
    tropicalContainer.appendChild(sun);

    // Create palm trees with staggered animation
    const palmPositions = [
      { bottom: 0, left: '5%', rotate: -5 },
      { bottom: 0, left: '15%', rotate: 5 },
      { bottom: 0, right: '5%', rotate: 5 },
      { bottom: 0, right: '15%', rotate: -5 }
    ];

    palmPositions.forEach((pos, i) => {
      const palm = document.createElement('div');
      palm.className = 'palm-tree';

      const positionStyle = Object.entries(pos)
        .map(([key, value]) => `${key}: ${value}${typeof value === 'number' ? 'deg' : ''};`)
        .join(' ');

      const delay = i * 0.3;

      palm.style.cssText = `
        position: absolute;
        ${positionStyle}
        width: 120px;
        height: 240px;
        background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 240"><rect x="55" y="100" width="10" height="140" fill="%23A0522D"/><path d="M60,0 C40,50 10,40 10,80 C60,70 60,70 110,80 C110,40 80,50 60,0" fill="%2300b4d8"/></svg>');
        background-size: contain;
        background-repeat: no-repeat;
        transform-origin: bottom center;
        opacity: 0;
        animation: fade-in 1s ease forwards ${delay}s, palm-sway 8s ease-in-out infinite;
      `;
      tropicalContainer.appendChild(palm);
    });

    // Create ocean waves
    const ocean = document.createElement('div');
    ocean.className = 'tropical-ocean';
    ocean.style.cssText = `
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 10%;
      background: linear-gradient(0deg, #0077b6 0%, #00b4d8 100%);
      opacity: 0;
      animation: fade-in 2s ease forwards 0.5s;
    `;

    // Add wave mask
    const waveMask = document.createElement('div');
    waveMask.className = 'wave-mask';
    waveMask.style.cssText = `
      position: absolute;
      top: -20px;
      left: 0;
      width: 100%;
      height: 20px;
      background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 30"><path d="M0,30 C100,10 200,0 300,10 C400,20 500,30 600,20 C700,10 800,0 900,10 C1000,20 1100,30 1200,20 L1200,30 L0,30 Z" fill="%2300b4d8"/></svg>');
      background-size: 1200px 30px;
      background-repeat: repeat-x;
      animation: wave-move 20s linear infinite;
    `;
    ocean.appendChild(waveMask);

    tropicalContainer.appendChild(ocean);

    // Create clouds
    for (let i = 0; i < 5; i++) {
      const cloud = document.createElement('div');
      cloud.className = 'tropical-cloud';

      const size = Math.random() * 100 + 50;
      const top = Math.random() * 30 + 5;
      const delay = i * 0.4;
      const duration = Math.random() * 100 + 100;
      const startPos = Math.random() * 100 - 20;

      cloud.style.cssText = `
        position: absolute;
        width: ${size}px;
        height: ${size * 0.6}px;
        top: ${top}%;
        left: ${startPos}%;
        background: rgba(255, 255, 255, 0.8);
        border-radius: 50px;
        filter: blur(5px);
        opacity: 0;
        animation: fade-in 2s ease forwards ${delay}s, cloud-move ${duration}s linear infinite;
      `;

      // Add additional blobs to make cloud shape
      for (let j = 0; j < 3; j++) {
        const blob = document.createElement('div');
        blob.style.cssText = `
          position: absolute;
          width: ${size * (0.3 + Math.random() * 0.3)}px;
          height: ${size * (0.3 + Math.random() * 0.3)}px;
          top: ${Math.random() * 20}%;
          left: ${j * 30 + Math.random() * 10}%;
          background: rgba(255, 255, 255, 0.8);
          border-radius: 50%;
          filter: blur(5px);
        `;
        cloud.appendChild(blob);
      }

      tropicalContainer.appendChild(cloud);
    }

    document.body.appendChild(tropicalContainer);

    // Add the animation if it doesn't exist
    if (!document.getElementById('tropical-animation')) {
      const style = document.createElement('style');
      style.id = 'tropical-animation';
      style.textContent = `
        @keyframes palm-sway {
          0% { transform: rotate(calc(var(--rotate, 0deg) - 5deg)); }
          50% { transform: rotate(calc(var(--rotate, 0deg) + 5deg)); }
          100% { transform: rotate(calc(var(--rotate, 0deg) - 5deg)); }
        }
        
        @keyframes wave-move {
          0% { background-position-x: 0; }
          100% { background-position-x: 1200px; }
        }
        
        @keyframes cloud-move {
          0% { transform: translateX(0); }
          100% { transform: translateX(calc(100vw + 150px)); }
        }
      `;
      document.head.appendChild(style);
    }

    // Fade in
    setTimeout(() => {
      tropicalContainer.style.opacity = '1';
    }, 100);
  }

  // Create enhanced pastel effects
  function createPastelEffects() {
    const pastelContainer = document.createElement('div');
    pastelContainer.className = 'theme-effect-element pastel-container';
    pastelContainer.style.cssText = `
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      z-index: -1;
      pointer-events: none;
      opacity: 0;
      transition: opacity 1s ease;
    `;

    // Create floating bubbles with staggered animation
    const colors = ['#ffafcc', '#bde0fe', '#a2d2ff', '#cdb4db', '#ffc8dd'];
    for (let i = 0; i < 20; i++) {
      const bubble = document.createElement('div');
      bubble.className = 'pastel-bubble';
      const color = colors[Math.floor(Math.random() * colors.length)];
      const size = Math.random() * 70 + 30;
      const delay = i * 0.15;

      // Random x,y movement values
      const xMove = Math.random() * 100 - 50;
      const yMove = Math.random() * 100 - 50;

      bubble.style.cssText = `
        position: absolute;
        width: ${size}px;
        height: ${size}px;
        background: ${color};
        border-radius: 50%;
        top: ${Math.random() * 100}%;
        left: ${Math.random() * 100}%;
        opacity: 0;
        filter: blur(${Math.random() * 3 + 1}px);
        --x: ${xMove}px;
        --y: ${yMove}px;
        animation: fade-in 1s ease forwards ${delay}s, bubble-float ${Math.random() * 10 + 10}s infinite ease-in-out;
      `;
      pastelContainer.appendChild(bubble);
    }

    // Create soft gradient background
    const gradientOverlay = document.createElement('div');
    gradientOverlay.className = 'pastel-gradient-overlay';
    gradientOverlay.style.cssText = `
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: radial-gradient(circle at 70% 20%, rgba(255, 175, 204, 0.2) 0%, rgba(255, 175, 204, 0) 50%),
                  radial-gradient(circle at 30% 70%, rgba(189, 224, 254, 0.2) 0%, rgba(189, 224, 254, 0) 50%);
      opacity: 0;
      animation: fade-in 2s ease forwards 0.5s;
    `;
    pastelContainer.appendChild(gradientOverlay);

    // Add rainbow
    const rainbow = document.createElement('div');
    rainbow.className = 'pastel-rainbow';
    rainbow.style.cssText = `
      position: absolute;
      top: 20%;
      left: 10%;
      width: 300px;
      height: 150px;
      background: radial-gradient(ellipse at top, transparent 49%, #ffafcc 50%, #ffafcc 60%, #bde0fe 60%, #bde0fe 70%, #a2d2ff 70%, #a2d2ff 80%, #cdb4db 80%, #cdb4db 90%, #ffc8dd 90%, #ffc8dd 100%);
      background-size: 300px 300px;
      background-repeat: no-repeat;
      opacity: 0;
      filter: blur(3px);
      transform: rotate(180deg);
      animation: fade-in 3s ease forwards 1s;
    `;
    pastelContainer.appendChild(rainbow);

    document.body.appendChild(pastelContainer);

    // Fade in
    setTimeout(() => {
      pastelContainer.style.opacity = '1';
    }, 100);
  }

  // Create sunset effects
  function createSunsetEffects() {
    const sunsetContainer = document.createElement('div');
    sunsetContainer.className = 'theme-effect-element sunset-container';
    sunsetContainer.style.cssText = `
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      z-index: -1;
      pointer-events: none;
      opacity: 0;
      transition: opacity 1s ease;
    `;

    // Create sunset gradient
    const sunsetGradient = document.createElement('div');
    sunsetGradient.className = 'sunset-gradient';
    sunsetGradient.style.cssText = `
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: linear-gradient(0deg, #ff7e5f 0%, #feb47b 30%, #fff4e6 100%);
      opacity: 0;
      animation: fade-in 2s ease forwards;
    `;
    sunsetContainer.appendChild(sunsetGradient);

    // Create sun
    const sun = document.createElement('div');
    sun.className = 'sunset-sun';
    sun.style.cssText = `
      position: absolute;
      bottom: 20%;
      left: 50%;
      transform: translateX(-50%);
      width: 100px;
      height: 100px;
      background: radial-gradient(circle, #ff7e5f 30%, rgba(255, 126, 95, 0) 70%);
      border-radius: 50%;
      filter: blur(5px);
      opacity: 0;
      animation: fade-in 3s ease forwards 0.5s;
    `;
    sunsetContainer.appendChild(sun);

    // Create mountains
    const mountains = document.createElement('div');
    mountains.className = 'sunset-mountains';
    mountains.style.cssText = `
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 30%;
      background-image: 
        url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 200"><path d="M0,200 L0,100 L200,150 L400,60 L600,120 L800,80 L1000,140 L1200,90 L1200,200 Z" fill="%23774936"/></svg>'),
        url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 200"><path d="M0,200 L0,130 L100,140 L300,100 L500,150 L700,120 L900,160 L1100,110 L1200,130 L1200,200 Z" fill="%23995744"/></svg>');
      background-size: 100% 100%;
      background-repeat: no-repeat;
      opacity: 0;
      animation: fade-in 2s ease forwards 1s;
    `;
    sunsetContainer.appendChild(mountains);

    // Create birds
    for (let i = 0; i < 10; i++) {
      const bird = document.createElement('div');
      bird.className = 'sunset-bird';

      const size = Math.random() * 5 + 5;
      const top = Math.random() * 40 + 10;
      const left = Math.random() * 80 + 10;
      const delay = i * 0.2 + 1.5;

      bird.style.cssText = `
        position: absolute;
        top: ${top}%;
        left: ${left}%;
        width: ${size}px;
        height: ${size / 2}px;
        background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 10 5"><path d="M0,2.5 Q2.5,0 5,2.5 Q7.5,0 10,2.5" stroke="%23774936" stroke-width="0.5" fill="none" /></svg>');
        background-size: contain;
        background-repeat: no-repeat;
        opacity: 0;
        animation: fade-in 1s ease forwards ${delay}s, bird-fly 20s linear infinite;
        animation-delay: ${delay}s, ${delay + 1}s;
      `;
      sunsetContainer.appendChild(bird);
    }

    document.body.appendChild(sunsetContainer);

    // Add the animation if it doesn't exist
    if (!document.getElementById('sunset-animation')) {
      const style = document.createElement('style');
      style.id = 'sunset-animation';
      style.textContent = `
        @keyframes bird-fly {
          0% { transform: translateX(0) translateY(0); }
          25% { transform: translateX(20px) translateY(-10px); }
          50% { transform: translateX(40px) translateY(0); }
          75% { transform: translateX(60px) translateY(-5px); }
          100% { transform: translateX(80px) translateY(0); }
        }
      `;
      document.head.appendChild(style);
    }

    // Fade in
    setTimeout(() => {
      sunsetContainer.style.opacity = '1';
    }, 100);
  }

  // Create forest effects
  function createForestEffects() {
    const forestContainer = document.createElement('div');
    forestContainer.className = 'theme-effect-element forest-container';
    forestContainer.style.cssText = `
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      z-index: -1;
      pointer-events: none;
      opacity: 0;
      transition: opacity 1s ease;
    `;

    // Create trees
    const treeColors = ['#2d6a4f', '#40916c', '#52b788', '#95d5b2'];
    const treePositions = [
      { bottom: 0, left: '5%', scale: 1.0 },
      { bottom: 0, left: '15%', scale: 0.8 },
      { bottom: 0, left: '25%', scale: 1.2 },
      { bottom: 0, left: '60%', scale: 0.9 },
      { bottom: 0, left: '75%', scale: 1.1 },
      { bottom: 0, left: '85%', scale: 0.7 }
    ];

    treePositions.forEach((pos, i) => {
      const tree = document.createElement('div');
      tree.className = 'forest-tree';

      const color = treeColors[Math.floor(Math.random() * treeColors.length)];
      const positionStyle = Object.entries(pos)
        .filter(([key]) => key !== 'scale')
        .map(([key, value]) => `${key}: ${value};`)
        .join(' ');

      const delay = i * 0.2;

      tree.style.cssText = `
        position: absolute;
        ${positionStyle}
        width: 100px;
        height: 150px;
        transform: scale(${pos.scale});
        transform-origin: bottom center;
        opacity: 0;
        animation: fade-in 1s ease forwards ${delay}s;
      `;

      // Create trunk
      const trunk = document.createElement('div');
      trunk.style.cssText = `
        position: absolute;
        bottom: 0;
        left: 45%;
        width: 10%;
        height: 40%;
        background: #6b4f2d;
      `;
      tree.appendChild(trunk);

      // Create tree parts (triangles)
      for (let j = 0; j < 3; j++) {
        const treePart = document.createElement('div');
        treePart.style.cssText = `
          position: absolute;
          bottom: ${30 + j * 20}%;
          left: 20%;
          width: 60%;
          height: 40%;
          background: ${color};
          clip-path: polygon(0% 100%, 50% 0%, 100% 100%);
        `;
        tree.appendChild(treePart);
      }

      forestContainer.appendChild(tree);
    });

    // Create falling leaves
    const leaves = document.createElement('div');
    leaves.className = 'forest-leaves';
    leaves.style.cssText = `
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
    `;

    for (let i = 0; i < 20; i++) {
      const leaf = document.createElement('div');
      leaf.className = 'forest-leaf';

      const size = Math.random() * 10 + 5;
      const color = treeColors[Math.floor(Math.random() * treeColors.length)];
      const delay = i * 0.3 + 1;
      const duration = Math.random() * 10 + 10;
      const left = Math.random() * 100;

      leaf.style.cssText = `
        position: absolute;
        top: -${size}px;
        left: ${left}%;
        width: ${size}px;
        height: ${size}px;
        background: ${color};
        border-radius: 50% 0 50% 0;
        transform: rotate(${Math.random() * 360}deg);
        opacity: 0;
        animation: fade-in 1s ease forwards ${delay}s, leaf-fall ${duration}s linear infinite;
        animation-delay: ${delay}s, ${delay + 1}s;
      `;
      leaves.appendChild(leaf);
    }

    forestContainer.appendChild(leaves);

    // Create subtle mist
    const mist = document.createElement('div');
    mist.className = 'forest-mist';
    mist.style.cssText = `
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 20%;
      background: linear-gradient(0deg, rgba(255, 255, 255, 0.3) 0%, rgba(255, 255, 255, 0) 100%);
      opacity: 0;
      animation: fade-in 3s ease forwards 2s;
    `;
    forestContainer.appendChild(mist);

    document.body.appendChild(forestContainer);

    // Add the animation if it doesn't exist
    if (!document.getElementById('forest-animation')) {
      const style = document.createElement('style');
      style.id = 'forest-animation';
      style.textContent = `
        @keyframes leaf-fall {
          0% { 
            top: -10px; 
            transform: translateX(0) rotate(0deg); 
          }
          100% { 
            top: 100vh; 
            transform: translateX(100px) rotate(720deg); 
          }
        }
        
        @keyframes tree-sway {
          0% { transform: scale(var(--scale, 1)) rotate(-1deg); }
          50% { transform: scale(var(--scale, 1)) rotate(1deg); }
          100% { transform: scale(var(--scale, 1)) rotate(-1deg); }
        }
      `;
      document.head.appendChild(style);
    }

    // Fade in
    setTimeout(() => {
      forestContainer.style.opacity = '1';

      // Add subtle tree movement after fade in
      document.querySelectorAll('.forest-tree').forEach((tree) => {
        tree.style.animation += ', tree-sway 10s ease-in-out infinite';
      });
    }, 100);
  }

  // Create midnight effects
  function createMidnightEffects() {
    const midnightContainer = document.createElement('div');
    midnightContainer.className = 'theme-effect-element midnight-container';
    midnightContainer.style.cssText = `
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      z-index: -1;
      pointer-events: none;
      opacity: 0;
      transition: opacity 1s ease;
    `;

    // Create cityscape silhouette
    const cityscape = document.createElement('div');
    cityscape.className = 'midnight-cityscape';
    cityscape.style.cssText = `
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 30%;
      background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 200"><path d="M0,200 L0,120 L50,120 L50,100 L70,100 L70,110 L80,110 L80,90 L100,90 L100,120 L120,120 L120,80 L140,80 L140,120 L180,120 L180,150 L200,150 L200,100 L220,100 L220,130 L240,130 L240,120 L260,120 L260,140 L280,140 L280,120 L300,120 L300,100 L320,100 L320,130 L340,130 L340,110 L360,110 L360,140 L400,140 L400,90 L420,90 L420,70 L440,70 L440,90 L460,90 L460,130 L480,130 L480,150 L500,150 L500,100 L520,100 L520,120 L540,120 L540,80 L560,80 L560,110 L580,110 L580,130 L600,130 L600,110 L640,110 L640,140 L660,140 L660,120 L680,120 L680,150 L700,150 L700,120 L720,120 L720,100 L760,100 L760,130 L780,130 L780,110 L800,110 L800,140 L820,140 L820,120 L840,120 L840,90 L880,90 L880,110 L900,110 L900,130 L920,130 L920,150 L940,150 L940,100 L960,100 L960,130 L980,130 L980,150 L1000,150 L1000,120 L1020,120 L1020,100 L1040,100 L1040,130 L1060,130 L1060,110 L1080,110 L1080,140 L1100,140 L1100,120 L1120,120 L1120,100 L1140,100 L1140,130 L1160,130 L1160,150 L1180,150 L1180,120 L1200,120 L1200,200 Z" fill="%23080D11"/></svg>');
      background-size: 100% 100%;
      background-repeat: no-repeat;
      opacity: 0;
      animation: fade-in 2s ease forwards 1s;
      `;
      midnightContainer.appendChild(cityscape);

      // Create stars
      const stars = document.createElement('div');
      stars.className = 'midnight-stars';
      stars.style.cssText = `
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
      `;

      for (let i = 0; i < 100; i++) {
        const star = document.createElement('div');
        star.className = 'midnight-star';

        const size = Math.random() * 2 + 1;
        const left = Math.random() * 100;
        const top = Math.random() * 80;
        const delay = Math.random() * 3;
        const duration = Math.random() * 2 + 1;

        star.style.cssText = `
          position: absolute;
          top: ${top}%;
          left: ${left}%;
          width: ${size}px;
          height: ${size}px;
          background: white;
          border-radius: 50%;
          opacity: 0;
          animation: fade-in 1s ease forwards ${delay}s, twinkle ${duration}s infinite;
          animation-delay: ${delay}s, ${delay}s;
        `;
        stars.appendChild(star);
      }

      midnightContainer.appendChild(stars);

      // Create moon
      const moon = document.createElement('div');
      moon.className = 'midnight-moon';
      moon.style.cssText = `
        position: absolute;
        top: 10%;
        right: 10%;
        width: 80px;
        height: 80px;
        border-radius: 50%;
        background: radial-gradient(circle at 65% 15%, #fff 1px, #fff 3%, #e6e6e6 60%, #c9c9c9 100%);
        opacity: 0;
        animation: fade-in 3s ease forwards 1.5s;
      `;
      midnightContainer.appendChild(moon);

      document.body.appendChild(midnightContainer);

      // Add the animation if it doesn't exist
      if (!document.getElementById('midnight-animation')) {
        const style = document.createElement('style');
        style.id = 'midnight-animation';
        style.textContent = `
          @keyframes twinkle {
            0% { opacity: 1; }
            50% { opacity: 0.3; }
            100% { opacity: 1; }
          }
        `;
        document.head.appendChild(style);
      }

      // Fade in
      setTimeout(() => {
        midnightContainer.style.opacity = '1';
      }, 100);
    }

    // Load previously saved theme on page load
    window.addEventListener('DOMContentLoaded', () => {
      const savedTheme = localStorage.getItem('birthday-theme');
      if (savedTheme) {
        applyTheme(savedTheme);

        // Set the custom theme values if applied
        if (savedTheme === 'custom') {
          const primaryColor = document.getElementById('primary-color');
          const secondaryColor = document.getElementById('secondary-color');
          primaryColor.value = localStorage.getItem('custom-theme-primary') || '#FF9800';
          secondaryColor.value = localStorage.getItem('custom-theme-secondary') || '#FFB74D';
          updateCustomPreview();
        }
      }
    });

    console.log("Enhanced theme system initialized.");
  });