# Installment Payment Calculator

## Description

This is a simple **Installment Payment Calculator** built with HTML, CSS, and JavaScript. It allows users to calculate the monthly installment for purchasing a product (e.g., MacBook Air M1) on an installment plan, including the applied interest rate over a specified period.

Users can input:
- The price of the product.
- The annual interest rate.
- The duration of the loan in years.

The calculator then computes and displays the total amount (including interest) and the monthly installment.

## Features
- Input fields for product price, interest rate, and loan duration.
- Dynamic calculation of the total loan amount with interest.
- Monthly installment calculation based on the user’s input.

## How it Works

1. **User Input:**
   - Price of the product.
   - Annual interest rate.
   - Loan duration in years (default is 3 years).
   
2. **Calculations:**
   - The total amount is calculated by adding the interest to the original price.
   - The monthly installment is calculated by dividing the total amount by the total number of months (loan duration in years multiplied by 12).

3. **Output:**
   - The total amount (including interest) and the monthly installment are displayed on the page.

## How to Use

1. Download or clone this repository.
2. Open the `index.html` file in your web browser.
3. Enter the following information:
   - Price of the product (in TND).
   - Annual interest rate (in %).
   - Loan duration (in years).
4. Click **"Calculate Monthly Installment"** to see the results.

## Example

For a product priced at **1000 TND**, with an interest rate of **5%** over a **3-year** period, the tool will calculate the total loan amount and monthly installment, taking the interest into account.

### Example Calculation:
- Price: 1000 TND
- Interest Rate: 5%
- Duration: 3 years (36 months)

The total amount would be calculated as:
- Total Amount = Price * (1 + (Interest Rate / 100) * Duration)
- Monthly Installment = Total Amount / 36 months

## Files Included
- `index.html`: The HTML file containing the structure and functionality of the calculator.
- `style.css`: The embedded CSS for styling the page.
- `script.js`: The embedded JavaScript to handle the calculation logic.

## Contributing

If you'd like to contribute to this project, feel free to fork the repository, make improvements, and submit a pull request.

## License

This project is open source and available under the MIT License.

