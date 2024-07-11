# Deceptors Crusade

Webpage to track Warhammer 40,000 crusade games.

## Description

Welcome to the Deceptors Crusade webpage! This site is dedicated to tracking the progress of my Warhammer 40,000 Alpha Legion army through a series of Crusade games. It provides a detailed account of various statistics, unit details, and overall performance across battles.

## Author

Michael Cooper
michael.cooper1210@ntlworld.com

## Version History

* 0.1
    * Initial Commit
    * Created a landing page with a navbar at the top, linking to future pages. The main viewport features a large background image and several information cards relevant to the overall crusade. Added a background blur effect on the cards to improve readability over the background image. Applied transparency to the background image and used "isolation:isolate" on the h1 and card elements to prevent them from being affected by the transparency. While editing the image directly would have been a better approach, I found this solution online.
    * Future plans include creating additional pages for the site and implementing a wrapper for the navbar to avoid duplicating code on each new page.
 * 0.2
     * Created one of the unit pages with the desired base layout. The information on this page relates to unit stat blocks from Warhammer 40,000, following a similar format. The aim is to update these stats as the Crusade games progress. I also plan to include pictures of my own models, although photography is not a strong-suit of mine.
     * Going forward, I aim to create a template for this layout, as I will be making nine pages in total that follow this format. Using a template will be more efficient than duplicating and manually editing each file.
     * My next goal is to create a wrapper for the navbar at the top of the page.
* 0.3
     * I looked into ways to create a wrapper for the navbar, I found a post on stack overflow for using web components to do this. Someone had a template to use which was easy to follow and I simply used my code in place of theirs. It looks like a very simple method and works effectively. I Applied this to both the index.html and legionaries_melee.html pages, I no longer need to copy and paste this whole section of code, and if I need to make any changes to the navbar, I only need to edit one file. Which will save a lot of time.
     * My next goal is to see if I can use web components to make a template for the units pages, and somehow parse data to them to create the eight other pages. Which will save time overall. 
* 0.4
     * Edited the nav-template to use the code for the unit template. For this I would be feeding data in from a separate json file. With this I can use this one javascript file and multiple json files to create the pages I need for the other units in the crusade games. 
     * Creating new JSON files will be straightforward, and updating them as the crusade games progress will be equally simple.
     * My next goal is to create multiple files for the other units.
* 0.5
     * Created json files for each unit with relevant information. Also added the images for each unit.
     * My next goal is to create multiple html files for these units.