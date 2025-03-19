
Hero temp
```jsx
import React, { useState, useRef, useEffect } from 'react';
import Button from './Button.jsx';
import gsap from 'gsap';

const Hero = () => {
  // State to track if all tiles are flipped
  const [isFlipped, setIsFlipped] = useState(false);

  // Store tile elements in a ref
  const tilesRef = useRef({});

  // Function to flip all tiles on button click
  const flipAllTiles = () => {
    setIsFlipped((prev) => !prev);

    gsap.to(Object.values(tilesRef.current), {
      rotateX: isFlipped ? 0 : 180,
      duration: 1,
      ease: "power2.inOut",
      stagger: {
        amount: 1,
        from: "random",
      },
    });
  };

  // Function to handle hover flip on a single tile
  const flipTileOnHover = (tileKey) => {
    const tile = tilesRef.current[tileKey];
    if (!tile) return; // Prevent errors if tile is not found

    gsap.to(tile, {
      rotateX: 180, // Flip tile when hovered
      duration: 0.5,
      ease: "power2.inOut",
    });

    // Reset back to normal after mouse leaves
    setTimeout(() => {
      gsap.to(tile, {
        rotateX: 0, // Flip back to original position
        duration: 0.5,
        ease: "power2.inOut",
      });
    }, 500);
  };

  // Function to create a tile
  const createTile = (row, col) => {
    const bgPosition = `${col * 20}% ${row * 20}%`;
    const tileKey = `tile-${row}-${col}`;

    return (
      <div
        key={tileKey}
        ref={(el) => (tilesRef.current[tileKey] = el)}
        className="tile"
        onMouseEnter={() => flipTileOnHover(tileKey)}
      >
        <div className="tile-face tile-front" style={{ backgroundPosition: bgPosition }}></div>
        <div className="tile-face tile-back" style={{ backgroundPosition: bgPosition }}></div>
      </div>
    );
  };

  // Function to generate rows dynamically
  const generateRows = () => {
    return Array.from({ length: 6 }).map((_, rowIndex) => (
      <div className="row" key={rowIndex}>
        {Array.from({ length: 6 }).map((_, colIndex) => createTile(rowIndex, colIndex))}
      </div>
    ));
  };

  return (
    <div className="h-screen w-screen">
      {/* Button to flip all tiles */}
      <Button 
        id="flipButton" 
        title="Flipper"
        classContainer="absolute bottom-5 right-3 uppercase pointer-events-auto z-100"
        Click={flipAllTiles} // Flip all tiles on button click
      />

      {/* Tile Board */}
      <section className="board">{generateRows()}</section>

      {/* Blocks container (if needed) */}
      <div className="blocks-container">
        <div className="blocks"></div>
      </div>
    </div>
  );
};

export default Hero;

```





```css
@import url('https://fonts.googleapis.com/css2?family=Lilita+One&family=Rye&display=swap');
@import "tailwindcss";

@plugin "daisyui";

body {
  background-color: black;
  color: white;
  font-family: "Lilita One", sans-serif;
  font-size: 1rem;
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

@theme {
  --font-rye: "Rye", serif;
  --font-lilita-one: "Lilita One", sans-serif;
  --color-primary: #B99F65;
  --color-secondary: #B99F65;
}

@layer components {
  .board {
    @apply w-screen h-screen p-1 flex flex-col gap-1 relative z-1;
    perspective: 1000px;
  }

  .row {
    @apply flex flex-1 gap-1;
  }

  .tile {
    @apply flex-1 relative;
    transform-style: preserve-3d;
  }

  .tile-face {
    @apply absolute w-full h-full rounded-lg overflow-hidden;
    backface-visibility: hidden;
  }
  
  .tile-front {
    @apply bg-amber-500;
  }
  
  .tile-back {
    @apply bg-amber-500;
    transform: rotateX(180deg);
  }

  .tile-front::before,
  .tile-back::before {
    content: "";
    @apply absolute inset-0 ;
    clip-path: inset(0 round 0.25rem);
    background-size: 600% 600%;
    background-position: inherit;
  }

  .tile-front::before {
    background-image: url("/Hero_1.png");
  }

  .tile-back::before {
    background-image: url("/Hero_2.png");
  }

  .blocks-container {
    @apply fixed top-0 left-0 w-screen h-screen overflow-hidden pointer-events-auto z-2;
  }

  blocks {
    @apply w-[105vw] h-[100vh] flex flex-wrap justify-start content-start overflow-hidden;
  }

  .block {
    @apply w-[50px] h-[50px] border-solid border-[0.5px] border-transparent transition-colors duration-300 ease-in-out;
  }

  .highlight {
    @apply border-white;
  }
}
```


