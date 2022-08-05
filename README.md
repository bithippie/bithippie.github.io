# The BitHippie.com website!

### Prerequisites
Ruby 3.1.2

### Setup

```
bundle install
```

If bundle fails with an error.

> ./project.h:119:10: fatal error: 'openssl/ssl.h' file not found

```
gem install eventmachine -- --with-cppflags=-I/usr/local/opt/openssl/include
```

### Run the site
```
jekyll serve --incremental
```

### View in the browser
http://localhost:4000/

### References
* [Jekyll Docs](https://jekyllrb.com/docs/)
* [Minimal Mistakes](https://mmistakes.github.io/minimal-mistakes/) - Theme