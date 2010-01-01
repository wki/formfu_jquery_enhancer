FormFu Ajax Gimmicks
--------------------

automatically added when <form class="formfu">
otherwise pick forms like
   $('form.whatever_class_we_need').formfu()

1) Datepicker
   <input class="date" />

2) Slider / Range / Color
   <input class="slider" data-min="0" data-max="10" data-step="1" ... />

3) Repeatable
   <div class="repeatable"> ... </div>
   [x] Delete checkbox --> Hidden
   
   (+) Button -> neues Feld
   (-) Button -> [x] Delete ankreuzen oder entfernen
   
4) Repeatable
   field.attributes --> class: 'sortable'
   --> drag & drop erlauben, dieses Feld 1-n umnumerieren

5) File Access
   field.attributes --> class: 'file'
              --> data: {glob: '*.*', 
                         path: 'uploads/',          // relative to /root
                         allow_upload: true|false,
                         thumbnail_size: 32,
                         }
   - Controller: Ajax::Upload
     eigenes iFrame zum Upload per jQuery erzeugt

6) Form Tabs / Acordion
   form.attributes --> class: 'tabify'
   --> jedes Fieldset wird zu Tab
   --> validation-errors ---> symbol im tab

7) Autocomplete
   field.attributes --> class: 'autocomplete'
                    --> data: {url: /asdf/jklö/asdf}

8) Ajax Submit the form instead of POSTing
