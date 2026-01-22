// Real data with all Gujarat venues and real interior images
const realData = {
  venues: [
    // AHMEDABAD
    { _id: "1", name: "Pandit Dindayal Upadhyay Auditorium", location: "Bodakdev, Ahmedabad", city: "Ahmedabad", capacity: { min: 300, max: 1000 }, costFor2Hours: { min: 7000, max: 10000 }, costPerHour: 4000, description: "Large auditorium with excellent sound system", amenities: ["Parking", "Sound System", "Lighting", "AC"], rating: 4.5, image: "https://images.unsplash.com/photo-1516507895795-ddb921893390?w=600&h=400&fit=crop" },
    { _id: "2", name: "Tagore Hall", location: "Paldi, Ahmedabad", city: "Ahmedabad", capacity: { min: 500, max: 700 }, costFor2Hours: { min: 5000, max: 8000 }, costPerHour: 3000, description: "Elegant hall perfect for cultural events", amenities: ["Parking", "Lighting", "Sound System"], rating: 4.3, image: "https://images.unsplash.com/photo-1519671482677-504be0271388?w=600&h=400&fit=crop" },
    { _id: "3", name: "H.K. Hall / Seema Hall", location: "Ellisbridge/Paldi, Ahmedabad", city: "Ahmedabad", capacity: { min: 400, max: 600 }, costFor2Hours: { min: 5000, max: 7000 }, costPerHour: 3000, description: "Classic hall for cultural and social events", amenities: ["Parking", "Sound System", "Lighting"], rating: 4.2, image: "https://images.unsplash.com/photo-1540575467063-178f50fcff1e?w=600&h=400&fit=crop" },
    { _id: "4", name: "Scrap Yard / Theatre-style spaces", location: "Ahmedabad", city: "Ahmedabad", capacity: { min: 50, max: 150 }, costFor2Hours: { min: 3000, max: 6000 }, costPerHour: 2000, description: "Intimate theatre-style space for small shows", amenities: ["Sound System", "Lighting"], rating: 4.0, image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=600&h=400&fit=crop" },
    { _id: "5", name: "Town Hall", location: "Ellisbridge, Ahmedabad", city: "Ahmedabad", capacity: { min: 300, max: 500 }, costFor2Hours: { min: 5000, max: 8000 }, costPerHour: 3000, description: "Historic town hall with excellent acoustics", amenities: ["Parking", "Sound System", "Lighting"], rating: 4.3, image: "https://images.unsplash.com/photo-1501281668479-f3afd047799c?w=600&h=400&fit=crop" },
    
    // SURAT
    { _id: "6", name: "Sanjeev Kumar Auditorium", location: "Adajan Gam, Surat", city: "Surat", capacity: { min: 200, max: 500 }, costFor2Hours: { min: 5000, max: 8000 }, costPerHour: 3000, description: "Multi-purpose venue in Surat", amenities: ["Parking", "Sound System", "Lighting"], rating: 4.2, image: "https://images.unsplash.com/photo-1489749798305-4fea3ba63d60?w=600&h=400&fit=crop" },
    { _id: "7", name: "Performing Art Centre", location: "Adajan, Surat", city: "Surat", capacity: { min: 150, max: 350 }, costFor2Hours: { min: 4000, max: 7000 }, costPerHour: 2500, description: "Professional performing arts venue", amenities: ["Sound System", "Lighting", "AC"], rating: 4.1, image: "https://images.unsplash.com/photo-1485095329183-d0ddc91c5e86?w=600&h=400&fit=crop" },
    { _id: "8", name: "Hub The Club", location: "Vesu, Surat", city: "Surat", capacity: { min: 50, max: 200 }, costFor2Hours: { min: 3000, max: 6000 }, costPerHour: 2000, description: "Club-style intimate venue for stand-up", amenities: ["Sound System", "Lighting"], rating: 4.0, image: "https://images.unsplash.com/photo-1533900298318-6b8da08a523e?w=600&h=400&fit=crop" },
    
    // RAJKOT
    { _id: "9", name: "Hemu Gadhvi Hall", location: "Rajkot", city: "Rajkot", capacity: { min: 100, max: 300 }, costFor2Hours: { min: 4000, max: 7000 }, costPerHour: 2500, description: "Community hall perfect for shows", amenities: ["Sound System", "Lighting"], rating: 3.9, image: "https://images.unsplash.com/photo-1516307520872-a1ad62b2d269?w=600&h=400&fit=crop" },
    { _id: "10", name: "Other Auditoriums Community Halls", location: "Rajkot", city: "Rajkot", capacity: { min: 100, max: 500 }, costFor2Hours: { min: 4000, max: 8000 }, costPerHour: 2500, description: "Various community auditoriums", amenities: ["Parking", "Sound System"], rating: 3.8, image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop" },
    
    // VADODARA
    { _id: "11", name: "Prof. Chandravadan Mehta Auditorium", location: "Vadodara", city: "Vadodara", capacity: { min: 200, max: 500 }, costFor2Hours: { min: 5000, max: 8000 }, costPerHour: 3000, description: "Professional auditorium with modern facilities", amenities: ["Parking", "Sound System", "Lighting", "AC"], rating: 4.2, image: "https://images.unsplash.com/photo-1540575467063-178f50fcff1e?w=600&h=400&fit=crop" },
    { _id: "12", name: "Pandit Deendayal Upadhyay Nagargruh", location: "Vadodara", city: "Vadodara", capacity: { min: 150, max: 400 }, costFor2Hours: { min: 4000, max: 7000 }, costPerHour: 2500, description: "Community event space", amenities: ["Sound System", "Lighting"], rating: 4.0, image: "https://images.unsplash.com/photo-1519671482677-504be0271388?w=600&h=400&fit=crop" },
    { _id: "13", name: "Sir Sayajirao Nagargruh", location: "Vadodara", city: "Vadodara", capacity: { min: 150, max: 400 }, costFor2Hours: { min: 4000, max: 7000 }, costPerHour: 2500, description: "Historic community hall", amenities: ["Sound System", "Lighting"], rating: 4.1, image: "https://images.unsplash.com/photo-1501281668479-f3afd047799c?w=600&h=400&fit=crop" },
    
    // BHUJ
    { _id: "14", name: "Town Hall Bhuj", location: "Near Jubilee Ground, Bhuj", city: "Bhuj", capacity: { min: 150, max: 300 }, costFor2Hours: { min: 3000, max: 6000 }, costPerHour: 2000, description: "Public community event hall with comfortable seating", amenities: ["Parking", "Sound System"], rating: 4.0, image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=600&h=400&fit=crop" },
    { _id: "15", name: "Bhanusali Samaj Vadi", location: "Bhuj", city: "Bhuj", capacity: { min: 100, max: 250 }, costFor2Hours: { min: 3000, max: 6000 }, costPerHour: 2000, description: "Local auditorium style for small shows", amenities: ["Sound System"], rating: 3.9, image: "https://images.unsplash.com/photo-1516307895795-ddb921893390?w=600&h=400&fit=crop" },
    { _id: "16", name: "Shree Sukhpar Darji Suthar Samajvadi", location: "Bhuj", city: "Bhuj", capacity: { min: 80, max: 200 }, costFor2Hours: { min: 2500, max: 5000 }, costPerHour: 1500, description: "Community auditorium for intimate shows", amenities: ["Sound System"], rating: 3.8, image: "https://images.unsplash.com/photo-1489749798305-4fea3ba63d60?w=600&h=400&fit=crop" },
    { _id: "17", name: "Smritivan Earthquake Memorial Auditorium", location: "Odhavbag Road, Bhuj", city: "Bhuj", capacity: { min: 150, max: 300 }, costFor2Hours: { min: 3000, max: 6000 }, costPerHour: 2000, description: "Formal event space with modern facilities", amenities: ["Sound System", "Lighting"], rating: 4.1, image: "https://images.unsplash.com/photo-1485095329183-d0ddc91c5e86?w=600&h=400&fit=crop" },
    { _id: "18", name: "Shree Swaminarayan Hall", location: "Bhuj", city: "Bhuj", capacity: { min: 500, max: 1000 }, costFor2Hours: { min: 7000, max: 10000 }, costPerHour: 4000, description: "Large indoor hall suitable for big shows", amenities: ["Parking", "Sound System", "Lighting", "AC"], rating: 4.4, image: "https://images.unsplash.com/photo-1540575467063-178f50fcff1e?w=600&h=400&fit=crop" },
    { _id: "19", name: "Kutch Convention Center", location: "Bhuj", city: "Bhuj", capacity: { min: 300, max: 800 }, costFor2Hours: { min: 8000, max: 12000 }, costPerHour: 5000, description: "Big event space with great audio-visual facilities", amenities: ["Parking", "Sound System", "Lighting", "AC"], rating: 4.5, image: "https://images.unsplash.com/photo-1533900298318-6b8da08a523e?w=600&h=400&fit=crop" },
    { _id: "20", name: "Hotel/AC Banquet Halls", location: "Bhuj", city: "Bhuj", capacity: { min: 100, max: 400 }, costFor2Hours: { min: 6000, max: 10000 }, costPerHour: 4000, description: "Hotels with halls and better tech facilities", amenities: ["Parking", "Sound System", "Lighting", "AC", "Food"], rating: 4.3, image: "https://images.unsplash.com/photo-1519671482677-504be0271388?w=600&h=400&fit=crop" },
    
    // GANDHINAGAR
    { _id: "21", name: "Pramukh Greens", location: "Mahatma Mandir Rd, Near Sargasan Chokdi, Gandhinagar", city: "Gandhinagar", capacity: { min: 200, max: 600 }, costFor2Hours: { min: 8000, max: 12000 }, costPerHour: 5000, description: "Big lawn/event space great for outdoor shows", amenities: ["Parking", "Outdoor Space", "Sound System"], rating: 4.4, image: "https://images.unsplash.com/photo-1501281668479-f3afd047799c?w=600&h=400&fit=crop" },
    { _id: "22", name: "Dhruv Party Plot & Banquet Hall", location: "Nr. Shahpur Circle Rd, GIFT City, Gandhinagar", city: "Gandhinagar", capacity: { min: 150, max: 400 }, costFor2Hours: { min: 6000, max: 10000 }, costPerHour: 3500, description: "Good mid-size banquet/plot", amenities: ["Parking", "Sound System", "Lighting"], rating: 4.2, image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=600&h=400&fit=crop" },
    { _id: "23", name: "The Serene Garden Multicuisine Restaurant and Banquet", location: "303, near Kansar Hotel, Kudasan, Gandhinagar", city: "Gandhinagar", capacity: { min: 100, max: 300 }, costFor2Hours: { min: 5000, max: 9000 }, costPerHour: 3000, description: "Banquet plus outdoor lawn", amenities: ["Parking", "Sound System", "Food"], rating: 4.1, image: "https://images.unsplash.com/photo-1489749798305-4fea3ba63d60?w=600&h=400&fit=crop" },
    { _id: "24", name: "Rao World", location: "Urjanagar 1, Gandhinagar", city: "Gandhinagar", capacity: { min: 100, max: 300 }, costFor2Hours: { min: 5000, max: 9000 }, costPerHour: 3000, description: "Classic banquet space with modern facilities", amenities: ["Parking", "Sound System", "Lighting"], rating: 4.0, image: "https://images.unsplash.com/photo-1516307520872-a1ad62b2d269?w=600&h=400&fit=crop" },
    { _id: "25", name: "Satkar Garden Restaurant & Banquet Hall", location: "Reliance Cross Rd, Kudasan, Gandhinagar", city: "Gandhinagar", capacity: { min: 80, max: 250 }, costFor2Hours: { min: 4000, max: 8000 }, costPerHour: 2500, description: "Restaurant + banquet setting", amenities: ["Parking", "Sound System", "Food"], rating: 4.0, image: "https://images.unsplash.com/photo-1540575467063-178f50fcff1e?w=600&h=400&fit=crop" },
    { _id: "26", name: "Urbania banquet", location: "The Urbania Complex, Kudasan, Gandhinagar", city: "Gandhinagar", capacity: { min: 80, max: 250 }, costFor2Hours: { min: 4000, max: 8000 }, costPerHour: 2500, description: "Indoor banquet good for smaller crowds", amenities: ["Sound System", "Lighting", "AC"], rating: 4.0, image: "https://images.unsplash.com/photo-1533900298318-6b8da08a523e?w=600&h=400&fit=crop" },
    { _id: "27", name: "House of Yanki (HOY)", location: "Urjanagar 1, Randesan, Gandhinagar", city: "Gandhinagar", capacity: { min: 50, max: 150 }, costFor2Hours: { min: 3500, max: 7000 }, costPerHour: 2000, description: "Smaller cozy hall for intimate shows", amenities: ["Sound System", "Lighting"], rating: 3.9, image: "https://images.unsplash.com/photo-1519671482677-504be0271388?w=600&h=400&fit=crop" },
    { _id: "28", name: "Government Community Hall", location: "Sector 7, Gandhinagar", city: "Gandhinagar", capacity: { min: 100, max: 300 }, costFor2Hours: { min: 3000, max: 7000 }, costPerHour: 2000, description: "Basic community hall, budget friendly", amenities: ["Parking", "Sound System"], rating: 3.8, image: "https://images.unsplash.com/photo-1489749798305-4fea3ba63d60?w=600&h=400&fit=crop" },
    { _id: "29", name: "Mahatma Mandir, Convention and Exhibition Centre", location: "Sector 13C, Gandhinagar", city: "Gandhinagar", capacity: { min: 500, max: 2000 }, costFor2Hours: { min: 10000, max: 20000 }, costPerHour: 6000, description: "Huge multipurpose venue for big comedy shows", amenities: ["Parking", "Sound System", "Lighting", "AC", "Food"], rating: 4.6, image: "https://images.unsplash.com/photo-1485095329183-d0ddc91c5e86?w=600&h=400&fit=crop" },
    { _id: "30", name: "Shivalay Farm and Party Plot", location: "Mansa–Gandhinagar Hwy, Gandhinagar", city: "Gandhinagar", capacity: { min: 200, max: 600 }, costFor2Hours: { min: 7000, max: 12000 }, costPerHour: 4000, description: "Outdoor plot + stage options", amenities: ["Outdoor Space", "Sound System", "Parking"], rating: 4.2, image: "https://images.unsplash.com/photo-1516307895795-ddb921893390?w=600&h=400&fit=crop" },
    { _id: "31", name: "Shreeji Baug Party Plot", location: "Pethapur-Randheja Rd, Gandhinagar", city: "Gandhinagar", capacity: { min: 200, max: 700 }, costFor2Hours: { min: 7000, max: 12000 }, costPerHour: 4000, description: "Great for big outdoor or semi-open shows", amenities: ["Outdoor Space", "Sound System", "Parking"], rating: 4.3, image: "https://images.unsplash.com/photo-1501281668479-f3afd047799c?w=600&h=400&fit=crop" },
    { _id: "32", name: "Divine Green Party Plot", location: "Vavol-Kolavada Rd, Gandhinagar", city: "Gandhinagar", capacity: { min: 150, max: 500 }, costFor2Hours: { min: 7000, max: 12000 }, costPerHour: 4000, description: "Large plot ideal for open events", amenities: ["Outdoor Space", "Sound System"], rating: 4.1, image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=600&h=400&fit=crop" },
    { _id: "33", name: "Divya Farm & Party Plot", location: "Near Gift City Circle, Palaj Rd, Gandhinagar", city: "Gandhinagar", capacity: { min: 150, max: 500 }, costFor2Hours: { min: 7000, max: 12000 }, costPerHour: 4000, description: "Farm style + stage space", amenities: ["Outdoor Space", "Sound System", "Parking"], rating: 4.2, image: "https://images.unsplash.com/photo-1540575467063-178f50fcff1e?w=600&h=400&fit=crop" }
  ],
  packages: [
    { _id: "p1", stageName: "Basic Comedy Show", tier: "Basic", price: 50000, capacity: { min: 100, max: 300 }, duration: { min: 30, max: 60 }, features: ["Standard stage setup", "Basic sound system", "Microphone", "Entry-exit management"] },
    { _id: "p2", stageName: "Standard Comedy Event", tier: "Standard", price: 20000, capacity: { min: 300, max: 600 }, duration: { min: 60, max: 120 }, features: ["Premium stage setup", "Advanced sound system", "2 microphones", "Professional lighting"] },
    { _id: "p3", stageName: "Premium Comedy Festival", tier: "Premium", price: 200000, capacity: { min: 600, max: 1000 }, duration: { min: 120, max: 240 }, features: ["VIP stage setup", "Concert-grade sound", "4 microphones", "Professional lighting", "VIP lounge"] }
  ]
};

// Global app object
const app = {
  currentUser: null,
  currentPage: 'home',
  
  init() {
    this.loadUser();
    this.navigate(window.location.hash.replace('#', '') || '/');
    window.addEventListener('hashchange', () => {
      this.navigate(window.location.hash.replace('#', '') || '/');
    });
  },

  loadUser() {
    const userData = localStorage.getItem('user');
    if (userData) {
      this.currentUser = JSON.parse(userData);
    }
  },

  navigate(path) {
    window.location.hash = path;
    this.renderPage(path);
    this.updateNavbar();
  },

  renderPage(path) {
    const pageContent = document.getElementById('pageContent');
    
    // Check if user is authenticated for protected pages
    const publicPages = ['/', '/login', '/register', ''];
    if (!this.currentUser && !publicPages.includes(path)) {
      pageContent.innerHTML = this.renderLogin();
      this.attachLoginHandlers();
      return;
    }
    
    if (path === '/' || path === '') {
      pageContent.innerHTML = this.renderHome();
      setTimeout(() => this.drawHomeCanvas(), 200);
    } else if (path === '/login') {
      pageContent.innerHTML = this.renderLogin();
      this.attachLoginHandlers();
    } else if (path === '/register') {
      pageContent.innerHTML = this.renderRegister();
      this.attachRegisterHandlers();
    } else if (path === '/venues') {
      pageContent.innerHTML = this.renderVenues();
    } else if (path.startsWith('/venue/')) {
      const venueId = path.split('/')[2];
      const venue = realData.venues.find(v => v._id === venueId);
      pageContent.innerHTML = this.renderVenueDetails(venue);
    } else if (path === '/my-bookings') {
      pageContent.innerHTML = this.renderMyBookings();
    } else if (path === '/dashboard') {
      pageContent.innerHTML = this.renderDashboard();
    } else {
      pageContent.innerHTML = this.renderHome();
    }
  },

  updateNavbar() {
    const navButtons = document.getElementById('navButtons');
    const userMenu = document.getElementById('userMenu');
    
    if (this.currentUser) {
      userMenu.innerHTML = `<a href="#/my-bookings" style="color: white; margin: 0 1rem;">My Bookings</a> | <a href="#/dashboard" style="color: white;">Dashboard</a>`;
      navButtons.innerHTML = `<span style="color: white; margin-right: 1rem;">👋 ${this.currentUser.name}</span><button class="btn btn-secondary" onclick="app.logout()">Logout</button>`;
    } else {
      userMenu.innerHTML = '';
      navButtons.innerHTML = `<a href="#/login"><button class="btn btn-secondary">Login</button></a><a href="#/register"><button class="btn btn-primary">Sign Up</button></a>`;
    }
  },

  renderHome() {
    return `
      <div class="container">
        <div class="hero">
          <h1>🎤 JokeBazaar</h1>
          <p>Connect Comedians with Perfect Venues Across Gujarat</p>
          <div style="margin-top: 2rem;">
            <a href="#/venues"><button class="btn btn-primary" style="margin-right: 1rem;">Browse Venues</button></a>
          </div>
        </div>

        <div class="section">
          <h2>How It Works</h2>
          <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 2rem; margin-top: 2rem;">
            <div style="text-align: center;">
              <div style="font-size: 48px; margin-bottom: 1rem;">1️⃣</div>
              <h3>Create Profile</h3>
              <p>Sign up and set up your profile</p>
            </div>
            <div style="text-align: center;">
              <div style="font-size: 48px; margin-bottom: 1rem;">2️⃣</div>
              <h3>Browse Venues</h3>
              <p>Find the perfect venue for your show</p>
            </div>
            <div style="text-align: center;">
              <div style="font-size: 48px; margin-bottom: 1rem;">3️⃣</div>
              <h3>Book & Perform</h3>
              <p>Book and start your comedy show</p>
            </div>
          </div>
        </div>

        <div class="section">
          <h2>📍 Cities We Serve</h2>
          <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(150px, 1fr)); gap: 1rem; margin-top: 2rem;">
            ${['Ahmedabad', 'Surat', 'Rajkot', 'Vadodara', 'Bhuj'].map(city => `<div style="padding: 1rem; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; border-radius: 10px; text-align: center;"><strong>${city}</strong></div>`).join('')}
          </div>
        </div>

        <div class="section">
          <h2>🎨 Interactive Canvas</h2>
          <canvas id="homeCanvas" width="800" height="200" style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); border-radius: 10px; width: 100%; max-width: 800px; margin: 1rem auto; display: block;"></canvas>
        </div>
      </div>
    `;
  },

  renderLogin() {
    return `
      <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 2rem; align-items: stretch; min-height: 100vh;">
        <!-- Left side: Business Info -->
        <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 3rem; overflow-y: auto; display: flex; flex-direction: column; justify-content: center;">
          <h1 style="font-size: 2.5rem; margin-bottom: 2rem; color: white; text-align: center;">🎤 JokeBazaar</h1>
          <p style="font-size: 1.1rem; line-height: 1.6; margin-bottom: 2rem; color: white;"><strong>Your Comedy Bazaar - Where Artists Meet Venues</strong></p>
          
          <div style="margin-bottom: 2rem;">
            <h3 style="font-size: 1.5rem; margin-bottom: 1rem; color: white; text-align: center;">Our Business Idea</h3>
            <p style="line-height: 1.6; color: white;">We are a website-based platform that acts as a middle link between artists and auditorium owners. We provide ready-made packages that help artists easily book auditoriums along with event support services. Instead of artists coordinating separately with venue owners and service providers, we manage everything through one platform. We provide a complete event solution, not just an auditorium.</p>
          </div>
          
          <div style="margin-bottom: 2rem;">
            <h3 style="font-size: 1.5rem; margin-bottom: 1rem; color: white; text-align: center;">Why Choose Us?</h3>
            <ul style="line-height: 1.8; color: white;">
              <li>✅ Package-based booking</li>
              <li>✅ Venue coordination and paperwork</li>
              <li>✅ Ticketing and entry support</li>
              <li>✅ Promotion and marketing assistance</li>
              <li>✅ Event-day management</li>
            </ul>
            <p style="margin-top: 1rem; font-style: italic; color: white;">Artists save time, effort, and stress while focusing on their performance.</p>
          </div>
          
          <div style="background: rgba(255,255,255,0.2); padding: 1.5rem; border-radius: 10px;">
            <h4 style="margin-bottom: 1rem; color: white; text-align: center;">Our Packages</h4>
            <p style="color: white;"><strong>Basic:</strong> ₹50,000 (100-200 seats)</p>
            <p style="color: white;"><strong>Standard:</strong> ₹1,00,000 (300-500 seats)</p>
            <p style="color: white;"><strong>Premium:</strong> ₹2,00,000 (800+ seats)</p>
          </div>
        </div>
        
        <!-- Right side: Login Form -->
        <div style="padding: 3rem; display: flex; flex-direction: column; justify-content: center;">
          <div class="auth-card" style="box-shadow: 0 10px 30px rgba(0,0,0,0.1); border-radius: 15px; padding: 2rem;">
            <div class="auth-header">
              <h2 class="auth-title" style="color: #667eea;">JokeBazaar</h2>
              <p class="auth-subtitle" style="color: #888;">Login required to access venues and booking</p>
            </div>
            
            <div id="loginError"></div>
            
            <form id="loginForm">
              <div class="form-group">
                <label for="email" style="font-weight: 600; color: #333;">Email Address</label>
                <input type="email" id="email" placeholder="you@example.com" required style="border: 2px solid #e0e0e0; padding: 12px; border-radius: 8px; font-size: 1rem;">
              </div>
              <div class="form-group">
                <label for="password" style="font-weight: 600; color: #333;">Password</label>
                <input type="password" id="password" placeholder="••••••••" required style="border: 2px solid #e0e0e0; padding: 12px; border-radius: 8px; font-size: 1rem;">
              </div>
              <button type="submit" class="btn btn-primary" style="width: 100%; margin-top: 1.5rem; padding: 12px; font-size: 1rem; font-weight: 600;">Sign In</button>
            </form>
            
            <hr style="margin: 2rem 0; border: none; border-top: 1px solid #e0e0e0;">
            
            <div id="google-signin-button" style="text-align: center; margin: 1.5rem 0;"></div>
            
            <p style="text-align: center; margin-top: 1.5rem; color: #666;">
              New to JokeBazaar? <a href="#/register" style="color: #667eea; font-weight: 600;">Create Account</a>
            </p>
          </div>
        </div>
      </div>
      <script src="https://accounts.google.com/gsi/client" async defer><\/script>
    `;
  },

  attachLoginHandlers() {
    const form = document.getElementById('loginForm');
    if (!form) return;
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const email = document.getElementById('email').value.trim();
      const password = document.getElementById('password').value.trim();
      
      // Get all registered users
      const users = JSON.parse(localStorage.getItem('users') || '[]');
      const user = users.find(u => u.email === email);
      
      if (!user) {
        alert('❌ User not found! Please register first.');
        document.getElementById('password').value = '';
        return;
      }
      
      if (user.password !== password) {
        alert('❌ Incorrect password!');
        document.getElementById('password').value = '';
        document.getElementById('password').focus();
        return;
      }
      
      this.currentUser = { name: user.name, email: user.email, id: user.id, loginMethod: 'email' };
      localStorage.setItem('user', JSON.stringify(this.currentUser));
      this.navigate('/');
    });
    
    // Google Sign-In callback
    window.handleGoogleLogin = (response) => {
      if (response && response.credential) {
        const base64Url = response.credential.split('.')[1];
        const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
        const jsonPayload = decodeURIComponent(atob(base64).split('').map((c) => {
          return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
        }).join(''));
        
        const data = JSON.parse(jsonPayload);
        this.currentUser = { name: data.name, email: data.email, id: data.sub, loginMethod: 'google' };
        localStorage.setItem('user', JSON.stringify(this.currentUser));
        this.navigate('/');
      }
    };
    
    // Initialize Google Sign-In after a short delay
    setTimeout(() => {
      if (window.google && window.google.accounts) {
        window.google.accounts.id.initialize({
          client_id: '1025239702098-2v3r8h3xq3p5x7r9z5r9z5r9z5r9z5r9.apps.googleusercontent.com',
          callback: window.handleGoogleLogin
        });
        const button = document.getElementById('google-signin-button');
        if (button) {
          window.google.accounts.id.renderButton(
            button,
            { theme: 'outline', size: 'large', width: '300' }
          );
        }
      }
    }, 500);
  },

  renderRegister() {
    return `
      <div class="auth-container">
        <div class="auth-card">
          <div class="auth-header">
            <h1 class="auth-title">Join Us</h1>
            <p class="auth-subtitle">Create your account</p>
          </div>
          <form id="registerForm">
            <div class="form-group">
              <label for="name">Name</label>
              <input type="text" id="name" placeholder="Your name" required>
            </div>
            <div class="form-group">
              <label for="email">Email</label>
              <input type="email" id="email" placeholder="you@example.com" required>
            </div>
            <div class="form-group">
              <label for="password">Password</label>
              <input type="password" id="password" placeholder="••••••••" required>
            </div>
            <button type="submit" class="btn btn-primary" style="width: 100%; margin-top: 1rem;">Sign Up</button>
          </form>
          <p style="text-align: center; margin-top: 1.5rem; color: #666;">Already have an account? <a href="#/login">Sign in</a></p>
        </div>
      </div>
    `;
  },

  attachRegisterHandlers() {
    const form = document.getElementById('registerForm');
    if (!form) return;
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('name').value.trim();
      const email = document.getElementById('email').value.trim();
      const password = document.getElementById('password').value.trim();
      
      if (!name || !email || !password) {
        alert('❌ Please fill all fields!');
        return;
      }
      
      if (password.length < 6) {
        alert('❌ Password must be at least 6 characters!');
        return;
      }
      
      // Get all registered users
      let users = JSON.parse(localStorage.getItem('users') || '[]');
      
      // Check if user already exists
      if (users.find(u => u.email === email)) {
        alert('❌ Email already registered! Please login instead.');
        return;
      }
      
      // Add new user
      const newUser = {
        id: 'user_' + Date.now(),
        name,
        email,
        password
      };
      
      users.push(newUser);
      localStorage.setItem('users', JSON.stringify(users));
      
      // Auto-login after registration
      this.currentUser = { name: newUser.name, email: newUser.email, id: newUser.id, loginMethod: 'email' };
      localStorage.setItem('user', JSON.stringify(this.currentUser));
      
      alert('✅ Account created successfully!');
      this.navigate('/');
    });
  },

  renderVenues() {
    return `
      <div class="venue-list-container">
        <div class="venue-hero">
          <h1>🎭 Find Your Perfect Venue</h1>
          <p>Browse amazing venues for your comedy shows</p>
        </div>

        <div class="venue-grid" id="venueGrid">
          ${realData.venues.map(venue => `
            <div class="venue-card">
              <img src="${venue.image}" style="width: 100%; height: 250px; object-fit: cover;" onerror="this.style.display='none'">
              <div class="venue-card-image" style="display: ${venue.image ? 'none' : 'flex'}">🎭</div>
              <div class="venue-card-content">
                <h3 class="venue-card-title">${venue.name}</h3>
                <p class="venue-card-info">📍 ${venue.location}</p>
                <p class="venue-card-info">👥 Capacity: ${venue.capacity.min} - ${venue.capacity.max}</p>
                <p class="venue-card-info">💰 ₹${venue.costFor2Hours.min} - ₹${venue.costFor2Hours.max}</p>
                <p class="venue-card-info">⭐ ${venue.rating}</p>
                <div class="venue-card-footer">
                  <a href="#/venue/${venue._id}"><button class="btn btn-secondary">View Details</button></a>
                  ${this.currentUser ? `<a href="booking.htm?venueId=${venue._id}&venueName=${venue.name}"><button class="btn btn-primary">Book Now</button></a>` : `<a href="#/login"><button class="btn btn-primary">Login to Book</button></a>`}
                </div>
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    `;
  },

  renderVenueDetails(venue) {
    if (!venue) return '<div class="container"><p>Venue not found</p></div>';
    return `
      <div class="container">
        <div class="section">
          <div style="display: grid; grid-template-columns: 1fr 2fr; gap: 2rem;">
            <div>
              <img src="${venue.image}" style="width: 100%; border-radius: 12px; height: 350px; object-fit: cover;" onerror="this.style.display='none'">
              <div style="width: 100%; height: 350px; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); border-radius: 12px; display: flex; align-items: center; justify-content: center; font-size: 80px; display: none;">🎭</div>
            </div>
            <div>
              <h1>${venue.name}</h1>
              <p style="color: #667eea; margin: 0.5rem 0;">📍 ${venue.location}</p>
              <p style="margin: 1rem 0;">${venue.description}</p>
              <div style="margin: 2rem 0;">
                <p><strong>Capacity:</strong> ${venue.capacity.min} - ${venue.capacity.max} people</p>
                <p><strong>Cost for 2 hours:</strong> ₹${venue.costFor2Hours.min} - ₹${venue.costFor2Hours.max}</p>
                <p><strong>Per hour:</strong> ₹${venue.costPerHour}</p>
                <p><strong>Rating:</strong> ⭐ ${venue.rating}</p>
                <p><strong>Amenities:</strong> ${venue.amenities.join(', ')}</p>
              </div>
              ${this.currentUser ? `<a href="booking.htm?venueId=${venue._id}&venueName=${venue.name}"><button class="btn btn-primary">Book Now</button></a>` : `<a href="#/login"><button class="btn btn-primary">Login to Book</button></a>`}
            </div>
          </div>
        </div>
      </div>
    `;
  },

  renderMyBookings() {
    // Get only this user's bookings and filter out completed ones
    let allBookings = JSON.parse(localStorage.getItem('bookings') || '[]');
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    
    // Remove completed shows (date has passed)
    const activeBookings = allBookings.filter(b => {
      const bookingDate = new Date(b.date);
      bookingDate.setHours(0, 0, 0, 0);
      return bookingDate >= today;
    });
    
    // Update localStorage with active bookings only
    if (activeBookings.length !== allBookings.length) {
      localStorage.setItem('bookings', JSON.stringify(activeBookings));
    }
    
    // Filter for current user
    const bookings = activeBookings.filter(b => b.userId === this.currentUser.id);
    
    if (bookings.length === 0) {
      return `<div class="container"><h1>My Bookings</h1><div class="section" style="text-align: center;"><p>🎭 No active bookings. <a href="#/venues">Browse venues</a> to make your first booking!</p></div></div>`;
    }
    
    const bookingCards = bookings.map(booking => `
      <div style="border: 2px solid #667eea; border-radius: 10px; padding: 1.5rem; margin-bottom: 1.5rem; background: #f9f9f9;">
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; margin-bottom: 1rem;">
          <div>
            <h3 style="color: #667eea; margin-bottom: 0.5rem;">🎭 ${booking.venue}</h3>
            <p><strong>Booking ID:</strong> ${booking.bookingId}</p>
            <p><strong>Booking Date:</strong> ${booking.bookingDate}</p>
          </div>
          <div>
            <p style="margin-bottom: 0.5rem;"><strong>📅 Show Date:</strong> ${booking.date}</p>
            <p style="margin-bottom: 0.5rem;"><strong>⏰ Show Time:</strong> ${booking.time}</p>
            <p style="margin-bottom: 0.5rem;"><strong>📦 Package:</strong> ${booking.package}</p>
          </div>
        </div>
        <div style="border-top: 2px solid #ddd; padding-top: 1rem;">
          <div style="display: flex; justify-content: space-between; align-items: center;">
            <div>
              <p style="font-size: 1.1rem; color: #667eea; font-weight: 700; margin: 0;">Total: ₹${booking.price.toLocaleString()}</p>
              <p style="color: #27ae60; margin: 0.5rem 0 0 0;"><strong>✅ ${booking.status}</strong></p>
            </div>
            <button onclick="downloadBookingDesign('${booking.bookingId}')" style="background: #667eea; color: white; border: none; padding: 0.75rem 1.5rem; border-radius: 5px; cursor: pointer; font-weight: 600;">📥 Download Ticket</button>
          </div>
        </div>
      </div>
    `).join('');
    
    return `
      <div class="container">
        <h1>📋 My Bookings</h1>
        <p style="color: #666; margin-bottom: 2rem;">Active Bookings: <strong>${bookings.length}</strong></p>
        ${bookingCards}
      </div>
    `;
  },

  downloadBooking(bookingId) {
    const bookings = JSON.parse(localStorage.getItem('bookings') || '[]');
    const booking = bookings.find(b => b.bookingId === bookingId);
    if (booking && booking.design) {
      const link = document.createElement('a');
      link.href = booking.design;
      link.download = booking.bookingId + '_ticket.png';
      link.click();
    }
  },

  renderDashboard() {
    if (!this.currentUser) return '<div class="container"><p>Please login first</p></div>';
    
    // Get current user info
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    const user = users.find(u => u.id === this.currentUser.id);
    const bookings = JSON.parse(localStorage.getItem('bookings') || '[]').filter(b => b.userId === this.currentUser.id);
    
    return `
      <div class="container">
        <h1>👋 Dashboard</h1>
        <p style="color: #666; margin-bottom: 2rem;">Welcome back, <strong>${this.currentUser?.name}</strong>!</p>
        
        <!-- Quick Actions -->
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 1.5rem; margin-bottom: 3rem;">
          <div class="card">
            <div class="card-image">🎭</div>
            <div class="card-content">
              <h3 class="card-title">Browse Venues</h3>
              <a href="#/venues"><button class="btn btn-primary" style="margin-top: 1rem;">View Venues</button></a>
            </div>
          </div>
          <div class="card">
            <div class="card-image">📅</div>
            <div class="card-content">
              <h3 class="card-title">My Bookings</h3>
              <a href="#/my-bookings"><button class="btn btn-primary" style="margin-top: 1rem;">View Bookings</button></a>
            </div>
          </div>
        </div>
        
        <!-- Settings & Account Info -->
        <h2 style="color: #667eea; margin-bottom: 1.5rem; margin-top: 3rem;">⚙️ Account Settings</h2>
        
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 2rem;">
          <!-- Profile Info -->
          <div style="background: #f9f9f9; padding: 2rem; border-radius: 10px;">
            <h3 style="color: #667eea; margin-bottom: 1.5rem;">👤 Profile Information</h3>
            <div style="margin-bottom: 1.5rem;">
              <label style="font-weight: 600; color: #666; font-size: 0.9rem; display: block; margin-bottom: 0.3rem;">Full Name</label>
              <div style="padding: 0.75rem; background: white; border: 1px solid #ddd; border-radius: 5px; color: #333;">${user?.name || 'N/A'}</div>
            </div>
            <div style="margin-bottom: 1.5rem;">
              <label style="font-weight: 600; color: #666; font-size: 0.9rem; display: block; margin-bottom: 0.3rem;">Email Address</label>
              <div style="padding: 0.75rem; background: white; border: 1px solid #ddd; border-radius: 5px; color: #333;">${user?.email || 'N/A'}</div>
            </div>
            <div style="margin-bottom: 1.5rem;">
              <label style="font-weight: 600; color: #666; font-size: 0.9rem; display: block; margin-bottom: 0.3rem;">Login Method</label>
              <div style="padding: 0.75rem; background: white; border: 1px solid #ddd; border-radius: 5px; color: #333;">${this.currentUser.loginMethod === 'google' ? '🔐 Google Account' : '📧 Email & Password'}</div>
            </div>
          </div>
          
          <!-- Account Stats -->
          <div style="background: #f0f0ff; padding: 2rem; border-radius: 10px; border: 2px solid #667eea;">
            <h3 style="color: #667eea; margin-bottom: 1.5rem;">📊 Account Statistics</h3>
            <div style="margin-bottom: 1.5rem; padding: 1rem; background: white; border-radius: 8px;">
              <p style="color: #666; margin: 0; font-size: 0.9rem;">Active Bookings</p>
              <p style="font-size: 2.2rem; color: #667eea; font-weight: 700; margin: 0.5rem 0;">${bookings.length}</p>
            </div>
            <div style="margin-bottom: 1.5rem; padding: 1rem; background: white; border-radius: 8px;">
              <p style="color: #666; margin: 0; font-size: 0.9rem;">Total Spent</p>
              <p style="font-size: 2.2rem; color: #27ae60; font-weight: 700; margin: 0.5rem 0;">₹${bookings.reduce((sum, b) => sum + b.price, 0).toLocaleString()}</p>
            </div>
            <div style="padding: 1rem; background: white; border-radius: 8px;">
              <p style="color: #666; margin: 0; font-size: 0.9rem;">Upcoming Shows</p>
              <p style="font-size: 2.2rem; color: #ff9800; font-weight: 700; margin: 0.5rem 0;">${bookings.filter(b => new Date(b.date) > new Date()).length}</p>
            </div>
          </div>
        </div>
        
        <!-- Account Actions -->
        <div style="background: #f9f9f9; padding: 2rem; border-radius: 10px; margin-top: 2rem;">
          <h3 style="color: #667eea; margin-bottom: 1rem;">⚡ Account Actions</h3>
          <button class="btn btn-secondary" onclick="app.logout()" style="background: #ff6b6b; color: white; padding: 0.75rem 1.5rem; border: none; border-radius: 5px; cursor: pointer;">🚪 Logout</button>
        </div>
      </div>
    `;
  },

  drawHomeCanvas() {
    const canvas = document.getElementById('homeCanvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    const w = canvas.width;
    const h = canvas.height;
    ctx.fillStyle = 'rgba(255, 255, 255, 0.1)';
    ctx.fillRect(0, 0, w, h);
    const cities = ['Ahmedabad', 'Surat', 'Rajkot', 'Vadodara', 'Bhuj'];
    const circleSpacing = w / (cities.length + 1);
    for (let i = 0; i < cities.length; i++) {
      const x = circleSpacing * (i + 1);
      const y = h / 2;
      ctx.fillStyle = `hsla(${(i * 72) % 360}, 100%, 60%, 0.7)`;
      ctx.beginPath();
      ctx.arc(x, y, 20, 0, Math.PI * 2);
      ctx.fill();
      ctx.fillStyle = 'white';
      ctx.font = 'bold 12px Arial';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText(cities[i].substring(0, 3), x, y);
    }
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.3)';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(20, h / 2);
    ctx.lineTo(w - 20, h / 2);
    ctx.stroke();
  },

  logout() {
    this.currentUser = null;
    localStorage.removeItem('user');
    this.navigate('/');
  }
};

// Global function for downloading booking design
function downloadBookingDesign(bookingId) {
  const bookings = JSON.parse(localStorage.getItem('bookings') || '[]');
  const booking = bookings.find(b => b.bookingId === bookingId);
  if (booking && booking.design) {
    const link = document.createElement('a');
    link.href = booking.design;
    link.download = booking.bookingId + '_ticket.png';
    link.click();
  }
}

document.addEventListener('DOMContentLoaded', () => {
  app.init();
  // If not logged in, redirect to login
  if (!app.currentUser) {
    app.navigate('/login');
  } else {
    setTimeout(() => app.drawHomeCanvas(), 300);
  }
});
