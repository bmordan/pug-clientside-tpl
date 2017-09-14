# JavaScript-based tabbed component

To get started

1) clone the repo and install dependencies
2) Build the component with

```
npm run build
```

This will give you a set of files in `/dist` you can serve them from your file system.
Open `/dist/index.html` to interact with the component.

or visit http://bernardmordan.surge.sh if you are pushed for time.

----

## The details

The component will be a listing of the most recent Guardian content ​chosen
from three sections of the site​: UK news, Football and Travel. Each of these
sections should be represented by a tab.

We’d like you to fetch this data asynchronously ​from our Content API. The link
is listed below and you can use the following api key: `9wur7sdh84azzazdt3ye54k4`.

Please do this on the client-side ​(all solutions should be possible to run in a
web browser alone without any server-side requirements).

The content of the tab panes should be a numbered list of at least five items of
content ​from that section. The webTitleand trailTextfields should always
be displayed, and the webTitleshould be linked to the webUrl. You can use any
other fields as you see fit – be creative!

The component should be built to be mobile-first​: this means it should be
responsive and attention should be given to keeping it lightweight ​and small in overall filesize.
Although the component will rely on JavaScript to fetch the data, the
component itself should be built to still be visible without JavaScript ​(you could
include a static version to demonstrate this, if necessary).
The rest of the design and implementation is up to you: feel free to use any
third party libraries or tools to help as you see fit, or feel free to write
everything from scratch.

We want to see robust code which we can rely upon to work cross-browser
(from IE9 onwards) and cross-device​. We’re also interested to see what kind of
CSS you’ll use to produce an attractive and well-designed UI component.
External resources
You’ll need a couple of things to get started:
The Guardian’s Content API console​:
http://open-platform.theguardian.com/explore/ (use this to explore searches
and see the JSON endpoint URL)
The Guardian’s style guide​: http://pasteup.guim.co.uk/zones.html – optional
(don’t feel you have to use it – if you need logos or section colours, it may help)
