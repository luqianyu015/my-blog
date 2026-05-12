 document.querySelectorAll('.menu-title').forEach(title => {
            title.addEventListener('click', () => {
                const sub = title.nextElementSibling
                if (sub) {
                    title.classList.toggle('open')
                    sub.classList.toggle('open')
                }
            })
        })