# Contact Manager tutorial app

This is a complete version of the [Contact Manager tutorial](http://aurelia.io/hub.html#/doc/article/aurelia/framework/latest/contact-manager-tutorial/).

This branch further restructures using best practices.
We have introduced the following application structure:

```bash
- /common
    utils
- /services
    contacts-api
- /contacts
    contact-details
    contact-list
```

The contacts route is now: `moduleId: ./contacts/contact-detail'`

In the next branch we will try to use a nested router ;)