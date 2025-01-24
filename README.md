# Adding Custom Media to Course Cards

This guide explains how to add your own images and videos to the course cards.

## File Structure

```
assets/
    ├── images/
    │   ├── course1.jpg
    │   ├── course2.jpg
    │   └── ...
    └── videos/
        ├── course-preview.mp4
        └── ...
```

## Adding Images

1. Place your image files in the `assets/images/` directory
2. Update the image source in the HTML:

```html
<div class="card-media">
    <img src="assets/images/your-image.jpg" alt="Course Title" class="course-image">
</div>
```

### Image Requirements
- Recommended size: 800x450 pixels (16:9 ratio)
- Supported formats: JPG, PNG, WebP
- Maximum file size: 2MB

## Adding Videos

1. Place your video files in the `assets/videos/` directory
2. Update the video source in the HTML:

```html
<div class="card-media">
    <video class="course-video" poster="assets/images/video-thumbnail.jpg">
        <source src="assets/videos/your-video.mp4" type="video/mp4">
        Your browser does not support the video tag.
    </video>
    <button class="play-button">▶</button>
</div>
```

### Video Requirements
- Recommended resolution: 1280x720 (720p)
- Format: MP4 (H.264 codec)
- Maximum duration: 2-3 minutes
- Maximum file size: 10MB

## Adding Image Sliders

For multiple images in a slider:

```html
<div class="card-media slider">
    <img src="assets/images/slide1.jpg" alt="Course Image 1" class="course-image">
    <img src="assets/images/slide2.jpg" alt="Course Image 2" class="course-image">
    <div class="slider-dots">
        <span class="dot active"></span>
        <span class="dot"></span>
    </div>
</div>
```

## Adding Featured Labels

To add a "Featured" or custom label to a course:

```html
<div class="card-media">
    <img src="assets/images/your-image.jpg" alt="Course Title" class="course-image">
    <div class="media-overlay">
        <span>Featured Course</span>
    </div>
</div>
```

## Best Practices

1. Optimize images for web:
   - Compress images using tools like TinyPNG
   - Use appropriate dimensions to avoid scaling
   - Consider using WebP format with JPEG fallback

2. Optimize videos:
   - Compress videos while maintaining quality
   - Consider providing multiple resolutions
   - Add a thumbnail image (poster) for better loading

3. Accessibility:
   - Always include alt text for images
   - Provide captions for videos when necessary
   - Ensure sufficient color contrast in overlays

4. Performance:
   - Lazy load images below the fold
   - Preload critical media content
   - Use appropriate caching headers
