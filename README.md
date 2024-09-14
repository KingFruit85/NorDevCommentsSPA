# Nor(Dev)Comments bot - All Comments!

This project is a React-based web application that mimics a Discord-like message board. It features message display with pagination, filtering, and sorting capabilities.

## Features

- Display messages in a Discord-like format
- Pagination for easy navigation through messages
- Search functionality to filter messages
- Sorting messages by vote count
- Display of images attached to messages
- Responsive design

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

- Node.js (v14 or later recommended)
- npm (comes with Node.js)

### Installation

1. Clone the repository:
   ```
   git clone https://github.com/yourusername/your-repo-name.git
   ```

2. Navigate to the project directory:
   ```
   cd your-repo-name
   ```

3. Install dependencies:
   ```
   npm install
   ```

4. Create a `.env` file in the root directory and add:
   ```
   REACT_APP_USE_LOCAL_DATA=true
   ```
   Set to `false` if you want to use the API instead of local data.

5. Start the development server:
   ```
   npm start
   ```

6. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Usage

- Use the search bar to filter messages by content or username.
- Navigate through pages using the pagination controls at the bottom of the page.
- Messages are automatically sorted by vote count in descending order.

## Deployment

This project is set up for easy deployment to Netlify. Just connect your GitHub repository to Netlify, and it will automatically deploy when you push changes to your main branch.

## Built With

- [React](https://reactjs.org/) - The web framework used
- [TypeScript](https://www.typescriptlang.org/) - For type-safe code
- [CSS Modules](https://github.com/css-modules/css-modules) - For component-scoped CSS

## Contributing

Please read [CONTRIBUTING.md](CONTRIBUTING.md) for details on our code of conduct, and the process for submitting pull requests to us.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments

- Inspired by Discord's user interface
- Thanks to all the members of the Nor(Dev) discord community for all the laughs over the years.