"I write this but not fully understand react, and tailwindcss, explain each part for me like I'm 10, and if you have a more efficent way to do it, teach me. I like to use gsap for animation so keep it. "```jsx
import React, { useState, useRef, useEffect } from 'react';
import Button from './Button.jsx';
import gsap from 'gsap';

const Hero = () => {
  // State to track if all tiles are flipped
  const [isFlipped, setIsFlipped] = useState(false);

  // Store tile elements in a ref
  const tilesRef = useRef({});

  // Function to flip all tiles on button click
  const flipAllTiles = () => {
    setIsFlipped((prev) => !prev);

    gsap.to(Object.values(tilesRef.current), {
      rotateX: isFlipped ? 0 : 180,
      duration: 1,
      ease: "power2.inOut",
      stagger: {
        amount: 1,
        from: "random",
      },
    });
  };

  // Function to handle hover flip on a single tile
  const flipTileOnHover = (tileKey) => {
    const tile = tilesRef.current[tileKey];
    if (!tile) return; // Prevent errors if tile is not found

    gsap.to(tile, {
      rotateX: 180, // Flip tile when hovered
      duration: 0.5,
      ease: "power2.inOut",
    });

    // Reset back to normal after mouse leaves
    setTimeout(() => {
      gsap.to(tile, {
        rotateX: 0, // Flip back to original position
        duration: 0.5,
        ease: "power2.inOut",
      });
    }, 500);
  };

  // Function to create a tile
  const createTile = (row, col) => {
    const bgPosition = `${col * 20}% ${row * 20}%`;
    const tileKey = `tile-${row}-${col}`;

    return (
      <div
        key={tileKey}
        ref={(el) => (tilesRef.current[tileKey] = el)}
        className="tile"
        onMouseEnter={() => flipTileOnHover(tileKey)}
      >
        <div className="tile-face tile-front" style={{ backgroundPosition: bgPosition }}></div>
        <div className="tile-face tile-back" style={{ backgroundPosition: bgPosition }}></div>
      </div>
    );
  };

  // Function to generate rows dynamically
  const generateRows = () => {
    return Array.from({ length: 6 }).map((_, rowIndex) => (
      <div className="row" key={rowIndex}>
        {Array.from({ length: 6 }).map((_, colIndex) => createTile(rowIndex, colIndex))}
      </div>
    ));
  };

  return (
    <div className="h-screen w-screen">
      {/* Button to flip all tiles */}
      <Button 
        id="flipButton" 
        title="Flipper"
        classContainer="absolute bottom-5 right-3 uppercase pointer-events-auto z-100"
        Click={flipAllTiles} // Flip all tiles on button click
      />

      {/* Tile Board */}
      <section className="board">{generateRows()}</section>

      {/* Blocks container (if needed) */}
      <div className="blocks-container">
        <div className="blocks"></div>
      </div>
    </div>
  );
};

export default Hero;

```





