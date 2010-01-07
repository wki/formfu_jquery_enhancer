all: index.html date_field.html

%.html: %.tpl head foot ../js/formfu.js
	cat head $< foot > $@
