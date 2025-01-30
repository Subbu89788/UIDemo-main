// Video Player Functionality
document.querySelectorAll('.card-media').forEach(media => {
    const video = media.querySelector('.course-video');
    const controls = media.querySelector('.video-controls');
    const playPauseBtn = controls.querySelector('.play-pause');
    const progressBar = controls.querySelector('.progress-bar');
    const progress = controls.querySelector('.progress');
    const timeDisplay = controls.querySelector('.time');
    const volumeBtn = controls.querySelector('.volume');
    const volumeSlider = controls.querySelector('.volume-slider');
    const volumeProgress = controls.querySelector('.volume-progress');
    const fullscreenBtn = controls.querySelector('.fullscreen');
    let isHovered = false;
    
    // Format time in MM:SS
    function formatTime(seconds) {
        const minutes = Math.floor(seconds / 60);
        seconds = Math.floor(seconds % 60);
        return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
    }
    
    // Update progress bar and time display
    function updateProgress() {
        const percent = (video.currentTime / video.duration) * 100;
        progress.style.width = `${percent}%`;
        timeDisplay.textContent = `${formatTime(video.currentTime)}/${formatTime(video.duration)}`;
    }
    
    // Show controls on hover
    media.addEventListener('mouseenter', () => {
        isHovered = true;
        controls.style.opacity = '1';
    });
    
    // Hide controls when mouse leaves
    media.addEventListener('mouseleave', () => {
        isHovered = false;
        if (video.paused) {
            controls.style.opacity = '0';
        }
    });
    
    // Play/Pause toggle
    playPauseBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        if (video.paused) {
            video.play();
            playPauseBtn.textContent = '⏸';
        } else {
            video.pause();
            playPauseBtn.textContent = '▶';
        }
    });
    
    // Progress bar click
    progressBar.addEventListener('click', (e) => {
        const rect = progressBar.getBoundingClientRect();
        const pos = (e.clientX - rect.left) / progressBar.offsetWidth;
        video.currentTime = pos * video.duration;
    });
    
    // Volume control
    volumeBtn.addEventListener('click', () => {
        video.muted = !video.muted;
        volumeBtn.textContent = video.muted ? '🔇' : '🔊';
        volumeProgress.style.width = video.muted ? '0%' : '100%';
    });
    
    volumeSlider.addEventListener('click', (e) => {
        const rect = volumeSlider.getBoundingClientRect();
        const pos = (e.clientX - rect.left) / volumeSlider.offsetWidth;
        video.volume = Math.max(0, Math.min(1, pos));
        volumeProgress.style.width = `${video.volume * 100}%`;
        video.muted = video.volume === 0;
        volumeBtn.textContent = video.muted ? '🔇' : '🔊';
    });
    
    // Fullscreen toggle
    fullscreenBtn.addEventListener('click', () => {
        if (!document.fullscreenElement) {
            media.requestFullscreen();
        } else {
            document.exitFullscreen();
        }
    });
    
    // Video event listeners
    video.addEventListener('timeupdate', updateProgress);
    
    video.addEventListener('play', () => {
        playPauseBtn.textContent = '⏸';
    });
    
    video.addEventListener('pause', () => {
        playPauseBtn.textContent = '▶';
    });
    
    video.addEventListener('ended', () => {
        playPauseBtn.textContent = '▶';
        video.currentTime = 0;
    });
    
    // Initialize time display
    video.addEventListener('loadedmetadata', () => {
        timeDisplay.textContent = `0:00/${formatTime(video.duration)}`;
    });
});

// Image Slider Functionality
document.querySelectorAll('.slider').forEach(slider => {
    const images = slider.querySelectorAll('img');
    const dots = slider.querySelectorAll('.dot');
    let currentSlide = 0;

    // Function to show specific slide
    function showSlide(index) {
        images.forEach(img => img.style.display = 'none');
        dots.forEach(dot => dot.classList.remove('active'));
        
        images[index].style.display = 'block';
        dots[index].classList.add('active');
    }

    // Click event for dots
    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            currentSlide = index;
            showSlide(currentSlide);
        });
    });

    // Auto-advance slides every 5 seconds
    setInterval(() => {
        currentSlide = (currentSlide + 1) % images.length;
        showSlide(currentSlide);
    }, 5000);
});

// Example of how to add your own images/videos
function addCustomMedia() {
    // Example: Adding an image
    const imageCard = document.querySelector('.card-media img');
    if (imageCard) {
        imageCard.src = 'assets/your-custom-image.jpg';
    }

    // Example: Adding a video
    const videoCard = document.querySelector('.card-media video source');
    if (videoCard) {
        videoCard.src = 'assets/your-custom-video.mp4';
        videoCard.parentElement.load(); // Reload video element
    }
}

// Show modal functionality
function showModal() {
    document.querySelector('.modal').style.display = 'block';
}

// Hide modal functionality
function hideModal() {
    document.querySelector('.modal').style.display = 'none';
}

// Scroll to contact section
function scrollToContact() {
    document.querySelector('#contact').scrollIntoView({ behavior: 'smooth' });
    hideModal();
}

// Handle form submission
function handleSubmit(event) {
    event.preventDefault();
    // Add your form submission logic here
    console.log('Form submitted');
}

// Handle Work tab navigation
document.querySelector('a[href="WorkUI/Workindex.html"]').addEventListener('click', (event) => {
    event.preventDefault();
    window.location.href = 'WorkUI/Workindex.html';
});
