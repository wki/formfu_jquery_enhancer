/* Form Enhancement for HTML::FormFu generated forms
 *
 * Copyright (C) 2009 Wolfgang Kinkeldei <wki at cpan.org>
 *
 * SYNOPSIS:
 *
 * <form class="formfu tabs">        -- triggers magic, convert fieldsets into tabs
 *   <input class="date" />          -- add a datepicker
 *   <input class="slider" />        -- add a slider
 *   <input class="file" />          -- open a file-picking popup
 *   <input class="autocomplete" />  -- enable auto completion
 *
 *   <div class="repeatable">
 *
 *     <input type="hidden" name="xxx_count" value="n" />
 *   </div>
 *
 * </form>
 */

;(function($) {
    $.extend($.fn, {
        // sample function
        _xXx_: function(options) {
            
        },
        
        //
        // formfu()
        //   - enhance a whole form
        //   - automatically done for forms marked with class 'formfu'
        //
        formfu: function() {
            //
            // enhance date fields if we have datepicker loaded
            //
            if ($.isFunction($.fn['datepicker'])) {
                // FIXME: how to specify date format?
                // FIXME: can we add icons ?
                // FIXME: can we make the field readonly?
                this.find('input.date').datepicker();
            }
            
            //
            // convert numeric fields into sliders
            //
            if ($['ui'] && $['ui']['slider']) {
                this.find('input.slider').each(function(input) {
                    // TODO: create code to replace inputs with sliders
                });
            }
            
            //
            // beautify repeatables
            //
            this.find('div.repeatable').each(function(div) {
                // enhance this repeatable
                // TODO: is last hidden field always the size?
                // TODO: isolate an empty row
                // TODO: delete all empty rows
                // TODO: add (-) buttons into every repeatable
                //       find the [x] delete checkbox and convert into hidden
                // TODO: add (+) button at end
                
                // TODO: if we also have .sortable -- do more work
            });
            
            //
            // handle file pickers
            //
            this.find('input.file').each(function(input) {
                
            });
            
            //
            // handle auto completers
            //
            this.find('input.autocomplete').each(function(input) {
                
            })
            
            //
            // convert fieldsets into tabs/accordion
            //
            if ($['ui'] && $['ui']['tabs'] && this.hasClass('tabs')) {
                // TODO: fill me
            } else if ($['ui'] && $['ui']['accordion'] && this.hasClass('accordion')) {
                // TODO: fill me
            }
        },
        
        // stupid last entry
        _dummy:0
    });
})(jQuery);

//
// automatically do the job
//

jQuery(function() {
    // iterate thru every form of interest and enhance them
    $('form.formfu').formfu();
});
