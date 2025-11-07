**Note:** The website is directly accessible online at [https://usc-lausanne.github.io/Website/](https://usc-lausanne.github.io/Website/)

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

## 🖼️ Tech Logos

![Vite Logo](https://placeholder.com/vite-logo.png)  
![Tailwind CSS Logo](https://placeholder.com/tailwindcss-logo.png)  
![Vue.js Logo](https://placeholder.com/vuejs-logo.png)  
![PHP Logo](https://placeholder.com/php-logo.png)  
![MySQL Logo](https://placeholder.com/mysql-logo.png)

---

## 🚀 Features

- 🎉 Homepage with events and news  
- 📅 Events calendar  
- 📷 Media gallery  
- 📄 Resources and documentation  
- 📬 Contact form  

---

## 📁 Project Directory Structure

```bash
src/
├── assets/        # Static assets like images, fonts, and styles
├── components/    # Reusable Vue components (buttons, cards, modals, etc.)
├── views/         # Vue pages corresponding to routes (Home.vue, About.vue, Events.vue, etc.)
├── router/        # Vue Router configuration files
├── App.vue        # Root Vue component
├── main.css       # Tailwind importation
└── main.js        # Application entry point
public/
└── favicon.ico    # Site favicon
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

## 📖 Architecture Decision Records (ADRs)

We maintain a set of Architecture Decision Records to document important decisions and rationale for the project. Please take a moment to review them to better understand our development process.

- [ADR 001: Git Workflow](./adr/001-git-workflow.md)  
- [ADR 002: Website Update Strategy](./adr/002-website-update-strategy.md)

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