# Type Coercion

## ==

Double equal simply means compare the two values and if they have different types try to coerce one into the same type.

```
1 == "1"
```

with double equals the code above became this:

```
1 == 1 //true
```

# ===

Three equals in JavaScript means compare values, but don't try and curse the values. Be explicit with your comparison and do exactly what I tell you.

```
1 === '1'
```

it stays like this with three equals and returns false.

## Sources

- [JavaScript Equality Table](https://dorey.github.io/JavaScript-Equality-Table/)
- [Advanced JavaScript Concepts](https://www.udemy.com/course/advanced-javascript-concepts/)
- [Equality comparisons and sameness](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Equality_comparisons_and_sameness)
