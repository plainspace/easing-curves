# Data Directory

Each file in `_data` is exposed globally. For example `_data/posts.json`
is available in every template like so

```
<ul>
{% for post in posts %}
  <li>{{ post.title }}</li>
{% endfor %}
</ul>
```
