# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a collection of HTML-based web games created by MUKI Vibe Coding. The project consists of standalone HTML files, each containing a complete game with embedded CSS and JavaScript. No build process or package manager is required.

## Project Structure

The codebase follows a simple flat structure:

- **Individual Game Files**: Each `.html` file is a standalone game:
  - `animal-2048.html` - Animal-themed 2048 puzzle game
  - `tetris-game.html` - Classic Tetris implementation
  - `brick-breaker.html` - Brick breaker arcade game
  - `fighter.html` - Puzzle Fighter style game
  - `maze.html` - Maze navigation game
  - `rpg-habit.html` - RPG habit tracker game
  - `battle-royale.html` - Battle royale style game
  - `ddd.html` - Dungeons & Dragons AI adventure game

- **Shared Components**:
  - `menu.js` - Global navigation menu system with Google Analytics
  - `footer.js` - Consistent footer with RemixIcon integration
  - `menu.json` - Configuration for navigation menu items

## Development Commands

This project does not use a package manager or build system. All games are standalone HTML files that can be:

- **Run locally**: Open any `.html` file directly in a web browser
- **Live server**: Use any static file server (e.g., `python -m http.server`, `npx serve`, or VS Code Live Server extension)

## Architecture Patterns

### Game Structure
Each game file follows this consistent pattern:
1. **HTML structure** with semantic markup
2. **Embedded CSS** using modern features and custom properties
3. **JavaScript classes** for game logic organization
4. **External dependencies** loaded via CDN:
   - Tailwind CSS for styling
   - RemixIcon for iconography
   - Google Fonts for typography

### Shared Menu System
Games include the global menu via:
```html
<script src="menu.js"></script>
```

The menu system:
- Loads menu items from `menu.json`
- Automatically injects navigation at page top
- Includes Google Analytics tracking
- Uses sticky positioning with backdrop blur

### Styling Conventions
- **Tailwind CSS** for utility-first styling
- **Custom CSS variables** for theme colors
- **Responsive design** with mobile-first approach
- **Consistent border radius** using custom `button` radius (8px)

### JavaScript Organization
- **Class-based architecture** for game logic
- **Event-driven programming** for user interactions
- **Local storage** for game state persistence
- **Async/await** for API calls (in AI-powered games)

## Special Features

### AI Integration (ddd.html)
The D&D adventure game includes:
- **Ollama integration** for local AI models
- **Story generation system** with structured prompts
- **Dice rolling mechanics** integrated with AI responses
- **Dynamic choice generation** based on player actions

### Game State Management
Most games implement:
- **Auto-save functionality** using localStorage
- **Settings persistence** across sessions
- **High score tracking** where applicable

## Development Guidelines

When working with this codebase:

1. **Maintain standalone nature** - Each game should work independently
2. **Use consistent styling** - Follow the established Tailwind + custom CSS pattern
3. **Preserve responsive design** - Ensure games work on mobile devices
4. **Include proper meta tags** - For SEO and mobile optimization
5. **Test cross-browser compatibility** - Games should work in all modern browsers

## External Dependencies

All games rely on CDN resources:
- **Tailwind CSS**: `https://cdn.tailwindcss.com/3.4.16`
- **RemixIcon**: `https://cdnjs.cloudflare.com/ajax/libs/remixicon/4.6.0/remixicon.min.css`
- **Google Fonts**: Various font families loaded per game

## Testing

Since this is a static HTML project:
- **Manual testing**: Open files in different browsers
- **Mobile testing**: Use browser dev tools or physical devices
- **Performance testing**: Check game frame rates and responsiveness