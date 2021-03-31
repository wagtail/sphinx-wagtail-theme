# Code Blocks

Make sure to include the correct language code for syntax highlighting, and to format your code according to our coding guidelines.

Frequently used syntaxes are: `python`, `css`, `html`, `html+django`, `javascript`, `console`.

## Python

```python
INSTALLED_APPS = [
    ...
    "wagtail.core",
    ...
]
```

## CSS

```css
a {
    text-decoration: none;
}
```

## HTML

```html
<body>
    <main class="page-content">
        <h1>An example heading</h1>
    </main>
</body>
```

## Django (Template)

```django+html
<body>
    <main class="page-content">
        <h1>An example heading</h1>
        <ul>
            {% for item in list %}
                <li>{{ item.title }}</li>
            {% endfor %}
        </ul>
    </main>
</body>
```

## Javascript

```javascript
document.write(<p>Directly created element</p>)
```

## Console

```console
$ ./manage.py runserver 0:8000
```
