# Salesforce Exercise

# Summary
  * go to http://localhost:3000/exercise
  * you will see two avatars (Nemo (orange) and Dori (blue)) with img tags, placed some distance apart
  * Nemo is navigable with arrow keys, Dori swims away when Nemo collides into her
  * click right arrow, you will see Nemo swim towards Dori
  * onCollide, Dori swims away
  * if Nemo continues to swim towards Dori's direction, onCollide Dori swims away


# Approach
  * manually update top and left CSS positions for both Nemo and Dori by incrementing/decrementing their values
  * create a "counter" object in Redux that gets incremented/decremented by 5px on each arrow keypress
    * counter:  has properties x (integer), y (integer), hasCollided (boolean)
    * counter is passed as a prop to Exercise component
  * collision detection is determined measuring coordinates combined with width/height of two avatars to determine if space exists between avatars.  If no space exists, a collision has occured

# Tests
 * Time allowed a few simple tests to be created, they can be found at /tests/routes/Exercise
