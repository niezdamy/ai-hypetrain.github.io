# ai-hypetrain Blog

This is the ai-hypetrain blog built with [Hugo](https://gohugo.io/), based on the [Hugo Theme Stack](https://themes.gohugo.io/themes/hugo-theme-stack/). The blog is designed to test and review various AI tools and ideas, documenting their effectiveness and value.

## Setup

1. **Add the Theme**
   
   You can add the theme as a Git submodule by running:
   
   ```bash
   git submodule add https://github.com/themes-stack/hugo-theme-stack.git themes/hugo-theme-stack
   ```
   
   Alternatively, you can download the theme and place it in the `themes/hugo-theme-stack` directory.

2. **Install Hugo**

   Make sure you have [Hugo](https://gohugo.io/getting-started/installing/) installed.

3. **Configuration**

   Update the `config.toml` file as necessary. Key configurations include:
   - `baseURL`: Should be set to "https://ai-hypetrain.github.io/"
   - `theme`: Set to "hugo-theme-stack"
   - Multilingual settings for Polish and English

4. **Content Structure**

   Create content in the `content/` directory following this structure:
   - Posts: `content/[language]/post/` (e.g., `content/en/post/` for English posts)
   - Pages: `content/[language]/page/` (e.g., `content/en/page/about.md` for an About page)
   
   Each post or page should include frontmatter with metadata like:
   ```yaml
   ---
   title: "Post Title"
   date: 2025-03-07T00:00:00Z
   draft: false
   description: "Brief description"
   categories: ["Category"]
   tags: ["tag1", "tag2"]
   image: "img/cover-image.jpg"
   ---
   ```

5. **Static Files**

   Place static assets in the `static/` directory:
   - Images: `static/img/`
   - Custom CSS: `static/css/`
   - Custom JS: `static/js/`
   - Favicon: `static/favicon.png`

## Deployment

### GitHub Pages Setup

1. **Repository Settings**
   - Go to your repository on GitHub
   - Navigate to Settings > Pages
   - Under "Source", select "GitHub Actions"

2. **First Deployment**
   - Push your changes to the `main` branch
   - GitHub Actions will automatically build and deploy your site based on the workflow file (`.github/workflows/gh-pages.yml`)
   - The first deployment may take a few minutes

3. **Custom Domain (Optional)**
   - In the GitHub Pages settings, you can set up a custom domain
   - Create a `CNAME` file in the `static/` directory with your domain name

4. **Checking Deployment Status**
   - Go to the "Actions" tab in your repository to monitor the deployment process
   - Once complete, your site will be available at `https://ai-hypetrain.github.io/`

## Customization

- **Main Page Metrics**: The site includes a custom component on the homepage to display metrics such as time spent, money spent, and money earned.
- **Google Analytics**: Make sure to update the `googleAnalytics` parameter in `config.toml` with your actual Google Analytics Tracking ID.

## Running Hugo Locally

To preview your site during development, run the following command in your terminal:

```bash
hugo server -D
```

This command starts a local server (by default at http://localhost:1313) and includes draft content.

If your site appears blank or content isn't loading properly, try these troubleshooting steps:

1. Verify content is in the correct directory structure (`content/[language]/post/` rather than just `content/[language]/`)
2. Check that your theme is correctly installed and referenced in `config.toml`
3. Ensure frontmatter in your content files is correctly formatted
4. Run with verbose output for debugging: `hugo server -D --verbose`

For more details, refer to the [Hugo documentation](https://gohugo.io/getting-started/quick-start/).

Happy blogging!
