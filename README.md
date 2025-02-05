# OECQ

How to add or delete a publication in the website ?

Open the JSON file publicationsDatas.json where the publications are stored.

## Add a publication

Create a new object with the following properties:

- "id" : A unique identifier ("n+1") (INTEGER).
- "title" : The title of the publication (STRING).
- "text" : The content or description of the publication ("Description Of The Publication....") (STRING).
- "date" : The publication date ("18/08/2022") (STRING).
- "link" : The URL link to the publication ("https://thelink.com") (STRING).

Make sure the "id" is unique among all existing publications.

It will be like this : 

    {
        "id": 1,
        "title": "TitleOfThePublication",
        "text": "Description Of The Publication....",
        "date": "18/08/2022",
        "link:": "https://thelink.com"
    }


## Delete a publication

You can delete a publication by deleting its object.
