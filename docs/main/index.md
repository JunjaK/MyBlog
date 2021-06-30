# Hello VitePress


[[toc]]

## test

| Tables        | Are           | Cool  |
| ------------- |:-------------:| -----:|
| col 3 is      | right-aligned | $1600 |
| col 2 is      | centered      |   $12 |
| zebra stripes | are neat      |    $1 |

:tada: :100:


::: tip
This is a tip
:::

::: danger STOP
Danger zone, do not proceed
:::

## test2

```js
export default {
  name: 'MyComponent',
  // ...
}
```




<script setup>
import { useData } from 'vitepress';
const { page } = useData();
</script>

<pre>{{ page }}</pre>
