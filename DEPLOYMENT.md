# GitHub Pages Deployment Guide

This guide explains how to deploy the hackathon website to GitHub Pages.

## Prerequisites

- A GitHub repository
- GitHub Pages enabled in repository settings
- Node.js 18+ installed locally

## Setup GitHub Pages

1. **Enable GitHub Pages in Repository Settings:**
   - Go to your repository on GitHub
   - Click on "Settings" tab
   - Scroll down to "Pages" section
   - Under "Source", select "GitHub Actions"

2. **Configure Repository Secrets (if needed):**
   - Go to Settings > Secrets and variables > Actions
   - Add any required secrets for deployment

## Deployment Methods

### Method 1: Automatic Deployment (Recommended)

The website will automatically deploy when you push to the `main` branch:

1. Make your changes
2. Commit and push to main:
   ```bash
   git add .
   git commit -m "Update website"
   git push origin main
   ```
3. GitHub Actions will automatically build and deploy the site
4. Check the "Actions" tab to monitor deployment progress

### Method 2: Manual Deployment

If you prefer manual deployment:

1. Build the project:
   ```bash
   npm run build
   ```

2. Deploy using the deploy script:
   ```bash
   npm run deploy
   ```

## Verification

After deployment:

1. Go to your repository settings > Pages
2. Check the URL provided (usually `https://username.github.io/repository-name`)
3. Verify the website loads correctly
4. Test all functionality including:
   - Navigation links
   - FAQ accordion
   - Responsive design
   - Image loading

## Troubleshooting

### Common Issues

1. **404 Error on GitHub Pages:**
   - Ensure `.nojekyll` file exists in the `out` directory
   - Check that all paths are relative (not absolute)

2. **Images Not Loading:**
   - Verify images are in the `public` directory
   - Check that image paths use relative URLs (`./image.png`)

3. **CSS Not Loading:**
   - Ensure the build process completed successfully
   - Check that `fix-paths.js` ran without errors

4. **Build Fails:**
   - Check Node.js version (should be 18+)
   - Run `npm install` to ensure dependencies are installed
   - Check for TypeScript errors

### Debug Steps

1. **Check Build Output:**
   ```bash
   npm run build
   ```
   Look for any errors in the console output.

2. **Test Locally:**
   ```bash
   npm run dev
   ```
   Verify the site works in development mode.

3. **Check GitHub Actions:**
   - Go to Actions tab in your repository
   - Check the latest workflow run for errors

## Custom Domain (Optional)

To use a custom domain:

1. Add a `CNAME` file to the `public` directory with your domain
2. Configure DNS settings with your domain provider
3. Enable "Enforce HTTPS" in GitHub Pages settings

## Performance Optimization

The website is already optimized for GitHub Pages:

- Static export for fast loading
- Image optimization disabled (required for static hosting)
- Relative paths for all assets
- Minified CSS and JavaScript
- Gzip compression (handled by GitHub Pages)

## Support

If you encounter issues:

1. Check the GitHub Actions logs
2. Verify all configuration files are correct
3. Test locally before deploying
4. Check the repository issues for similar problems
