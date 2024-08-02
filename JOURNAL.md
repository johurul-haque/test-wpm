*01 August 2024*

Second day on this project. Built the countdown timer the first day, with the input field and reset button. 

Now I'm trying to **clear the input field** on clicking the space bar and save the value in an array.

**challenges**:
- Clearing the input field by using the `key` attribute changes the focus.
- If I use `autoFocus` attribute to have the focus the input field. But it causes the input field to store a single character space value. I can trim the value but how can I reflect that on the input field.

**workarounds**:
- using another `useState` for the input value. Resetting it after the space bar clicked but still the single character space remains. 
- so I'm passing `inputValue.trim()` in the input field value prop and it's removing the extra space.

*02 August 2024*

Day 3 of this project. Implemented the reset button so far. Setting all of the states to its initial state.

**challenges**
- There's multiple *(4)* state declarations in the file. 