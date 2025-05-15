# Personal Portfolio

This is a personal portfolio website built using Next.js and TypeScript, featuring Shadcn UI for a modern and responsive design.

## Project Structure

The project is organized as follows:

```
personal-portfolio
├── public
│   ├── Images          # Directory for image assets
│   └── favicon.ico     # Favicon for the website
├── src
│   ├── app
│   │   ├── page.tsx    # Main entry point for the application
│   │   └── layout.tsx   # Layout structure for the application
│   ├── components
│   │   └── ui          # Reusable UI components
│   ├── styles
│   │   └── globals.css  # Global CSS styles
│   └── types
│       └── index.ts     # TypeScript types and interfaces
├── package.json         # npm configuration file
├── tsconfig.json        # TypeScript configuration file
├── next.config.js       # Next.js configuration settings
└── README.md            # Documentation for the project
```

## Getting Started

### Prerequisites

- Node.js (version 12 or later)
- npm (Node Package Manager)

### Installation

1. **Create a New Next.js Project with TypeScript**:
   ```bash
   npx create-next-app@latest personal-portfolio --typescript
   cd personal-portfolio
   ```

2. **Install Shadcn UI**:
   ```bash
   npm install @shadcn/ui
   ```

3. **Install Additional Dependencies** (if needed):
   ```bash
   npm install -D tailwindcss postcss autoprefixer
   npx tailwindcss init -p
   ```

4. **Rename Your Existing HTML and CSS Files**:
   - Move your existing HTML files into the `src/app` directory and rename them to `page.tsx` or `layout.tsx` as appropriate.
   - Move your CSS files into the `src/styles` directory and rename them to `globals.css`.
   - Move your images into the `public/Images` directory.

### Running the Application

1. **Start the Development Server**:
   ```bash
   npm run dev
   ```

2. **View Your Portfolio**:
   Open your browser and navigate to `http://localhost:3000` to see your portfolio site in action.

## Contributing

Feel free to submit issues or pull requests to improve the project.

## License

This project is open-source and available under the [MIT License](LICENSE).