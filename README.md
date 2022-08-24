# archives_aspace_plugin
Plugin for the customizing the Archive's ArchivesSpace instance which manages Collection Inventories.

## Assets
Assets for the UCAR branding guidelines. OrgNav is a big menu structure 
that goes at the very top of each page. 

## en.yml
labels in the UI. E.g., This is where a lot of the labels you see in the UI
are specified. E.g.
```
brand:
title: ArchivesSpace Public Interface
title_link_text: Return to the ArchivesSpace homepage-
home: Home
welcome_head: Welcome to the Collection Inventories!
welcome_message: Inventories and guides to all NCAR Archives collections.
welcome_search_label: "Find what you're looking for:"
welcome_page_title: ArchivesSpace Public Interface
```

## layout_head
`see public/views/layout.html.erb`

Inserts the orgNav menu into the page, and attaches a [background image](https://aspace.archives.ucar.edu/assets/images/bg-crop-2.jpg) 
to the body element that provides the background
for the navbar (`background-repeat: repeat-x;`)


## footer
`see views/shared/_footer.html.erb`

OrgNav Footer script - writes element into DOM that loads
[orgnav](https://orgnav.ucar.edu).

Request Button - javascript click-handler for the request button
that appears on top right of item landing pages.

## header
'see views/shared/header.html.erb`

This is where we define most of the branding elements, including the logo, 
slogan, and site menu (that mimics the [Archives site](https://www.archives.ucar.edu/) theme).

##navigation
`see views/shared/navigation.html.erb`

Defines the ArchivesSpace main menu.
Suppress the *Unprocessed Material* and *Record Group* menu items

Adds the header element: **Collection Inventories**

## search
`see views/shared/search.html.erb`

Hide the **resource-type** selector

## result
`see views/shared/result.html.erb`

We do not show the record's *abstract*. Instead we show the `result.note('scopecontent')`