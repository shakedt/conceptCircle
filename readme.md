# CodeSparks' FED task
Welcome!

Included with this file is a very simple client-side app.
Your mission, is to improve it a bit by implementing some additional features.
Please focus on good coding practices.  

Once done, please send back the new and improved version.

What to do:
1) Make the piece "hollow" when the mouse hovers over it (hollow means only the border should be drawn with the color of the piece) - done
2) The `init` function has too much code duplication - fix it  - dpne
3) Add a 'Reset' button that returns the piece back to its initial location - done
4) Add a 'Randomize' button that places the piece at a random location -done
5) Make sure that the piece never gets off the screen - done
6) When the page loads, get today's temperature from an API and set the piece's color according to the following ranges: - done 
    - < 10 degrees: Blue
    - 11 - 20 degrees: Green
    - 21 - 30 degrees: Yellow
    - More than 30 degrees: Red

    You can use this URL to retrieve the weather data for Tel-Aviv:  
    http://api.apixu.com/v1/current.json?key=dda6e762ae4f41efb7e173552192204&q=tel%20aviv
7) Please describe how would you make the motion of the piece smooth instead of jumpy?  
   Implement your suggestion for extra bonus! - 
   ** you can add Animation tranisition using css. implemented in the code.

8) How would you improve the code of this project?   
Meaning, how would you implement the same application differently (if at all) - did you have parts of the code that you didn't like? would you add anything? Use a different architecture? 

** I will start by moving the project to a react envoirment and splitting to reusabel components.
** adding tests
** splitting to mutiply files

Give some suggestions!

Thanks and good luck!
