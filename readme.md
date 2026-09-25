How did you dynamically create and append new elements to the DOM?

*I first created an array of objects that are when the user inputs data in the inputs and presses the add product button which then updates the price and shows the items as a list item in a unordered list

What steps did you take to ensure accurate updates to the total price?

*I used the given update price function to change the price an item was added or removed and what it does is manipulate the price span to show the price and that works when i add items to the shopping cart array or when removing items by removing both the items for the shopping cart and the list item from the ul

How did you handle invalid input for product name or price?

*when adding items to the shopping cart I have if statements that check if the inputs is empty or the price isn't a valid price

What challenges did you face when implementing the remove functionality?

*a challenge I faced when implementing the remove functionality was that i had to add a index and price attached to the list items to remove both the object from the array which removes the list item from the ul