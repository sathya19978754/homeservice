# Home Services App

## Overview

This is a Flask-based web application for a home services platform that mirrors a specific reference layout design. The application features a blue header navigation, circular service icons in a horizontal layout, and a promotional section with Amazon branding. Built with exact color specifications: Black (#263238), Blue (#0756A4), Orange (#FF7043), Yellow (#FBC129), and Belanosima font family.

## System Architecture

### Frontend Architecture
- **Template Engine**: Jinja2 templates with Flask
- **CSS Framework**: Bootstrap 5.3.0 for responsive design
- **Icons**: Font Awesome 6.4.0 for iconography
- **Typography**: Google Fonts (Belanosima family)
- **JavaScript**: Vanilla JavaScript for interactive features

### Backend Architecture
- **Framework**: Flask 3.1.1 (Python web framework)
- **Application Structure**: Simple Flask app with modular routing
- **Session Management**: Flask sessions with configurable secret key
- **Logging**: Python's built-in logging for debugging

### Data Storage Solutions
- **Database ORM**: Flask-SQLAlchemy 3.1.1 configured but not yet implemented
- **Database Driver**: psycopg2-binary 2.9.10 for PostgreSQL connectivity
- **Current State**: Basic session-based authentication without persistent storage

## Key Components

### Core Application Files
- `main.py`: Application entry point with development server configuration
- `app.py`: Main Flask application with route handlers
- `templates/`: Jinja2 HTML templates for UI rendering
- `static/`: Client-side assets (CSS, JavaScript, images)

### Authentication System
- Session-based login system (placeholder implementation)
- Basic form validation with flash messaging
- User session management with logout functionality

### Service Features
- Service overview on homepage
- Service booking form handling
- Responsive navigation with search functionality
- Contact section integration

### UI Components
- Fixed navigation bar with search
- Service cards layout
- Login form with toggle password visibility
- Service booking popup modal
- Flash message system for user feedback

## Data Flow

1. **User Authentication Flow**:
   - User accesses login page
   - Form submission validates credentials (basic validation)
   - Successful login stores email in session
   - Flash messages provide user feedback

2. **Service Booking Flow**:
   - User browses services on homepage
   - Service booking popup allows service selection
   - Form submission processes booking request
   - Flash confirmation message displayed

3. **Navigation Flow**:
   - Fixed navbar provides consistent navigation
   - Search functionality integrated in navbar
   - Contact section accessible via smooth scroll

## External Dependencies

### Python Packages
- **Flask**: Web framework and routing
- **Flask-SQLAlchemy**: Database ORM (configured for future use)
- **Gunicorn**: WSGI HTTP Server for production deployment
- **psycopg2-binary**: PostgreSQL database adapter
- **email-validator**: Email validation utilities

### Frontend Dependencies (CDN)
- **Bootstrap 5.3.0**: CSS framework
- **Font Awesome 6.4.0**: Icon library
- **Google Fonts**: Typography (Belanosima)

### Development Environment
- **Python 3.11**: Runtime environment
- **Nix packages**: OpenSSL and PostgreSQL system dependencies

## Deployment Strategy

### Production Deployment
- **Server**: Gunicorn WSGI server
- **Binding**: 0.0.0.0:5000 for container compatibility
- **Target**: Autoscale deployment on Replit
- **Process Management**: Gunicorn with port reuse and reload capabilities

### Development Environment
- **Local Development**: Flask development server with debug mode
- **Hot Reload**: Gunicorn with --reload flag for development
- **Port Configuration**: Configurable port binding (default 5000)

### Environment Configuration
- **Session Secret**: Environment variable with fallback
- **Debug Mode**: Enabled for development, should be disabled in production
- **Database**: PostgreSQL configured but not yet connected

## Changelog

```
Changelog:
- June 20, 2025. Initial setup
- June 20, 2025. Added complete Amazon email slider with smooth animation
- June 20, 2025. Implemented "Why Choose Us" section with hover effects
- June 20, 2025. Added "Top Picks" slider with deals and offers
- June 20, 2025. Created customer reviews slider with service images
- June 20, 2025. Integrated all icons from provided zip file
- June 20, 2025. Fixed JavaScript errors and improved navigation
- June 20, 2025. Added comprehensive footer, contact page, and login page
```

## User Preferences

```
Preferred communication style: Simple, everyday language.
```

## Notes for Development

### Database Integration
- The application is prepared for PostgreSQL integration with Drizzle ORM
- Current authentication is session-based placeholder
- Database schema and models need to be implemented

### Security Considerations
- Session secret should be properly configured for production
- Authentication system needs proper password hashing
- Input validation should be enhanced for production use

### Future Enhancements
- Implement proper user registration and authentication
- Add persistent data storage for services and bookings
- Integrate payment processing
- Add admin panel for service management
- Implement email notifications for bookings