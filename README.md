# Task Assignment For Marmeto(FrontEnd Intern) By Shubham Bisen

## Overview

This project is a simple, dynamic product gallery built using HTML, CSS, and JavaScript. It features a tab-switching interface allowing users to filter products by categories: Men, Women, and Kids. The project demonstrates fetching product data from an API, dynamically generating product cards, and implementing a responsive layout without the use of external libraries or frameworks.

### Features

- Dynamic product loading from an external API.
- Tabbed category selection (Men, Women, Kids) with active state indication.
- Responsive design for mobile, tablet, and desktop viewports.
- Display of product details including image, badge, title, vendor, price, compare at price, and calculated discount percentage.
- Dummy "Add to Cart" button for visual completeness.

## Resources

- Font Family: Inter from [Google Fonts](https://fonts.google.com/specimen/Inter).
- Product Data API: `https://cdn.shopify.com/s/files/1/0564/3685/0790/files/multiProduct.json`.

## Implementation Details

### HTML Structure

The HTML markup includes a container for the category selection tabs and a container for the product cards. The product cards are dynamically inserted into the DOM based on the selected category tab.

### CSS Styling

The CSS styling ensures the webpage is responsive and visually appealing. It includes styles for the container layouts, the active state for tabs, product cards, and the "Add to Cart" button, ensuring a consistent design across different screen sizes.

### JavaScript Functionality

- **Fetching Product Data**: JavaScript fetches product data from the provided API and categorizes it into Men, Women, and Kids products.
- **Tab Switching**: Implements logic to switch between the Men, Women, and Kids tabs, updating the active state and displaying the corresponding product cards.
- **Dynamic Product Cards**: Generates product cards dynamically based on the category selected, including product details like image, badge, title, vendor, price, compare at price, and discount percentage.
- **Responsive Design**: Ensures the webpage is responsive across different devices by adjusting styles and layouts accordingly.

## Requirements

- Use only HTML, CSS, and JavaScript.
- Do not use any libraries or frameworks (e.g., React, Tailwind, Bootstrap, jQuery).
- Ensure the webpage is responsive across devices with specified breakpoints.

## Project Structure


project-root/
│
├── index.html          # Main HTML file for the project
├── style.css           # CSS file for styling the project
└── script.js           # JavaScript file for dynamic functionality


### Index.html

The main HTML document contains the structure for the category selection tabs and a placeholder for the dynamically loaded product cards.

### Style.css

Contains all the styling required for the project, ensuring responsiveness and a visually appealing design.

### Script.js

Handles fetching product data from the API, dynamically generating and inserting product cards based on the selected category, and implementing the tab switching functionality.

## How to Run

1. Clone the repository to your local machine.
2. Open `index.html` in a web browser to view the project.

## Contribution

Contributions to improve the project are welcome. Please follow the standard GitHub pull request process to submit your changes.

## License

This project is open-sourced under the MIT License. See the LICENSE file for more details.

---

This documentation provides an overview of the project structure, implementation details, and instructions for running the project. It's designed to be included in a GitHub repository to assist users and contributors in understanding and interacting with the project.
