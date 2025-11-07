# 🌐 USC Lausanne Website

Welcome to the official repository for the **USC Lausanne** website!  
This project hosts the web platform for the USC Lausanne association, providing public information, events, resources, and more.

---

## 📌 About USC Lausanne

**USC Lausanne (University Surf Club Lausanne)** was founded in 2024 by passionate surfers from EPFL and UNIL.  
Our non-profit association is dedicated to promoting the surfing lifestyle within the student community.  

We organize a wide range of surf-related activities:
- 🌊 Beginner introductions  
- 🏄‍♂️ Sessions for experienced surfers  
- 🤝 Community events and meetups  
- 🎥 Surf culture & movie nights  

Always in a friendly and relaxed atmosphere!

---

## 🛠️ Tech Stack

This website is built with:

- **Frontend**: HTML5, CSS3, JavaScript  
- **Backend**: PHP  
- **Database**: MySQL  
- **Hosting**: OVH (with phpMyAdmin for DB management)

---

## 🚀 Features

- 🎉 Homepage with events and news  
- 📅 Events calendar  
- 📷 Media gallery  
- 📄 Resources and documentation  
- 📬 Contact form  

---

## 📂 Project Structure

```bash
www/
├── assets/        # Images, CSS, JavaScript
├── components/    # Reusable PHP components (header, footer, forms, etc.)
├── pages/         # Individual pages (home, about, events, etc.)
├── config/        # Database configuration
└── index.php      # Main entry point
```

---

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

---

## 🤝 Contributing

We welcome contributions!  
Here’s how you can help:
- Report bugs by opening an **issue**
- Suggest new **features**
- Submit **pull requests** with improvements

---

## 📜 License

This project is licensed under the **MIT License**.  
See the [LICENSE](./LICENSE) file for more details.

---

## 🙌 Acknowledgements

- Thanks to the founding members of USC Lausanne 🌊  
- Inspired by the surf community worldwide 🏄‍♀️


## Development

```
rm -rf node_modules package-lock.json
npm install
```

```
npm run dev
```


## Deployement 

```
npm run build
npm run deploy
```

```
git add .
git commit -m ""
git push origin main
```