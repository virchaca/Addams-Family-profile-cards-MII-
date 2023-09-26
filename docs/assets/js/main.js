"use strict";const design=document.querySelector(".js-designLegend"),fill=document.querySelector(".js-fillLegend"),share=document.querySelector(".js-shareLegend"),designForm=document.querySelector(".js-design-form"),fillForm=document.querySelector(".js-fill-form"),shareForm=document.querySelector(".js-share-form"),nameInput=document.querySelector(".js-input-name"),jobInput=document.querySelector(".js-input-job"),telephoneInput=document.querySelector(".js-input-phone"),emailInput=document.querySelector(".js-input-email"),linkedinInput=document.querySelector(".js-input-linkedin"),gitInput=document.querySelector(".js-input-git"),namePreview=document.querySelector(".js-name"),jobPreview=document.querySelector(".js-job"),telephonePreview=document.querySelector(".js-phone"),emailPreview=document.querySelector(".js-email"),linkedinPreview=document.querySelector(".js-linkedin"),gitPreview=document.querySelector(".js-gitHub"),cardPreview=document.querySelector(".js-card-preview"),paletteOne=document.querySelector(".js-palette-one"),paletteTwo=document.querySelector(".js-palette-two"),paletteThree=document.querySelector(".js-palette-three"),paletteFour=document.querySelector(".js-palette-four"),btnReset=document.querySelector(".js-btn-reset"),btnShare=document.querySelector(".js-btn-share"),createdTarget=document.querySelector(".js-createdTarget"),targetWhite=document.querySelector(".js-createdTargetWhite"),shareHidden=document.querySelector(".js-hidden");function collapseDesign(){designForm.classList.add("collapsed")}function openDesign(){designForm.classList.remove("collapsed")}function collapseFill(){fillForm.classList.add("collapsed")}function openFill(){fillForm.classList.remove("collapsed")}function collapseShare(){shareForm.classList.add("collapsed")}function openShare(){shareForm.classList.remove("collapsed")}function hiddenTarget(){createdTarget.classList.add("hidden")}function viewTarget(){createdTarget.classList.remove("hidden")}function viewTargetWhite(){targetWhite.classList.remove("hidden")}function hiddenTargetWhite(){targetWhite.classList.add("hidden")}function viewTwitter(){shareHidden.classList.remove("hidden")}function hiddenTwitter(){shareHidden.classList.add("hidden")}function handleClickDesign(e){collapseFill(),collapseShare(),hiddenTwitter(),hiddenTargetWhite(),viewTarget(),openDesign()}function handleClickFill(e){openFill(),collapseDesign(),collapseShare(),hiddenTwitter(),hiddenTargetWhite(),viewTarget()}function handleClickShare(e){collapseDesign(),collapseFill(),openShare()}function handleClickTarget(){hiddenTarget(),viewTargetWhite(),viewTwitter()}design.addEventListener("click",handleClickDesign),fill.addEventListener("click",handleClickFill),share.addEventListener("click",handleClickShare),createdTarget.addEventListener("click",handleClickTarget);const data={palette:"",name:"",job:"",phone:"",email:"",linkedin:"",github:"",photo:""};function updatepreview(){namePreview.innerHTML=data.name,""===nameInput.value&&(namePreview.innerHTML="Nombre Apellido"),jobPreview.innerHTML=data.job,""===jobInput.value&&(jobPreview.innerHTML="Front-end developer"),telephonePreview.href="tel:"+data.phone,emailPreview.href="mailto:"+data.email,linkedinPreview.href=`https://www.linkedin.com/in/${data.linkedin}/`,gitPreview.href="https://www.github.com/"+data.github}function handleInputName(){data.name=nameInput.value,updatepreview()}function handleInputJob(){data.job=jobInput.value,updatepreview()}function handleInputPhone(){data.phone=telephoneInput.value,updatepreview()}function handleInputEmail(){data.email=emailInput.value,updatepreview()}function handleInputLinkedin(){data.linkedin=linkedinInput.value,updatepreview()}function handleInputGit(){data.github=gitInput.value,updatepreview()}function handlepaletteOne(e){e.preventDefault(),cardPreview.classList.add("paletteOne"),cardPreview.classList.remove("paletteTwo"),cardPreview.classList.remove("paletteThree"),cardPreview.classList.remove("paletteFour")}function handlepaletteTwo(e){e.preventDefault(),cardPreview.classList.remove("paletteOne"),cardPreview.classList.add("paletteTwo"),cardPreview.classList.remove("paletteThree"),cardPreview.classList.remove("paletteFour")}function handlepaletteThree(e){e.preventDefault(),cardPreview.classList.remove("paletteOne"),cardPreview.classList.remove("paletteTwo"),cardPreview.classList.add("paletteThree"),cardPreview.classList.remove("paletteFour")}function handlepaletteFour(e){e.preventDefault(),cardPreview.classList.remove("paletteOne"),cardPreview.classList.remove("paletteTwo"),cardPreview.classList.remove("paletteThree"),cardPreview.classList.add("paletteFour")}function handleClickDelete(e){e.preventDefault(),nameInput.value="",jobInput.value="",telephoneInput.value="",telephonePreview.href="#",emailInput.value="",emailPreview.href="#",linkedinInput.value="",linkedinPreview.href="#",gitInput.value="",gitPreview.href="#",namePreview.innerHTML="Nombre Apellido",jobPreview.innerHTML="Front-end developer",handlepaletteOne(e),paletteOne.checked=!0,profileImage.style.backgroundImage="",profilePreview.style.backgroundImage=""}nameInput.addEventListener("input",handleInputName),jobInput.addEventListener("input",handleInputJob),telephoneInput.addEventListener("input",handleInputPhone),emailInput.addEventListener("input",handleInputEmail),linkedinInput.addEventListener("input",handleInputLinkedin),gitInput.addEventListener("input",handleInputGit),paletteOne.addEventListener("change",handlepaletteOne),paletteTwo.addEventListener("change",handlepaletteTwo),paletteThree.addEventListener("change",handlepaletteThree),paletteFour.addEventListener("change",handlepaletteFour),btnReset.addEventListener("click",handleClickDelete);const fr=new FileReader,fileField=document.querySelector(".js__profile-upload-btn"),profileImage=document.querySelector(".js__profile-image"),profilePreview=document.querySelector(".js__profile-preview");function getImage(e){const t=e.currentTarget.files[0];fr.addEventListener("load",writeImage),fr.readAsDataURL(t)}function writeImage(){profileImage.style.backgroundImage=`url(${fr.result})`,profilePreview.style.backgroundImage=`url(${fr.result})`,data.photo=fr.result}fileField.addEventListener("change",getImage);