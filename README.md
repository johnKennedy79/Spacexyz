# Spacexyz

## Assignment Goals

### Setting up he page structure

1. Create a new index.html file, just like the last project, and set up the basic doc structure

We're going to build the rough page structure with HTML, as we interpret it from the design.

2. Set up the page with three primary sections: header, main, and footer

3. Use an <h1> tag in the header to add the company name, and a <nav> tag with some nav links. We'll just point them to # for now.
   I created anchour tags in my nav tag and linked the contact us anchour to anouther html page with a form. (when you try to submit the form an alert pops up to notify the user that the link is broken.)

4. Add a <section> tag to the main content, with the class of feature. This will contain our featured post content, and display our large background images. Inside it, add an <h2> tag for the section subtitle (the smaller heading), and a <h1> tag for the section title (the larger heading). These can be in any order you like, and each section can have it's own <h1>. Also, group the h2 and h1 in a <div>, so we can position them together. While you're there, add the "read more" <a href> as well. When using the h1 tag a 2nd time the formating is lost so I took the styling information from the first h1 tag and applied it to the other h1 tags in the features.

### Add background images

1. Add a background image to the feature section, using the background-image property. You can use the image from the design assets, or use a placeholder image from placeholder.com. Set the height of the section to 100vh, which is a browser unit that means 100% of the viewport height.
   I used the inspect atribute of the browser to and opened the images used in anouther tab and saved these to my local files. I then added these to the project as a background image in the styling sheet.

### Absolute positioning the titles

1. Add the following CSS to the title div to position it near the bottom left corner of the feature section, like the design.

2. Continue to add more styles to match the design as closely as possible. Add some more sections by copying the first one. Use CSS classes to style each one differently.

while adding more styles I tried to use View height, View width, Relative EM's and % when ever possible.

I changed the read me anchour sections to buttons so that they can be linked to JavaScript functions I added expandible sections with form style radio selectors and anouther submit button inside the drop down. It works on my local device but does not seem to work on git hubs hosted web page. I found it very difficult to wright the js function to change the styling to make the expandable section and aventuly realised that my js page was not linked properly which didn't help once I got the function to change the styling worked out I noticed that the the very first time you press the read me button it does not work I watched what was hapening in the inspect console and realised that the first time that the button is pressed it pulls the style in to the html page so I moved the styling that the function changed into the correct tag inside the html so that it worked the first time you click the button.
