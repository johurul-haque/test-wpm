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

**workarounds**
- If the state declaration increases will shift to using `zustand`

*03 August 2024*

Day 4 of the project. Using `zustand`; handling incorrect word states, mistakes, and showing accuracy percentages.

**challenges**
- Having the active word at the top of word-box

*04 August 2024*

**challenges**
- Preventing word box component from re-rendering on timer change.
- Preventing any other unnecessary re-rendering.

*06 August 2024*

**challenges**
- Active word should be in the second row after the first row of words finishes when the test starts.
  - First I need to determine in which number of rows the active word is in.
  - After the current row of words finishes the previous row of words should be removed.

**workarounds**
- To determine in which number of rows the active word is in I'm comparing the vertical positions of adjacent elements. When a significant change in vertical position is detected, it means the the element has moved to a new row.
- Now to delete the first row every time the active word moves to a new row. But deleting causes inconsistency in the states. So instead of deleting I'm hiding the elements of the first row.