document.addEventListener('DOMContentLoaded', () => {
    const modal = document.createElement('div');
    modal.className = 'modal';
    modal.innerHTML = `
        <div class="modal-content">
            <span class="close-button">&times;</span>
            <div class="modal-body">
                <img class="modal-image" src="" alt="">
                <h2 class="modal-title"></h2>
                <p class="modal-description"></p>
            </div>
        </div>
    `;
    document.body.appendChild(modal);

    const projectDetails = {
        'n8n': {
            title: 'n8n Workflow Automation',
            description: `
Workflow Process Explanation:

1. Initial Trigger Setup
   • "Test workflow" button initiates the process
   • System validates user permissions and input
   • Prepares execution environment

2. Google Drive Integration
   • Connects to Google Drive API
   • Downloads specified file
   • Validates file integrity and format

3. Vector Store Processing
   • Pinecone Vector Store receives the document
   • Processes document for embedding
   • Creates searchable vector representations

4. AI Processing Pipeline
   • OpenAI embeddings generation
   • Text processing and analysis
   • Vector similarity computations

5. Data Loading & Recursion
   • Default data loader processes information
   • Implements recursive character text analysis
   • Generates final output format

Benefits:
• Automated document processing
• Intelligent data extraction
• Seamless tool integration
• Real-time workflow monitoring
• Error handling and recovery`
        },
        'LLM&RAG': {
            title: 'Large Language Models & Retrieval-Augmented Generation',
            description: `
Technical Workflow Details:

1. Query Processing
   • Receive user input/query
   • Analyze query intent and structure
   • Prepare for retrieval phase

2. Knowledge Retrieval
   • Search vector database for relevant content
   • Rank and filter search results
   • Select most pertinent information

3. Context Integration
   • Combine retrieved information
   • Structure context window
   • Optimize for LLM processing

4. LLM Processing
   • Format prompt with context
   • Generate response using LLM
   • Apply output filtering and validation

5. Response Enhancement
   • Add citations and sources
   • Verify factual accuracy
   • Format final response

Advanced Features:
• Dynamic context window
• Real-time fact verification
• Source attribution
• Confidence scoring
• Automated bias detection`
        }
    };

    const closeButton = modal.querySelector('.close-button');
    closeButton.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });

    const showcaseItems = document.querySelectorAll('.showcase-item');
    showcaseItems.forEach(item => {
        item.addEventListener('click', () => {
            const img = item.querySelector('img');
            const imgSrc = img.getAttribute('src');
            const projectKey = img.getAttribute('alt');
            const details = projectDetails[projectKey] || projectDetails[projectKey.replace('&', 'and')];

            const modalImg = modal.querySelector('.modal-image');
            const modalTitle = modal.querySelector('.modal-title');
            const modalDescription = modal.querySelector('.modal-description');

            modalImg.src = imgSrc;
            modalTitle.textContent = details.title;
            const formattedDescription = details.description
                .split('\n')
                .map(line => {
                    if (line.trim().match(/^\d+\./)) {
                        // Number points
                        return `<h3 class="step-title">${line.trim()}</h3>`;
                    } else if (line.trim().startsWith('•')) {
                        // Bullet points
                        return `<div class="bullet-point">${line.trim()}</div>`;
                    } else if (line.trim().endsWith(':')) {
                        // Section headers
                        return `<h2 class="section-header">${line.trim()}</h2>`;
                    } else {
                        return line ? `<div>${line.trim()}</div>` : '<br>';
                    }
                })
                .join('');
            modalDescription.innerHTML = formattedDescription;

            modal.style.display = 'flex';
        });
    });
});