```css
@import url('https://fonts.googleapis.com/css2?family=Lilita+One&family=Rye&display=swap');
@import "tailwindcss";

@plugin "daisyui";

body {
  background-color: black;
  color: white;
  font-family: "Lilita One", sans-serif;
  font-size: 1rem;
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

@theme {
  --font-rye: "Rye", serif;
  --font-lilita-one: "Lilita One", sans-serif;
  --color-primary: #B99F65;
  --color-secondary: #B99F65;
}

@layer components {
  .board {
    @apply w-screen h-screen p-1 flex flex-col gap-1 relative z-1;
    perspective: 1000px;
  }

  .row {
    @apply flex flex-1 gap-1;
  }

  .tile {
    @apply flex-1 relative;
    transform-style: preserve-3d;
  }

  .tile-face {
    @apply absolute w-full h-full rounded-lg overflow-hidden;
    backface-visibility: hidden;
  }
  
  .tile-front {
    @apply bg-amber-500;
  }
  
  .tile-back {
    @apply bg-amber-500;
    transform: rotateX(180deg);
  }

  .tile-front::before,
  .tile-back::before {
    content: "";
    @apply absolute inset-0 ;
    clip-path: inset(0 round 0.25rem);
    background-size: 600% 600%;
    background-position: inherit;
  }

  .tile-front::before {
    background-image: url("/Hero_1.png");
  }

  .tile-back::before {
    background-image: url("/Hero_2.png");
  }

  .blocks-container {
    @apply fixed top-0 left-0 w-screen h-screen overflow-hidden pointer-events-auto z-2;
  }

  blocks {
    @apply w-[105vw] h-[100vh] flex flex-wrap justify-start content-start overflow-hidden;
  }

  .block {
    @apply w-[50px] h-[50px] border-solid border-[0.5px] border-transparent transition-colors duration-300 ease-in-out;
  }

  .highlight {
    @apply border-white;
  }
}
```""





Your JSX Code (The Toy Blueprint)
1. Imports
jsx

Collapse

Wrap

Copy
import React, { useState, useRef, useEffect } from 'react';
import Button from './Button.jsx';
import gsap from 'gsap';
What it means: You’re grabbing tools from a toy box.
React is the main toy-building kit.
useState is like a little switch to remember if something’s flipped or not.
useRef is a sticky note to keep track of your toy cards.
gsap is your magic wand for spinning things.
Button is a pre-made button you built somewhere else.
2. The Hero Toy
jsx

Collapse

Wrap

