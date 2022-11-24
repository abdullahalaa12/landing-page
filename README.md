# Landing Page Project
[starter code](https://github.com/udacity/fend/tree/refresh-2019/projects/landing-page) was used to build the page template.

# About The Project
This web page template can be used to create multiple sections page with the features:

* Dynamically create a navigation bar from page sections.
* Navigation link enables smooth scrolling to the section.
* Highlighting the section in the viewport and it's navigation link.
* Styles with animation.
* The ability to add as many sections as wanted.
* Responsive layout.
  
# Usage
To add a section to the page:

1. Nest a section element under body -> main.
2. Set a unique id.
3. Set a `data-nav` attribute with the navigation link text.
   
### Example:

   ```
   <body>
        <header>
            ...
        </header>
        <main>
            <section id="section1" data-nav="Section 1">
                YOUR SECTION CONTENT
            </section>
        </main>
    </body>
    ```
