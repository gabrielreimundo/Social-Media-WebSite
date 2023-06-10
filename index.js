//SIDEBAR
const menuItems=document.querySelectorAll('.menu-item');

// MESSAGES
const messagesNotification=document.querySelector('#messages-notifications')

const messages=document.querySelector('.messages')
const message=messages.querySelectorAll('.message')
const messageSearch=document.querySelector('#message-search')

// THEME    
const theme=document.querySelector('#theme')
const themeModal = document.querySelector('.customize-theme');
const fontSizes=document.querySelectorAll('.choose-size span')
var root=document.querySelector(':root');
const colorPalette=document.querySelectorAll('.choose-color span')
const colorBackground=document.querySelectorAll('.choose-bg div')


//=============== SIDEBAR ============

// remove active class from all menu items
const changeActiveItem=()=>{
    menuItems.forEach(item=>{
        item.classList.remove('active');
    })
}

menuItems.forEach(item=>{
    item.addEventListener('click',()=>{
        changeActiveItem();
        item.classList.add('active');
        if(item.id != 'notifications'){
            document.querySelector('.notifications-popup').style.display='none';
        }else{
            document.querySelector('.notifications-popup').style.display='block';
            document.querySelector('#notifications .notification-count').style.display='none'
        }
    })
})

//=============== MESSAGES ================
// searh chats
const searchMessage=()=>{
    const val=messageSearch.value.toLowerCase();
    message.forEach(user=>{
        let name = user.querySelector('h5').textContent.toLowerCase();
        if(name.indexOf(val) != -1){
            user.style.display='flex'
        }else{
            user.style.display='none'
        }
    })
}

// search chat
messageSearch.addEventListener('keyup',searchMessage)

// hightlight messages card when messages menu item is clicked
messagesNotification.addEventListener('click',()=>{
    messages.style.boxShadow='0 0 1rem var(--color-primary)';
    messagesNotification.querySelector('.notification-count').style.display='none'
    setTimeout(()=>{
        messages.style.boxShadow='none';
    },2000)
})

// THEME/DISPLAY CUSTOMIZATION

// opens modal
const openThemeModal=()=>{
    themeModal.style.display='grid'
}

// closes modal
const closeThemeModal=(e)=>{
    if(e.target.classList.contains('customize-theme')){
        themeModal.style.display='none';
    }
}

// close modal
themeModal.addEventListener('click', closeThemeModal)

theme.addEventListener('click',openThemeModal)

//======================= FONTS ===========

// remove active class from spans or font size selectors
const removeSizeSelector=()=>{
    fontSizes.forEach(size=>{
        size.classList.remove('active')
    })
}

fontSizes.forEach(size=>{

    size.addEventListener('click',()=>{

        removeSizeSelector();
        let fontSize;
        size.classList.toggle('active')

        if(size.classList.contains('font-size-1')){
            fontSize = '10px'
            root.style.setProperty('--sticky-top-left', '5.4rem')
            root.style.setProperty('--sticky-top-right', '5.4rem')
        }else  if(size.classList.contains('font-size-2')){
            fontSize = '13px'
            root.style.setProperty('--sticky-top-left', '5.4rem')
            root.style.setProperty('--sticky-top-right', '-7rem')
        }else  if(size.classList.contains('font-size-3')){
            fontSize = '16px'
            root.style.setProperty('--sticky-top-left', '-2rem')
            root.style.setProperty('--sticky-top-right', '-17rem')
        }else  if(size.classList.contains('font-size-4')){
            fontSize = '19px'
            root.style.setProperty('--sticky-top-left', '-5rem')
            root.style.setProperty('--sticky-top-right', '-25rem')
        }else  if(size.classList.contains('font-size-5')){
            fontSize = '22px'
            root.style.setProperty('--sticky-top-left', '-12rem')
            root.style.setProperty('--sticky-top-right', '-35rem')
        }
                                                                                                                                                               
        // change font size of the root html element
        document.querySelector('html').style.fontSize=fontSize;
    })

})

// change primary colors

const removeClassActiveColor=()=>{
    colorPalette.forEach(color=>{
        color.classList.remove('activeColor')
    })
}

colorPalette.forEach(color=>{
    
    color.addEventListener('click',()=>{
        let primaryHue;
        removeClassActiveColor()
        color.classList.add('activeColor')
        if(color.classList.contains('color-1')){
            primaryHue = '#6b4ce6';//#6b4ce6
        }else if(color.classList.contains('color-2')){
            primaryHue = '#e6d14c';//#e6d14c
        }else if(color.classList.contains('color-3')){
            primaryHue = '#e64c61';//#e64c61
        }else if(color.classList.contains('color-4')){
            primaryHue = '#4ce69e';//#4ce69e
        }else if(color.classList.contains('color-5')){
            primaryHue = '#4cade6';//#4cade6
        }
        root.style.setProperty('--primary-color-hue',primaryHue)
    })
})


const removeClassActive=()=>{
    colorBackground.forEach(color=>{
        color.classList.remove('active')
    })
}

colorBackground.forEach(color=>{
    color.addEventListener('click',()=>{
        removeClassActive()
        color.classList.toggle('active');
        let corBackground;
        let corElementos;
        let fontcolors;
        if(color.classList.contains('bg-1')){
            
            corBackground = '#f0eef6'
            corElementos= '#ffffff'
            fontcolors='#000000'
        }else  if(color.classList.contains('bg-2')){
            
            corBackground = '#241e38'
            corElementos= '#2d2546'
            fontcolors='#ffffff'
        }else  if(color.classList.contains('bg-3')){
            
            corBackground ='#000000' 
            corElementos= '#131313'
            fontcolors='#ffffff'
        }
        
        root.style.setProperty('--background-body',corBackground)
        root.style.setProperty('--fontColor',fontcolors)
        root.style.setProperty('--background-elements',corElementos)
    })
})