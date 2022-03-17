const header = document.querySelector('#header')
const title = document.querySelector('#title')
const excerpt = document.querySelector('#excerpt')
const profile_img = document.querySelector('#profile_img')
const name = document.querySelector('#name')
const date = document.querySelector('#date')

const animated_bgs = document.querySelectorAll('.animated-bg')
const animated_bg_texts = document.querySelectorAll('.animated-bg-text')

setTimeout(getData, 3000)

function getData() {
    header.innerHTML = '<img src="https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2102&q=80" alt="" />'
    title.innerHTML = 'Hello There!'
    excerpt.innerHTML = 'Experience this cool content placeholder! Simple & Dope.'
    profile_img.innerHTML = '<img src="https://pm1.narvii.com/7309/b8b859b99ca7a565c464c4193d9cc9f7d36ce3ear1-250-250v2_128.jpg" alt="">'
    name.innerHTML = 'Mia Smoak'
    date.innerHTML = 'Dec 10th, 2021'

    animated_bgs.forEach(bg => bg.classList.remove('animated-bg'))
    animated_bg_texts.forEach(bg => bg.classList.remove('animated-bg-text'))
}