Copy
const Hero = () => {
What it means: This is your toy’s name, Hero. It’s the whole flip-board game you’re making!
3. Tracking Flips
jsx

Collapse

Wrap

Copy
const [isFlipped, setIsFlipped] = useState(false);
What it means: Imagine a light switch. It’s off (false) at first. When you flip all the cards, you turn it on (true) with setIsFlipped. This helps you know if the cards are flipped or not.
4. Sticky Notes for Cards
jsx

Collapse

Wrap

Copy
const tilesRef = useRef({});
What it means: This is a box of sticky notes (tilesRef). Each card gets a note with its name (like tile-0-1), so you can find it later to flip it.
5. Flipping All Cards
jsx

Collapse

Wrap

Copy
const flipAllTiles = () => {
  setIsFlipped((prev) => !prev);

  gsap.to(Object.values(tilesRef.current), {
    rotateX: isFlipped ? 0 : 180,
    duration: 1,
    ease: "power2.inOut",
    stagger: {
      amount: 1,
      from: "random",
    },
  });
};
What it means: This is your “Flip Everything!” button code.
setIsFlipped((prev) => !prev) flips the switch (if it’s off, turn it on; if it’s on, turn it off).
gsap.to is your magic wand waving over all the cards (tilesRef.current).
rotateX: isFlipped ? 0 : 180 means spin them 180 degrees (upside down) if they’re not flipped, or back to normal (0 degrees) if they are.
duration: 1 takes 1 second to spin.
ease: "power2.inOut" makes it smooth, like a gentle push.
stagger makes them flip one-by-one randomly, like a wave of flips.
6. Flipping One Card on Hover
jsx

Collapse

Wrap

Copy
const flipTileOnHover = (tileKey) => {
  const tile = tilesRef.current[tileKey];
  if (!tile) return;

  gsap.to(tile, {
    rotateX: 180,
    duration: 0.5,
    ease: "power2.inOut",
  });

  setTimeout(() => {
    gsap.to(tile, {
      rotateX: 0,
      duration: 0.5,
      ease: "power2.inOut",
    });
  }, 500);
};
What it means: This flips one card when you hover over it.
tileKey is the card’s sticky note name (like tile-0-1).
tilesRef.current[tileKey] finds that card.
First gsap.to flips it upside down in half a second (0.5).
setTimeout waits half a second (500 milliseconds), then flips it back with another gsap.to.
7. Making a Card
jsx

Collapse

Wrap

Copy
const createTile = (row, col) => {
  const bgPosition = `${col * 20}% ${row * 20}%`;
  const tileKey = `tile-${row}-${col}`;

  return (
    <div
      key={tileKey}
      ref={(el) => (tilesRef.current[tileKey] = el)}
      className="tile"
      onMouseEnter={() => flipTileOnHover(tileKey)}
    >
      <div className="tile-face tile-front" style={{ backgroundPosition: bgPosition }}></div>
      <div className="tile-face tile-back" style={{ backgroundPosition: bgPosition }}></div>
    </div>
  );
};
What it means: This builds one card.
row and col are like its spot on a grid (e.g., row 1, column 2).
bgPosition moves a big picture so each card shows a different part of it (like a puzzle piece).
tileKey is its sticky note name.
<div> is the card, with:
ref puts the sticky note in your box.
onMouseEnter calls the hover flip when you touch it.
Two tile-face divs: one for the front, one for the back (they spin to show each side).
8. Building the Grid
jsx

Collapse

Wrap

Copy
const generateRows = () => {
  return Array.from({ length: 6 }).map((_, rowIndex) => (
    <div className="row" key={rowIndex}>
      {Array.from({ length: 6 }).map((_, colIndex) => createTile(rowIndex, colIndex))}
    </div>
  ));
};
What it means: This makes a 6x6 grid of cards.
Array.from({ length: 6 }) is like counting to 6 (0, 1, 2, 3, 4, 5).
First one makes 6 rows.
Second one puts 6 cards in each row by calling createTile.
9. Putting It All Together
jsx

Collapse

Wrap

Copy
return (
  <div className="h-screen w-screen">
    <Button 
      id="flipButton" 
      title="Flipper"
      classContainer="absolute bottom-5 right-3 uppercase pointer-events-auto z-100"
      Click={flipAllTiles}
    />
    <section className="board">{generateRows()}</section>
    <div className="blocks-container">
      <div className="blocks"></div>
    </div>
  </div>
);
What it means: This is your toy’s final look.
A big box (h-screen w-screen) takes up the whole screen.
A Button at the bottom-right says “Flipper” and flips everything when clicked.
A board section holds your 6x6 grid.
A blocks-container is empty right now (maybe for later?).
Your CSS (The Toy’s Paint and Glue)
1. Imports
css

Collapse

Wrap

Copy
@import url('https://fonts.googleapis.com/css2?family=Lilita+One&family=Rye&display=swap');
@import "tailwindcss";
@plugin "daisyui";
What it means: You’re grabbing cool fonts (Lilita One and Rye), Tailwind (fast painting tools), and DaisyUI (extra Tailwind helpers).
2. Body Paint
css

Collapse

Wrap

Copy
body {
  background-color: black;
  color: white;
  font-family: "Lilita One", sans-serif;
  font-size: 1rem;
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
What it means: The whole toy world is black with white text, using the fun Lilita One font. No extra space around the edges.
3. Custom Colors and Fonts
css

Collapse

Wrap

Copy
@theme {
  --font-rye: "Rye", serif;
  --font-lilita-one: "Lilita One", sans-serif;
  --color-primary: #B99F65;
  --color-secondary: #B99F65;
}
What it means: You’re naming some paints (goldish #B99F65) and fonts for Tailwind to use later.
4. Board Style
css

Collapse

Wrap

Copy
.board {
  @apply w-screen h-screen p-1 flex flex-col gap-1 relative z-1;
  perspective: 1000px;
}
What it means: The board fills the screen, stacks rows vertically (flex-col), and has a tiny gap (gap-1). perspective: 1000px makes the 3D flips look real.
5. Row Style
css

Collapse

Wrap

Copy
.row {
  @apply flex flex-1 gap-1;
}
What it means: Each row stretches wide (flex-1) and lines up cards horizontally (flex) with a tiny gap.
6. Card Style
css

Collapse

Wrap

Copy
.tile {
  @apply flex-1 relative;
  transform-style: preserve-3d;
}
What it means: Cards stretch to fit (flex-1), and preserve-3d lets them spin in 3D.
7. Card Faces
css

Collapse

Wrap

Copy
.tile-face {
  @apply absolute w-full h-full rounded-lg overflow-hidden;
  backface-visibility: hidden;
}
.tile-front {
  @apply bg-amber-500;
}
.tile-back {
  @apply bg-amber-500;
  transform: rotateX(180deg);
}
What it means:
Faces fill the card, have rounded corners, and hide their backs when flipped (backface-visibility: hidden).
Front is orange (amber-500); back is orange too but starts upside down (rotateX(180deg)).
8. Picture on Cards
css

Collapse

Wrap

Copy
.tile-front::before,
.tile-back::before {
  content: "";
  @apply absolute inset-0 ;
  clip-path: inset(0 round 0.25rem);
  background-size: 600% 600%;
  background-position: inherit;
}
.tile-front::before {
  background-image: url("/Hero_1.png");
}
.tile-back::before {
  background-image: url("/Hero_2.png");
}
What it means: Adds a picture layer (::before) on each face.
background-size: 600% 600% makes the picture huge so each card shows a piece.
background-position: inherit uses the bgPosition from JSX.
Front shows Hero_1.png; back shows Hero_2.png.
A Simpler Way (Keeping GSAP)
Your code works, but it’s like building a toy with too many steps. Here’s a simpler version:

JSX
jsx

Collapse

Wrap

Copy
import React, { useState, useRef } from 'react';
import Button from './Button.jsx';
import gsap from 'gsap';

const Hero = () => {
  const [isFlipped, setIsFlipped] = useState(false);
  const boardRef = useRef(null);

  const flipAllTiles = () => {
    setIsFlipped((prev) => !prev);
    gsap.to(boardRef.current.querySelectorAll('.tile'), {
      rotateX: isFlipped ? 0 : 180,
      duration: 1,
      ease: "power2.inOut",
      stagger: { amount: 1, from: "random" },
    });
  };

  const handleHover = (tile, isEntering) => {
    gsap.to(tile, {
      rotateX: isEntering ? 180 : 0,
      duration: 0.5,
      ease: "power2.inOut",
    });
  };

  return (
    <div className="h-screen w-screen">
      <Button
        id="flipButton"
        title="Flipper"
        classContainer="absolute bottom-5 right-3 uppercase pointer-events-auto z-10"
        Click={flipAllTiles}
      />
      <section ref={boardRef} className="board">
        {Array.from({ length: 36 }).map((_, i) => {
          const row = Math.floor(i / 6);
          const col = i % 6;
          const bgPosition = `${col * 20}% ${row * 20}%`;
          return (
            <div
              key={`tile-${i}`}
              className="tile"
              onMouseEnter={(e) => handleHover(e.currentTarget, true)}
              onMouseLeave={(e) => handleHover(e.currentTarget, false)}
            >
              <div className="tile-face tile-front" style={{ backgroundPosition }} />
              <div className="tile-face tile-back" style={{ backgroundPosition }} />
            </div>
          );
        })}
      </section>
    </div>
  );
};

export default Hero;
CSS (Same, but tweak board and remove unused stuff)
css

Collapse

Wrap

Copy
.board {
  @apply w-screen h-screen p-1 grid grid-cols-6 gap-1 relative z-1;
  perspective: 1000px;
}
Why It’s Better:
Fewer Refs: Use one boardRef and find tiles with querySelectorAll instead of tracking each tile.
Simpler Grid: Use a flat 36-tile array and grid in CSS instead of nested rows.
Cleaner Hover: No setTimeout; hover flips and unflips naturally with onMouseEnter and onMouseLeave.
Less Code: Same fun flips with less work!
Try this out—it keeps your GSAP magic but makes your toy easier to build and play with! What do you think? Want to tweak it more?

```



## Function in React