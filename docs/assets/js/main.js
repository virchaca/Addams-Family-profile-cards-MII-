"use strict";const design=document.querySelector(".js-designLegend"),fill=document.querySelector(".js-fillLegend"),share=document.querySelector(".js-shareLegend"),designForm=document.querySelector(".js-design-form"),fillForm=document.querySelector(".js-fill-form"),shareForm=document.querySelector(".js-share-form"),nameInput=document.querySelector(".js-input-name"),jobInput=document.querySelector(".js-input-job"),telephoneInput=document.querySelector(".js-input-phone"),emailInput=document.querySelector(".js-input-email"),linkedinInput=document.querySelector(".js-input-linkedin"),gitInput=document.querySelector(".js-input-git"),namePreview=document.querySelector(".js-name"),jobPreview=document.querySelector(".js-job"),telephonePreview=document.querySelector(".js-phone"),emailPreview=document.querySelector(".js-email"),linkedinPreview=document.querySelector(".js-linkedin"),gitPreview=document.querySelector(".js-gitHub"),cardPreview=document.querySelector(".js-card-preview"),paletteOne=document.querySelector(".js-palette-one"),paletteTwo=document.querySelector(".js-palette-two"),paletteThree=document.querySelector(".js-palette-three"),paletteFour=document.querySelector(".js-palette-four"),btnReset=document.querySelector(".js-btn-reset"),btnShare=document.querySelector(".js-btn-share"),createdTarget=document.querySelector(".js-createdTarget"),targetWhite=document.querySelector(".js-createdTargetWhite"),shareHidden=document.querySelector(".js-hidden"),messageBox=document.querySelector(".js-message"),errorText=document.querySelector(".js-text"),errorMessage=document.querySelector(".js-error-message"),previewLStorage=JSON.parse(localStorage.getItem("previewLS")),fr=new FileReader,fileField=document.querySelector(".js__profile-upload-btn"),profileImage=document.querySelector(".js__profile-image"),profilePreview=document.querySelector(".js__profile-preview"),data={palette:"",name:"",job:"",phone:"",email:"",linkedin:"",github:"",photo:""};function formStorage(){previewLStorage&&(nameInput.value=previewLStorage.name,namePreview.innerHTML=previewLStorage.name,""===nameInput.value&&(namePreview.innerHTML="Nombre Apellido"),jobInput.value=previewLStorage.job,jobPreview.innerHTML=previewLStorage.job,""===jobInput.value&&(jobPreview.innerHTML="Front-end developer"),telephoneInput.value=previewLStorage.phone,emailInput.value=previewLStorage.email,linkedinInput.value=previewLStorage.linkedin,gitInput.value=previewLStorage.github,data.photo=previewLStorage.photo,profileImage.style.backgroundImage=`url(${previewLStorage.photo})`,profilePreview.style.backgroundImage=`url(${previewLStorage.photo})`,data.palette=previewLStorage.palette,1===previewLStorage.palette?(handlepaletteOne(),paletteOne.checked=!0):2===previewLStorage.palette?(handlepaletteTwo(),paletteTwo.checked=!0):3===previewLStorage.palette?(handlepaletteThree(),paletteThree.checked=!0):(handlepaletteFour(),paletteFour.checked=!0))}function handleClickTarget(){fetch("https://dev.adalab.es/api/card/",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(data)}).then(e=>e.json()).then(e=>{if(!1===e.success)errorText.classList.add("hidden"),messageBox.innerHTML="¡Algo ha ido mal! Cuidado, Miércoles está preparando la guillotina asi que revisa los campos...",document.querySelector(".js-twitter-button").classList.add("hidden"),"Database error: ER_DATA_TOO_LONG"===e.error&&(errorMessage.innerHTML="La imagen es demasiado grande. Prueba con una de 40kb o menos");else{localStorage.setItem("previewLS",JSON.stringify(data)),targetWhite.classList.remove("hidden"),errorText.classList.remove("hidden"),document.querySelector(".js-twitter-button").classList.remove("hidden");const t=e.cardURL.toString();messageBox.href=t,generateTweetURL(t),messageBox.innerHTML=t}}),hiddenTarget(),viewTargetWhite(),viewTwitter()}function generateTweetURL(e){if("string"==typeof e){const t="https://twitter.com/intent/tweet?text="+encodeURIComponent("Mira mi tarjeta de visita digital: "+e);document.getElementById("twitterShareLink").href=t}}function hiddenTarget(){createdTarget.classList.add("hidden")}function viewTarget(){createdTarget.classList.remove("hidden")}function viewTargetWhite(){targetWhite.classList.remove("hidden")}function hiddenTargetWhite(){targetWhite.classList.add("hidden")}function viewTwitter(){shareHidden.classList.remove("hidden")}function hiddenTwitter(){shareHidden.classList.add("hidden")}function collapseDesign(){designForm.classList.add("collapsed")}function openDesign(){designForm.classList.remove("collapsed")}function collapseFill(){fillForm.classList.add("collapsed")}function openFill(){fillForm.classList.remove("collapsed")}function collapseShare(){shareForm.classList.add("collapsed")}function openShare(){shareForm.classList.remove("collapsed")}function handleClickDesign(e){collapseFill(),collapseShare(),hiddenTwitter(),hiddenTargetWhite(),viewTarget(),openDesign()}function handleClickFill(e){openFill(),collapseDesign(),collapseShare(),hiddenTwitter(),hiddenTargetWhite(),viewTarget()}function handleClickShare(e){collapseDesign(),collapseFill(),openShare()}function updatepreview(){namePreview.innerHTML=data.name,""===nameInput.value&&(namePreview.innerHTML="Nombre Apellido"),jobPreview.innerHTML=data.job,""===jobInput.value&&(jobPreview.innerHTML="Front-end developer"),telephonePreview.href="tel:"+data.phone,emailPreview.href="mailto:"+data.email,linkedinPreview.href=`https://www.linkedin.com/in/${data.linkedin}/`,gitPreview.href="https://www.github.com/"+data.github,localStorage.setItem("previewLS",JSON.stringify(data))}function handleInputName(){data.name=nameInput.value,updatepreview()}function handleInputJob(){data.job=jobInput.value,updatepreview()}function handleInputPhone(){data.phone=telephoneInput.value,updatepreview()}function handleInputEmail(){data.email=emailInput.value,updatepreview()}function handleInputLinkedin(){data.linkedin=linkedinInput.value,updatepreview()}function handleInputGit(){data.github=gitInput.value,updatepreview()}function handleClickDelete(e){e.preventDefault(),nameInput.value="",jobInput.value="",telephoneInput.value="",telephonePreview.href="#",emailInput.value="",emailPreview.href="#",linkedinInput.value="",linkedinPreview.href="#",gitInput.value="",gitPreview.href="#",namePreview.innerHTML="Nombre Apellido",jobPreview.innerHTML="Front-end developer",handlepaletteOne(e),paletteOne.checked=!0,profileImage.style.backgroundImage="",profilePreview.style.backgroundImage="",targetWhite.classList.add("hidden"),createdTarget.classList.remove("hidden"),shareHidden.classList.add("hidden"),localStorage.setItem("previewLS",JSON.stringify(data))}function getImage(e){const t=e.currentTarget.files[0];fr.addEventListener("load",writeImage),fr.readAsDataURL(t)}function writeImage(){profileImage.style.backgroundImage=`url(${fr.result})`,profilePreview.style.backgroundImage=`url(${fr.result})`,data.photo=fr.result}function handlepaletteOne(){cardPreview.classList.add("paletteOne"),cardPreview.classList.remove("paletteTwo"),cardPreview.classList.remove("paletteThree"),cardPreview.classList.remove("paletteFour"),data.palette=1}function handlepaletteTwo(){cardPreview.classList.remove("paletteOne"),cardPreview.classList.add("paletteTwo"),cardPreview.classList.remove("paletteThree"),cardPreview.classList.remove("paletteFour"),data.palette=2}function handlepaletteThree(){cardPreview.classList.remove("paletteOne"),cardPreview.classList.remove("paletteTwo"),cardPreview.classList.add("paletteThree"),cardPreview.classList.remove("paletteFour"),data.palette=3}function handlepaletteFour(){cardPreview.classList.remove("paletteOne"),cardPreview.classList.remove("paletteTwo"),cardPreview.classList.remove("paletteThree"),cardPreview.classList.add("paletteFour"),data.palette=4}formStorage(),twitterShareLink.addEventListener("click",generateTweetURL),generateTweetURL(),createdTarget.addEventListener("click",handleClickTarget),design.addEventListener("click",handleClickDesign),fill.addEventListener("click",handleClickFill),share.addEventListener("click",handleClickShare),nameInput.addEventListener("input",handleInputName),jobInput.addEventListener("input",handleInputJob),telephoneInput.addEventListener("input",handleInputPhone),emailInput.addEventListener("input",handleInputEmail),linkedinInput.addEventListener("input",handleInputLinkedin),gitInput.addEventListener("input",handleInputGit),btnReset.addEventListener("click",handleClickDelete),fileField.addEventListener("change",getImage),paletteOne.addEventListener("change",handlepaletteOne),paletteTwo.addEventListener("change",handlepaletteTwo),paletteThree.addEventListener("change",handlepaletteThree),paletteFour.addEventListener("change",handlepaletteFour);const introSong=document.getElementById("introSong");introSong.volume=.1,document.addEventListener("click",(function(){document.getElementById("playButton").addEventListener("click",(function(){introSong.play()})),document.getElementById("pauseButton").addEventListener("click",(function(){introSong.pause()})),document.getElementById("stopButton").addEventListener("click",(function(){introSong.pause(),introSong.currentTime=0}))}));