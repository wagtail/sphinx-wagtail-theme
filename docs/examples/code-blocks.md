# Code Blocks

Make sure to include the correct language code for syntax highlighting, and to format your code according to our coding guidelines.

Frequently used syntaxes are: `python`, `css`, `html`, `html+django`, `javascript`, `console`.

## Python

```python
def is_divisible(number, divisor):
    remainder = number % divisor
    if remainder == 0:
        return True
    else:
        return False


def fizzbuzz_concat(number):
    reply = ""
    if is_divisible(number, 3):
        reply = reply + "Fizz"
    if is_divisible(number, 5):
        reply = reply + "Buzz"
    if reply:
        return reply
    else:
        return number

for number in range(1, 100):
    print(fizzbuzz_concat(number))
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

```html+django
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

```js
function isDivisible(dividend, divisior) {
    const rest = dividend % divisior;
    if (rest === 0) {
        return true;
    } else {
        return false;
    }
}

exports.isDivisible = isDivisible;

function numToFizzBuzz(num) {
    let response = '';
    if (isDivisible(num, 3)) {
        response += 'Fizz';
    }
    if (isDivisible(num, 5)) {
        response += 'Buzz';
    }
    if (!response) {
        response = num.toString();
    }
    return response;
}

exports.numToFizzBuzz = numToFizzBuzz;

function fizzbuzz(start = 1, end = 100) {
    const fizzbuzzArray = [];
    for (let i = start; i <= end; i++) {
        const numString = numToFizzBuzz(i);
        fizzbuzzArray.push(numString);
    }
    return fizzbuzzArray;
}

exports.fizzbuzz = fizzbuzz;
```

## Console

```console
$ ./manage.py runserver 0:8000
```
