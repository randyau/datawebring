# Data blog webring

Because it's the late '90s again and the small internet is cool.
A simple widget that lets you put your site into a linked list of other sites. 
Curated by humans. As was done when search engines were utter crap, like they are now.

_Code is 100% based off [Onionring](https://garlic.garden/onionring)_

# Joining the webring

0. Make sure you fit the join criteria (below)
1. Submit a pull request to `onionring-variables.js` (details below) to add your site to the list, the managers will review and merge as appropriate
2. Add the little JavaScript snippet in the Installation section to have it show up
3. (Optional) The CSS is super basic. Feel free to locally override it.

# Join Criteria

1. You write about data related topics* most of the time. (like, >= 66% of the time)
2. You create or curate your own content
3. The content is not hateful, misleading, discriminatory, sexually explicit, or otherwise offends the sensibilities of the webring managers.
4. Sites can be removed for any reason, with no warning or notice, at the discretion of the managers.

* What counts as a "data related topic"? Something that people who work with data would find interesting.
This includes tools and tech, methods, academic studies and analyses, work processes, experiences, tutorials, the job market, as well as meta discussions.

# Where to add your site

In [`onionring-variables.js`](https://github.com/randyau/datawebring/blob/main/onionring-variables.js#L9), there is a variable `sites` at the top, just add your site to the list. That's it.

Just submit a Pull Request with your update. If you have trouble please contact [Randy Au](https://bsky.app/profile/randyau.com)

# Installation:

Snippet to be placed on the web site to show the webring
```
<div id='data-ring-dot-list'>
<script type="text/javascript" src="https://randyau.github.io/datawebring/onionring-variables.js"></script>
<script type="text/javascript" src="https://randyau.github.io/datawebring/onionring-widget.js"></script>
</div>
```

## Styling

Add this to the `<head> ... </head>` section for basic styling. Feel free to locally override the settings.
If you've got design and CSS skills (which Randy does not have), some help making a nicer CSS would be appreciated.


```
<link rel="stylesheet" href="https://randyau.github.io/datawebring/onionring.css">
```

## License

Quoted straight from Onionring's site on 2024-09-20:

_onionring.js and the files that make it up are licensed under the [cooperative non-violent license (CNPL) v7+,](https://thufie.lain.haus/NPL.html) which means, roughly, that anyone is allowed to download, change and share the files as long as you give credit, disclaim what changes you've made, and don't use them to violent, coercive or discriminatory ends._
