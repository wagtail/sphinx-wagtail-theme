# Images

Images are hard to keep up-to-date as documentation evolves, but can be worthwhile nonetheless. Here are guidelines when adding images:


## Plain Images

- All images should have meaningful [alt text](https://axesslab.com/alt-texts/) unless they are decorative.
- Images are served as-is – pick the correct format, and losslessly compress all images.
- Use absolute paths for image files so they are more portable.

![A wagtail standing on the ground](/img/wagtail.jpg)

Images should be responsive.
This is something we should handle in the styling.

## Figures

Figures are images which contain captions. Use figures to annotate what is
happening in the image to the reader. Figures and their captions have some
slight styling to help them stand out from surrounding text --- this is
especially useful for screenshots which can easily blend in to the page.

```{figure} /img/wagtail.jpg
---
alt: A wagtail standing on the ground
---

(This is the caption) Wagtails are a group of passerine birds that form the
genus Motacilla in the family Motacillidae. Here we observe a wagtail in its
natural habitat, standing on the ground.
```

You can see that the caption helps further illuminate and provides a link to the
image.
