# Customvalidation

This is custom live validation with jquery.
Firstly add class "cusvalidate" for every input that you want to check.

you can check require by adding this word to input ---  data-val-required="required message"

    
    <input class="cusvalidate form-control" data-val-required="You can't leave this empty" id="UserName" name="UserName" placeholder="English Only" value="" type="text">             
    <span class="err" ></span>

 


you can check email by adding this word to input ---  data-val-email="email invalid message"

    
    <input class="cusvalidate form-control valid" data-val-email="Email is not valid" data-val-required="You can't leave this empty" id="LoginEmail" name="LoginEmail" value="" type="text">
    <span class="err" ></span>



you can check both length and required by adding this word to input ---  data-val-count=5   data-val-required="You can't leave this empty"

    
    <input class="cusvalidate form-control valid" data-val-count=5 data-val-required="You can't leave this empty" id="Password" name="Password" type="password">
    <span class="err" ></span>



you can check both number and required by adding this word to input ---  data-num="true" data-val-required="You can't leave this empty"

   
    <input class="cusvalidate form-control"  data-num="true" data-val-required="You can't leave this empty" id="Phone" name="Phone" value="" type="text">
    <span class="err" ></span>                                                          
