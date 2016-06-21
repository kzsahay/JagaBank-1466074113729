/**
 * Copyright 2015 IBM Corp. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/* global $:true */

'use strict';

// conversation variables
var conversation_id, client_id;

$(document).ready(function () {
  var $chatInput = $('.chat-window--message-input'),
    $jsonPanel = $('#json-panel .base--textarea'),
    $information = $('.data--information'),
    $profile = $('.data--profile'),
    $loading = $('.loader');

  var home_loan='';
  var veh_loan='';
  var home_veh_loan='';
  var cur_emi='';
  var month_take='';
  var demo_cal='';
  var med_val='';
  var emp_med='';
  var a, b, c;
  var par1='';
  var par2='';
  $('.audio').hide();


  $chatInput.keyup(function(event){
    if(event.keyCode === 13) {
      converse($(this).val());
    }
  });
var txt='';
  var converse = function(userText) {
    $loading.show();
    // $chatInput.hide();

    // check if the user typed text or not
    if (typeof(userText) !== undefined && $.trim(userText) !== '')
      submitMessage(userText);

    // build the conversation parameters
    var params = { input : userText };

    // check if there is a conversation in place and continue that
    // by specifing the conversation_id and client_id
    if (conversation_id) {
      params.conversation_id = conversation_id;
      params.client_id = client_id;
    }

    $.post('/conversation', params)
      .done(function onSuccess(dialog) {
        $chatInput.val(''); // clear the text input

        $jsonPanel.html(JSON.stringify(dialog.conversation, null, 2));
        //console.log(dialog.conversation);
        // update conversation variables
        conversation_id = dialog.conversation.conversation_id;
        client_id = dialog.conversation.client_id;

        //console.log(dialog);
        var texts = dialog.conversation.response;
		var texts1={ "text": texts,
		"voice": 'en-US_AllisonVoice',
		"sessionPermissions":0 };
		//alert(texts1);

		txt=texts1;
        //alert(txt);
        var response = texts.join('&lt;br/&gt;'); // &lt;br/&gt; is <br/>

        $chatInput.show();
        $chatInput[0].focus();

        $information.empty();

        addProperty($information, 'Dialog ID: ', dialog.dialog_id);
        addProperty($information, 'Conversation ID: ', conversation_id);
        addProperty($information, 'Client ID: ', client_id);

        talk('WATSON', response); // show

        getProfile();
        
      })
      .fail(function(error){
        talk('WATSON', error.responseJSON ? error.responseJSON.error : error.statusText);
      })
      .always(function always(){
        $loading.hide();
        scrollChatToBottom();
        $chatInput.focus();
      });

  };


  var myfun=function(name,value){

    /*if(name === 'age'){

      console.log("D variable="+d);
      console.log("my age="+ value);
      window.location="http://www.google.com";
      // res.redirect('/example');

    }*/

	//alert(name);
	//alert(value);
    if(name === 'home_loan_amount'){
      home_loan=value;
    }
    if(name === 'vehicle_loan_amount'){
      veh_loan=value;
    }
    if(name === 'home_vehicle_loan_amount'){
      home_veh_loan=value;
    }
    if(name === 'monthly_income'){
      month_take=value;
    }
    if(name === 'current_emi'){
      cur_emi=value;
    }
    if(name === 'medical_offer'){
      med_val=value;
    }
    if(name === 'emp_medical'){
      emp_med=value;
    }
    /*if(emp_med === 'y' ) {
      if (emp_med === 'y' && med_val === 'y') {
        if(home_loan !== ''){ 
          a = parseFloat(home_loan) / 100;
        }
        if(veh_loan !== ''){
          a = parseFloat(veh_loan) / 100;
        }
        if(home_veh_loan !== ''){
          a = parseFloat(home_veh_loan) / 100;
        }
        b = a + parseFloat(cur_emi)
        c = 0.9 * parseFloat(month_take);
        if (b < c) {
          demo_cal = "eligible";
          //$('.txt').text(demo_cal);
          alert("Congratulations,you are eligible for loan...");
          window.location = "index2.html";
        }
        else{
          demo_cal = "not eligible";
          //$('.txt').text(demo_cal);
          alert("Sorry,you are not eligible..Try our eligible calculator");
          window.location = "index2.html";
        }
      }
    }
    else if(emp_med === 'n' && med_val === '') {
      if(home_loan !== ''){
        a = parseFloat(home_loan) / 100;
      }
      if(veh_loan !== ''){
        a = parseFloat(veh_loan) / 100;
      }
      if(home_veh_loan !== ''){
        a = parseFloat(home_veh_loan) / 100;
      }
      b = a + parseFloat(cur_emi)
      c = 0.9 * parseFloat(month_take);
        if (b < c) {
          demo_cal = "eligible";
          //$('.txt').text(demo_cal);
          alert("Congratulations,you are eligible for loan");
          window.location = "index2.html";
        }
        else{
          demo_cal = "not eligible";
          //$('.txt').text(demo_cal);
          alert("Sorry,you are not eligible..Try our eligible calculator");
          window.location = "index2.html";
        }

    }*/
  }
  
  
  var getProfile = function() {
    var params = {
      conversation_id: conversation_id,
      client_id: client_id
    };

    $.post('/profile', params).done(function(data) {
       
	   
      //var audio = $('.audio').get(0);
	  ////alert(txt.text);
	  //if(txt.text ===' ')
		//  txt.text = "Welcome to Bajaj finserv!What is your name?";
		 // synthesizeRequest(txt); 
	  
			
      //synthesizeRequest(txt,audio);
      $profile.empty();
      data.name_values.forEach(function(par) {
		 //alert(JSON.stringify(data.name_values));
        if (par.value !== '') {
		  par2=par.value;
		  par1=par.name;
          myfun(par.name,par.value);
          addProperty($profile, par.name + ':', par.value);
		 // synthesizeRequest(txt);
        }
      });
	  //alert("before synthesize")
	  synthesizeRequest(txt);
    }).fail(function(error){
      talk('WATSON', error.responseJSON ? error.responseJSON.error : error.statusText);
    });
  };

  var scrollChatToBottom = function() {
    var element = $('.chat-box--pane');
    element.animate({
      scrollTop: element[0].scrollHeight
    }, 420);
  };

  var scrollToInput = function() {
      var element = $('.chat-window--message-input');
      $('body, html').animate({
        scrollTop: (element.offset().top - window.innerHeight + element[0].offsetHeight) + 20 + 'px'
      });
  };

  var talk = function(origin, text) {
    var $chatBox = $('.chat-box--item_' + origin).first().clone();
    var $loading = $('.loader');
    $chatBox.find('p').html($('<p/>').html(text).text());

        // $('.chat-box--pane').append($chatBox);
    $chatBox.insertBefore($loading);
    setTimeout(function() {
      $chatBox.removeClass('chat-box--item_HIDDEN');
    }, 100);
  };

  var addProperty = function($parent, name, value) {
    var $property = $('.data--variable').last().clone();
    $property.find('.data--variable-title').text(name);
    $property.find('.data--variable-value').text(value);

    $property.appendTo($parent);
    setTimeout(function() {
      $property.removeClass('hidden');
    }, 100);
  };

  var submitMessage = function(text) {
    talk('YOU', text);
    scrollChatToBottom();
    clearInput();
  };

  var clearInput = function() {
    $('.chat-window--message-input').val('');
  };

  $('.tab-panels--tab').click(function(e){
    e.preventDefault();
    var self = $(this);
    var inputGroup = self.closest('.tab-panels');
    var idName = null;

    inputGroup.find('.active').removeClass('active');
    self.addClass('active');
    idName = self.attr('href');
    $(idName).addClass('active');
  });

  // Initialize the conversation
  converse();
  scrollToInput();
  function showError(msg) {
    console.error('Error: ', msg);
    var errorAlert = $('.error-row');
    errorAlert.css('visibility','hidden');
    errorAlert.css('background-color', '#d74108');
    errorAlert.css('color', 'white');
    var errorMessage = $('#errorMessage');
    errorMessage.text(msg);
    errorAlert.css('visibility','');
    $('body').css('cursor', 'default');
    $('.speak-button').css('cursor', 'pointer');

    $('#errorClose').click(function(e) {
      e.preventDefault();
      errorAlert.css('visibility','hidden');
      return false;
    });
  }

 

  var synthesizeRequest = function (options, audio) {
	//alert("inside");
    var sessionPermissions = JSON.parse(localStorage.getItem('sessionPermissions')) ? 0 : 1;
    var downloadURL = '/api/synthesize' +
      '?voice=' + options.voice +
      '&text=' + encodeURIComponent(options.text) +
      '&X-WDC-PL-OPT-OUT=' +  options.sessionPermissions;
    //alert("download:" + downloadURL);
    if (options.download) {
      downloadURL += '&download=true';
	  //alert("inside if" + downloadURL);
      window.location.href = downloadURL;
      return true;
    }
	var audio = $('.audio').get(0);
	//$audio = $('.audio');
	//alert("%%%%%%%%%%%%%%" + audio);
    audio.pause();
    audio.src = downloadURL;
	//alert(audio.src);
    //enableButtons(true);
    audio.addEventListener('ended', onStopAudio);
    //audio.muted = true;
    audio.play();

    //audio.addEventListener("ended",myfun(par1,par2),true);
    //alert('ok');

	//alert('finished');
	//alert(par1);
	//alert(par2);
	//myfun(par1,par2);
    ('body').css('cursor', 'wait');
   // ('.speak-button').css('cursor', 'wait');
    return true;
  }

  function onStopAudio() {

    var audio = $('.audio').get(0);
    audio.currentTime = 0;
    //alert('ended');
    //myfun(par1,par2);
    if(emp_med === 'y' ) {
      if (emp_med === 'y' && med_val === 'y') {
        if(home_loan !== ''){
          a = parseFloat(home_loan) / 100;
        }
        if(veh_loan !== ''){
          a = parseFloat(veh_loan) / 100;
        }
        if(home_veh_loan !== ''){
          a = parseFloat(home_veh_loan) / 100;
        }
        b = a + parseFloat(cur_emi)
        c = 0.9 * parseFloat(month_take);
        if (b < c) {
          demo_cal = "eligible";
          //$('.txt').text(demo_cal);
          //alert("Congratulations,you are eligible for loan...");
          window.location = "index2.html";
        }
        else{
          demo_cal = "not eligible";
          //$('.txt').text(demo_cal);
          //alert("Sorry,you are not eligible..Try our eligible calculator");
          window.location = "index2.html";
        }
      }
    }
    else if(emp_med === 'n' && med_val === '') {

      if(home_loan !== ''){
        a = parseFloat(home_loan) / 100;

      }
      if(veh_loan !== ''){
        a = parseFloat(veh_loan) / 100;

      }
      if(home_veh_loan !== ''){
        a = parseFloat(home_veh_loan) / 100;

      }
      b = a + parseFloat(cur_emi)
      c = 0.9 * parseFloat(month_take);
      if (b < c) {
        demo_cal = "eligible";
        //$('.txt').text(demo_cal);
        alert("Congratulations,you are eligible for loan");
        window.location = "index2.html";
      }
      else{
        demo_cal = "not eligible";
        //$('.txt').text(demo_cal);
        alert("Sorry,you are not eligible..Try our eligible calculator");
        window.location = "index2.html";
      }

    }

  }
     $('.audio').on('error', function (err) {
      if(this.src === this.baseURI) {
        console.log('audio.src was reset');
        return;
      }
      $.get('/api/synthesize?text=test').always(function (response) {
		//alert("hey there");
        showError(response.responseText || 'Error processing the request');
      });
    });

 
  
});
