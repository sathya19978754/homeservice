import os
from flask import Flask, render_template, request, redirect, url_for, flash, session
import logging

# Configure logging for debugging
logging.basicConfig(level=logging.DEBUG)

app = Flask(__name__)
app.secret_key = os.environ.get("SESSION_SECRET", "dev-secret-key-change-in-production")

# SVG Icons function for templates
def include_svg_icons():
    return """
        <svg xmlns="http://www.w3.org/2000/svg" style="display: none;">
            <defs>
                <symbol id="cleaning-icon" viewBox="0 0 100 100">
                    <circle cx="50" cy="20" r="15" fill="currentColor" opacity="0.9"/>
                    <rect x="45" y="35" width="10" height="40" fill="currentColor" rx="5"/>
                    <ellipse cx="50" cy="80" rx="25" ry="10" fill="currentColor" opacity="0.7"/>
                    <path d="M35 75 Q50 70 65 75" stroke="currentColor" stroke-width="2" fill="none"/>
                    <circle cx="30" cy="78" r="3" fill="currentColor" opacity="0.8"/>
                    <circle cx="70" cy="78" r="3" fill="currentColor" opacity="0.8"/>
                </symbol>
                
                <symbol id="ac-icon" viewBox="0 0 100 100">
                    <rect x="15" y="25" width="70" height="50" rx="8" fill="currentColor"/>
                    <rect x="20" y="30" width="60" height="40" rx="5" fill="white" opacity="0.2"/>
                    <line x1="25" y1="40" x2="75" y2="40" stroke="white" stroke-width="3" opacity="0.8"/>
                    <line x1="25" y1="50" x2="75" y2="50" stroke="white" stroke-width="3" opacity="0.8"/>
                    <line x1="25" y1="60" x2="75" y2="60" stroke="white" stroke-width="3" opacity="0.8"/>
                    <circle cx="70" cy="35" r="4" fill="white" opacity="0.9"/>
                    <path d="M15 75 L25 85 L75 85 L85 75" fill="currentColor" opacity="0.6"/>
                </symbol>
                
                <symbol id="salon-icon" viewBox="0 0 100 100">
                    <circle cx="50" cy="30" r="18" fill="currentColor"/>
                    <path d="M32 48 Q50 38 68 48 L68 72 Q50 82 32 72 Z" fill="currentColor"/>
                    <circle cx="43" cy="26" r="2.5" fill="white"/>
                    <circle cx="57" cy="26" r="2.5" fill="white"/>
                    <path d="M45 32 Q50 35 55 32" stroke="white" stroke-width="2" fill="none"/>
                    <path d="M40 15 Q50 5 60 15" stroke="currentColor" stroke-width="3" fill="none"/>
                    <circle cx="35" cy="20" r="3" fill="currentColor" opacity="0.7"/>
                    <circle cx="65" cy="20" r="3" fill="currentColor" opacity="0.7"/>
                </symbol>
                
                <symbol id="handyman-icon" viewBox="0 0 100 100">
                    <rect x="15" y="35" width="70" height="12" fill="currentColor" rx="6"/>
                    <circle cx="25" cy="41" r="8" fill="white" opacity="0.9"/>
                    <circle cx="75" cy="41" r="8" fill="white" opacity="0.9"/>
                    <rect x="42" y="15" width="16" height="70" fill="currentColor" rx="8"/>
                    <polygon points="35,12 65,12 60,22 40,22" fill="currentColor"/>
                    <rect x="46" y="55" width="8" height="8" fill="white" opacity="0.8"/>
                    <rect x="46" y="67" width="8" height="8" fill="white" opacity="0.8"/>
                    <circle cx="50" cy="25" r="4" fill="white" opacity="0.9"/>
                </symbol>
                
                <symbol id="healthcare-icon" viewBox="0 0 100 100">
                    <circle cx="50" cy="50" r="40" stroke="currentColor" stroke-width="4" fill="none"/>
                    <rect x="42" y="25" width="16" height="50" fill="currentColor" rx="2"/>
                    <rect x="25" y="42" width="50" height="16" fill="currentColor" rx="2"/>
                    <circle cx="50" cy="50" r="8" fill="white" opacity="0.3"/>
                    <path d="M20 20 L30 30 M80 20 L70 30 M20 80 L30 70 M80 80 L70 70" stroke="currentColor" stroke-width="2" opacity="0.6"/>
                </symbol>
            </defs>
        </svg>
    """

# Make the function available in templates
app.jinja_env.globals.update(include_svg_icons=include_svg_icons)

@app.route('/')
def index():
    """Home page with services overview"""
    return render_template('index.html')

@app.route('/login', methods=['GET', 'POST'])
def login():
    """Login page with form handling"""
    if request.method == 'POST':
        email = request.form.get('email')
        password = request.form.get('password')
        
        if not email or not password:
            flash('Please fill in all fields', 'error')
            return render_template('login.html')
        
        # Basic validation - in production, use proper authentication
        if email and password:
            session['user_email'] = email
            flash('Login successful!', 'success')
            return redirect(url_for('index'))
        else:
            flash('Invalid credentials', 'error')
    
    return render_template('login.html')

@app.route('/logout')
def logout():
    """Logout and clear session"""
    session.clear()
    flash('You have been logged out', 'info')
    return redirect(url_for('index'))

@app.route('/book-service', methods=['POST'])
def book_service():
    """Handle service booking requests"""
    service_type = request.form.get('service_type')
    if service_type:
        flash(f'Booking request received for {service_type}. We will contact you soon!', 'success')
    else:
        flash('Please select a service', 'error')
    return redirect(url_for('index'))

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000, debug=True)
