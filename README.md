# Random Password Generator

## A page using Javascript for generating a random password based on some user set parameters

## The motivation for this project was:
- To utilize JavaScript functions effectively
- To create an adaptable programme capable of taking user generated inputs and changing the functionality of the programme accordingly
- To solidify my understanding of scope within JavaScript

Overall this task was _fairly_ straightforward, the actual logic involved is relatively simple. __However__, I ran into trouble due to not paying proper attention to the projects different scopes.

_Also_, Using a _for_ loop to cycle through and randomly select 1 of 4 seperate arrays of characters I found that the code __would__ pull characters randomly, but would multiply the user input length by 4 and have the random characters running in order of character __type__, see the code below:

![](/Screenshots/Length%20Multiplier%20Issue.png)

With hindsight the issue is embarassingly obvious, the loop pulled 4 characters in a set order for every 1 of the user's input length.

The fixed code is below:

![](/Screenshots/Fixed%20Multiply%20with%20AllChars.png)

By creating an array holding the data arrays, I could randomize the index of the parent array (choosing one of the four child arrays) and then randomize the index of the selected child array within one line.
 As well as actually working, this saves a lot of space and time (had I not already written it the wrong and incorrect way).

 Now that the script was correctly creating a random password I had to write what I had into the pre-written script so it was accessible from the browser.

Here I found some issues in that the html would always display __undefined__, but using console.log I could see that the password was being generated. 
The reason was that I had been writing the code in a modular fashion but had neglected to properly arrange these modules into one cohesive piece of code. With some advice it was simply a matter of deconstructing some of the modules and inserting __all__ of the functions I had created for both gathering user inputs and generating the password from those inputs into one large function; previously the functions had worked but the results were inaccessible.    



