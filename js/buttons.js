/**
 * Template Button Generator
 * Dynamically generates template selector buttons from a data array
 */

const TEMPLATES = [
  { id: 'aurora', name: 'Aurora' },
  { id: 'brutalist', name: 'Brutalist' },
  { id: 'bento', name: 'Bento' },
  { id: 'cyber-glow', name: 'Cyber-glow' },
  { id: 'editorial', name: 'Editorial' },
  { id: 'noir', name: 'Noir' },
  { id: 'retro-desktop', name: 'Retro Desktop' },
  { id: 'schematic', name: 'Schematic' },
  { id: 'SysOps_Dark', name: 'SysOps Dark' },
  { id: 'vapowave', name: 'Vapowave' },
];

/**
 * Generates template buttons and injects them into the DOM
 */
function generateTemplateButtons() {
  const templateSelector = document.querySelector('.template-selector');
  
  if (!templateSelector) {
    console.error('Template selector not found');
    return;
  }

  // Clear existing buttons (keep the h2)
  const existingButtons = templateSelector.querySelectorAll('.template-btn');
  existingButtons.forEach(btn => btn.remove());

  // Create and append buttons
  TEMPLATES.forEach(template => {
    const button = createTemplateButton(template.id, template.name);
    templateSelector.appendChild(button);
  });
}

/**
 * Creates a single template button element
 * @param {string} templateId - The template identifier (data-template value)
 * @param {string} displayName - The display name for the button
 * @returns {HTMLButtonElement} The created button element
 */
function createTemplateButton(templateId, displayName) {
  const button = document.createElement('button');
  button.className = 'template-btn';
  button.setAttribute('data-template', templateId);
  
  const titleSpan = document.createElement('span');
  titleSpan.className = 'btn-title';
  titleSpan.textContent = displayName;
  
  button.appendChild(titleSpan);
  return button;
}

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', generateTemplateButtons);
