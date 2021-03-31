# Links

Links are fundamental in documentation. Use internal links to tie your content to other docs, and external links as needed.
Pick relevant text for links, so readers know where they will land.

## External Links

An [external link](https://wwww.example.com).

## Internal Links

An [internal link to another document](/examples).

## Reference Links

Reference links rely on creating a reference in reStructuredText. Prefer linking to the whole document if at all possible, otherwise create a reference by embedding reStructuredText with `eval_rst` like so:

    ```eval_rst
    .. _this_is_the_reference_point:
    ```

```eval_rst
.. _this_is_the_reference_point:
```

A [link to a reference](this_is_the_reference_point).

## Links Over Code

When using inline `code` as the text for a [`link`](/) it is hard to see.

Unless, we can take special care of that in the styling.