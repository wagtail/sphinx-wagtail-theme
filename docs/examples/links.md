# Links

Links are fundamental in documentation. Use internal links to tie your content to other docs, and external links as needed.
Pick relevant text for links, so readers know where they will land.

## External Links

An [external link](https://wwww.example.com).

## Internal Links

An [internal link to another document](../examples/index).

(this_is_the_reference_point)=

## Reference Links

Reference links (links to a target within a page) rely on the page having a reference created, this can be added as follows:

```md
(this_is_the_reference_point)=
```

The reference can be linked to, with a custom label, using the Markdown link syntax as follows:

```md
A [link to a reference](this_is_the_reference_point).
```

A [link to a reference](this_is_the_reference_point).

## Links Over Code

When using inline `code` as the text for a [`link`](index) it is hard to see.

Unless, we can take special care of that in the styling.
