# Data People Writing Stuff Webring

Because it's the late '90s again and the small internet is cool.
A simple widget that lets you put your site into a linked list of other sites. 
The list is curated by humans, as was done when search engines were crap, like they are now.
It is a simple way for sites about a shared topic, data work in this case, to share some traffic with each other.

Also, because it's the '90s, there's no intentional tracking code in this. 
Github hosts the files so no analytics are available to managers. 
The JS is dirt simple and you can see all it does is some regex on the list of sites and make links.

_Code is 100% based off [Onionring](https://garlic.garden/onionring)_

# Joining the webring

0. Make sure you fit the join criteria (below)
1. Submit a pull request to `onionring-variables.js` (details below) to add your site to the list, the managers will review and merge as appropriate
2. Copy/paste the little HTML code snippet in the Installation section to have the widget show up
3. (Optional) The CSS is super basic. Feel free to locally override it.

# Join Criteria

1. You write about data related topics* most of the time. (like, >= 66% of the time)
2. You create or curate your own content
3. The content is not hateful, misleading, discriminatory, sexually explicit, or otherwise offends the sensibilities of the webring managers.
4. Sites can be removed for any reason, with no warning or notice, at the discretion of the managers.

* What counts as a "data related topic"? Something that people who work with data would find interesting.
This includes tools and tech, methods, academic studies and analyses, work processes, experiences, tutorials, the job market, as well as meta discussions.

# Adding your site to the code

In [`onionring-variables.js`](https://github.com/randyau/datawebring/blob/main/onionring-variables.js#L9), there is a variable `sites` at the top, just add your site to the list. That's it.

Just submit a Pull Request with your site information. 
If you have trouble or don't know how to do it, please contact [Randy Au](https://bsky.app/profile/randyau.com) on BlueSky.

# Installation of the widget

Place this snippet in your HTML body where you want the widget box to appear. That's it.
There's no need to edit or make changes.

```
<div id='data-ring-dot-list'>
<script type="text/javascript" src="https://randyau.github.io/datawebring/onionring-variables.js"></script>
<script type="text/javascript" src="https://randyau.github.io/datawebring/onionring-widget.js"></script>
</div>
```

You may **optionally** put the CSS into your HTML head section to format the widget.

## Styling

Add this to the `<head> ... </head>` section for basic styling. Feel free to locally override the settings.
If you've got design and CSS skills (which Randy does not have), some help making a nicer CSS would be appreciated.
The CSS mostly just lays out the elements and puts a light border. It should inheirit the host site's general background/font settings.


```
<link rel="stylesheet" href="https://randyau.github.io/datawebring/onionring.css">
```

# How's it work?

There's a list of sites in `onionring-variables.js`.
When a widget is loaded it looks at the URL of the site it is on and does simple regexp to figure out if it is on the official list of sites.
That lets it know where in the ordered list the browser is currently, and lets users walk the ring using the Next/Previous links. 
If the regex fails to find a match it shows an error message instead. That's it. Simple 90's tech.

## Daily Shuffling

Traditionally, webrings acted like linked lists where for any given site, the next and previous sites were fixed.
Obviously this creates hotspots where a high traffic site would bias traffic towards its neighbors.
To smooth things out, we've added a PRNG seeded to the date that shuffles the list in a consistent manner. 
That way the hot spots should be smooth over time while still giving visitors a consistent browsing experience.

# License

Quoted straight from Onionring's site on 2024-09-20:

_onionring.js and the files that make it up are licensed under the [cooperative non-violent license (CNPL) v7+,](https://thufie.lain.haus/NPL.html) which means, roughly, that anyone is allowed to download, change and share the files as long as you give credit, disclaim what changes you've made, and don't use them to violent, coercive or discriminatory ends._
