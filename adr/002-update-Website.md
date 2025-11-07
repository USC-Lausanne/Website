# 002 Website Development and Deployment

## Status
Accepted

## Context
To ensure consistent and reliable development and deployment of the USC Lausanne website, a clear process needs to be established. This process should cover the installation of dependencies, running the development server, building the production version, deploying the site, and managing version control.

## ⚙️ Installation & Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/usc-lausanne.git
   cd usc-lausanne/www
   ```

2. Configure your local server (e.g., MAMP, WAMP, XAMPP) and point the root directory to `/www`.

3. Set up the database:
   - Import the SQL file located in `/config/db_init.sql` into phpMyAdmin.
   - Update `config/db.php` with your credentials.

4. Open in your browser:
   ```
   http://localhost/usc-lausanne
   ```

## Decision
The following commands and steps will be used for developing and deploying the USC Lausanne website:

### Development

1. Remove existing dependencies and lock files to avoid conflicts:
```
rm -rf node_modules package-lock.json
```

2. Install all necessary dependencies fresh:
```
npm install
```

3. Run the development server to preview changes locally:
```
npm run dev
```

### Deployment

1. Build the production-ready version of the website:
```
npm run build
```

2. Deploy the built website to the hosting environment:
```
npm run deploy
```

3. Commit and push changes to the main branch for version control:
```
git add .
git commit -m "Update website"
git push origin main
```

## Consequences
- This process ensures a clean dependency environment for development.
- Running the development server allows for immediate feedback during development.
- Building and deploying commands streamline the release process.
- Committing and pushing changes maintain an up-to-date version history.